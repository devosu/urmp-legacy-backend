// ./src/errors/PermissionDeniedError.ts
//
// Custom enhanced 401 unauthorized error class, 
// specifically for when permission is denied or user lack access rights,
// extended from BaseError.

// Type imports.

// http-status-codes essential imports.
import { StatusCodes, } from "http-status-codes";

// Local error classes imports.
import BaseError from "@errors/BaseError.js";

/**
 * Enhanced 401 unauthorized permission denied error class.
 * @extends BaseError
 */
export default class PermissionDeniedError extends BaseError {
  constructor(message: string, details: string | null = null,) {
    super({
      statusCode: StatusCodes.UNAUTHORIZED, 
      message: message, 
      details: details,
    });
  }
}
