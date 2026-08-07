# Website Rewrite Plan

**Status:** §11's Phase 0 page **has shipped** and is live — `index.html` is rewritten to the five
beats in §4, the scope cut in §5 is applied, and `claudebrief.md` is retired. What is
still open is listed in §13, and the two big ones were assumed rather than answered:
the category decision (§2) was taken as the reconciliation this doc proposes, and the
first step (§13.2) is an on-page contact form rather than a calendar link. Two later
calls from Matthew (2026-08-07) then moved the page off this doc's recommendation: the
**design-partner program is not on the site at all** (§4), and the **hero leads on
enablement rather than on the loss** (§4, §12). Both are recorded where they land.
Copy decisions and the category decision remain founder calls; this doc recommends.

**Still outstanding from the plan:** the sample client deliverable (§7) — the page ships
a designed stand-in panel, not the real anonymized export; the security one-pager and
published pricing (§11, Phase 2); directory submissions (§10).

**What this is.** A plan to rewrite exitblueprint.net so it argues the position the
company actually sells. The visual system is not the problem and is not being replaced.
The argument is, and so is the scope — see §5.

---

## 1. Source

Written against **Go-To-Market Foundation: Messaging Plan and Initial Marketing Plan**
(the wealth-manager positioning document). Section references below in the form *(§1.3)*
point into it. Supporting reads, in order of authority beneath it:

| Source | What it settles |
|---|---|
| `exitblueprint-mvp/CLAUDE.md`, opening paragraph | The audience line as it now stands in the codebase: wealth managers, RIAs, multi-manager / multi-family offices first, CEPA / M&A adjacent, retention as the lead message. |
| `docs/messaging-plan-platform-gaps.md` | The same plan graded against shipped code. The list of claims the product cannot yet support. |
| `docs/planning-partner-consensus-gaps.md` | The eMoney line — a design partner's own statement of where our lane ends. |
| `docs/44-gtm-readiness-review.md` | The motion is a hand-provisioned design-partner pilot. Not self-serve. |
| `DESIGN.md` (this repo) | The visual system. Preserved. |

The GTM document itself lives outside both repos. **Recommend committing it to
`exitblueprint-mvp/docs/`** — every plan that derives from it (this one, the two gaps
docs) is currently reasoning about a file no future session can open. Matthew's call,
since it is his document and the repo has deliberately treated it as external so far.

---

## 2. The decision that gates everything

*(§1.3, and §18 Phase 0: "Nothing else can be written until this is settled.")*

The plan asks for a category decision before any collateral exists, and recommends
**"liquidity event platform" / "owner transition platform for advisors"** — explicitly
**not** "exit planning software," which it rates *"crowded, low differentiation, and the
advisor is not the hero. Avoid as your lead."*

The site is currently titled *"ExitBlueprint — Exit readiness, in three scores"* and every
section is built on the exit-readiness frame. So the recommended category and the shipped
site point in different directions, and the product's own name leans toward the frame the
plan advises against leading with.

That tension is not fatal and is not mine to resolve. The plan's own reconciliation is the
practical rule in §1.3: **exit planning is what the software does; keeping the relationship
through the liquidity event is what the advisor buys.** A site can be named ExitBlueprint,
describe exit readiness as the mechanism, and still lead with the liquidity event and the
advisor's economics. That is the reading this plan assumes. **Confirm it before Phase 1
copy is written**, because it changes the title tag, the meta description, the hero, and
the nav labels — i.e. every string that matters for how the market files us.

---

## 3. The gap, stated plainly

The site sells a score to an owner. The company sells retention to an advisor.

