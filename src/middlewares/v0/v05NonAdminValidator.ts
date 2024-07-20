// ./src/middleware/v0/v05NonAdminValidator.ts
//
// 5th step in the middleware chain, the (general) NonAdmin user schema validator,
// requires full user schema present in the request body to validate.
// Implemented as a wrapper for NewSignup, Mentee and Mentor user schema validators.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and Zod essential imports.
import { ZodError } from "zod";
import { fromError } from "zod-validation-error";

// Local user model and schema imports.
import { UserType } from "@models/v0/v0UserModel.js";

// Local custom error imports.
import InvalidSchemaError from "@errors/InvalidSchemaError.js";
import PermissionDeniedError from "@errors/PermissionDeniedError.js";

// Local specific non-admin validator middleware imports.
import v05MenteeValidator from "@middlewares/v0/v05MenteeValidator.js";
import v05MentorValidator from "@middlewares/v0/v05MentorValidator.js";
import v05NewSignupValidator from "@middlewares/v0/v05NewSignupValidator.js";

// Single-schema validator definitions.
export default function v05NonAdminValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Obtain user type from the request body with fallback to "undefined".
    const userType: string = req.body.userType
      ? req.body.userType
      : "undefined";

    if (userType === UserType.Enum.NewSignup) {
      v05NewSignupValidator(req, res, next);
    } else if (userType === UserType.Enum.Mentee) {
      v05MenteeValidator(req, res, next);
    } else if (userType === UserType.Enum.Mentor) {
      v05MentorValidator(req, res, next);
    } else if (userType === UserType.Enum.Admin) {
      next(
        new PermissionDeniedError({
          message:
            "Admin users are immutable and cannot be created, updated, or deleted.",
          details:
            "This error is caught by the (general) non-admin user schema validation middleware.",
        }),
      );

      // Catch-all for invalid user type or undefined found in the request body.
    } else {
      next(
        new InvalidSchemaError({
          message: `The user type: ${userType}, retrived from request.body.userType, is not a valid user type.`,
          details:
            "This error is caught by the (general) non-admin user schema validation middleware.",
        }),
      );
    }

    // Gracefully handle Zod schema validation error and unknown error.
  } catch (error) {
    if (error instanceof ZodError) {
      next(
        new InvalidSchemaError({
          message: fromError(error).message,
          details:
            "This error is caught by the (general) non-admin user schema validation middleware through Zod, and pretty-printed by zod-validation-error.",
        }),
      );
    } else {
      next(error);
    }
  }
}
