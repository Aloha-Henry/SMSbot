# PIRRA — Product Requirements Document (v0.5)
*August 1, 2026*

**PIRRA** = Personal Injury Recovery & Response Agent ("Peer-ah"). Trademark clearance pending.

## Messaging (three audiences, three lines)
- **Positioning line** (deck, website — why we exist): *Because recovery doesn't happen in doctor's offices.*
- **Client-facing line** (onboarding, first SMS): *You recover. We remember.*
- **Attorney-facing sales line:** *You recover, we deliver* — acceptable only in attorney materials, never client-facing (avoids outcome-promise optics under bar advertising rules).
- **Identity:** An SMS-native evidence engine with a human voice. **Quilia collects data; PIRRA produces evidence.**
- **Language rule (absolute):** PIRRA *preserves evidence that would otherwise be lost.* Never "creates evidence." Never "companion," "coach," or "nurse navigator" in public materials. Never "AI legal assistant."

## The System in One Sentence
**The client sees a text thread, the attorney sees the workbench, and the court sees a PDF** — three audiences, three surfaces, one tamper-evident record underneath.

## Core Thesis
Non-economic damages are 50–70% of PI settlement value and the least-documented part of every case. Attorneys tell clients to keep injury journals; almost nobody does — and many attorneys forbid it because uncontrolled diaries get discovered and weaponized. PIRRA replaces a failed behavior with a working one: natural SMS conversation, attorney-directed, converted into a controlled, complete, tamper-evident record built to be shown, not hidden.

**Strategic identity: the tiny, deep sliver.** PIRRA never competes with Eve/EvenUp/Clio firepower. One narrow surface — truthful, structured, court-ready recovery evidence out of an injured human via text — done best in the world, with depth (evidence rules, bar rules, conversation craft, telephony compliance) as the defense. Everyone bigger is a channel: PIRRA exhibits feed EvenUp demands; PIRRA data syncs into Clio/Filevine files. Roadmap test for every feature: does it deepen the sliver or widen us into someone else's kill zone?

## Evidence Strategy: Shield by Default, Sword on Demand
- **Layer A — The Disclosable Record.** The structured event log: every entry, every day, good and bad, complete. Designed to be produced and to win on production: FRE 803(3) (contemporaneous statements of then-existing physical condition — hearsay-exempt), FRE 902(13)–(14) (hash-chained + independently timestamped — self-authenticating, with qualified-person certification), FRE 1006 (summary exhibits; underlying records must be available — the doctrinal reason the structured log, not free-text chat, is architected as "the record"). Completeness defeats cherry-picking and FRE 502(a) waiver-expansion arguments.
- **Layer B — Protected Intelligence.** Issue-spotting, credibility flags, inconsistency warnings, attorney annotations, alert history, counsel's protocol — work product under the Model C privilege architecture (see PIRRA-Privilege-Architecture doc), never disclosed.
- **FRE 612 discipline:** the depo-prep log triggers production when used to refresh recollection — built to disclosure standard on purpose.
- **Transparency requirement (absolute):** PIRRA always discloses it is an AI assistant provided by the firm. Agent vs. attorney messages unmistakably labeled. Concealment is barred: bot-disclosure laws (e.g., CA B.O.T. Act), FTC/UDAP exposure, and the defense motion it would hand over all point one way. PIRRA's warmth comes from craft, not concealment.
- **Immutability requirement:** messages are immutable originals in a hash-chain. No true deletion once a client is under representation — archival only.

## The Three Surfaces
### 1. Client: a text thread (no PIRRA UI exists)
- SMS/RCS on a firm-branded number; zero download, zero login. Voice notes via MMS. Artifact viewing via magic-link web pages.
- **Two-mode conversation:** *micro-prompt spine* (short neutral check-ins → clean factual timestamped originals) + *conversational capture net* (warm elicitation when the client opens up — the engagement mechanism AND the general-damages narrative: missed recitals and un-lifted daughters are loss-of-enjoyment evidence).
- Cadence: event-driven where possible (post-PT, post-appointment) + decaying calendar default; client-adjustable; re-engagement flows.
- Gap handling: non-response logged with neutral status codes ("Uncontacted / administrative gap") — silence can never read as recovery.
- **Attorney in-thread:** firm replies land in the same text thread.
- Hard escalations: medical emergency → 911/ER + firm alert; UPL/settlement questions → decline + route to attorney; treatment gap → operational alert.

### 2. Attorney: the Evidence Workbench
Three output modes, increasing in finish:
1. **Copy-paste blocks** — provenance-cited paragraphs behind a copy button, ready for the pain-and-suffering section of a demand (the EvenUp-compatibility path).
2. **Graphs / recovery curve** — pain-and-function timeline against treatment milestones; flare-ups and gaps flagged; exports as the FRE 1006 visual.
3. **One-click exhibits** — Demand Packet Exhibit (2-page PDF), FRE 1006 chart, depo-prep log.
**Provenance as UI:** every number clicks through to the exact client message it came from.

### 3. Court: the generated documents
Exhibits deliberately live outside the software — PDFs attached to demands, printed for mediation, filed. All artifacts cite provenance and include good days (transparency = credibility).

## Business Model
- **$149 per case, flat, published** (tiering ~$199–249 for extended litigation). COGS <$10/case life → 90%+ margin. Priced as a **case cost** (reference class: records retrieval, court reporters, EvenUp packages), never a software line item.
- **Disbursement pass-through:** firms pass PIRRA through as a litigation expense. Authority: ABA Formal Op. 93-379 + Rule 1.8(e) framework — state-by-state analysis required before sales assertion. **Dropped/lost-case policy required.**
- **Published pricing is itself a wedge:** the entire set (EvenUp, Eve, Supio, Quilia, Case Status, Hona) is contact-sales-only. PIRRA is the only price page in the ecosystem. No seats, no migration, no annual contract, any CMS.
- **Sales lead: case preservation** (catch the treatment gap before the adjuster) **+ evidence production** (exhibits that move settlement value).

## Regulatory & Safety
FTC Health Breach Notification Rule + state consumer-health-data laws; AI disclosure always; CA companion-chatbot / IL AI-therapy laws → "legal-team support tool" positioning only; crisis escalation protocol; UPL deflection; prompt-injection containment.

## Competitive Position (Aug 2026)
- **Quilia** (~800 firms): shipping weekly; proto-conversational case memory; still absent evidence generation, FRE architecture, privilege architecture. Most dangerous competitor. **Pitch consequence: lead with evidence outputs, not "we're conversational."**
- **Hona / Case Status:** intake/status AI. The conversational-AI energy is all aimed at *acquiring* clients, none at *documenting recovery*.
- **EvenUp ($2B), Supio, Eve:** downstream consumers of PIRRA data, not competitors.
- Structural read: nobody creates evidence; nothing longitudinal; no client-facing category. PIRRA is second-generation client-side.
