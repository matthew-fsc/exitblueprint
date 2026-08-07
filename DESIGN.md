# ExitBlueprint — Design System

Durable visual decisions for the ExitBlueprint marketing site. Refinement preserves this; a redesign replaces it.

## Direction contract

- **THESIS:** A precision diligence instrument dressed as a modern, trustworthy financial product. It refuses the dark/brass/serif "luxury deal document" look and the AI-default cream-serif-terracotta look. Calm light ground, one confident green, one bold dark instrument.
- **OWN-WORLD:** Off-white ground (`#EEEFEE`), crisp white surfaces, deep forest-green dark sections and footer, a single brand green used decisively, mint for accents and "ready" states. Grotesk display + humanist body + monospace reserved strictly for data (score codes, bands, scores, ranges). No decorative grid fields, no gradient text, no eyebrow on every section, no uniform card wall.
- **MODE:** Persuade. A first-time visitor knows what this is, why it matters, and what to do within seconds.
- **THE HERO'S JOB:** enablement, not fear. The headline says the advisor can now *run* the readiness and exit-preparation process; the loss argument is section two, where it reads as the reason rather than as the opening threat. The italic accent in the headline is a **one-word** device — four italic words across two lines read as a second headline rather than an accent.
- **READER:** The independent wealth manager, RIA principal, or multi-manager office partner who has business-owner clients — not the owner. The owner is a person the reader serves, and appears on the page only as the subject of the artifact. One buyer, one argument.

## Color tokens

Pinned palette (do not invent new brand colors):

| Token | Hex | Role |
|---|---|---|
| `--forest` | `#0C2218` | Dark sections, footer, score card; primary text on light (14.5:1) |
| `--brand` | `#438663` | The single confident brand green: accents, key marks |
| `--mint` | `#98D4AF` | Accents/highlights on dark, hovers. Not a score color — the tier ramp owns those |
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

**Tier ramp — multi-hue, ordinal, always labeled.** The single-hue green ramp is
retired: with three scores on screen at once it made a weak leg read as a slightly
duller green, which is the one thing the instrument exists to prevent. Hue now
carries the readiness signal, falling teal → green → amber → orange → red. These
are the five colors the app ships, so a score looks the same on the site and in
the product.

| Band | Light ground | On forest | Meaning |
|---|---|---|---|
| 85–100 / 90–100 | `#0E8F9E` | `#35B6C9` | Institutional Grade · Exit Ready |
| 70–84 / 70–89 | `#2F9E44` | `#46C46F` | Sale Ready · Well Positioned |
| 55–69 / 50–69 | `#9A7D0A` | `#D9B23A` | Needs Work · Developing |
| 40–54 / 30–49 | `#E0670F` | `#F0883C` | High Risk · Early Stage |
| <40 / <30 | `#C0362C` | `#EF6A5E` | Not Saleable (Yet) · Not Ready |

**Rule:** the light column runs 2.98–4.79 on the off-white — swatch contrast, not
text contrast. On a light section the ramp only ever paints a dot or a bar and the
label beside it stays in ink. The forest column (5.48–8.25) is the only place these
colors carry type. Every element that colors by tier reads one custom property,
`--tier`, set by a `.tier-*` class; the ramp changes in exactly one place.

## Logo

The master artwork lives in `brand/exit-blueprint-logo.svg` (light) and
`brand/exit-blueprint-logo-reversed.svg` (dark), and is the same mark the app
ships. It is **one piece of artwork**, never a mark plus live text — the site
inlines it once as `<symbol id="eb-logo">` and instances it with `<use>`, so the
nav and footer lockups cannot drift and the wordmark does not restyle itself when
a webfont falls back.

| Token | Light | On forest | Role |
|---|---|---|---|
| `--logo-green` | `#56916A` | `--mint` | The symbol + "Exit" |
| `--logo-ink` | `#37684D` | `--off` | "Blueprint" |

Three rules:

- **The logo tones are not site palette.** They belong to the mark. The page can
  restyle around them; the logo does not follow. Never wire the lockup to
  `--primary` / `--brand`.
- **The two tones are a contrast RELATIONSHIP, not two colors.** On light,
  "Blueprint" carries the dominant tone (6.4:1 on white) and the symbol + "Exit"
  the softer green. On forest that deep green drops to ~2.9:1, so the dark
  lockup **inverts the lightness order** — "Blueprint" takes the near-white ink
  (14.5:1), the symbol and "Exit" lift to mint (8.7:1). Same reading, dark ground.
- **The app tile is pinned in both grounds.** `favicon.svg` is the symbol
  reversed out of a forest tile and carries its own background on purpose: a tab
  strip is light in one browser and dark in the next. `apple-touch-icon.png` is
  the 180px raster of it, because iOS ignores an SVG touch icon and substitutes a
  screenshot of the page.

**Legibility floor: a 21px lockup** (= a 16px symbol). The hairline between the
bracket and the swoosh is 0.8 of the symbol's 31.2 units, so below that the two
shapes fuse into a blob. Nav is 24px, footer 28px, and 22px at ≤400px is the last
stop — the nav sheds its links, its login text and its button padding before the
mark is allowed to shrink further. Anything smaller needs a simplified cut of the
artwork, which is a brand decision, not a scale-it-down decision.

**Name.** The wordmark is one word, **ExitBlueprint**, matching the artwork; prose
follows it. The registered entity, *Exit Blueprint LLC*, keeps its own two-word
spelling in the IP and copyright lines — a legal fact, not a styling choice. Same
split the app makes in `shared/brand.ts`.

## Typography

Loaded from Google Fonts. Fraunces and the serif register are retired.

