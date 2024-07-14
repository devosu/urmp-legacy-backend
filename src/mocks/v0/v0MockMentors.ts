// ./src/mocks/v0/mockMentors.ts
//
// Deterministic mock data for all variations of mentors.

// Mentor user type imports.
import type { MentorSchema, } from "@src/models/v0/v0UserModel.js";

// Deterministic sample mock mixed pending approval AND approved mentor document.
export const sampleMockMentor: MentorSchema = {
  // Generic info.
  id                : "51432941-24d1-458f-b0b2-81f58699bc37",
  creationTimestamp : "2024-07-04T10:09:59Z",
  userType          : "Mentor",
  adminApproved     : false,
  emailAddress      : "medeway.366@osu.edu",
  profilePictureLink: "http://dummyimage.com/200x203.png/cc0000/ffffff",

  // Academic info.
  firstName           : "Jamie",
  lastName            : "Medeway",
  proficientLanguages : ["English - English",],
  academicYear        : "Senior (4th Year)",
  currentMajor        : "Electrical and Computer Engineering",
  preProfessionalRoute: null,

  // Research info.
  currentResearchFields     : ["Electrical Circuits", "Computer Architecture",],
  currentResearchDescription: "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
  calendarSchedulingLink    : null,
};

// Array of mock approved mentor users.
export const mockMentorsArray: MentorSchema[] = [
  sampleMockMentor,
  {
    // Generic info.
    id                : "1b72c50d-97c9-4662-9de5-52c484a6537e",
    creationTimestamp : "2024-06-12T21:02:27Z",
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "kingcott.991@osu.edu",
    profilePictureLink: "http://dummyimage.com/116x203.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Hailey",
    lastName            : "Kingcott",
    proficientLanguages : ["English - English",],
    academicYear        : "Sophomore (2nd Year)",
    currentMajor        : "Education - World Language Education",
    preProfessionalRoute: "Pre-Pharmacy",

    // Research info.
    currentResearchFields     : ["Language Pedagogy", "Educational Technology",],
    currentResearchDescription: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    calendarSchedulingLink    : null,
  },
  {
    // Generic info.
    id                : "f5c5dbd7-5e91-4cc8-ab84-98d2130a3c75",
    creationTimestamp : "2024-07-04T10:11:42Z",
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "fomichyov.1437@osu.edu",
    profilePictureLink: "http://dummyimage.com/135x103.png/dddddd/000000",

    // Academic info.
    firstName           : "Karlene",
    lastName            : "Fomichyov",
    proficientLanguages : ["English - English", "French - Français",],
    academicYear        : "High School",
    currentMajor        : "Chemical Engineering",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields     : ["Chemical Process Engineering", "Materials Science",],
    currentResearchDescription: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    calendarSchedulingLink    : null,
  },
  {
    // Generic info.
    id                : "c84c6ac4-a600-445d-be65-094be67a3b49",
    creationTimestamp : "2024-07-03T21:32:46Z",
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "bilam.998@osu.edu",
    profilePictureLink: "http://dummyimage.com/172x195.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Giulietta",
    lastName            : "Bilam",
    proficientLanguages : ["English - English",],
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Earth Sciences",
    preProfessionalRoute: "Pre-Pharmacy",

    // Research info.
    currentResearchFields     : ["Geology", "Environmental Science",],
    currentResearchDescription: "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    calendarSchedulingLink    : "http://dummyimage.com/172x195.png/ff4444/ffffff",
  },
  {
    // Generic info.
    id                : "5c20a155-e3ed-4410-ae2b-6cc8d8b41f05",
    creationTimestamp : "2024-06-19T07:00:02Z",
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "loads.271@osu.edu",
    profilePictureLink: "http://dummyimage.com/103x148.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Karylin",
    lastName            : "Loads",
    proficientLanguages : ["English - English",],
    academicYear        : "Freshman (1st Year)",
    currentMajor        : "Astronomy and Astrophysics",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields     : ["Cosmology", "Stellar Dynamics",],
    currentResearchDescription: "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    calendarSchedulingLink    : "http://dummyimage.com/103x148.png/cc0000/ffffff",
  },
  {
    // Generic info.
    id                : "72ec42f0-567d-478c-9fe6-a20b9b94c2fb",
    creationTimestamp : "2024-07-03T08:00:20Z",
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "boerderman.363@osu.edu",
    profilePictureLink: "http://dummyimage.com/106x213.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Bealle",
    lastName            : "Boerderman",
    proficientLanguages : ["English - English", "French - Français",],
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Education - World Language Education",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields     : ["Language Pedagogy", "Curriculum Development",],
    currentResearchDescription: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    calendarSchedulingLink    : "http://dummyimage.com/106x213.png/5fa2dd/ffffff",
  },
  {
    // Generic info.
    id                : "e811c45b-5fd3-45f1-b594-cdd55a3c15a4",
    creationTimestamp : "2024-07-09T21:48:37Z",
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "sainsberry.1112@osu.edu",
    profilePictureLink: "http://dummyimage.com/128x190.png/dddddd/000000",

    // Academic info.
    firstName           : "Jobina",
    lastName            : "Sainsberry",
    proficientLanguages : ["English - English",],
    academicYear        : "Sophomore (2nd Year)",
    currentMajor        : "Social Work",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields     : ["Community Development", "Social Policy",],
    currentResearchDescription: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    calendarSchedulingLink    : null,
  },
  {
    // Generic info.
    id                : "35f7b2e5-919b-4c18-85b1-2e1921a90128",
    creationTimestamp : "2024-06-30T07:05:07Z",
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "milam.1455@osu.edu",
    profilePictureLink: "http://dummyimage.com/248x210.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Flory",
    lastName            : "Milam",
    proficientLanguages : ["English - English",],
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Computer Science and Engineering",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields     : ["Artificial Intelligence", "Software Engineering",],
    currentResearchDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    calendarSchedulingLink    : null,
  },
  {
    // Generic info.
    id                : "ba4c6ed0-4a2d-4625-9bde-092757072798",
    creationTimestamp : "2024-06-28T05:45:27Z",
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "gussin.693@osu.edu",
    profilePictureLink: "http://dummyimage.com/223x204.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Eveleen",
    lastName            : "Gussin",
    proficientLanguages : ["English - English",],
    academicYear        : "Sophomore (2nd Year)",
    currentMajor        : "Environmental Policy and Decision Making",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields     : ["Sustainability", "Environmental Management",],
    currentResearchDescription: "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    calendarSchedulingLink    : null,
  },
  {
    // Generic info.
    id                : "79845f19-3fef-4899-9494-f1ff1f9e9f95",
    creationTimestamp : "2024-06-14T20:02:01Z",
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "davidi.822@osu.edu",
    profilePictureLink: "http://dummyimage.com/142x225.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Newton",
    lastName            : "Davidi",
    proficientLanguages : ["English - English",],
    academicYear        : "Freshman (1st Year)",
    currentMajor        : "Environmental Engineering",
    preProfessionalRoute: "Pre-Pharmacy",

    // Research info.
    currentResearchFields     : ["Water Resources", "Sustainable Infrastructure",],
    currentResearchDescription: "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    calendarSchedulingLink    : null,
  }
];
