// ./__tests__/controllers/v0/v05NonAdminValidator.test.ts
//
// Behavior tests for (single) NonAdmin schema validation middleware.

// Type imports.
import type { Express, NextFunction, Request, Response } from "express";

// ts-jest testing essential imports.
import { beforeAll, describe, expect, it } from "@jest/globals";
import bodyParser from "body-parser";
import express from "express";
import { StatusCodes } from "http-status-codes";
import request from "supertest";

// Local classes, constants, and schema imports.
import { sampleMockAdmin } from "@mocks/v0/v0MockAdmins.js";
import { sampleMockMentee } from "@mocks/v0/v0MockMentees.js";
import { sampleMockMentor } from "@mocks/v0/v0MockMentors.js";
import { sampleMockNewSignup } from "@mocks/v0/v0MockNewSignups.js";

// Local middleware imports.
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";

// Testing module imports.
import v05NonAdminValidator from "@middlewares/v0/v05NonAdminValidator.js";

// Construct a simple 200 OK controller for testing.
function simple200OKController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  res.status(StatusCodes.OK).json(
    // biome-ignore format: added alignment for clarity.
    {
      statusCode      : StatusCodes.OK,
      successMessage  : "NonAdmin schema validation passed.",
      errorMessage    : null,
      errorDetails    : null,
      data            : [sampleMockNewSignup],
      isProductionData: false,
    },
  );
}

// Setup the testing app.
const VALID_SCHEMA_ROUTE = "/valid-schema";
const INVALID_SCHEMA_ROUTE = "/invalid-schema";
let app: Express;
beforeAll((): void => {
  app = express();

  // IMPORTANT!!
  // Use body-parser middleware to handle post requests.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post(VALID_SCHEMA_ROUTE, v05NonAdminValidator, simple200OKController);
  app.post(INVALID_SCHEMA_ROUTE, v05NonAdminValidator, simple200OKController);

  app.use(defaultErrorHandler);
});

// v05NonAdminSchemaValidator test suite.
describe("The NonAdmin schema validator middleware", () => {
  it("calls next() w/out errors when req.body is valid NonAdmin object. i.e. NewSignup", async () => {
    const response: request.Response = await request(app)
      .post(VALID_SCHEMA_ROUTE)
      .send(sampleMockNewSignup);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data[0]).toStrictEqual(sampleMockNewSignup);
  });

  it("calls next() w/out errors when req.body is valid NonAdmin object. i.e. Mentee", async () => {
    const response: request.Response = await request(app)
      .post(VALID_SCHEMA_ROUTE)
      .send(sampleMockMentee);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data[0]).toBeInstanceOf(Object);
  });

  it("calls next() w/out errors when req.body is valid NonAdmin object. i.e. Mentor", async () => {
    const response: request.Response = await request(app)
      .post(VALID_SCHEMA_ROUTE)
      .send(sampleMockMentor);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data[0]).toBeInstanceOf(Object);
  });

  it("reports a PermissionDeniedError when req.body is Admin object", async () => {
    const response: request.Response = await request(app)
      .post(INVALID_SCHEMA_ROUTE)
      .send(sampleMockAdmin);
    expect(response.status).toBe(StatusCodes.UNAUTHORIZED);
    expect(response.body.statusCode).toBe(StatusCodes.UNAUTHORIZED);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.errorDetails).toBeTruthy();
  });

  it("reports an InvalidSchemaError when req.body is flawed NonAdmin object", async () => {
    const flawedNonAdmin = {
      userType: "NewSignup",
    };
    const response: request.Response = await request(app)
      .post(INVALID_SCHEMA_ROUTE)
      .send(flawedNonAdmin);
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.errorDetails).toBeTruthy();

    // Log the response body to confirm caught by Zodiac schema validation.
    console.log(response.body);
  });
});
