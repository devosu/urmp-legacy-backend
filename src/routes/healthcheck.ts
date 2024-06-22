// ./src/routes/healthcheck.ts
//
// Simple '200 OK' healthcheck endpoint for the backend.

// ExpressJS essential imports.
import { Request, Response, Router } from 'express';

export default function healthcheckRouter(): Router {
  // Create new express router, and handle GET requests.
  const router: Router = Router();
  router.get('/', (req: Request, res: Response): void => {
    res.status(200).send('OK')
  })
  return router;
}
