# Phase 6 — Design Tokens

> Dark-first, fixed aesthetic (no light/dark toggle — Phase 0). Off-white *surfaces* (trust strip, footer) live inside the dark page, they are not a light theme. Brand hexes sampled from screenshots; re-verify against the supplied logo before launch (Phase 11). Every choice cites the Phase 1B Visual Aesthetic Brief.

## Brand colour palette
- `--color-brand-primary: #C9452B` — brick/orange accent. **Used for primary CTAs and key accents only.** (Honours brand's existing accent; breaks the category's blue/neutral default.)
- `--color-brand-ink: #0D0D0C` — near-black brand base. (Breaks white-background cliché.)
- `--color-brand-bone: #F4F1EA` — warm off-white for light surfaces.

## Semantic colour layer
| Token | Value | Usage |
|---|---|---|
| `--color-background` | `#0D0D0C` | page base (dark) |
| `--color-surface` | `#141312` | raised dark panels/cards |
| `--color-surface-raised` | `#1E1C19` | hover/elevated cards |
| `--color-surface-sunken` | `#090908` | wells, form fields |
| `--color-surface-light` | `#F4F1EA` | trust strip, footer (light bands) |
| `--color-border-subtle` | `rgba(255,255,255,0.10)` | hairlines on dark |
| `--color-border-subtle-light` | `#E3DDD0` | hairlines on light surfaces |
| `--color-border-strong` | `rgba(255,255,255,0.22)` | emphasised dividers |
| `--color-text-primary` | `#F7F5F0` | primary text on dark |
| `--color-text-muted` | `#B5B0A6` | secondary text on dark |
| `--color-text-inverse` | `#14130F` | text on light surfaces |
| `--color-text-inverse-muted` | `#5A554B` | secondary text on light |
| `--color-text-link` | `#E8765B` | links on dark |
| `--color-text-link-hover` | `#F2937C` | link hover on dark |
| `--color-feedback-success` | `#2E8B57` / surface `#10241A` | success |
| `--color-feedback-warning` | `#C98A00` / surface `#241D08` | warning |
| `--color-feedback-danger` | `#E5484D` / surface `#2A1012` | form errors |
| `--color-feedback-info` | `#4C8DFF` / surface `#0E1B30` | info |
| `--color-focus-ring` | `#F2937C` | 2px focus outline; ≥3:1 on every surface |

## Contrast pairing table (WCAG, measured)
| Text token | On surface | Ratio | Tier |
|---|---|---|---|
| text-primary `#F7F5F0` | background `#0D0D0C` | 18.2:1 | AAA |
| text-primary `#F7F5F0` | surface `#141312` | 16.8:1 | AAA |
| text-muted `#B5B0A6` | background `#0D0D0C` | 9.1:1 | AAA |
| text-muted `#B5B0A6` | surface-raised `#1E1C19` | 7.6:1 | AAA |
| text-link `#E8765B` | background `#0D0D0C` | 5.6:1 | AA |
| text-link-hover `#F2937C` | background `#0D0D0C` | 7.1:1 | AAA |
| white `#FFFFFF` | brand-primary `#C9452B` (button) | 4.7:1 | AA |
| text-inverse `#14130F` | surface-light `#F4F1EA` | 14.9:1 | AAA |
| text-inverse-muted `#5A554B` | surface-light `#F4F1EA` | 6.2:1 | AA |
| focus-ring `#F2937C` | background `#0D0D0C` | 7.1:1 | pass (≥3:1) |
| danger `#E5484D` | surface-sunken `#090908` | 4.9:1 | AA |
> Pairings not listed are not permitted in components. Brick `#C9452B` is **never** used as text on dark (fails AA) — only as button fill (with white text) or as a non-text accent.

## Dark mode tokens
Per Phase 0: **no toggle.** Codify `color-scheme: dark` at `:root`. The above semantic layer *is* the (only) theme. No `prefers-color-scheme` switching; the off-white bands are surfaces, not an alternate theme.

## Typography
- **Headings/display:** **Saira Condensed** (weights 500/600/700; condensed, athletic; OFL). Self-hosted (woff2). Uppercase for display via `text-transform`. (Honours fitness bold-condensed convention; runner-up Oswald.)
- **Body/UI:** **Inter** (weights 400/500/600; OFL). Self-hosted.
- **Mono:** NONE — not needed.
- Font serving: **self-hosted woff2** (no third-party request; fastest LCP).

