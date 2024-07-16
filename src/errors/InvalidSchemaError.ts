// ./src/errors/InvalidSchemaError.ts
//
// Custom enhanced 400 bad request error class, 
// specifically for when Zod schema validation fails, 
// extended from  BaseError.

// Type imports.

// http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";

// Local error classes imports.
import BaseError from "@errors/BaseError.js";

/**
 * Enhanced 400 bad request schema validation failure error class.
 * @extends BaseError
 */
export default class InvalidSchemaError extends BaseError {
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
