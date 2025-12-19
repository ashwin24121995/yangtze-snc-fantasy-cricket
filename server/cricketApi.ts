import axios from "axios";
import { ENV } from "./_core/env";

const CRICKET_API_BASE = "https://api.cricapi.com/v1";
const API_KEY = process.env.CRICKET_API_KEY || "";

export interface TeamInfo {
  name: string;
  shortname: string;
  img: string;
}

export interface CricketMatch {
  id: string;
  name: string;
  matchType: string;
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo: TeamInfo[];
  score: any[];
  series_id: string;
  fantasyEnabled: boolean;
  bbbEnabled: boolean;
  hasSquad: boolean;
  matchStarted: boolean;
  matchEnded: boolean;
}

export interface Player {
  id: string;
  name: string;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
  country: string;
  playerImg: string;
}

export interface TeamSquad {
  teamName: string;
  shortname: string;
  img: string;
  players: Player[];
}

export interface PlayerPoints {
  id: string;
  name: string;
  points: number;
  allnames?: string[];
}

export interface InningPoints {
  inning: string;
  batting: PlayerPoints[];
}

export interface MatchPointsResponse {
  apikey: string;
  data: {
    innings: InningPoints[];
  };
}

/**
 * Get current matches (upcoming and live)
 */
export async function getCurrentMatches(offset: number = 0): Promise<CricketMatch[]> {
  try {
    const response = await axios.get(`${CRICKET_API_BASE}/currentMatches`, {
      params: {
        apikey: API_KEY,
        offset,
      },
    });

    if (response.data && response.data.data) {
      return response.data.data as CricketMatch[];
    }
    return [];
  } catch (error) {
    console.error("Error fetching current matches:", error);
    throw error;
  }
}

/**
 * Get fantasy-enabled matches only (for user selection)
 */
export async function getFantasyMatches(): Promise<CricketMatch[]> {
  const matches = await getCurrentMatches();
  
  // Filter for fantasy-enabled matches that haven't ended
  return matches.filter(
    (match) =>
      match.fantasyEnabled &&
      match.hasSquad &&
      !match.matchEnded
  );
}

/**
 * Get upcoming matches (not started yet)
 */
export async function getUpcomingMatches(): Promise<CricketMatch[]> {
  const matches = await getFantasyMatches();
  
  return matches.filter(
    (match) => !match.matchStarted && !match.matchEnded
  );
}

/**
 * Get live matches (started but not ended)
 */
export async function getLiveMatches(): Promise<CricketMatch[]> {
  const matches = await getFantasyMatches();
  
  return matches.filter(
    (match) => match.matchStarted && !match.matchEnded
  );
}

/**
 * Get match squad (players for both teams)
 */
export async function getMatchSquad(matchId: string): Promise<TeamSquad[]> {
  try {
    const response = await axios.get(`${CRICKET_API_BASE}/match_squad`, {
      params: {
        apikey: API_KEY,
        id: matchId,
      },
    });

    if (response.data && response.data.data) {
      return response.data.data as TeamSquad[];
    }
    return [];
  } catch (error) {
    console.error("Error fetching match squad:", error);
    throw error;
  }
}

/**
 * Get fantasy match points for all players
 */
export async function getMatchPoints(matchId: string, ruleset: number = 0): Promise<InningPoints[]> {
  try {
    const response = await axios.get(`${CRICKET_API_BASE}/match_points`, {
      params: {
        apikey: API_KEY,
        id: matchId,
        ruleset,
      },
    });

    if (response.data && response.data.data && response.data.data.innings) {
      return response.data.data.innings as InningPoints[];
    }
    return [];
  } catch (error) {
    console.error("Error fetching match points:", error);
    throw error;
  }
}

/**
 * Get match info (detailed match information)
 */
export async function getMatchInfo(matchId: string) {
  try {
    const response = await axios.get(`${CRICKET_API_BASE}/match_info`, {
      params: {
        apikey: API_KEY,
        id: matchId,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching match info:", error);
    throw error;
  }
}
