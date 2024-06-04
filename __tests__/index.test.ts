// ./__tests__/index.test.ts
//
// Unittest for routes defined in index.ts.

// Jest/Supertest essential imports.
import { afterAll, describe, expect, it } from '@jest/globals';
import request from 'supertest';

// Testing module imports.
import { app, port, server } from '@src/index';

// Close the server after all tests.
afterAll(done => {
  server.close(done);
});

// Port tests.
describe('Server', () => {
  it('is listening on port 5000', () => {
    expect(port).toBe('5000');
  });
});

// Route tests.
describe('GET /', () => {
  it('responds with 200 Hello World!', async () => {
    const response: request.Response 
      = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

describe('GET /api/healthcheck', () => {
  it('responds with 200 OK', async () => {
    const response: request.Response 
      = await request(app).get('/api/healthcheck');
    expect(response.status).toBe(200);
    expect(response.text).toBe('OK');
  })
})

describe('GET /all-other-routes', () => {
  it('responds with 404 Not Found', async () => {
    const response: request.Response 
      = await request(app).get('/all-other-routes');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not Found');
  });
});
