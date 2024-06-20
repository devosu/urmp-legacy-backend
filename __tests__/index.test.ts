// ./__tests__/index.test.ts
//
// Unittest for routes defined in index.ts.

// Jest/Supertest essential imports.
import { afterAll, describe, expect, it } from '@jest/globals';
import request from 'supertest';

// Testing module imports.
import { User } from '@routes/users';
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

// userRouter tests.
describe('/v1/users endpoint', () => {
  it('to "GET /", it responds with 200 and an array of all user data', async () => {
    const response: request.Response = await request(app).get('/v1/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    response.body.forEach((user: User) => {
      expect(user).toEqual(expect.objectContaining({
        id: expect.any(String),
        creationTimestamp: expect.any(String),
        userType: expect.any(String),
        adminApproved: expect.any(Boolean),
        firstName: expect.any(String),
        lastName: expect.any(String),
        emailAddress: expect.any(String),
        profilePictureLink: expect.any(String),
        academicYear: expect.any(String),
        currentMajor: expect.any(String),
        // preProfessionalRoute: expect.any(String),
      }));
    });
  });

  it('to "GET /:id" (valid id), it responds with 200 and a user object', async () => {
    const response: request.Response = await request(app).get('/v1/users/01J0VPP20DMVKVPVKNDT15D4V0');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({
      id: expect.any(String),
      creationTimestamp: expect.any(String),
      userType: expect.any(String),
      adminApproved: expect.any(Boolean),
      firstName: expect.any(String),
      lastName: expect.any(String),
      emailAddress: expect.any(String),
      profilePictureLink: expect.any(String),
      academicYear: expect.any(String),
      currentMajor: expect.any(String),
      // preProfessionalRoute: expect.any(String),
    }));
  });

  it('to "GET /:id" (invalid id), it responds with 404 and an error message', async () => {
    const response: request.Response = await request(app).get('/v1/users/invalid-id');
    expect(response.status).toBe(404);
    expect(response.text).toBe('User not found');
  });

  it('to "POST /", it response with 201 and a user object', async () => {
    const newUser: Partial<User> = {
      userType: 'mentee',
      adminApproved: false,
      firstName: 'John',
      lastName: 'Doe',
      emailAddress: 'doe.42069@osu.edu',
      profilePictureLink: 'http://dummyimage.com/192x216.png/dddddd/000000',
      academicYear: 'freshman (1st year)',
      currentMajor: 'computer science and engineering',
    }
    const response: request.Response 
      = await request(app).post('/v1/users').send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.objectContaining({
      id: expect.any(String),
      creationTimestamp: expect.any(String),
      userType: expect.any(String),
      adminApproved: expect.any(Boolean),
      firstName: expect.any(String),
      lastName: expect.any(String),
      emailAddress: expect.any(String),
      profilePictureLink: expect.any(String),
      academicYear: expect.any(String),
      currentMajor: expect.any(String),
      // preProfessionalRoute: expect.any(String),
    }));
  });
});

// Simple route tests.
describe('GET /', () => {
  it('responds with 200 Hello World!', async () => {
    const response: request.Response 
      = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

describe('GET /healthcheck', () => {
  it('responds with 200 OK', async () => {
    const response: request.Response 
      = await request(app).get('/healthcheck');
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
