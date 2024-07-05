// ./__tests__/routes/healthcheck.test.ts
//
// Unittests for the /healthcheck route.

// Type imports.
import type { Express } from "express";

// ts-jest testing essential imports.
import { beforeAll, describe, expect, it } from "@jest/globals";
import express from "express";
import request from "supertest";

// Testing module imports.
import healthcheckRouter from "@routes/healthcheck";

// IMPORTANT!!
// ts-jest does NOT follow ESNEXT import format.
// DO NOT use import from .js, use original import from (see above).

// Setup the testing app.
let app: Express;
const testPath: string = "/healthcheck";
const testResCode: number = 200;
const testResText: string = "OK";
const testErrCode: number = 404;
const testErrText: string = "Service Not Found";
beforeAll((): void => {
  app = express();
  app.use(testPath, healthcheckRouter());
});

// /healthcheck test suite.
describe("GET /healthcheck", () => {
  it("responds with 200 OK", async () => {
    const response: request.Response = await request(app).get(testPath);
    expect(response.status).toBe(testResCode);
    expect(response.text).toBe(testResText);
  });
});

describe("Other requests to /healthcheck", () => {
  it("responds with 404 Service Not Found", async () => {
    const response: request.Response = await request(app).post(testPath);
    expect(response.status).toBe(testErrCode);
    expect(response.text).toBe(testErrText);
  });
});
