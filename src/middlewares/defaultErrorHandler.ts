// ./src/middlewares/defaultErrorHandler.ts
//
// Centralized default error handler for the backend API.
// Used at the end for all unhandled errors.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";

// Local error imports.
import InvalidPathParamsError from "@errors/InvalidPathParamsError.js";
import InvalidQueryParamsError from "@errors/InvalidQueryParamsError.js";
import InvalidSchemaError from "@errors/InvalidSchemaError.js";
import PermissionDeniedError from "@errors/PermissionDeniedError.js";
import ResourceNotFoundError from "@errors/ResourceNotFoundError.js";
import ServiceNotFoundError from "@errors/ServiceNotFoundError.js";

// Local utility imports.
import DefaultAPIResponse from "@utils/DefaultAPIResponse.js";

// Centralized default error handler definition.
export default function defaultErrorHandler(
  error: Error,
  req  : Request,
  res  : Response,
  next : NextFunction,
): void {
  // Log the error for debugging.
  console.error("Error caught by defaultErrorHandler:", error);

  // Gracefully handle custom and unknown errors.
  if (
    error instanceof InvalidPathParamsError  ||
    error instanceof InvalidQueryParamsError ||
    error instanceof InvalidSchemaError      ||
    error instanceof PermissionDeniedError   ||
    error instanceof ResourceNotFoundError   ||
    error instanceof ServiceNotFoundError
  ) {
    res.status(error.statusCode).json(
      new DefaultAPIResponse<string>({
        statusCode      : error.statusCode,
        successMessage  : null,
        errorMessage    : error.message,
        errorDetails    : error.details,
        data            : null,
        isProductionData: null,
      }),
    );
  } else {
    // Else catch-all for unknown errors.
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
      new DefaultAPIResponse<string>({
        statusCode      : StatusCodes.INTERNAL_SERVER_ERROR,
        successMessage  : null,
        errorMessage    : error.message,
        errorDetails    : null,
        data            : null,
        isProductionData: null,
      }),
    );
  }
}
