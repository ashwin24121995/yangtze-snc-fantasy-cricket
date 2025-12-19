// Authentication constants and types

export const AUTH_COOKIE_NAME = "fantasy_cricket_session";

export const RESTRICTED_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Nagaland",
  "Odisha",
  "Sikkim",
  "Telangana",
];

export const MIN_AGE = 18;

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  state: string;
  phone?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthSession {
  userId: number;
  email: string;
  createdAt: number;
}
