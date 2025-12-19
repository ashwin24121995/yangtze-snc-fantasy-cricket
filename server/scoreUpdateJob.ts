import { getLiveMatches, getMatchPoints } from "./cricketApi";
import { getDb } from "./db";
import { teams, teamPlayers } from "../drizzle/schema";
import { eq, desc } from "drizzle-orm";

/**
 * Background job to update team points for all live matches
 * This should be called periodically (e.g., every 2-5 minutes) during match hours
 */
export async function updateLiveMatchScores() {
  console.log("[ScoreUpdateJob] Starting live score update...");
  
  try {
    // Get all currently live matches
    const liveMatches = await getLiveMatches();
    console.log(`[ScoreUpdateJob] Found ${liveMatches.length} live matches`);

    if (liveMatches.length === 0) {
      console.log("[ScoreUpdateJob] No live matches, skipping update");
      return {
        success: true,
        matchesProcessed: 0,
        teamsUpdated: 0,
      };
    }

    const db = await getDb();
    if (!db) {
      console.error("[ScoreUpdateJob] Database not available");
      return {
        success: false,
        error: "Database not available",
      };
    }

    let totalTeamsUpdated = 0;

    // Process each live match
    for (const match of liveMatches) {
      try {
        console.log(`[ScoreUpdateJob] Processing match: ${match.name} (${match.id})`);

        // Get match points from API
        const innings = await getMatchPoints(match.id);
        
        if (!innings || innings.length === 0) {
          console.log(`[ScoreUpdateJob] No innings data for match ${match.id}`);
          continue;
        }

        // Build player points map from all innings
        const playerPointsMap = new Map<string, number>();
        
        innings.forEach((inning) => {
          // Process batting (only batting data is available in the API)
          if (inning.batting) {
            inning.batting.forEach((player) => {
              const currentPoints = playerPointsMap.get(player.id) || 0;
              playerPointsMap.set(player.id, currentPoints + player.points);
            });
          }
        });

        console.log(`[ScoreUpdateJob] Found points for ${playerPointsMap.size} players`);

        // Get all teams for this match
        const matchTeams = await db
          .select()
          .from(teams)
          .where(eq(teams.apiMatchId, match.id));

        console.log(`[ScoreUpdateJob] Found ${matchTeams.length} teams for match ${match.id}`);

        // Update each team's points
        for (const team of matchTeams) {
          try {
            // Get team players
            const players = await db
              .select()
              .from(teamPlayers)
              .where(eq(teamPlayers.teamId, team.id));

            let totalPoints = 0;

            // Calculate points for each player
            for (const player of players) {
              const apiPoints = playerPointsMap.get(player.apiPlayerId) || 0;
              let finalPoints = apiPoints;

              // Apply captain/vice-captain multipliers
              if (player.apiPlayerId === team.captainApiId) {
                finalPoints = apiPoints * 2; // Captain gets 2x points
              } else if (player.apiPlayerId === team.viceCaptainApiId) {
                finalPoints = apiPoints * 1.5; // Vice-captain gets 1.5x points
              }

              totalPoints += finalPoints;

              // Update player points in database
              await db
                .update(teamPlayers)
                .set({ points: Math.round(finalPoints) })
                .where(eq(teamPlayers.id, player.id));
            }

            // Update team total points
            await db
              .update(teams)
              .set({ 
                points: Math.round(totalPoints),
                updatedAt: new Date(),
              })
              .where(eq(teams.id, team.id));

            totalTeamsUpdated++;
          } catch (teamError) {
            console.error(`[ScoreUpdateJob] Error updating team ${team.id}:`, teamError);
          }
        }

        // Calculate and update ranks for this match
        const rankedTeams = await db
          .select()
          .from(teams)
          .where(eq(teams.apiMatchId, match.id))
          .orderBy(desc(teams.points));

        for (let i = 0; i < rankedTeams.length; i++) {
          await db
            .update(teams)
            .set({ rank: i + 1 })
            .where(eq(teams.id, rankedTeams[i].id));
        }

        console.log(`[ScoreUpdateJob] Updated ${matchTeams.length} teams for match ${match.id}`);
      } catch (matchError) {
        console.error(`[ScoreUpdateJob] Error processing match ${match.id}:`, matchError);
      }
    }

    console.log(`[ScoreUpdateJob] Completed. Processed ${liveMatches.length} matches, updated ${totalTeamsUpdated} teams`);

    return {
      success: true,
      matchesProcessed: liveMatches.length,
      teamsUpdated: totalTeamsUpdated,
    };
  } catch (error) {
    console.error("[ScoreUpdateJob] Fatal error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Start the score update job with a specified interval
 * @param intervalMinutes - How often to run the job (in minutes)
 */
export function startScoreUpdateJob(intervalMinutes: number = 5) {
  console.log(`[ScoreUpdateJob] Starting score update job (interval: ${intervalMinutes} minutes)`);
  
  // Run immediately on start
  updateLiveMatchScores();
  
  // Then run periodically
  const intervalMs = intervalMinutes * 60 * 1000;
  const intervalId = setInterval(() => {
    updateLiveMatchScores();
  }, intervalMs);

  return intervalId;
}
