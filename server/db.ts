import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// Custom authentication helper functions

export async function createUser(user: InsertUser): Promise<number> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(users).values(user);
    return result[0].insertId;
  } catch (error) {
    console.error("[Database] Failed to create user:", error);
    throw error;
  }
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateUserLastSignIn(userId: number): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update user: database not available");
    return;
  }

  try {
    await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, userId));
  } catch (error) {
    console.error("[Database] Failed to update last sign in:", error);
  }
}

// Restricted states for compliance
export const RESTRICTED_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Nagaland",
  "Odisha",
  "Sikkim",
  "Telangana",
];

export function isStateRestricted(state: string): boolean {
  return RESTRICTED_STATES.some(
    (restrictedState) => restrictedState.toLowerCase() === state.toLowerCase()
  );
}

export function calculateAge(dateOfBirth: Date): number {
  const today = new Date();
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  return age;
}

// TODO: add feature queries here as your schema grows.

import { teams } from "../drizzle/schema";
import { count } from "drizzle-orm";

export async function getStatistics() {
  const db = await getDb();
  if (!db) {
    // Return default values if database is not available
    return {
      totalUsers: 0,
      activeContests: 0,
      teamsCreated: 0,
    };
  }

  try {
    // Get total users count
    const userCountResult = await db.select({ count: count() }).from(users);
    const totalUsers = userCountResult[0]?.count || 0;

    // Get active contests (unique matches with teams)
    const activeContestsResult = await db
      .selectDistinct({ apiMatchId: teams.apiMatchId })
      .from(teams);
    const activeContests = activeContestsResult.length;

    // Get total teams created
    const teamsCountResult = await db.select({ count: count() }).from(teams);
    const teamsCreated = teamsCountResult[0]?.count || 0;

    return {
      totalUsers,
      activeContests,
      teamsCreated,
    };
  } catch (error) {
    console.error("[Database] Failed to get statistics:", error);
    return {
      totalUsers: 0,
      activeContests: 0,
      teamsCreated: 0,
    };
  }
}
