// ./src/controllers/v0/userController.ts
//
// Deterministic http(s) request handling functions for /v0/users.

// Type imports.
import type { NextFunction, Request, Response } from "express";

// ExpressJS and http-status-codes essential imports.
import { StatusCodes } from "http-status-codes";

// Deterministic mock sample data imports.
import { sampleMockNewSignup } from "@mocks/v0/v0MockNewSignups.js";

// Deterministic controller function definitions.
export function createSingleNewSignupController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    res.status(StatusCodes.CREATED).json(sampleMockNewSignup);
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
    res.status(StatusCodes.OK).json(sampleMockNewSignup);
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
    res.status(StatusCodes.OK).json(sampleMockNewSignup);
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
    res.status(StatusCodes.NO_CONTENT).send();
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
    res.status(StatusCodes.OK).json(sampleMockNewSignup);
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
    res.status(StatusCodes.OK).json(sampleMockNewSignup);
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
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    next(error);
  }
}
