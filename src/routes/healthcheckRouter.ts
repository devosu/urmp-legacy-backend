// ./src/routes/healthcheckRouter.ts
//
// Simple '200 OK' healthcheck endpoint for the backend.

// ExpressJS type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and http-status-codes essential imports.
import { Router } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

// Local error and middelware imports.
import ServiceNotFoundError from "@errors/ServiceNotFoundError.js";
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";

// Local util imports.

// Create new express router, and handle GET requests.
export const HEALTHCHECK_ROUTE = "/healthcheck";
export default function healthcheckRouter(): Router {
  const router: Router = Router();

  router.get("/", (req: Request, res: Response): void => {
    res.status(StatusCodes.OK).send(ReasonPhrases.OK);
  });

  // Catch-all route for any other request (GET, PUT, POST, PATCH, DELETE).
  router.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(
      new ServiceNotFoundError(
        `Requested service ${req.method} ${req.originalUrl} resource not found.`,
      ),
    );
  });

  // Centralized default error handler.
  router.use(defaultErrorHandler);

  return router;
}
