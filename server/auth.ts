import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { z } from "zod";
import { AUTH_COOKIE_NAME, MIN_AGE, RESTRICTED_STATES } from "../shared/auth";
import { calculateAge, createUser, getUserByEmail, getUserById, isStateRestricted, updateUserLastSignIn } from "./db";
import { publicProcedure, router } from "./_core/trpc";
import { getSessionCookieOptions } from "./_core/cookies";

// JWT secret for session tokens
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production");

// Helper to create session token
async function createSessionToken(userId: number, email: string): Promise<string> {
  const token = await new SignJWT({ userId, email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
  return token;
}

export const authRouter = router({
  // Get current user
  me: publicProcedure.query(({ ctx }) => ctx.user),

  // Register new user
  register: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        dateOfBirth: z.string(), // ISO date string
        state: z.string().min(2, "State is required"),
        phone: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Check if email already exists
      const existingUser = await getUserByEmail(input.email);
      if (existingUser) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Email already registered",
        });
      }

      // Validate date of birth and age
      const dob = new Date(input.dateOfBirth);
      if (isNaN(dob.getTime())) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid date of birth",
        });
      }

      const age = calculateAge(dob);
      if (age < MIN_AGE) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `You must be at least ${MIN_AGE} years old to register`,
        });
      }

      // Check if state is restricted
      if (isStateRestricted(input.state)) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: `Registration is not available in ${input.state} due to government compliance requirements`,
        });
      }

      // Hash password
      const passwordHash = await bcrypt.hash(input.password, 10);

      // Create user
      const userId = await createUser({
        name: input.name,
        email: input.email,
        passwordHash,
        dateOfBirth: dob,
        state: input.state,
        phone: input.phone || null,
        role: "user",
        emailVerified: 0,
        isActive: 1,
      });

      // Create session token
      const token = await createSessionToken(userId, input.email);

      // Set cookie
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.cookie(AUTH_COOKIE_NAME, token, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return {
        success: true,
        message: "Registration successful",
      };
    }),

  // Login user
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(1, "Password is required"),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Get user by email
      const user = await getUserByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      // Check if account is active
      if (user.isActive === 0) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Your account has been deactivated. Please contact support.",
        });
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(input.password, user.passwordHash);
      if (!isValidPassword) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      // Update last sign in
      await updateUserLastSignIn(user.id);

      // Create session token
      const token = await createSessionToken(user.id, user.email);

      // Set cookie
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.cookie(AUTH_COOKIE_NAME, token, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return {
        success: true,
        message: "Login successful",
      };
    }),

  // Logout user
  logout: publicProcedure.mutation(({ ctx }) => {
    const cookieOptions = getSessionCookieOptions(ctx.req);
    ctx.res.clearCookie(AUTH_COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    return {
      success: true,
    } as const;
  }),

  // Get restricted states list
  getRestrictedStates: publicProcedure.query(() => {
    return RESTRICTED_STATES;
  }),
});
