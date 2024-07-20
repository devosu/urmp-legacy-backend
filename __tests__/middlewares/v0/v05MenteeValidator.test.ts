// ./__tests__/controllers/v0/v05MenteeValidator.test.ts
//
// Behavior tests for (single) Mentee schema validation middleware.

// Type imports.
import type { Express, NextFunction, Request, Response } from "express";

// ts-jest testing essential imports.
import { beforeAll, describe, expect, it } from "@jest/globals";
import bodyParser from "body-parser";
import express from "express";
import { StatusCodes } from "http-status-codes";
import request from "supertest";

// Local classes, constants, and schema imports.
import { sampleMockMentee } from "@mocks/v0/v0MockMentees.js";
import { sampleMockMentor } from "@mocks/v0/v0MockMentors.js";

// Local middleware imports.
import defaultErrorHandler from "@middlewares/defaultErrorHandler.js";

// Testing module imports.
import v05MenteeValidator from "@middlewares/v0/v05MenteeValidator.js";

// Construct a simple 200 OK controller for testing.
function simple200OKController(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  res.status(StatusCodes.OK).json(
    // biome-ignore format: added alignment for clarity.
    {
      statusCode      : StatusCodes.OK,
      successMessage  : "Mentee schema validation passed.",
      errorMessage    : null,
      errorDetails    : null,
      data            : [sampleMockMentee],
      isProductionData: false,
    },
  );
}

// Setup the testing app.
const VALID_SCHEMA_ROUTE = "/valid-schema";
const INVALID_SCHEMA_ROUTE = "/invalid-schema";
let app: Express;
beforeAll((): void => {
  app = express();

  // IMPORTANT!!
  // Use body-parser middleware to handle post requests.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post(VALID_SCHEMA_ROUTE, v05MenteeValidator, simple200OKController);
  app.post(INVALID_SCHEMA_ROUTE, v05MenteeValidator, simple200OKController);

  app.use(defaultErrorHandler);
});

// v05MenteeSchemaValidator test suite.
describe("The Mentee schema validator middleware", () => {
  it("calls next() w/out errors when req.body is valid Mentee object", async () => {
    const response: request.Response = await request(app)
      .post(VALID_SCHEMA_ROUTE)
      .send(sampleMockMentee);
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.body.statusCode).toBe(StatusCodes.OK);
    expect(response.body.successMessage).toBeTruthy();
    expect(response.body.data[0]).toStrictEqual(sampleMockMentee);
  });

  it("reports an InvalidSchemaError when req.body is non-Mentee object", async () => {
    const response: request.Response = await request(app)
      .post(INVALID_SCHEMA_ROUTE)
      .send(sampleMockMentor);
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.errorDetails).toBeTruthy();
  });

  it("reports an InvalidSchemaError when req.body is flawed Mentee object", async () => {
    const flawedMentee = {
      userType: "Mentee",
    };
    const response: request.Response = await request(app)
      .post(INVALID_SCHEMA_ROUTE)
      .send(flawedMentee);
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.errorDetails).toBeTruthy();

    // Log the response body to confirm caught by Zodiac schema validation.
    console.log(response.body);
  });

  it(" reports an InvalidSchemaError when specifically Mentee timestamps doesn't line up", async () => {
    // Init invalid mentor object with approvalTimestamp before applicationTimestamp.
    const flawedMentee = {
      // Generic info.
      id: "bf60d95a-1bad-4be6-8730-4885284b35e0",
      creationTimestamp: "2024-07-04T20:44:29Z",
      applicationTimestamp: "2024-07-13T15:56:30Z",
      approvalTimestamp: "2024-07-11T08:20:01Z",

      userType: "Mentee",
      adminApproved: true,
      emailAddress: "synke.684@osu.edu",
      profilePictureLink: "http://dummyimage.com/239x166.png/ff4444/ffffff",

      // Academic info.
      firstName: "Vanessa",
      lastName: "Synke",
      academicYear: "Junior (3rd Year)",
      currentMajor: "Electrical and Computer Engineering",
      preProfessionalRoute: null,

      // Research info.
      desiredResearchFields: ["Electrical Circuits", "Computer Architecture"],
    };
    const response: request.Response = await request(app)
      .post(INVALID_SCHEMA_ROUTE)
      .send(flawedMentee);
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.errorDetails).toBeTruthy();

    // Log the response body to confirm caught by Zodiac schema validation.
    console.log(response.body);
  });

  it(" reports an InvalidSchemaError when specifically Mentee approvals doesn't line up", async () => {
    // Init invalid mentee object with approvalTimestamp present without approval.
    const flawedMentee = {
      // Generic info.
      id: "bf60d95a-1bad-4be6-8730-4885284b35e0",
      creationTimestamp: "2024-07-04T20:44:29Z",
      applicationTimestamp: "2024-07-13T15:56:30Z",
      approvalTimestamp: "2024-07-11T08:20:01Z",

      userType: "Mentee",
      adminApproved: false,
      emailAddress: "synke.684@osu.edu",
      profilePictureLink: "http://dummyimage.com/239x166.png/ff4444/ffffff",

      // Academic info.
      firstName: "Vanessa",
      lastName: "Synke",
      academicYear: "Junior (3rd Year)",
      currentMajor: "Electrical and Computer Engineering",
      preProfessionalRoute: null,

      // Research info.
      desiredResearchFields: ["Electrical Circuits", "Computer Architecture"],
    };
    const response: request.Response = await request(app)
      .post(INVALID_SCHEMA_ROUTE)
      .send(flawedMentee);
    expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.statusCode).toBe(StatusCodes.BAD_REQUEST);
    expect(response.body.errorMessage).toBeTruthy();
    expect(response.body.errorDetails).toBeTruthy();

    // Log the response body to confirm caught by Zodiac schema validation.
    console.log(response.body);
  });
});
