// ./src/errors/BaseError.ts
//
// Custom error base class for extended error handling.

// http-status-codes essential imports.
import { type StatusCodes, getReasonPhrase } from "http-status-codes";

// Interface for better passing options to the BaseError-family constructor.
export interface ErrorOptions 
// biome-ignore format: added alignment for clarity.
{
  statusCode : StatusCodes;
  message    : string;
  details   ?: string | null;
}

/**
 * Base class for custom errors, providing structured information including an HTTP status code.
 */
export default class BaseError extends Error {
  /**
   * The name of the error, typically the class name.
   */
  name: string;

  /**
   * The HTTP status code associated with this error.
   */
  statusCode: StatusCodes;

  /**
   * A short textual description of the HTTP status code.
   */
  reasonPhrase: string;

  /**
   * Additional details or resolution steps for the error, if any.
   */
  details: string | null;

  /**
   * Constructs a new BaseError instance.
   * @param statusCode - The HTTP status code of the error.
   * @param message - A message describing the error.
   * @param details - Optional additional details or resolution steps for the error.
   */
  constructor(options: ErrorOptions) 
  // biome-ignore format: added alignment for clarity.
  {

    // Use object destructuring to extract the options.
    const { statusCode, message, details } = options;

    const reasonPhrase    = `${statusCode} ${getReasonPhrase(statusCode) || "Unclassified Error"}`;
    const enhancedMessage = `${reasonPhrase}: ${message}`;

    super(enhancedMessage);

    this.name         = this.constructor.name;
    this.statusCode   = statusCode;
    this.reasonPhrase = reasonPhrase;
    this.details      = details? details : null;

    // Ensures that instanceof checks work correctly even when transpiling down to ES5 or lower, 
    // where native class syntax does not exist and classes are simulated using functions.
    Object.setPrototypeOf(this, new.target.prototype);
  }
}