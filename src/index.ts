// ./src/index.ts
//
// Simple hello world homepage.

// ExpressJS essential imports.
import bodyParser from 'body-parser';
import { config } from 'dotenv-safe';
import express, { Express, Request, Response } from 'express';

// Local component imports.
import userRouter from '@routes/users';

// Load environment variables.
config();

// Create an express app and setup port, use body-parser middleware to handle post requests.
const port = process.env.BACKEND_PORT || 5000;
const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/v1/users', userRouter);

// IMPORTANT:
// In ExpressJS, routing is setup according to the order of route definitions.
// ALWAYS define the catch-all (wildcard) route after all other routes.

// Setup homepage route with simple response to GET requests.
app.get('/', (request: Request, response: Response) => {
  response.status(200).send('Hello World!');
});

// Setup a heathcheck api route.
app.get('/healthcheck', (request: Request, response: Response) => {
  response.status(200).send('OK');
});

// Setup a catch-all route for any other request.
app.get('*', (request: Request, response: Response) => {
  response.status(404).send('Not Found');
});

// Start the server.
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Export for testing and graceful shutdown.
export { app, port, server };