| | Site today | The plan |
|---|---|---|
| Who it talks to | The owner ("Know what the buyer will find") | The advisor who holds the wealth relationship *(§11.1)* |
| What it sells | A diligence readiness score | *"We help advisors stop losing the liquidity event they spent a decade waiting for."* *(§2.1)* |
| Emotional lead | Fear of a re-trade at closing | Loss aversion — the advisor can name the client they lost *(App. B)* |
| Who it's for | Six audiences listed flat: owners, M&A advisors, CEPA, PE acquirers, wealth managers, independent sponsors | One buyer, qualified on owner-client density *(§11.1)* |
| Primary CTA | "Start the assessment" → `app.exitblueprint.net/sign-up` | An on-page contact form. There is no self-serve motion, and `docs/44` says not to turn one on. *(The plan proposes design-partner recruitment here; Matthew cut that from the page — see §4.)* |
| Lead form asks | The owner's annual revenue | The firm's owner-client count — the qualifier that matters *(§11.1)* |
| Scope | Eleven-section marketing site | *"Stand up a single-page site: the problem, the deliverable, one call to action. Do not build a full marketing site."* *(§18 Phase 0)* |

Two of these are urgent. **The main button points at a signup flow the go-to-market says
should not exist** — every visitor who takes the primary action lands somewhere the motion
cannot serve them. And the site is qualifying on the wrong axis: it asks an owner for
revenue when the one question that predicts fit is how many owner clients a *firm* has.

What survives: the three-score argument (`Three scores. Never averaged.`), the ring
readout, the determinism claim, and the whole visual system. The rewrite keeps the
instrument and changes whose hand it is in.

---

## 4. The argument the page makes

One page. Five beats, each traceable to a pillar *(§2.2)* — the plan's own test is that an
asset not traceable to a pillar gets cut.

1. **Enablement, then the loss.** *Shipped as two beats, in that order.* The hero says the
   advisor can now **run** the readiness and exit-preparation process; §1.1's core message
   (*"not lost at the closing table … lost twenty-four months earlier"*) follows it as the
   reason. This inverts the plan's §2.3 sequencing, which opens cold traffic on the loss.
   The call (Matthew, 2026-08-07): the advisor already believes they are losing these
   relationships, so the page opens on the thing they do not have — a process — rather
   than on a fear they already feel. The loss still does the emotional work, one screen
   down.
