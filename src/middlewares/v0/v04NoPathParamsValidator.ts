// ./src/middlewares/v0/v04NoPathParamsValidator.ts
//
// 4th step in the middleware chain, validate path is clean.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// Local custom error class and util imports.
import InvalidPathParamsError from "@src/errors/InvalidPathParamsError.js";

// No path param validator definition.
export default function v04NoPathParamsValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Check and throw an InvalidPathParamsError if any path param is present.
    if (Object.keys(req.params).length > 0) {
      next(
        new InvalidPathParamsError({
          message: `Path parameters are strictly not allowed for ${req.method} to ${req.originalUrl}.`,
          details:
            "This error is caught by the no path parameter validator middleware.",
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
