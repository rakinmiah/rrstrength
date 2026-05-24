import { z } from "zod";

export const GOALS = [
  "Strength & powerlifting",
  "Fat loss & conditioning",
  "General fitness",
  "Competition prep",
] as const;

export const MODES = ["In-person", "Online", "Hybrid", "Not sure yet"] as const;

// Step 1 — the low-friction lead (emailed immediately).
export const leadSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name").max(50),
  lastName: z.string().trim().min(1, "Enter your last name").max(50),
  email: z.string().trim().email("Enter a valid email"),
  mobile: z
    .string()
    .trim()
    .min(7, "Enter your mobile number")
    .max(20)
    .regex(/^[0-9+()\s-]+$/, "Enter a valid mobile number"),
  primaryGoal: z.enum(GOALS, { message: "Choose a goal" }),
  preferredMode: z.enum(MODES, { message: "Choose a preferred mode" }),
  // Honeypot — must stay empty.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

// Steps 2–5 — full PAR-Q intake (most fields optional; consent required).
export const intakeSchema = leadSchema.extend({
  dob: z.string().optional(),
  occupation: z.string().max(80).optional(),
  heightCm: z.string().max(4).optional(),
  weightKg: z.string().max(4).optional(),
  age: z.string().max(3).optional(),
  outsideActivities: z.string().max(160).optional(),
  healthConditions: z.string().max(400).optional(),
  medications: z.string().max(300).optional(),
  injuries: z.string().max(300).optional(),
  goalText: z.string().max(160).optional(),
  goalWhy: z.string().max(200).optional(),
  weeklyWillingness: z.string().max(3).optional(),
  ptFrequency: z.string().max(4).optional(),
  consent: z.literal(true, { message: "You must consent to continue" }),
});

export type IntakeInput = z.infer<typeof intakeSchema>;
