// ./src/mocks/v1/mockApprovedMentors.ts
//
// Temporary, hard-coded mock data for approved mentors.

// Mentor user type imports.
import type { MentorSchema } from "@src/models/v1/userModel.js";

// Local native enum imports.

// Array of mock approved mentor users.
export const mockApprovedMentors: MentorSchema[] = [
  {
    // Generic info.
    id: "42f2584d-a222-4905-9d92-efc96f853135",
    creationTimestamp: "2024-05-26T13:45:19Z",
    userType: "Mentor",
    adminApproved: true,
    emailAddress: "webland.470@osu.edu",
    profilePictureLink: "http://dummyimage.com/111x234.png/dddddd/000000",

    // Academic info.
    firstName: "Riccardo",
    lastName: "Webland",
    academicYear: "High School",
    currentMajor: "Physics",
    preProfessionalRoute: "Pre-Medicine",

    // Research info.
    currentResearchFields: ["Quantum Mechanics", "Particle Physics"],
    currentResearchDescription: "Phasellus sit amet erat. Nulla tempus.",
    // desiredResearchFields: should never be present,
    calendarSchedulingLink: "http://dummyimage.com/136x203.png/5fa2dd/ffffff",
  },
  {
    // Generic info.
    id: "ba513ab5-907c-4e97-92e2-03c5ac6bae41",
    creationTimestamp: "2024-05-12T13:42:50Z",
    userType: "Mentor",
    adminApproved: true,
    emailAddress: "cobelli.290@osu.edu",
    profilePictureLink: "http://dummyimage.com/177x250.png/ff4444/ffffff",

    // Academic info.
    firstName: "Ripley",
    lastName: "Cobelli",
    academicYear: "Senior (4th Year)",
    currentMajor: "Computer Science and Engineering",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
    ],
    currentResearchDescription: "In eleifend quam a odio.",
    // desiredResearchFields: should never be present,
    calendarSchedulingLink: "http://dummyimage.com/200x158.png/5fa2dd/ffffff",
  },
  {
    // Generic info.
    id: "b0892c8d-8a3a-48d9-a1a9-0ba12d34778d",
    creationTimestamp: "2024-06-20T00:37:49Z",
    userType: "Mentor",
    adminApproved: true,
    emailAddress: "how.21@osu.edu",
    profilePictureLink: "http://dummyimage.com/126x130.png/dddddd/000000",

    // Academic info.
    firstName: "Devin",
    lastName: "How",
    academicYear: "Senior (4th Year)",
    currentMajor: "Biology",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields: [
      "Genetics",
      "Molecular Biology",
      "Evolutionary Biology",
    ],
    currentResearchDescription:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    // desiredResearchFields: should never be present,
    calendarSchedulingLink: "http://dummyimage.com/179x245.png/cc0000/ffffff",
  },
  {
    // Generic info.
    id: "d20d593d-5fb3-457f-83d7-d111d695a2df",
    creationTimestamp: "2024-05-29T03:34:48Z",
    userType: "Mentor",
    adminApproved: true,
    emailAddress: "delete.661@osu.edu",
    profilePictureLink: "http://dummyimage.com/211x189.png/ff4444/ffffff",

    // Academic info.
    firstName: "Eleanor",
    lastName: "Delete",
    academicYear: "Junior (3rd Year)",
    currentMajor: "Chemistry",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields: ["Organic Chemistry", "Inorganic Chemistry"],
    currentResearchDescription:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    // desiredResearchFields: should never be present,
    calendarSchedulingLink: null,
  },
  {
    // Generic info.
    id: "a702c25c-c804-4efc-914d-f0ca7cd0a51b",
    creationTimestamp: "2024-06-25T09:46:53Z",
    userType: "Mentor",
    adminApproved: true,
    emailAddress: "chasemoore.334@osu.edu",
    profilePictureLink: "http://dummyimage.com/208x128.png/cc0000/ffffff",

    // Academic info.
    firstName: "Raffaello",
    lastName: "Chasemoore",
    academicYear: "Senior (4th Year)",
    currentMajor: "Mathematics",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields: ["Algebra", "Topology"],
    currentResearchDescription: "Donec semper sapien a libero. Nam dui.",
    // desiredResearchFields: should never be present,
    calendarSchedulingLink: "http://dummyimage.com/133x203.png/dddddd/000000",
  },
  {
    // Generic info.
    id: "5a53f67e-8102-47da-aad5-3cd02c97999a",
    creationTimestamp: "2024-06-29T06:04:21Z",
    userType: "Mentor",
    adminApproved: true,
    emailAddress: "clutterbuck.694@osu.edu",
    profilePictureLink: "http://dummyimage.com/195x215.png/5fa2dd/ffffff",

    // Academic info.
    firstName: "Saunders",
    lastName: "Clutterbuck",
    academicYear: "SuperSenior (5+ Years)",
    currentMajor: "Environmental Science",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields: ["Ecology", "Conservation Biology"],
    currentResearchDescription:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    // desiredResearchFields: should never be present,
    calendarSchedulingLink: null,
  },
  {
    // Generic info.
    id: "7849c70e-2a36-4085-8010-0ebc81db58cc",
    creationTimestamp: "2024-05-27T02:52:11Z",
    userType: "Mentor",
    adminApproved: true,
    emailAddress: "jindracek.978@osu.edu",
    profilePictureLink: "http://dummyimage.com/194x206.png/cc0000/ffffff",

    // Academic info.
    firstName: "Griffin",
    lastName: "Jindracek",
    academicYear: "Sophomore (2nd Year)",
    currentMajor: "Mechanical Engineering",
    preProfessionalRoute: "Pre-Medicine",

    // Research info.
    currentResearchFields: ["Thermodynamics", "Fluid Mechanics"],
    currentResearchDescription:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    // desiredResearchFields: should never be present,
    calendarSchedulingLink: "http://dummyimage.com/142x128.png/dddddd/000000",
  },
  {
    // Generic info.
    id: "da9fcaa2-b13b-4075-b84e-f2c67cf03e4c",
    creationTimestamp: "2024-05-19T04:28:48Z",
    userType: "Mentor",
    adminApproved: true,
    emailAddress: "napolitano.1@osu.edu",
    profilePictureLink: "http://dummyimage.com/209x140.png/cc0000/ffffff",

    // Academic info.
    firstName: "Ettie",
    lastName: "Napolitano",
    academicYear: "Freshman (1st Year)",
    currentMajor: "Psychology",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields: ["Cognitive Psychology", "Behavioral Psychology"],
    currentResearchDescription: "Aenean lectus.",
    // desiredResearchFields: should never be present,
    calendarSchedulingLink: null,
  },
  {
    // Generic info.
    id: "e9a761fd-005c-4fe6-82cc-80c82942dbc1",
    creationTimestamp: "2024-06-04T13:02:46Z",
    userType: "Mentor",
    adminApproved: true,
    emailAddress: "cumbers.73@osu.edu",
    profilePictureLink: "http://dummyimage.com/157x181.png/cc0000/ffffff",

    // Academic info.
    firstName: "Lyndsay",
    lastName: "Cumbers",
    academicYear: "High School",
    currentMajor: "Art",
    preProfessionalRoute: "Pre-Medicine",

    // Research info.
    currentResearchFields: ["Art History", "Digital Media"],
    currentResearchDescription:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    // desiredResearchFields: should never be present,
    calendarSchedulingLink: "http://dummyimage.com/158x246.png/dddddd/000000",
  },
  {
    // Generic info.
    id: "9cb98ec2-e983-41a9-8801-fdfe2481d469",
    creationTimestamp: "2024-06-14T11:21:33Z",
    userType: "Mentor",
    adminApproved: true,
    emailAddress: "wolfit.262@osu.edu",
    profilePictureLink: "http://dummyimage.com/110x127.png/dddddd/000000",

    // Academic info.
    firstName: "Cora",
    lastName: "Wolfit",
    academicYear: "Senior (4th Year)",
    currentMajor: "History",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields: ["Ancient History", "Modern History"],
    currentResearchDescription:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    // desiredResearchFields: should never be present,
    calendarSchedulingLink: "http://dummyimage.com/185x141.png/cc0000/ffffff",
  },
];
