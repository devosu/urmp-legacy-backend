// ./src/middlewares/v0/v01FrontendAuthenticator.ts
//
// 1st step in the middleware chain, the frontend JWT authentication middleware.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS essential imports.

// Local util imports.

// Frontend authentication middleware.
export default function v01FrontendAuthenticator(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  next();
}