- **Display / headings:** Schibsted Grotesk, weights 600–800, tracking ~-0.03em, `text-wrap: balance`.
- **Body / UI:** Figtree, weights 400–600, line-height ~1.6, measure 60–75ch.
- **Data / annotation:** Spline Sans Mono, weights 400–500, `font-variant-numeric: tabular-nums`. Reserved for score codes (DRS, BAS, ORI), band labels, scores, ranges, step counters — never as generic "technical" decoration.

Scale: display clamp 40–72px; H2 clamp 26–38px; H3 20–22px; body 17px; small 14–15px; mono labels 11–13px.

## The hero's width split

`0.96fr / 1.04fr` with a 64px gap, which is a measured split rather than a taste one. Both sides are up against a hard number, and **they were measured with Figtree and Spline Sans Mono actually loaded** — a fallback font is 10–15% wider here and will tell you the opposite.

| Side | Binding constraint | Needs | Has |
|---|---|---|---|
| Readout | "Business attractiveness" on one line | 142px per tile | 150px |
| Text | The mono note on one line | 467px | 480px |

The readout's 150px comes from three places so no one of them has to give much: the column ratio, the card's 22px padding, and the 12px gap between tiles. The text column's constraint is the **note**, not the button row (420px) — which is counterintuitive and worth remembering before shortening the wrong string.

Re-measure with the real fonts before changing any of: the column ratio, the card padding, the leg gap, the note's wording, or `--maxw`.

## Layout & motion

- 8px spacing rhythm; radii `--r 14px` / `--r-sm 10px`; more space above a heading than below it.
- Section rhythm alternates light / forest to pace the scroll (Asana), not a uniform card grid.
- One authored motion moment: the three score rings sweep to their scores on load, staggered ~110ms apart so the row reads as a single gesture rather than three animations that happen to fire together. Sections rise once on first reveal; the evidence bars fill on reveal. All motion respects `prefers-reduced-motion`, under which the rings are simply set.
- Real hover / focus-visible / active states on every interactive element. Responsive to 360px.

## Signature

**The three-score readout:** three rings — DRS, BAS, ORI — on the forest-dark
card, the one bold moment on a calm page. It replaced a single needle gauge with a
"confidence range" beneath it, and both had to go: the product reports three scores
and never composites them, and it ships no confidence band at all.

The composition *is* the argument. Three separate readings that refuse to resolve
into one, in three different hues. **The card's caption is advisor-facing** — it
names what the client leaves the meeting holding and which leg the advisor is the
only one who can move — because the hero's job is the retention argument, not the
methodology one. The line naming the average the site will not print
(`Averaged, the sample owner above is a ~~63~~ … We never compute it.`) moved with
that argument into the method section, where it belongs and where the reader has
already been told why three numbers exist.

**The artifact panel** (`.doc-*`, "What the client gets") is the second signature and
the newer one: a light "document" that shows the *shape* of what an owner takes home —
letterhead, three readings, ranked gaps, disclaimer — in the same tokens and the same
tier ramp the product ships. It is a designed representation, labeled a sample at the
letterhead, not a screenshot and not any real client's numbers. The firm mark is a
dashed placeholder on purpose: the point of the beat is that the artifact carries the
*advisor's* brand, so it must not carry ours. **When the anonymized export from the
Deliverables studio exists, it replaces this panel** — that is the intended end state,
and the panel is the stand-in until then.

**The arithmetic** (`.calc-*`) ships with every field blank and stays in the page — no
submit, no network call, no storage. Blank is deliberate: the framework persuades only
when the advisor supplies their own figures, so the site presents the form and not a
filled-in example. Empty is styled as a *state* (`.is-empty` drops the total back to
muted mono) because an em dash at display weight reads as a redaction bar rather than
as an absent number. The firm-value line is always labeled illustrative.

Ring geometry is the app's, not an approximation of it: size, stroke at 9% of it,
radius on the stroke centreline, and the dash shortened by one stroke with the
sweep rotated forward by half of one — a round cap paints half a stroke of extra
arc past each end, so without the correction every ring renders long and starts
before twelve o'clock. A 78 is therefore the same picture here and in the product.
The number is printed in the markup and never animates; the ring is reinforcement.

## Calls to action

**Two paths, and they are not the same thing.** Signing up is the primary action; talking to a person is the alternative for those who want one. Keeping them distinct is the point — a page where every button does the same thing gives a ready visitor nowhere to go, and a page with two equal buttons makes them choose before they know enough to.

| Path | Label | Destination | Where |
|---|---|---|---|
| Primary | "Get started" | `https://app.exitblueprint.net/sign-up` | nav, hero, closing band, footer |
| Direct outreach | "Start the conversation" | the `#apply` form | the form's own submit button, plus a subordinate text link under the closing band's button |
| Returning | "Log in" | `https://app.exitblueprint.net/login` | nav, footer |

Rules that follow from that split:

- **"Start the conversation" is reserved for reaching out.** It never appears on a button that leads to sign-up. If a third path is ever added, give it its own verb rather than borrowing one of these.
- The direct-outreach link under the closing band is **text, not a second button**. It is the alternative, not a peer of the primary action.
- The form qualifies on **owner-client density**, which predicts fit better than AUM does; the owner's revenue and exit timeline are not asked, because the owner is not the buyer.
- The hero's two buttons must fit **one row** in the text column. That is the constraint on their labels, and it is why the secondary one is short.
- The nav button label has to clear the 360px nav, where the mark is already at its 22px legibility floor and cannot give up more width. "Get started" fits outright; a longer label needs the two-element `.nav-cta-long` / `.nav-cta-short` swap that used to live there.

## IP line (footer + any report)

The DRS, BAS and ORI methodology is proprietary IP of Exit Blueprint LLC. The scores are indicative, not a valuation, offer, or financial advice.
