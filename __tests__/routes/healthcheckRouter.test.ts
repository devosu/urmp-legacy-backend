// ./__tests__/routes/healthcheckRouter.test.ts
//
// Unittests for the /healthcheck route.

// Type imports.
import type { Express } from "express";

// ts-jest testing essential imports.
import { beforeAll, describe, expect, it } from "@jest/globals";
import express from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import request from "supertest";

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
const testResText: string = ReasonPhrases.OK;
const testErrCode: number = StatusCodes.NOT_FOUND;
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
    expect(response.text).toBe(testResText);
  });
});

describe("Other requests to /healthcheck", () => {
  it("responds with 404 Service Not Found", async () => {
    const response: request.Response =
      await request(app).post(HEALTHCHECK_ROUTE);
    expect(response.status).toBe(testErrCode);

    // Log the response message for human review.
    console.log(response.text);
  });
});
