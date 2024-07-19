// ./src/errors/ResourceNotFoundError.ts
//
// Custom enhanced 404 (resource) not found error class,
// specifically for when requested service exists but resource doesn't,
// extended from BaseError.

// http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";

// Local error classes imports.
import BaseError, { type ErrorOptions } from "@errors/BaseError.js";

/**
 * Enhanced 404 (resource) not found error class.
 * @extends BaseError
 */
export default class ResourceNotFoundError extends BaseError {
  constructor(options: ErrorOptions) {
    super(StatusCodes.NOT_FOUND, options);
  }
}
