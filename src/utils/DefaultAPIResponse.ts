// ./src/utils/DefaultAPIResponse.ts
//
// Defines a standard structure for API responses, 
// encapsulating status codes, messages, and data or errors.

// http-status-codes essential imports.
import { type StatusCodes, getReasonPhrase } from "http-status-codes";

// Interface for better passing options to the DefaultAPIResponse constructor,
export interface DefaultAPIResponseOptions<T> {
  statusCode       : StatusCodes;
  successMessage  ?: string  | null;
  errorMessage    ?: string  | null;
  errorDetails    ?: string  | null;
  data            ?: T[]     | null;
  isProductionData : boolean | null;
}

/**
 * Represents a standardized response structure for API endpoints.
 */
export default class DefaultAPIResponse<T> {
  /**
   * The HTTP status code of the response.
   */
  statusCode: StatusCodes;

  /**
   * An (auto-generated) human-readable phrase based on the status code.
   * IMPORTANT: DO NOT edit!! This is auto-generated based on the status code.
   */
  reasonPhrase: string;

  /**
   * Optional success message, similar to the errorDetails field.
   */
  successMessage: string | null;

  /**
   * An optional error message. Null if there's no error.
   */
  errorMessage: string | null;

  /**
   * Optional detailed information about the error.
   */
  errorDetails: string | null;

  /**
   * The payload of the response. Can be null or an array of any type specified by T.
   * When there's an error, this is expected to be null.
   */
  data: T[] | null;

  /**
   * The production data flag. Default to true to prevent devs from
   * accidentally exposing sensitive data in production.
   * Added null option for cases where data is not sent.
   * I.e. error cases, healthchecks, public static html pages, etc.
   */
  isProductionData: boolean | null;

  /**
   * Constructs a new `DefaultAPIResponse` instance.
   * @param {StatusCodes}    statusCode        - The HTTP status code of the response.
   * @param {string  | null} successMessage    - An optional success message.
   * @param {string  | null} errorMessage      - An optional error message.
   * @param {string  | null} errorDetails      - Optional detailed information about the error.
   * @param {T[]     | null} data              - The payload of the response, null if there's an error.
   * @param {boolean | null} isProductionData  - The production data flag.
   */
  constructor(options: DefaultAPIResponseOptions<T>) {
    // Use object destructuring to extract the options.
    const {
      statusCode,
      successMessage   = null,
      errorMessage     = null,
      errorDetails     = null,
      data             = null,
      isProductionData = true,
    } = options;

    this.statusCode       = statusCode;
    this.reasonPhrase     = getReasonPhrase(statusCode);
    this.successMessage   = successMessage;
    this.errorMessage     = errorMessage;
    this.errorDetails     = errorDetails;
    this.data             = data;
    this.isProductionData = isProductionData;
  }
}
