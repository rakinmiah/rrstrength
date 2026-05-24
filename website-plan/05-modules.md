# Phase 5 — Per-Module Specification

> Voice: stand-in Mentor-who's-been-in-your-shoes (Phase 3). SEO entries tagged `[STAND-IN — pending /plan-seo]`. Testimonial words tagged `AWAITING_USER` (never fabricated).

## Component budget (declared)
Target 14 reusable components: **1.** `Button` (primary/secondary/ghost) · **2.** `SectionShell` (rhythm + dark/light variant) · **3.** `Eyebrow` · **4.** `SiteHeader` (nav) · **5.** `SiteFooter` · **6.** `ServiceCard` · **7.** `StepItem` · **8.** `BeforeAfterReveal` (signature) · **9.** `PricingTierCard` · **10.** `ComparisonAccordion` · **11.** `FaqItem` · **12.** `MultiStepForm` + `Field` primitives · **13.** `CredentialPill` · **14.** `TestimonialCard`.

Motion baseline: **Tier 2 (Considered)** everywhere; **Tier 3 (Crafted)** for the SIGNATURE module only (per Phase 6).

---

## Module 0A — Navigation (`SiteHeader`)

**Category citation:** Honours minimal-chrome nav convention (Linear top-right nav); diverges by keeping a *persistent* primary CTA visible — the category mostly buries the CTA.

**Purpose:** Orient and give a constant one-tap route to the free session.

**Audience intent served:** Both — fast access to proof/pricing (competitor) and to the free-session ask (beginner).

**Layout composition:**
- **Shape tag:** `HORIZONTAL-STRIP`
- **Composition rationale (≥50 words):** Considered a centred logo with split nav (luxury convention) but rejected it — a solo-coach brand needs the CTA anchored, not symmetry. Chose logo-left, anchor links centre-right, solid CTA far-right: the eye lands on the mark, scans sections, and resolves on the action. On scroll the bar compresses and gains a translucent dark blur so content reads beneath it without losing the CTA.
- **Ceiling-reference borrow:** Linear's minimal top-right nav with a single emphasised action; Stripe's translucent-on-scroll header.
- **Proportion + whitespace note:** 72px tall at rest, 56px compressed; logo capped at 28px height; 24px gap between nav links.
- **Sleekness check:** One bar, one divider-less blur, one solid button — two visual containers max.

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ [RR✕STRENGTH]      About  Services  Results  Pricing  Events  FAQ   [Claim free session] │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ [RR✕STRENGTH]      [Claim] [≡]      │
└───────────────────────────────────┘
  (≡ opens full-screen drawer:)
  ┌─────────────────────────────────┐
  │ About                           │
  │ Services                        │
  │ Results                         │
  │ Pricing                         │
  │ Events                          │
  │ FAQ                             │
  │ ───────────────                 │
  │ [ Claim your free session ]     │
  │ @rr_strength_coach  ·  07565…   │
  └─────────────────────────────────┘
```

**Final copy:**
- Eyebrow: NONE (nav)
- Logo wordmark: `RR STRENGTH` (crossed-barbell mark + wordmark)
- Nav links: `About` · `Services` · `Results` · `Pricing` · `Events` · `FAQ`
- Primary CTA label: `Claim free session`
- Primary CTA destination: `#start` — scroll-to (smooth) to Contact form Step 1
- Secondary CTA: NONE
- Microcopy: NONE
- Handles objection: NONE (utility)

**Assets:** logo — see Footer block (shared). Mark: `/public/brand/rr-logo.svg` STATUS: TO_SOURCE (incoming from client). Interim: wordmark in brand display font.

**Interactive states:**
- Default: links `--color-text-muted`; CTA solid brick.
- Hover: link → `--color-text-primary` + 2px underline grows from left (`--motion-fast`); CTA lightens one step.
- Focus-visible: 2px `--color-focus-ring` offset ring on links and CTA.
- Active: CTA scales 0.98.
- Disabled: n/a.
- Loading: n/a.
- Empty: n/a.
- Error: n/a.
- Touch targets ≥ 44×44 confirmed (links padded to 44px tall; hamburger 48×48).

**Motion:** Header background fade-in blur on scroll past 64px — 200ms `--ease-standard`. Drawer slide-down + fade — 240ms `--ease-out`. Respects reduced-motion: blur/slide replaced by instant state, no transform.

**Accessibility:** `<header role="banner">`; nav in `<nav aria-label="Primary">`. Skip-to-content link (`Skip to content` → `#main`) is the first focusable element. Drawer is a focus-trapped dialog with `aria-expanded` on the toggle; Esc closes. Current section link gets `aria-current="true"` via scroll-spy. Contrast: muted text on dark blur ≥ 4.5:1 (Phase 6 table).

**Dynamic content:** Scroll-spy sets active link from section in view (IntersectionObserver). No external data.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Primary nav contributes internal anchors; emits no schema here. Site-level `Organization` + `LocalBusiness` JSON-LD lives in layout, not nav.

**Design-system role:** REUSABLE — `SiteHeader`. Props: `links[]`, `ctaHref`, `transparentAtTop`. Variant: compressed-on-scroll.

---

## Module 1 — Hero

**Category citation:** Breaks the category's white portrait-in-a-box cliché (Jason/Ellis/Character all white, static) with a dark Nike-grade full-bleed action frame; honours the benefit-headline + free-trial convention; expresses the contrarian thesis (money-back, up front).

**Purpose:** In five seconds, promise a stronger body at zero risk and route to the free session.

**Audience intent served:** Beginner sees "no risk, it's for me"; competitor sees real lifting, real stage.

**Layout composition:**
- **Shape tag:** `FULL-BLEED`
- **Composition rationale (≥50 words):** Considered a `SPLIT-50-50` (copy left, photo right) — the category default and the old RR layout — but rejected it as forgettable and because the supplied photography is portrait and loses power when boxed. Chose full-bleed with a bottom-left offset copy block over a darkened action frame: the lift fills the screen, copy sits in the quiet lower-left corner, CTA beneath. This is the canonical athletic hero and it makes the photography the argument.
- **Ceiling-reference borrow:** Nike — full-bleed peak-exertion photo, lower-left offset headline, single accent.
- **Proportion + whitespace note:** Hero = 100svh on desktop, 88svh mobile; copy block max-width 620px pinned to lower-left with 64px inset; gradient scrim from bottom (rgba 0,0,0,.75) to transparent at 55% height for text legibility.
- **Sleekness check:** One image, one scrim, one copy block, one button pair — no borders, no card. Three containers max.

**Signature-moment tag:** `NONE` (signature is Module 6).

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│  [full-bleed: Ramadan-Rumble deadlift, darkened lower third]           │
│                                                                        │
│                                                                        │
│                                                                        │
│  STRENGTH COACHING · BURGESS HILL & ONLINE                             │
│  I'LL GET YOU STRONGER —                                               │
│  OR YOUR MONEY BACK.                                                   │
│  One-to-one and online coaching from a nationally-competed,            │
│  BSc-qualified strength coach. Your first session is free.             │
│  [ Claim your free session ]   [ See real results → ]                  │
│  No card needed · First session free                                   │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ [full-bleed lift photo, scrim ↓]   │
│                                    │
│                                    │
│ STRENGTH COACHING ·                │
│ BURGESS HILL & ONLINE              │
│ I'LL GET YOU                       │
│ STRONGER — OR YOUR                 │
│ MONEY BACK.                        │
│ 1-to-1 & online coaching from a    │
│ nationally-competed, BSc coach.    │
│ Your first session is free.        │
│ [ Claim your free session ]        │
│ [ See real results → ]             │
│ No card needed · First free        │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: `STRENGTH COACHING · BURGESS HILL & ONLINE`
- Headline: `I'll get you stronger — or your money back.`
- Subheadline: `One-to-one and online coaching from a nationally-competed, BSc-qualified strength coach. Your first session is free — keep it or walk away.`
- Body: NONE (hero stays tight)
- Primary CTA label: `Claim your free session`
- Primary CTA destination: `#start` — scroll-to Contact Step 1
- Secondary CTA label: `See real results`
- Secondary CTA destination: `#results` — scroll-to Results
- Microcopy: `No card needed · First session free`
- Handles objection: #2 cost (money-back), #5 commitment (free, no card)

