// ./src/middlewares/v0/v04NoQueryParamsValidator.ts
//
// 4th step in the middleware chain, validate no query params present.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// Local custom error class and util imports.
import InvalidQueryParamsError from "@errors/InvalidQueryParamsError.js";

// No query param validator definition.
export default function v04NoQueryParamsValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Check and throw an InvalidQueryParamsError if any Query param is present.
    if (Object.keys(req.query).length > 0) {
      next(
        new InvalidQueryParamsError({
          message: `Query parameters are strictly not allowed for ${req.method} to ${req.originalUrl}.`,
          details:
            "This error is caught by the no query parameter validator middleware.",
        }),
      );
    } else {
      // Continue to the next middleware if valid.
      next();
    }
  } catch (error) {
    // Gracefully handle unknown errors.
    next(error);
  }
}
