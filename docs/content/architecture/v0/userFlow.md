# :ocean: `User` Flow

Guide to how different users should be **CREATE**d, **READ**, **UPDATE**d, and **DELETE**d.

## :compass: `User` Onboarding

| **User Roles \*** | **Onboarding Process** |
|:---|:---|
| `Admin` | `Admin`s are <ins>immutable</ins> users hard-coded into the system. **\*\*** |
| `NewSignup` | When you first <ins>register</ins> an account, you are given the `NewSignup` role. |
| `Mentee` | From `NewSignup`, when you <ins>apply</ins> as mentee, you are given the `Mentee` role. |
| `Mentor` | From `NewSignup`, when you <ins>apply</ins> as mentor, you are given the `Mentor` role. |

> [!IMPORTANT]
>
> **\*** The terms "role" and "type" are used interchangably here.
>
> **\*\*** `Admin` must contact **developers** and **stakeholders** for entrance or exit from the system.

## :fast_forward: Sample User Stories

The `/v0/users` route serves immutable, **deterministic** mock data great for testing our frontend.

### :coffee: Generic Stories

- For anyone to **POST** (register) to become a `NewSignup`:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users",
  >   {
  >     method: "POST",
  >     headers: {/*...*/},
  >     body: /* newsignup-user-object */,
  > });
  > ```

- For any `User` to **GET** their own profile by id:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users?id=sample-id",
  >   {
  >     method: "GET",
  >     headers: {/*...*/},
  > });
  > ```

- For any `User` to **GET** their own profile by email **\*\*\***:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users?emailAddress=sample-email-address",
  >   {
  >     method: "GET",
  >     headers: {/*...*/},
  > });
  > ```

- For any `User` to **PUT** and update their own profile fields by id:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users?id=sample-id",
  >   {
  >     method: "PUT",
  >     headers: {/*...*/},
  >     body: /* updated-user-object */,
  > });
  > ```

- For any `User` (except `Admin`) to **DELETE** their own profile by id:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users?id=sample-id",
  >   {
  >     method: "DELETE",
  >     headers: {/*...*/},
  > });
  > ```

### :tophat: `Admin` Stories

- For an `Admin` to **GET** all users:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users",
  >   {
  >     method: "GET",
  >     headers: {/*...*/},
  > });
  > ```

- For an `Admin` to **GET** all pending approval mentors and mentees:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users?userType=mentee,mentor&adminApproved=false",
  >   {
  >     method: "GET",
  >     headers: {/*...*/},
  > });
  > ```

- For an `Admin` to **PUT** (to approve) one mentee by id:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users?id=sample-id",
  >   {
  >     method: "PUT",
  >     headers: {/*...*/},
  >     body: /* updated-mentee-object */,
  > });
  > ```
  
- For an `Admin` to **PUT** (to update and assign) an approved mentor their calendar scheduling link by email **\*\*\***:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users?emailAddress=sample-email-address",
  >   {
  >     method: "PUT",
  >     headers: {/*...*/},
  >     body: /* updated-mentor-object */,
  > });
  > ```

### :seedling: `NewSignup` Stories

- For a `NewSignup` to **PUT** (to update and apply) as mentee by id:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users?id=sample-id",
  >   {
  >     method: "PUT",
  >     headers: {/*...*/},
  >     body: /* new-mentee-object-with-og-newsignup-info */,
  > });
  > ```

- For a `NewSignup` to **PUT** (to update and apply) as mentor by email **\*\*\***:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users?emailAddress=sample-email-address",
  >   {
  >     method: "PUT",
  >     headers: {/*...*/},
  >     body: /* new-mentor-object-with-og-newsignup-info */,
  > });
  > ```

### :potted_plant: `Mentee` Stories

- For an approved `Mentee` to **GET** all approved mentors:

  > ```TypeScript
  > await fetch(
  >   "https://api.research.osu.dev/v0/users?userType=mentor&adminApproved=true",
  >   {
  >     method: "GET",
  >     headers: {/*...*/},
  > });
  > ```

> [!IMPORTANT]
>
> **\*\*\*** Double check the `http` request library you are using correctly encodes `whitespaces` and `special characters` such as `@` (used in email) or `'` (used in names).
