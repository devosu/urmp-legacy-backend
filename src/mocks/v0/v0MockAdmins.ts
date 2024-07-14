// ./src/mocks/v0/mockAdmins.ts
//
// Deterministic mock data for all variations of Admins.

// Admin user type imports.
import type { AdminSchema, } from "@src/models/v0/v0UserModel.js";

// Deterministic sample mock mixed pending approval AND approved Admin document.
export const sampleMockAdmin: AdminSchema = {
  // Generic info.
  id                : "a83095d6-e17d-4cd8-b456-3940621879a1",
  creationTimestamp : "2024-07-04T23:42:38Z",
  userType          : "Admin",
  emailAddress      : "connett.1283@osu.edu",
  profilePictureLink: "http://dummyimage.com/186x240.png/ff4444/ffffff",

  // Academic info.
  firstName: "Marita",
  lastName : "Connett",
};

// Array of mock approved Admin users.
export const mockAdminsArray: AdminSchema[] = [
  sampleMockAdmin,
  {
    // Generic info.
    id                : "ed7dd4fe-1ad7-4012-abc9-910d426a2a39",
    creationTimestamp : "2024-06-23T17:54:15Z",
    userType          : "Admin",
    emailAddress      : "warman.658@osu.edu",
    profilePictureLink: "http://dummyimage.com/143x185.png/cc0000/ffffff",

    // Academic info.
    firstName: "Haily",
    lastName : "Warman",
  },
  {
    // Generic info.
    id                : "8ac6f7a0-e1c9-4653-84b4-caf6c444d582",
    creationTimestamp : "2024-06-21T15:25:39Z",
    userType          : "Admin",
    emailAddress      : "adshad.224@osu.edu",
    profilePictureLink: "http://dummyimage.com/162x182.png/ff4444/ffffff",

    // Academic info.
    firstName: "Hermy",
    lastName : "Adshad",
  },
  {
    // Generic info.
    id                : "e37b2abf-b91d-4a56-91b4-eb6dcf536a4b",
    creationTimestamp : "2024-07-05T03:54:09Z",
    userType          : "Admin",
    emailAddress      : "geffinger.11@osu.edu",
    profilePictureLink: "http://dummyimage.com/248x122.png/ff4444/ffffff",

    // Academic info.
    firstName: "Michael",
    lastName : "Geffinger",
  },
  {
    // Generic info.
    id                : "83639a7b-2d88-41fe-b763-5b2385f42d92",
    creationTimestamp : "2024-06-15T05:43:22Z",
    userType          : "Admin",
    emailAddress      : "gallemore.121@osu.edu",
    profilePictureLink: "http://dummyimage.com/212x188.png/dddddd/000000",

    // Academic info.
    firstName: "Olivia",
    lastName : "Gallemore",
  },
  {
    // Generic info.
    id                : "98dd079f-f17a-4392-8a13-92b36221a89a",
    creationTimestamp : "2024-06-27T17:27:33Z",
    userType          : "Admin",
    emailAddress      : "ferrini.515@osu.edu",
    profilePictureLink: "http://dummyimage.com/249x240.png/cc0000/ffffff",

    // Academic info.
    firstName: "Josiah",
    lastName : "Ferrini",
  },
  {
    // Generic info.
    id                : "ae0cb5dc-f3c1-478d-80b4-82597ab30f23",
    creationTimestamp : "2024-07-06T23:44:43Z",
    userType          : "Admin",
    emailAddress      : "kalkofer.592@osu.edu",
    profilePictureLink: "http://dummyimage.com/220x195.png/ff4444/ffffff",

    // Academic info.
    firstName: "Berne",
    lastName : "Kalkofer",
  },
  {
    // Generic info.
    id                : "ea5a2b35-7920-4cae-aac1-b11d3b9159e2",
    creationTimestamp : "2024-06-11T06:03:29Z",
    userType          : "Admin",
    emailAddress      : "kubiczek.1301@osu.edu",
    profilePictureLink: "http://dummyimage.com/100x110.png/dddddd/000000",

    // Academic info.
    firstName: "Felic",
    lastName : "Kubiczek",
  },
  {
    // Generic info.
    id                : "ab90eef5-999d-4e28-9095-8e70a6d0cf78",
    creationTimestamp : "2024-06-27T00:35:49Z",
    userType          : "Admin",
    emailAddress      : "hackworth.770@osu.edu",
    profilePictureLink: "http://dummyimage.com/224x120.png/ff4444/ffffff",

    // Academic info.
    firstName: "Hedi",
    lastName : "Hackworth",
  },
  {
    // Generic info.
    id                : "c8661526-8856-4860-9ba9-9373922f440b",
    creationTimestamp : "2024-06-30T03:24:43Z",
    userType          : "Admin",
    emailAddress      : "jaan.1371@osu.edu",
    profilePictureLink: "http://dummyimage.com/197x157.png/ff4444/ffffff",

    // Academic info.
    firstName: "Cheslie",
    lastName : "Jaan",
  }
];
