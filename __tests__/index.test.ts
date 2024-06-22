// ./__tests__/index.test.ts
//
// Unittest for routes defined in index.ts.

// Jest/Supertest essential imports.
import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import { Express } from 'express';
import request from 'supertest';

// Testing module imports.
import { createExpressApp, serverPort, startNodeServer } from '@src/index';

// Setup the testing target port, app, and server before all tests.
let port: string;
let app: Express;
let server: any;
beforeAll((): void => {
  port = serverPort;
  app = createExpressApp();
  server = startNodeServer(app, port);
});

// Close the server after all tests.
afterAll((done): void => {
  server.close(done);
});

// Port tests.
describe('Server port', () => {
  it('is set to 5000', () => {
    expect(port).toBe('5000');
  });
});

// Route tests.
describe('GET /', () => {
  it('responds with 200 Hello World!', async () => {
    const response: request.Response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

describe('GET /healthcheck', () => {
  it('responds with 200 OK', async () => {
    const response: request.Response = await request(app).get('/healthcheck');
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  })
})

describe('GET /all-other-routes', () => {
  it('responds with 404 Not Found', async () => {
    const response: request.Response = await request(app).get('/all-other-routes');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not Found');
  });
});
