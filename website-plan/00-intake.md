# Phase 0 — Intake Record

## Framework-input resolution
- **Brand plan** (`brand/BRAND-STRATEGY.md`): NOT PRESENT → **stand-in mode**. Lightweight positioning generated inline in Phase 3, tagged `[STAND-IN — pending /plan-brand]`, listed in Phase 11 blocking questions.
- **SEO plan** (`seo/SEO-STRATEGY.md`): NOT PRESENT → **stand-in mode**. Keyword/meta stand-ins generated inline in Phase 5, tagged `[STAND-IN — pending /plan-seo]`.
- **Design system** (`design-system/TOKENS.md`): N/A — homepage planned from scratch; Phase 6 derives tokens.

## Project context
- **Business:** RR Strength — solo powerlifting/strength personal-training coaching by Rashed Rahman. In-person at PureGym Burgess Hill (West Sussex), plus online and hybrid coaching.
- **Vertical/category tag:** UK independent powerlifting & strength personal-training coach — solo operator, competitive-powerlifting credentialed, South-East England (Burgess Hill), serving in-person + remote clients.
- **Market position:** Boutique specialist / credentialed challenger. Not a chain or franchise; differentiates on competitive-powerlifting pedigree (national-level competitor + coach) and a money-back promise.
- **Geographic/cultural context:** United Kingdom. Currency GBP (£). en-GB spelling.
- **Localisation / RTL:** Single locale en-GB, left-to-right. No multi-locale.
- **Legal / regulatory:** UK GDPR + PECR. **CRITICAL:** intake form collects health/PAR-Q data = *special-category personal data* (UK GDPR Art. 9) → requires **explicit consent** (final-step checkbox is legally load-bearing). No FCA/CQC/HIPAA. Standard consumer-service terms (cancellation, late-arrival, confidentiality) carried from existing intake.
- **Primary conversion goal:** Lead capture — completed Step-1 of the multi-step intake ("Claim Free Session").
- **Analytics / KPI:** **NONE — per client** ("we are not tracking; our job is to build the website"). Phase 9 gates are quality + launch-readiness only; no analytics-firing or KPI-number gate.
- **Target audience (two types):**
  1. **Aspiring lifter / general-fitness client** — wants strength, fat loss, or "a healthier lifestyle"; intimidated by where to start; values guidance + accountability + a risk-free trial.
  2. **Competitive / aspiring powerlifter** — wants meet prep, technique coaching, and a coach with real competitive pedigree; values credentials and proof at IPF/SBD-level events.
- **Existing audience data:** None supplied.
- **Existing brand assets:** Logo = **incoming from client** (photographed on event backdrop: two crossed barbells over "RR_STRENGTH" wordmark). Existing site = Webflow multi-page (behind PerimeterX bot-wall; analysed via 19 user screenshots).
- **Media folder path:** `Old RRStrength Website/` (19 site screenshots) and `WhatsApp Unknown 2026-05-24 at 10.28.09/` (43 photos). ~43 usable photographs.
- **Reference sites:** None named by client → framework sources its own (Phase 1B).
- **Named competitors:** None named → framework discovers (Phase 1B).
- **Tech constraints:** Existing Next.js 16.2.4 (App Router, `src/app`), React 19.2.4, Tailwind CSS v4, TypeScript. ⚠️ `AGENTS.md`: this Next.js has breaking changes vs. training data — read `node_modules/next/dist/docs/` before coding. Resend chosen for email.
- **Budget:** **Low (hundreds).** Existing photos only, Lucide icons, restrained motion, no commissioned assets.
- **Verified facts (≥3 proof points):**
  - *Number:* "helped over 40 clients" (carried from old site — confirm accuracy).
  - *Credential:* Level 3 PT; 1st-Class BSc Sport & Exercise Science; podium at Junior Nationals 2018; competes IPF Worlds / SBD Manchester Open level.
  - *Testimonial:* named clients Chell, Lena, Luke, Katy (quotes AWAITING_USER).
- **Content readiness:** Framework drafts copy against stand-in brand voice; testimonials AWAITING_USER.
- **Imagery sourcing policy:** **EXISTING_LIBRARY only.** Gaps logged TO_SOURCE, never invented. Stock photography banned (no exception). Icon system: **Lucide** (single system; runner-up Phosphor).
- **Dark mode stance:** No light/dark toggle. Brand is a fixed dark aesthetic with off-white section breaks. `color-scheme: dark` codified in Phase 6; not a switchable theme.
- **Launch timeline:** Weeks.
- **Page scope:** Single long-form landing page. Nothing else this invocation. (Design system + further pages are later invocations.)

## Rebuild specifics (existing Webflow multi-page → one landing page)
- **Preserve:** crossed-barbell logo + "RR_STRENGTH" wordmark; dark aesthetic; money-back hook; coach credentials; pricing structure; intake questionnaire content; charity-event story.
- **Remove:** multi-page split (About/Services/Pricing/Events/Contact become one scroll); duplicate coach intros; competing CTAs; the giant single-scroll JotForm (replaced by native multi-step).
- **Problematic in old site:** typo "COMPRIMISE"; "© Year" footer placeholder; personal Gmail as business contact; £60/hr vs £47–56/session pricing inconsistency; two competing CTAs; dated event with no year.

## Locked assumptions (correct anytime; non-blocking)
- en-GB single locale, LTR.
- No dark/light toggle (fixed dark brand aesthetic).
- Icon system: Lucide.
- Analytics: NONE (per client).
- Brand & SEO via inline stand-ins.

## Open blockers carried to Phase 11 (do not block research; block Phase 5 copy / launch)
1. Real testimonial quotes + outcomes for Chell, Lena, Luke, Katy → `AWAITING_USER`.
2. Pricing reconciliation (£60/hr vs bundle per-session) → assumption stated; confirm.
3. Claims accuracy: money-back guarantee + "40+ clients" → confirm.
4. Form destination inbox (Gmail vs branded) → default Gmail; confirm.
5. Next event details for Events module → ships graceful empty state until supplied.
6. Logo file → incoming from client.
7. Photo rights/consent (White Lights Media watermark; identifiable clients; transformation photos) → confirm before publish.
8. Resend account + API key + verified sending domain → build-time.
