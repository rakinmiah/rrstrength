# Phase 9 — Acceptance Gates & Launch Readiness

## A. Quality gates (the page must meet the bar)
- **Lighthouse:** Performance ≥ 95 · Accessibility = 100 · Best Practices ≥ 95 · SEO ≥ 95 (mobile profile).
- **Core Web Vitals (lab):** LCP < 2.0s · INP < 200ms · CLS < 0.05. (Field RUM is NONE per client; validated in lab via Lighthouse/PageSpeed.)
- **Accessibility:** WCAG 2.2 AA; axe-core zero violations (Playwright); keyboard-only completes Step-1 lead submit; VoiceOver + NVDA complete Step-1 lead submit; `prefers-reduced-motion` disables the SIGNATURE wipe and all scroll motion.
- **Device matrix (screenshot evidence each):** iPhone SE 375 · iPhone 15 Pro 393 · iPad 768 · 13" laptop 1280 · 27" desktop 2560.
- **Browser matrix (screenshot evidence each):** latest Chrome, Safari, Firefox, Edge.
- **Copy test:** each headline stands alone and still makes its point.
- **Blur test:** squint — hierarchy still obvious per module.
- **First-five-seconds test:** a stranger answers *what is this / who's it for / what do they want me to do* (strength coach / lifters & beginners / claim a free session).
- **Competitor test:** screenshot beside Jason Coultman, Ellis, Character, Team Rohr — RR must look unmistakably more crafted and not templated (dark frame, full-bleed action, transparent pricing, signature reveal).
- **Objection-handling test:** walk all six Category-Brief objections through the page; each resolved by its assigned module (Phase 4 table).
- **Signature test:** the Results scroll-linked before/after reveal works on desktop + mobile and degrades to a static side-by-side under reduced-motion.

## B. Launch readiness (all required before DNS cutover)
- **Page set live:** Privacy Policy, Terms, Cookie Policy, 404, 500. (No payment/booking pages — lead-gen only. No regulator pages — not a regulated sector.)
- **Social preview render test:** URL pasted into Slack, WhatsApp, X, LinkedIn, iMessage renders the intended OG image/title/description.
- **Analytics:** N/A — none installed by client choice (recorded, not a gate).
- **Error monitoring live:** test error thrown in staging reaches Sentry.
- **Forms tested end-to-end:** Step-1 lead email arrives at the controlled inbox; full intake email arrives; success + per-field error + send-fail states all verified; honeypot + time-trap reject bot submissions; consent required to submit Step 5.
- **Health-data handling verified:** Step-1 lead email contains no health fields; full intake email delivered over TLS to the single controlled inbox only; consent checkbox blocks submission when unticked.
- **Link manifest resolves:** zero AWAITING_PAGE (legal pages built) and zero AWAITING_USER links left as dead (`#` placeholders) — LinkedIn/event URLs either real or their controls removed.
- **Asset manifest resolves:** zero TO_SOURCE/TO_CREATE — logo, favicon, OG image, topo texture present; every published client/transformation photo has recorded consent.
- **Copy manifest resolves:** zero AWAITING_USER/AWAITING_LEGAL — testimonials supplied, pricing confirmed, consent wording signed off.
- **Content freshness:** footer year auto-derives from build date; no hard-coded year; Events module shows the no-event state cleanly when `nextEvent` is null (never a stale date).
- **Dev/staging/prod parity:** the Vercel build approved at the V1 review is the build promoted to production.
- **Consent banner:** N/A — no non-essential/tracking cookies set (verified: no analytics, no third-party embeds). Policies still published.
- **robots.txt + sitemap.xml deployed;** sitemap submitted to Google Search Console.
- **Redirects:** old Webflow URLs (`/about`, `/services`, `/pricing`, `/events`, `/contact`) → 301 to the corresponding `#anchor` on the new single page (or root).
- **DNS, SSL, CDN, caching headers verified** on the production domain.
