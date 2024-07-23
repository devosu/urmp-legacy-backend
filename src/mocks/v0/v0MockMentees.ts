// ./src/mocks/v0/mockMentees.ts
//
// Deterministic mock data for all variations of Mentees.

// Mentee user type imports.
import type { Mentee } from "@src/models/v0/v0UserModel.js";

// Deterministic sample mock mixed pending approval AND approved Mentee document.
export const sampleMockMentee: Mentee = {
  
  // Generic info.
  id                  : "bf60d95a-1bad-4be6-8730-4885284b35e0",
  creationTimestamp   : "2024-07-04T20:44:29Z",
  applicationTimestamp: "2024-07-11T08:20:01Z",
  approvalTimestamp   : "2024-07-13T15:56:30Z",
  
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
export const mockMenteesArray: Mentee[] = [
  sampleMockMentee,
  {
    // Generic info.
    id                  : "e844fe87-1bd7-4701-a649-1d7ce20b15bf",
    creationTimestamp   : "2024-06-01T14:07:44Z",
    applicationTimestamp: "2024-06-19T06:58:19Z",
    approvalTimestamp   : null,
    
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "regelous.665@osu.edu",
    profilePictureLink: "http://dummyimage.com/208x196.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Harriot",
    lastName            : "Regelous",
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Physics",
    preProfessionalRoute: "Pre-Pharmacy",

    // Research info.
    desiredResearchFields: ["Quantum Mechanics", "Particle Physics", "Astrophysics", "Condensed Matter Physics"],
  },
  {
    // Generic info.
    id                  : "a4e731ad-d155-4e13-b7dc-85177aff1356",
    creationTimestamp   : "2024-06-06T08:18:44Z",
    applicationTimestamp: "2024-06-24T17:54:52Z",
    approvalTimestamp   : "2024-07-03T20:28:04Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "eckert.601@osu.edu",
    profilePictureLink: "http://dummyimage.com/143x129.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Edik",
    lastName            : "Eckert",
    academicYear        : "Freshman (1st Year)",
    currentMajor        : "Social Work",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Community Development", "Social Policy", "Clinical Social Work"],
  },
  {
    // Generic info.
    id                  : "94dc811b-aa54-4057-b028-dc9376f34bc3",
    creationTimestamp   : "2024-06-13T21:59:21Z",
    applicationTimestamp: "2024-06-17T22:46:04Z",
    approvalTimestamp   : "2024-07-11T22:07:09Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "mitkov.1034@osu.edu",
    profilePictureLink: "http://dummyimage.com/202x199.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Romona",
    lastName            : "Mitkov",
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Political Science",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["International Relations", "Political Theory", "Comparative Politics"],
  },
  {
    // Generic info.
    id                  : "17f89672-2ebe-4680-ad43-9a5aef2f3792",
    creationTimestamp   : "2024-06-11T00:11:51Z",
    applicationTimestamp: "2024-06-26T13:40:52Z",
    approvalTimestamp   : null,
    
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "bartleman.1465@osu.edu",
    profilePictureLink: "http://dummyimage.com/203x139.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Jeno",
    lastName            : "Bartleman",
    academicYear        : "High School",
    currentMajor        : "Atmospheric Sciences",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Climate Science", "Meteorology", "Environmental Science"],
  },
  {
    // Generic info.
    id                  : "c06f5efe-6138-4908-92f4-bbe12c9cced3",
    creationTimestamp   : "2024-06-13T17:44:26Z",
    applicationTimestamp: "2024-06-17T12:16:21Z",
    approvalTimestamp   : null,
    
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "veivers.406@osu.edu",
    profilePictureLink: "http://dummyimage.com/116x156.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Rea",
    lastName            : "Veivers",
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Atmospheric Sciences",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Climate Science", "Meteorology", "Environmental Science"],
  },
  {
    // Generic info.
    id                  : "afe6b43c-0253-443c-803b-64e4e6f6a67f",
    creationTimestamp   : "2024-06-12T21:41:47Z",
    applicationTimestamp: "2024-06-27T20:00:21Z",
    approvalTimestamp   : "2024-07-04T21:20:26Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "baudins.827@osu.edu",
    profilePictureLink: "http://dummyimage.com/105x108.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Donica",
    lastName            : "Baudins",
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Geography",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Human Geography", "Physical Geography", "Geographic Information Systems (GIS)"],
  },
  {
    // Generic info.
    id                  : "cd5da211-6bd6-41eb-84aa-1380cd33d54f",
    creationTimestamp   : "2024-06-10T03:06:38Z",
    applicationTimestamp: "2024-06-29T17:46:14Z",
    approvalTimestamp   : "2024-07-04T17:05:05Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "lebarr.856@osu.edu",
    profilePictureLink: "http://dummyimage.com/140x187.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Cary",
    lastName            : "Le Barr",
    academicYear        : "SuperSenior (5+ Years)",
    currentMajor        : "Education - Middle Childhood Education",
    preProfessionalRoute: "Pre-Medicine",

    // Research info.
    desiredResearchFields: ["Educational Psychology", "Curriculum Development", "Instructional Technology"],
  },
  {
    // Generic info.
    id                  : "9a5dc7bf-295e-4e3d-b549-2b762940a878",
    creationTimestamp   : "2024-06-07T10:27:08Z",
    applicationTimestamp: "2024-06-26T18:13:20Z",
    approvalTimestamp   : "2024-07-06T04:17:41Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "mylechreest.710@osu.edu",
    profilePictureLink: "http://dummyimage.com/115x144.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Celestine",
    lastName            : "Mylechreest",
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Public Health",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Epidemiology", "Global Health", "Health Policy"],
  },
  {
    // Generic info.
    id                  : "f6ee0d30-5531-45f4-944a-83a9511a7635",
    creationTimestamp   : "2024-06-01T10:32:57Z",
    applicationTimestamp: "2024-06-19T00:04:45Z",
    approvalTimestamp   : null,
    
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "pelling.488@osu.edu",
    profilePictureLink: "http://dummyimage.com/248x209.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Luella",
    lastName            : "Pelling",
    academicYear        : "Sophomore (2nd Year)",
    currentMajor        : "Linguistics",
    preProfessionalRoute: "Pre-Dentistry",

    // Research info.
    desiredResearchFields: ["Phonetics", "Syntax", "Sociolinguistics"],
  },
  {
    // Generic info.
    id                  : "3fd25330-db73-4dca-918d-d56e05dea6a3",
    creationTimestamp   : "2024-06-11T14:58:33Z",
    applicationTimestamp: "2024-06-27T21:46:25Z",
    approvalTimestamp   : null,
    
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "steed.48@osu.edu",
    profilePictureLink: "http://dummyimage.com/114x122.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Emlynn",
    lastName            : "Steed",
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Astronomy and Astrophysics",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Exoplanet Research", "Cosmology", "Galactic Astronomy"],
  },
  {
    // Generic info.
    id                  : "9262f6d0-e330-4428-9989-dba7187c6664",
    creationTimestamp   : "2024-06-02T14:59:51Z",
    applicationTimestamp: "2024-06-21T14:04:30Z",
    approvalTimestamp   : null,
    
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "mackro.285@osu.edu",
    profilePictureLink: "http://dummyimage.com/212x141.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Monica",
    lastName            : "Mackro",
    academicYear        : "Freshman (1st Year)",
    currentMajor        : "Neuroscience",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Cognitive Neuroscience", "Behavioral Neuroscience", "Neuropharmacology"],
  },
  {
    // Generic info.
    id                  : "2673b6c2-b533-4726-93a4-adcf24b353ad",
    creationTimestamp   : "2024-06-13T09:54:32Z",
    applicationTimestamp: "2024-06-28T16:06:12Z",
    approvalTimestamp   : "2024-07-05T00:58:46Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "arnout.665@osu.edu",
    profilePictureLink: "http://dummyimage.com/158x179.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Etienne",
    lastName            : "Arnout",
    academicYear        : "SuperSenior (5+ Years)",
    currentMajor        : "Education - Middle Childhood Education",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Educational Psychology", "Curriculum Development", "Instructional Technology"],
  },
  {
    // Generic info.
    id                  : "983c8eb4-1567-48b2-aaf5-d2c387c80254",
    creationTimestamp   : "2024-06-03T23:22:52Z",
    applicationTimestamp: "2024-06-23T22:53:15Z",
    approvalTimestamp   : null,
    
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "gulley.1462@osu.edu",
    profilePictureLink: "http://dummyimage.com/165x168.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Creighton",
    lastName            : "Gulley",
    academicYear        : "SuperSenior (5+ Years)",
    currentMajor        : "Molecular Genetics",
    preProfessionalRoute: "Pre-Medicine",

    // Research info.
    desiredResearchFields: ["Genetic Engineering", "Gene Therapy", "Molecular Biology"],
  },
  {
    // Generic info.
    id                  : "b5269aed-2393-4eb2-94d6-217017b64f61",
    creationTimestamp   : "2024-06-04T05:44:06Z",
    applicationTimestamp: "2024-06-15T23:19:20Z",
    approvalTimestamp   : "2024-07-12T02:03:40Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "brinkler.1141@osu.edu",
    profilePictureLink: "http://dummyimage.com/121x233.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Vassili",
    lastName            : "Brinkler",
    academicYear        : "High School",
    currentMajor        : "Chemistry",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Organic Chemistry", "Analytical Chemistry", "Physical Chemistry"],
  },
  {
    // Generic info.
    id                  : "04afa54d-fade-48c2-890c-802a0cb0c091",
    creationTimestamp   : "2024-06-01T21:42:40Z",
    applicationTimestamp: "2024-06-21T15:43:08Z",
    approvalTimestamp   : null,
    
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "lammerding.330@osu.edu",
    profilePictureLink: "http://dummyimage.com/124x149.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Estele",
    lastName            : "Lammerding",
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Materials Science and Engineering",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Nanotechnology", "Materials Synthesis", "Biomaterials"],
  },
  {
    // Generic info.
    id                  : "2365c253-72ea-4316-937e-5e2b041371f2",
    creationTimestamp   : "2024-06-07T07:26:54Z",
    applicationTimestamp: "2024-06-19T17:44:00Z",
    approvalTimestamp   : null,
    
    userType          : "Mentee",
    adminApproved     : false,
    emailAddress      : "rothman.92@osu.edu",
    profilePictureLink: "http://dummyimage.com/228x228.png/dddddd/000000",

    // Academic info.
    firstName           : "Shoshana",
    lastName            : "Rothman",
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Biochemistry",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Protein Biochemistry", "Metabolic Pathways", "Enzymology"],
  },
  {
    // Generic info.
    id                  : "4a2d1dac-8429-4768-9782-39b4feaa7c92",
    creationTimestamp   : "2024-06-01T12:14:42Z",
    applicationTimestamp: "2024-06-16T06:58:06Z",
    approvalTimestamp   : "2024-07-13T22:37:09Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "martine.345@osu.edu",
    profilePictureLink: "http://dummyimage.com/198x213.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Hollyanne",
    lastName            : "Martine",
    academicYear        : "Sophomore (2nd Year)",
    currentMajor        : "Microbiology",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Microbial Genetics", "Immunology", "Virology"],
  },
  {
    // Generic info.
    id                  : "271001a0-be9a-4e1a-a9f7-48c18257131d",
    creationTimestamp   : "2024-06-04T20:39:31Z",
    applicationTimestamp: "2024-06-29T23:30:45Z",
    approvalTimestamp   : "2024-07-08T13:55:43Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "mckissack.1015@osu.edu",
    profilePictureLink: "http://dummyimage.com/188x169.png/dddddd/000000",

    // Academic info.
    firstName           : "Fair",
    lastName            : "McKissack",
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Industrial and Systems Engineering",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Operations Research", "Human Factors Engineering", "Supply Chain Management"],
  },
  {
    // Generic info.
    id                  : "ad4a7254-7b03-4c9e-8da0-3f0142468f7f",
    creationTimestamp   : "2024-06-04T13:11:08Z",
    applicationTimestamp: "2024-06-29T19:02:55Z",
    approvalTimestamp   : "2024-07-02T16:08:42Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "rowlin.1123@osu.edu",
    profilePictureLink: "http://dummyimage.com/110x245.png/dddddd/000000",

    // Academic info.
    firstName           : "Lilias",
    lastName            : "Rowlin",
    academicYear        : "Freshman (1st Year)",
    currentMajor        : "Public Policy Analysis",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Policy Analysis", "Public Administration", "Urban Planning"],
  },
  {
    // Generic info.
    id                  : "0186bd36-ea53-4c6d-91df-d51cfb38a8a5",
    creationTimestamp   : "2024-06-02T12:25:36Z",
    applicationTimestamp: "2024-06-27T03:41:13Z",
    approvalTimestamp   : "2024-07-04T06:22:06Z",
    
    userType          : "Mentee",
    adminApproved     : true,
    emailAddress      : "delaharpe.601@osu.edu",
    profilePictureLink: "http://dummyimage.com/118x148.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Francyne",
    lastName            : "De la Harpe",
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Social Work",
    preProfessionalRoute: null,

    // Research info.
    desiredResearchFields: ["Community Development", "Social Policy", "Clinical Social Work"],
  }
];

