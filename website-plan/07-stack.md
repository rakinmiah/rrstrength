# Phase 7 — Tech Stack

> ⚠️ Build-time rule (from `AGENTS.md`): this Next.js (16.2.4) has breaking changes vs. training data. Read `node_modules/next/dist/docs/` before writing code — especially Server Actions, `next/image`, and metadata APIs.

| Layer | Choice | Version | Reason tied to this project |
|---|---|---|---|
| Framework | Next.js (App Router) | 16.2.4 | Already the project; Server Actions power the Resend form without a separate API; SSR/SSG gives top Lighthouse for a single marketing page |
| Styling | Tailwind CSS v4 + CSS variables | ^4 | Already installed; tokens (Phase 6) map cleanly to `@theme` CSS vars; utility speed for a one-page build on a low budget |
| Component primitives | Radix UI primitives (Accordion, Dialog) | latest | Accessible disclosure (Pricing/FAQ) + focus-trapped dialog (mobile nav, lightbox) without reinventing a11y; unstyled, themable |
| Animation | Framer Motion | latest | Tier-2 scroll reveals + the Tier-3 SIGNATURE scroll-linked `clip-path` wipe (`useScroll`); first-class reduced-motion support |
| Forms | React Hook Form + Zod | latest | Multi-step state + per-step validation; Zod schema shared client/server (Server Action re-validates) |
| Backend / submission | Next.js Server Actions | (Next 16) | No standalone backend; Step-1 lead + full intake both submit server-side, keeping the Resend key off the client |
| Payments / auth | NONE — no transactions or accounts on this page (lead-gen only) | — | Avoids PCI scope and account-creation prohibition |
| CMS | NONE — content as typed TS constants in `src/content/` | — | Single page, low budget, weeks timeline; a CMS is overkill. `nextEvent`/`results`/`pricing` editable in one file each |
| Hosting | Vercel | — | Native Next 16 target; edge CDN, image optimisation, zero-config previews for the staged review gates |
| Font serving | Self-hosted woff2 via `next/font/local` | — | Saira Condensed + Inter self-hosted → no third-party request, best LCP, GDPR-clean (no Google Fonts hit) |
| Image pipeline | `next/image` (AVIF/WebP) | (Next 16) | Auto AVIF/WebP, responsive `sizes`, blur LQIP → satisfies Phase 9 image gates and CLS=0 |
| Icon system | Lucide (`lucide-react`) | latest | Single committed system (Phase 0); thin-line matches brand; tree-shakeable |
| Analytics | NONE — per client ("we are not tracking") | — | Explicit client decision; removes the need for a tracking-cookie consent wall |
| Error monitoring | Sentry (free tier) | latest | Catches Server Action / Resend email failures so a silent broken form doesn't lose leads; free tier fits budget |
| RUM / Web Vitals | NONE — per client no-tracking stance | — | No real-user collection by client choice; Web Vitals validated in the lab (Lighthouse/PageSpeed) at Phase 9 instead |
| Testing — unit | Vitest | latest | Fast unit tests for Zod schemas + multi-step form logic (the one piece of real logic) |
| Testing — e2e | Playwright | latest | End-to-end the critical path: Step-1 lead submit + full intake submit + success/error states |
| Testing — visual regression | NONE — low budget, single page | — | Substituted by the Phase 9 manual device/browser screenshot matrix |
| Testing — accessibility | axe-core (via `@axe-core/playwright`) | latest | Automated zero-violation gate in the Playwright run (Phase 9.A) |
| Email / transactional | Resend (+ React Email templates) | latest | Locked with user; Server Action sends Step-1 lead + full intake to the controlled inbox over TLS |
| Consent / cookie management | NONE — no non-essential/tracking cookies set | — | No analytics, no third-party embeds; PECR consent banner not required. Privacy/Cookie *policies* still published (Phase 9.B). Instagram/LinkedIn are plain links, not embeds |
| i18n / localisation | NONE — single locale en-GB | — | Phase 0 single-locale, LTR |
| Feature flags / experimentation | NONE — single static page, no experiments | — | No A/B infrastructure needed at this scope |
| Deployment / CI | Vercel + GitHub (push-to-deploy) + GitHub Actions (lint/test gate) | — | Auto preview per PR for the V0.1/V0.5/V1 review gates; Actions runs Vitest + Playwright + axe before promote |

