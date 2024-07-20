// ./__tests__/controllers/v0/v0BatchUsersController.test.ts
//
// Behavior tests for batch users CRUD ops controllers,
// used for the /v0/users? endpoint.

// Type imports.
import type { Express } from "express";

// ts-jest testing essential imports.
import { beforeAll, describe, expect, it } from "@jest/globals";
import bodyParser from "body-parser";
import express from "express";
import { StatusCodes } from "http-status-codes";
import request from "supertest";

// Local classes, constants, and schema imports.
import { UserType } from "@models/v0/v0UserModel.js";
import { V0USERS_ROUTE } from "@routes/v0/v0UsersRouter.js";

// Local middleware imports.
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";
import v05NonAdminValidator from "@middlewares/v0/v05NonAdminValidator.js";

// Testing module imports.
import {
  readBatchUsersController,
  updateBatchUsersController,
} from "@controllers/v0/v0BatchUsersController.js";

// Setup the testing app.
let app: Express;
beforeAll((): void => {
  app = express();

  // IMPORTANT!!
  // Use body-parser middleware to handle post requests.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get(`${V0USERS_ROUTE}`, readBatchUsersController);
  app.put(
    `${V0USERS_ROUTE}`,
    v05NonAdminValidator,
    updateBatchUsersController,
  );

  app.use(defaultErrorHandler);
});

// /v0/users? test suite.
describe("GET /v0/users?", () => {
  it("with no query params, responds with 200 OK and all users", async () => {
    const response: request.Response = await request(app).get(
      `${V0USERS_ROUTE}`,
    );
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data).toBeTruthy();
  });

  it("with valid query params, responds with 200 OK and filtered users", async () => {
    const response: request.Response = await request(app).get(
      `${V0USERS_ROUTE}?userType=Mentee&adminApproved=true`,
    );
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data[0].userType).toBe(UserType.Enum.Mentee);
    expect(response.body.data[0].adminApproved).toBe(true);
    expect(response.body.data[1].userType).toBe(UserType.Enum.Mentee);
    expect(response.body.data[1].adminApproved).toBe(true);
    // TypeScript/JavaScript does NOT support negative array indexing.
  });

  it("with invalid query params, responds with 400 Bad Request", async () => {
    const response: request.Response = await request(app).get(
      `${V0USERS_ROUTE}?userType=invalid`,
    );
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.data).toBeNull();
  });
});
