// ./__tests__/controllers/v0/v0SingleUserController.test.ts
//
// Behavior tests for single user CRUD ops controllers,
// used for the /v0/users/new and the /v0/users/:id endpoints.

// Type imports.
import type { Express } from "express";

// ts-jest testing essential imports.
import { beforeAll, describe, expect, it } from "@jest/globals";
import bodyParser from "body-parser";
import express from "express";
import { StatusCodes } from "http-status-codes";
import request from "supertest";

// Local classes, constants, and schema imports.
import { sampleMockMentee } from "@mocks/v0/v0MockMentees.js";
import { sampleMockNewSignup } from "@mocks/v0/v0MockNewSignups.js";
import { V0USERS_ROUTE } from "@routes/v0/v0UsersRouter.js";

// Local middleware imports.
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";
import v05MenteeValidator from "@middlewares/v0/v05MenteeValidator.js";
import v05NewSignupValidator from "@middlewares/v0/v05NewSignupValidator.js";

// Testing module imports.
import {
  createNewSignupController,
  deleteOneUserController,
  readOneUserController,
  updateOneUserController,
} from "@controllers/v0/v0SingleUserController.js";

// Setup the testing app.
let app: Express;
beforeAll((): void => {
  app = express();

  // IMPORTANT!!
  // Use body-parser middleware to handle post requests.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post(
    `${V0USERS_ROUTE}/new`,
    v05NewSignupValidator,
    createNewSignupController,
  );
  app.get(`${V0USERS_ROUTE}/:id`, readOneUserController);
  app.put(`${V0USERS_ROUTE}/:id`, v05MenteeValidator, updateOneUserController);
  app.delete(`${V0USERS_ROUTE}/:id`, deleteOneUserController);

  app.use(defaultErrorHandler);
});

// /v0/users/new test suite.
describe("POST /v0/users/new", () => {
  it("with valid new signup data, responds with 201 Created", async () => {
    const response: request.Response = await request(app)
      .post(`${V0USERS_ROUTE}/new`)
      .send(sampleMockNewSignup);
    expect(response.status).toBe(StatusCodes.CREATED);
    expect(response.body.statusCode).toBe(StatusCodes.CREATED);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data).toStrictEqual([sampleMockNewSignup]);
  });

  it("with invalid new signup data, responds with 400 Bad Request", async () => {
    const response: request.Response = await request(app)
      .post(`${V0USERS_ROUTE}/new`)
      .send({ invalid: "data" });
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.data).toBeNull();
  });
});

// /v0/users/:id test suite.
describe("GET /v0/users/:id", () => {
  it("with valid user id, responds with 200 OK", async () => {
    const response: request.Response = await request(app).get(
      `${V0USERS_ROUTE}/${sampleMockMentee.id}`,
    );
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data).toStrictEqual([sampleMockMentee]);
  });

  it("with invalid user id, responds with 400 Bad Request", async () => {
    const response: request.Response = await request(app).get(
      `${V0USERS_ROUTE}/invalid-id`,
    );
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.data).toBeNull();
  });

  it("with non-existent user id, responds with 404 Not Found", async () => {
    const response: request.Response = await request(app).get(
      `${V0USERS_ROUTE}/aaaaaaaa-aaaa-aaaa-aaaa-123456789123`,
    );
    expect(response.status).toBe(StatusCodes.NOT_FOUND);
    expect(response.body.statusCode).toBe(StatusCodes.NOT_FOUND);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.data).toBeNull();
  });
});

describe("PUT /v0/users/:id", () => {
  it("with valid user id and data, responds with 200 OK", async () => {
    const response: request.Response = await request(app)
      .put(`${V0USERS_ROUTE}/${sampleMockMentee.id}`)
      .send(sampleMockMentee);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data).toStrictEqual([sampleMockMentee]);
  });

  it("with invalid user id, responds with 400 Bad Request", async () => {
    const response: request.Response = await request(app)
      .put(`${V0USERS_ROUTE}/invalid-id`)
      .send(sampleMockMentee);
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.data).toBeNull();
  });

  it("with non-existent user id, responds with 404 Not Found", async () => {
    const response: request.Response = await request(app)
      .put(`${V0USERS_ROUTE}/aaaaaaaa-aaaa-aaaa-aaaa-123456789123`)
      .send(sampleMockMentee);
    expect(response.status).toBe(StatusCodes.NOT_FOUND);
    expect(response.body.statusCode).toBe(StatusCodes.NOT_FOUND);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.data).toBeNull();
  });
});

describe("DELETE /v0/users/:id", () => {
  // Per HTTP/1.1 spec, DELETE should respond with 204 No Content.
  // The body should be strictly empty.
  it("with valid user id, responds with 204 No Content", async () => {
    const response: request.Response = await request(app).delete(
      `${V0USERS_ROUTE}/${sampleMockMentee.id}`,
    );
    expect(response.status).toBe(StatusCodes.NO_CONTENT);
    expect(response.body).toStrictEqual({});
  });

  it("with invalid user id, responds with 400 Bad Request", async () => {
    const response: request.Response = await request(app).delete(
      `${V0USERS_ROUTE}/invalid-id`,
    );
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.data).toBeNull();
  });

  it("with non-existent user id, responds with 404 Not Found", async () => {
    const response: request.Response = await request(app).delete(
      `${V0USERS_ROUTE}/aaaaaaaa-aaaa-aaaa-aaaa-123456789123`,
    );
    expect(response.status).toBe(StatusCodes.NOT_FOUND);
    expect(response.body.statusCode).toBe(StatusCodes.NOT_FOUND);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.data).toBeNull();
  });
});
