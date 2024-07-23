// ./src/controllers/v0/v0SingleUsersController.ts
//
// Controller functions for single user create, read, update, and delete operations.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS, Zod, and http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";
import { ZodError, z } from "zod";
import { fromError } from "zod-validation-error";

// Local response class, mocks, and schemas imports.
import { mockMenteesArray } from "@mocks/v0/v0MockMentees.js";
import { sampleMockNewSignup } from "@mocks/v0/v0MockNewSignups.js";
import DefaultAPIResponse from "@utils/DefaultAPIResponse.js";

// Local error and utils imports.
import InvalidPathParamsError from "@errors/InvalidPathParamsError.js";
import ResourceNotFoundError from "@errors/ResourceNotFoundError.js";

// Single ops controller definitions,
// using ONLY the `id` path params,
// NOT using ANY query params.

/**
 * Creates a new signup.
 *
 * - Responds with 201 Created and the new signup details.
 * - Handles any unexpected errors.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */
export function createNewSignupController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.CREATED).json(
      new DefaultAPIResponse({
        statusCode: StatusCodes.CREATED,
        successMessage:
          "A NewSignup user has been successfully created. See response.body.data[0] for details.",
        errorMessage: null,
        errorDetails: null,
        data: [sampleMockNewSignup],
        isProductionData: false,
      }),
    );
  } catch (error) {
    next(error);
  }
}

/**
 * Reads a user by ID.
 *
 * - Validates the user ID from the request parameters.
 * - Checks if the user exists in the mock data.
 * - Responds with 200 OK if the user is found.
 * - If the user is not found, triggers a ResourceNotFoundError.
 * - Handles Zod validation errors for the user ID format.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */
export function readOneUserController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    const id: string = z.string().uuid().parse(req.params.id);

    const user = mockMenteesArray.find((mentee) => mentee.id === id);
    if (user) {
      res.status(StatusCodes.OK).json(
        new DefaultAPIResponse({
          statusCode: StatusCodes.OK,
          successMessage:
            "Requested user found by provided id. See response.body.data[0] for details.",
          errorMessage: null,
          errorDetails: null,
          data: [user],
          isProductionData: false,
        }),
      );
    } else {
      next(
        new ResourceNotFoundError({
          message: `Requested user with id ${id} is not found.`,
          details:
            "This error is caught by the read one user controller at user id lookup.",
        }),
      );
    }
  } catch (error) {
    if (error instanceof ZodError) {
      next(
        new InvalidPathParamsError({
          message: fromError(error).toString(),
          details:
            "This error is caught by the read one user controller at uuid validation.",
        }),
      );
    } else {
      next(error);
    }
  }
}

/**
 * Updates a user by ID.
 *
 * - Validates the user ID from the request parameters.
 * - Checks if the user exists in the mock data.
 * - Responds with 200 OK if the user is found and "updated".
 * - If the user is not found, triggers a ResourceNotFoundError.
 * - Handles Zod validation errors for the user ID format.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */
export function updateOneUserController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    const id: string = z.string().uuid().parse(req.params.id);

    const user = mockMenteesArray.find((mentee) => mentee.id === id);
    if (user) {
      // Update the user in the mock data here if needed.
      res.status(StatusCodes.OK).json(
        new DefaultAPIResponse({
          statusCode: StatusCodes.OK,
          successMessage:
            "Requested user updated by provided id. See response.body.data[0] for updated user details.",
          errorMessage: null,
          errorDetails: null,
          data: [user],
          isProductionData: false,
        }),
      );
    } else {
      next(
        new ResourceNotFoundError({
          message: `Requested user with id ${id} is not found.`,
          details:
            "This error is caught by the update one user controller at user id lookup.",
        }),
      );
    }
  } catch (error) {
    if (error instanceof ZodError) {
      next(
        new InvalidPathParamsError({
          message: fromError(error).toString(),
          details:
            "This error is caught by the update one user controller at uuid validation.",
        }),
      );
    } else {
      next(error);
    }
  }
}

/**
 * Deletes a user by ID.
 *
 * - Validates the user ID from the request parameters.
 * - Checks if the user exists in the mock data.
 * - Responds with 204 No Content if the user is found and "deleted".
 * - If the user is not found, triggers a ResourceNotFoundError.
 * - Handles Zod validation errors for the user ID format.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */
export function deleteOneUserController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    const id: string = z.string().uuid().parse(req.params.id);

    const user = mockMenteesArray.find((mentee) => mentee.id === id);
    if (user) {
      // Respond with 204 No Content as per HTTP/1.1 specification for successful deletion without a response body.
      res.status(StatusCodes.NO_CONTENT).end();
    } else {
      next(
        new ResourceNotFoundError({
          message: `Requested user with id ${id} is not found.`,
          details:
            "This error is caught by the delete one user controller at user id lookup.",
        }),
      );
    }
  } catch (error) {
    if (error instanceof ZodError) {
      next(
        new InvalidPathParamsError({
          message: fromError(error).toString(),
          details:
            "This error is caught by the delete one user controller at uuid validation.",
        }),
      );
    } else {
      next(error);
    }
  }
}
