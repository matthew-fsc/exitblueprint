# Exit Blueprint — Build Brief for Claude Code

Build the marketing site and the diligence-readiness assessment for **Exit Blueprint** (exitblueprint.net). The copy and scoring model below are final. The job is to ship a polished, production-quality build. Earlier I prototyped this as two raw HTML files. The language is good. The visuals were rough. Take the model and voice below and execute them at a much higher craft level.

Hard rule on voice: no em dashes anywhere in product copy. Use periods, commas, or colons. En dashes are fine only inside numeric ranges (for example 85–100).

---

## 1. What this is

Exit Blueprint scores how prepared a business is to survive buyer diligence with its valuation intact, and ties that to the owner's personal and financial readiness to exit. The headline metric is the **Diligence Readiness Score (DRS)**, a 0–100 composite. The brand identity is architectural precision rendered as a premium deal document. Think measured instruments, hairline rules, monospace annotation, not literal blueprint clipart.

Audience: business owners, M&A advisors, exit planners (CEPA), PE acquirers, wealth managers, independent sponsors.

IP line that must appear in the footer and report disclaimer: the DRS methodology is proprietary IP of Exit Blueprint. The score is indicative, not a valuation, offer, or financial advice.

---

## 2. Stack and structure

- Vite + React + TypeScript + Tailwind CSS.
- Framer Motion for motion. Respect `prefers-reduced-motion` everywhere.
- Build to a static bundle deployable to Cloudflare Pages, Netlify, or Vercel. No required backend.
- Routes: `/` (landing) and `/assessment`.
- Keep the scoring model and question bank in a typed data module (`src/lib/model.ts`) separate from UI. The scoring engine (`src/lib/score.ts`) must be pure and unit-tested with Vitest.
- Lead capture posts JSON to `import.meta.env.VITE_LEAD_ENDPOINT`. If unset, the form confirms locally and offers the printable report. Never block on it.

Suggested layout:
```
src/
  routes/        Landing.tsx, Assessment.tsx
  components/    Gauge.tsx, DimensionBar.tsx, QuestionCard.tsx, Stepper.tsx,
                 ReadinessLeg.tsx, GapCard.tsx, LeadForm.tsx, Nav.tsx, Footer.tsx
  lib/           model.ts, score.ts, score.test.ts, types.ts
  styles/        tokens.css
```

---

## 3. Information architecture

