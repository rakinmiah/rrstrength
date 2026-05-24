# RR Strength — Landing Page Plan

> Compiled plan. Read this page first; Phases 1–9 (in `website-plan/0*.md`) justify and expand every line.

## Phase 10 — Build Blueprint (read first)

**Project:** RR Strength — a single long-form, conversion-focused landing page for Rashed Rahman, a nationally-competed, BSc-qualified powerlifting & strength coach (in-person at PureGym Burgess Hill + online + hybrid).

**Primary conversion goal:** Step-1 lead submission ("Claim free session"), emailed instantly via Resend.

**Stack (one line):** Next.js 16 (App Router) · Tailwind v4 · Radix primitives · Framer Motion · React Hook Form + Zod · Server Actions → Resend · Lucide · self-hosted Saira Condensed + Inter · `next/image` (AVIF/WebP) · Vercel. Analytics: none (client choice).

**Design tokens (compact):** Dark-first. `bg #0D0D0C` · `surface #141312` · light bands `#F4F1EA` · text `#F7F5F0`/`#B5B0A6` · accent brick `#C9452B` (CTAs only) · links `#E8765B`. Display **Saira Condensed** (H1 72/44px), body **Inter** 16px. 4px space base · content max 1240px · 12-col/24px grid · section rhythm 112/88/64. Radius 6/10/16/pill. Motion Tier 2 (Tier 3 on the signature). Full set in `06-tokens.md`.

**Module stack (names only):** Nav → Hero → Trust strip → About → Services → How It Works → **Results ⭐(signature)** → Pricing → Events → FAQ → Final CTA → Contact (multi-step intake) → Footer.

**Build sequencing (three review gates):**
- **V0.1 — skeleton:** Next scaffold, token pipeline in `globals.css`, `SiteHeader`/`SiteFooter`/`SectionShell`, Hero, and one reusable primitive (`Button`). Proves stack + token flow. → commit + review.
- **V0.5 — modules stubbed:** all 11 content modules rendered with final copy + optimised real imagery where available (placeholders flagged for AWAITING_USER testimonials). Validate arc + rhythm + composition on full scroll. → commit + review.
- **V1 — launch-ready:** all Phase 5 specs honoured, all 9.A quality gates passing, all 9.B launch-readiness items resolved. → commit + review + DNS cutover.

**Absolute DO-NOT rules:** no carousels · no stock photography · no AI-generated people or fabricated results · no auto-playing media · no cookie wall (no tracking) · no hidden pricing · no fabricated testimonials (real words only) · no second icon system · no hard-coded year · no dated event left to go stale.

**Definition of done:** every Phase 9.A quality gate passes and every Phase 9.B launch-readiness item resolves. Not before.

---

## Plan index
- `00-intake.md` — intake record + locked assumptions
- `00-brand-discovery.md` — rebuild audit, brand extraction, media inventory
- `01-category-brief.md` — **the spine**: conventions, clichés, trust matrix, conversion pattern, voice/visual briefs, ceiling refs, contrarian thesis, objection map
- `02-synthesis.md` · `03-positioning.md` (stand-in) — positioning + conversion hypotheses
- `04-ia.md` — arc, module stack, composition shapes, rhythm, signature, objection coverage
- `05-modules.md` — full per-module specs (the build detail)
- `06-tokens.md` — committed design tokens
- `07-stack.md` — tech stack + repo structure
- `08-manifest.md` — copy / asset / link / form / icon manifests
- `09-acceptance.md` — quality + launch gates
- `references/ceiling-captures.md` — Linear/Stripe/Nike/Apple/Arc + adjacent captures

---

## Phase 11 — Open Questions & Assumptions

### Blocking questions (answer before / during build; some block launch not code)
1. **Testimonials (blocks launch):** real quotes + outcome stats for Chell, Lena, Luke, Katy. Without ≥1, the signature reveal falls back to a medals strip.
2. **Photo consent (blocks publish):** written consent for every identifiable client + transformation photo; confirm rights to White-Lights-Media-watermarked images (or get clean versions).
3. **Pricing reconciliation (blocks pricing copy):** confirm £60/hour = single session and bundles are discounted packages (£47–56/session).
4. **Claim accuracy (blocks trust strip):** confirm "40+ clients coached" and the money-back guarantee are accurate and approved.
5. **Logo file (blocks nav/footer/favicon/OG):** supply `rr-logo.svg` (incoming from client).
6. **Legal pages (blocks launch):** Privacy, Terms, Cookie policies must be written + published (`/privacy`, `/terms`, `/cookies`).
7. **Consent wording (blocks form launch):** legal sign-off on the Step-5 health-data consent text (UK GDPR Art. 9 special-category).
8. **Resend setup (blocks form):** account + API key + verified sending domain + confirmed destination inbox (Gmail now, branded recommended).
9. **Dated event details (optional):** date/title/sign-up URL — else ships in the no-event community state.
10. **LinkedIn URL (optional):** for the footer, else the LinkedIn icon is removed.
11. **Brand plan stand-in:** Phase 3 positioning is `[STAND-IN — pending /plan-brand]` — confirm or run `/plan-brand` and overwrite.
12. **SEO plan stand-in:** Phase 5 keyword/schema assignments are `[STAND-IN — pending /plan-seo]` — confirm or run `/plan-seo`.

### Non-blocking assumptions (correct any)
- Locale en-GB, LTR, single locale.
- No light/dark toggle — fixed dark aesthetic with off-white surface bands.
- Icon system Lucide; display font Saira Condensed (runner-up Oswald); accent brick `#C9452B`.
- No analytics/RUM (per client); error monitoring kept (Sentry) to protect lead delivery.
- No cookie banner (no non-essential cookies set).
- CMS = none; content lives in typed `src/content/*` constants editable in one place each.
- Brand hexes are screenshot-sampled estimates; finalised against the logo file.
- Old Webflow URLs 301-redirect to the new single page's anchors.
