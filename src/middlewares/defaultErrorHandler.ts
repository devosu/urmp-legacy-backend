// ./src/middlewares/defaultErrorHandler.ts
//
// Centralized default error handler for the backend API.
// Used at the end for all unhandled errors.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and http-status-codes essential imports.
import { ReasonPhrases, StatusCodes } from "http-status-codes";

// Local error classes imports.
import ServiceNotFoundError from "@errors/ServiceNotFoundError.js";

// Local util imports.

// Centralized default error handler definition.
export default function defaultErrorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // Log the error for debugging.
  console.error("Error caught by defaultErrorHandler:", error);

  // Handle known errors.
  if (error instanceof ServiceNotFoundError) {
    res.status(error.statusCode).json({
      message: error.message,
    });

    // Handle unknown errors.
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `${StatusCodes.INTERNAL_SERVER_ERROR} ${ReasonPhrases.INTERNAL_SERVER_ERROR}: ${error.message}`,
    });
  }
}
