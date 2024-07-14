// ./src/errors/UserNotFoundError.ts

// http-status-codes essential imports.
import { ReasonPhrases, StatusCodes } from "http-status-codes";

/**
 * Error for when a requested user is not found, extending JavaScript's Error class.
 * Adds HTTP status code, reason phrase, and detailed error information.
 * @extends Error
 */
export default class UserNotFoundError extends Error {
  /**
   * Name of the custom error.
   * @type {string}
   */
  name: string;

  /**
   * HTTP status code of the error.
   * @type {number}
   */
  statusCode: number;

  /**
   * Short description of the HTTP status code.
   * @type {string}
   */
  reasonPhrase: string;

  /**
   * Contextual details or resolution steps for the error.
   * @type {string}
   */
  details: string;

  /**
   * Constructs a new `UserNotFoundError` instance with a custom message and optional details.
   *
   * @param {string} message - The error message that describes the error.
   * @param {string} [details=''] - Optional additional details about the error.
   */
  constructor(message: string, details = "") {
    const enhancedReasonPhrase: string = `${StatusCodes.NOT_FOUND} ${ReasonPhrases.NOT_FOUND}`;
    const enhancedMessage: string = `${StatusCodes.NOT_FOUND} ${ReasonPhrases.NOT_FOUND}: ${message}`;
    super(enhancedMessage);

    this.name = this.constructor.name;
    this.statusCode = StatusCodes.NOT_FOUND;
    this.reasonPhrase = enhancedReasonPhrase;
    this.details = details;

    // Preserve prototype chain and ensures instanceof works as expected.
    Object.setPrototypeOf(this, UserNotFoundError.prototype);
  }
}
