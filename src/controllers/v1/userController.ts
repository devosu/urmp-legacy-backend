// ./src/controllers/v1/userController.ts
//
// Http request handling functions for /v1/users and /v1/mentors routes.

// Type imports.
import type { Request, Response } from "express";

// Placeholder controller function definitions.
import { mockApprovedMentors } from "@mocks/v1/mockApprovedMentors.js";

export function createOneUserController(req: Request, res: Response): void {
  console.log(
    "Placeholder createOneUserController. TODO: Actual implementation.",
  );
  res.status(501).send("Not Implemented");
}

export function readAllUsersController(req: Request, res: Response): void {
  console.log(
    "Placeholder readAllUsersController. TODO: Actual implementation.",
  );
  res.status(501).send("Not Implemented");
}

export function readAllApprovedMentorsController(
  req: Request,
  res: Response,
): void {
  console.log(
    "Placeholder readAllApprovedMentorsController. TODO: Actual implementation.",
  );
  res.status(200).json(mockApprovedMentors);
}

export function readAllPendingApprovalUsersController(
  req: Request,
  res: Response,
): void {
  console.log(
    "Placeholder readAllPendingApprovalUsersController. TODO: Actual implementation.",
  );
  res.status(501).send("Not Implemented");
}

export function readOneUserByIdController(req: Request, res: Response): void {
  console.log(
    "Placeholder readOneUserByIdController. TODO: Actual implementation.",
  );
  res.status(501).send("Not Implemented");
}

export function readOneUserByEmailController(
  req: Request,
  res: Response,
): void {
  console.log(
    "Placeholder readOneUserByEmailController. TODO: Actual implementation.",
  );
  res.status(501).send("Not Implemented");
}

export function updateOneUserByIdController(req: Request, res: Response): void {
  console.log(
    "Placeholder updateOneUserByIdController. TODO: Actual implementation.",
  );
  res.status(501).send("Not Implemented");
}

export function updateOneUserByEmailController(
  req: Request,
  res: Response,
): void {
  console.log(
    "Placeholder updateOneUserByEmailController. TODO: Actual implementation.",
  );
  res.status(501).send("Not Implemented");
}

export function deleteOneUserByIdController(req: Request, res: Response): void {
  console.log(
    "Placeholder deleteOneUserByIdController. TODO: Actual implementation.",
  );
  res.status(501).send("Not Implemented");
}

export function deleteOneUserByEmailController(
  req: Request,
  res: Response,
): void {
  console.log(
    "Placeholder deleteOneUserByEmailController. TODO: Actual implementation.",
  );
  res.status(501).send("Not Implemented");
}
