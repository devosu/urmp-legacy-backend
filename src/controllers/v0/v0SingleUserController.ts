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

export function createNewSignupController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.CREATED).json(
      new DefaultAPIResponse(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode      : StatusCodes.CREATED,
          successMessage  : "A NewSignup user has been succesfully created. See response.body.data[0] for details.",
          errorMessage    : null,
          errorDetails    : null,
          data            : [sampleMockNewSignup],
          isProductionData: false,
        },
      ),
    );
  } catch (error) {
    // Gracefully handle unknown error.
    next(error);
  }
}

export function readOneUserController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Extract user id from path params and look up the user in mock data.
    const id: string = z.string().uuid().parse(req.params.id);

    // Double check for:
    // 1. Existance of user id.
    // 2. Existing user id is a valid uuid by Zod shema validation.
    // 3. Existing valid user id is in the mock data.
    if (id && mockMenteesArray.find((mentee) => mentee.id === id)) {
      res.status(StatusCodes.OK).json(
        new DefaultAPIResponse(
          // biome-ignore format: added alignment for clarity.
          {
            statusCode      : StatusCodes.OK,
            successMessage  : "Requesetd user found by provided id. See response.body.data[0] for details.",
            errorMessage    : null,
            errorDetails    : null,
            data            : [mockMenteesArray.find((mentee) => mentee.id === id)],
            isProductionData: false,
          },
        ),
      );
    } else {
      // If user id is not found in the mock data, report resource not found.
      next(
        new ResourceNotFoundError({
          message: `Requested user with id ${id} is not found.`,
          details:
            "This error is caught by the read one user controller at user id lookup.",
        }),
      );
    }
  } catch (error) {
    // Gracefully handle Zod schema validation error and unknown error.
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

export function updateOneUserController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Extract user id from path params and look up the user in mock data.
    const id: string = z.string().uuid().parse(req.params.id);

    // Double check for:
    // 1. Existance of user id.
    // 2. Existing user id is a valid uuid by Zod shema validation.
    // 3. Existing valid user id is in the mock data.
    if (id && mockMenteesArray.find((mentee) => mentee.id === id)) {
      res.status(StatusCodes.OK).json(
        new DefaultAPIResponse(
          // biome-ignore format: added alignment for clarity.
          {
            statusCode      : StatusCodes.OK,
            successMessage  : "Requesetd user (not because of mock) updated by provided id. See response.body.data[0] for updated user details.",
            errorMessage    : null,
            errorDetails    : null,
            data            : [mockMenteesArray.find((mentee) => mentee.id === id)],
            isProductionData: false,
          },
        ),
      );
    } else {
      // If user id is not found in the mock data, report resource not found.
      next(
        new ResourceNotFoundError({
          message: `Requested user with id ${id} is not found.`,
          details:
            "This error is caught by the update one user controller at user id lookup.",
        }),
      );
    }
  } catch (error) {
    // Gracefully handle Zod schema validation error and unknown error.
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

export function deleteOneUserController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Extract user id from path params and look up the user in mock data.
    const id: string = z.string().uuid().parse(req.params.id);

    // Double check for:
    // 1. Existance of user id.
    // 2. Existing user id is a valid uuid by Zod shema validation.
    // 3. Existing valid user id is in the mock data.
    if (id && mockMenteesArray.find((mentee) => mentee.id === id)) {
      res.status(StatusCodes.NO_CONTENT).json(
        new DefaultAPIResponse(
          // biome-ignore format: added alignment for clarity.
          {
            statusCode      : StatusCodes.NO_CONTENT,
            successMessage  : "Requesetd user successfully deleted by provided id. No content (null) in response.body.data.",
            errorMessage    : null,
            errorDetails    : null,
            data            : null,
            isProductionData: false,
          },
        ),
      );
    } else {
      // If user id is not found in the mock data, report resource not found.
      next(
        new ResourceNotFoundError({
          message: `Requested user with id ${id} is not found.`,
          details:
            "This error is caught by the delete one user controller at user id lookup.",
        }),
      );
    }
  } catch (error) {
    // Gracefully handle Zod schema validation error and unknown error.
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
