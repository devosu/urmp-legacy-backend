// ./__tests__/routes/healthcheckRouter.test.ts
//
// Unittests for the /healthcheck route.

// Type imports.
import type { Express } from "express";

// ts-jest testing essential imports.
import { beforeAll, describe, expect, it } from "@jest/globals";
import express from "express";
import { StatusCodes } from "http-status-codes";
import request from "supertest";

// Local classes imports.

// Testing module imports.
import healthcheckRouter, {
  HEALTHCHECK_ROUTE,
} from "@routes/healthcheckRouter.js";

// IMPORTANT!!
// ts-jest does NOT follow ESNEXT import format.
// DO NOT use import from .js, use original import from (see above).

// Setup the testing app.
let app: Express;
const testPath: string = "/healthcheck";
const testResCode: number = StatusCodes.OK;
const testResMessage: string =
  "Research Mentorship Project backend is live and healthy.";
const testErrCode: number = StatusCodes.NOT_FOUND;
const testErrMessage: string =
  "404 Not Found: Requested service POST /healthcheck is undefined.";
beforeAll((): void => {
  app = express();
  app.use(testPath, healthcheckRouter());
});

// /healthcheck test suite.
describe("GET /healthcheck", () => {
  it("responds with 200 OK", async () => {
    const response: request.Response =
      await request(app).get(HEALTHCHECK_ROUTE);
    expect(response.status).toBe(testResCode);
    expect(response.body.statusCode).toBe(testResCode);
    expect(response.body.successMessage).toBe(testResMessage);
  });
});

describe("Other requests to /healthcheck", () => {
  it("responds with 404 Service Not Found", async () => {
    const response: request.Response =
      await request(app).post(HEALTHCHECK_ROUTE);
    expect(response.body.statusCode).toBe(testErrCode);
    expect(response.body.errorMessage).toBe(testErrMessage);
  });
});
