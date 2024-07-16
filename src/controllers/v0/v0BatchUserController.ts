// ./src/controllers/v0/v0BatchUserController.ts
//
// Deterministic http(s) Batch-object handling functions for /v0/users.

// Type imports.
import type {
  AdminSchema,
  MentorSchema,
  NonAdminSchema,
} from "@models/v0/v0UserModel.js";
import type { NextFunction, Request, Response } from "express";

// ExpressJS and http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";

// Local unified api response class imports.
import DefaultAPIResponse from "@utils/DefaultAPIResponse.js";

// Deterministic mock sample data imports.
import { mockAdminsArray } from "@mocks/v0/v0MockAdmins.js";
import { mockApprovedMentorsArray } from "@mocks/v0/v0MockApprovedMentors.js";
import { mockMenteesArray } from "@mocks/v0/v0MockMentees.js";
import { mockMentorsArray } from "@mocks/v0/v0MockMentors.js";
import { mockNewSignupsArray } from "@mocks/v0/v0MockNewSignups.js";

// Deterministic controller function definitions.
export function readAllUsersController(
  req : Request,
  res : Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.OK).json(
      new DefaultAPIResponse<AdminSchema | NonAdminSchema>({
        statusCode      : StatusCodes.OK,
        successMessage  : "All users successfully retrieved.",
        errorMessage    : null,
        errorDetails    : null,
        data            : [
          ...mockNewSignupsArray,
          ...mockMentorsArray,
          ...mockMenteesArray,
          ...mockAdminsArray,
        ],
        isProductionData: false,
      }),
    );
  } catch (error) {
    next(error);
  }
}

export function readBatchUsersController(
  req : Request,
  res : Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.OK).json(
      new DefaultAPIResponse<MentorSchema>({
        statusCode      : StatusCodes.OK,
        successMessage  : "Requested users successfully retrieved.",
        errorMessage    : null,
        errorDetails    : null,
        data            : mockApprovedMentorsArray,
        isProductionData: false,
      }),
    );
  } catch (error) {
    next(error);
  }
}

export function updateBatchUsersController(
  req : Request,
  res : Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.OK).json(
      new DefaultAPIResponse<MentorSchema>({
        statusCode      : StatusCodes.OK,
        successMessage  : "Requested users successfully updated.",
        errorMessage    : null,
        errorDetails    : null,
        data            : mockApprovedMentorsArray,
        isProductionData: false,
      }),
    );
  } catch (error) {
    next(error);
  }
}
