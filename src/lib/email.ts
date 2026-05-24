import { Resend } from "resend";
import type { LeadInput, IntakeInput } from "@/lib/schema";

const FROM = process.env.RESEND_FROM ?? "RR Strength <onboarding@resend.dev>";
const TO = process.env.RR_INBOX ?? "rashedrahman382@gmail.com";

function client(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function row(label: string, value: unknown) {
  if (value === undefined || value === null || value === "") return "";
  return `<tr><td style="padding:4px 12px 4px 0;color:#666">${esc(
    label
  )}</td><td style="padding:4px 0;font-weight:600">${esc(value)}</td></tr>`;
}

/** Step-1 lead — non-health fields only. */
export async function sendLead(data: LeadInput) {
  const r = client();
  if (!r) return { ok: false, reason: "no-key" as const };
  const html = `<h2>New free-session enquiry</h2><table>${[
    row("Name", `${data.firstName} ${data.lastName}`),
    row("Email", data.email),
    row("Mobile", data.mobile),
    row("Primary goal", data.primaryGoal),
    row("Preferred mode", data.preferredMode),
  ].join("")}</table>`;
  const { error } = await r.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `Free session enquiry — ${data.firstName} ${data.lastName}`,
    html,
  });
  return error ? { ok: false, reason: "send-failed" as const } : { ok: true as const };
}

/** Full intake — includes health fields (TLS to the single controlled inbox). */
export async function sendIntake(data: IntakeInput) {
  const r = client();
  if (!r) return { ok: false, reason: "no-key" as const };
  const html = `<h2>New client intake</h2><table>${[
    row("Name", `${data.firstName} ${data.lastName}`),
    row("Email", data.email),
    row("Mobile", data.mobile),
    row("Primary goal", data.primaryGoal),
    row("Preferred mode", data.preferredMode),
    row("Date of birth", data.dob),
    row("Occupation", data.occupation),
    row("Height (cm)", data.heightCm),
    row("Weight (kg)", data.weightKg),
    row("Age", data.age),
    row("Activities outside gym", data.outsideActivities),
    row("Health conditions", data.healthConditions),
    row("Medications", data.medications),
    row("Injuries", data.injuries),
    row("Training goal", data.goalText),
    row("Why", data.goalWhy),
    row("Sessions/week willing", data.weeklyWillingness),
    row("PT sessions/week wanted", data.ptFrequency),
    row("Consent given", data.consent ? "Yes" : "No"),
  ].join("")}</table>`;
  const { error } = await r.emails.send({
    from: FROM,
    to: TO,
    replyTo: data.email,
    subject: `Client intake — ${data.firstName} ${data.lastName}`,
    html,
  });
  return error ? { ok: false, reason: "send-failed" as const } : { ok: true as const };
}
