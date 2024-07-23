// ./src/models/v0/userModel.ts
//
// Stage-separated schema definition for the User (union) model, built with Zod.

// Type imports.

// Zod essential imports.
import { z } from "zod";

// Local imports.
import {
  UndergradMajorsTuple,
  UndergradPreProfRoutesTuple,
  UndergradYearsTuple,
} from "@src/models/osuTuples.js";
import {
  Top200WorldLanguagesTuple,
} from "@src/models/top200WorldLanguagesTuple.js";

// OSU undergrad year, major and pre-prof options zod enums.
export const UndergradYear          = z.enum(UndergradYearsTuple);
export const UndergradMajor         = z.enum(UndergradMajorsTuple);
export const UndergradPreProfRoute  = z.enum(UndergradPreProfRoutesTuple);

// Export the types for the OSU undergrad year, major and pre-prof options.
export type  UndergradYear          = z.infer<typeof UndergradYear>;
export type  UndergradMajor         = z.infer<typeof UndergradMajor>;
export type  UndergradPreProfRoute  = z.infer<typeof UndergradPreProfRoute>;

// Top 200 world languages zod enum and type export.
export const Top200WorldLanguage    = z.enum(Top200WorldLanguagesTuple);
export type  Top200WorldLanguage    = z.infer<typeof Top200WorldLanguage>;

// Research Mentorship project-specific zod enums and type export.
export const UserType               = z.enum(["Admin", "NewSignup", "Mentor", "Mentee"]);
export type  UserType               = z.infer<typeof UserType>;

// User (union) schema, separeted by user workflow stages.
// Admin user schema definition.
export const Admin = z.object({
  
  // System info.
  id                           : z.string().uuid(),
  creationTimestamp            : z.string().datetime({ offset: true }),
  // applicationTimestamp         : z.never(),
  // approvalTimestamp            : z.never(),

  // Generic info.
  userType                     : z.literal(UserType.enum.Admin),
  // adminApproved                : z.never(),
  emailAddress                 : z.string().email(),
  profilePictureLink           : z.string().url(),
  firstName                    : z.string().min(1),
  lastName                     : z.string().min(1),

  // Academic info.
  // proficientLanguages          : z.never(),
  // academicYear                 : z.never(),
  // currentMajor                 : z.never(),
  // preProfessionalRoute         : z.never(),

  // Research info.
  // currentResearchFields        : z.never(),
  // profileAndResearchDescription: z.never(),
  // desiredResearchFields        : z.never(),
  // calendarSchedulingLink       : z.never(),
});

// NewSignup user (pre-apply) schema definition.
export const NewSignup = z.object({
  
  // System info.
  id                           : z.string().uuid(),
  creationTimestamp            : z.string().datetime({ offset: true }),
  // applicationTimestamp         : z.never(),
  // approvalTimestamp            : z.never(),

  // Generic info.
  userType                     : z.literal(UserType.Enum.NewSignup),
  // adminApproved                : z.never(),
  emailAddress                 : z.string().email(),
  profilePictureLink           : z.string().url(),
  firstName                    : z.string().min(1),
  lastName                     : z.string().min(1),

  // Academic info.
  // proficientLanguages          : z.never(),
  academicYear                 : UndergradYear,
  // currentMajor                 : z.never(),
  // preProfessionalRoute         : z.never(),

  // Research info.
  // currentResearchFields        : z.never(),
  // profileAndResearchDescription: z.never(),
  // desiredResearchFields        : z.never(),
  // calendarSchedulingLink       : z.never(),
});

// Mentee user (post-apply) interface definition.
export const Mentee = z.object({
  
  // System info.
  id                           : z.string().uuid(),
  creationTimestamp            : z.string().datetime({ offset: true }),
  applicationTimestamp         : z.string().datetime({ offset: true }),
  approvalTimestamp            : z.nullable(z.string().datetime({ offset: true })),

  // Generic info.
  userType                     : z.literal(UserType.Enum.Mentee),
  adminApproved                : z.boolean(),
  emailAddress                 : z.string().email(),
  profilePictureLink           : z.string().url(),
  firstName                    : z.string().min(1),
  lastName                     : z.string().min(1),

  // Academic info.
  // proficientLanguages          : z.never(),
  academicYear                 : UndergradYear,
  currentMajor                 : UndergradMajor,
  preProfessionalRoute         : z.nullable(UndergradPreProfRoute),

  // Research info.
  // currentResearchFields        : z.never(),
  // profileAndResearchDescription: z.never(),
  desiredResearchFields        : z.array(z.string().min(1)).min(1),
  // calendarSchedulingLink       : z.never(),
});

// Mentor user (post-apply) interface definition.
export const Mentor = z.object({
  
  // System info.
  id                           : z.string().uuid(),
  creationTimestamp            : z.string().datetime({ offset: true }),
  applicationTimestamp         : z.string().datetime({ offset: true }),
  approvalTimestamp            : z.nullable(z.string().datetime({ offset: true })),

  // Generic info.
  userType                     : z.literal(UserType.Enum.Mentor),
  adminApproved                : z.boolean(),
  emailAddress                 : z.string().email(),
  profilePictureLink           : z.string().url(),
  firstName                    : z.string().min(1),
  lastName                     : z.string().min(1),

  // Academic info.
  proficientLanguages          : z.array(Top200WorldLanguage).min(1),
  academicYear                 : UndergradYear,
  currentMajor                 : UndergradMajor,
  preProfessionalRoute         : z.nullable(UndergradPreProfRoute),

  // Research info.
  currentResearchFields        : z.array(z.string().min(1)).min(1),
  profileAndResearchDescription: z.string().min(1),
  // desiredResearchFields        : z.never(),
  calendarSchedulingLink       : z.nullable(z.string().url()),
});

// Export each and union user schemas and their inferred types.
// IMPORTANT!!
// AdminSchema is EXCLUDED from the general UserSchema, as it is immutable.
export const NonAdmin = z.discriminatedUnion(
  "userType", 
  [
    NewSignup,
    Mentee,
    Mentor,
  ],
);
export type Admin     = z.infer<typeof Admin>;
export type NewSignup = z.infer<typeof NewSignup>;
export type Mentee    = z.infer<typeof Mentee>;
export type Mentor    = z.infer<typeof Mentor>;
export type NonAdmin  = z.infer<typeof NonAdmin>;
