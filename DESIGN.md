# Exit Blueprint — Design System

Durable visual decisions for the Exit Blueprint marketing site. Refinement preserves this; a redesign replaces it.

## Direction contract

- **THESIS:** A precision diligence instrument dressed as a modern, trustworthy financial product. It refuses the dark/brass/serif "luxury deal document" look and the AI-default cream-serif-terracotta look. Calm light ground, one confident green, one bold dark instrument.
- **OWN-WORLD:** Off-white ground (`#EEEFEE`), crisp white surfaces, deep forest-green dark sections and footer, a single brand green used decisively, mint for accents and "ready" states. Grotesk display + humanist body + monospace reserved strictly for data (dimension codes, weights, scores, ranges). No decorative grid fields, no gradient text, no eyebrow on every section, no uniform card wall.
- **MODE:** Persuade. A first-time visitor knows what this is, why it matters, and what to do within seconds.

## Color tokens

Pinned palette (do not invent new brand colors):

| Token | Hex | Role |
|---|---|---|
| `--forest` | `#0C2218` | Dark sections, footer, gauge card; primary text on light (14.5:1) |
| `--brand` | `#438663` | The single confident brand green: accents, key marks |
| `--mint` | `#98D4AF` | Accents/highlights on dark, gauge "ready" states, hovers |
| `--off` | `#EEEFEE` | Page ground and light surfaces |

Derived roles (WCAG AA verified):

| Token | Hex | Role / contrast |
|---|---|---|
| `--primary-strong` | `#3C7A59` | Button fill; white label AA 5.1 |
| `--primary-hover` | `#357050` | Button hover |
| `--primary-ink` | `#2C5B42` | Brand text/links on light; AA 6.8 |
| `--ink` | `#0C2218` | Primary text on light |
| `--ink-muted` | `#556158` | Secondary text on light; AA 4.9 |
| `--on-dark` | `#EEEFEE` | Text on forest |
| `--on-dark-muted` | `#A9BBB1` | Secondary text on forest; AA 8.3 |
| `--surface` | `#F7F8F5` | Warm off-white lift |
| `--card` | `#FFFFFF` | Crisp card surface |
| `--forest-lift` | `#143A2B` | Raised dark rows |
| `--line` | `#DCDDD9` | Hairline borders on light |
| `--line-2` | `#CBCDC7` | Stronger borders |

**Rule:** mint is never text on a light ground (fails contrast); use it on forest or as a fill. Buttons use `--primary-strong`, not raw `--brand`, so white labels pass AA.

**DRS score ramp (Option A — single-hue green):** `[0,40] #3E5A4C` · `[40,55] #4E7B63` · `[55,70] #438663` · `[70,85] #5FB488` · `[85,100] #98D4AF`. Risk reads dim/desaturated; readiness reads bright mint.

## Typography

Loaded from Google Fonts. Fraunces and the serif register are retired.

- **Display / headings:** Schibsted Grotesk, weights 600–800, tracking ~-0.03em, `text-wrap: balance`.
- **Body / UI:** Figtree, weights 400–600, line-height ~1.6, measure 60–75ch.
- **Data / annotation:** Spline Sans Mono, weights 400–500, `font-variant-numeric: tabular-nums`. Reserved for dimension codes (RQ, FI, OI, CR, MT, GD), weights, scores, ranges, step counters — never as generic "technical" decoration.

Scale: display clamp 40–72px; H2 clamp 26–38px; H3 20–22px; body 17px; small 14–15px; mono labels 11–13px.

## Layout & motion

- 8px spacing rhythm; radii `--r 14px` / `--r-sm 10px`; more space above a heading than below it.
- Section rhythm alternates light / forest to pace the scroll (Asana), not a uniform card grid.
- One authored motion moment: the DRS gauge needle springs to score on load. Sections rise once on first reveal; method bars fill on reveal. All motion respects `prefers-reduced-motion`.
- Real hover / focus-visible / active states on every interactive element. Responsive to 360px.

## Signature

The DRS gauge: a 180° semicircular instrument on a forest-dark card, the one bold moment on a calm page. Reinforced by the monospace data layer.

## Auth

Primary "Start the assessment" and "Log in" actions route to `https://app.exitblueprint.net`. The lead-capture form is preserved as a secondary "guided assessment" contact option.

## IP line (footer + any report)

The DRS methodology is proprietary IP of Fracture Systems, licensed to Exit Blueprint. The score is indicative, not a valuation, offer, or financial advice.
