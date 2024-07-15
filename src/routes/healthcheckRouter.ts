// ./src/routes/healthcheckRouter.ts
//
// Simple '200 OK' healthcheck endpoint for the backend.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and http-status-codes essential imports.
import { Router } from "express";
import { StatusCodes } from "http-status-codes";

// Local class, error, and middelware imports.
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";
import ServiceNotFoundError from "@src/errors/ServiceNotFoundError.js";
import DefaultAPIResponse from "@utils/DefaultAPIResponse.js";

// Local util imports.

// Create new express router, and handle GET requests.
export const HEALTHCHECK_ROUTE = "/healthcheck";
export default function healthcheckRouter(): Router {
  const router: Router = Router();

  router.get("/", (req: Request, res: Response): void => {
    res.status(StatusCodes.OK).json(
      new DefaultAPIResponse<string>(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode    : StatusCodes.OK,
          successMessage: "Research Mentorship Project backend is live and healthy.",
          errorMessage  : null,
          errorDetails  : null,
          data          : null,
      },
      ),
    );
  });

  // Catch-all route for any other request (GET, PUT, POST, PATCH, DELETE).
  router.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(
      new ServiceNotFoundError(
        `Requested service ${req.method} ${req.originalUrl} is undefined.`,
      ),
    );
  });

  // Centralized default error handler.
  router.use(defaultErrorHandler);

  return router;
}
