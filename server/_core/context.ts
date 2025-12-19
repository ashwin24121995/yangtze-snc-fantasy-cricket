import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { jwtVerify } from "jose";
import { AUTH_COOKIE_NAME } from "../../shared/auth";
import type { User } from "../../drizzle/schema";
import { getUserById } from "../db";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production");

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  const sessionCookie = opts.req.cookies?.[AUTH_COOKIE_NAME];

  if (sessionCookie) {
    try {
      const { payload } = await jwtVerify(sessionCookie, JWT_SECRET);
      const userId = payload.userId as number;

      if (userId) {
        user = await getUserById(userId) || null;
      }
    } catch (error) {
      // Invalid or expired token - user remains null
      console.error("[Auth] Invalid session token:", error);
    }
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
