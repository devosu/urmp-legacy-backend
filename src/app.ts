// ./src/app.ts
//
// ExpressJS backend definition for the Research Mentorship Project

// Node.js built-in module and type imports.
import type http from "node:http";

// Type imports.
import type { Express, NextFunction, Request, Response } from "express";

// ExpressJS app setup essential imports.
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv-safe";
import express from "express";
import { StatusCodes } from "http-status-codes";

// Local router imports.
import healthcheckRouter, { HEALTHCHECK_ROUTE } from "@routes/healthcheckRouter.js";
import v0UsersRouter, { V0USERS_ROUTE } from "@routes/v0/v0UsersRouter.js";

// Local error class and middleware imports.
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";
import ServiceNotFoundError from "@src/errors/ServiceNotFoundError.js";

// Local rate limiter import.
import defaultRateLimiter from "@middlewares/defaultRateLimiter.js";

// Load the environement variables.
config();

// Create and export the backend express app.
export function createExpressApp(): Express {
  const app: Express = express();

  // Use CORS middleware to handle cross-origin requests.
  app.use(cors());

  // Use body-parser middleware to handle post requests.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Apply default rate limiter middleware.
  app.use(defaultRateLimiter);

  // Setup routers with built-in error handlers.
  app.use(HEALTHCHECK_ROUTE, healthcheckRouter());
  app.use(V0USERS_ROUTE, v0UsersRouter());

  // Redirect root to /healthcheck (avoid redundant 200), then catch-all to 404.
  app.get("/", (req: Request, res: Response) => {
    // IMPORTANT!!
    // This breaks the unified json payload format since redirect
    // does NOT have a body. This is a special case.
    //
    // ALSO, for maximum clarity, use strict 307 Temporary Redirect, NOT 302 Found.
    res.redirect(StatusCodes.TEMPORARY_REDIRECT, HEALTHCHECK_ROUTE);
  });

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(
      new ServiceNotFoundError({
        message: `Requested service ${req.method} ${req.originalUrl} resource not found.`,
        details: "This error is caught by the catch-all route in the main app.",
      }),
    );
  });

  // Centralized default error handler.
  app.use(defaultErrorHandler);

  return app;
}

export function startNodeServer(app: Express, port: string): http.Server {
  return app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
}

// Start the backend server when NOT in test mode (development or production).
if (process.env.NODE_ENV !== "test") {
  const port: string = process.env.PORT || "5000";
  startNodeServer(createExpressApp(), port);
}
