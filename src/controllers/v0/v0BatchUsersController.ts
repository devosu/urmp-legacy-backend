// ./src/controllers/v0/v0BatchUsersController.ts
//
// Controller functions for batch users read and update operations.
// Omitting delete to prevent accidental batch data loss.

// Type imports.
import type { Mentee, Mentor } from "@models/v0/v0UserModel.js";
import type { NextFunction, Request, Response } from "express";

// ExpressJS, Zod, and http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import { fromError } from "zod-validation-error";

// Local response class, mocks, and schemas imports.
import { mockMenteesArray } from "@mocks/v0/v0MockMentees.js";
import { mockMentorsArray } from "@mocks/v0/v0MockMentors.js";
import { UserType } from "@models/v0/v0UserModel.js";
import DefaultAPIResponse from "@utils/DefaultAPIResponse.js";

// Local error and utils imports.
import InvalidQueryParamsError from "@errors/InvalidPathParamsError.js";

// Batch ops controller definitions,
// using ONLY the `id` path params,
// NOT using ANY query params.

export const mockMenteesMentorsArray = [
  ...mockMenteesArray,
  ...mockMentorsArray,
];

export function readBatchUsersController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    let queryUserType: UserType | undefined = undefined;
    if (req.query.userType) {
      queryUserType = UserType.parse(req.query.userType);
    }

    let queryAdminApproved: boolean | undefined = undefined;
    if (req.query.adminApproved === "true") {
      queryAdminApproved = true;
    } else if (req.query.adminApproved === "false") {
      queryAdminApproved = false;
    } else if (req.query.adminApproved === undefined) {
      queryAdminApproved = undefined;
    } else {
      next(
        new InvalidQueryParamsError({
          message:
            "Batch request contains invalid value for 'adminApproved' query parameter.",
          details:
            "This error is caught by the reach batch user controller at query parameter validation.",
        }),
      );
    }

    const filterResults: Array<Mentee | Mentor> =
      mockMenteesMentorsArray.filter((user) => {
        if (queryUserType && queryAdminApproved) {
          return (
            user.userType === queryUserType &&
            user.adminApproved === queryAdminApproved
          );
        }

        if (queryUserType) {
          return user.userType === queryUserType;
        }

        if (queryAdminApproved) {
          return user.adminApproved === queryAdminApproved;
        }

        // If no query params are provided, return all users.
        return true;
      });

    res.status(StatusCodes.OK).json(
      new DefaultAPIResponse(
        // biome-ignore format: added alignment for clarity.
        {
          statusCode      : StatusCodes.OK,
          successMessage  : "Requesetd users found and filtered successfully. See response.body.data for details.",
          errorMessage    : null,
          errorDetails    : null,
          data            : filterResults,
          isProductionData: false,
        },
      ),
    );
  } catch (error) {
    // Gracefully handle Zod schema validation error and unknown error.
    if (error instanceof ZodError) {
      next(
        new InvalidQueryParamsError({
          message: fromError(error).toString(),
          details:
            "This error is caught by the read batch user controller at query param validation.",
        }),
      );
    } else {
      next(error);
    }
  }
}

export function updateBatchUsersController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  readBatchUsersController(req, res, next);
}
