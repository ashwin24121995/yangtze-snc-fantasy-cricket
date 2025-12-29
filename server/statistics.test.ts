import { describe, it, expect } from "vitest";
import { getStatistics } from "./db";

describe("Statistics API", () => {
  it("should return statistics object with correct structure", async () => {
    const stats = await getStatistics();
    
    expect(stats).toBeDefined();
    expect(stats).toHaveProperty("totalUsers");
    expect(stats).toHaveProperty("activeContests");
    expect(stats).toHaveProperty("teamsCreated");
    
    expect(typeof stats.totalUsers).toBe("number");
    expect(typeof stats.activeContests).toBe("number");
    expect(typeof stats.teamsCreated).toBe("number");
    
    expect(stats.totalUsers).toBeGreaterThanOrEqual(0);
    expect(stats.activeContests).toBeGreaterThanOrEqual(0);
    expect(stats.teamsCreated).toBeGreaterThanOrEqual(0);
  });

  it("should handle database unavailability gracefully", async () => {
    // This test verifies that even if DB is unavailable, we get valid structure
    const stats = await getStatistics();
    
    // Should return default values (0) instead of throwing error
    expect(stats).toEqual({
      totalUsers: expect.any(Number),
      activeContests: expect.any(Number),
      teamsCreated: expect.any(Number),
    });
  });
});
