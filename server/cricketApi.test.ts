import { describe, expect, it } from "vitest";
import { getCurrentMatches } from "./cricketApi";

describe("Cricket API Integration", () => {
  it("should successfully fetch current matches with valid API key", async () => {
    const matches = await getCurrentMatches(0);
    
    // API should return an array (even if empty)
    expect(Array.isArray(matches)).toBe(true);
    
    // If matches exist, validate structure
    if (matches.length > 0) {
      const firstMatch = matches[0];
      expect(firstMatch).toHaveProperty("id");
      expect(firstMatch).toHaveProperty("name");
      expect(firstMatch).toHaveProperty("matchType");
      expect(firstMatch).toHaveProperty("teams");
      expect(Array.isArray(firstMatch.teams)).toBe(true);
    }
  }, 10000); // 10 second timeout for API call
});