Every row filled; each `NONE` carries a stated reason.

## Repo folder structure (≥2 levels)
```
rrstrength/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx              # root: fonts, metadata, JSON-LD (Org/LocalBusiness/Person)
│  │  ├─ page.tsx                # the landing page — composes all modules in order
│  │  ├─ globals.css             # Tailwind v4 @theme tokens (Phase 6)
│  │  ├─ opengraph-image.tsx     # social preview (Phase 9.B)
│  │  ├─ sitemap.ts              # sitemap.xml
│  │  ├─ robots.ts               # robots.txt
│  │  ├─ not-found.tsx           # 404
│  │  ├─ error.tsx               # 500 boundary
│  │  ├─ privacy/page.tsx        # Privacy Policy (legal)
│  │  ├─ terms/page.tsx          # Terms (legal)
│  │  └─ cookies/page.tsx        # Cookie Policy (legal)
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ SiteHeader.tsx
│  │  │  ├─ SiteFooter.tsx
│  │  │  └─ SectionShell.tsx
│  │  ├─ ui/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Eyebrow.tsx
│  │  │  ├─ CredentialPill.tsx
│  │  │  ├─ ServiceCard.tsx
│  │  │  ├─ StepItem.tsx
│  │  │  ├─ PricingTierCard.tsx
│  │  │  ├─ ComparisonAccordion.tsx
│  │  │  ├─ FaqItem.tsx
│  │  │  ├─ TestimonialCard.tsx
│  │  │  └─ BeforeAfterReveal.tsx   # SIGNATURE
│  │  ├─ sections/
│  │  │  ├─ Hero.tsx
│  │  │  ├─ TrustStrip.tsx
│  │  │  ├─ About.tsx
│  │  │  ├─ Services.tsx
│  │  │  ├─ HowItWorks.tsx
│  │  │  ├─ Results.tsx
│  │  │  ├─ Pricing.tsx
│  │  │  ├─ Events.tsx
│  │  │  ├─ Faq.tsx
│  │  │  ├─ FinalCta.tsx
│  │  │  └─ ContactForm/
│  │  │     ├─ MultiStepForm.tsx
│  │  │     ├─ Step1Details.tsx … Step5Consent.tsx
│  │  │     └─ fields/ (TextField, SelectField, RadioGroup, CheckboxGroup, ConsentField)
│  ├─ content/
│  │  ├─ credentials.ts  services.ts  steps.ts  results.ts
│  │  ├─ pricing.ts  faqs.ts  nextEvent.ts  navigation.ts
│  ├─ lib/
│  │  ├─ schema.ts        # Zod schemas (per step + full)
│  │  ├─ actions.ts       # Server Actions: submitLead(), submitIntake()
│  │  ├─ email.ts         # Resend client + React Email render
│  │  └─ motion.ts        # shared variants + reduced-motion guard
│  └─ emails/
│     ├─ LeadEmail.tsx    # Step-1 lead notification
│     └─ IntakeEmail.tsx  # full intake notification
├─ public/
│  ├─ brand/ (rr-logo.svg — TO_SOURCE, favicon)
│  ├─ images/ (optimised AVIF/WebP exports of selected library photos)
│  └─ textures/ (topographic-line svg)
├─ tests/
│  ├─ unit/ (schema.test.ts, form-logic.test.ts)
│  └─ e2e/ (form-flow.spec.ts, a11y.spec.ts)
├─ .github/workflows/ci.yml
└─ (existing config: next.config.ts, tsconfig.json, postcss.config.mjs, eslint.config.mjs)
```
