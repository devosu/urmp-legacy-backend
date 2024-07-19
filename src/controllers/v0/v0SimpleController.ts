// ./src/controllers/v0/v0SimpleUsersController.ts
//
// Controller functions for create new and read all users.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";

// Local response class, mocks, and schemas imports.
import { mockAdminsArray } from "@mocks/v0/v0MockAdmins.js";
import { mockMenteesArray } from "@mocks/v0/v0MockMentees.js";
import { mockMentorsArray } from "@mocks/v0/v0MockMentors.js";
import {
  mockNewSignupsArray,
  sampleMockNewSignup,
} from "@mocks/v0/v0MockNewSignups.js";
import DefaultAPIResponse from "@utils/DefaultAPIResponse.js";

// Local error and utils imports.

// Simple controller definitions.
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

export function readAllUsersController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.OK).json(
      new DefaultAPIResponse(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode      : StatusCodes.OK,
          successMessage  : "All admins AND non-admin users have been succesfully retrieved. See response.body.data for details.",
          errorMessage    : null,
          errorDetails    : null,
          data            : [
            ...mockAdminsArray,
            ...mockMenteesArray,
            ...mockMentorsArray,
            ...mockNewSignupsArray,
          ],
          isProductionData: false,
        },
      ),
    );
  } catch (error) {
    // Gracefully handle unknown error.
    next(error);
  }
}
