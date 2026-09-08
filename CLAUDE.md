# The marketing site, read from an agent session

This repository is **exitblueprint.net** — one of three repositories in the
ExitBlueprint environment. The contract between them is declared in
`exitblueprint-mvp/.claude/repos.json` and described in
`exitblueprint-mvp/docs/cross-repo-environment.md`.

`index.html` is the whole site: a single hand-authored page, deployed to GitHub
Pages by `.github/workflows/static.yml`. `DESIGN.md` is the visual system;
`REWRITE-PLAN.md` is the argument the page makes and what is still open in it.

## What this repo is the authority for

- **What the company claims in public.** Nothing else in the environment does.
- The brand asset set (`brand/`).

## When a role opens it

**Read it** when a slice changes what the product *promises*, or when checking
that a surface still says what the site sells.

**Write to it** when a shipped change makes a public claim false, or when the
strategy documents in `exitblueprint-mvp/docs/` move the argument.

`REWRITE-PLAN.md` §1 lists its authorities as four documents in
`exitblueprint-mvp` — `CLAUDE.md`, `docs/messaging-plan-platform-gaps.md`,
`docs/planning-partner-consensus-gaps.md`, `docs/44-gtm-readiness-review.md` —
and then observes that the GTM document underneath them "lives outside both
repos." The site has been reasoning across a boundary it could not cross, and
had already written that down. `$EB_SITE` and `$EB_VAULT` are what let it.

## What stops for a decision

**The argument is Matthew's.** The category, the lead, the positioning, the
pricing and the published copy are founder calls — `REWRITE-PLAN.md` says so,
and two of its own recommendations were overruled (the design-partner program is
deliberately not on the site; the hero leads on enablement rather than on the
loss). An agent that would change what the page *argues* raises a
`## Decision needed` on the issue and stops, per
`exitblueprint-mvp/docs/agent-operating-loop.md` §3.2.

**Correcting a claim the product just falsified is not that**, and does not
stop: if a shipped change makes a sentence on this page untrue, fixing the
sentence is maintenance, not repositioning. The distinction is the one in
`build-next.md` §2a — does this tell a reader something *new*, or does it stop
telling them something that is no longer true?

## Before you edit

- Read `DESIGN.md`. The visual system is not the problem and is not being
  replaced (`REWRITE-PLAN.md`).
- The page is one file with inline styles. There is no build step and no
  framework — keep it that way unless a decision says otherwise.
- The `impeccable` skill is vendored under `.claude/skills/` for craft work.
