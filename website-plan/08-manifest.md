# Phase 8 — Content & Asset Manifest

## Copy manifest (status by module)
| Module | Strings | Status |
|---|---|---|
| Nav | links, "Claim free session" | FINAL |
| Hero | eyebrow, headline, sub, 2 CTAs, microcopy | FINAL |
| Trust strip | kicker + 5 credential pills | FINAL (pending claim accuracy: "40+ clients") |
| About | eyebrow, headline, 2 body paras, pull-quote, CTA | FINAL |
| Services | eyebrow, headline, 3 card blurbs + bullets + CTAs | FINAL |
| How It Works | eyebrow, headline, context, 6 steps | FINAL |
| Results | eyebrow, headline, microcopy; **stat + 4 testimonial quotes** | **AWAITING_USER** (quotes/outcomes) |
| Pricing | eyebrow, headline, 3 tiers, bundles line, matrix, microcopy | FINAL (pending pricing reconciliation confirm) |
| Events | eyebrow, no-event headline+body+CTA; **dated title/date/URL** | no-event copy FINAL; dated fields **AWAITING_USER** |
| FAQ | headline + 6 Q/A | FINAL |
| Final CTA | headline, CTA, microcopy | FINAL |
| Contact form | eyebrow, step labels, panel, field labels, consent, success/error | FINAL (consent wording **AWAITING_LEGAL** sign-off) |
| Footer | brand line, contact, nav, legal links, copyright | FINAL (LinkedIn URL AWAITING_USER; switch Gmail→branded) |

## Asset manifest
| Filename (source) | Type | Format out | Served dims (desktop/tablet/mobile) | Native AR | Focal | Alt | Treatment | Sourcing | Module | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| `…09.51.50 (4).jpeg` | photo | AVIF+WebP+JPG | 1920×1080 / 1280×900 / 880×1100 | portrait | 50,38 | "Rashed Rahman locking out a heavy deadlift in competition…" | scrim+−8% sat, LQIP #11110F | Hero | NEEDS_OPTIMISATION |
| `…09.51.49 (5).jpeg` | photo | AVIF+WebP | 560×700 / – / 720×900 | 4:5 | 52,40 | "Rashed Rahman on the platform at a powerlifting competition" | warm grade, LQIP #14110E | About | NEEDS_OPTIMISATION |
| `…09.51.48 (7).jpeg` | photo | AVIF+WebP | staged 16:9 / – / 4:5 | portrait | 50,45 | "Client transformation — front, before coaching with RR Strength" | neutral grade (matched WB) | Results (before) | NEEDS_OPTIMISATION + **CONSENT** |
| `…09.51.49 (2).jpeg` | photo | AVIF+WebP | staged 16:9 / – / 4:5 | landscape-ish | 50,45 | "Client transformation — back, after coaching with RR Strength" | matched WB, LQIP #E9E5DF | Results (after) | NEEDS_OPTIMISATION + **CONSENT** |
| `…09.51.49 (1).jpeg` | photo | AVIF+WebP | 320×400 thumb | portrait | 50,40 | "RR Strength client with their competition medal" | grade | Results strip | NEEDS_OPTIMISATION + CONSENT |
| `…09.51.47 (7).jpeg` | photo | AVIF+WebP | 320×400 thumb | portrait | 50,42 | "Coach and lifter embrace after a successful lift" | grade | Results strip | NEEDS_OPTIMISATION + CONSENT |
| `…09.51.50 (9).jpeg` | photo | AVIF+WebP | 320×400 thumb | portrait | 50,40 | "RR Strength lifter holding a competition trophy" | grade | Results strip | NEEDS_OPTIMISATION + CONSENT |
| `…09.51.48 (4).jpeg` | photo | AVIF+WebP | 320×400 thumb | portrait | 50,42 | "Coach with a medal-winning client at a powerlifting meet" | grade | Results strip | NEEDS_OPTIMISATION + CONSENT |
| `…09.51.49 (8).jpeg` | photo | AVIF+WebP | 2100×900 / – / 880×1100 | portrait | 50,42 | "A lifter competing at the RR Strength Ramadan Rumble charity event" | green scrim, LQIP #0D2A1E | Events | NEEDS_OPTIMISATION |
| `/public/brand/rr-logo.svg` | logo | SVG | scalable | — | — | "RR Strength" | none | Nav/Footer | **TO_SOURCE** (from client) |
| `/public/brand/favicon` | icon | ICO/PNG/SVG | 16–512 | — | — | decorative | none | layout | TO_SOURCE (derive from logo) |
| `/public/textures/topo.svg` | illustration | SVG | scalable | — | — | decorative `aria-hidden` | low-opacity | About/Final CTA bg | TO_CREATE (simple line SVG, in-budget) |
| `opengraph-image` | image | PNG | 1200×630 | 1.91:1 | — | — | brand frame | layout/social | TO_CREATE (generated from hero + logo) |