**Assets:**
- Role: hero · Type: photograph · Filename: `WhatsApp Image 2026-05-24 at 09.51.50 (4).jpeg` (Ramadan Rumble deadlift lockout, full-body, stage) — chosen for peak-exertion energy and brand-event context.
  - Alt text: `Rashed Rahman locking out a heavy deadlift in competition at an RR Strength powerlifting event`
  - Focal point: `50%, 38%` (chest/bar line stays in frame)
  - Responsive art direction: desktop = file above (landscape-cropped to 16:9 via focal point); mobile = same source cropped 4:5 to keep the lifter centred → `hero-mobile.avif` STATUS: NEEDS_OPTIMISATION
  - Treatment: bottom-up dark gradient scrim + slight desaturate (-8%) + LQIP dominant-colour `#11110F`
  - Sourcing: EXISTING_LIBRARY
  - STATUS: NEEDS_OPTIMISATION (crop + AVIF/WebP encode)
  - Output format: AVIF primary, WebP fallback, JPEG last-resort. Desktop 1920×1080; tablet 1280×900; mobile 880×1100.

**Interactive states:** (CTAs)
- Default: primary = solid brick, white label; secondary = ghost, white text + arrow.
- Hover: primary lightens one step + 1px lift (translateY -1px); secondary underline grows + arrow nudges 4px right.
- Focus-visible: 2px focus ring offset 2px.
- Active: scale 0.98.
- Disabled: n/a (always active).
- Loading: n/a.
- Empty: n/a.
- Error: n/a.
- Touch ≥ 44×44 confirmed.

**Motion:** On load: eyebrow→headline→sub→CTA stagger, each opacity 0→1 + translateY 12→0, 320ms `--ease-out`, 60ms stagger. Background image subtle scale 1.04→1.00 over 1200ms `--ease-standard`. Reduced-motion: no transform/scale; instant opacity 1.

**Accessibility:** Headline is the page's single `<h1>`. Hero is inside `<main id="main">`. Scrim ensures text contrast ≥ 4.5:1 over image (verified against darkest crop region). CTAs are real `<a>`/`<button>` with discernible names. Decorative image has meaningful alt (it is content, not decorative).

**Dynamic content:** Hero image swappable via a single `heroImage` content constant (seasonal variant) — no live data.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Primary head term: **"strength coach Burgess Hill"** in H1 region + eyebrow; secondary: "powerlifting coach", "online strength coaching UK", "personal trainer Burgess Hill"; question variant: "is personal training worth it". Emits no module schema (site `LocalBusiness` in layout). Voice wins over keyword stuffing.

**Design-system role:** ONE-OFF (hero is singular) — composed from `SectionShell` + `Eyebrow` + `Button`.

---

## Module 2 — Trust strip

**Category citation:** Honours credentials-front-loaded convention (Team Rohr/Character front-load titles); expresses contrarian transparency by stating real, checkable facts immediately after the hero.

**Purpose:** Convert the hero's promise into instant proof of legitimacy.

**Audience intent served:** Competitor's "is he the real deal?" answered in one glance.

**Layout composition:**
- **Shape tag:** `HORIZONTAL-STRIP`
- **Composition rationale (≥50 words):** Considered a full GRID-3 "why me" block, but that delays proof and adds density right after a breathable hero. Chose a slim full-width strip of credential pills on a contrasting off-white band — it reads in one horizontal sweep, gives the page its first dense beat for rhythm, and physically separates the dark hero from the dark About via a light bar. A one-line framing label sits left.
- **Ceiling-reference borrow:** Stripe's compact stat callout band between breathable sections.
- **Proportion + whitespace note:** Single row, 96px tall desktop; pills auto-wrap to 2 rows on mobile; 12px pill gap; off-white `--color-surface` band.
- **Sleekness check:** Pills are borderless chips with a hairline divider dot — no boxes; one band, one row.

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ THE PROOF, BEFORE THE PITCH   Level 3 PT · 1st-Class BSc Sport &       │
│                               Exercise Science · Junior Nationals      │
│                               podium '18 · Competed IPF Worlds & SBD   │
│                               Manchester Open · 40+ clients coached     │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ THE PROOF, BEFORE THE PITCH        │
│ ▢ Level 3 PT                       │
│ ▢ 1st-Class BSc Sport & Exercise   │
│ ▢ Junior Nationals podium '18      │
│ ▢ Competed IPF Worlds / SBD Man.   │
│ ▢ 40+ clients coached              │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow / kicker: `THE PROOF, BEFORE THE PITCH`
- Headline: NONE (strip, not a heading section — the kicker frames it)
- Credential pills: `Level 3 Personal Trainer` · `1st-Class BSc Sport & Exercise Science` · `Junior Nationals podium, 2018` · `Competed IPF Worlds & SBD Manchester Open` · `40+ clients coached`
- Primary CTA: NONE
- Microcopy: NONE
- Handles objection: #1 trust/competence

**Assets:** Lucide icons per pill (decorative): `phosphor`→ use Lucide `award`, `graduation-cap`, `medal`, `trophy`, `users`. Alt: `alt=""` decorative.
- Sourcing: ICON_SYSTEM (Lucide). STATUS: EXISTS.

