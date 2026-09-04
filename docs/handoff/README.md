# Handoff documents

Five self-contained HTML pages written to be sent, not read in the repo. Open any of them in a
browser; they render in light and dark themes and print cleanly. They restate the architecture of
record for two audiences and add nothing new to it.

| # | File | For | What it is |
|---|---|---|---|
| 0 | [`00-one-page.html`](00-one-page.html) | Firms (external) | **PIRRA on One Page.** Relationship first: consistent personal contact for the client, a faithful source-linked record for counsel, confidentiality by design with release only on the attorney's decision, attorney-ready exhibits when needed. One real exchange from the synthetic case and what counsel saw. What we promise (product behavior) and what we don't (legal outcomes). Pilot invitation. Names no competitors. PDF fits one letter page. |
| 0b | [`00b-competitive-matrix.html`](00b-competitive-matrix.html) | Team and advisors (internal) | **Competitive matrix.** PIRRA beside Quilia, Hona (Lia), EvenUp (Communication Agents) and status portals / CMS texting, with Sept 5 corrections (Quilia has AI-guided prompts and case memory; EvenUp runs SMS and voice treatment check-ins). "Not verified in public materials" where we found nothing. Never for the live site. |
| 1 | [`01-overview-flow.html`](01-overview-flow.html) | Attorney and dev | **PIRRA in One Picture.** The purpose statement, then three figures: where the words go (client → firm's number → two-plane record → workbench / attorney's phone → exhibits through the disclosure decision), the life of one case in ten stages across three lanes, and the three record classes with their discovery postures. Closes with the eight rules that do not bend. |
| 2 | [`02-engineering-spec.html`](02-engineering-spec.html) | Dev | **PIRRA Build Spec v0.1.** Organized by rule, not feature. Twelve floors the application enforces; the two-schema data model with DDL; the write path as a numbered sequence (written before read); the Level 2 agent turn with the eight validator checks; levels and regimes; the intelligence plane and flag routing; export gates and the whole-record election; the data-path inventory with the Twilio residuals and the plaintext-surface requirement; ten acceptance tests; the demo case as the first integration test; a never-build list; and the open decisions that change the build. |
| 3 | [`03-supervision.html`](03-supervision.html) | Attorney and ethics counsel | **Supervision by Default.** Rule 5.3's three duties mapped to the four things the attorney actually does and the record each produces; the attorney's week on a phone (digest, one flag with three taps, an empty approvals list); the autonomy ladder over the floors; the one-click supervision record as it exports from the demo case; what the attorney never has to do and what is guarded against on their behalf; and a table placing each California authority. |

Sources of truth these pages summarize: `docs/source/PIRRA-Final-Design-Proposal-v1.1.md`,
`docs/decisions/0001` through `0005`, `docs/briefs/2026-09-response-to-legal-architecture-memo.md`,
`docs/research/california-ethics-governance-2026.md`, and `docs/demo-case/`. If a page and a
decision record disagree, the decision record wins and the page has a bug.

Nothing in these pages is legal advice or a guarantee of privilege or admissibility.
