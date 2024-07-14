// ./src/middlewares/v0/v0MockAuthenticator.ts
//
// Placeholder for JWT authentication middleware, only calls next().

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS essential imports.

// Local util imports.

// Mock authentication middleware.
export default function v0MockAuthenticator(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  next();
}