**Interactive states:** Pills are non-interactive (static). Default only. (If a pill links to proof later, that's out of scope.) Touch n/a.

**Motion:** Pills fade+rise in on scroll-into-view, 240ms `--ease-out`, 40ms stagger. Reduced-motion: instant.

**Accessibility:** Strip is a `<section aria-label="Coach credentials">`. Kicker is not a heading (visually styled span) to avoid breaking the outline. Pills are a `<ul>`. Icons decorative. Contrast: dark text on off-white ≥ 7:1.

**Dynamic content:** Credentials from a static `credentials[]` constant.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Secondary terms: "qualified strength coach", "BSc sport science coach". Contributes to layout-level `LocalBusiness`/`Person` `knowsAbout`/`hasCredential`. No standalone schema.

**Design-system role:** REUSABLE — `CredentialPill` (props: `icon`, `label`) rendered in a strip.

---

## Module 3 — About / Meet Rashed

**Category citation:** Honours coach-as-brand bio convention; breaks the category's vague filler ("grow inside and out of the gym") with Rashed's specific first-person story; directly answers perceived-fit.

**Purpose:** Make a beginner feel "he started where I am" and a competitor respect the pedigree — without repeating the credential pills.

**Audience intent served:** Emotional connection + competence, in his own voice.

**Layout composition:**
- **Shape tag:** `SPLIT-OFFSET` (42/58, portrait image narrow-left, story wide-right)
- **Composition rationale (≥50 words):** Considered `SPLIT-50-50` but the supplied coach portraits are tall — a 50% column wastes width and shrinks the type. Chose a 42/58 offset: the portrait fills the narrow left column edge-to-edge (full-bleed within its column), the story occupies the wider right column with a pull-quote breaking the left margin into the image gutter for a layered touch. Flipping the standard ratio signals intent and gives the prose room.
- **Ceiling-reference borrow:** Stripe's asymmetric enterprise-story offset; Linear's weight-based hierarchy for the pull-quote.
- **Proportion + whitespace note:** Image column 42vw, capped 560px tall, 4:5 portrait; text column 58vw max 620px; pull-quote overlaps image by 32px (LAYERED accent within the split).
- **Sleekness check:** One image, one text column, one overlapping quote — no card, no border; whitespace carries the separation.

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ ┌───────────────┐  MEET YOUR COACH                                     │
│ │               │  I STARTED EXACTLY WHERE YOU ARE.                    │
│ │  coach        │                                                      │
│ │  portrait     │  I got into lifting to look good. What I didn't      │
│ │  (4:5)        │  expect was what it did to my head — the discipline, │
│ │          ┌────┴──────────────┐ the confidence, the way it spilled    │
│ │          │ "The muscle was   │ into everything else.                 │
│ │          │  the byproduct."  │                                       │
│ └──────────┴───────────────────┘ I've trained since I was 14, competed │
│                    at national level, and earned a First-Class degree  │
│                    so I could coach it properly. Now I help people —    │
│                    first-timers and competitors — get the same thing.   │
│                    [ Train with me ]                                    │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ MEET YOUR COACH                    │
│ I STARTED EXACTLY                  │
│ WHERE YOU ARE.                     │
│ ┌───────────────────────────────┐ │
│ │   coach portrait (4:5)        │ │
│ └───────────────────────────────┘ │
│ "The muscle was the byproduct."   │
│ I got into lifting to look good.   │
│ What I didn't expect was what it   │
│ did to my head — the discipline,   │
│ the confidence, the way it spilled │
│ into everything else.              │
│ I've trained since I was 14,       │
│ competed at national level, and    │
│ earned a First-Class degree so I   │
│ could coach it properly. Now I     │
│ help people — first-timers and     │
│ competitors — get the same thing.  │
│ [ Train with me ]                  │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: `MEET YOUR COACH`
- Headline: `I started exactly where you are.`
- Subheadline: NONE
- Body: `I got into lifting to look good. What I didn't expect was what it did to my head — the discipline, the confidence, the way it spilled into everything else.` / `I've trained since I was 14, competed at national level, and earned a First-Class degree so I could coach it properly. Now I help people — first-timers and competitors alike — get the same thing I did.`
- Pull-quote: `The muscle was the byproduct.`
- Primary CTA label: `Train with me`
- Primary CTA destination: `#start` — scroll-to Contact Step 1
- Secondary CTA: NONE
- Microcopy: NONE
- Handles objection: #4 perceived fit

**Assets:**
- Role: portrait · Type: photograph · Filename: `WhatsApp Image 2026-05-24 at 09.51.49 (5).jpeg` (coach arms-crossed, headset, stage light) — authoritative, on-brand.
  - Alt text: `Rashed Rahman, RR Strength coach, on the platform at a powerlifting competition`
  - Focal point: `52%, 40%`
  - Responsive art direction: SAME_CROP (4:5 both breakpoints)
  - Treatment: subtle warm grade to match set; LQIP dominant `#14110E`
  - Sourcing: EXISTING_LIBRARY · STATUS: NEEDS_OPTIMISATION · AVIF/WebP; desktop 560×700, mobile 720×900.

**Interactive states:** (CTA) default/hover/focus/active as Hero. Pull-quote static. Touch ≥44.

**Motion:** Text column words fade+rise 280ms `--ease-out` on scroll-in; image clip-reveals from left 420ms `--ease-out`. Reduced-motion: instant opacity.

**Accessibility:** `<h2>` = "I started exactly where you are." (slots under the single H1). `<section aria-labelledby>`. Pull-quote in `<blockquote>`. Image alt meaningful. Contrast white-on-dark ≥ 7:1.

**Dynamic content:** Static.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Head term "Burgess Hill strength coach"; secondary "qualified powerlifting coach", "BSc sport science". Contributes to layout `Person` schema (name, jobTitle, alumniOf, award). No standalone block.

**Design-system role:** ONE-OFF — composed from `SectionShell` + `Eyebrow` + `Button`.

---

## Module 4 — Services (three modes)

**Category citation:** Honours the universal three-mode split (In-Person/Online/Hybrid); breaks the carousel anti-pattern (old RR + others) by showing all three as a static comparable grid.

**Purpose:** Let each visitor self-identify a training mode and goal in one scan.

**Audience intent served:** #3 complexity ("what do I get?") and #4 fit (beginner vs competitor both addressed in copy).

**Layout composition:**
- **Shape tag:** `GRID-3`
- **Composition rationale (≥50 words):** Considered a `SPLIT-OFFSET` feature list (one mode highlighted), but that biases the visitor and hides parity. Chose an equal three-card grid so the modes compare at a glance; the middle card (Hybrid) is elevated as "most popular" with a brick top-border and slight scale, borrowing the SaaS recommended-tier pattern to guide without hiding options. Cards are icon-led, copy-light, price-free (Pricing owns numbers).
- **Ceiling-reference borrow:** Stripe's 3-col product grid with one emphasised path; Linear's restraint (no card clutter).
- **Proportion + whitespace note:** 3 equal columns desktop (gap 24px), stack on mobile; cards 1:1.2 portrait-ish; middle card scale 1.03 + 2px brick top rule.
- **Sleekness check:** Card = thin hairline border + icon + heading + 3 bullets + link. One container each, no shadows except the emphasised card's soft `--shadow-md`.

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ HOW WE'LL WORK TOGETHER                                                 │
│ THREE WAYS TO TRAIN. ONE STANDARD.                                      │
│ ┌────────────┐  ┌────────────┐(MOST POPULAR) ┌────────────┐            │
│ │ ◷ in-person│  │ ◷ hybrid    │               │ ◷ online   │            │
│ │ IN-PERSON  │  │ HYBRID      │               │ ONLINE     │            │
│ │ At PureGym │  │ Best of both│               │ Train      │            │
│ │ Burgess H. │  │ — sessions +│               │ anywhere,  │            │
│ │ Hands-on   │  │ a programme │               │ programme +│            │
│ │ coaching & │  │ you run     │               │ video form │            │
│ │ form work. │  │ between.    │               │ checks.    │            │
│ │ • Strength │  │ • Strength  │               │ • Strength │            │
│ │ • Fat loss │  │ • Fat loss  │               │ • Fat loss │            │
│ │ • Tailored │  │ • Tailored  │               │ • Tailored │            │
│ │ See pricing→  │ See pricing→ │               │ See pricing→            │
│ └────────────┘  └────────────┘               └────────────┘            │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ HOW WE'LL WORK TOGETHER            │
│ THREE WAYS TO TRAIN.               │
│ ONE STANDARD.                      │
│ ┌───────────────────────────────┐ │
│ │ ◷ HYBRID        MOST POPULAR   │ │
│ │ Best of both — sessions + a    │ │
│ │ programme you run between.     │ │
│ │ • Strength • Fat loss • Tailored│ │
│ │ See pricing →                  │ │
│ └───────────────────────────────┘ │
│ ┌───────────────────────────────┐ │
│ │ ◷ IN-PERSON                    │ │
│ │ At PureGym Burgess Hill.       │ │
│ │ Hands-on coaching & form work. │ │
│ │ • Strength • Fat loss • Tailored│ │
│ │ See pricing →                  │ │
│ └───────────────────────────────┘ │
│ ┌───────────────────────────────┐ │
│ │ ◷ ONLINE                       │ │
│ │ Train anywhere — programme +   │ │
│ │ video form checks.             │ │
│ │ • Strength • Fat loss • Tailored│ │
│ │ See pricing →                  │ │
│ └───────────────────────────────┘ │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: `HOW WE'LL WORK TOGETHER`
- Headline: `Three ways to train. One standard.`
- Subheadline: NONE
- Cards:
  - **In-Person** — `At PureGym Burgess Hill. Hands-on coaching and real-time form work, session by session.` Bullets: `Strength & powerlifting` · `Fat loss & conditioning` · `Tailored to you`
  - **Hybrid** (`MOST POPULAR`) — `The best of both — in-person sessions plus a programme you run between them.` Bullets: `Strength & powerlifting` · `Fat loss & conditioning` · `Tailored to you`
  - **Online** — `Train anywhere. A bespoke programme with video form checks and 24/7 contact.` Bullets: `Strength & powerlifting` · `Fat loss & conditioning` · `Tailored to you`
- Card CTA label (each): `See pricing`
- Card CTA destination: `#pricing` — scroll-to Pricing
- Microcopy: NONE
- Handles objection: #3 complexity, #4 fit

**Assets:** Lucide icons (decorative `alt=""`): `dumbbell` (in-person), `git-merge` (hybrid), `monitor` (online). Sourcing: ICON_SYSTEM. STATUS: EXISTS. No photos (keeps the band clean; photos live in Results).

**Interactive states:** (cards + links)
- Default: hairline border `--color-border-subtle`.
- Hover: border → brick, card lifts translateY -3px + `--shadow-md`, "See pricing" arrow nudges 4px.
- Focus-visible: ring on the card link.
- Active: scale 0.99.
- Disabled: n/a.
- Loading: n/a.
- Empty: n/a.
- Error: n/a.
- Touch ≥44 (whole card tappable).

**Motion:** Cards stagger fade+rise on scroll-in, 240ms `--ease-out`, 60ms stagger. Reduced-motion: instant.

**Accessibility:** `<h2>` headline; each card heading `<h3>`. Cards are `<a>`-wrapped articles with discernible names ("In-Person coaching — see pricing"). Icon decorative. Contrast verified.

**Dynamic content:** `services[]` constant.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Head terms "online strength coaching", "in-person personal training Burgess Hill", "hybrid coaching". Each card emits an `OfferCatalog`/`Service` node referenced by layout `LocalBusiness`. Full JSON-LD in `seo/07-schema.md`.

**Design-system role:** REUSABLE — `ServiceCard` (props: `icon`, `title`, `blurb`, `bullets[]`, `featured`, `href`).

---

## Module 5 — How It Works (6 steps)

**Category citation:** Table-stakes process module (Character's "how it works" 3-step); RR extends to the genuine 6-step method and uses a sticky-heading scroll layout instead of a flat row.

**Purpose:** Remove "what happens after I sign up?" uncertainty.

**Audience intent served:** #3 complexity — sets expectations end-to-end.

**Layout composition:**
- **Shape tag:** `SPLIT-OFFSET` (sticky 38% heading-left, 62% stepped list-right)
- **Composition rationale (≥50 words):** Considered `GRID-N` (six tiles 2×3) but a grid flattens sequence — order matters here. Chose a Linear-style split: a sticky left column holds the section heading and a single line of context while the right column scrolls through six numbered steps, each with a thin connecting rule. The stickiness turns a dull list into a guided descent and keeps the "why" pinned while the "how" moves.
- **Ceiling-reference borrow:** Linear's sticky-heading feature sections; Arc's restrained scroll progression.
- **Proportion + whitespace note:** Left 38% sticky (top offset 96px); right 62%, each `StepItem` 96px tall with a 1px left timeline rule and a numbered node.
- **Sleekness check:** No cards — numbered nodes + hairline timeline + text. Two containers (sticky head, list).

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ HOW IT WORKS              │ ① Identify your goals                      │
│ A COACH YOU CAN           │    We get specific about what you want.    │
│ ACTUALLY TRUST.           │ ──────────────────────────────────────────│
│                           │ ② Choose your training method              │
│ (sticky) My process runs  │    In-person, online, or hybrid.           │
│ from your first message   │ ──────────────────────────────────────────│
│ to your best lifts —      │ ③ Build your programme                     │
│ nutrition, schedule and   │    Tailored to your body, time and kit.    │
│ ability all factored in.  │ ──────────────────────────────────────────│
│                           │ ④ Start training                           │
│                           │    With coaching every step.               │
│                           │ ──────────────────────────────────────────│
│                           │ ⑤ 1-to-1 guidance                          │
│                           │    Form checks and 24/7 contact.           │
│                           │ ──────────────────────────────────────────│
│                           │ ⑥ Progress checks                          │
│                           │    We measure, adjust and keep going.      │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ HOW IT WORKS                       │
│ A COACH YOU CAN ACTUALLY TRUST.    │
│ My process runs from your first    │
│ message to your best lifts.        │
│ ① Identify your goals              │
│    We get specific about what you  │
│    want.                           │
│ ② Choose your training method      │
│    In-person, online, or hybrid.   │
│ ③ Build your programme             │
│    Tailored to your body & time.   │
│ ④ Start training                   │
│    With coaching every step.       │
│ ⑤ 1-to-1 guidance                  │
│    Form checks and 24/7 contact.   │
│ ⑥ Progress checks                  │
│    We measure, adjust, keep going. │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: `HOW IT WORKS`
- Headline: `A coach you can actually trust.`
- Context line (sticky): `My process runs from your first message to your best lifts — nutrition, schedule and ability all factored in.`
- Steps:
  1. `Identify your goals` — `We get specific about what you actually want.`
  2. `Choose your training method` — `In-person, online, or hybrid — whatever fits your life.`
  3. `Build your programme` — `Tailored to your body, your time, and your kit.`
  4. `Start training` — `With coaching beside you every step.`
  5. `1-to-1 guidance` — `Form checks and 24/7 contact when you need me.`
  6. `Progress checks` — `We measure, adjust, and keep moving forward.`
- Primary CTA: NONE (momentum carries to Results)
- Microcopy: NONE
- Handles objection: #3 complexity

**Assets:** Numerals rendered typographically (no images). Optional Lucide check node icon — decorative.

**Interactive states:** Steps static; active step node brightens as it enters viewport (scroll-spy). Default/in-view only. Touch n/a.

**Motion:** Each `StepItem` fades+rises as it scrolls in, 220ms `--ease-out`; active node fill animates 160ms. Reduced-motion: instant, no node animation.

**Accessibility:** `<h2>` headline; steps as ordered list `<ol>` with `<li>`; step titles `<h3>`. Sticky column uses `position: sticky` (no focus trap). Contrast verified.

**Dynamic content:** `steps[]` constant.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Head term "how personal training works"; secondary "strength coaching process". Emits `HowTo` schema (6 steps). Full JSON-LD in `seo/07-schema.md`.

**Design-system role:** REUSABLE — `StepItem` (props: `index`, `title`, `body`).

---

## Module 6 — Results ⭐ SIGNATURE

**Category citation:** Breaks the category's defining weakness — thin/absent social proof (Farncombe, EasyStrong show none). No competitor shows visual results with motion; this is the contrarian thesis made literal.

**Purpose:** Prove transformation is real with the visitor's own eyes.

**Audience intent served:** #1 trust/competence — results outweigh adjectives.

**Layout composition:**
- **Shape tag:** `LAYERED`
- **Composition rationale (≥50 words):** Considered a `GRID-N` before/after gallery (safe, common) but it's static and forgettable. Chose a layered, scroll-linked reveal: a single large client transformation occupies a near-full-bleed stage; as it scrolls through the viewport a clip-path wipes "before"→"after" tied to scroll progress, the outcome stat counts up, and the named testimonial settles beneath. Below the hero-reveal sits a compact `LAYERED` strip of medal/celebration thumbnails overlapping a brick baseline. This is the page's one un-templatable moment.
- **Ceiling-reference borrow:** Arc's scroll-linked storytelling moment; Apple's centred-focal single-subject staging.
- **Proportion + whitespace note:** Reveal stage 4:5 (mobile) / 16:9 (desktop) centred, max 1000px; thumbnail strip 5 across desktop / 2.2 peek-scroll mobile; brick baseline rule 3px.
- **Sleekness check:** One staged image pair + one stat + one quote + one thumbnail row. Motion does the work, not chrome.

**Signature-moment tag:** `SIGNATURE`. As the visitor scrolls, the "before" photo wipes to "after" via a `clip-path` inset driven by scroll progress (a vertical wipe), while the outcome figure animates and the client's name + quote fade in. It ties straight to the HERO differentiator ("I'll get you stronger — or your money back"): the page *shows* the money-back promise being earned. Built with a scroll-progress hook (Framer Motion `useScroll`), GPU-only `clip-path`/opacity, and a static fallback (side-by-side) under reduced-motion. Realistic to build within the stack.

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ REAL RESULTS, REAL LIVES CHANGED                                        │
│        ┌───────────────────────────────────────────┐                   │
│        │   BEFORE  ⟶ (scroll wipe) ⟶  AFTER         │                   │
│        │        [client transformation]            │                   │
│        └───────────────────────────────────────────┘                   │
│              ▢▢ outcome stat  ·  "— client quote"  — Name               │
│   [medal] [hug] [trophy] [medal] [stage]   ← overlapping thumbnail strip │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ REAL RESULTS,                      │
│ REAL LIVES CHANGED                 │
│ ┌───────────────────────────────┐ │
│ │ BEFORE ⟶ wipe ⟶ AFTER         │ │
│ │  [client transformation 4:5]  │ │
│ └───────────────────────────────┘ │
│ ▢▢ outcome stat                    │
│ "— client quote"  — Name           │
│ ┌─────┐┌─────┐┌─────┐ → swipe      │
│ │medal││ hug ││troph│              │
│ └─────┘└─────┘└─────┘              │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: `THE PROOF`
- Headline: `Real results, real lives changed.`
- Subheadline: NONE
- Featured transformation stat: `AWAITING_USER` (e.g. weight/strength outcome — real figure required)
- Testimonials (named, words AWAITING_USER — never fabricated):
  - `Chell` — quote: `AWAITING_USER`
  - `Lena` — quote: `AWAITING_USER`
  - `Luke` — quote: `AWAITING_USER`
  - `Katy` — quote: `AWAITING_USER`
- Primary CTA label: `Start your transformation`
- Primary CTA destination: `#start` — scroll-to Contact Step 1
- Microcopy: `Photos shared with each client's permission.`
- Handles objection: #1 trust/competence

**Assets:**
- Role: feature (before) · photograph · `WhatsApp Image 2026-05-24 at 09.51.48 (7).jpeg` (female client front, before) — CONSENT REQUIRED.
- Role: feature (after) · photograph · `WhatsApp Image 2026-05-24 at 09.51.49 (2).jpeg` (same client, after) — CONSENT REQUIRED.
  - Alt (pair): `Client transformation — front view before and after coaching with RR Strength`
  - Focal point: `50%, 45%`
  - Responsive art direction: SAME subject; desktop 16:9 staged crop, mobile 4:5 → both encoded.
  - Treatment: neutral grade, consistent white-balance across the pair (critical for honest comparison); LQIP `#E9E5DF`.
  - Sourcing: EXISTING_LIBRARY · STATUS: NEEDS_OPTIMISATION + **consent gate**.
- Thumbnail strip (decorative-but-meaningful): `09.51.49 (1)` medal, `09.51.47 (7)` hug, `09.51.50 (9)` trophy, `09.51.48 (4)` medal, `09.51.50 (4)` stage. Alt each: descriptive. STATUS: NEEDS_OPTIMISATION.
- **Gap:** if any client withholds consent → that slot becomes TO_SOURCE (no substitute invented). At minimum one consented transformation required for the signature reveal; if none, module falls back to medals/celebration strip only and the reveal is disabled (logged Phase 11).

**Interactive states:**
- Default: shows "before" frame.
- Hover (thumbnails): scale 1.04 + brick ring.
- Focus-visible: ring on focusable thumbnails (open lightbox).
- Active: lightbox opens (thumbnail) — scale 0.98 on press.
- Disabled: n/a.
- Loading: skeleton block at image aspect-ratio (no CLS).
- Empty: if zero consented results → headline + "Results coming soon — ask me for client references" + medals strip.
- Error (image fails): dominant-colour block + alt text visible.
- Touch ≥44; thumbnails swipe on mobile.

**Motion:** SIGNATURE — `clip-path` wipe driven by `useScroll` progress across the stage's viewport transit; stat number counts up once in view; quote fades. 600ms-equivalent mapped to scroll, `--ease-standard`. Thumbnail strip horizontal scroll with momentum. Reduced-motion: **static side-by-side before/after**, stat shown final, no count-up, no wipe.

**Accessibility:** `<h2>` headline. Before/after pair has descriptive alt; the reveal is decorative enhancement over an accessible static pair (screen readers get both images + caption). Stat is real text, not image. Lightbox is a focus-trapped dialog, Esc closes. `prefers-reduced-motion` fully honoured. Contrast of caption text verified.

**Dynamic content:** `results[]` constant (image pair + stat + name + quote). Empty/loading/error states above.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Head term "personal training results Burgess Hill"; secondary "strength coaching transformations", "powerlifting coaching reviews". Emits `Review`/`AggregateRating` nodes (only once real quotes/ratings exist — gated on AWAITING_USER). Full JSON-LD in `seo/07-schema.md`.

**Design-system role:** ONE-OFF `BeforeAfterReveal` (signature) + REUSABLE `TestimonialCard`.

---

## Module 7 — Pricing

**Category citation:** Breaks the category's hidden-pricing cliché (Jason/Ellis/Character/Team Rohr/EasyStrong all hide it) — the core of the contrarian thesis; honours three-tier structure.

**Purpose:** Show exactly what it costs so price-anxiety is resolved on-page, not via a contact-gate.

**Audience intent served:** #2 cost/opacity.

**Layout composition:**
- **Shape tag:** `GRID-3` (tiers) + `ComparisonAccordion` beneath
- **Composition rationale (≥50 words):** Considered a single comparison table (old RR) but tables are hostile on mobile and bury the headline prices. Chose three price cards up top (instant, scannable, mobile-friendly) with the detailed feature matrix collapsed into an accordion below for those who want it — progressive disclosure. The middle "Hybrid" card is emphasised to match the Services recommendation, keeping the two modules consistent.
- **Ceiling-reference borrow:** Stripe's pricing-card clarity; Linear's restrained card styling.
- **Proportion + whitespace note:** 3 equal cards (gap 24px), middle scaled 1.03; bundles as a 3-chip row under In-Person card; accordion full-width below, 1px row rules.
- **Sleekness check:** Cards use hairline borders + one emphasised border; accordion is borderless rows with chevrons. No shadow stacking.

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ PRICING                                                                 │
│ NO HIDDEN PRICES. EVER.                                                 │
│ ┌────────────┐  ┌────────────┐ MOST POPULAR ┌────────────┐             │
│ │ ONLINE      │  │ HYBRID      │             │ IN-PERSON  │             │
│ │ £120 /month │  │ £140 /month │             │ £60 /hour  │             │
│ │ Programme + │  │ Sessions +  │             │ 1-to-1 at  │             │
│ │ video checks│  │ programme   │             │ PureGym    │             │
│ │ [Claim free]│  │ [Claim free]│             │ [Claim free]            │
│ └────────────┘  └────────────┘             └────────────┘             │
│  In-person blocks:  5 / £280 (£56 ea) · 10 / £520 (£52 ea) · 15 / £705 (£47 ea) │
│ ▸ Compare what's included (In-Person · Online · Hybrid)   [accordion]    │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ PRICING                            │
│ NO HIDDEN PRICES. EVER.            │
│ ┌───────────────────────────────┐ │
│ │ HYBRID        MOST POPULAR     │ │
│ │ £140 / month                   │ │
│ │ Sessions + a programme between │ │
│ │ [ Claim free session ]         │ │
│ └───────────────────────────────┘ │
│ ┌───────────────────────────────┐ │
│ │ ONLINE   £120 / month          │ │
│ │ [ Claim free session ]         │ │
│ └───────────────────────────────┘ │
│ ┌───────────────────────────────┐ │
│ │ IN-PERSON   £60 / hour         │ │
│ │ Blocks: 5/£280 · 10/£520 ·     │ │
│ │ 15/£705                        │ │
│ │ [ Claim free session ]         │ │
│ └───────────────────────────────┘ │
│ ▸ Compare what's included          │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: `PRICING`
- Headline: `No hidden prices. Ever.`
- Tiers:
  - **Online** — `£120/month` — `A bespoke programme, video form checks and 24/7 contact.`
  - **Hybrid** (`MOST POPULAR`) — `£140/month` — `In-person sessions plus a programme you run between them.`
  - **In-Person** — `£60/hour` — `One-to-one coaching at PureGym Burgess Hill.`
- In-person blocks line: `In-person session blocks: 5 for £280 (£56 each) · 10 for £520 (£52 each) · 15 for £705 (£47 each)`
- Accordion trigger: `Compare what's included`
- Comparison rows (In-Person / Online / Hybrid):
  - `1-to-1 in-person sessions` — `1–5 / week` · `None` · `1–3 / week`
  - `Tailored programme` — `✓ · ✓ · ✓`
  - `Nutritional guidance` — `✓ · ✓ · ✓`
  - `In-person form support` — `✓ · ✗ · ✓`
  - `Online form support` — `✓ · ✓ · ✓`
  - `24/7 contact` — `✓ · ✓ · ✓`
  - `Weekly check-ins` — `✓ · ✓ · ✓`
- Card CTA (each): `Claim free session` → `#start`
- Microcopy: `£60/hour is a single session; blocks are discounted packages.` *(resolves the £60 vs per-session ambiguity — pending client confirmation)*
- Handles objection: #2 cost/opacity

**Assets:** None (typographic). Lucide `check` / `x` for matrix (decorative, with text equivalents for a11y).

**Interactive states:**
- Cards: default hairline; hover lift + brick border; focus ring; active scale 0.99.
- Accordion: default collapsed chevron-right; hover row tint; focus ring; expanded chevron-down + content slide; disabled n/a; loading n/a; empty n/a; error n/a.
- Touch ≥44.

**Motion:** Cards stagger in 240ms `--ease-out`. Accordion expand height+opacity 280ms `--ease-standard`. Reduced-motion: instant toggle.

**Accessibility:** `<h2>` headline; tier names `<h3>`. Prices are real text. Accordion is a proper disclosure (`<button aria-expanded aria-controls>`); matrix is a `<table>` with row/col headers; `✓/✗` paired with visually-hidden "Included"/"Not included" text. Contrast verified.

**Dynamic content:** `pricing` constant (tiers, bundles, matrix).

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Head terms "personal training prices Burgess Hill", "online coaching cost UK". Emits `Offer`/`PriceSpecification` per tier. Full JSON-LD in `seo/07-schema.md`.

**Design-system role:** REUSABLE — `PricingTierCard` + `ComparisonAccordion`.

---

## Module 8 — Events (Community & Charity)

**Category citation:** Differentiation module — no direct competitor centres a charity-event story; answers the trust/character objection and humanises the brand (Team Rohr lists meets but as logistics, not cause).

**Purpose:** Show RR is a community force, not just a service — and surface the next event.

**Audience intent served:** #6 trust/character; emotional buy-in.

**Layout composition:**
- **Shape tag:** `FULL-BLEED` (event photo full-bleed, overlaid card lower-right)
- **Composition rationale (≥50 words):** Considered a `SPLIT-OFFSET` (photo one side, details the other) but the Ramadan-Rumble photography is too strong to box and the module needs to read as a *breather* between two dense sections (Pricing, FAQ). Chose full-bleed stage photography with a compact glass card overlaid lower-right carrying the next-event details (or the community recap when no event is scheduled). The image carries emotion; the card carries facts.
- **Ceiling-reference borrow:** Nike full-bleed event imagery; Apple's centred-focal calm.
- **Proportion + whitespace note:** Full-bleed 21:9 desktop / 4:5 mobile; overlay card max 420px, glass blur + 1px hairline, lower-right inset 48px.
- **Sleekness check:** One image, one glass card, one button. Scrim ensures legibility.

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ [full-bleed Ramadan Rumble stage]                                       │
│                                        ┌──────────────────────────────┐ │
│  COMMUNITY & CHARITY                   │ THE NEXT RR STRENGTH EVENT     │ │
│                                        │ [date]  ·  [title]             │ │
│                                        │ A charity powerlifting meet    │ │
│                                        │ raising money for children in  │ │
│                                        │ Palestine.                     │ │
│                                        │ [ Sign up to this event ]      │ │
│                                        └──────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ COMMUNITY & CHARITY                │
│ ┌───────────────────────────────┐ │
│ │ [Ramadan Rumble stage 4:5]    │ │
│ └───────────────────────────────┘ │
│ THE NEXT RR STRENGTH EVENT         │
│ [date] · [title]                   │
│ A charity powerlifting meet        │
│ raising money for children in      │
│ Palestine.                         │
│ [ Sign up to this event ]          │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: `COMMUNITY & CHARITY`
- Headline (no-event default, ships now): `We lift for more than ourselves.`
- Body (no-event default): `RR Strength runs charity powerlifting meets that raise money for children in Palestine — run by volunteers, open to every level. The next one will be announced here.`
- Dated variant (when event exists): Headline `The next RR Strength event` · fields `eventDate`, `eventTitle` (`AWAITING_USER`), body `A charity powerlifting meet raising money for children in Palestine.`
- Primary CTA label (dated): `Sign up to this event`
- Primary CTA destination: `eventSignupUrl` (`AWAITING_USER`) — new-tab; **secondary to the page's main CTA, styled as ghost so it doesn't compete with "Claim free session".**
- No-event CTA: `Follow @rr_strength_coach for the next one` → `https://instagram.com/rr_strength_coach` (new-tab)
- Microcopy: NONE
- Handles objection: #6 trust/character

**Assets:**
- Role: background · photograph · `WhatsApp Image 2026-05-24 at 09.51.49 (8).jpeg` (Ramadan Rumble deadlift, green stage, crescent backdrop).
  - Alt: `A lifter competing at the RR Strength Ramadan Rumble charity powerlifting event`
  - Focal point: `50%, 42%`
  - Responsive art direction: desktop 21:9, mobile 4:5 (different crops) → both encoded.
  - Treatment: dark scrim lower-right for card legibility; LQIP `#0D2A1E` (green-dark).
  - Sourcing: EXISTING_LIBRARY · STATUS: NEEDS_OPTIMISATION.

**Interactive states:** (CTA) default ghost; hover brick-fill; focus ring; active 0.98. Card static. Touch ≥44.

**Motion:** Card fades+rises on scroll-in 280ms `--ease-out`; image subtle parallax-free scale 1.03→1.0. Reduced-motion: instant, no scale.

**Accessibility:** `<h2>` headline. Card is `<article>`; date in `<time datetime>`. Scrim ensures ≥4.5:1 over image. CTA discernible name.

**Dynamic content:** `nextEvent` constant — when `null`, renders no-event variant (graceful, never stale). Source of truth: single content object editable in one place.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Head term "charity powerlifting event"; emits `Event` schema **only when a dated event exists** (name, startDate, location, organizer); suppressed in no-event state. Full JSON-LD in `seo/07-schema.md`.

**Design-system role:** ONE-OFF — composed from `SectionShell` + `Button`; `nextEvent` drives variant.

---

## Module 9 — FAQ

**Category citation:** Table-stakes (Character has FAQ); RR uses it to clear the remaining objections and capture question-intent search.

**Purpose:** Answer the last blocking questions before the ask.

**Audience intent served:** #5 commitment; price/fit clarity.

**Layout composition:**
- **Shape tag:** `STACKED` (full-width accordion list)
- **Composition rationale (≥50 words):** Considered a `SPLIT-OFFSET` (heading left, questions right) but FAQs read best as a single focused column the eye can run down. Chose a centred, max-680px stacked accordion on a dark band — full-width rows with generous vertical padding and hairline dividers, first item open by default so the section never looks inert. Density without clutter.
- **Ceiling-reference borrow:** Linear/Stripe disclosure simplicity; Apple's quiet centred column.
- **Proportion + whitespace note:** Column max 680px centred; each row 64px collapsed; 1px dividers; chevron right→down.
- **Sleekness check:** Borderless rows + dividers + chevrons. One container.

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│                         FREQUENTLY ASKED QUESTIONS                       │
│        ┌────────────────────────────────────────────────────┐          │
│        │ What if it's not for me? ▾                          │          │
│        │  Your first session is free and coaching is backed  │          │
│        │  by a money-back guarantee. No risk to try.         │          │
│        │ ──────────────────────────────────────────────────  │          │
│        │ Is this for beginners or competitors? ▸             │          │
│        │ What's the difference between online & in-person? ▸ │          │
│        │ Am I locked into one service? ▸                     │          │
│        │ How much does it cost? ▸                            │          │
│        │ Do you sell pre-made programmes? ▸                  │          │
│        └────────────────────────────────────────────────────┘          │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ FREQUENTLY ASKED QUESTIONS         │
│ What if it's not for me? ▾         │
│  Your first session is free and    │
│  coaching is money-back guaranteed.│
│ ─────────────────────────────────  │
│ Is this for beginners or           │
│ competitors? ▸                     │
│ Online vs in-person? ▸             │
│ Am I locked into one service? ▸    │
│ How much does it cost? ▸           │
│ Do you sell pre-made programmes? ▸ │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: NONE
- Headline: `Frequently asked questions`
- Items:
  1. `What if it's not for me?` — `Your first session is free, and coaching is backed by a money-back guarantee. If it's not right, you walk away — no cost, no awkwardness.`
  2. `Is this for beginners or competitors?` — `Both. I coach first-timers who've never touched a barbell and lifters prepping for national meets. Your programme is built around you.`
  3. `What's the difference between online and in-person?` — `In-person is hands-on coaching at PureGym Burgess Hill. Online is a bespoke programme with video form checks and 24/7 contact. Hybrid combines the two.`
  4. `Am I locked into one service?` — `No. You can start with one mode and switch as your goals or schedule change.`
  5. `How much does it cost?` — `Online £120/month, Hybrid £140/month, In-person £60/hour with discounted blocks. Full breakdown is in the pricing section above.`
  6. `Do you sell pre-made programmes, or do I have to be a client?` — `Coaching is tailored, not off-the-shelf — so we work together. Claim a free session and we'll find the right fit.`
- Primary CTA: NONE (Final CTA follows)
- Microcopy: NONE
- Handles objection: #5 commitment (+ reinforces #2, #4)

**Assets:** None. Lucide `chevron-down` (decorative).

**Interactive states:** Accordion: default (first open); collapsed chevron-right; hover row tint; focus ring on trigger; expanded chevron-down + slide; active press; disabled n/a; loading n/a; empty n/a; error n/a. Touch ≥44 (full row).

**Motion:** Expand/collapse height+opacity 260ms `--ease-standard`; chevron rotate 200ms. Reduced-motion: instant.

**Accessibility:** `<h2>` headline; each trigger a `<button aria-expanded aria-controls>`; one expanded by default; full keyboard operable; answers in region with `role`. Contrast verified.

**Dynamic content:** `faqs[]` constant.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Head/question terms map directly to the FAQ copy ("is personal training worth it", "online vs in-person coaching", "personal training cost Burgess Hill"). Emits `FAQPage` schema (all six Q/A). Full JSON-LD in `seo/07-schema.md`.

**Design-system role:** REUSABLE — `FaqItem`.

---

## Module 10 — Final CTA band

**Category citation:** Honours the repeated free-trial CTA convention; expresses the money-back differentiator one last time; Apple-style single-statement breath before the form.

**Purpose:** Give the decided visitor a clean, emotional push into the form.

**Audience intent served:** #5 commitment — the lowest-friction ask, restated.

**Layout composition:**
- **Shape tag:** `CENTERED-FOCAL`
- **Composition rationale (≥50 words):** Considered folding the final CTA into the form header, but a dedicated breath module gives the long scroll a confident pause and a single emotional line before the work of the form. Chose centred-focal: one large statement, one button, vast whitespace on a near-black band — maximum signal, zero noise. It resets attention after the dense FAQ and hands cleanly to the form.
- **Ceiling-reference borrow:** Apple's centred single-statement modules; Linear's confident spareness.
- **Proportion + whitespace note:** Min 60svh; statement max 16ch per line, centred; 96px padding; single button below.
- **Sleekness check:** One headline, one button. Nothing else.

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                        │
│                  READY? YOUR FIRST                                      │
│                  SESSION'S ON ME.                                       │
│                                                                        │
│                  [ Claim your free session ]                            │
│                  No card needed · Money-back guarantee                  │
│                                                                        │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│                                    │
│   READY? YOUR FIRST                │
│   SESSION'S ON ME.                 │
│                                    │
│   [ Claim your free session ]      │
│   No card · Money-back guarantee   │
│                                    │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: NONE
- Headline: `Ready? Your first session's on me.`
- Subheadline: NONE
- Primary CTA label: `Claim your free session`
- Primary CTA destination: `#start` — scroll-to Contact Step 1
- Microcopy: `No card needed · Money-back guarantee`
- Handles objection: #5 commitment

**Assets:** None (typographic). Optional faint topographic-line texture as background (decorative, `aria-hidden`).

**Interactive states:** (CTA) default/hover/focus/active as Hero. Touch ≥44.

**Motion:** Headline words fade+rise on scroll-in 300ms `--ease-out`. Reduced-motion: instant.

**Accessibility:** `<h2>` headline. High contrast white-on-near-black (≥ 12:1). Single clear action.

**Dynamic content:** Static.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` NONE (conversion band, no discoverable content beyond CTA).

**Design-system role:** ONE-OFF — `SectionShell` + `Button`.

---

## Module 11 — Contact = Multi-step intake (`MultiStepForm`)

**Category citation:** Breaks the giant-single-form anti-pattern (old RR JotForm) and the contact-gate friction; progressive disclosure with the easiest question first.

**Purpose:** Capture a lead on Step 1 (emails immediately) and the full PAR-Q intake across Steps 2–5.

**Audience intent served:** #5 commitment (easy start) + #6 character (consent-led).

**Layout composition:**
- **Shape tag:** `SPLIT-OFFSET` (form 58% left, reassurance panel 42% right; panel hides on mobile)
- **Composition rationale (≥50 words):** Considered a centred single-column form, but a long intake feels less daunting beside a persistent reassurance panel (progress, money-back reminder, what-happens-next). Chose a 58/42 offset: the form leads on the left with a step progress bar; the right panel restates the free/no-risk promise and the privacy commitment so the sensitive health questions feel safe. On mobile the panel collapses to a slim reassurance line above the form.
- **Ceiling-reference borrow:** Stripe's checkout reassurance sidebar; Linear's clean field styling.
- **Proportion + whitespace note:** Form column max 620px; panel sticky; progress bar 4px; fields 48px tall, 16px gaps; one question-group visible per step.
- **Sleekness check:** Fields are underline-or-soft-bordered, no heavy boxes; one progress bar; one panel.

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ START HERE                                  │  YOUR FIRST SESSION IS    │
│ ●━━━○━━━○━━━○━━━○  Step 1 of 5               │  FREE.                    │
│ Claim your free session                     │  • No card needed         │
│ [ First name ][ Last name ]                 │  • Money-back guarantee   │
│ [ Email ]                                   │  • Your details stay       │
│ [ Mobile ]                                  │    private & confidential │
│ Primary goal  ( Strength ▾ )                │                           │
│ Preferred mode ( In-person ▾ )              │  What happens next:       │
│ [ Continue → ]   or just send this & I'll   │  I'll reply within 24h to │
│  be in touch                                │  book your free session.  │
└──────────────────────────────────────────────────────────────────────┘
 (Steps 2–5 swap the left column content; panel persists.)
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ Your first session is free · no    │
│ card · money-back                  │
│ ●━━━○━━━○━━━○━━━○ Step 1 of 5       │
│ CLAIM YOUR FREE SESSION            │
│ [ First name ]                     │
│ [ Last name ]                      │
│ [ Email ]                          │
│ [ Mobile ]                         │
│ Primary goal ( Strength ▾ )        │
│ Preferred mode ( In-person ▾ )     │
│ [ Continue → ]                     │
│ Prefer to just send it? Tap here.  │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: `START HERE`
- Headline (Step 1): `Claim your free session`
- Step labels: `1 · Your details` → `2 · About you` → `3 · Health & lifestyle` → `4 · Goals & experience` → `5 · Schedule & consent`
- Reassurance panel: `Your first session is free.` · `No card needed` · `Money-back guarantee` · `Your details stay private and confidential` · `What happens next: I'll reply within 24 hours to book your free session.`
- Step 1 fields: `First name`, `Last name`, `Email`, `Mobile`, `Primary goal` (select: Strength & powerlifting / Fat loss & conditioning / General fitness / Competition prep), `Preferred mode` (select: In-person / Online / Hybrid / Not sure yet)
- Step 1 CTA: `Continue` (advances) + secondary `Send this and I'll be in touch` (submits lead immediately)
- Final step consent (Step 5): checkbox `I confirm the information above is correct, and I consent to RR Strength storing and using my health information to coach me safely. I understand it's kept confidential.` (required) + the cancellation (24h) and late-arrival (1–1.25h session) acknowledgements as read-and-accept text.
- Submit (Step 5): `Send my intake`
- Success copy: `Got it — thank you. I'll be in touch within 24 hours to book your free session.`
- Microcopy (Step 3 health intro): `These help me coach you safely. Share what you're comfortable with.`
- Handles objection: #5 commitment, #6 character

**Assets:** None (form UI). Lucide field/step icons decorative.

**Field spec (full):** see Phase 8 Form Manifest (names, types, validation, autocomplete, required/optional) — single source of truth, not duplicated here.

**Interactive states:**
- Default: Step 1 visible; Continue enabled when Step-1 required fields valid.
- Hover: buttons as elsewhere; fields show focusable affordance.
- Focus-visible: 2px focus ring on every field/control.
- Active: button press 0.98.
- Disabled: Continue/Submit disabled until step valid; visually muted + `aria-disabled`.
- Loading: on submit, button shows spinner + `Sending…`; fields locked.
- Empty: each select has a placeholder option; no empty-data state (user-entered).
- Error: per-field inline message (e.g. `Enter a valid email`), red `--color-feedback-danger` border + text; form-level error on send failure: `Something went wrong sending that. Try again, or email rashedrahman382@gmail.com.`
- Touch ≥44 on all fields/buttons/selects.

**Motion:** Step transitions slide+fade (x 24→0, opacity) 280ms `--ease-out`; progress bar fill 300ms `--ease-standard`. Reduced-motion: instant step swap, no slide.

**Accessibility:** `<h2>` = "Claim your free session". Form is a `<form>` with a `<fieldset>`/`<legend>` per step; progress conveyed via `aria-current` + visually-hidden "Step N of 5"; errors via `aria-describedby` + `aria-invalid`; `aria-live="polite"` region announces step changes and submit result; logical tab order; no focus traps; labels bound to inputs; `autocomplete` attributes set. Consent checkbox programmatically required. Contrast verified.

**Dynamic content:** Submits via Next.js Server Action → Resend. Step 1 fires an immediate lead email; Step 5 fires the full intake. Fallback if email send fails: error state above + retry; lead not lost (button re-enabled). No external read data.

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Head term "book free personal training session Burgess Hill". Emits `ContactPoint` within layout `LocalBusiness`. No standalone block.

**Design-system role:** REUSABLE — `MultiStepForm` (props: `steps[]`, `onLeadSubmit`, `onFullSubmit`) + `Field` primitives (`TextField`, `SelectField`, `RadioGroup`, `CheckboxGroup`, `ConsentField`).

---

## Module 0B — Footer (`SiteFooter`)

**Category citation:** Honours footer convention (contact, social, legal); fixes the old site's "© Year" defect with an auto-derived year.

**Purpose:** Close the page with contact, navigation, social, and legal compliance.

**Audience intent served:** Wayfinding + trust (real contact, legal links).

**Layout composition:**
- **Shape tag:** `HORIZONTAL-STRIP` (multi-column row)
- **Composition rationale (≥50 words):** Considered a minimal one-line footer, but UK GDPR + the page's legal needs require visible Privacy/Terms links and the social/contact belongs here. Chose a four-column row (brand+social / contact / navigate / legal) on the off-white surface to bookend the dark page, mirroring the trust strip's light band so the page opens and closes on light. Auto-year copyright.
- **Ceiling-reference borrow:** Stripe's organised multi-column footer restraint.
- **Proportion + whitespace note:** 4 columns desktop → stacked mobile; 48px top padding; hairline top border.
- **Sleekness check:** Columns of plain links, one logo, two social icons. No boxes.

**Signature-moment tag:** `NONE`

**Desktop wireframe (≥1024px):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ [RR✕STRENGTH]      CONTACT            NAVIGATE        LEGAL             │
│  Strength coaching  07565 220897      About           Privacy Policy    │
│  Burgess Hill & online  email…        Services        Terms             │
│  [in] [ig]          @rr_strength_coach Pricing        Cookie Policy      │
│                                        Events                            │
│ ──────────────────────────────────────────────────────────────────────│
│ © 2026 RR Strength. All rights reserved.        Website by [credit]      │
└──────────────────────────────────────────────────────────────────────┘
```

**Mobile wireframe (<768px):**
```
┌───────────────────────────────────┐
│ [RR✕STRENGTH]                      │
│ Strength coaching ·                │
│ Burgess Hill & online              │
│ [in] [ig]                          │
│ CONTACT                            │
│  07565 220897 · email              │
│  @rr_strength_coach                │
│ NAVIGATE                           │
│  About · Services · Pricing ·      │
│  Events · FAQ                      │
│ LEGAL                              │
│  Privacy · Terms · Cookies         │
│ ─────────────────────────────────  │
│ © 2026 RR Strength.                │
└───────────────────────────────────┘
```

**Final copy:**
- Eyebrow: NONE
- Brand line: `Strength coaching · Burgess Hill & online`
- Contact: `07565 220897` (tel) · `rashedrahman382@gmail.com` (mailto — *flagged to switch to a branded address*) · `@rr_strength_coach`
- Navigate links: `About` · `Services` · `Pricing` · `Events` · `FAQ`
- Legal links: `Privacy Policy` · `Terms` · `Cookie Policy`
- Social: Instagram `https://instagram.com/rr_strength_coach`, LinkedIn (URL `AWAITING_USER`)
- Copyright: `© {auto-year} RR Strength. All rights reserved.`
- Microcopy: NONE
- Handles objection: NONE (utility/trust)

**Assets:** logo `/public/brand/rr-logo.svg` STATUS: TO_SOURCE; Lucide `instagram`, `linkedin`.

**Interactive states:** Links: default muted; hover → primary + underline; focus ring; active; visited same. Touch ≥44 (link rows padded).

**Motion:** None (footer is calm). Reduced-motion: n/a.

**Accessibility:** `<footer role="contentinfo">`; columns are `<nav aria-label>`ed lists; tel/mailto links typed; social links have discernible names + `aria-label`. Contrast dark-on-off-white ≥ 7:1.

**Dynamic content:** Year auto-derived from build/runtime date (no hard-coded year — fixes old defect).

**SEO / structured data:** `[STAND-IN — pending /plan-seo]` Reinforces `LocalBusiness` NAP (name, address area, phone). Legal links aid Best-Practices/SEO. Full JSON-LD in layout.

**Design-system role:** REUSABLE — `SiteFooter`.
