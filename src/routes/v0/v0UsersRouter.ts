// ./src/routes/v0/v0UsersRouter.ts
//
// V0 batch users request router, implements schema validation,
// and respond with deterministic mock data, for frontend dev only.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and http-status-codes essential imports.
import { Router } from "express";

// Local UserType and schema imports.
// import { UserType } from "@models/v0/v0UserModel.js";

// Local error and error handling middleware imports.
import ServiceNotFoundError from "@errors/ServiceNotFoundError.js";
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";

// Local workflow middleware and controller imports.
import v01FrontendAuthenticator from "@middlewares/v0/v01FrontendAuthenticator.js";
import v02LoginAuthenticator from "@middlewares/v0/v02LoginAuthenticator.js";
import v03UserAuthorizer from "@middlewares/v0/v03UserAuthorizer.js";
import v04NoPathParamsValidator from "@middlewares/v0/v04NoPathParamsValidator.js";
import v04NoQueryParamsValidator from "@middlewares/v0/v04NoQueryParamsValidator.js";
import v04PathParamsValidator from "@middlewares/v0/v04PathParamsValidator.js";
import v04QueryParamsValidator from "@middlewares/v0/v04QueryParamsValidator.js";
import v05SchemaValidator from "@middlewares/v0/v05SchemaValidator.js";

// Local controller and util imports.
import {
  readBatchUsersController,
  updateBatchUsersController,
} from "@controllers/v0/v0BatchUsersController.js";
import {
  createNewSignupController,
  readAllUsersController,
} from "@src/controllers/v0/v0SimpleController.js";
import {
  deleteOneUserController,
  readOneUserController,
  updateOneUserController,
} from "@src/controllers/v0/v0SingleUserController.js";

// Define new express router, and use controllers to handle http request.
export const V0USERS_ROUTE = "/v0/users";
export default function v0UsersRouter(): Router {
  const router: Router = Router();

  // Enforce only allowing traffic from the frontend.
  router.use(v01FrontendAuthenticator);

  // ---- Simple Users CRUD Operations ----

  // Handle POST requests to CREATE one new user.
  router.post(
    "/new",
    [v04NoPathParamsValidator, v04NoQueryParamsValidator, v05SchemaValidator],
    createNewSignupController,
  );

  // Handle GET requests to READ all users.
  router.get(
    "/",
    [
      v02LoginAuthenticator,
      v03UserAuthorizer,
      v04NoPathParamsValidator,
      v04NoQueryParamsValidator,
    ],
    readAllUsersController,
  );

  // ---- Single Users CRUD Operations ----

  // Handle GET requests to READ one user by id.
  router.get(
    "/:id",
    [
      v02LoginAuthenticator,
      v03UserAuthorizer,
      v04PathParamsValidator,
      v04NoQueryParamsValidator,
    ],
    readOneUserController,
  );

  // Handle PUT requests to UPDATE one user by id.
  router.put(
    "/:id",
    [
      v02LoginAuthenticator,
      v03UserAuthorizer,
      v04PathParamsValidator,
      v04NoQueryParamsValidator,
      v05SchemaValidator,
    ],
    updateOneUserController,
  );

  // Handle DELETE requests to DELETE one user by id.
  router.delete(
    "/:id",
    [
      v02LoginAuthenticator,
      v03UserAuthorizer,
      v04PathParamsValidator,
      v04NoQueryParamsValidator,
    ],
    deleteOneUserController,
  );

  // ---- Batch Users CRUD Operations ----

  // Handle GET requests to READ batch users with query param filters.
  router.get(
    "/",
    [
      v02LoginAuthenticator,
      v03UserAuthorizer,
      v04NoPathParamsValidator,
      v04QueryParamsValidator,
    ],
    readBatchUsersController,
  );

  // Handle PUT requests to UPDATE batch users with query param filters.
  router.put(
    "/",
    [
      v02LoginAuthenticator,
      v03UserAuthorizer,
      v04NoPathParamsValidator,
      v04QueryParamsValidator,
      v05SchemaValidator,
    ],
    updateBatchUsersController,
  );

  // Catch-all route for any other request (PATCH, OPTIONS, etc.)
  router.all(
    "*",
    [], // No middleware for catch-all for now.
    (req: Request, res: Response, next: NextFunction): void => {
      next(
        new ServiceNotFoundError({
          message: `Requested service ${req.method} ${req.originalUrl} is undefined.`,
          details:
            "This error is caught by the catch-all route in the v0 users router.",
        }),
      );
    },
  );

  // Centralized default error handler.
  router.use(defaultErrorHandler);

  return router;
}
