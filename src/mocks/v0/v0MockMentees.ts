// ./src/mocks/v0/mockMentees.ts
//
// Deterministic mock data for all variations of Mentees.

// Mentee user type imports.
import type { MenteeSchema, } from "@src/models/v0/v0UserModel.js";

// Deterministic sample mock mixed pending approval AND approved Mentee document.
export const sampleMockBeforeApprovedMentee: MenteeSchema = {
  // Generic info.
  id                : "bf60d95a-1bad-4be6-8730-4885284b35e0",
  creationTimestamp : "2024-07-04T20:44:29Z",
  userType          : "Mentee",
  adminApproved     : false,
  emailAddress      : "synke.684@osu.edu",
  profilePictureLink: "http://dummyimage.com/239x166.png/ff4444/ffffff",

  // Academic info.
  firstName           : "Vanessa",
  lastName            : "Synke",
  academicYear        : "Junior (3rd Year)",
  currentMajor        : "Electrical and Computer Engineering",
  preProfessionalRoute: null,

  // Research info.
  desiredResearchFields: ["Electrical Circuits", "Computer Architecture"],
};

export const sampleMockMentee: MenteeSchema = {
  // Generic info.
  id                : "bf60d95a-1bad-4be6-8730-4885284b35e0",
  creationTimestamp : "2024-07-04T20:44:29Z",
  userType          : "Mentee",
  adminApproved     : true,
  emailAddress      : "synke.684@osu.edu",
  profilePictureLink: "http://dummyimage.com/239x166.png/ff4444/ffffff",

  // Academic info.
  firstName           : "Vanessa",
  lastName            : "Synke",
  academicYear        : "Junior (3rd Year)",
  currentMajor        : "Electrical and Computer Engineering",
  preProfessionalRoute: null,

  // Research info.
  desiredResearchFields: ["Electrical Circuits", "Computer Architecture"],
};

