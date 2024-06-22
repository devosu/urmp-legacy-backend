// ./src/index.ts
//
// Simple hello world homepage.

// ExpressJS essential imports.
import bodyParser from 'body-parser';
import { config } from 'dotenv-safe';
import express, { Express, Request, Response } from 'express';

// Load environment variables.
config();

// Local imports.
import healthcheckRouter from '@routes/healthcheck';

export const serverPort: string = process.env.BACKEND_PORT || '5000';

export function createExpressApp(): Express {
  // Create an express app.
  const app: Express = express();

  // Use body-parser middleware to handle post requests.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Setup homepage route with simple response to GET requests.
  app.get('/', (request: Request, response: Response) => {
    response.status(200).send('Hello World!');
  });

  // Setup healthcheck route.
  app.use('/healthcheck', healthcheckRouter());

  // Setup a catch-all route for any other request.
  app.get('*', (request: Request, response: Response) => {
    response.status(404).send('Not Found');
  });

  return app;
};

export function startNodeServer(app: Express, port: string): any {
  const server: any = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
  return server;
}
