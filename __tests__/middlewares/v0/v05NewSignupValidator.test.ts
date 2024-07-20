// ./__tests__/controllers/v0/v05NewSignupValidator.test.ts
//
// Behavior tests for (single) NewSignup schema validation middleware.

// Type imports.
import type { Express, NextFunction, Request, Response } from "express";

// ts-jest testing essential imports.
import { beforeAll, describe, expect, it } from "@jest/globals";
import bodyParser from "body-parser";
import express from "express";
import { StatusCodes } from "http-status-codes";
import request from "supertest";

// Local classes, constants, and schema imports.
import { sampleMockMentee } from "@mocks/v0/v0MockMentees.js";
import { sampleMockNewSignup } from "@mocks/v0/v0MockNewSignups.js";

// Local middleware imports.
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";

// Testing module imports.
import v05NewSignupValidator from "@middlewares/v0/v05NewSignupValidator.js";

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
      successMessage  : "NewSignup schema validation passed.",
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

  app.post(VALID_SCHEMA_ROUTE, v05NewSignupValidator, simple200OKController);
  app.post(INVALID_SCHEMA_ROUTE, v05NewSignupValidator, simple200OKController);

  app.use(defaultErrorHandler);
});

// v05NewSignupSchemaValidator test suite.
describe("The NewSignup schema validator middleware", () => {
  it("calls next() w/out errors when req.body is valid NewSignup object", async () => {
    const response: request.Response = await request(app)
      .post(VALID_SCHEMA_ROUTE)
      .send(sampleMockNewSignup);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data[0]).toStrictEqual(sampleMockNewSignup);
  });

  it("reports an InvalidSchemaError when req.body is non-NewSignup object", async () => {
    const response: request.Response = await request(app)
      .post(INVALID_SCHEMA_ROUTE)
      .send(sampleMockMentee);
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.errorDetails).toBeTruthy();
  });

  it("reports an InvalidSchemaError when req.body is flawed NewSignup object", async () => {
    const flawedNewSignup = {
      userType: "NewSignup",
    };
    const response: request.Response = await request(app)
      .post(INVALID_SCHEMA_ROUTE)
      .send(flawedNewSignup);
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.errorDetails).toBeTruthy();

    // Log the response body to confirm caught by Zodiac schema validation.
    console.log(response.body);
  });
});
