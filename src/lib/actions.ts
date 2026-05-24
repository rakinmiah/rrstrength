"use server";

import { leadSchema, intakeSchema } from "@/lib/schema";
import { sendLead, sendIntake } from "@/lib/email";

export type ActionResult = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};

function fieldErrorsFrom(
  issues: readonly { path: readonly PropertyKey[]; message: string }[]
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const i of issues) {
    const key = String(i.path[0] ?? "form");
    if (!out[key]) out[key] = i.message;
  }
  return out;
}

const GENERIC_ERROR =
  "Something went wrong sending that. Try again, or email rashedrahman382@gmail.com.";

export async function submitLead(
  data: Record<string, unknown>
): Promise<ActionResult> {
  const parsed = leadSchema.safeParse(data);
  if (!parsed.success)
    return { ok: false, fieldErrors: fieldErrorsFrom(parsed.error.issues) };
  if (parsed.data.company) return { ok: true }; // honeypot tripped — silently accept

  const res = await sendLead(parsed.data);
  if (!res.ok && res.reason === "send-failed")
    return { ok: false, error: GENERIC_ERROR };
  // no-key in dev → treat as accepted so the flow is testable without Resend
  return { ok: true };
}

export async function submitIntake(
  data: Record<string, unknown>
): Promise<ActionResult> {
  const parsed = intakeSchema.safeParse(data);
  if (!parsed.success)
    return { ok: false, fieldErrors: fieldErrorsFrom(parsed.error.issues) };
  if (parsed.data.company) return { ok: true };

  const res = await sendIntake(parsed.data);
  if (!res.ok && res.reason === "send-failed")
    return { ok: false, error: GENERIC_ERROR };
  return { ok: true };
}
