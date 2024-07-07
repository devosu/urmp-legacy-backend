// ./src/models/v1/userModel.ts
//
// Stage-separated schema definition for the User (union) model, built with Zod.

// Type imports.

// Zod essential imports.
import { z } from "zod";

// Local imports.
import {
  UndergradMajors,
  UndergradPreProfRoutes,
  UndergradYears,
} from "@models/v1/osuEnums.js";

// Research Mentorship project-specific enums.
export const UserTypes = z.enum(["Admin", "NewSignup", "Mentor", "Mentee"]);

// User (union) schema, separeted by user workflow stages.
// Admin user schema definition.
export const AdminSchema = z.object({
  
  // Generic info.
  id:                           z.string().uuid(),
  creationTimestamp:            z.string().datetime({ offset: true }),
  userType:                     z.literal(UserTypes.enum.Admin),
  adminApproved:                z.never(),
  emailAddress:                 z.string().email(),
  profilePictureLink:           z.string().url(),

  // Academic info.
  firstName:                    z.string().min(1),
  lastName:                     z.string().min(1),
  academicYear:                 z.never(),
  currentMajor:                 z.never(),
  preProfessionalRoute:         z.never(),

  // Research info.
  currentResearchFields:        z.never(),
  currentResearchDescription:   z.never(),
  desiredResearchFields:        z.never(),
  calendarSchedulingLink:       z.never(),
});

// NewSignup user (pre-apply) schema definition.
export const NewSignupSchema = z.object({
  
  // Generic info.
  id:                           z.string().uuid(),
  creationTimestamp:            z.string().datetime({ offset: true }),
  userType:                     z.literal(UserTypes.enum.NewSignup),
  adminApproved:                z.never(),
  emailAddress:                 z.string().email(),
  profilePictureLink:           z.string().url(),

  // Academic info.
  firstName:                    z.string().min(1),
  lastName:                     z.string().min(1),
  academicYear:                 UndergradYears,
  currentMajor:                 z.never(),
  preProfessionalRoute:         z.never(),

  // Research info.
  currentResearchFields:        z.never(),
  currentResearchDescription:   z.never(),
  desiredResearchFields:        z.never(),
  calendarSchedulingLink:       z.never(),
});

// Mentee user (post-apply) interface definition.
export const MenteeSchema = z.object({
  
  // Generic info.
  id:                           z.string().uuid(),
  creationTimestamp:            z.string().datetime({ offset: true }),
  userType:                     z.literal(UserTypes.enum.Mentee),
  adminApproved:                z.boolean(),
  emailAddress:                 z.string().email(),
  profilePictureLink:           z.string().url(),

  // Academic info.
  firstName:                    z.string().min(1),
  lastName:                     z.string().min(1),
  academicYear:                 UndergradYears,
  currentMajor:                 UndergradMajors,
  preProfessionalRoute:         z.nullable(UndergradPreProfRoutes),

  // Research info.
  currentResearchFields:        z.never(),
  currentResearchDescription:   z.never(),
  desiredResearchFields:        z.array(z.string().min(1)).min(1),
  calendarSchedulingLink:       z.never(),
});

// Mentor user (post-apply) interface definition.
export const MentorSchema = z.object({
  
  // Generic info.
  id:                           z.string().uuid(),
  creationTimestamp:            z.string().datetime({ offset: true }),
  userType:                     z.literal(UserTypes.enum.Mentor),
  adminApproved:                z.boolean(),
  emailAddress:                 z.string().email(),
  profilePictureLink:           z.string().url(),

  // Academic info.
  firstName:                    z.string().min(1),
  lastName:                     z.string().min(1),
  academicYear:                 UndergradYears,
  currentMajor:                 UndergradMajors,
  preProfessionalRoute:         z.nullable(UndergradPreProfRoutes),

  // Research info.
  currentResearchFields:        z.array(z.string().min(1)).min(1),
  currentResearchDescription:   z.string().min(1),
  desiredResearchFields:        z.never(),
  calendarSchedulingLink:       z.nullable(z.string().url()),
});

// Export the User (union) schema and its inferred type.
export const UserSchema = z.discriminatedUnion("userType", [
  AdminSchema,
  NewSignupSchema,
  MenteeSchema,
  MentorSchema,
]);

// Type exports for all defined schemas.
export type AdminSchema =     z.infer<typeof AdminSchema>;
export type NewSignupSchema = z.infer<typeof NewSignupSchema>;
export type MenteeSchema =    z.infer<typeof MenteeSchema>;
export type MentorSchema =    z.infer<typeof MentorSchema>;
export type UserSchema =      z.infer<typeof UserSchema>;
