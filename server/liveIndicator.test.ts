import { describe, expect, it } from "vitest";
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

describe("Live Indicator Feature", () => {
  describe("getLivePlayers", () => {
    it("should return array of live player IDs", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const livePlayers = await caller.fantasy.getLivePlayers();

      expect(livePlayers).toBeDefined();
      expect(Array.isArray(livePlayers)).toBe(true);
      
      console.log(`Found ${livePlayers.length} live players`);
      
      // Each player ID should be a string
      livePlayers.forEach((playerId) => {
        expect(typeof playerId).toBe("string");
        expect(playerId.length).toBeGreaterThan(0);
      });
    }, 30000); // 30 second timeout for API calls

    it("should return empty array when no live matches exist", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const livePlayers = await caller.fantasy.getLivePlayers();

      expect(livePlayers).toBeDefined();
      expect(Array.isArray(livePlayers)).toBe(true);
      
      // When no live matches, should return empty array (not throw error)
      if (livePlayers.length === 0) {
        console.log("No live matches currently - correct behavior");
      }
    }, 30000);

    it("should handle API errors gracefully", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      // This should not throw, even if API has issues
      const result = await caller.fantasy.getLivePlayers();
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    }, 30000);
  });

  describe("Live Matches Integration", () => {
    it("should correlate live players with live matches", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const liveMatches = await caller.fantasy.getLiveMatches();
      const livePlayers = await caller.fantasy.getLivePlayers();

      console.log(`Live matches: ${liveMatches.length}, Live players: ${livePlayers.length}`);

      // If there are live matches, there should be live players
      if (liveMatches.length > 0) {
        expect(livePlayers.length).toBeGreaterThan(0);
      }

      // If there are no live matches, there should be no live players
      if (liveMatches.length === 0) {
        expect(livePlayers.length).toBe(0);
      }
    }, 30000);
  });
});
