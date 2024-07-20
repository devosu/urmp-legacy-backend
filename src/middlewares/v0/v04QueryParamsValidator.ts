// ./src/middlewares/v0/v04QueryParamsValidator.ts
//
// 4th step in the middleware chain,
// the generic validator middleware for query params using Zod.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// Local custom error class and util imports.
import InvalidQueryParamsError from "@errors/InvalidQueryParamsError.js";

// Single query param schema validator definition.
export default function v04QueryParamsValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Allowed query parameters
    const allowedQueryParams: string[] = ["userType", "adminApproved"];

    // Get all query parameter keys
    const queryKeys: string[] = Object.keys(req.query);

    // Filter out keys that are not allowed
    const invalidKeys = queryKeys.filter(
      (key: string) => !allowedQueryParams.includes(key),
    );

    // Check if there are any invalid keys
    if (invalidKeys.length > 0) {
      // Handle the error for invalid query parameters
      next(
        new InvalidQueryParamsError({
          message: `Request contains invalid query parameters: ${invalidKeys.join(", ")}`,
          details:
            "This error is caught by the generic query parameter validator middleware.",
        }),
      );
    } else {
      next();
    }

    // Gracefully handle unknown errors.
  } catch (error) {
    next(error);
  }
}
