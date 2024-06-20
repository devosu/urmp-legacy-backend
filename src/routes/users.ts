// ./src/routes/users.ts
//
// '/v1/users' API endpoint, containing all CRUD operations.

// ExpressJS essential imports.
import { Request, Response, Router } from 'express';

// Local-data-loading essential imports.
import fs from 'fs';

// Data mocking essential imports.
import { faker } from '@faker-js/faker';
import path from 'path';

// Define the user router, mock data file path, and data shape.
const userRouter: Router = Router();
const usersPath = path.resolve(__dirname, '../models/mockV0UsersLite.json');
interface User {
  id: string;
  creationTimestamp: string;
  userType: string;
  adminApproved: boolean;
  firstName?: string;
  lastName?: string;
  emailAddress: string;
  profilePictureLink: string;
  academicYear: string;
  currentMajor: string;
  preProfessionalRoute?: string;
}

// Defined util functions to read and write mock data.
const readUsers = (): User[] => JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const writeUsers = (users: User[]): void => fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

// Defined CRUD operations for users, using util helper funcitons.

// GET /v1/users, return all users.
userRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json(readUsers());
});

// GET /v1/users/:id, return a user by id.
userRouter.get('/:id', (req: Request, res: Response) => {

  // Currently VERY INEFFICIENT method, for demo purposes.
  const allUsers: User[]  = readUsers();
  const user: User | undefined = allUsers.find( u => u.id === req.params.id);

  // Handles user not found with 404.
  if (!user) {
    res.status(404).send('User not found');
    return;
  }

  res.status(200).json(user);
})

// POST /v1/users, create a new user.
userRouter.post('/', (req: Request, res: Response) => {
  
  const allUsers: User[] = readUsers();
  const newUser: User = {
    ...req.body,
    id: faker.string.uuid(),
    creationTimestamp: new Date().toISOString(),
  };
  
  // Add the new user first to memory and then to disk.
  allUsers.push(newUser);
  writeUsers(allUsers);

  // Repond with 201 and the new user object.
  res.status(201).json(newUser);
});

// Export the router as modular component for the backend.
export default userRouter;

// Export the User interface and util functions for testing.
export { User, readUsers, usersPath, writeUsers };
