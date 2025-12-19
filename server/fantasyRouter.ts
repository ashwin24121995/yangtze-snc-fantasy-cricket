import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import {
  getCurrentMatches,
  getFantasyMatches,
  getLiveMatches,
  getMatchPoints,
  getMatchSquad,
  getUpcomingMatches,
} from "./cricketApi";
import { getDb } from "./db";
import { teamPlayers, teams } from "../drizzle/schema";
import { eq, and, desc } from "drizzle-orm";

export const fantasyRouter = router({
  /**
   * Get all upcoming fantasy matches
   */
  getUpcomingMatches: publicProcedure.query(async () => {
    const matches = await getUpcomingMatches();
    return matches;
  }),

  /**
   * Get all live fantasy matches
   */
  getLiveMatches: publicProcedure.query(async () => {
    const matches = await getLiveMatches();
    return matches;
  }),

  /**
   * Get all fantasy-enabled matches (upcoming + live)
   */
  getAllFantasyMatches: publicProcedure.query(async () => {
    const matches = await getFantasyMatches();
    return matches;
  }),

  /**
   * Get match squad (players for team selection)
   */
  getMatchSquad: publicProcedure
    .input(
      z.object({
        matchId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const squad = await getMatchSquad(input.matchId);
      return squad;
    }),

  /**
   * Create a fantasy team
   */
  createTeam: protectedProcedure
    .input(
      z.object({
        matchId: z.string(),
        matchName: z.string(),
        teamName: z.string(),
        captainId: z.string(),
        viceCaptainId: z.string(),
        players: z.array(
          z.object({
            playerId: z.string(),
            playerName: z.string(),
            role: z.string(),
            credits: z.number(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      // Validate team composition
      if (input.players.length !== 11) {
        throw new Error("Team must have exactly 11 players");
      }

      // Calculate total credits
      const totalCredits = input.players.reduce((sum, p) => sum + p.credits, 0);
      if (totalCredits > 100) {
        throw new Error("Total credits cannot exceed 100");
      }

      // Check if user already has a team for this match
      const existing = await db
        .select()
        .from(teams)
        .where(and(eq(teams.userId, ctx.user.id), eq(teams.apiMatchId, input.matchId)))
        .limit(1);

      if (existing.length > 0) {
        throw new Error("You already have a team for this match");
      }

      // Create team
      const [team] = await db.insert(teams).values({
        userId: ctx.user.id,
        apiMatchId: input.matchId,
        matchName: input.matchName,
        teamName: input.teamName,
        captainApiId: input.captainId,
        viceCaptainApiId: input.viceCaptainId,
        totalCredits,
        points: 0,
      });

      const teamId = team.insertId;

      // Add players to team
      await db.insert(teamPlayers).values(
        input.players.map((player) => ({
          teamId,
          apiPlayerId: player.playerId,
          playerName: player.playerName,
          role: player.role,
          credits: player.credits,
          points: 0,
        }))
      );

      return { success: true, teamId };
    }),

  /**
   * Get user's teams
   */
  getMyTeams: protectedProcedure.query(async ({ ctx }) => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const userTeams = await db
      .select()
      .from(teams)
      .where(eq(teams.userId, ctx.user.id))
      .orderBy(desc(teams.createdAt));

    return userTeams;
  }),

  /**
   * Get team details with players
   */
  getTeamDetails: protectedProcedure
    .input(
      z.object({
        teamId: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const [team] = await db
        .select()
        .from(teams)
        .where(and(eq(teams.id, input.teamId), eq(teams.userId, ctx.user.id)))
        .limit(1);

      if (!team) {
        throw new Error("Team not found");
      }

      const players = await db.select().from(teamPlayers).where(eq(teamPlayers.teamId, input.teamId));

      return {
        team,
        players,
      };
    }),

  /**
   * Get leaderboard for a match
   */
  getMatchLeaderboard: publicProcedure
    .input(
      z.object({
        matchId: z.string(),
        limit: z.number().default(100),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const leaderboard = await db
        .select({
          teamId: teams.id,
          teamName: teams.teamName,
          userName: teams.userId, // Will join with users table
          points: teams.points,
          rank: teams.rank,
        })
        .from(teams)
        .where(eq(teams.apiMatchId, input.matchId))
        .orderBy(desc(teams.points))
        .limit(input.limit);

      return leaderboard;
    }),

  /**
   * Update team points (called by background job during live matches)
   */
  updateTeamPoints: protectedProcedure
    .input(
      z.object({
        matchId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      // Get match points from API
      const innings = await getMatchPoints(input.matchId);

      // Build player points map
      const playerPointsMap = new Map<string, number>();
      innings.forEach((inning) => {
        inning.batting.forEach((player) => {
          playerPointsMap.set(player.id, player.points);
        });
      });

      // Get all teams for this match
      const matchTeams = await db.select().from(teams).where(eq(teams.apiMatchId, input.matchId));

      // Update each team's points
      for (const team of matchTeams) {
        // Get team players
        const players = await db.select().from(teamPlayers).where(eq(teamPlayers.teamId, team.id));

        let totalPoints = 0;

        // Calculate points for each player
        for (const player of players) {
          const apiPoints = playerPointsMap.get(player.apiPlayerId) || 0;
          let finalPoints = apiPoints;

          // Apply captain/vice-captain multipliers
          if (player.apiPlayerId === team.captainApiId) {
            finalPoints = apiPoints * 2;
          } else if (player.apiPlayerId === team.viceCaptainApiId) {
            finalPoints = apiPoints * 1.5;
          }

          totalPoints += finalPoints;

          // Update player points in database
          await db
            .update(teamPlayers)
            .set({ points: Math.round(finalPoints) })
            .where(eq(teamPlayers.id, player.id));
        }

        // Update team total points
        await db.update(teams).set({ points: Math.round(totalPoints) }).where(eq(teams.id, team.id));
      }

      // Calculate ranks
      const rankedTeams = await db
        .select()
        .from(teams)
        .where(eq(teams.apiMatchId, input.matchId))
        .orderBy(desc(teams.points));

      for (let i = 0; i < rankedTeams.length; i++) {
        await db
          .update(teams)
          .set({ rank: i + 1 })
          .where(eq(teams.id, rankedTeams[i].id));
      }

      return { success: true, teamsUpdated: matchTeams.length };
    }),
});
