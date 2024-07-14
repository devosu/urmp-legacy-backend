// // ./src/middleware/v0/v0SchemaValidator.ts
// //
// // Dynamic schema validator for single user CRUD operations.

// // Type imports.
// import { NextFunction, Request, Response, } from "express";

// // ExpressJS and Zod essential imports.
// import { z, ZodError, } from "zod";

// // Local user model and schema imports.
// import {
//   AdminSchema,
//   NonAdminUserSchema,
//   NewSignupSchema,
//   MenteeSchema,
//   MentorSchema,
// } from "@models/v0/v0UserModel.js";

// // Local custom error imports.
// import InvalidSchemaError from "@errors/InvalidSchemaError";

// // Single-object schema validator.
// export default function v0SchemaValidator (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ): void {
//   // Obtain user type from the request body and validate accordingly.
//   try {
//     const userType: string = req.body.userType;

//     // Admin users are immutable and cannot be created, updated, or deleted.
//     if (userType === "Admin"){
//       if (req.method === "GET") {
//         AdminSchema.parse(req.body);
//         next();

//       } else {

//       }
//     }

//   // Forward ZodError and unknown error to the centralized error handler.
//   } catch (error) {
//     if (error instanceof ZodError) {
//       next(new InvalidSchemaError(error.errors));
//     } else {
//       next(error);
//     }
//   }
// }
