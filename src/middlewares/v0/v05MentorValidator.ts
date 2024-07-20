// ./src/middleware/v0/v05MentorValidator.ts
//
// 5th step in the middleware chain, the Mentor user schema validator,
// requires full user schema present in the request body to validate.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and Zod essential imports.
import { ZodError, z } from "zod";
import { fromError } from "zod-validation-error";

// Local user model and schema imports.
import { Mentor, UserType } from "@models/v0/v0UserModel.js";

// Local custom error imports.
import InvalidSchemaError from "@errors/InvalidSchemaError.js";

// Single-schema validator definitions.
export default function v05MentorValidator(
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
    if (userType === UserType.Enum.Mentor) {
      // Add custom validation for Mentor schema, w/ early abort.
      Mentor.superRefine((data: Mentor, ctx: z.RefinementCtx) => {
        // 1. Application timestamp cannot be earlier than creation timestamp.
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

        // 2. Approval timestamp cannot be earlier than application timestamp.
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

        // 3. Approval timestamp cannot be present when admin approved field is false,
        //    ...and must be present when admin approved field is true.
        if (data.approvalTimestamp && !data.adminApproved) {
          ctx.addIssue({
            code: z.ZodIssueCode.invalid_date,
            message:
              "Approval timestamp cannot be present when admin proved field is false.",
            path: ["approvalTimestamp"],
            fatal: true,
          });
          return z.NEVER;
        }

        if (!data.approvalTimestamp && data.adminApproved) {
          ctx.addIssue({
            code: z.ZodIssueCode.invalid_date,
            message:
              "Approval timestamp must be present when admin proved field is true.",
            path: ["approvalTimestamp"],
            fatal: true,
          });
          return z.NEVER;
        }
      }).parse(req.body);
      next();

      // Catch-all for invalid user type or undefined found in the request body.
    } else {
      next(
        new InvalidSchemaError({
          message: `The user type: ${userType}, retrived from request.body.userType, is not a valid user type.`,
          details:
            "This error is caught by the mentor user schema validation middleware.",
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
            "This error is caught by the mentor user schema validation middleware through Zod, and pretty-printed by zod-validation-error.",
        }),
      );
    } else {
      next(error);
    }
  }
}
