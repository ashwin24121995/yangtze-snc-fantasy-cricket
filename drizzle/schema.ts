import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** User's full name */
  name: varchar("name", { length: 255 }).notNull(),
  /** Unique email address for login */
  email: varchar("email", { length: 320 }).notNull().unique(),
  /** Hashed password */
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  /** User's date of birth for age verification (18+) */
  dateOfBirth: timestamp("dateOfBirth").notNull(),
  /** User's state/region for compliance checking */
  state: varchar("state", { length: 100 }).notNull(),
  /** Phone number (optional) */
  phone: varchar("phone", { length: 20 }),
  /** User role */
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  /** Email verification status */
  emailVerified: int("emailVerified").default(0).notNull(), // 0 = not verified, 1 = verified
  /** Account status */
  isActive: int("isActive").default(1).notNull(), // 0 = inactive/banned, 1 = active
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Cricket Matches Table (cached from API)
export const matches = mysqlTable("matches", {
  id: int("id").autoincrement().primaryKey(),
  apiMatchId: varchar("apiMatchId", { length: 255 }).notNull().unique(), // External API match ID
  matchName: varchar("matchName", { length: 255 }).notNull(),
  team1: varchar("team1", { length: 100 }).notNull(),
  team2: varchar("team2", { length: 100 }).notNull(),
  matchDate: timestamp("matchDate").notNull(),
  venue: varchar("venue", { length: 255 }),
  matchType: varchar("matchType", { length: 50 }), // T20, ODI, Test
  status: mysqlEnum("status", ["upcoming", "live", "completed", "cancelled"]).default("upcoming").notNull(),
  fantasyEnabled: int("fantasyEnabled").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// Cricket Players Table (cached from API)
export const players = mysqlTable("players", {
  id: int("id").autoincrement().primaryKey(),
  apiPlayerId: varchar("apiPlayerId", { length: 255 }).notNull().unique(), // External API player ID
  playerName: varchar("playerName", { length: 255 }).notNull(),
  team: varchar("team", { length: 100 }).notNull(),
  role: varchar("role", { length: 50 }).notNull(), // Batsman, Bowler, All-rounder, Wicket-keeper
  battingStyle: varchar("battingStyle", { length: 100 }),
  bowlingStyle: varchar("bowlingStyle", { length: 100 }),
  country: varchar("country", { length: 100 }),
  credits: int("credits").default(10).notNull(), // Fantasy points cost (7-10)
  imageUrl: text("imageUrl"),
  isActive: int("isActive").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// User Fantasy Teams Table
export const teams = mysqlTable("teams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  apiMatchId: varchar("apiMatchId", { length: 255 }).notNull(), // External API match ID
  matchName: varchar("matchName", { length: 255 }).notNull(),
  teamName: varchar("teamName", { length: 255 }).notNull(),
  captainApiId: varchar("captainApiId", { length: 255 }).notNull(), // API Player ID
  viceCaptainApiId: varchar("viceCaptainApiId", { length: 255 }).notNull(), // API Player ID
  totalCredits: int("totalCredits").default(100).notNull(),
  points: int("points").default(0).notNull(),
  rank: int("rank"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// Team Players Junction Table
export const teamPlayers = mysqlTable("teamPlayers", {
  id: int("id").autoincrement().primaryKey(),
  teamId: int("teamId").notNull().references(() => teams.id, { onDelete: "cascade" }),
  apiPlayerId: varchar("apiPlayerId", { length: 255 }).notNull(), // External API player ID
  playerName: varchar("playerName", { length: 255 }).notNull(),
  role: varchar("role", { length: 50 }).notNull(),
  credits: int("credits").default(10).notNull(),
  points: int("points").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

// Player Performance Table (cached from API for scoring)
export const playerPerformances = mysqlTable("playerPerformances", {
  id: int("id").autoincrement().primaryKey(),
  apiMatchId: varchar("apiMatchId", { length: 255 }).notNull(),
  apiPlayerId: varchar("apiPlayerId", { length: 255 }).notNull(),
  playerName: varchar("playerName", { length: 255 }).notNull(),
  points: int("points").default(0).notNull(),
  lastUpdated: timestamp("lastUpdated").defaultNow().onUpdateNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Match = typeof matches.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;
export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;
export type Team = typeof teams.$inferSelect;
export type InsertTeam = typeof teams.$inferInsert;
export type TeamPlayer = typeof teamPlayers.$inferSelect;
export type InsertTeamPlayer = typeof teamPlayers.$inferInsert;
export type PlayerPerformance = typeof playerPerformances.$inferSelect;
export type InsertPlayerPerformance = typeof playerPerformances.$inferInsert;

// Contests Table (Free-to-play educational contests)
export const contests = mysqlTable("contests", {
  id: int("id").autoincrement().primaryKey(),
  apiMatchId: varchar("apiMatchId", { length: 255 }).notNull(), // Match this contest belongs to
  contestName: varchar("contestName", { length: 255 }).notNull(),
  contestType: mysqlEnum("contestType", ["public", "private"]).default("public").notNull(),
  maxEntries: int("maxEntries").default(1000).notNull(), // Maximum participants
  currentEntries: int("currentEntries").default(0).notNull(), // Current participant count
  status: mysqlEnum("status", ["upcoming", "live", "completed", "cancelled"]).default("upcoming").notNull(),
  startTime: timestamp("startTime").notNull(),
  endTime: timestamp("endTime"),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

// Contest Entries Table (tracks which teams joined which contests)
export const contestEntries = mysqlTable("contestEntries", {
  id: int("id").autoincrement().primaryKey(),
  contestId: int("contestId").notNull().references(() => contests.id, { onDelete: "cascade" }),
  userId: int("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
  teamId: int("teamId").notNull().references(() => teams.id, { onDelete: "cascade" }),
  points: int("points").default(0).notNull(),
  rank: int("rank"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Contest = typeof contests.$inferSelect;
export type InsertContest = typeof contests.$inferInsert;
export type ContestEntry = typeof contestEntries.$inferSelect;
export type InsertContestEntry = typeof contestEntries.$inferInsert;