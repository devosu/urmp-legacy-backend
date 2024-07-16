// ./src/errors/InvalidQueryParamsError.ts
//
// Custom enhanced 400 bad request error class, 
// specifically for when query validation fails, 
// extended from BaseError.

// Type imports.

// http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";

// Local error classes imports.
import BaseError from "@errors/BaseError.js";

/**
 * Enhanced 400 bad request query validation failure error class.
 * @extends BaseError
 */
export default class InvalidQueryParamsError extends BaseError {
  constructor(
    message: string,
    details: string | null = null,
  ) {
    super({
      statusCode: StatusCodes.BAD_REQUEST,
      message   : message,
      details   : details,
    });
  }
}
