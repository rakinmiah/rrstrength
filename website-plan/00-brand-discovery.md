# Phase 1A — Brand Discovery

> Source note: live Webflow site (`rr-strength-3ba4f5.design.webflow.com`) is behind a PerimeterX human-verification wall; automated fetch returns only the title. Discovery is therefore based on 19 user-supplied screenshots of every page + 43 supplied photographs. Logo vector/raster not yet supplied (incoming).

## 1. Existing site IA (rebuild audit)
Multi-page Webflow site. Nav: Home · About · RR Strength Events · Services · Pricing · Contact.

| Current piece | Verdict | Action |
|---|---|---|
| Hero "I'll help you unlock a healthier lifestyle — or your money back" + Sign Up For Free | Strong hook, weak (portrait) art direction | **Elevate** — keep money-back, fix composition |
| Meet Your Coach (home) + About "Why I Started" + "My Experience" | Three overlapping intros | **Reframe** — merge into one About module |
| Types of Training (Online/In-Person/Hybrid) + Services (Strength/Weight Loss carousel) | Overlapping; carousel = anti-pattern | **Reframe** — merge to one Services module, no carousel |
| How It Works (6 steps) | Good trust builder | **Preserve** |
| Client Success (Chell/Lena/Luke/Katy + transformations) | Core social proof | **Elevate** |
| Pricing (3 tiers + bundles + comparison table + FAQ) | Useful; table awkward on mobile; price inconsistency | **Preserve + fix** |
| RR Strength Events (dated charity comp) | Time-sensitive, no year | **Preserve, restructure** as easily-updatable block |
| Contact (Name/Email/Message) + separate giant JotForm intake | Two disconnected forms; JotForm = wall of fields | **Reframe** — one native multi-step intake |
| Footer | "© Year" placeholder, personal Gmail | **Fix** |

**Defects logged:** heading typo "COMPRIMISE"; "© Year of RR Strength" literal placeholder; personal Gmail; £60/hr vs £47–56/session mismatch; two competing CTAs; dated event without year.

## 2. Brand colour extraction (sampled from screenshots — exact hexes finalised in Phase 6 once logo lands)
- Near-black backgrounds: approx `#0E0E0E`–`#141414` (dark sections).
- Off-white section panels: approx `#F4F2EE` (warm off-white).
- Accent: muted orange/red on the logo mark + headset Rashed wears (≈ `#C8462B`/brick). Used sparingly.
- Logo + headings rendered in white/off-white uppercase on dark.
> These are visual estimates from compressed screenshots; Phase 6 commits exact values, refined against the supplied logo file.

## 3. Existing voice extraction (verbatim fragments from screenshots)
- "I'll help you unlock a healthier lifestyle — or your money back"
- "Flexibility without compromise"
- "Real results, real lives changed"
- "Facilitating your growth"
- "A coach you can trust"
- "Are you ready to change? Sign up to start."
- About: first-person, plain-spoken — "I got into resistance training for the same reasons everyone else does. I wanted to look good." … "The muscle was a byproduct."
- Events: warm, communal — charity comp "raises money for children in Palestine"; "all staff are volunteers. Enjoy the event and support a great cause!"

**Implicit voice rules to PRESERVE:** first-person singular ("I"), direct second-person address ("you"), short declarative sentences, confident but warm, no jargon, mission/community-minded.
**Accidental sloppiness to DROP:** typos; generic stock phrases ("Facilitating your growth", "A coach you can trust") that any PT could use; placeholder text.

## 4. Media inventory (43 photographs + 19 screenshots)
**Treatment consistency:** Two distinct sets — (a) **professional event photography** ("White Lights Media" watermark): dark, moody, green Ramadan-Rumble stage, high contrast, cinematic; (b) **phone snaps**: bright, flat, candid coach+client poses. The pro set defines the premium look; phone snaps relegated to thumbnails/avatars to keep the set cohesive.

**Highest-value assets (anchor modules):**
| Ref (folder file) | Subject | Best role |
|---|---|---|
| `09.51.49 (5)` | Coach arms-crossed, headset, stage light | **Hero / About portrait** |
| `09.51.48 (2)` | Coach in headphones, dark backstage, editorial | Hero alt / section divider |
| `09.51.48 (3)` & `09.51.49 (4)` | Coach at **RR_STRENGTH crossed-barbell backdrop** (+ SWP/LYFT sponsors) | About header, brand-identity proof |
| `09.51.50 (4)` / `(5)` / `09.51.49 (8)` | Ramadan Rumble deadlift on green stage | Hero action / Services / Events |
| `09.51.48 (6)`, `09.51.49 (7)`, `09.51.47` (bald lifter) | Coach handling/loading bar for a lifter | Services "in-person" proof |
| `09.51.47 (7)`, `09.51.48 (5)`, `09.51.49 (9)` | Emotional hugs / celebration | Results emotive band |
| `09.51.50`, `09.51.50 (10)`, `09.51.51` | Coach at IPF Worlds (VisitMalta), World Masters, SBD Manchester Open backdrops | **Credibility strip** |
| medal/trophy pairs `(47-4, 48, 48-4, 49-1, 49-3, 50-2/3/8/9)` | Coach + client with medals | Testimonial avatars / results grid |
| `09.51.49 (6)` | Coach + pregnant client ("Lifting for Two") | Inclusivity / community note |
| `48 (7)`, `49 (2)`, `50 (1)` | Female client before/after (front/back/side) | Transformations (CONSENT REQUIRED) |

**Orientation flag:** the large majority are **tall/portrait** phone shots. Few true landscape frames → hero art direction must use portrait-friendly compositions (split, layered, or duotone-cropped) rather than a single wide banner.

**Three strongest overall:** `09.51.49 (5)` (coach hero), `09.51.50 (4)` (Ramadan deadlift), `09.51.48 (3)` (branded backdrop).

**Rights flags:** "White Lights Media" watermark on the best action shots → confirm usage rights / obtain clean versions. Transformation + identifiable-client photos → written consent before publish.

**Gaps (no asset exists → TO_SOURCE, never invented):** clean gym/facility shots of PureGym Burgess Hill; any online-coaching/app visual; landscape hero crop; the logo as SVG/PNG.

## 5. External presence
Instagram handle in footer: **@rr_strength_coach** ("Follow me to get all the latest updates regarding my personal training, events and offers!"). Treated as the live social channel; not fetched (no API). Tone there assumed sharper/more current — import only verified facts, not scraped copy.
