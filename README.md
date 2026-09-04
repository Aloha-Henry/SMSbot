# PIRRA

**Personal Injury Recovery & Response Agent** — an SMS-native evidence engine for plaintiff personal-injury firms.

> The client sees a text thread, the attorney sees the workbench, the court sees a PDF —
> three surfaces, one tamper-evident record underneath.

PIRRA is the modern pain journal: the one your clients actually keep. It captures recovery
through natural text conversation on the firm's number, under attorney direction, and turns
it into court-ready exhibits with every fact traced back to the message it came from.

**Status:** pre-build. Strategy and architecture only — no implementation yet.

## Where to start

| Doc | What it is |
|---|---|
| [`docs/OVERVIEW.md`](docs/OVERVIEW.md) | Self-contained summary of the entire plan — problem, product, market, legal architecture, business model, and open risks. Written to be read cold, or handed to an outside reviewer. |
| [`docs/system-map.md`](docs/system-map.md) | **Start here.** Actors, lifecycle, the three storage streams, the liability boundary, and the build target. |
| [`docs/system-map.html`](docs/system-map.html) | Same map, rendered with full diagrams. |
| [`docs/three-doors.html`](docs/three-doors.html) | **The privilege picture in two figures.** How defense counsel reaches the record, which architecture piece locks each route, and what the Twilio → Supabase build has to do to honor it. |
| [`docs/case-flow.md`](docs/case-flow.md) ([rendered](docs/case-flow.html)) | **One case, start to finish.** Swimlane flow from firm setup and the first text with disclosures, through client onboarding, capture, issue spotting, the paralegal workbench and attorney dashboard, to export and close. Includes the exact first-text thread, the flag-routing table, and where the Rule 5.3 record comes from. |
| [`docs/decisions/0001`](docs/decisions/0001-evidence-privilege-and-scope.md) | The decisions that shaped it — evidence posture, privilege theory, scope boundaries. Supersedes conflicting parts of the source docs. |
| [`docs/decisions/0002`](docs/decisions/0002-containment-cms-firewall-and-pilot-metrics.md) | Liability containment engine, the zero-endpoint CMS firewall, and what a pilot can and cannot prove. Includes rejected proposals and why. |
| [`docs/decisions/0003`](docs/decisions/0003-state-forum-authentication-and-psi.md) | State forum, vendor business-record authentication, present sense impression over recorded recollection, and the RFA template. Supersedes DR-0001 D3. |
| [`docs/decisions/0004`](docs/decisions/0004-jurisdiction-packs.md) | Jurisdiction packs — adopted, but governing characterization at export rather than capture, so the record stays uniform. Pack schema and authoring rules. |
| [`docs/decisions/0005`](docs/decisions/0005-autonomy-levels-and-privilege-control-surface.md) | **The privilege control surface.** Autonomy levels 0–4, approval regimes, non-electable floors, Door 2 and Door 3 hardening, and the refinement of D11: privileged until elected, production-safe when elected, survivable if privilege fails. |
| [`docs/research/california-ethics-governance-2026.md`](docs/research/california-ethics-governance-2026.md) | What California ethics counsel means by supervision and governance: Rule 5.3, proposed 2026 rule amendments, the May 2026 agentic-AI guidance, Rule of Court 10.430, SB 574, SB 243, and the governance package the product should ship. |
| [`docs/research/state-evidence-survey.md`](docs/research/state-evidence-survey.md) | Per-jurisdiction survey of whether our theories are actually available. Hawaii started; internal input only, never customer-facing. |

## Briefs

- [`docs/briefs/2026-08-architecture-update-memo.md`](docs/briefs/2026-08-architecture-update-memo.md)
  — **comprehensive memo.** Everything decided since the initial architecture, in one place:
  the state-forum correction, vendor business-record authentication, the chronology question,
  present sense impression and its cadence consequence, the prior-consistent-statement gap, the
  RFA template, and the photo split. Written to bring a co-founder or a fresh session up to speed.

- [`docs/briefs/outside-ai-research-brief.md`](docs/briefs/outside-ai-research-brief.md)
  — **research briefing for an outside AI session.** Self-contained: product, architecture,
  evidence theory, the California election model, the attack bank, eight ranked research
  questions, and a mandatory verification protocol. Written to be pasted into Gemini or any
  other model for a research pass.

- [`docs/briefs/evidence-architecture-brief.md`](docs/briefs/evidence-architecture-brief.md)
  ([rendered](docs/briefs/evidence-architecture-brief.html)) — two-page brief for outside
  adversarial review. How the FRE and case law drove the architecture, and the six places we
  think it's weakest. Written to be handed to a practicing attorney.

## Web

- [`web/`](web/) — the marketing landing page. Next.js + Tailwind + TypeScript,
  static export, zero-config Vercel import (set root directory to `web`).
  All copy lives in [`web/content/copy.ts`](web/content/copy.ts). See
  [`web/README.md`](web/README.md) for deploy steps and swap points.
- [`web/public/demo/index.html`](web/public/demo/index.html) — the workbench prototype, served
  at `/demo/`. Queue → case view → thread → flags → exhibit builder on a synthetic case. Toggle
  the role between paralegal and attorney to see the evidentiary lock and export gate engage.

## Source docs

**Current architecture of record:**

- [`docs/source/PIRRA-Final-Design-Proposal-v1.1.md`](docs/source/PIRRA-Final-Design-Proposal-v1.1.md)
  — post-review consensus draft (Aug 13 2026). Three blind AI review rounds plus
  reconciliation: 31 dispositioned changes, one closed design decision, one restructured
  legal theory, one human-verified statute. **Supersedes DR-0001 through DR-0004 where they
  conflict.** Citation register in §8 carries per-authority verification status.
- [`docs/source/PIRRA-Landing-Page-Brief-v2.md`](docs/source/PIRRA-Landing-Page-Brief-v2.md)
  — the brief `web/` is built to. Supersedes brief v1.

**Earlier work, preserved as written:**

Original strategy work, preserved as written. Where these conflict with a decision record,
**the decision record wins**.

- [`docs/source/PIRRA-PRD.md`](docs/source/PIRRA-PRD.md) — product requirements, v0.5
- [`docs/source/PIRRA-Privilege-Architecture.md`](docs/source/PIRRA-Privilege-Architecture.md) — Model C attorney-directed agency, v1.1
- [`docs/source/PIRRA-Competitive-Scan-Aug2026.md`](docs/source/PIRRA-Competitive-Scan-Aug2026.md) — competitive read, August 2026
- [`docs/source/PIRRA-Landing-Page-Brief.md`](docs/source/PIRRA-Landing-Page-Brief.md) — landing page build brief (copy is final)

## The rules that don't bend

Carried from the landing brief and the decision records. These are absolute:

1. **Preserves evidence that would otherwise be lost.** Never *creates evidence*.
2. **No privilege guarantees, anywhere.** Architecture is describable; outcomes are never promised.
3. **No outcome promises.** No settlement figures, no win rates.
4. **AI status always disclosed.** PIRRA never pretends to be human.
5. **Damages only — never liability.** No causation, fault, speed, or scene admissions.
6. **Never coach toward favorable content.** Neutral, open elicitation only.

## Layout

```
docs/
  system-map.md          working architecture
  system-map.html        rendered map
  decisions/             decision records — these supersede source docs
  source/                original strategy docs, as written
src/                     application code (empty)
```

---

*Not legal advice. Evidence-rule and privilege architecture described here is designed to
support, not guarantee, privilege and admissibility, and is subject to review by counsel in
each jurisdiction.*
