import { describe, expect, it, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user-123",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "custom",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return { ctx };
}

describe("Fantasy Cricket API", () => {
  describe("getUpcomingMatches", () => {
    it("should return upcoming matches from Cricket API", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const matches = await caller.fantasy.getUpcomingMatches();

      expect(matches).toBeDefined();
      expect(Array.isArray(matches)).toBe(true);
      
      if (matches.length > 0) {
        const match = matches[0];
        expect(match).toHaveProperty("id");
        expect(match).toHaveProperty("name");
        expect(match).toHaveProperty("matchType");
        expect(match).toHaveProperty("status");
        expect(match).toHaveProperty("venue");
        expect(match).toHaveProperty("dateTimeGMT");
        expect(match).toHaveProperty("teamInfo");
        expect(Array.isArray(match.teamInfo)).toBe(true);
      }
    }, 10000);
  });

  describe("getLiveMatches", () => {
    it("should return live matches from Cricket API", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const matches = await caller.fantasy.getLiveMatches();

      expect(matches).toBeDefined();
      expect(Array.isArray(matches)).toBe(true);
      
      if (matches.length > 0) {
        const match = matches[0];
        expect(match).toHaveProperty("id");
        expect(match).toHaveProperty("name");
        expect(match).toHaveProperty("status");
        expect(match.status).not.toBe("Upcoming");
      }
    }, 10000);
  });

  describe("getAllFantasyMatches", () => {
    it("should return all fantasy-enabled matches", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const matches = await caller.fantasy.getAllFantasyMatches();

      expect(matches).toBeDefined();
      expect(Array.isArray(matches)).toBe(true);
    }, 10000);
  });

  describe("getMatchSquad", () => {
    it("should return squad for a valid match ID", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      // First get a match
      const matches = await caller.fantasy.getUpcomingMatches();
      
      if (matches.length > 0) {
        const matchId = matches[0].id;
        const squad = await caller.fantasy.getMatchSquad({ matchId });

        expect(squad).toBeDefined();
        expect(Array.isArray(squad)).toBe(true);
        
        if (squad.length > 0) {
          const team = squad[0];
          expect(team).toHaveProperty("teamName");
          expect(team).toHaveProperty("players");
          expect(Array.isArray(team.players)).toBe(true);
          
          if (team.players.length > 0) {
            const player = team.players[0];
            expect(player).toHaveProperty("id");
            expect(player).toHaveProperty("name");
            expect(player).toHaveProperty("role");
          }
        }
      }
    }, 15000);
  });

  describe("getMyTeams", () => {
    it("should return empty array for new user", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const teams = await caller.fantasy.getMyTeams();

      expect(teams).toBeDefined();
      expect(Array.isArray(teams)).toBe(true);
    });
  });

  describe("createTeam", () => {
    it("should reject team with wrong number of players", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.fantasy.createTeam({
          matchId: "test-match",
          matchName: "Test Match",
          teamName: "Test Team",
          captainId: "player1",
          viceCaptainId: "player2",
          players: [
            {
              playerId: "player1",
              playerName: "Player 1",
              role: "Batsman",
              credits: 10,
            },
          ],
        })
      ).rejects.toThrow("Team must have exactly 11 players");
    });

    it("should reject team exceeding credit limit", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const players = Array.from({ length: 11 }, (_, i) => ({
        playerId: `player${i + 1}`,
        playerName: `Player ${i + 1}`,
        role: "Batsman",
        credits: 15, // Total will be 165, exceeds 100
      }));

      await expect(
        caller.fantasy.createTeam({
          matchId: "test-match",
          matchName: "Test Match",
          teamName: "Test Team",
          captainId: "player1",
          viceCaptainId: "player2",
          players,
        })
      ).rejects.toThrow("Total credits cannot exceed 100");
    });
  });

  describe("getMatchLeaderboard", () => {
    it("should return leaderboard for a match", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const leaderboard = await caller.fantasy.getMatchLeaderboard({
        matchId: "test-match",
        limit: 10,
      });

      expect(leaderboard).toBeDefined();
      expect(Array.isArray(leaderboard)).toBe(true);
    });
  });
});
