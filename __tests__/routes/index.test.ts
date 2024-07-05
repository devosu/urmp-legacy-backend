// ./__tests__/routes/index.test.ts
//
// Unittests for the / (index) route.

// Type imports.
import type { Express } from "express";

// ts-jest testing essential imports.
import { beforeAll, describe, expect, it } from "@jest/globals";
import express from "express";
import request from "supertest";

// Testing module imports.
import indexRouter from "@routes/index";

// IMPORTANT!!
// ts-jest does NOT follow ESNEXT import format.
// DO NOT use import from .js, use original import from (see above).

// Setup the testing app.
let app: Express;
const testPath: string = "/";
const testResCode: number = 200;
const testResText: string = "Hello World!";
beforeAll((): void => {
  app = express();
  app.use(testPath, indexRouter());
});

// /healthcheck test suite.
describe("GET /", () => {
  it("responds with 200 Hello World!", async () => {
    const response: request.Response = await request(app).get(testPath);
    expect(response.status).toBe(testResCode);
    expect(response.text).toBe(testResText);
  });
});
