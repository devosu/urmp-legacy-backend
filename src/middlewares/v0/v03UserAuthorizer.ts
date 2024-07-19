// ./src/middlewares/v0/v03UserAuthorizer.ts
//
// 3rd step in the middleware chain, the user JWT authorizer middleware.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS essential imports.

// Local util imports.

// User authorization middleware.
export default function v03UserAuthorizer(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  next();
}
