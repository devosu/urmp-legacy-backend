// ./src/errors/InvalidSchemaError.ts
//
// Custom enhanced 400 bad request error class,
// specifically for when Zod schema validation fails,
// extended from  BaseError.

// http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";

// Local error classes imports.
import BaseError, { type ErrorOptions } from "@errors/BaseError.js";

/**
 * Enhanced 400 bad request schema validation failure error class.
 * @extends BaseError
 */
export default class InvalidSchemaError extends BaseError {
  constructor(options: ErrorOptions) {
    super(StatusCodes.BAD_REQUEST, options);
  }
}
