// ./src/errors/ServiceNotFoundError.ts
//
// Custom enhanced 404 (service) not found error class,
// specifically for when requested service doesn't exist,
// extended from BaseError.

// Type imports.

// http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";

// Local error classes imports.
import BaseError from "@errors/BaseError.js";

/**
 * Enhanced 404 (service) not found error class.
 * @extends BaseError
 */
export default class ServiceNotFoundError extends BaseError {
  constructor(
    message: string, 
    details: string | null = null,
  ) {
    super({
      statusCode: StatusCodes.NOT_FOUND,
      message   : message,
      details   : details,
    });
  }
}
