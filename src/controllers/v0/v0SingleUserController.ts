// ./src/controllers/v0/v0SingleUserController.ts
//
// Deterministic http(s) single-object handling functions for /v0/users.

// Type imports.
import type {
  MenteeSchema,
  MentorSchema,
  NewSignupSchema,
} from "@models/v0/v0UserModel.js";
import type { NextFunction, Request, Response } from "express";

// ExpressJS and http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";

// Local unified api response class imports.
import DefaultAPIResponse from "@utils/DefaultAPIResponse.js";

// Deterministic mock sample data imports.
import {
  sampleMockApprovedMentor,
  sampleMockBeforeApprovedMentor,
} from "@mocks/v0/v0MockApprovedMentors.js";
import {
  sampleMockBeforeApprovedMentee,
  sampleMockMentee,
} from "@mocks/v0/v0MockMentees.js";
import { sampleMockNewSignup } from "@mocks/v0/v0MockNewSignups.js";

// Deterministic controller function definitions.
export function createSingleNewSignupController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.CREATED).json(
      new DefaultAPIResponse<NewSignupSchema>(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode      : StatusCodes.CREATED,
          successMessage  : "New user successfully created.",
          errorMessage    : null,
          errorDetails    : null,
          data            : [sampleMockNewSignup,],
          isProductionData: false,
        },
      ),
    );
  } catch (error) {
    next(error);
  }
}

export function readSingleUserController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.OK).json(
      new DefaultAPIResponse<MentorSchema>(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode      : StatusCodes.OK,
          successMessage  : "Requested user successfully retrieved.",
          errorMessage    : null,
          errorDetails    : null,
          data            : [sampleMockBeforeApprovedMentor,],
          isProductionData: false,
        },
      ),
    );
  } catch (error) {
    next(error);
  }
}

export function updateSingleUserController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.OK).json(
      new DefaultAPIResponse<MentorSchema>(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode      : StatusCodes.OK,
          successMessage  : "Requested user successfully updated.",
          errorMessage    : null,
          errorDetails    : null,
          data            : [sampleMockApprovedMentor,],
          isProductionData: false,
        },
      ),
    );
  } catch (error) {
    next(error);
  }
}

export function deleteSingleUserController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.NO_CONTENT).json(
      new DefaultAPIResponse<string>(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode      : StatusCodes.NO_CONTENT,
          successMessage  : "Requested user successfully deleted.",
          errorMessage    : null,
          errorDetails    : null,
          data            : null,
          isProductionData: null,
        },
      ),
    );
  } catch (error) {
    next(error);
  }
}

export function readSingleUserByEmailController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.OK).json(
      new DefaultAPIResponse<MenteeSchema>(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode      : StatusCodes.OK,
          successMessage  : "Requested user successfully retrieved.",
          errorMessage    : null,
          errorDetails    : null,
          data            : [sampleMockBeforeApprovedMentee,],
          isProductionData: false,
        },
      ),
    );
  } catch (error) {
    next(error);
  }
}

export function updateSingleUserByEmailController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.OK).json(
      new DefaultAPIResponse<MenteeSchema>(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode      : StatusCodes.OK,
          successMessage  : "Requested user successfully updated.",
          errorMessage    : null,
          errorDetails    : null,
          data            : [sampleMockMentee,],
          isProductionData: false,
        },
      ),
    );
  } catch (error) {
    next(error);
  }
}

export function deleteSingleUserByEmailController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.NO_CONTENT).json(
      new DefaultAPIResponse<string>(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode      : StatusCodes.NO_CONTENT,
          successMessage  : "Requested user successfully deleted.",
          errorMessage    : null,
          errorDetails    : null,
          data            : null,
          isProductionData: null,
        },
      ),
    );
  } catch (error) {
    next(error);
  }
}