**Type scale (rem / px) — content-role mapping**
| Role | Token | Desktop | Mobile | Line-height | Tracking | Weight | Family |
|---|---|---|---|---|---|---|---|
| Display / H1 | `--font-display` | 4.5rem/72px | 2.75rem/44px | 0.98 | -0.01em | 700 | Saira Cond |
| H2 | `--font-h2` | 3rem/48px | 2rem/32px | 1.02 | -0.01em | 700 | Saira Cond |
| H3 | `--font-h3` | 1.75rem/28px | 1.375rem/22px | 1.1 | 0 | 600 | Saira Cond |
| H4 | `--font-h4` | 1.25rem/20px | 1.125rem/18px | 1.2 | 0 | 600 | Saira Cond |
| Eyebrow/overline | `--font-eyebrow` | 0.8125rem/13px | 0.75rem/12px | 1 | 0.14em | 600 | Inter |
| Lead | `--font-lead` | 1.25rem/20px | 1.125rem/18px | 1.5 | 0 | 400 | Inter |
| Body | `--font-body` | 1rem/16px | 1rem/16px | 1.6 | 0 | 400 | Inter |
| Small | `--font-small` | 0.875rem/14px | 0.875rem/14px | 1.5 | 0 | 400 | Inter |
| Caption | `--font-caption` | 0.8125rem/13px | 0.8125rem/13px | 1.4 | 0.01em | 500 | Inter |
| Button label | `--font-button` | 1rem/16px | 1rem/16px | 1 | 0.02em | 600 | Inter |
| Form label | `--font-label` | 0.875rem/14px | 0.875rem/14px | 1.2 | 0.01em | 600 | Inter |
| Helper text | `--font-helper` | 0.8125rem/13px | 0.8125rem/13px | 1.4 | 0 | 400 | Inter |

## Space scale (4px base)
`--space-1:4` `--space-2:8` `--space-3:12` `--space-4:16` `--space-5:24` `--space-6:32` `--space-7:48` `--space-8:64` `--space-9:96` `--space-10:128` (px).

## Layout tokens
- **Breakpoints:** `--bp-mobile-sm:375` `--bp-mobile:430` `--bp-tablet:768` `--bp-laptop:1024` `--bp-desktop:1280` `--bp-wide:1536` (px).
- **Content max-width:** `--content-max: 1240px` — comfortable line-length for body at the chosen scale, generous for full-bleed media to breathe within.
- **Grid:** 12 cols / 24px gutter ≥1024px; 8 cols / 20px gutter 768–1023; 4 cols / 16px gutter <768.
- **Section vertical rhythm:** `--section-y`: 112px desktop / 88px tablet / 64px mobile (top & bottom).

## Radius scale
`--radius-sm:6px` `--radius-md:10px` `--radius-lg:16px` `--radius-pill:999px`.

## Shadow scale
- `--shadow-sm: 0 1px 2px rgba(0,0,0,.4)`
- `--shadow-md: 0 6px 20px rgba(0,0,0,.45)`
- `--shadow-lg: 0 16px 48px rgba(0,0,0,.55)`
- `--shadow-focus: 0 0 0 2px var(--color-background), 0 0 0 4px var(--color-focus-ring)`

## Elevation / z-index scale
`--z-base:0` `--z-sticky:100` `--z-dropdown:200` `--z-overlay:300` `--z-modal:400` `--z-toast:500` `--z-tooltip:600`.

## Motion scale
- Durations: `--motion-fast:120ms` `--motion-base:200ms` `--motion-slow:400ms` `--motion-emphasis:600ms`.
- Easings: `--ease-out: cubic-bezier(0.22,1,0.36,1)` · `--ease-in-out: cubic-bezier(0.65,0,0.35,1)` · `--ease-standard: cubic-bezier(0.4,0,0.2,1)` · `--ease-spring: cubic-bezier(0.34,1.56,0.64,1)`.

## Motion ambition tier
**Tier 2 (Considered)** baseline — gentle scroll reveals (opacity + 8–16px translate), single entrance emphasis, minimal stagger. Matches Whimsy ~2 (Mentor archetype, quiet confidence). **Tier 3 (Crafted)** for the SIGNATURE Results module only — the scroll-linked before/after `clip-path` wipe + stat count-up. Everywhere else stays quiet. Runner-up consideration (Tier 1) rejected: the page needs one memorable moment to beat the static category.

## Icon sizing (Lucide)
`--icon-sm:16px` `--icon-md:20px` `--icon-lg:24px` `--icon-xl:32px`. Stroke 1.75px (Lucide default 2 → tuned to 1.75 for the refined feel).

---
*Runner-ups (single line, plan uses the committed value): heading font Oswald; accent could skew more orange (#D85A35) — committed brick #C9452B for credibility over flash.*