2. **The deliverable.** The client-facing artifact, shown, not described. *(§15: the sample
   deliverable is "your single most persuasive asset and should exist before your website
   does.")* See §7 — this is a real dependency, not a section.
3. **A reading the advisor can sign.** Three scores, never averaged, rule-based and
   versioned. Nothing in it was written by a model, which is what lets a fiduciary put
   their name on it. *(the existing method section, retargeted)*
4. **What it does on a Tuesday.** Quarterly re-scoring, deltas, a better annual review, a
   differentiated first meeting. *(§20: value realized years out is "your single largest
   risk"; §9: a demo about a transaction three years away "leaves advisors excited and
   does not buy.")*
5. **The arithmetic.** The revenue-at-stake worksheet, filled in by the visitor with their
   own numbers. *(§1.4)*

Then one call to action: a short closing band into the contact form. **The
design-partner program is deliberately not on the page** (Matthew, 2026-08-07) — the
recruiting terms in §14 are a sales conversation, not a landing-page section, and
naming a cohort publicly dates the page the moment the cohort fills.

Pillars 2 and 3 (be the hub, own the outcome) are **demo material, not landing-page
material** *(§2.3: "Demo: Pillars 2 and 3. This is where the product does the talking.")*
They get a line each on the page and no more. This is a change from how the current site
allocates space, and it is the plan's explicit sequencing.

---

## 5. Scope: one page

*(§18 Phase 0, §15)*

The plan is unambiguous — a single page, and the sample deliverable built **before** the
site. My earlier draft of this plan proposed a five-page IA (`/method`, `/for-owners`,
`/security`). That over-builds against the plan and is withdrawn. What happens to each:

| Page | Call |
|---|---|
| `/method` | **Deferred.** The methodology depth belongs in the demo and in the flagship guide *(§15)*, not in a marketing page nobody has asked for yet. |
| `/for-owners` | **Deferred, and possibly never.** The plan's buyer is the advisor; an owner-facing page invites the category confusion §20 warns about. If owner traffic needs somewhere to land, it is a paragraph and a contact link, not a page. |
| `/security` | **Phase 2, as a one-pager, not a page.** *(§18 Phase 2: "Build the security and compliance one-pager. It will be requested"; §8 objection handling; §20.)* It is a PDF an advisor forwards to compliance, not a marketing surface. |
| Pricing | **Not now, but not "never."** §16 says do not finalize before the design-partner cohort completes — and also that *"'contact us' costs you more qualified conversations than it protects margin."* Publish a range once the cohort sets one. |

The current eleven-section page collapses to five beats plus a CTA. **This rewrite deletes
more than it adds**, which is the correct shape for Phase 0.

---

## 6. "Quarterback" — the plan's own reasoning, which is sharper than "it's cheesy"

*(§5.3)*

The plan addresses this directly, and its objection is not tone:

> *"The term is well understood in this market and is used widely in the exit planning
> community — which cuts both ways. It communicates instantly, and it differentiates you
> from nothing. Use it as shorthand in conversation, not as your headline. Your
> differentiation is not the aspiration to quarterback; it is the system that makes it
> operationally possible."*

And Pillar 2's own rationale: *"Advisors already believe they should be the quarterback.
Almost none have a system that makes it true."*

So the word is not banned for being corny. It is banned from the page because **every
competitor in this market already says it**, and saying it puts us in their comparison set.
The advisor arrives already agreeing with the aspiration. The page's job is to show the
mechanism.

**The operative rule:** the site never states the aspiration. It shows the system that
delivers it — a readiness process the advisor runs, professionals convened around it, an
artifact the client takes home. If a sentence could appear on a competitor's site
unchanged, it is not doing work.

**Approved phrasings, taken from §5.1 rather than invented:**

- "Put you in the room where the decision gets made." *(not "guarantee you keep the assets")*
- "Make you the one who convenes them." *(not "replace your COIs")*
- "Help your clients be ready, whether or not they sell." *(not "help your clients sell")*
- "Model after-tax scenarios for discussion with the client's CPA." *(not "tax planning")*
- "Value range" / "value estimate." *(never "business valuation")*
- "The system that keeps you at the center of your client's liquidity event." *(not "exit
  planning software")*

**Retire from the page** *(§5.2, verbatim)*: holistic, seamless, empower, revolutionary,
game-changing, one-stop-shop, unlock, best-in-class. Plus the house rules already in
`docs/copy-audit.md`: no exclamation points, no emoji, no hype.

**Also banned, by extension of §5.3:** the whole sports register that follows "quarterback"
around — playbook, game plan, call the plays, coach, huddle, MVP, team sport, in your
corner. Same failure mode: instant comprehension, zero differentiation.

**And "AI-powered."** *(§5.1: "This audience is fatigued by the term and rewards concrete
claims.")* Note the site's strongest technical claim is the *opposite* one — no model
touches a score — which is worth stating plainly for exactly this reason.

---

## 7. Dependency: the deliverable comes first

*(§15, §21)*

> *"The sample client deliverable … Your most important marketing asset. Anonymized,
> well-designed, printable. Build this before the website."*

The page's second beat is a picture of the artifact an advisor hands a client. If that
artifact does not exist in shareable form, the beat becomes a description of one, which is
exactly the weaker thing the plan is warning against.

The product already generates it — the Deliverables studio (owner report · delta), white-
labelable, PDF export (`docs/44`). So this is not a build; it is **generating one against
the demo tenant (`npm run demo:sales`), anonymizing it, and checking it reads well as a
static image.** Worth doing before Phase 1 copy is final, because what the image actually
shows determines what the beat can claim.

---

## 8. The claims register — what the page may not say

The plan's landmines *(§9)* and proof plan *(§4)*, crossed with what is shipped
*(`docs/messaging-plan-platform-gaps.md`)*. Every claim traces to shipped code and a
verifiable source, or it does not ship.

| Claim | Verdict | The honest version |
|---|---|---|
| A retention rate | **Never.** *(§9, §4, App. B: "What we never claim.")* Uninstrumented in-product besides — no field feeds it. | Give the arithmetic framework and let the advisor supply the inputs *(§1.4)*. The number they produce themselves is more persuasive than any statistic we could cite. |
| Bankers / M&A advisors as villains | **Never.** *(§9, §20)* They are a future referral channel, and an adversarial frame makes fiduciary advisors uncomfortable. | *"The banker sells the company; you plan the wealth."* Frame them as doing their job well. Nobody was doing the advisor's job early enough — that is the gap. |
| Anything implying the advisor benefits from a sale | **Never.** *(§9)* A conflict optic a fiduciary notices immediately. | *"Ready, whether or not they sell."* |
| Output as a valuation, tax opinion, or legal advice | **Never.** *(§9)* | "Value range," "scenario," "for discussion with the client's CPA or counsel." Disclaimers in the product output, not only in the pitch. |
| Financial planning software as inferior | **Never.** *(§9, §12.1)* Nearly every prospect uses one and many love it. | Complementary, and honest about what we do not do. Our lane ends where the planning stack begins — which the design partner's own consensus draws for us. This is the most credible sentence available to an RIA. |
| The CPA / attorney / banker *transact* in the platform | **Cannot say yet.** Collaborators are read-only; no document access, no actionable assignment. | *"Invite the CPA, the attorney and the banker into the same readiness picture."* |
| Post-close cash flow / retirement income / drawdown modeling | **Cannot say, and should not build.** Explicitly on the wealth manager's side of the design partner's line. | "Net proceeds, in a form your planning software can take." |
| Any market statistic | **Only with a primary source and a publication year.** *(App. A: "Advisors are numerate and will check.")* | This includes the "~80% of net worth is in the business" figure that every draft of the hero reaches for. Source it or cut it. Use at most one *(App. A: "three or more signals that you are presenting rather than listening.")* |

---

## 9. What is preserved

`DESIGN.md` is not reopened. Palette, tier ramp, logo rules, type scale, 8px rhythm,
section alternation, motion and reduced-motion behavior — unchanged, and re-verified after
the copy pass. The three-ring readout stays; its geometry matches the app's dial, so a 78 is
the same picture in both places. Only its caption changes.

`claudebrief.md` should be **retired in this rewrite.** It specs a single composite 0–100
DRS with a confidence band, which the product's non-negotiable rules now forbid. A
superseded brief at the repo root is how a future session rebuilds the wrong thing.

---

## 10. Technical plan

One page means the current setup is already right: a single hand-authored `index.html` on
GitHub Pages, deployed by `.github/workflows/static.yml` on push to `main`. No build step,
no dependencies. My earlier proposal to add a partial-inliner and a `dist/` step existed
only to serve five pages; with the IA collapsed to one, **it is withdrawn.** Nothing about
the build changes.

The one new interactive piece is the **revenue-at-stake worksheet** *(§1.4)*: owner clients
× expected net proceeds × fee rate, filled in live, computed in the browser, nothing sent
anywhere. ~60 lines of vanilla JS. Two rules taken from the plan: ship it with the fields
**blank**, not pre-filled *(§1.4: "Do not present filled-in numbers")*, and label the
enterprise-value multiple line as illustrative, since RIA multiples vary widely.

The plan also calls for advisor-technology **directory submissions** in Phase 0 *(§13,
§18)* — cheap, durable inbound, and it is site work in the sense that it needs a canonical
description, an OG image, and a screenshot ready to submit. Bundle it with Phase 1.

Quality gates, unchanged: AA contrast, keyboard path, `prefers-reduced-motion`, 360px, no
layout shift on font load, every link resolving.

---

## 11. Phasing, mapped onto the plan's own sequence

Site work sits inside the GTM sequence *(§18)* rather than running on its own clock.

**Phase 0 — the category decision (§2).** Founder call. Nothing gets written first.

**Phase 0 — the deliverable (§7).** Generate, anonymize, and check the sample client
artifact. Before the page, per §15.

**Phase 0 — the page.** One PR: rewrite `index.html` to the five beats in §4, change the
CTA off `/sign-up` to design-partner recruitment, requalify the form on owner-client count,
apply §6's language and §8's register, delete the sections that no longer earn their place.
Add the worksheet. Retire `claudebrief.md`. **No visual change, no new pages, no build
change.**
*Done when:* the page argues retention to an advisor, no CTA points at a flow the motion
cannot serve, every claim traces to shipped code and a sourced statistic, and the page is
shorter than the one it replaced.

**Phase 0/1 — directories.** Canonical description, OG image, screenshots; submit *(§13)*.

**Phase 2 (months 5–8) — the security one-pager.** A forwardable PDF, from the existing
vendor-DD material. Not a marketing page.

**Phase 2 — pricing.** Publish a range once the design-partner cohort has set one *(§16)*.

**Phase 2+ — proof.** Named design partners, client-reaction quotes, case studies leading
with what the owner said *(§4, §15)*. Retention figures remain blocked until the
instrumentation exists and there is something true to report. Listed so it does not get
quietly invented earlier.

---

## 12. Hero copy

The plan supplies its own approved language, so these are drawn from it rather than
written fresh. All three lead with Pillar 1, which is the only pillar that should be
working in cold traffic *(§2.3)*.

> **Shipped instead (2026-08-07):** the hero leads on **enablement** — *"You hold the
> relationship. Now you have the process."* — with §1.1's core message moved into the
> loss section beneath it. The reasoning: the advisor already agrees they are losing
> these relationships; what they lack is a process, so the page opens on the thing
> they do not have rather than on the fear they already feel. The drafts below are
> kept as the record of what was considered.

**A — the plan's core message (originally recommended).** *(§1.1)*
> Eyebrow: For independent wealth managers and multi-manager offices
> Headline: The relationship is not lost at the closing table.
> Subhead: It is lost twenty-four months earlier, when someone else starts the conversation
> you were not in the room for.
> Lead: ExitBlueprint gets you into that process two to three years ahead of a deal —
> running the readiness work, convening the professionals, and answering the owner's real
> question, which is not what the company is worth but what they will actually have.
> CTA: We are building this with ten firms, not for a thousand →


**B — the ten-second script.** *(§7.1)*
> Headline: When the business sells, you should still be the one managing the money.
> Lead: Most independent advisors have a handful of clients whose net worth is mostly
> locked in a company they cannot touch. The proceeds land somewhere else, usually with a
> firm the banker introduced during the deal.

**C — the discovery question.** *(§6)*
> Headline: Looking back, when do you think the decision was actually made?
> Lead: Advisors who have lost one of these never answer "at closing." They name a date two
> or three years earlier. That is the window this is built for.

A is recommended — it is the document's own core message, and the plan's whole thesis is
that the advisor has already had this thought. C is the most distinctive and the biggest
swing: opening on a question is unusual and it is the question §6 says does the most work,
but it asks a cold visitor to do the reasoning themselves. B is the safest.

Note for all three: the CTA line is the design-partner pitch *(§14.2)*, not a discount and
not "book a demo." *"You will shape what it becomes, and you will have a formal owner
transition process in place before anyone else in your market does."*

---

## 13. Open calls for Matthew

1. **The category decision (§2).** Gates every string on the page. The plan wants
   "liquidity event / owner transition platform for advisors" and warns off "exit planning
   software" — reconcile that with the product's name and the assumed reading in §2.
2. **The first step.** *Resolved:* the on-page contact form, qualifying on owner-client
   density. A calendar link would still be an improvement over a form if one exists.
3. **Commit the GTM document to `exitblueprint-mvp/docs/`?** (§1)
4. **Does anything owner-facing survive?** §5 says defer, possibly permanently. Confirm,
   since it decides how much of the current page gets deleted rather than rewritten.
5. **DRS / BAS / ORI on the page, or only in the demo?** Three acronyms in the first screen
   is a lot for an advisor who has not yet admitted the problem — and §2.3 puts the product
   detail in the demo, not the landing page.
6. **Em dashes.** `claudebrief.md` banned them; the shipped site uses them throughout; the
   GTM document uses them freely, which is evidence for allowing them. Pick one, because
   Phase 0 rewrites every sentence either way.
