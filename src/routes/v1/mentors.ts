// ./src/routes/v1/mentors.ts
//
// V1 mentors router, only handles reading all approved mentor users.

// Type imports.
import type { Request, Response } from "express";

// ExpressJS routing essential imports.
import { Router } from "express";

// Local middleware and controller imports.
import { readAllApprovedMentorsController } from "@controllers/v1/userController.js";
import {
  firebaseAuthMiddleware,
  readAllUsersMiddleware,
} from "@middlewares/v1/userMiddleware.js";

// Define new express router, and use controllers to handle http request.
export default function mentorsRouter(): Router {
  const router: Router = Router();

  // Setup auth middleware for all request types.
  router.use(firebaseAuthMiddleware);

  // Use GET (HTTP) to READ (CRUD) all approved mentor users.
  router.get(
    "/",
    readAllUsersMiddleware,
    async (req: Request, res: Response): Promise<void> => {
      readAllApprovedMentorsController(req, res);
    },
  );

  // Catch-all route for any other request (GET, PUT, POST, PATCH, DELETE).
  router.all("*", (request: Request, response: Response) => {
    response.status(404).send("Service Not Found");
  });

  return router;
}
