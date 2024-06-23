// ./src/app.ts
//
// ExpressJS backend definition for the Research Mentorship Project

// ExpressJS essential imports.
import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';

// Local imports.
import healthcheckRouter from '@routes/healthcheck.js';
import indexRouter from '@routes/index.js';

export function createExpressApp(): Express {
  // Create an express app.
  const app: Express = express();

  // Use body-parser middleware to handle post requests.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Setup routes with built-in middleware auth checks.
  app.use('/', indexRouter());
  app.use('/healthcheck', healthcheckRouter());

  // Catch-all route for any other request (GET, PUT, POST, PATCH, DELETE).
  app.all('*', (request: Request, response: Response) => {
    response.status(404).send('Service Not Found');
  });

  return app;
};

export function startNodeServer(app: Express, port: string): any {
  return app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

// Start the backend server when NOT in test mode (development or production).
if (process.env.NODE_ENV !== 'test') {
  const port: string = process.env.PORT || '5000';
  startNodeServer(createExpressApp(), port);
};