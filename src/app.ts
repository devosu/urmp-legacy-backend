// ./src/app.ts
//
// ExpressJS backend definition for the Research Mentorship Project

// Node.js built-in module and type imports.
import type http from "node:http";

// Type imports.
import type { Express, Request, Response } from "express";

// ExpressJS app setup essential imports.
import bodyParser from "body-parser";
import { config } from "dotenv-safe";
import express from "express";

// Local router imports.
import healthcheckRouter from "@routes/healthcheck.js";
import indexRouter from "@routes/index.js";
import mentorsRouter from "@routes/v1/mentors.js";

// Load the environement variables.
config();

// Create and export the backend express app.
export function createExpressApp(): Express {
  const app: Express = express();

  // Use body-parser middleware to handle post requests.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Setup routes with built-in middleware auth checks.
  app.use("/", indexRouter());
  app.use("/healthcheck", healthcheckRouter());
  app.use("/v1/mentors", mentorsRouter());

  // Catch-all route for any other request (GET, PUT, POST, PATCH, DELETE).
  app.all("*", (request: Request, response: Response) => {
    response.status(404).send("Service Not Found");
  });

  return app;
}

export function startNodeServer(app: Express, port: string): http.Server {
  return app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

// Start the backend server when NOT in test mode (development or production).
if (process.env.NODE_ENV !== "test") {
  const port: string = process.env.PORT || "5000";
  startNodeServer(createExpressApp(), port);
}
