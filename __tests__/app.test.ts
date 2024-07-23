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

// Testing constants and data imports.
import { sampleMockNewSignup } from "@mocks/v0/v0MockNewSignups.js";
import { HEALTHCHECK_ROUTE } from "@routes/healthcheckRouter.js";
import { V0USERS_ROUTE } from "@routes/v0/v0UsersRouter.js";

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
// Simple, success, deterministic use cases only,
// failure cases can be found in the unit tests.
describe("The backend server", () => {
  // Sub test suite for the /healthcheck router integration.
  it("responds with 200 OK to GET `/healthcheck`", async () => {
    const response: request.Response =
      await request(app).get(HEALTHCHECK_ROUTE);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
  });

  // Sub test suite for the base route ("/") redirect to /healthcheck behavior.
  it("redirects to /healthcheck from the base route", async () => {
    const response: request.Response = await request(app).get("/");

    expect(response.status).toBe(StatusCodes.TEMPORARY_REDIRECT);
    expect(response.header.location).toBe(HEALTHCHECK_ROUTE);
  });

  // Sub test suite for the /v0/users router integration.
  it("responds with 200 OK to GET `/v0/users`", async () => {
    const response: request.Response = await request(app).get(V0USERS_ROUTE);

    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.data).toBeInstanceOf(Array);
  });

  it("responds with 201 CREATED to POST `/v0/users/new`", async () => {
    const response: request.Response = await request(app)
      .post(`${V0USERS_ROUTE}/new`)
      .send(sampleMockNewSignup);

    expect(response.body.statusCode).toBe(StatusCodes.CREATED);
    expect(response.body.data[0]).toBeInstanceOf(Object);
  });

  // Sub test suite for the catch-all 404 Service Not Found behavior.
  it("responds with 404 Service Not Found to other invalid-route request", async () => {
    const response: request.Response =
      await request(app).post("/invalid-route");
    expect(response.body.statusCode).toBe(StatusCodes.NOT_FOUND);
  });
});