> All photo slots = EXISTING_LIBRARY. No stock, no AI people. Consent-gated Results assets: if a client declines, that slot → TO_SOURCE (no substitute). Minimum one consented transformation required to enable the SIGNATURE reveal (else fallback per Module 6).

## Link manifest
| Label | Destination | Type | Target | rel | Module | Status |
|---|---|---|---|---|---|---|
| Claim free session / Claim your free session / Train with me / Start your transformation | `#start` | anchor | _self | — | Nav, Hero, About, Results, Pricing×3, Final CTA, form | RESOLVES |
| See real results | `#results` | anchor | _self | — | Hero | RESOLVES |
| See pricing | `#pricing` | anchor | _self | — | Services×3 | RESOLVES |
| About/Services/Results/Pricing/Events/FAQ | `#about`…`#faq` | anchor | _self | — | Nav, Footer | RESOLVES |
| 07565 220897 | `tel:+447565220897` | tel | _self | — | Footer (+ form error) | RESOLVES |
| rashedrahman382@gmail.com | `mailto:…` | mailto | _self | — | Footer, form error | RESOLVES (switch to branded — Phase 11) |
| @rr_strength_coach / Instagram | `https://instagram.com/rr_strength_coach` | external | _blank | noopener noreferrer | Footer, Events no-event CTA | RESOLVES |
| LinkedIn | URL | external | _blank | noopener noreferrer | Footer | **AWAITING_USER** |
| Sign up to this event | `eventSignupUrl` | external | _blank | noopener noreferrer | Events (dated) | **AWAITING_USER** |
| Privacy Policy | `/privacy` | internal | _self | — | Footer, form consent | **AWAITING_PAGE** (in build scope) |
| Terms | `/terms` | internal | _self | — | Footer, form | **AWAITING_PAGE** |
| Cookie Policy | `/cookies` | internal | _self | — | Footer | **AWAITING_PAGE** |

## Form manifest — `MultiStepForm` (single source of truth for fields)
**Anti-spam:** hidden honeypot (`company`) + submission-time trap (reject <2s) + per-IP rate-limit on the Server Action. Cloudflare Turnstile = NONE by default (budget); add only if spam appears.
**GDPR:** Step-5 explicit consent (special-category health data, Art. 9) + Privacy Policy link. Step-1 lead email carries only non-health fields; health fields only in the full intake email.

