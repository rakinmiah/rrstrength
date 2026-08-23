# RR Strength

Marketing site for RR Strength — strength & powerlifting coaching in Burgess
Hill and online. Single-page site plus three legal pages, statically rendered.

## Stack

- **Next.js 16** (App Router, Turbopack) — see `AGENTS.md`: this version has
  breaking changes, so read `node_modules/next/dist/docs/` before writing code.
- **React 19**, **TypeScript** (strict)
- **Tailwind CSS 4** — design tokens live in `@theme` in `src/app/globals.css`
- **react-hook-form** + **zod** for the multi-step intake form
- **Resend** for delivering enquiries by email
- **framer-motion**, **lucide-react**

## Getting started

```bash
npm install
```

Copy `.env.example` to `.env.local` and fill it in:

| Variable         | Purpose                                                  |
| ---------------- | -------------------------------------------------------- |
| `RESEND_API_KEY` | Resend API key. Unset in dev → the form works but sends nothing (logged). In production a missing key makes the form fail visibly rather than dropping the enquiry. |
| `RESEND_FROM`    | Verified sending address.                                |
| `RR_INBOX`       | Destination inbox for enquiries and intakes.             |

```bash
npm run dev
```

Then open http://localhost:3000.

## Checks

```bash
npm run lint && npx tsc --noEmit && npm run build
```

## Layout

```
src/
  app/        routes, metadata, robots.ts, sitemap.ts, opengraph-image.tsx
  components/
    layout/   SiteHeader, SiteFooter, SectionShell, LegalShell
    sections/ one file per homepage section, composed in app/page.tsx
    ui/       Button, Icon, Eyebrow, cards, accordions
  content/    all copy and data — edit here, not in components
  lib/        schema (zod), actions (server actions), email (Resend), jsonld, site
```

Copy, pricing, FAQs, credentials and navigation are data in `src/content/` —
change those files rather than editing JSX. `src/content/nextEvent.ts` drives
the Events section: set `nextEvent` to an object when a meet is scheduled, or
leave it `null` for the evergreen state.

`website-plan/` holds the brand, IA and design-token planning documents the
site was built from.
