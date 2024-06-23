// ./__tests__/app.test.ts
//
// Integration tests for the backend entrypoint.

// ts-jest testing essential imports.
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import { Express } from 'express';
import request from 'supertest';

// Testing module imports.
import { createExpressApp, startNodeServer } from '@src/app';

// IMPORTANT!!
// ts-jest does NOT follow ESNEXT import format.
// DO NOT use import from .js, use original import from (see above).

// Set up the testing target port, app, and start the test server.
const port: string = '5001';
let app: Express;
let server: any;
beforeAll((): void => {
  app = createExpressApp();
  server = startNodeServer(app, port);
})

// Tear down the test server after all tests.
afterAll((done): void => {
  server.close(done);
});

// Server behavior test suite.
describe('The backend server', () => {
  it('responds with 200 Hello World! to GET `/`', async () => {
    const response: request.Response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });

  it('responds with 404 Service Not Found to other `/` request', async () => {
    const response: request.Response = await request(app).post('/');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Service Not Found');
  });
  
  it('responds with 200 OK to GET `/healthcheck`', async () => {
    const response: request.Response = await request(app).get('/healthcheck');
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  });

  it('responds with 404 Service Not Found to other `/healthcheck` request', async () => {
    const response: request.Response = await request(app).delete('/healthcheck');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Service Not Found');
  });

  it('responds with 404 Service Not Found to other invalid-route request', async () => {
    const response: request.Response = await request(app).post('/invalid-route');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Service Not Found');
  });

});