| Step | Field (name) | Label | Type | Validation | Req | autocomplete / inputmode |
|---|---|---|---|---|---|---|
| 1 | firstName | First name | text | 1–50 chars | ✔ | given-name |
| 1 | lastName | Last name | text | 1–50 | ✔ | family-name |
| 1 | email | Email | email | RFC email | ✔ | email / email |
| 1 | mobile | Mobile | tel | UK mobile pattern | ✔ | tel / tel |
| 1 | primaryGoal | Primary goal | select | one of 4 | ✔ | — |
| 1 | preferredMode | Preferred mode | select | one of 4 | ✔ | — |
| 1 | company | (honeypot) | text | must be empty | — | off (visually hidden) |
| 2 | gender | Gender | radio | Male/Female/Other | ✖ | sex |
| 2 | dob | Date of birth | date | valid date, age ≥16 | ✔ | bday |
| 2 | age | Age | number | 16–100 | ✖ | numeric |
| 2 | heightCm | Height (cm) | number | 100–250 | ✖ | numeric |
| 2 | weightKg | Weight (kg) | number | 30–300 | ✖ | numeric |
| 2 | occupation | Occupation | text | ≤80 | ✖ | organization-title |
| 2 | jobActivity | Job activity level | radio | None/Moderate/High | ✖ | — |
| 2 | workSchedule | Working schedule | text | ≤120 | ✖ | — |
| 2 | travelFrequency | Travel frequency | radio | 4 options | ✖ | — |
| 2 | outsideActivities | Activities outside the gym | text | ≤160 | ✖ | — |
| 3 | healthConditions | Diagnosed health problems | textarea | ≤400 | ✖ | — |
| 3 | medications | Medications | textarea | ≤300 | ✖ | — |
| 3 | injuries | Injuries | textarea | ≤300 | ✖ | — |
| 3 | stressMotivation | Stress/motivation issues? | radio | Yes/No | ✖ | — |
| 3 | chronicConditions | Diabetes/asthma/blood pressure? | radio | Yes/No | ✖ | — |
| 3 | chronicList | If yes, list | text | ≤200 (shown if Yes) | ✖ | — |
| 3 | smoker | Current smoker? | radio | Yes/No | ✖ | — |
| 3 | diet | Current diet | checkbox | low-fat/low-carb/high-protein/veg-vegan/none | ✖ | — |
| 4 | readiness | Readiness for change | radio | 1–10 | ✖ | — |
| 4 | goals | Goals | checkbox | health/endurance/strength/muscle/fat-loss | ✖ | — |
| 4 | goalText | Your training goal | text | ≤160 | ✖ | — |
| 4 | goalWhy | Why? | text | ≤200 | ✖ | — |
| 4 | weeklyWillingness | Sessions/week willing | number | 1–14 | ✖ | numeric |
| 4 | motivation | Motivation level | radio | 1–10 | ✖ | — |
| 4 | currentlyExercising | Exercising ≥2×/week? | radio | Yes/No | ✖ | — |
| 4 | trainedBefore | Trained with a PT before? | radio | Yes/No | ✖ | — |
| 4 | trainedType | If yes, what training | text | ≤160 (shown if Yes) | ✖ | — |
| 5 | preferredTimes | Preferred training times | checkbox | Morning/Mid-Day/Afternoon/Evening | ✖ | — |
| 5 | ptFrequency | PT sessions/week wanted | select | 1–5+ | ✖ | — |
| 5 | consent | Consent + confidentiality + info-correct | checkbox | must be true | ✔ | — |

**Submit destinations:** `submitLead()` Server Action → Resend → controlled inbox (Step-1, fires on Continue or "Send this"); `submitIntake()` Server Action → Resend → controlled inbox (Step-5).
**Success:** "Got it — thank you. I'll be in touch within 24 hours to book your free session." + form replaced by confirmation panel.
**Error (per validation):** inline ("Enter a valid email", "Enter your mobile number", "Please choose a goal", "You must consent to continue"). **Error (send fail):** "Something went wrong sending that. Try again, or email rashedrahman382@gmail.com." + retry, lead preserved.

## Icon audit (all Lucide — single system)
`lucide/award`, `lucide/graduation-cap`, `lucide/medal`, `lucide/trophy`, `lucide/users` (trust strip) · `lucide/dumbbell`, `lucide/git-merge`, `lucide/monitor` (services) · `lucide/check`, `lucide/x` (pricing matrix) · `lucide/chevron-down`, `lucide/chevron-right` (accordions/nav) · `lucide/menu`, `lucide/arrow-right` (nav/CTAs) · `lucide/instagram`, `lucide/linkedin` (footer). **No second icon system; no custom icons.** ✓

## Carried to Phase 11 (unresolved)
AWAITING_USER: testimonial quotes/stat, dated event fields, LinkedIn URL, event signup URL, branded inbox decision, pricing-reconciliation confirm, claim accuracy.
AWAITING_LEGAL: consent wording sign-off.
AWAITING_PAGE: /privacy, /terms, /cookies (in build scope — must ship before launch).
TO_SOURCE/TO_CREATE: logo, favicon, OG image, topo texture; consent on all client/transformation photos.
