// ./__tests__/app.test.ts
//
// Integration tests for the backend entrypoints.

// Node.js built-in module and type imports.
import type http from "node:http";

// Type imports.
import type { Express } from "express";

// ts-jest testing essential imports.
import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { StatusCodes } from "http-status-codes";
import request from "supertest";

// Testing module imports.
import { createExpressApp, startNodeServer } from "@src/app.js";

// IMPORTANT!!
// ts-jest does NOT follow ESNEXT import format.
// DO NOT use import from .js, use original import from (see above).

// Set up the testing target port, app, and start the test server.
const port: string = "5001";
let app: Express;
let server: http.Server;
beforeAll((): void => {
  app = createExpressApp();
  server = startNodeServer(app, port);
});

// Tear down the test server after all tests.
afterAll((done): void => {
  server.close(done);
});

// Server behavior test suite.
describe("The backend server", () => {
  // Test suite for the /healthcheck router integration.
  const testHealthcheckPath: string = "/healthcheck";

  it("responds with 200 OK to GET `/healthcheck`", async () => {
    const response: request.Response =
      await request(app).get(testHealthcheckPath);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
  });

  it("responds with 404 Service Not Found to other `/healthcheck` request", async () => {
    const response: request.Response =
      await request(app).delete(testHealthcheckPath);
    expect(response.body.statusCode).toBe(StatusCodes.NOT_FOUND);
  });

  // Test Suite for the base route ("/") redirect to /healthcheck behavior.
  it("redirects to /healthcheck from the base route", async () => {
    const response: request.Response = await request(app).get("/");
    expect(response.status).toBe(StatusCodes.TEMPORARY_REDIRECT);
    expect(response.header.location).toBe(testHealthcheckPath);
  });

  // Test suite for the catch-all 404 Service Not Found behavior.
  it("responds with 404 Service Not Found to other invalid-route request", async () => {
    const response: request.Response =
      await request(app).post("/invalid-route");
    expect(response.body.statusCode).toBe(StatusCodes.NOT_FOUND);
  });
});
