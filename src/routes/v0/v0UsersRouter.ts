// ./src/routes/v0/v0UsersRouter.ts
//
// V0 of user router, for frontend dev, implements schema validation,
// and respond with deterministic mock data.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and http-status-codes essential imports.
import { Router } from "express";

// Local schema and mock imports.

// Local error and error handling middleware imports.
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";
import ServiceNotFoundError from "@src/errors/ServiceNotFoundError.js";

// Local workflow middleware and controller imports.
import v0MockAuthenticator from "@middlewares/v0/v0MockAuthenticator.js";
// import v0QueryParamsValidator from "@middlewares/v0/v0QueryParamsValidator.js";
// import v0SchemaArrayValidator from "@middlewares/v0/v0SchemaArrayValidator.js";
// import v0SchemaValidator from "@middlewares/v0/v0SchemaValidator.js";

// Local controller and util imports.
import {
  readAllUsersController,
  readBatchUsersController,
  updateBatchUsersController,
} from "@controllers/v0/v0BatchUserController.js";
import {
  createSingleNewSignupController,
  deleteSingleUserByEmailController,
  deleteSingleUserController,
  readSingleUserByEmailController,
  readSingleUserController,
  updateSingleUserByEmailController,
  updateSingleUserController,
} from "@controllers/v0/v0SingleUserController.js";

// Define new express router, and use controllers to handle http request.
export const V0USERS_ROUTE = "/v0/users";
export default function v0UsersRouter(): Router {
  const router: Router = Router();

  // IMPORTANT!!
  // Specific/longer routes first, generic routes last.

  // Handles GET request to READ batch users by query parameters.
  router.get(
    "/batch",
    [v0MockAuthenticator],
    (req: Request, res: Response, next: NextFunction): void => {
      readBatchUsersController(req, res, next);
    },
  );

  // Handles PUT request to UPDATE batch users by query parameters.
  router.put(
    "/batch",
    [v0MockAuthenticator],
    (req: Request, res: Response, next: NextFunction): void => {
      updateBatchUsersController(req, res, next);
    },
  );

  // Handles GET request to READ a single user by email.
  router.get(
    "/emailAddress/:emailAddress",
    [v0MockAuthenticator],
    (req: Request, res: Response, next: NextFunction): void => {
      readSingleUserByEmailController(req, res, next);
    },
  );

  // Handles PUT request to UPDATE a single user by email.
  router.put(
    "/emailAddress/:emailAddress",
    [v0MockAuthenticator],
    (req: Request, res: Response, next: NextFunction): void => {
      updateSingleUserByEmailController(req, res, next);
    },
  );

  // Handles DELETE request to DELETE a single user by email.
  router.delete(
    "/emailAddress/:emailAddress",
    [v0MockAuthenticator],
    (req: Request, res: Response, next: NextFunction): void => {
      deleteSingleUserByEmailController(req, res, next);
    },
  );

  // Handles GET request to READ a single user by id.
  router.get(
    "/:id",
    [v0MockAuthenticator],
    (req: Request, res: Response, next: NextFunction): void => {
      readSingleUserController(req, res, next);
    },
  );

  // Handles PUT request to UPDATE a single user by id.
  router.put(
    "/:id",
    [v0MockAuthenticator],
    (req: Request, res: Response, next: NextFunction): void => {
      updateSingleUserController(req, res, next);
    },
  );

  // Handles DELETE request to DELETE a single user by id.
  router.delete(
    "/:id",
    [v0MockAuthenticator],
    (req: Request, res: Response, next: NextFunction): void => {
      deleteSingleUserController(req, res, next);
    },
  );

  // Handles POST request to CREATE a single NewSignup user.
  router.post(
    "/",
    [],
    (req: Request, res: Response, next: NextFunction): void => {
      createSingleNewSignupController(req, res, next);
    },
  );

  // Handles GET request to READ all users.
  router.get(
    "/",
    [v0MockAuthenticator],
    (req: Request, res: Response, next: NextFunction): void => {
      readAllUsersController(req, res, next);
    },
  );

  // Catch-all route for any other request (GET, PUT, POST, PATCH, DELETE).
  router.all(
    "*",
    [], // No middleware for catch-all for now.
    (req: Request, res: Response, next: NextFunction): void => {
      next(
        new ServiceNotFoundError(
          `Requested service ${req.method} ${req.originalUrl} is undefined.`,
        ),
      );
    },
  );

  // Centralized default error handler.
  router.use(defaultErrorHandler);

  return router;
}
