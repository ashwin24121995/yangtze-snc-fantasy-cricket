import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { contests, contestEntries, teams } from "../drizzle/schema";
import { eq, and, desc, sql } from "drizzle-orm";

export const contestRouter = router({
  /**
   * Get all contests for a specific match
   */
  getContestsByMatch: publicProcedure
    .input(
      z.object({
        matchId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const matchContests = await db
        .select()
        .from(contests)
        .where(eq(contests.apiMatchId, input.matchId))
        .orderBy(desc(contests.maxEntries));

      return matchContests;
    }),

  /**
   * Create a new contest (admin only or auto-generated)
   */
  createContest: protectedProcedure
    .input(
      z.object({
        matchId: z.string(),
        contestName: z.string(),
        maxEntries: z.number().default(1000),
        description: z.string().optional(),
        startTime: z.date(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const [contest] = await db.insert(contests).values({
        apiMatchId: input.matchId,
        contestName: input.contestName,
        maxEntries: input.maxEntries,
        currentEntries: 0,
        status: "upcoming",
        startTime: input.startTime,
        description: input.description,
      });

      return { success: true, contestId: contest.insertId };
    }),

  /**
   * Join a contest with a team (Free - no entry fee)
   */
  joinContest: protectedProcedure
    .input(
      z.object({
        contestId: z.number(),
        teamId: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      // Verify team belongs to user
      const [team] = await db
        .select()
        .from(teams)
        .where(and(eq(teams.id, input.teamId), eq(teams.userId, ctx.user.id)))
        .limit(1);

      if (!team) {
        throw new Error("Team not found or does not belong to you");
      }

      // Get contest details
      const [contest] = await db.select().from(contests).where(eq(contests.id, input.contestId)).limit(1);

      if (!contest) {
        throw new Error("Contest not found");
      }

      // Check if contest is full
      if (contest.currentEntries >= contest.maxEntries) {
        throw new Error("Contest is full");
      }

      // Check if user already joined with this team
      const existing = await db
        .select()
        .from(contestEntries)
        .where(and(eq(contestEntries.contestId, input.contestId), eq(contestEntries.teamId, input.teamId)))
        .limit(1);

      if (existing.length > 0) {
        throw new Error("You have already joined this contest with this team");
      }

      // Verify match IDs match
      if (team.apiMatchId !== contest.apiMatchId) {
        throw new Error("Team and contest are for different matches");
      }

      // Join contest
      await db.insert(contestEntries).values({
        contestId: input.contestId,
        userId: ctx.user.id,
        teamId: input.teamId,
        points: team.points,
        rank: null,
      });

      // Increment contest entries count
      await db
        .update(contests)
        .set({ currentEntries: sql`${contests.currentEntries} + 1` })
        .where(eq(contests.id, input.contestId));

      return { success: true, message: "Successfully joined contest!" };
    }),

  /**
   * Get user's joined contests
   */
  getMyContests: protectedProcedure.query(async ({ ctx }) => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    const userContests = await db
      .select({
        entryId: contestEntries.id,
        contestId: contestEntries.contestId,
        contestName: contests.contestName,
        matchId: contests.apiMatchId,
        teamId: contestEntries.teamId,
        teamName: teams.teamName,
        points: contestEntries.points,
        rank: contestEntries.rank,
        maxEntries: contests.maxEntries,
        currentEntries: contests.currentEntries,
        status: contests.status,
        createdAt: contestEntries.createdAt,
      })
      .from(contestEntries)
      .innerJoin(contests, eq(contestEntries.contestId, contests.id))
      .innerJoin(teams, eq(contestEntries.teamId, teams.id))
      .where(eq(contestEntries.userId, ctx.user.id))
      .orderBy(desc(contestEntries.createdAt));

    return userContests;
  }),

  /**
   * Get contest leaderboard
   */
  getContestLeaderboard: publicProcedure
    .input(
      z.object({
        contestId: z.number(),
        limit: z.number().default(100),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const leaderboard = await db
        .select({
          entryId: contestEntries.id,
          userId: contestEntries.userId,
          teamId: contestEntries.teamId,
          teamName: teams.teamName,
          points: contestEntries.points,
          rank: contestEntries.rank,
        })
        .from(contestEntries)
        .innerJoin(teams, eq(contestEntries.teamId, teams.id))
        .where(eq(contestEntries.contestId, input.contestId))
        .orderBy(desc(contestEntries.points))
        .limit(input.limit);

      return leaderboard;
    }),

  /**
   * Get user's teams available for a match (for contest entry)
   */
  getAvailableTeamsForMatch: protectedProcedure
    .input(
      z.object({
        matchId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      const userTeams = await db
        .select()
        .from(teams)
        .where(and(eq(teams.userId, ctx.user.id), eq(teams.apiMatchId, input.matchId)))
        .orderBy(desc(teams.createdAt));

      return userTeams;
    }),

  /**
   * Update contest entry points (called by background job)
   */
  updateContestPoints: protectedProcedure
    .input(
      z.object({
        matchId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      // Get all contests for this match
      const matchContests = await db.select().from(contests).where(eq(contests.apiMatchId, input.matchId));

      for (const contest of matchContests) {
        // Get all entries for this contest
        const entries = await db
          .select({
            entryId: contestEntries.id,
            teamId: contestEntries.teamId,
            teamPoints: teams.points,
          })
          .from(contestEntries)
          .innerJoin(teams, eq(contestEntries.teamId, teams.id))
          .where(eq(contestEntries.contestId, contest.id));

        // Update points for each entry
        for (const entry of entries) {
          await db
            .update(contestEntries)
            .set({ points: entry.teamPoints })
            .where(eq(contestEntries.id, entry.entryId));
        }

        // Calculate and update ranks
        const rankedEntries = await db
          .select()
          .from(contestEntries)
          .where(eq(contestEntries.contestId, contest.id))
          .orderBy(desc(contestEntries.points));

        for (let i = 0; i < rankedEntries.length; i++) {
          await db
            .update(contestEntries)
            .set({ rank: i + 1 })
            .where(eq(contestEntries.id, rankedEntries[i].id));
        }
      }

      return { success: true, contestsUpdated: matchContests.length };
    }),
});
