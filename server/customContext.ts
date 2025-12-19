import type { Request, Response } from "express";
import { jwtVerify } from "jose";
import { AUTH_COOKIE_NAME } from "../shared/auth";
import { getUserById } from "./db";
import type { User } from "../drizzle/schema";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production");

export type CustomContext = {
  req: Request;
  res: Response;
  user: User | null;
};

export async function createCustomContext({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<CustomContext> {
  const sessionCookie = req.cookies?.[AUTH_COOKIE_NAME];

  if (!sessionCookie) {
    return { req, res, user: null };
  }

  try {
    const { payload } = await jwtVerify(sessionCookie, JWT_SECRET);
    const userId = payload.userId as number;

    if (!userId) {
      return { req, res, user: null };
    }

    const user = await getUserById(userId);
    return { req, res, user: user || null };
  } catch (error) {
    console.error("[Auth] Invalid session token:", error);
    return { req, res, user: null };
  }
}
