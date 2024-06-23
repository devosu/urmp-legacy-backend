// ./src/routes/healthcheck.ts
//
// Simple '200 OK' healthcheck endpoint for the backend.

// ExpressJS essential imports.
import { Request, Response, Router } from 'express';

// Create new express router, and handle GET requests.
export default function healthcheckRouter(): Router {
  const router: Router = Router();
  
  router.get('/', (req: Request, res: Response): void => {
    res.status(200).send('OK')
  })

  // Catch-all route for any other request (GET, PUT, POST, PATCH, DELETE).
  router.all('*', (request: Request, response: Response) => {
    response.status(404).send('Service Not Found');
  });
  
  return router;
}
