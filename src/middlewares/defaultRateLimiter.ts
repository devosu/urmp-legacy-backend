// ./src/middlewares/defaultRateLimiter.ts
//
// Rate-limiting middleware to prevent abuse of the backend API.

// Type imports.

// express-rate-limit essential imports.
import rateLimit from "express-rate-limit";

// Local util imports.

// Rate-limiting middleware definition.
const defaultRateLimiter = rateLimit(
  // biome-ignore format: keeping alignment for readability.
  {
    // Limit each IP to 100 requests per `window` 
    // (here, per 15 minutes = 15 * 60s/min * 1000ms).
    windowMs: 15 * 60 * 1000,
    max: 100,

    // Return rate limit info in the `RateLimit-*` headers,
    // while skipping the `X-RateLimit-*` headers.
    standardHeaders: true, 
    legacyHeaders: false,

    // Skip rate limiting on failed requests,
    // but apply on successful requests.
    skipFailedRequests: true, 
    skipSuccessfulRequests: false,

    message: "Too many requests, please try again later.",
  },
);

export default defaultRateLimiter;
