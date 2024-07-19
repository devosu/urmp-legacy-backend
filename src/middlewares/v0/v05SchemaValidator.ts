// ./src/middleware/v0/v05SchemaValidator.ts
//
// 5th step in the middleware chain, the dynamic single schema validator,
// requires full user schema present in the request body to validate.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and Zod essential imports.
import { ZodError, z } from "zod";
import { fromError } from "zod-validation-error";

// Local user model and schema imports.
import {
  Mentee,
  Mentor,
  NewSignup,
  UserType,
} from "@models/v0/v0UserModel.js";

// Local custom error imports.
import InvalidSchemaError from "@errors/InvalidSchemaError.js";
import PermissionDeniedError from "@errors/PermissionDeniedError.js";

// Single-object schema validator.
export default function v0SchemaValidator(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    // Obtain user type from the request body and validate accordingly.
    const userType: string = req.body.userType;

    if (userType === UserType.Enum.Admin) {
      // Admin users are immutable and cannot be created, updated, or deleted.
      next(
        new PermissionDeniedError({
          message:
            "Admin users are immutable and cannot be created, updated, or deleted.",
          details: "This error is caught during user schema validation.",
        }),
      );
    } else if (userType === UserType.Enum.NewSignup) {
      NewSignup.parse(req.body);

      // Continue request handling chain when NewSignup schema is valid.
      next();
    } else if (userType === UserType.Enum.Mentee) {
      // Add custom validation for Mentee schema, w/ early abort.
      // 1. Application timestamp cannot be earlier than creation timestamp.
      // 2. Approval timestamp cannot be earlier than application timestamp.
      // 3. ... (add more custom validations here)
      // The aborted validation will throw a ZodError caught by the catch block.
      Mentee.superRefine((data: Mentee, ctx: z.RefinementCtx) => {
        if (
          new Date(data.applicationTimestamp) <
          new Date(data.creationTimestamp)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.invalid_date,
            message:
              "Application timestamp cannot be earlier than creation timestamp.",
            path: ["applicationTimestamp"],
            fatal: true,
          });
          return z.NEVER;
        }

        if (
          data.approvalTimestamp &&
          new Date(data.approvalTimestamp) <
            new Date(data.applicationTimestamp)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.invalid_date,
            message:
              "Approval timestamp cannot be earlier than application timestamp.",
            path: ["approvalTimestamp"],
            fatal: true,
          });
          return z.NEVER;
        }
      }).parse(req.body);

      // Continue request handling chain when Mentee schema is valid.
      next();
    } else if (userType === UserType.Enum.Mentor) {
      // Add custom validation for Mentor schema, w/ early abort.
      // 1. Application timestamp cannot be earlier than creation timestamp.
      // 2. Approval timestamp cannot be earlier than application timestamp.
      // 3. ... (add more custom validations here)
      // The aborted validation will throw a ZodError caught by the catch block.
      Mentor.superRefine((data: Mentor, ctx: z.RefinementCtx) => {
        if (
          new Date(data.applicationTimestamp) <
          new Date(data.creationTimestamp)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.invalid_date,
            message:
              "Application timestamp cannot be earlier than creation timestamp.",
            path: ["applicationTimestamp"],
            fatal: true,
          });
          return z.NEVER;
        }

        if (
          data.approvalTimestamp &&
          new Date(data.approvalTimestamp) <
            new Date(data.applicationTimestamp)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.invalid_date,
            message:
              "Approval timestamp cannot be earlier than application timestamp.",
            path: ["approvalTimestamp"],
            fatal: true,
          });
          return z.NEVER;
        }
      }).parse(req.body);

      // Continue request handling chain when Mentor schema is valid.
      next();
    } else {
      // Catch-all for invalid user type found in the request body.
      const userTypeOutput: string = userType ? userType : "undefined";
      next(
        new InvalidSchemaError({
          message: `${userTypeOutput} is not a valid user type.`,
          details:
            "This error is caught by the user schema validation middleware.",
        }),
      );
    }

    // Forward ZodError and unknown error to the centralized error handler.
  } catch (error) {
    // Gracefully handle ZodError and unknown error.
    if (error instanceof ZodError) {
      next(
        new InvalidSchemaError({
          message: fromError(error).message,
          details:
            "This error is caught by the user schema validation middleware through Zod, and pretty-printed by zod-validation-error.",
        }),
      );
    } else {
      next(error);
    }
  }
}
