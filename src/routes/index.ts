// ./src/routes/index.ts
//
// Definition for the / route.

// ExpressJS type imports.
import type { Request, Response } from "express";

// ExpressJS essential imports.
import { Router } from "express";

// Create a new ExpressJS router and handle GET requests.
export default function indexRouter(): Router {
  const router: Router = Router();

  // IMPORTANT!!
  // The '/' router is a special case,
  // declaring router.all here will block all other custom routes.
  // Thus, define the least-utility response here, let main app handle other requests.
  router.get("/", (req: Request, res: Response): void => {
    res.status(200).send("Hello World!");
  });

  return router;
}