### Landing (`/`)
1. Sticky nav: wordmark "Exit Blueprint" with a monospace tag, links (Method, Process, Who it's for), primary CTA "Start the assessment".
2. Hero: thesis plus a live precision DRS gauge that sweeps to a sample score on load.
3. The problem: diligence is where the price gets re-cut.
4. The method: the six weighted DRS dimensions.
5. The trifecta: business, financial, and personal readiness, and why a high DRS with low personal readiness still stalls a deal.
6. Reading the score: the five tier bands.
7. Process: Profile → Assess → Score → Roadmap.
8. Who it's for.
9. Beyond the score: DRS, EBITDA recast, EV gap, initiative roadmap.
10. CTA band into the assessment.
11. Footer with the IP line.

### Assessment (`/assessment`)
Flow: Intro → Exit Profile → six DRS categories → Financial Readiness → Personal Readiness → Results. A persistent progress indicator. Back and forward navigation that preserves answers. Each step validates that every question is answered before advancing.

Offer two modes on the intro: **Quick** (one signature question per DRS category plus the profile, about 4 minutes) and **Full** (the complete bank below, about 10 minutes). Same engine, Quick just hides the non-signature questions. Mark the signature question per category in the data so Quick mode is a filter, not a fork.

---

## 4. The scoring model

Three readiness legs. The DRS is the headline. Financial and Personal are secondary gauges. The Exit Profile is unscored and drives the synthesis.

### 4.1 Business Readiness — the DRS

Composite = sum of (category mean × category weight), rounded. Weights sum to 1.0.

| Code | Category | Weight |
|------|----------|--------|
| RQ | Revenue Quality | 25% |
| FI | Financial Integrity | 20% |
| OI | Operational Independence | 20% |
| CR | Customer Risk | 15% |
| MT | Management & Team | 10% |
| GD | Growth Drivers | 10% |

Each category mean is the simple average of its question scores (0–100). Every question is multiple choice, options ordered best to worst, each carrying a point value. The first question listed in each category is the **signature** question used in Quick mode.

**Revenue Quality (RQ)**
1. (signature) What share of active customers have a signed contract, MSA, or retainer in place? `>75% = 100 / 50–75% = 70 / 25–50% = 40 / <25% = 10`
2. What share of revenue is contractually recurring? `>60% = 100 / 30–60% = 70 / 10–30% = 40 / <10% = 15`
3. What share of revenue depends on the owner's personal relationships? `<10% = 100 / 10–25% = 65 / 25–50% = 35 / >50% = 10`
4. If you raised prices 10 to 15%, what would happen? `Minimal churn, already tested = 100 / Some churn, manageable = 65 / Significant risk, untested = 30 / Would likely lose major accounts = 10`
5. Net revenue retention over the last three years? `Above 100%, net expansion = 100 / 95–100% = 75 / 85–95% = 45 / Below 85% = 15`

**Financial Integrity (FI)**
1. (signature) Highest level of outside review on your financials? `Audited = 100 / Reviewed by a CPA = 75 / Compiled = 45 / Internal or owner-kept only = 15`
2. How much clean financial history can you provide? `36+ months, clean = 100 / 36 months with gaps = 60 / 24 months = 35 / Under 24 or disorganized = 10`
3. Are owner addbacks and one-time items documented and defensible? `Fully documented with support = 100 / Mostly, some gaps = 65 / Informal, in the owner's head = 30 / Not tracked = 10`
4. Related-party transactions with owner-affiliated entities? `None, or fully disclosed and arm's length = 100 / Some, documented = 60 / Some, undocumented = 25 / Significant or unclear = 10`
5. Books cadence and basis? `Monthly close, accrual, reconciled = 100 / Quarterly = 65 / Annually at tax time = 30 / Behind or unreconciled = 10`

**Operational Independence (OI)** — absorbs the PDF's Owner Dependence section
1. (signature) If the owner were unavailable for 90 days, the business would... `Run normally = 100 / Run with minor friction = 70 / Struggle in key areas = 35 / Not function = 10`
2. Owner hours per week in day-to-day operations? `Under 10 = 100 / 10–25 = 70 / 25–40 = 40 / 40+ = 10`
3. Share of core processes with written SOPs (onboarding, delivery, account management, billing)? `Over 75% = 100 / 50–75% = 65 / 25–50% = 35 / Under 25% = 10`
4. How many core functions (sales, delivery, finance, operations) have a manager who could run them without the owner? `All four = 100 / Two to three = 65 / One = 35 / None = 10`
5. Are customer relationships institutionally managed or founder-owned? `Institutionally managed = 100 / Mostly institutional = 65 / Mixed = 35 / Founder-owned = 10`

**Customer Risk (CR)**
1. (signature) Largest single customer as a share of revenue? `<10% = 100 / 10–20% = 70 / 20–35% = 35 / >35% = 10`
2. Top five customers as a share of revenue? `<40% = 100 / 40–60% = 65 / 60–80% = 35 / >80% = 10`
3. Change-of-control or termination-for-convenience clauses in key contracts? `None = 100 / A few, low risk = 65 / Some, material = 30 / Widespread = 10`
4. What governs your customer relationships? `Mostly MSAs or multi-year = 100 / Annual agreements = 65 / POs or month-to-month = 35 / Verbal = 10`
5. Customer churn over the last three years? `Low and improving = 100 / Low and stable = 70 / Moderate = 35 / High = 10`

**Management & Team (MT)**
1. (signature) Is there a leadership layer below the owner? `Capable and tested = 100 / Forming = 60 / Thin = 30 / None = 10`
2. Share of key employees under non-compete or non-solicit agreements? `All key people = 100 / Most = 60 / Some = 30 / None = 10`
3. Voluntary turnover of non-owner employees over the last 12 months? `Very low = 100 / Low = 70 / Moderate = 35 / High = 10`
4. Financial leadership in place? `Dedicated CFO or controller = 100 / Fractional or outsourced = 65 / Bookkeeper only = 35 / Owner keeps the numbers = 15`
5. Are key people retained with incentives that survive a sale? `Yes, in place = 100 / Partially = 55 / Informal only = 30 / None = 10`

**Growth Drivers (GD)**
1. (signature) Do you have a documented, credible growth pipeline (need, budget, timeline)? `Yes, quantified = 100 / Directional = 60 / Anecdotal = 30 / None = 10`
2. Revenue trend over the last three years? `Consistent growth = 100 / Flat to modest growth = 65 / Choppy = 35 / Declining = 10`
3. Standardized and repeatable vs fully custom work? `Mostly standardized = 100 / Balanced = 65 / Mostly custom = 35 / Fully bespoke = 20`
4. Clear expansion levers a new owner could pull (geographies, products, channels)? `Several identified = 100 / A couple = 60 / Vague = 30 / None = 10`
5. Market positioning? `Differentiated leader = 100 / Strong competitor = 70 / Undifferentiated = 35 / Losing ground = 10`

### 4.2 Financial Readiness (secondary gauge, simple average)
1. How dependent is your future lifestyle on a specific sale price? `Independent of any single outcome = 100 / Some flexibility = 65 / Heavily dependent = 30 / Entirely dependent = 10`
2. Do you have sufficient assets outside the business to retire? `Yes, comfortably = 100 / Mostly = 65 / Partially = 35 / No = 10`
3. Confidence that the current value supports your goals? `High, recently valued = 100 / Some = 60 / Low = 30 / Never formally valued = 15`
4. Are personal debt and guarantees consistent with your exit timeline? `Fully aligned = 100 / Mostly = 65 / Some tension = 30 / Misaligned = 10`
5. How much ongoing income do you need from the business after exit? `None needed = 100 / Some, flexible = 65 / Significant = 35 / Fully reliant = 15`

### 4.3 Personal Readiness (secondary gauge, simple average)
1. Clarity on staying involved vs leaving after the sale? `Clear and settled = 100 / Leaning one way = 65 / Unsure = 35 / Conflicted = 15`
2. Defined role post-close and a transition plan? `Defined plan = 100 / Rough idea = 60 / None yet = 30 / Would not disengage = 10`
3. A clear next chapter beyond the business? `Clear = 100 / Some idea = 60 / Vague = 30 / None = 15`
4. Clarity of your exit timeline? `Specific timeline = 100 / A range = 65 / Loose = 35 / Undecided = 15`

### 4.4 Exit Profile (intake, unscored)
1. After the sale, do you intend to: `Stay involved / Transition out over time / Fully exit / Step away but keep ownership`
2. Preferred exit path: `Third party / Management or employees / Partner / Family / Recapitalize and step away`
3. Rank what matters most (drag to order): `Maximize price / Protect employees / Preserve legacy / Maintain family ownership / Exit quickly / Reduce risk / Create ongoing income`
4. Target timeline: `Under 1 year / 1 to 2 years / 3 to 5 years / 5+ years / Just exploring`

### 4.5 Tier bands (applied to the DRS)
| Range | Tier | Implied time to ready |
|-------|------|----------------------|
| 85–100 | Diligence Ready | Ready now, protect the score |
| 70–84 | Market Ready | 3 to 6 months |
| 55–69 | Conditional | 6 to 12 months |
| 40–54 | High Risk | 12 to 18 months |
| < 40 | Pre-Diligence Required | 18+ months, foundational work |

### 4.6 Confidence band
Self-report is noisy, so present a band, not a false-precision point. Width grows when categories are uneven.
```
mean = average(categoryScores)
sd   = stdev(categoryScores)
width = clamp(4, round(sd / 5 + 4), 11)
conservative = max(0, DRS - width)
optimistic   = min(100, DRS + ceil(width * 0.65))
```

### 4.7 Gap ranking and initiatives
Rank the six categories by weighted shortfall `(100 - score) * weight`, descending. Show the top three. For each, pull a recommendation by severity: `score < 50` uses the `critical` copy, otherwise `tighten`.

```
RQ critical: Convert your top accounts to signed MSAs and shift project work toward retainer or recurring terms. Recurring revenue is the single largest lever on the multiple.
RQ tighten:  Tighten contract coverage on your largest accounts and document renewal terms before a buyer asks for them.

FI critical: Commission a CPA review or quality-of-earnings prep and build a documented, classified addback schedule. Undocumented addbacks get disallowed and pull EBITDA down.
FI tighten:  Move to a monthly close and reconcile your statements to your tax returns so the numbers survive a quality-of-earnings review.

OI critical: Document core SOPs and pull the owner out of daily decision paths. Owner dependence is the most common reason a buyer discounts or restructures the deal.
OI tighten:  Build backup for any single point of failure and delegate decision authority into a second layer of leadership.

CR critical: Reduce concentration by growing the long tail and lock key accounts under multi-year contracts. Concentration above 20% invites escrow and earnouts.
CR tighten:  Put renewal terms and signed contracts around your top accounts to harden retention against scrutiny.

MT critical: Build a leadership layer below the owner and add retention incentives that survive a sale. Buyers price the team that stays, not the one that leaves.
MT tighten:  Formalize incentives and a succession path so the business demonstrably runs without you.

GD critical: Document a credible, quantified growth pipeline and name the expansion levers a new owner can pull. Buyers pay for a growth story they can run.
GD tighten:  Sharpen your differentiation and quantify the pipeline so growth reads as repeatable, not anecdotal.
```

### 4.8 Exit Alignment synthesis (the payoff)
This is what makes the two questionnaires one tool. Compute implied months-to-ready from the DRS tier (`Diligence Ready = 0, Market Ready = 6, Conditional = 12, High Risk = 18, Pre-Diligence = 24`). Map the stated timeline to months (`Under 1 year = 12, 1 to 2 = 24, 3 to 5 = 48, 5+ = 60, Just exploring = null`). Produce one short verdict paragraph:

- If `implied > statedMonths`: timeline is compressed. Name the gap in months and point to the top two initiatives as the fastest path.
- If `implied` is well under `statedMonths`: there is runway. Recommend sequencing value-creation work now while the multiple can still be moved.
- Always weave in the owner's number one ranked priority. If it is "Exit quickly" and the DRS is below Market Ready, flag the tension directly. If it is "Maximize price" and there is a value gap, point at it. If "Protect employees" or "Preserve legacy" ranks first, note that buyer type and deal structure matter as much as price.
- If Financial Readiness or Personal Readiness is materially lower than the DRS, say so plainly: a sale-ready business does not close if the owner is not personally or financially ready.

---

## 5. Report (results screen)

1. Headline DRS gauge (the precision instrument), tier label, confidence band with conservative, base, optimistic.
2. The Exit Alignment verdict paragraph.
3. Three readiness legs side by side: Business (DRS), Financial, Personal, each a compact gauge or bar with its score and a one-line read.
4. Dimension breakdown: the six DRS categories as bars colored by their own tier, each with score and weight.
5. Where to start: the top three ranked gaps with initiative copy.
6. Lead form (name, company, email) posting to `VITE_LEAD_ENDPOINT`, including the DRS, tier, both readiness legs, the profile, and all answers in the payload. Inert and locally-confirming if no endpoint is set.
7. Actions: Save as PDF (clean print stylesheet), Retake.
8. Disclaimer with the IP line.

Print stylesheet must hide nav, form, and actions, flatten the dark cards to ink-on-white, and keep each panel from breaking across pages.

---

## 6. Design system

This is where the prototype fell short. Hold a high bar. Spend the boldness on the gauge instrument and keep everything else quiet and precise.

**Palette**
```
--ink:      #16201E   deep petrol-black, primary text and dark sections
--ink-2:    #1F2C29
--paper:    #F4F1E9   warm bone background
--paper-2:  #EAE5D8   panel tint
--card:     #FBFAF5
--line:     #CFC8B6   hairline rules
--brass:    #9A742B   primary accent, value and premium
--brass-soft:#B9954A
--emerald:  #1F6F5C   ready states
--amber:    #BE8418   caution
--clay:     #A6402E   risk
--mut:      #5C645F   secondary text
```
Score scale for gauges and bars: `<40 clay, 40–54 amber, 55–69 brass-soft, 70–84 emerald, 85+ deep emerald #2E8C73`.

**Type**
- Display: Fraunces, used large and sparingly for headlines and scores.
- Body: Hanken Grotesk.
- Utility and annotation: IBM Plex Mono for eyebrows, dimension codes (RQ, FI, OI, CR, MT, GD), weights, score labels, step counters. This monospace annotation layer is the signature. Use it with restraint.
- Set a deliberate type scale. Headlines should clamp responsively. Do not let the mobile hero shrink to mush.

**The gauge (get this right)**
A 180 degree semicircular instrument. Five colored tier zones along the arc, a needle that animates to the score, a hub, and the numeric score below. Geometry that is known to render correctly:
```
cx = 160, cy = 160, r = 130
track path: M30 160 A130 130 0 0 0 290 160      (top semicircle, sweep-flag 0)
point(score): x = cx - r*cos(PI*score/100), y = cy - r*sin(PI*score/100)
zone arc(a,b): M point(a) A130 130 0 0 0 point(b)
needle rotation deg: -90 + (score/100)*180   (needle base points straight up at score 50)
```
Zones: `[0,40] clay, [40,55] amber, [55,70] brass-soft, [70,85] emerald, [85,100] deep emerald`. Animate the needle with a spring on mount and on result. Respect reduced motion by jumping to final state.

**Polish the prototype was missing**
- A consistent 8px spacing rhythm and a single border-radius token. No mismatched radii.
- Real hover, active, focus-visible, and selected states on every interactive element. Selected answer should read instantly.
- Smooth, short transitions between assessment steps (fade and slight rise), not instant swaps.
- The dark gauge card must reflow cleanly on mobile. The three readiness legs stack, not squish.
- Dimension bars animate their fill on reveal.
- Keyboard: full tab order, visible focus rings, radio groups arrow-navigable, Enter advances.
- A quality floor: responsive to 360px, AA contrast, reduced motion honored, no layout shift on font load (preload fonts).

**Signature element**
The precision DRS instrument on the hero and the result, reinforced by the monospace annotation system (codes, weights, measured labels) reading like the margin notes on a technical drawing.

---

## 7. Copy to preserve (voice is approved)

Hero eyebrow: `DILIGENCE READINESS SCORE`
Hero headline: `Know what the buyer will find. Before they find it.` (italicize "Before" in the brass accent)
Hero lead: `Most value is lost in the deal, not at the offer. Exit Blueprint scores how prepared your business is to survive buyer diligence with its valuation intact.`
Hero note: `~10 minutes. Three readiness legs. No financials required.`

Problem section big line: `A clean offer means little. Diligence is where the price gets re-cut.`

Method intro: `The Diligence Readiness Score is a single 0 to 100 measure built from the six categories a private equity buyer interrogates first. Each is weighted by how heavily it moves a valuation.`

Process steps: `Profile / Assess / Score / Roadmap` with one-line descriptions.

CTA band: `Find your Diligence Readiness Score.` / `Ten minutes today is cheaper than a re-trade at the closing table.`

Tier descriptions, dimension descriptions, and initiative copy: use the strings in section 4. Keep them verbatim.

Keep the register plain, direct, and confident. Active voice. No filler. No em dashes.

---

## 8. Engineering requirements

- Pure scoring engine in `src/lib/score.ts`: `computeDRS(answers)`, `computeLeg(answers, leg)`, `tierFor(score)`, `confidenceBand(categoryScores)`, `rankGaps(categoryScores)`, `alignment(drs, profile, financial, personal)`. No DOM, no React.
- Vitest coverage on the engine: weights sum to 1.0, all-best yields 100, all-worst yields the floor, a mixed fixture yields a known value, band math, gap ordering, alignment branches.
- Question bank fully typed in `src/lib/model.ts`. Adding or reweighting a question should require no UI changes.
- No browser storage APIs unless you add an explicit "resume later" feature. If you do, guard it and keep it optional.
- Lead payload posts only on user submit, only to the configured endpoint. No third-party calls otherwise.
- Add a favicon and an Open Graph preview image (the gauge instrument on ink, with the wordmark).

---

## 9. Acceptance criteria

1. `/` and `/assessment` build and deploy as a static bundle.
2. The full bank from section 4 is present and scored exactly as specified. DRS weights produce 100 for all-best and the correct floor for all-worst.
3. Quick mode filters to the signature questions plus the profile and still produces a valid DRS.
4. Results show the DRS gauge, confidence band, the alignment verdict, three readiness legs, the six-dimension breakdown, and the top three ranked gaps with the correct severity copy.
5. The gauge needle and tier zones align with the score at 0, 50, and 100. Verify visually.
6. Print to PDF produces a clean, single-brand report.
7. Responsive to 360px, keyboard navigable, focus-visible, reduced motion honored.
8. No em dashes in any rendered copy. The IP and disclaimer line is present in the footer and the report.

---

## 10. Notes for the build

I have two reference HTML files from the prototype (`index.html`, `assessment.html`). Drop them in a `/reference` folder if useful. They carry the approved copy and a working version of the DRS weighting and the gauge math. Treat them as a content and logic reference, not a visual target. The visual target is section 6.

Source questionnaires this model merges: a six-category diligence-readiness questionnaire (the business, scored as the DRS) and an owner exit-readiness questionnaire covering exit goals, personal finance, value, and owner dependence (the owner, scored as the Financial and Personal legs, with owner dependence folded into Operational Independence). Both are reflected in section 4.
