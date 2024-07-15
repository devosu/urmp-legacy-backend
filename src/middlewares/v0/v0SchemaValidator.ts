// ./src/middleware/v0/v0SchemaValidator.ts
//
// Dynamic schema validator for single user CRUD operations.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and Zod essential imports.
import { ZodError } from "zod";
import { fromError } from "zod-validation-error";

// Local user model and schema imports.
import {
  MenteeSchema,
  MentorSchema,
  NewSignupSchema,
  UserTypes,
} from "@models/v0/v0UserModel.js";

// Local custom error imports.
import PermissionDeniedError from "@errors/PermissionDeniedError.js";
import InvalidSchemaError from "@src/errors/InvalidSchemaError.js";

// Single-object schema validator.
export default function v0SchemaValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Obtain user type from the request body and validate accordingly.
    const userType: string = req.body.userType;

    if (userType === UserTypes.enum.Admin) {
      // Admin users are immutable and cannot be created, updated, or deleted.
      next(
        new PermissionDeniedError(
          "Admin users are immutable and cannot be created, updated, or deleted.",
          "This error is detected before Zod schema validation.",
        ),
      );
    } else if (userType === UserTypes.enum.NewSignup) {
      // Continue request handling chain when NewSignup schema is valid.
      NewSignupSchema.parse(req.body);
      next();
    } else if (userType === UserTypes.enum.Mentee) {
      // Continue request handling chain when Mentee schema is valid.
      MenteeSchema.parse(req.body);
      next();
    } else if (userType === UserTypes.enum.Mentor) {
      // Continue request handling chain when Mentor schema is valid.
      MentorSchema.parse(req.body);
      next();
    } else {
      // Catch-all for invalid user type found in the request body.
      const userTypeOutput: string = userType ? userType : "undefined";
      next(
        new InvalidSchemaError(
          `${userTypeOutput} is not a valid user type.`,
          "This error is detected before Zod schema validation.",
        ),
      );
    }

    // Forward ZodError and unknown error to the centralized error handler.
  } catch (error) {
    // Gracefully handle ZodError and unknown error.
    if (error instanceof ZodError) {
      next(
        new InvalidSchemaError(
          fromError(error).message,
          "This error is detected through Zod and pretty-printed by zod-validation-error.",
        ),
      );
    } else {
      next(error);
    }
  }
}
