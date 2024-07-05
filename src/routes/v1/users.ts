// ./src/routes/v1/users.ts
//
// V1 of user router, using middlewares and controllers to handle http requests.

// Type imports.
import type { Request, Response } from "express";

// ExpressJS routing essential imports.
import { Router } from "express";

// Local middleware and controller imports.
import {
  createOneUserController,
  deleteOneUserByEmailController,
  deleteOneUserByIdController,
  readAllPendingApprovalUsersController,
  readAllUsersController,
  readOneUserByEmailController,
  readOneUserByIdController,
  updateOneUserByEmailController,
  updateOneUserByIdController,
} from "@controllers/v1/userController.js";
import {
  deleteOneUserMiddleware,
  firebaseAuthMiddleware,
  readAllUsersMiddleware,
  readOneUserMiddleware,
  updateOneUserMiddleware,
} from "@middlewares/v1/userMiddleware.js";

// Define new express router, and use controllers to handle http request.
export default function userRouter(): Router {
  const router: Router = Router();

  // Setup auth middleware for all request types.
  router.use(firebaseAuthMiddleware);

  // Use POST (HTTP) to CREATE (CRUD) one user.
  router.post("/", async (req: Request, res: Response): Promise<void> => {
    createOneUserController(req, res);
  });

  // Use GET (HTTP) to READ (CRUD) all users or all approved mentor users.
  // Read all approved Mentor users (for approved mentee users only),
  // or read all users (for Admin users only).
  router.get(
    "/",
    readAllUsersMiddleware,
    async (req: Request, res: Response): Promise<void> => {
      // If userType "pendingApproval" is provided,
      // return all Mentee and Mentor users
      // with adminApproved field set to false.
      const { userType } = req.query;
      if (userType === "pendingApproval") {
        readAllPendingApprovalUsersController(req, res);

        // If no query parameters are provided, return all users.
      } else if (Object.keys(req.query).length === 0) {
        readAllUsersController(req, res);

        // For all other cases, return an error message.
      } else {
        res.status(400).json({
          message:
            "Invalid query parameters - Please provide a valid userType.",
        });
      }
    },
  );

  // Use GET (HTTP) to READ (CRUD) one user.
  // Read self (for general users), or read others (for Admin users only).
  router.get(
    "/",
    readOneUserMiddleware,
    async (req: Request, res: Response): Promise<void> => {
      const { id, emailAddress } = req.query;
      if (id) {
        readOneUserByIdController(req, res);
      } else if (emailAddress) {
        readOneUserByEmailController(req, res);
      } else {
        res.status(400).json({
          message:
            "Invalid query parameters - Please provide a valid Id or emailAddress.",
        });
      }
    },
  );

  // Use PUT (HTTP) to UPDATE (CRUD) one user.
  // Update self info fields (for general users),
  // or approve other pending mentee/mentor users (for Admin users only).
  router.put(
    "/",
    updateOneUserMiddleware,
    async (req: Request, res: Response): Promise<void> => {
      const { id, emailAddress } = req.query;
      if (id) {
        updateOneUserByIdController(req, res);
      } else if (emailAddress) {
        updateOneUserByEmailController(req, res);
      } else {
        res.status(400).json({
          message:
            "Invalid query parameters - Please provide a valid Id or emailAddress.",
        });
      }
    },
  );

  // Use DELETE (HTTP) to DELETE (CRUD) one user.
  // Delete self (for general users), or delete others (for Admin user only).
  router.delete(
    "/",
    deleteOneUserMiddleware,
    async (req: Request, res: Response): Promise<void> => {
      const { id, emailAddress } = req.query;
      if (id) {
        deleteOneUserByIdController(req, res);
      } else if (emailAddress) {
        deleteOneUserByEmailController(req, res);
      } else {
        res.status(400).json({
          message:
            "Invalid query parameters - Please provide a valid Id or emailAddress.",
        });
      }
    },
  );

  // Catch-all route for any other request (GET, PUT, POST, PATCH, DELETE).
  router.all("*", (request: Request, response: Response) => {
    response.status(404).send("Service Not Found");
  });

  return router;
}
