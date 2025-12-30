import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { appRouter } from "./routers";
import { getDb } from "./db";
import { users, contests, contestEntries, teams, teamPlayers } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

describe("Contest System", () => {
  let testUserId: number;
  let testMatchId: string;
  let testTeamId: number;
  let testContestId: number;

  beforeAll(async () => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    // Create test user
    const hashedPassword = await bcrypt.hash("testpassword123", 10);
    const [user] = await db.insert(users).values({
      name: "Contest Test User",
      email: `contest-test-${Date.now()}@test.com`,
      passwordHash: hashedPassword,
      dateOfBirth: new Date("1995-01-01"),
      state: "Test State",
      role: "user",
    });
    testUserId = user.insertId;

    // Create test match ID
    testMatchId = `test-match-${Date.now()}`;

    // Create test team
    const [team] = await db.insert(teams).values({
      userId: testUserId,
      apiMatchId: testMatchId,
      matchName: "Test Match A vs Test Match B",
      teamName: "Contest Test Team",
      captainApiId: "player1",
      viceCaptainApiId: "player2",
      totalCredits: 100,
      points: 150,
    });
    testTeamId = team.insertId;

    // Add players to team
    await db.insert(teamPlayers).values([
      {
        teamId: testTeamId,
        apiPlayerId: "player1",
        playerName: "Player One",
        role: "Batsman",
        credits: 10,
        points: 50,
      },
      {
        teamId: testTeamId,
        apiPlayerId: "player2",
        playerName: "Player Two",
        role: "Bowler",
        credits: 9,
        points: 40,
      },
    ]);
  });

  afterAll(async () => {
    const db = await getDb();
    if (!db) return;

    // Cleanup: delete test data
    if (testContestId) {
      await db.delete(contestEntries).where(eq(contestEntries.contestId, testContestId));
      await db.delete(contests).where(eq(contests.id, testContestId));
    }
    if (testTeamId) {
      await db.delete(teamPlayers).where(eq(teamPlayers.teamId, testTeamId));
      await db.delete(teams).where(eq(teams.id, testTeamId));
    }
    if (testUserId) {
      await db.delete(users).where(eq(users.id, testUserId));
    }
  });

  it("should create a contest successfully", async () => {
    const caller = appRouter.createCaller({
      user: { id: testUserId, email: "test@test.com", name: "Test User", role: "user" },
    });

    const result = await caller.contest.createContest({
      matchId: testMatchId,
      contestName: "Free Educational Contest",
      maxEntries: 100,
      description: "Learn fantasy cricket with this free contest",
      startTime: new Date(Date.now() + 3600000), // 1 hour from now
    });

    expect(result.success).toBe(true);
    expect(result.contestId).toBeDefined();
    testContestId = result.contestId;
  });

  it("should retrieve contests by match ID", async () => {
    const caller = appRouter.createCaller({
      user: null,
    });

    const contests = await caller.contest.getContestsByMatch({
      matchId: testMatchId,
    });

    expect(contests).toBeDefined();
    expect(Array.isArray(contests)).toBe(true);
    expect(contests.length).toBeGreaterThan(0);
    expect(contests[0].contestName).toBe("Free Educational Contest");
    expect(contests[0].maxEntries).toBe(100);
  });

  it("should allow user to join a contest with their team", async () => {
    const caller = appRouter.createCaller({
      user: { id: testUserId, email: "test@test.com", name: "Test User", role: "user" },
    });

    const result = await caller.contest.joinContest({
      contestId: testContestId,
      teamId: testTeamId,
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Successfully joined contest");
  });

  it("should prevent joining the same contest twice with the same team", async () => {
    const caller = appRouter.createCaller({
      user: { id: testUserId, email: "test@test.com", name: "Test User", role: "user" },
    });

    await expect(
      caller.contest.joinContest({
        contestId: testContestId,
        teamId: testTeamId,
      })
    ).rejects.toThrow("You have already joined this contest with this team");
  });

  it("should retrieve user's joined contests", async () => {
    const caller = appRouter.createCaller({
      user: { id: testUserId, email: "test@test.com", name: "Test User", role: "user" },
    });

    const myContests = await caller.contest.getMyContests();

    expect(myContests).toBeDefined();
    expect(Array.isArray(myContests)).toBe(true);
    expect(myContests.length).toBeGreaterThan(0);
    expect(myContests[0].contestName).toBe("Free Educational Contest");
    expect(myContests[0].teamName).toBe("Contest Test Team");
  });

  it("should retrieve contest leaderboard", async () => {
    const caller = appRouter.createCaller({
      user: null,
    });

    const leaderboard = await caller.contest.getContestLeaderboard({
      contestId: testContestId,
      limit: 100,
    });

    expect(leaderboard).toBeDefined();
    expect(Array.isArray(leaderboard)).toBe(true);
    expect(leaderboard.length).toBeGreaterThan(0);
    expect(leaderboard[0].teamName).toBe("Contest Test Team");
  });

  it("should retrieve available teams for a match", async () => {
    const caller = appRouter.createCaller({
      user: { id: testUserId, email: "test@test.com", name: "Test User", role: "user" },
    });

    const availableTeams = await caller.contest.getAvailableTeamsForMatch({
      matchId: testMatchId,
    });

    expect(availableTeams).toBeDefined();
    expect(Array.isArray(availableTeams)).toBe(true);
    expect(availableTeams.length).toBeGreaterThan(0);
    expect(availableTeams[0].teamName).toBe("Contest Test Team");
  });

  it("should prevent joining contest with a team from a different match", async () => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    // Create a contest for a different match
    const differentMatchId = `different-match-${Date.now()}`;
    const [differentContest] = await db.insert(contests).values({
      apiMatchId: differentMatchId,
      contestName: "Different Match Contest",
      maxEntries: 50,
      status: "upcoming",
      startTime: new Date(Date.now() + 3600000),
    });

    const caller = appRouter.createCaller({
      user: { id: testUserId, email: "test@test.com", name: "Test User", role: "user" },
    });

    await expect(
      caller.contest.joinContest({
        contestId: differentContest.insertId,
        teamId: testTeamId,
      })
    ).rejects.toThrow("Team and contest are for different matches");

    // Cleanup
    await db.delete(contests).where(eq(contests.id, differentContest.insertId));
  });

  it("should prevent joining a full contest", async () => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");

    // Create a contest with max 1 entry (already filled by previous test)
    const [fullContest] = await db.insert(contests).values({
      apiMatchId: testMatchId,
      contestName: "Full Contest",
      maxEntries: 1,
      currentEntries: 1, // Already full
      status: "upcoming",
      startTime: new Date(Date.now() + 3600000),
    });

    // Create another team for testing
    const [anotherTeam] = await db.insert(teams).values({
      userId: testUserId,
      apiMatchId: testMatchId,
      matchName: "Test Match A vs Test Match B",
      teamName: "Another Test Team",
      captainApiId: "player3",
      viceCaptainApiId: "player4",
      totalCredits: 95,
      points: 100,
    });

    const caller = appRouter.createCaller({
      user: { id: testUserId, email: "test@test.com", name: "Test User", role: "user" },
    });

    await expect(
      caller.contest.joinContest({
        contestId: fullContest.insertId,
        teamId: anotherTeam.insertId,
      })
    ).rejects.toThrow("Contest is full");

    // Cleanup
    await db.delete(contests).where(eq(contests.id, fullContest.insertId));
    await db.delete(teams).where(eq(teams.id, anotherTeam.insertId));
  });
});
