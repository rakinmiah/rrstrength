"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { contact } from "@/content/navigation";
import { intakeSchema, GOALS, MODES, type IntakeInput } from "@/lib/schema";
import { submitLead, submitIntake } from "@/lib/actions";

const STEP_LABELS = [
  "Your details",
  "About you",
  "Health & lifestyle",
  "Goals & experience",
  "Schedule & consent",
];

const STEP_FIELDS: (keyof IntakeInput)[][] = [
  ["firstName", "lastName", "email", "mobile", "primaryGoal", "preferredMode"],
  ["dob", "occupation", "heightCm", "weightKg", "age", "outsideActivities"],
  ["healthConditions", "medications", "injuries"],
  ["goalText", "goalWhy", "weeklyWillingness"],
  ["ptFrequency", "consent"],
];

export function ContactForm() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const leadSent = useRef(false);
  const total = STEP_LABELS.length;

  const {
    register,
    trigger,
    getValues,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IntakeInput>({
    resolver: zodResolver(intakeSchema),
    mode: "onTouched",
  });

  function applyFieldErrors(fe?: Record<string, string>) {
    if (!fe) return;
    for (const [k, m] of Object.entries(fe))
      setError(k as keyof IntakeInput, { message: m });
  }

  // Fire the Step-1 lead once (on Continue or "send this").
  async function fireLead() {
    if (leadSent.current) return true;
    const v = getValues();
    const res = await submitLead(v);
    if (!res.ok) {
      setFormError(res.error ?? "Please check your details.");
      applyFieldErrors(res.fieldErrors);
      return false;
    }
    leadSent.current = true;
    return true;
  }

  async function next() {
    setFormError(null);
    const ok = await trigger(STEP_FIELDS[step]);
    if (!ok) return;
    if (step === 0 && !(await fireLead())) return;
    setStep((s) => Math.min(s + 1, total - 1));
  }

  async function sendNow() {
    setFormError(null);
    const ok = await trigger(STEP_FIELDS[0]);
    if (!ok) return;
    if (await fireLead()) setDone(true);
  }

  async function finalSubmit(values: IntakeInput) {
    setFormError(null);
    await fireLead();
    const res = await submitIntake(values);
    if (!res.ok) {
      setFormError(res.error ?? "Please check the form.");
      applyFieldErrors(res.fieldErrors);
      return;
    }
    setDone(true);
  }

  return (
    <SectionShell id="start" tone="surface" aria-labelledby="start-h">
      <div className="grid gap-10 lg:grid-cols-[58fr_42fr] lg:gap-14">
        <div>
          <Eyebrow>Start here</Eyebrow>

          {done ? (
            <div className="mt-6 rounded-lg border border-line bg-surface p-8">
              <Check className="text-success" size={32} aria-hidden />
              <h2
                id="start-h"
                className="mt-3 font-display text-h3 font-bold uppercase text-fg"
              >
                Got it — thank you.
              </h2>
              <p className="mt-2 text-muted">
                I&apos;ll be in touch within 24 hours to book your free session.
              </p>
            </div>
          ) : (
            <>
              {/* Progress */}
              <div className="mt-5">
                <div className="flex items-center gap-1.5" aria-hidden>
                  {STEP_LABELS.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 flex-1 rounded-pill transition-colors ${
                        i <= step ? "bg-brick" : "bg-line-strong"
                      }`}
                    />
                  ))}
                </div>
                <p
                  className="mt-2 text-sm text-muted"
                  aria-live="polite"
                >
                  <span className="sr-only">
                    Step {step + 1} of {total}:{" "}
                  </span>
                  {step + 1} · {STEP_LABELS[step]}
                </p>
              </div>

              <form
                className="mt-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (step < total - 1) next();
                  else handleSubmit(finalSubmit)();
                }}
                noValidate
              >
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="absolute left-[-9999px] h-0 w-0"
                  {...register("company")}
                />

                <fieldset>
                  <legend
                    id={step === 0 ? "start-h" : undefined}
                    className="font-display text-h3 font-bold uppercase text-fg"
                  >
                    {step === 0 ? "Claim your free session" : STEP_LABELS[step]}
                  </legend>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={reduce ? false : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? undefined : { opacity: 0, x: -24 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-5 grid gap-4"
                    >
                      {step === 0 && <Step1 register={register} errors={errors} />}
                      {step === 1 && <Step2 register={register} />}
                      {step === 2 && <Step3 register={register} />}
                      {step === 3 && <Step4 register={register} />}
                      {step === 4 && (
                        <Step5 register={register} errors={errors} />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </fieldset>

                {formError && (
                  <p
                    role="alert"
                    className="mt-4 rounded-md border border-danger/40 bg-danger/10 px-3 py-2 text-sm text-danger"
                  >
                    {formError}
                  </p>
                )}

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {step > 0 && (
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setStep((s) => s - 1)}
                    >
                      Back
                    </Button>
                  )}
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting
                      ? "Sending…"
                      : step < total - 1
                        ? "Continue"
                        : "Send my intake"}
                  </Button>
                  {step === 0 && (
                    <button
                      type="button"
                      onClick={sendNow}
                      disabled={isSubmitting}
                      className="text-sm text-link underline-offset-4 hover:underline disabled:opacity-60"
                    >
                      Send this and I&apos;ll be in touch
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-line bg-surface p-6">
            <p className="font-display text-h4 font-bold uppercase text-fg">
              Your first in-person session is free.
            </p>
            <ul className="mt-4 space-y-2 text-[15px] text-muted">
              {[
                "In-person at PureGym Burgess Hill",
                "Money-back guarantee",
                "Your details stay private & confidential",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check size={18} className="text-brick" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-sm text-muted">
              <span className="font-semibold text-fg">What happens next:</span>{" "}
              I&apos;ll reply within 24 hours to book your free session.
            </p>
            <p className="mt-4 text-sm text-muted">
              {contact.phone} · {contact.instagramHandle}
            </p>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}

/* ── Field primitives ──────────────────────────────────────────────── */
type Reg = ReturnType<typeof useForm<IntakeInput>>["register"];
type Errs = ReturnType<typeof useForm<IntakeInput>>["formState"]["errors"];

const inputCls =
  "w-full min-h-11 rounded-md border border-line bg-surface-sunken px-3.5 py-2.5 text-fg placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] aria-[invalid=true]:border-danger";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-sans text-sm font-semibold text-fg">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-sm text-danger">{error}</span>}
    </label>
  );
}

function Step1({ register, errors }: { register: Reg; errors: Errs }) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" error={errors.firstName?.message}>
          <input
            className={inputCls}
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            {...register("firstName")}
          />
        </Field>
        <Field label="Last name" error={errors.lastName?.message}>
          <input
            className={inputCls}
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            {...register("lastName")}
          />
        </Field>
      </div>
      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          className={inputCls}
          autoComplete="email"
          inputMode="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </Field>
      <Field label="Mobile" error={errors.mobile?.message}>
        <input
          type="tel"
          className={inputCls}
          autoComplete="tel"
          inputMode="tel"
          aria-invalid={!!errors.mobile}
          {...register("mobile")}
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Primary goal" error={errors.primaryGoal?.message}>
          <select
            className={inputCls}
            defaultValue=""
            aria-invalid={!!errors.primaryGoal}
            {...register("primaryGoal")}
          >
            <option value="" disabled>
              Choose…
            </option>
            {GOALS.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </Field>
        <Field label="Preferred mode" error={errors.preferredMode?.message}>
          <select
            className={inputCls}
            defaultValue=""
            aria-invalid={!!errors.preferredMode}
            {...register("preferredMode")}
          >
            <option value="" disabled>
              Choose…
            </option>
            {MODES.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </Field>
      </div>
    </>
  );
}

function Step2({ register }: { register: Reg }) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Date of birth">
          <input type="date" className={inputCls} autoComplete="bday" {...register("dob")} />
        </Field>
        <Field label="Occupation">
          <input className={inputCls} {...register("occupation")} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Height (cm)">
          <input type="number" inputMode="numeric" className={inputCls} {...register("heightCm")} />
        </Field>
        <Field label="Weight (kg)">
          <input type="number" inputMode="numeric" className={inputCls} {...register("weightKg")} />
        </Field>
        <Field label="Age">
          <input type="number" inputMode="numeric" className={inputCls} {...register("age")} />
        </Field>
      </div>
      <Field label="Activities outside the gym">
        <input className={inputCls} {...register("outsideActivities")} />
      </Field>
    </>
  );
}

function Step3({ register }: { register: Reg }) {
  return (
    <>
      <p className="text-sm text-muted">
        These help me coach you safely. Share what you&apos;re comfortable with.
      </p>
      <Field label="Diagnosed health problems">
        <input className={inputCls} {...register("healthConditions")} />
      </Field>
      <Field label="Medications">
        <input className={inputCls} {...register("medications")} />
      </Field>
      <Field label="Injuries">
        <input className={inputCls} {...register("injuries")} />
      </Field>
    </>
  );
}

function Step4({ register }: { register: Reg }) {
  return (
    <>
      <Field label="What's your training goal?">
        <input className={inputCls} {...register("goalText")} />
      </Field>
      <Field label="Why?">
        <input className={inputCls} {...register("goalWhy")} />
      </Field>
      <Field label="Sessions per week you're willing to train">
        <input type="number" inputMode="numeric" className={inputCls} {...register("weeklyWillingness")} />
      </Field>
    </>
  );
}

function Step5({ register, errors }: { register: Reg; errors: Errs }) {
  return (
    <>
      <Field label="PT sessions per week wanted">
        <select className={inputCls} defaultValue="" {...register("ptFrequency")}>
          <option value="" disabled>
            Choose…
          </option>
          {["1", "2", "3", "4", "5+"].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </Field>
      <label className="mt-2 flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          className="mt-1 size-4 accent-[var(--color-brick)]"
          aria-invalid={!!errors.consent}
          {...register("consent")}
        />
        <span>
          I confirm the information above is correct, and I consent to RR
          Strength storing and using my health information to coach me safely. I
          understand it&apos;s kept confidential.
        </span>
      </label>
      {errors.consent && (
        <span className="block text-sm text-danger">
          {errors.consent.message as string}
        </span>
      )}
    </>
  );
}
