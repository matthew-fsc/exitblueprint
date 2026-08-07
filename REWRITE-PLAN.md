# Website Rewrite Plan

**Status:** Proposal for Matthew. Nothing here is built yet. Copy decisions and the
audience line are product/positioning calls; this doc recommends, it does not decide.

**What this is.** A plan to rewrite exitblueprint.net so it argues the position the
company actually sells today. The visual system is not the problem and is not being
replaced. The argument is the problem.

---

## 1. Where this plan comes from

Read for this plan, in order of authority:

| Source | What it settles |
|---|---|
| `exitblueprint-mvp/CLAUDE.md`, opening paragraph | The audience line, now resolved: distributed through the advisors who hold the owner's wealth relationship — independent wealth managers, RIAs, multi-manager / multi-family offices first, CEPA / M&A adjacent. **The lead message is retention.** |
| `docs/messaging-plan-platform-gaps.md` | The wealth-manager Messaging & Marketing Plan graded against shipped code. Gives the four-pillar message spine and, more usefully, the list of claims the product cannot yet support. |
| `docs/planning-partner-consensus-gaps.md` | The eMoney line — a design partner's own statement of where our lane ends. The most credible thing the site can say to an RIA. |
| `docs/47-workspace-grouping-strategy.md` | The four pillars already used as the product's own IA spine. Site and app should not organize the same idea two different ways. |
| `docs/44-gtm-readiness-review.md` | The motion is a hand-provisioned design-partner pilot. Not self-serve. This directly contradicts the site's primary CTA. |
| `docs/20`, `docs/36`, `docs/copy-audit.md` §voice | Positioning, the competitive frame, and the existing house voice (including the four *internal* messaging pillars and "the advisor stays the expert"). |
| `DESIGN.md` (this repo) | The visual system. Preserved. |

**One assumption to confirm.** "The newly solidified product vision document" is read
here as the *Go-To-Market Foundation: Messaging Plan and Initial Marketing Plan* (the
wealth-manager positioning draft) as it now stands reflected in `CLAUDE.md` and the two
gaps docs. That draft itself is not in either repo. If there is a newer or different
document, drop it in `exitblueprint-mvp/docs/` and this plan gets reconciled against it
before any copy is written — §11 lists what would move.

**Note on a name collision.** There are two sets of "four pillars": the marketing plan's
(*get in early / be the hub / own the outcome / win the next one*) and the copy-audit
voice pillars (*no assumptions / context over data / the advisor is made more valuable /
we adapt to how advisors work*). The first is the site's **structure**; the second is the
site's **voice test**. Neither name reaches the page.

---

## 2. The gap, stated plainly

The site sells a score to an owner. The company sells retention to an advisor.

| | Site today | What we sell |
|---|---|---|
| Who it talks to | The owner ("Know what the buyer will find") | The advisor who holds the wealth relationship |
| What it sells | A diligence readiness score | Staying in the room through the liquidity event |
| Emotional lead | Fear of a re-trade at closing | Losing the client at the wire transfer |
| Timing | Deal-adjacent | 12–36 months pre-deal, starting in a normal review |
| Who it's for | Six audiences listed flat: owners, M&A advisors, CEPA, PE acquirers, wealth managers, independent sponsors | One buyer, one adjacent expansion |
| Primary CTA | "Start the assessment" → `app.exitblueprint.net/sign-up` | There is no self-serve motion. `docs/44` says explicitly not to turn one on. |
| Lead form asks | The owner's annual revenue | Firm, role, size of the owner book |

The last two rows are the urgent ones. **The site's main button points at a signup flow
the go-to-market says should not exist yet.** Every visitor who takes the primary action
lands somewhere the motion cannot serve them. That is worth fixing ahead of any rewrite.

What is genuinely good and survives: the three-score argument (`Three scores. Never
averaged.`), the ring readout, the tier ladders, the determinism claim, and the whole
visual system. The rewrite keeps the instrument and changes whose hand it is in.

---

## 3. The argument the new site makes

One spine, six beats. Each beat is a section; each traces to a pillar.

1. **The asset you don't manage.** ~80% of the client's net worth sits in the one asset
   that never appears on your statement, and the event that converts it is the event
   that decides who manages the proceeds. *(the loss)*
