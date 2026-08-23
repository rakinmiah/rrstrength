"use server";

import { leadSchema, intakeSchema } from "@/lib/schema";
import { sendLead, sendIntake } from "@/lib/email";
import { contact } from "@/content/navigation";

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

const GENERIC_ERROR = `Something went wrong sending that. Try again, or email ${contact.email}.`;

/**
 * A missing RESEND_API_KEY is a convenience in dev (the flow stays testable
 * without Resend) but a silent data-loss bug in production, where it would
 * accept an enquiry and drop it. Fail loudly there so the visitor is told to
 * email instead.
 */
function isDelivered(res: { ok: boolean; reason?: "no-key" | "send-failed" }) {
  if (res.ok) return true;
  if (res.reason === "no-key" && process.env.NODE_ENV !== "production") {
    console.warn("[rr] RESEND_API_KEY unset — enquiry not emailed (dev only).");
    return true;
  }
  return false;
}

export async function submitLead(
  data: Record<string, unknown>
): Promise<ActionResult> {
  const parsed = leadSchema.safeParse(data);
  if (!parsed.success)
    return { ok: false, fieldErrors: fieldErrorsFrom(parsed.error.issues) };
  if (parsed.data.company) return { ok: true }; // honeypot tripped — silently accept

  const res = await sendLead(parsed.data);
  if (!isDelivered(res)) return { ok: false, error: GENERIC_ERROR };
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
  if (!isDelivered(res)) return { ok: false, error: GENERIC_ERROR };
  return { ok: true };
}
