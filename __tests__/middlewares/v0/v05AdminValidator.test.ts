// ./__tests__/controllers/v0/v05AdminValidator.test.ts
//
// Behavior tests for (single) Admin schema validation middleware,
// declared, not used, since Admins are immutable and should NOT be passed in the request body.

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
import { sampleMockNewSignup } from "@mocks/v0/v0MockNewSignups.js";

// Local middleware imports.
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";

// Testing module imports.
import v05AdminValidator from "@middlewares/v0/v05AdminValidator.js";

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
      successMessage  : "Admin schema validation passed.",
      errorMessage    : null,
      errorDetails    : null,
      data            : [sampleMockAdmin],
      isProductionData: false,
    },
  );
}

// Setup the testing app.
const VALID_ADMIN_SCHEMA_ROUTE = "/valid-admin-schema";
const INVALID_ADMIN_SCHEMA_ROUTE = "/invalid-admin-schema";
let app: Express;
beforeAll((): void => {
  app = express();

  // IMPORTANT!!
  // Use body-parser middleware to handle post requests.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post(VALID_ADMIN_SCHEMA_ROUTE, v05AdminValidator, simple200OKController);
  app.post(
    INVALID_ADMIN_SCHEMA_ROUTE,
    v05AdminValidator,
    simple200OKController,
  );

  app.use(defaultErrorHandler);
});

// v05AdminSchemaValidator test suite.
describe("The Admin schema validator middleware", () => {
  it("calls next() w/out errors when req.body is valid Admin object", async () => {
    const response: request.Response = await request(app)
      .post(VALID_ADMIN_SCHEMA_ROUTE)
      .send(sampleMockAdmin);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data[0]).toStrictEqual(sampleMockAdmin);
  });

  it("reports an InvalidSchemaError when req.body is non-Admin object", async () => {
    const response: request.Response = await request(app)
      .post(INVALID_ADMIN_SCHEMA_ROUTE)
      .send(sampleMockNewSignup);
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.errorDetails).toBeTruthy();
  });

  it("reports an InvalidSchemaError when req.body is flawed Admin object", async () => {
    const flawedAdmin = {
      userType: "Admin",
    };
    const response: request.Response = await request(app)
      .post(INVALID_ADMIN_SCHEMA_ROUTE)
      .send(flawedAdmin);
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.errorDetails).toBeTruthy();

    // Log the response body to confirm caught by Zodiac schema validation.
    console.log(response.body);
  });
});