2. **You are already the first call. This makes you the one who runs the process.**
   Not a new relationship — the existing one, extended into the transaction.
   *(pillar 1 + the coordination idea)*
3. **A reading the client can act on, and you can sign.** Three scores, never averaged,
   rule-based and versioned. A fiduciary can put their name on it because nothing in it
   was written by a model. *(the method — mostly kept as-is)*
4. **What it does on a Tuesday.** Quarterly re-scoring, deltas, a better annual review.
   The near-term value, foregrounded — the marketing plan's #1 named risk is a demo
   about a transaction three years out. *(pillar 1, near-term)*
5. **One picture the CPA, the attorney and the banker all work from.** Scoped to what is
   actually shipped — see §6. *(pillar 2)*
6. **Where our lane ends.** We are not your planning stack. We hand it better inputs.
   *(pillar 3, honestly bounded — this is the trust move)*

Then: the deliverable you put in front of a prospect *(pillar 4)*, who it's for
(narrowed), and a CTA that fits a hand-provisioned pilot.

---

## 4. The coordination idea, without the metaphor

Internally this is "advisor-as-quarterback" (`docs/copy-audit.md`, `docs/06-decisions.md`).
The idea is right and should drive the site. The word must never appear on it, and neither
should anything that rhymes with it.

**The idea, unpacked into what it actually claims:**
the advisor convenes the other professionals rather than being convened by them; they hold
the sequence; they are the continuity across a process where everyone else is transactional
and temporary; and they arrive at the liquidity event as a participant rather than a
spectator.

**Banned — sports register.** quarterback, QB, call the plays, playbook, game plan, coach,
huddle, red zone, MVP, down the field, home stretch, team sport, in your corner, heavy
lifting, punch above.

**Banned — adjacent cheese.** unlock value, supercharge, game-changer, seamless, empower,
"your client's biggest asset deserves…", "sleep at night", "Silver Tsunami", exclamation
points, emoji. (The last two are already house rules in `docs/copy-audit.md`.)

**Approved register — standing, sequence, continuity.** Prefer verbs that describe what
the advisor actually does: *convene, sequence, coordinate, hold, run, stay, arrive*.

Sentences that carry the idea and pass the test:

- "You stay in the room through the transaction, not until it starts."
- "One process the CPA, the attorney and the banker all work from — yours."
- "The advisor stays the expert." *(already shipped in the app's `AuthShell`; reuse it)*
- "Everyone else at the table is temporary. You are the continuity."
- "Arrive at the liquidity event as the person who ran the preparation, not the person
  who gets the call afterward."
- "Coordination is the deliverable."

**The test for any new line:** does it describe a thing the advisor does, in a sentence a
compliance officer would not blink at? If it describes a feeling, or borrows a costume from
another profession, cut it.

---

## 5. Information architecture

Home page sections, replacing the current eleven:

| # | Section | Ground | Status |
|---|---|---|---|
| 1 | Nav — Method · How it works · For owners · Security · Log in · **Book a working session** | light | CTA changed |
| 2 | Hero — the retention thesis + the three-ring readout, reframed as *what you hand a client* | light | rewritten, instrument kept |
| 3 | The loss — the asset you don't manage; the event that reassigns it | forest | rewritten |
| 4 | The position — you already hold the relationship; this extends it into the transaction | light | new |
| 5 | The method — three scores, never averaged; deterministic; versioned | light | **kept**, lead-in retargeted to the advisor |
| 6 | On a Tuesday — re-score, delta, annual review | surface | new |
| 7 | One picture everyone works from | forest | new, scoped per §6 |
| 8 | Where our lane ends — the planning stack stays yours | light | new |
| 9 | What you put in front of a prospect — white-labeled deliverables | surface | reworked from "Beyond the Scores" |
| 10 | Revenue at stake — the interactive worksheet | light | new, §8 |
| 11 | Who it's for — wealth managers, RIAs, multi-family offices; CEPA / M&A named second | light | narrowed from six flat audiences |
| 12 | CTA — book a working session; existing advisors log in | forest | CTA changed |
| 13 | Footer + IP line | forest | kept |

Secondary pages:

- **`/method`** — the methodology at depth. Three legs, sub-scores, the two band ladders,
  rubric versioning, why nothing is averaged, why no model touches a number. The page an
  advisor forwards to a skeptical colleague. Pulls from `docs/07`.
- **`/for-owners`** — the current site's argument, demoted and preserved. Owners do land
  here, and advisors need something to send a client. This is where "Know what the buyer
  will find" belongs. It keeps the guided-assessment form.
- **`/security`** — vendor diligence posture: multi-tenant isolation, RLS, data handling,
  subprocessors, export-for-archiving. An RIA's compliance officer will ask before the
  principal signs. Source material already exists (`docs/13`, `docs/16`, `docs/42`) and
  needs a public-safe reduction, not new work.

Deliberately **not** built: pricing (comped design partners), blog, self-serve signup.

---

## 6. The claims register — what the site may not say

The marketing plan's pillars run ahead of the build in specific, known places. Every claim
on the new site traces to shipped code or does not ship. From
`docs/messaging-plan-platform-gaps.md`:

| Claim | Verdict | The honest version |
|---|---|---|
| Advisors retain assets through the liquidity event at rate X | **Cannot say.** Retention is uninstrumented; no field feeds it. | Say nothing numeric. The claim becomes available only after the retention instrumentation lands. |
| The CPA / attorney / banker *transact* in your platform — assigned tasks, shared data room | **Cannot say.** Collaborators are read-only observers; no document access, no actionable assignment. | "Invite the CPA, the attorney and the banker into the same readiness picture, so the conversation starts from one set of facts." |
| We model post-close cash flow / retirement income / drawdown | **Cannot say, and should not build.** Explicitly on the wealth-manager's side of the design partner's line. | "Net proceeds, in a form your planning software can take." Lane-boundary copy is an asset here, not a hedge. |
| "Valuation" | **Landmine word.** | "Value range" / "value estimate." Matches the app's own language pass. |
| Tax figures | Blended-rate estimate only. | Frame for discussion with the client's CPA. Keeps the advisor in-lane and makes the CPA an ally. |
| "Assessment in ~10 minutes" | Owner-facing framing of a 48-sub-score intake. | Fine on `/for-owners`; wrong as an advisor-facing promise. |

Gate: **no statistic on the site without a source line, and no capability claim without a
shipped surface behind it.** A reviewer should be able to walk the page and point at the
code for each one.

---

## 7. What is preserved

`DESIGN.md` is recent, coherent and matched to the app. It is not reopened.

- Palette, tier ramp, logo rules, type scale, 8px rhythm, section alternation — unchanged.
- The three-ring readout stays the signature. Its geometry matches the app's dial; a 78 is
  the same picture in both places. Only its caption changes.
- Motion, reduced-motion behavior, focus states, 360px floor — unchanged, and re-verified
  on every new page.

`claudebrief.md` should be **retired in this rewrite.** It describes a single composite
0–100 DRS with a confidence band, which the product's non-negotiable rules now forbid
(three scores, never combined). Leaving a superseded brief at the repo root is how a future
session rebuilds the wrong thing. Replace it with this plan plus `DESIGN.md`.

---

## 8. Technical plan

Today: one hand-authored 70KB `index.html`, GitHub Pages, deployed by `.github/workflows/static.yml`
on push to `main`. No build step, no dependencies. That simplicity is worth defending.

Going to five pages breaks it in exactly one place: nav and footer would be copy-pasted five
times and would drift. Recommendation, smallest thing that works:

1. Extract the `<style>` block to `styles.css`, linked. One stylesheet, five pages, cached.
2. Add a ~40-line `build.mjs` that inlines `partials/nav.html`, `partials/footer.html` and
   the logo `<symbol>` into each page, writing to `dist/`. No framework, no dependency tree.
3. Point the existing Pages workflow at `dist/` instead of `.`.

Rejected: Astro / Vite / a React SPA. Real build systems for a five-page static site whose
only dynamic element is one calculator; the maintenance cost lands on whoever touches this
next, which is a future agent session with no context.

The **revenue-at-stake worksheet** (§5 item 10) is the one interactive piece: owner clients
× expected net proceeds × fee rate, filled in live, no submit required, nothing sent
anywhere unless the visitor asks for the summary. ~60 lines of vanilla JS. The marketing
plan names it the single most useful asset it can have; it is a lead magnet, a discovery
tool and a conference giveaway in one, and it needs zero product build.

Quality gates for every phase: AA contrast, keyboard path, `prefers-reduced-motion`
honored, 360px, no layout shift on font load, and every internal link resolving.

---

## 9. Phasing

Each phase is one PR against `claude/website-rewrite-plan-kfu4iu` or a successor branch.

**Phase 0 — decisions (Matthew, ~30 minutes).** §11. Nothing is written until the audience
line, the CTA and the em-dash rule are settled, because they change every sentence.

**Phase 1 — the argument (the urgent one).** Rewrite the home page copy to §3 on the
existing single file. Change the primary CTA off `/sign-up` to a booking / contact path.
Narrow "Who it's for." Retarget the lead form's fields to the firm, not the owner. Apply the
claims register. **No visual change, no new pages, no build change.** This is the highest
value per hour in the plan and can ship on its own.
*Done when:* the page argues retention to an advisor, no CTA points at a flow the motion
cannot serve, and every claim traces to shipped code.

**Phase 2 — structure.** Extract `styles.css`, add `build.mjs` and partials, point the
workflow at `dist/`. Add `/method` and `/for-owners`. Retire `claudebrief.md`.
*Done when:* five pages build and deploy, nav and footer exist once in the source, and the
owner argument is intact on its own page.

**Phase 3 — the two trust assets.** `/security` from the existing vendor-DD material. The
revenue-at-stake worksheet.
*Done when:* a compliance officer can self-serve the security question, and an advisor can
compute their own number on the page without giving up an email.

**Phase 4 — proof (gated, not scheduled).** Design-partner outcomes, named firms,
retention figures. **Blocked** until the retention instrumentation exists and there is
something true to report. Listed so it does not get quietly invented earlier.

---

## 10. Hero copy — three directions

Copy is Matthew's call. Three drafts, so the decision is a comparison rather than an edit.
All three avoid §4's banned register.

**A — the asset (recommended).**
> Eyebrow: For wealth managers, RIAs and family offices
> Headline: Your client's largest asset is the one you don't manage.
> Lead: Roughly 80% of a business owner's net worth sits outside your statement, in a
> company that will convert to cash exactly once. ExitBlueprint is how you run that
> preparation — starting in a normal review, years before there is a deal.
> Note: Deterministic scoring you can sign · White-labeled to your firm

**B — the room.**
> Headline: The transaction happens with you in the room, or without you.
> Lead: Everyone else at the table is temporary. The attorney closes and leaves, the banker
> collects and moves on. You are the continuity — if you were part of the preparation.

**C — the timing.**
> Headline: The relationship is decided years before the wire clears.
> Lead: By the time an owner has a letter of intent, the professionals are chosen and the
> proceeds are spoken for. The window that decides who manages the money is the 12 to 36
> months before anyone calls it a deal.

A is recommended: it states a fact the reader already believes about their own book, and it
gets to what we do in the second sentence. B is the strongest sentence but leads with a
threat. C is the truest and the slowest.

---

## 11. Open calls for Matthew

1. **Which vision document.** Confirm §1's assumption, or supply the doc. If a newer one
   exists, §3's spine and §6's register get re-derived from it first.
2. **The CTA.** "Book a working session" is a placeholder. What is the actual first step —
   a calendar link, a form, an email? This gates Phase 1.
3. **Owner traffic.** Is `/for-owners` a real page we drive to, or a courtesy landing spot?
   Changes how much of the current site survives.
4. **Em dashes.** `claudebrief.md` banned them; the shipped site uses them throughout;
   `DESIGN.md` is silent. Pick one, because Phase 1 rewrites every sentence either way.
5. **Naming.** Do DRS / BAS / ORI stay on the marketing site, or do they live on `/method`
   and get described in words on the home page? Three acronyms in the first screen is a lot
   for a first-time visitor who is not yet a customer.
6. **The security page.** Confirm what may be public. The source docs are internal, and the
   reduction needs a line drawn before it is written.