// Array of mock approved Mentee users.
export const mockMenteesArray: MenteeSchema[] = [
  sampleMockMentee,
  {
    // Generic info.
    id                : "09164136-34ab-460c-8800-ecb8ffc73151",
    creationTimestamp : "2024-06-14T23:27:20Z",
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "devenny.1415@osu.edu",
    profilePictureLink: "http://dummyimage.com/230x103.png/dddddd/000000",

    // Academic info.
    firstName           : "Leona",
    lastName            : "Devenny",
    academicYear        : "High School",
    currentMajor        : "Social Work",
    preProfessionalRoute: "Pre-Veterinary Medicine",

    // Research info.
    desiredResearchFields: ["Community Development"],
  },
  {
    // Generic info.
    id                : "3a0423d0-ff59-49fb-b6a1-7c5e53d313b2",
    creationTimestamp : "2024-06-15T05:38:41Z",
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "clayson.728@osu.edu",
    profilePictureLink: "http://dummyimage.com/141x241.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Berrie",
    lastName            : "Clayson",
    academicYear        : "High School",
    currentMajor        : "Education - Science and Mathematics Education",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["STEM Education", "Curriculum Development", "Educational Technology"],
  },
  {
    // Generic info.
    id                : "7b05a112-4e5f-49d6-bc27-aa42539f16b6",
    creationTimestamp : "2024-06-12T08:07:51Z",
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "simonich.1419@osu.edu",
    profilePictureLink: "http://dummyimage.com/174x194.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Byram",
    lastName            : "Simonich",
    academicYear        : "SuperSenior (5+ Years)",
    currentMajor        : "Geographic Information Science",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["GIS Technology", "Spatial Analysis"],
  },
  {
    // Generic info.
    id                : "448bcba5-cb09-4050-ad5f-cd6fe5634262",
    creationTimestamp : "2024-06-28T10:01:39Z",
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "vanarsdall.408@osu.edu",
    profilePictureLink: "http://dummyimage.com/104x197.png/dddddd/000000",

    // Academic info.
    firstName           : "Tymon",
    lastName            : "Van Arsdall",
    academicYear        : "SuperSenior (5+ Years)",
    currentMajor        : "Public Health",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Epidemiology", "Health Policy"],
  },
  {
    // Generic info.
    id                : "2f4847ab-cf43-4c89-8647-c704587fe779",
    creationTimestamp : "2024-06-30T08:33:58Z",
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "rosling.363@osu.edu",
    profilePictureLink: "http://dummyimage.com/180x110.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Shanon",
    lastName            : "Rosling",
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Anthropology",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Cultural Anthropology", "Archaeology", "Ethnography"],
  },
  {
    // Generic info.
    id                : "6bf9479f-d409-421c-9751-aac25a992668",
    creationTimestamp : "2024-06-30T02:24:09Z",
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "mccalister.856@osu.edu",
    profilePictureLink: "http://dummyimage.com/105x165.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Algernon",
    lastName            : "McCalister",
    academicYear        : "Sophomore (2nd Year)",
    currentMajor        : "Biochemistry",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Molecular Biology"],
  },
  {
    // Generic info.
    id                : "35d09b05-6b1a-44c5-8b35-cdf4f731bf7f",
    creationTimestamp : "2024-06-26T19:01:08Z",
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "cruwys.967@osu.edu",
    profilePictureLink: "http://dummyimage.com/224x108.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Filberto",
    lastName            : "Cruwys",
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Molecular Genetics",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Genomics", "Genetic Engineering"],
  },
  {
    // Generic info.
    id                : "46894d43-fd05-40dd-984c-73c66e8ab796",
    creationTimestamp : "2024-06-21T15:37:59Z",
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "mcalester.988@osu.edu",
    profilePictureLink: "http://dummyimage.com/120x119.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Margi",
    lastName            : "McAlester",
    academicYear        : "High School",
    currentMajor        : "Biochemistry",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Molecular Biology", "Enzymology"],
  },
  {
    // Generic info.
    id                : "378f651b-8ed4-4460-8d87-27c45998d120",
    creationTimestamp : "2024-06-17T23:57:15Z",
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "cockshtt.17@osu.edu",
    profilePictureLink: "http://dummyimage.com/241x140.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Dmitri",
    lastName            : "Cockshtt",
    academicYear        : "SuperSenior (5+ Years)",
    currentMajor        : "Biology",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Ecology", "Cell Biology"],
  },
  {
    // Generic info.
    id                : "c7786cca-61c0-4408-90c8-ceb43edef8a9",
    creationTimestamp : "2024-06-22T11:57:42Z",
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "beuscher.588@osu.edu",
    profilePictureLink: "http://dummyimage.com/173x193.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Ludvig",
    lastName            : "Beuscher",
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Physics",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Quantum Mechanics"],
  },
  {
    // Generic info.
    id                : "bf76774f-591b-4a6a-8a13-1835325752b0",
    creationTimestamp : "2024-06-27T08:52:59Z",
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "bendin.682@osu.edu",
    profilePictureLink: "http://dummyimage.com/124x147.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Lynnet",
    lastName            : "Bendin",
    academicYear        : "Sophomore (2nd Year)",
    currentMajor        : "Psychology",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Cognitive Psychology", "Behavioral Science"],
  },
  {
    // Generic info.
    id                : "49400a00-be4f-49fb-b355-b52cd888e326",
    creationTimestamp : "2024-06-18T02:06:37Z",
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "derwin.658@osu.edu",
    profilePictureLink: "http://dummyimage.com/218x156.png/dddddd/000000",

    // Academic info.
    firstName           : "Adelbert",
    lastName            : "Derwin",
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Education - Integrated Language Arts/English Education",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Literacy Education"],
  },
  {
    // Generic info.
    id                : "b26e7add-aed3-4e3b-8c37-9f0b8f9b20d8",
    creationTimestamp : "2024-07-05T04:02:04Z",
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "blunderfield.1489@osu.edu",
    profilePictureLink: "http://dummyimage.com/245x136.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Adriana",
    lastName            : "Blunderfield",
    academicYear        : "SuperSenior (5+ Years)",
    currentMajor        : "Neuroscience",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Neurobiology", "Cognitive Neuroscience"],
  },
  {
    // Generic info.
    id                : "11dcc7e1-d704-45f5-8bd1-fe241ceb798a",
    creationTimestamp : "2024-07-02T21:20:32Z",
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "travers.586@osu.edu",
    profilePictureLink: "http://dummyimage.com/238x119.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Humphrey",
    lastName            : "Travers",
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Education - Special Education",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Inclusive Education", "Special Education Policy", "Educational Psychology"],
  }
];
