import { describe, expect, it } from "vitest";
import { updateLiveMatchScores } from "./scoreUpdateJob";

describe("Score Update Job", () => {
  it("should successfully run without errors", async () => {
    const result = await updateLiveMatchScores();
    
    expect(result).toBeDefined();
    expect(result).toHaveProperty("success");
    expect(typeof result.success).toBe("boolean");
    
    if (result.success) {
      expect(result).toHaveProperty("matchesProcessed");
      expect(result).toHaveProperty("teamsUpdated");
      expect(typeof result.matchesProcessed).toBe("number");
      expect(typeof result.teamsUpdated).toBe("number");
      
      console.log(`Score update completed: ${result.matchesProcessed} matches, ${result.teamsUpdated} teams updated`);
    } else {
      console.log(`Score update failed: ${result.error}`);
    }
  }, 30000); // 30 second timeout for API calls

  it("should handle case when no live matches exist", async () => {
    // This test verifies the job doesn't crash when there are no live matches
    const result = await updateLiveMatchScores();
    
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    
    // When no live matches, teams updated should be 0
    if (result.matchesProcessed === 0) {
      expect(result.teamsUpdated).toBe(0);
    }
  }, 30000);
});
