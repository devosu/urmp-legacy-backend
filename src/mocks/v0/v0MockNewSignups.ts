// ./src/mocks/v0/mockNewSignups.ts
//
// Deterministic mock data for all variations of NewSignups.

// NewSignup user type imports.
import type { NewSignup } from "@src/models/v0/v0UserModel.js";

// Deterministic sample mock mixed pending approval AND approved NewSignup document.
export const sampleMockNewSignup: NewSignup = {
  
  // System info.
  id                : "cdb51918-35b2-48a9-a6a3-ca428f0a2ae4",
  creationTimestamp : "2024-06-16T20:40:51Z",

  // Generic info.
  userType          : "NewSignup",
  emailAddress      : "trudgian.983@osu.edu",
  profilePictureLink: "http://dummyimage.com/198x230.png/ff4444/ffffff",

  // Academic info.
  firstName   : "Stefan",
  lastName    : "Trudgian",
  academicYear: "High School",
};

// Array of mock approved NewSignup users.
export const mockNewSignupsArray: NewSignup[] = [
  sampleMockNewSignup,
  {
    // System info.
    id                : "93ec59a2-8839-4b8b-b0e4-66284aa3c703",
    creationTimestamp : "2024-06-26T12:16:45Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "wheeler.342@osu.edu",
    profilePictureLink: "http://dummyimage.com/191x111.png/cc0000/ffffff",

    // Academic info.
    firstName   : "Fina",
    lastName    : "Wheeler",
    academicYear: "High School",
  },
  {
    // System info.
    id                : "925c69b1-e6ba-43cd-9bf6-976f5c8717cd",
    creationTimestamp : "2024-06-24T09:44:39Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "janczyk.264@osu.edu",
    profilePictureLink: "http://dummyimage.com/138x165.png/dddddd/000000",

    // Academic info.
    firstName   : "Darby",
    lastName    : "Janczyk",
    academicYear: "SuperSenior (5+ Years)",
  },
  {
    // System info.
    id                : "6ba07d49-ff51-44aa-ae6d-b179a9b0304c",
    creationTimestamp : "2024-07-05T01:22:40Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "maryon.232@osu.edu",
    profilePictureLink: "http://dummyimage.com/115x224.png/ff4444/ffffff",

    // Academic info.
    firstName   : "Madison",
    lastName    : "Maryon",
    academicYear: "Junior (3rd Year)",
  },
  {
    // System info.
    id                : "f3e06ff1-7b72-4e9e-91fd-d7a92a9eabe8",
    creationTimestamp : "2024-06-29T13:38:19Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "hunsworth.166@osu.edu",
    profilePictureLink: "http://dummyimage.com/153x221.png/5fa2dd/ffffff",

    // Academic info.
    firstName   : "Mikkel",
    lastName    : "Hunsworth",
    academicYear: "Senior (4th Year)",
  },
  {
    // System info.
    id                : "d41c80f6-5844-4fef-9e13-17bd5398d8c2",
    creationTimestamp : "2024-07-09T21:38:01Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "jozwicki.572@osu.edu",
    profilePictureLink: "http://dummyimage.com/152x225.png/cc0000/ffffff",

    // Academic info.
    firstName   : "Ayn",
    lastName    : "Jozwicki",
    academicYear: "Junior (3rd Year)",
  },
  {
    // System info.
    id                : "b719f5ea-5a07-48a0-a363-f3b2781f2294",
    creationTimestamp : "2024-07-01T15:37:55Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "crutch.564@osu.edu",
    profilePictureLink: "http://dummyimage.com/192x210.png/ff4444/ffffff",

    // Academic info.
    firstName   : "Jenni",
    lastName    : "Crutch",
    academicYear: "SuperSenior (5+ Years)",
  },
  {
    // System info.
    id                : "4e4c8783-b5c9-46d2-a430-e0003762790f",
    creationTimestamp : "2024-06-15T19:28:57Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "cormack.1288@osu.edu",
    profilePictureLink: "http://dummyimage.com/187x195.png/dddddd/000000",

    // Academic info.
    firstName   : "Niall",
    lastName    : "Cormack",
    academicYear: "Senior (4th Year)",
  },
  {
    // System info.
    id                : "8f222f87-ca14-4d21-a9a1-bf257d4984f8",
    creationTimestamp : "2024-06-13T02:35:03Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "addis.847@osu.edu",
    profilePictureLink: "http://dummyimage.com/139x184.png/cc0000/ffffff",

    // Academic info.
    firstName   : "Hadleigh",
    lastName    : "Addis",
    academicYear: "Sophomore (2nd Year)",
  },
  {
    // System info.
    id                : "acc265f3-4c4c-4bd8-878f-fe6284b51409",
    creationTimestamp : "2024-07-05T21:52:49Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "bowhey.1292@osu.edu",
    profilePictureLink: "http://dummyimage.com/225x158.png/ff4444/ffffff",

    // Academic info.
    firstName   : "Jenine",
    lastName    : "Bowhey",
    academicYear: "SuperSenior (5+ Years)",
  },
  {
    // System info.
    id                : "89a1ab53-5096-4de4-b015-002e6c07ca5c",
    creationTimestamp : "2024-06-12T05:44:19Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "hartwright.320@osu.edu",
    profilePictureLink: "http://dummyimage.com/229x167.png/cc0000/ffffff",

    // Academic info.
    firstName   : "Manny",
    lastName    : "Hartwright",
    academicYear: "Senior (4th Year)",
  },
  {
    // System info.
    id                : "bfde51ce-cea3-4b0c-b67d-8f84921f8438",
    creationTimestamp : "2024-06-27T21:04:19Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "durand.1286@osu.edu",
    profilePictureLink: "http://dummyimage.com/150x149.png/dddddd/000000",

    // Academic info.
    firstName   : "Reagen",
    lastName    : "Durand",
    academicYear: "High School",
  },
  {
    // System info.
    id                : "0c27fc73-762b-4f22-b6b6-fadd58c11418",
    creationTimestamp : "2024-07-04T02:08:10Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "fullstone.791@osu.edu",
    profilePictureLink: "http://dummyimage.com/144x131.png/dddddd/000000",

    // Academic info.
    firstName   : "Wilton",
    lastName    : "Fullstone",
    academicYear: "High School",
  },
  {
    // System info.
    id                : "700393bc-e59a-4eb0-8a75-6e78f055d684",
    creationTimestamp : "2024-07-03T04:04:54Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "dudmesh.273@osu.edu",
    profilePictureLink: "http://dummyimage.com/122x104.png/cc0000/ffffff",

    // Academic info.
    firstName   : "Iona",
    lastName    : "Dudmesh",
    academicYear: "Junior (3rd Year)",
  },
  {
    // System info.
    id                : "3fd1d598-6b4c-48f0-9e15-6bcde652c521",
    creationTimestamp : "2024-07-05T03:59:20Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "brumpton.1247@osu.edu",
    profilePictureLink: "http://dummyimage.com/209x218.png/5fa2dd/ffffff",

    // Academic info.
    firstName   : "Caryn",
    lastName    : "Brumpton",
    academicYear: "High School",
  },
  {
    // System info.
    id                : "fa92d0ee-37a7-4e9c-bbb3-eb43732d595c",
    creationTimestamp : "2024-07-05T12:53:16Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "piper.1275@osu.edu",
    profilePictureLink: "http://dummyimage.com/151x169.png/dddddd/000000",

    // Academic info.
    firstName   : "Gwenni",
    lastName    : "Piper",
    academicYear: "Sophomore (2nd Year)",
  },
  {
    // System info.
    id                : "14ba4db7-333b-4d9d-944c-f754eca7fce0",
    creationTimestamp : "2024-06-18T09:31:44Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "ivermee.967@osu.edu",
    profilePictureLink: "http://dummyimage.com/238x105.png/cc0000/ffffff",

    // Academic info.
    firstName   : "Salli",
    lastName    : "Ivermee",
    academicYear: "Freshman (1st Year)",
  },
  {
    // System info.
    id                : "c60484b8-7e79-43d2-b4be-b5f0051e2dcf",
    creationTimestamp : "2024-06-25T00:30:51Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "yu.1034@osu.edu",
    profilePictureLink: "http://dummyimage.com/166x123.png/ff4444/ffffff",

    // Academic info.
    firstName   : "Lorain",
    lastName    : "Yu",
    academicYear: "Sophomore (2nd Year)",
  },
  {
    // System info.
    id                : "cf243131-3bf5-4fc7-975e-7003d0e262a7",
    creationTimestamp : "2024-06-17T03:04:43Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "sollett.841@osu.edu",
    profilePictureLink: "http://dummyimage.com/133x185.png/5fa2dd/ffffff",

    // Academic info.
    firstName   : "Nelia",
    lastName    : "Sollett",
    academicYear: "Senior (4th Year)",
  },
  {
    // System info.
    id                : "740a8bed-767f-43fa-9106-6bb479e38f8e",
    creationTimestamp : "2024-06-18T08:23:38Z",

    // Generic info.
    userType          : "NewSignup",
    emailAddress      : "rabjohns.338@osu.edu",
    profilePictureLink: "http://dummyimage.com/193x170.png/cc0000/ffffff",

    // Academic info.
    firstName   : "Lani",
    lastName    : "Rabjohns",
    academicYear: "High School",
  }
];
