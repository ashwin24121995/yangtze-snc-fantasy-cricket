import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import bcrypt from "bcryptjs";

// Mock context for testing
function createMockContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
      cookies: {},
    } as any,
    res: {
      cookie: () => {},
      clearCookie: () => {},
    } as any,
  };
}

describe("auth.register", () => {
  it("should reject registration with invalid age", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    // Date of birth for someone under 18
    const today = new Date();
    const underageDate = new Date(
      today.getFullYear() - 17,
      today.getMonth(),
      today.getDate()
    );

    await expect(
      caller.auth.register({
        name: "Test User",
        email: "test@example.com",
        password: "password123",
        dateOfBirth: underageDate.toISOString().split("T")[0],
        state: "Karnataka",
      })
    ).rejects.toThrow("at least 18 years old");
  });

  it("should reject registration from restricted state", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const validDate = new Date();
    validDate.setFullYear(validDate.getFullYear() - 25);

    await expect(
      caller.auth.register({
        name: "Test User",
        email: "test2@example.com",
        password: "password123",
        dateOfBirth: validDate.toISOString().split("T")[0],
        state: "Andhra Pradesh", // Restricted state
      })
    ).rejects.toThrow("not available");
  });

  it("should reject weak passwords", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const validDate = new Date();
    validDate.setFullYear(validDate.getFullYear() - 25);

    await expect(
      caller.auth.register({
        name: "Test User",
        email: "test3@example.com",
        password: "short", // Too short
        dateOfBirth: validDate.toISOString().split("T")[0],
        state: "Karnataka",
      })
    ).rejects.toThrow();
  });
});

describe("auth.getRestrictedStates", () => {
  it("should return list of restricted states", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const states = await caller.auth.getRestrictedStates();

    expect(states).toBeInstanceOf(Array);
    expect(states).toContain("Andhra Pradesh");
    expect(states).toContain("Assam");
    expect(states).toContain("Nagaland");
    expect(states).toContain("Odisha");
    expect(states).toContain("Sikkim");
    expect(states).toContain("Telangana");
    expect(states.length).toBe(6);
  });
});

describe("auth.me", () => {
  it("should return null for unauthenticated user", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.me();

    expect(result).toBeNull();
  });
});
