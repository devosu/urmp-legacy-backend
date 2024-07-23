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

// Setup the testing app.
let app: Express;
beforeAll((): void => {
  app = express();
  app.use(HEALTHCHECK_ROUTE, healthcheckRouter());
});

// /healthcheck test suite.
describe("GET /healthcheck", () => {
  it("responds with 200 OK", async () => {
    const response: request.Response =
      await request(app).get(HEALTHCHECK_ROUTE);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.errorMessage).toBeNull();
    expect(response.body.data).toBeNull();
  });
});

describe("Other requests to /healthcheck", () => {
  it("responds with 404 Service Not Found", async () => {
    const response: request.Response =
      await request(app).post(HEALTHCHECK_ROUTE);
    expect(response.body.statusCode).toBe(StatusCodes.NOT_FOUND);
    expect(response.body.successMessage).toBeNull();
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.data).toBeNull();
  });
});
