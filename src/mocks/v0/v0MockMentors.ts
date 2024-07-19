// ./src/mocks/v0/mockMentors.ts
//
// Deterministic mock data for all variations of mentors.

// Mentor user type imports.
import type { Mentor } from "@src/models/v0/v0UserModel.js";

// Deterministic sample mock mixed pending approval AND approved mentor document.
export const sampleMockMentor: Mentor = {

  // System info.
  id                  : "51432941-24d1-458f-b0b2-81f58699bc37",
  creationTimestamp   : "2024-06-11T02:41:31Z",
  applicationTimestamp: "2024-06-18T02:15:02Z",
  approvalTimestamp   : "2024-07-13T23:26:37Z",

  // Generic info.
  userType          : "Mentor",
  adminApproved     : true,
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
  currentResearchFields        : ["Electrical Circuits", "Computer Architecture",],
  profileAndResearchDescription: "My research focuses on advancing the design and analysis of electrical circuits, with a particular emphasis on enhancing their efficiency and reliability. Additionally, their work in computer architecture explores innovative techniques for improving the performance and scalability of modern computing systems, aiming to push the boundaries of processing power and energy efficiency.",
  calendarSchedulingLink       : "http://dummyimage.com/200x203.png/cc0000/ffffff",
};

// Array of mock approved mentor users.
export const mockMentorsArray: Mentor[] = [
  sampleMockMentor,
  {
    // System info.
    id                  : "00269a99-224d-408c-8079-9811bc65ef24",
    creationTimestamp   : "2024-06-02T00:16:53Z",
    applicationTimestamp: "2024-06-23T11:20:31Z",
    approvalTimestamp   : null,

    // Generic info.
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "pethrick.110@osu.edu",
    profilePictureLink: "http://dummyimage.com/139x197.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Miran",
    lastName            : "Pethrick",
    proficientLanguages : ["English - English"],
    academicYear        : "High School",
    currentMajor        : "Communication",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Media Studies", "Public Relations"],
    profileAndResearchDescription: "My research delves into media studies, examining the influence of digital media on public communication. I also focus on developing strategies for effective community engagement and brand management in public relations.",
    calendarSchedulingLink       : null,
  },
  {
    // System info.
    id                  : "4245de1f-f5f9-4d0a-9099-93b9281336c6",
    creationTimestamp   : "2024-06-06T12:48:21Z",
    applicationTimestamp: "2024-06-16T03:54:02Z",
    approvalTimestamp   : "2024-07-04T21:46:34Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "clout.101@osu.edu",
    profilePictureLink: "http://dummyimage.com/117x162.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Joane",
    lastName            : "Clout",
    proficientLanguages : ["English - English", "German, Standard - Deutsch"],
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Linguistics",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Syntax", "Phonology", "Sociolinguistics"],
    profileAndResearchDescription: "My research in linguistics explores the structures and patterns of syntax and phonology. I also investigate sociolinguistic aspects, focusing on language use in diverse social contexts.",
    calendarSchedulingLink       : null,
  },
  {
    // System info.
    id                  : "51486be1-1c0a-41f1-a503-179ff362df36",
    creationTimestamp   : "2024-06-11T05:04:28Z",
    applicationTimestamp: "2024-06-16T05:48:18Z",
    approvalTimestamp   : null,

    // Generic info.
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "courtier.870@osu.edu",
    profilePictureLink: "http://dummyimage.com/101x216.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Lydie",
    lastName            : "Courtier",
    proficientLanguages : ["English - English"],
    academicYear        : "Senior (4th Year)",
    currentMajor        : "English",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Literary Analysis", "Creative Writing"],
    profileAndResearchDescription: "My research in English literature involves in-depth literary analysis of classic and contemporary works. I also focus on creative writing, particularly on narrative techniques and storytelling.",
    calendarSchedulingLink       : null,
  },
  {
    // System info.
    id                  : "ad557777-d17b-4151-a99a-aa6c92de0a64",
    creationTimestamp   : "2024-06-03T10:06:54Z",
    applicationTimestamp: "2024-06-22T10:36:58Z",
    approvalTimestamp   : "2024-07-06T09:49:38Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "wrettum.503@osu.edu",
    profilePictureLink: "http://dummyimage.com/116x235.png/dddddd/000000",

    // Academic info.
    firstName           : "Correy",
    lastName            : "Wrettum",
    proficientLanguages : ["English - English", "Bengali - বাংলা"],
    academicYear        : "Freshman (1st Year)",
    currentMajor        : "Microbiology",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Microbial Genetics", "Immunology"],
    profileAndResearchDescription: "My research explores microbial genetics, focusing on the genetic makeup and behavior of microorganisms. I also investigate immune responses and mechanisms against various pathogens in immunology.",
    calendarSchedulingLink       : null,
  },
  {
    // System info.
    id                  : "19f4f92c-608b-4f6c-8963-6c0491f33b77",
    creationTimestamp   : "2024-06-09T01:08:55Z",
    applicationTimestamp: "2024-06-17T01:14:15Z",
    approvalTimestamp   : "2024-07-11T17:41:19Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "josefs.1346@osu.edu",
    profilePictureLink: "http://dummyimage.com/236x230.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Marlo",
    lastName            : "Josefs",
    proficientLanguages : ["English - English", "Urdu - اُردُو"],
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Anthropology",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Cultural Anthropology", "Archaeology"],
    profileAndResearchDescription: "My research in anthropology examines cultural practices and societal structures. I also conduct archaeological studies to uncover and analyze artifacts from ancient civilizations.",
    calendarSchedulingLink       : "http://dummyimage.com/236x230.png/5fa2dd/ffffff",
  },
  {
    // System info.
    id                  : "2460b755-ed80-443e-af2a-bdd9b5cc6178",
    creationTimestamp   : "2024-06-06T19:20:28Z",
    applicationTimestamp: "2024-06-21T03:13:32Z",
    approvalTimestamp   : "2024-07-12T09:30:34Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "romeril.135@osu.edu",
    profilePictureLink: "http://dummyimage.com/128x137.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Kristoffer",
    lastName            : "Romeril",
    proficientLanguages : ["English - English"],
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Chemical Engineering",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Process Engineering", "Catalysis"],
    profileAndResearchDescription: "My research in chemical engineering focuses on optimizing chemical processes and exploring catalytic reactions. I aim to improve the efficiency and sustainability of industrial processes.",
    calendarSchedulingLink       : null,
  },
  {
    // System info.
    id                  : "4750d3c6-c398-4008-92a4-50cc44543c62",
    creationTimestamp   : "2024-06-12T23:14:22Z",
    applicationTimestamp: "2024-06-21T04:31:10Z",
    approvalTimestamp   : null,

    // Generic info.
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "howieson.1271@osu.edu",
    profilePictureLink: "http://dummyimage.com/155x167.png/dddddd/000000",

    // Academic info.
    firstName           : "Virge",
    lastName            : "Howieson",
    proficientLanguages : ["English - English"],
    academicYear        : "SuperSenior (5+ Years)",
    currentMajor        : "English",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Literary Theory", "Rhetoric"],
    profileAndResearchDescription: "My research explores various literary theories and their applications in analyzing texts. I also study rhetoric, focusing on the art of persuasion in written and spoken communication.",
    calendarSchedulingLink       : null,
  },
  {
    // System info.
    id                  : "41fdd99c-61d7-4b82-92fb-0f97805f3d59",
    creationTimestamp   : "2024-06-11T00:10:28Z",
    applicationTimestamp: "2024-06-23T11:27:07Z",
    approvalTimestamp   : null,

    // Generic info.
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "ney.70@osu.edu",
    profilePictureLink: "http://dummyimage.com/222x210.png/5fa2dd/ffffff",

    // Academic info.
    firstName           : "Blondy",
    lastName            : "Ney",
    proficientLanguages : ["English - English", "Chinese, Mandarin - 普通话"],
    academicYear        : "Freshman (1st Year)",
    currentMajor        : "Education - Integrated Language Arts/English Education",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Language Pedagogy", "Curriculum Development"],
    profileAndResearchDescription: "My research focuses on language pedagogy, developing effective teaching methods for language arts. I also work on curriculum development to enhance educational programs for diverse learners.",
    calendarSchedulingLink       : null,
  },
  {
    // System info.
    id                  : "12c3fac2-aa40-4ff4-92a9-a8172c6f492b",
    creationTimestamp   : "2024-06-01T05:21:08Z",
    applicationTimestamp: "2024-06-19T10:36:42Z",
    approvalTimestamp   : "2024-07-09T09:06:45Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "algate.281@osu.edu",
    profilePictureLink: "http://dummyimage.com/250x191.png/dddddd/000000",

    // Academic info.
    firstName           : "Kenon",
    lastName            : "Algate",
    proficientLanguages : ["English - English", "Arabic, Standard - العربية الفصحى"],
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Economics",
    preProfessionalRoute: "Pre-Law",

    // Research info.
    currentResearchFields        : ["Behavioral Economics", "Public Policy"],
    profileAndResearchDescription: "My research in economics examines the psychological factors influencing economic decision-making. I also focus on public policy, analyzing the economic impacts of legislative measures.",
    calendarSchedulingLink       : "http://dummyimage.com/250x191.png/dddddd/000000",
  },
  {
    // System info.
    id                  : "afae50ed-3483-457d-923a-6e3b0b733c02",
    creationTimestamp   : "2024-06-01T20:31:48Z",
    applicationTimestamp: "2024-06-25T03:32:37Z",
    approvalTimestamp   : "2024-07-12T13:58:46Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "fust.323@osu.edu",
    profilePictureLink: "http://dummyimage.com/174x157.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Molli",
    lastName            : "Fust",
    proficientLanguages : ["English - English"],
    academicYear        : "Junior (3rd Year)",
    currentMajor        : "Environmental Policy and Decision Making",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Environmental Policy", "Sustainable Development"],
    profileAndResearchDescription: "My research focuses on environmental policy, examining the effectiveness of regulatory measures on environmental protection. I also explore sustainable development strategies to balance economic growth with environmental stewardship.",
    calendarSchedulingLink       : "http://dummyimage.com/174x157.png/ff4444/ffffff",
  },
  {
    // System info.
    id                  : "e8cf8737-15f1-4082-9d8e-cf11ad037673",
    creationTimestamp   : "2024-06-09T11:25:56Z",
    applicationTimestamp: "2024-06-18T22:35:11Z",
    approvalTimestamp   : "2024-07-09T02:36:29Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "adamovsky.534@osu.edu",
    profilePictureLink: "http://dummyimage.com/104x197.png/dddddd/000000",

    // Academic info.
    firstName           : "Johnnie",
    lastName            : "Adamovsky",
    proficientLanguages : ["English - English", "German, Standard - Deutsch"],
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Biomedical Engineering",
    preProfessionalRoute: "Pre-Pharmacy",

    // Research info.
    currentResearchFields        : ["Tissue Engineering", "Pharmaceutical Development"],
    profileAndResearchDescription: "My research in biomedical engineering focuses on tissue engineering, developing synthetic organs and tissues. I also work on pharmaceutical development, creating innovative drug delivery systems and treatments.",
    calendarSchedulingLink       : "http://dummyimage.com/104x197.png/dddddd/000000",
  },
  {
    // System info.
    id                  : "324da464-ea8d-4e19-9be0-54020caa2d70",
    creationTimestamp   : "2024-06-13T17:00:24Z",
    applicationTimestamp: "2024-06-18T17:32:47Z",
    approvalTimestamp   : null,

    // Generic info.
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "windram.1480@osu.edu",
    profilePictureLink: "http://dummyimage.com/146x153.png/dddddd/000000",

    // Academic info.
    firstName           : "Philippa",
    lastName            : "Windram",
    proficientLanguages : ["English - English"],
    academicYear        : "Sophomore (2nd Year)",
    currentMajor        : "Psychology",
    preProfessionalRoute: "Pre-Veterinary Medicine",

    // Research info.
    currentResearchFields        : ["Animal Behavior", "Cognitive Psychology"],
    profileAndResearchDescription: "My research in psychology focuses on animal behavior, studying the cognitive and emotional processes of animals. I also explore cognitive psychology, investigating human mental processes such as perception, memory, and decision-making.",
    calendarSchedulingLink       : null,
  },
  {
    // System info.
    id                  : "a71b5783-3beb-4110-8dc0-fe8ae6a2127a",
    creationTimestamp   : "2024-06-08T01:35:49Z",
    applicationTimestamp: "2024-06-22T14:45:30Z",
    approvalTimestamp   : "2024-07-13T04:09:31Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "uden.177@osu.edu",
    profilePictureLink: "http://dummyimage.com/241x230.png/dddddd/000000",

    // Academic info.
    firstName           : "Etan",
    lastName            : "Uden",
    proficientLanguages : ["English - English", "Chinese, Mandarin - 普通话"],
    academicYear        : "Sophomore (2nd Year)",
    currentMajor        : "Education - Integrated Language Arts/English Education",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Language Pedagogy", "Literacy Education"],
    profileAndResearchDescription: "My research focuses on language pedagogy, developing effective teaching strategies for language arts education. I also study literacy education, aiming to improve reading and writing skills among students.",
    calendarSchedulingLink       : "http://dummyimage.com/241x230.png/dddddd/000000",
  },
  {
    // System info.
    id                  : "e33d019b-dbdd-4ad4-a039-43ee91bb2e57",
    creationTimestamp   : "2024-06-06T05:14:23Z",
    applicationTimestamp: "2024-06-19T08:29:04Z",
    approvalTimestamp   : "2024-07-03T01:19:13Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "ronaldson.234@osu.edu",
    profilePictureLink: "http://dummyimage.com/250x226.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Nat",
    lastName            : "Ronaldson",
    proficientLanguages : ["English - English"],
    academicYear        : "Sophomore (2nd Year)",
    currentMajor        : "Molecular Genetics",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Genetic Engineering", "Gene Therapy"],
    profileAndResearchDescription: "My research in molecular genetics focuses on genetic engineering, manipulating DNA to create desired traits. I also work on gene therapy, developing treatments that correct or replace defective genes.",
    calendarSchedulingLink       : "http://dummyimage.com/250x226.png/ff4444/ffffff",
  },
  {
    // System info.
    id                  : "ca5ccef7-663c-4e3c-bea2-fc2d4f7fc8e0",
    creationTimestamp   : "2024-06-05T11:21:06Z",
    applicationTimestamp: "2024-06-26T20:06:12Z",
    approvalTimestamp   : "2024-07-03T13:28:20Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "lanfere.717@osu.edu",
    profilePictureLink: "http://dummyimage.com/243x102.png/dddddd/000000",

    // Academic info.
    firstName           : "Tyrone",
    lastName            : "Lanfere",
    proficientLanguages : ["English - English", "Chinese, Mandarin - 普通话"],
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Biochemistry",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Protein Biochemistry", "Metabolic Pathways"],
    profileAndResearchDescription: "My research in biochemistry focuses on protein biochemistry, studying the structure and function of proteins. I also investigate metabolic pathways, examining the chemical reactions that occur within living organisms.",
    calendarSchedulingLink       : "http://dummyimage.com/243x102.png/dddddd/000000",
  },
  {
    // System info.
    id                  : "d8943d30-9d5f-4b71-ad62-279b90e462dd",
    creationTimestamp   : "2024-06-07T09:13:13Z",
    applicationTimestamp: "2024-06-18T13:48:30Z",
    approvalTimestamp   : null,

    // Generic info.
    userType          : "Mentor",
    adminApproved     : false,
    emailAddress      : "roycroft.1385@osu.edu",
    profilePictureLink: "http://dummyimage.com/161x214.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Chaunce",
    lastName            : "Roycroft",
    proficientLanguages : ["English - English"],
    academicYear        : "Freshman (1st Year)",
    currentMajor        : "Statistics",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Statistical Modeling", "Data Analysis"],
    profileAndResearchDescription: "My research in statistics focuses on developing and applying statistical models to analyze data. I aim to uncover patterns and insights that can inform decision-making across various fields.",
    calendarSchedulingLink       : null,
  },
  {
    // System info.
    id                  : "8b6a2018-587e-4a40-8b1b-fef3882f489b",
    creationTimestamp   : "2024-06-09T20:08:40Z",
    applicationTimestamp: "2024-06-28T09:52:00Z",
    approvalTimestamp   : "2024-07-10T06:18:57Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "rubenchik.120@osu.edu",
    profilePictureLink: "http://dummyimage.com/165x103.png/dddddd/000000",

    // Academic info.
    firstName           : "Archibaldo",
    lastName            : "Rubenchik",
    proficientLanguages : ["English - English", "Russian - Русский"],
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Public Health",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Epidemiology", "Health Policy"],
    profileAndResearchDescription: "My research in public health focuses on epidemiology, studying the distribution and determinants of health-related events in populations. I also analyze health policy, evaluating the impact of legislation on public health outcomes.",
    calendarSchedulingLink       : "http://dummyimage.com/165x103.png/dddddd/000000",
  },
  {
    // System info.
    id                  : "b07584d9-e7d1-409c-b383-0b473def7760",
    creationTimestamp   : "2024-06-01T16:43:16Z",
    applicationTimestamp: "2024-06-26T09:18:35Z",
    approvalTimestamp   : "2024-07-10T06:21:03Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "pebworth.111@osu.edu",
    profilePictureLink: "http://dummyimage.com/226x126.png/ff4444/ffffff",

    // Academic info.
    firstName           : "Jacklyn",
    lastName            : "Pebworth",
    proficientLanguages : ["English - English"],
    academicYear        : "Senior (4th Year)",
    currentMajor        : "Biomedical Engineering",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Biomechanics", "Biomedical Imaging"],
    profileAndResearchDescription: "My research in biomedical engineering focuses on biomechanics, studying the mechanical aspects of living organisms. I also work on biomedical imaging, developing techniques to visualize and diagnose medical conditions.",
    calendarSchedulingLink       : "http://dummyimage.com/226x126.png/ff4444/ffffff",
  },
  {
    // System info.
    id                  : "48e8e9f9-c9aa-451b-b32f-5dd22bd79980",
    creationTimestamp   : "2024-06-13T03:51:14Z",
    applicationTimestamp: "2024-06-26T03:52:38Z",
    approvalTimestamp   : "2024-07-07T10:41:20Z",

    // Generic info.
    userType          : "Mentor",
    adminApproved     : true,
    emailAddress      : "huddart.155@osu.edu",
    profilePictureLink: "http://dummyimage.com/123x167.png/cc0000/ffffff",

    // Academic info.
    firstName           : "Shelby",
    lastName            : "Huddart",
    proficientLanguages : ["English - English", "German, Standard - Deutsch"],
    academicYear        : "Freshman (1st Year)",
    currentMajor        : "Biology",
    preProfessionalRoute: null,

    // Research info.
    currentResearchFields        : ["Molecular Biology", "Genetics"],
    profileAndResearchDescription: "My research in biology focuses on molecular biology, studying the molecular mechanisms of biological processes. I also investigate genetics, exploring the inheritance and variation of traits in living organisms.",
    calendarSchedulingLink       : "http://dummyimage.com/123x167.png/cc0000/ffffff",
  }
];
