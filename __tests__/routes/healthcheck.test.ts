// ./__tests__/routes/healthcheck.test.ts
//
// Unittests for the /healthcheck route.

// ts-jest testing essential imports.
import { beforeAll, describe, expect, it } from '@jest/globals';
import express, { Express } from 'express';
import request from 'supertest';

// Testing module imports.
import healthcheckRouter from '@routes/healthcheck';

// Setup the testing app.
let app: Express;
const testPath: string = '/healthcheck';
const testResCode: number = 200;
const testResText: string = 'OK';
beforeAll((): void => {
  app = express();
  app.use(testPath, healthcheckRouter());
});

// /healthcheck test suite.
describe('GET /healthcheck', () => {
  it('responds with 200 OK', async () => {
    const response: request.Response = await request(app).get(testPath);
    expect(response.status).toBe(testResCode);
    expect(response.text).toBe(testResText);
  });
});
