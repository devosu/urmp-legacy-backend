// ./src/middleware/v0/v05AdminValidator.ts
//
// 5th step in the middleware chain, the Admin user schema validator,
// requires full user schema present in the request body to validate.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and Zod essential imports.
import { ZodError } from "zod";
import { fromError } from "zod-validation-error";

// Local user model and schema imports.
import { Admin, UserType } from "@models/v0/v0UserModel.js";

// Local custom error imports.
import InvalidSchemaError from "@errors/InvalidSchemaError.js";

// Single-schema validator definitions.
export default function v05AdminValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Obtain user type from the request body with fallback to "undefined".
    const userType: string = req.body.userType
      ? req.body.userType
      : "undefined";

    // Continue request handling chain when Mentor schema is valid.
    if (userType === UserType.Enum.Admin) {
      Admin.parse(req.body);
      next();

      // Catch-all for invalid user type or undefined found in the request body.
    } else {
      next(
        new InvalidSchemaError({
          message: `The user type: ${userType}, retrived from request.body.userType, is not a valid user type.`,
          details:
            "This error is caught by the admin user schema validation middleware.",
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
            "This error is caught by the admin user schema validation middleware through Zod, and pretty-printed by zod-validation-error.",
        }),
      );
    } else {
      next(error);
    }
  }
}
