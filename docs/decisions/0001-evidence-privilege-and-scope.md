# DR-0001 — Evidence posture, privilege theory, and scope boundaries

**Status:** Accepted · **Date:** 2026-08-11 · **Supersedes:** conflicting portions of `source/PIRRA-PRD.md` and `source/PIRRA-Privilege-Architecture.md`


> **SUPERSEDED IN LARGE PART by `docs/source/PIRRA-Final-Design-Proposal-v1.1.md`**
> (Aug 13 2026), which reflects three rounds of adversarial AI review plus reconciliation.
> Retained for the reasoning trail. Where this record and v1.1 conflict, **v1.1 wins**.
> Notably: D2's conduit/Kovel framing is restructured in v1.1 §3.3, and *Heppner* is corrected — it contains **no necessity holding**; v1.0's contrary statement was a drift error.

> Not legal advice. Every position below is subject to review by outside counsel per jurisdiction before it is asserted to a customer.

---

## Framing decision — PIRRA is the modern pain journal

The product descends from the attorney-directed pain journal. That baseline resolves most of the tension in the source docs, because a counsel-directed pain journal is **already** a production-expected document that attorneys already trust and already tell clients to keep. We are not inventing a new discovery object; we are making an existing one that clients actually maintain, that is complete, and that is authenticable.

Consequence: the pitch is *"the pain journal your clients actually keep,"* not *"privileged AI conversation."* Privilege becomes a footnote about work product rather than the headline.

---

## D1 — Three tiers, and the record is a produce-it document

The source docs treat the whole channel as one privileged thread while simultaneously designing the log to be produced. Those cannot both be true. Resolved as three tiers with three different discovery postures:

| Tier | Contents | Posture |
|---|---|---|
| **1 — The Record** | Client ↔ PIRRA capture | **Expect production.** No privilege claim asserted by default. Designed to win *on* production. |
| **2 — Intelligence** | Flags, credibility notes, inconsistency alerts, attorney annotations, counsel's protocol | **Work product.** Never produced. |
| **3 — Attorney messages** | Direct attorney ↔ client communication in-thread | **Privileged** on ordinary grounds. |

Asserting privilege over Tier 1 and losing is worse than never asserting it — a failed claim invites a waiver fight over everything else. Producing a non-privileged document creates no FRE 502(a) waiver-expansion exposure, because subject-matter waiver requires a waiver.

**Build consequence (non-negotiable):** the three tiers are **architecturally severable** — separate stores, separate export paths — not one table with a visibility flag. Every export path draws structurally from Tier 1 only. A single bad export destroys the work-product claim for that firm.

### Where privilege actually matters

A pain journal is only the client's words. PIRRA additionally **generates adverse analysis about the client that never existed before**: credibility flags, inconsistency warnings, engagement scoring. *"Produce all PIRRA-generated inconsistency alerts for this plaintiff"* is the discovery request that would make every case using PIRRA worse than one that didn't.

So the privilege workstream targets **Tier 2, not Tier 1** — and Tier 2 sits on far stronger ground: ordinary work-product doctrine under Rule 26(b)(3), attorney-directed, containing mental impressions. It needs no *Kovel* argument and no novel theory.

---

## D2 — Conduit is the primary privilege theory; *Kovel* is the fallback

*United States v. Heppner* (S.D.N.Y.) — Rakoff, J., bench ruling Feb. 10, 2026, written opinion Feb. 17, 2026 — is **verified real** and correctly characterized in the source docs. Consumer-grade Claude used by a defendant to draft ~31 defense-strategy documents: not privileged, not work product.

**The gap the source docs miss:** Rakoff rejected the *Kovel* argument on **two** grounds, and our architecture only answered one.

- **Direction** — Heppner acted on his own initiative. ✅ Answered: counsel-retained, counsel-directed, contractual confidentiality.
- **Necessity** — the AI was not *necessary* for counsel to understand the client. ❌ **Not answered.** Our client speaks English and could call the lawyer. This is the thinnest member in the structure.

**Decision:** put the attorney genuinely in the thread and argue **conduit**, not *Kovel*. The client is communicating *to counsel* through the firm's system — the same category as the firm's email server, phone system, or a paralegal under Rule 5.3 supervision. Conduit requires no necessity showing. *Kovel* remains available as a per-case fallback for Tier 1, never promised.

**Conditions:**
1. Attorney presence must be **real and logged**. A nominal presence dies on one deposition question: *"How often did you actually read this?"* Minimum touch cadence, provable.
2. Tier 3 must never share a stream with Tier 1, or using the record as a sword waives the attorney's messages with it.
3. Response-time expectations set explicitly at onboarding — a client who believes counsel reads in real time creates Rule 1.4 exposure the firm did not previously have.

---

## D3 — Reorder the doctrinal stack

> **SUPERSEDED by [DR-0003 D14](./0003-state-forum-authentication-and-psi.md).** This section
> assumes a federal forum. Personal-injury cases are overwhelmingly state court, FRE 902(13)–(14)
> are not widely adopted at the state level, and the ranking below omits FRE 803(1) present sense
> impression — which is now a lead theory. Retained for the reasoning; use D14 for the ordering.

803(3) is over-weighted in the source docs. It covers *then-existing* condition and expressly excludes statements of memory offered to prove the fact remembered — which means the loss-of-enjoyment narrative we care most about largely falls outside it. Ranked by load-bearing capacity:

1. **FRE 801(d)(1)(B) — prior consistent statements.** *Lead theory.* Against a charge of recent fabrication or improper influence, contemporaneous statements made before the motive arose come in substantively. This is the strongest argument for contemporaneous capture and the one a badly-kept journal can never deliver.
2. **FRE 612 + foundation for testimony.** The workhorse. The client testifies; the log makes it specific, dated, consistent.
3. **FRE 703 — expert reliance.** Life care planners, treating physicians, vocational experts.
4. **FRE 803(3).** Real but narrow — present-tense condition only.
5. **FRE 1006.** A presentation rule. Keep; don't lead.
6. **FRE 902(13)–(14).** Authentication only — answers *"is this the real log,"* not *"does it come in."*

**Build consequences:** statement-posture tagging at capture time (present-condition / past-recollection / opinion); prompt library engineered for present-tense elicitation; precise timestamping with a pre-motive marker; a prior-consistent-statement packet as a first-class export.

**Marketing consequence:** the landing-page hero trust strip currently leads with FRE 803(3) — our weakest cite in our most-read line. Recommend 902(13)–(14) or a generic "built to federal evidence standards." Pending Hank's call; landing-page copy is otherwise frozen.

---

## D4 — Client consent artifacts

Not a novel problem: the attorney already has the "keep a journal" conversation. PIRRA supplies the upgraded script.

- **Engagement letter addendum** — PIRRA-supplied template, counsel-reviewed per jurisdiction.
- **Onboarding SMS disclosure**, before any substantive capture: it's an AI provided by your firm · what you say is recorded · your legal team sees it · **the other side may see it too** · be honest including the good days · emergencies go to 911 · anything about *how it happened* goes to your legal team, not here.
- **Periodic re-disclosure** — a 14-month thread means message one is long forgotten.
- **Two-party consent capture** for any voice channel, per state.

On candor suppression: completeness is genuinely in the client's interest, because a complete record is what defeats cherry-picking. That is true, so we can say it.

**Hard rule:** PIRRA never coaches toward favorable content. Neutral, open elicitation only. A coached journal dies on cross; a coached AI journal dies worse, because the transcript proves the coaching in the machine's own words.

---

## D5 — The liability boundary

**PIRRA captures damages. PIRRA never discusses liability.** Not causation, not fault, not speed, not what anyone said at the scene.

This follows directly from D1: Tier 1 is produce-expected. A client's contemporaneous statement about causation is the most dangerous artifact obtainable in a PI case and it routes straight to the defense — *"I only looked down for a second"* ends the case, inside a self-authenticating record the firm built on purpose. Liability facts already live in attorney-controlled places: the police report, intake, the deposition.

**The non-obvious consequence:** the log is immutable, so a liability statement that arrives **cannot be removed** — deletion is spoliation, and deleting inside a tamper-evident chain makes the deletion provable. Prevention is the only real control.

- The prompt library must never open a liability door. **PIRRA never opens with, or returns to, how the injury happened** — the most natural rapport move in human conversation, designed out entirely.
- Onboarding states the boundary in plain language so the client knows where to put it.
- When liability content arrives anyway: capture, do not pursue, do not answer, quarantine, flag to the attorney immediately.
- **Voice is the highest-risk channel here** — an SMS turn has a gate between messages; a live call does not. Voice likely needs summarize-and-quarantine by default rather than verbatim capture into Tier 1.

---

## D6 — Build for the paralegal; the attorney touches two things

PI firms run on case managers. Building for an attorney persona who never logs in is how legal tech dies.

**Spine:** attorney authorizes → PIRRA captures → paralegal runs → attorney adjudicates → exhibits out.

Attorney-locked, credential-gated, non-delegable:
1. **Protocol authorization** at case open (~60 seconds, once). These clicks *are* the attorney direction, and they generate the direction letter for the file. If a paralegal can do this, the direction prong gets thin.
2. **Evidentiary-flag disposition.** A paralegal silently dismissing a credibility flag is making a legal judgment — Rule 5.3 supervision problem and malpractice problem. The attorney's disposition is also what puts mental impressions into Tier 2, upgrading it to *opinion* work product. The compliance requirement and the privilege requirement are the same feature.

**Flag tiering:** operational (missed appointment, client gone quiet, new symptom) → paralegal disposes. Evidentiary (inconsistency, adverse statement, volunteered liability) → attorney only, paralegal read-only.

**Tamper-evidence cuts both ways:** an unacknowledged flag sitting 60 days inside a hash-chained, independently timestamped record is proof the firm was on notice and did nothing. Requires an acknowledgment SLA, escalation on lapse, and a flag-retention decision with outside counsel before the pilot.

---

## D7 — Stay in the sliver

The substrate we are building — firm-branded number, SMS and voice, AI agent, attorney and paralegal in-thread, immutable record, CMS sync — **is** a client communication system, and a broader one than the PRD admits.

**Decision: build the substrate, sell the outcome.** We do not reposition as a legal communication layer.

Rationale: everything defensible about PIRRA is evidence-specific — FRE architecture, tier severability, the damages boundary, posture tagging, exhibit outputs. Strip those and we compete with Case Status, Hona, and the CMS vendors themselves, who ship messaging as a feature rather than buy it. It also breaks both of our best assets: the published `$149` works only as a *case cost*, and the regulatory burden we absorb is only worth carrying if we capture the evidence premium.

**But the substrate is built general anyway**, because these are cheap now and a rewrite later:
- **Channel abstraction** — SMS, RCS, and voice as pluggable transports over one conversation model.
- **The three-tier store is matter-type agnostic**, not a PI-specific schema.
- **CMS sync is a real integration layer**, not a one-off export. This is what makes the "works with any case-management system" claim true, and what makes us acquirable rather than replaceable.

---

## Open questions

- **Case closure.** Retention, export to the firm file, the client's copy, and the billing event after settlement. Immutability governs during representation; after is unwritten.
- **Proving attorney presence.** Minimum touch cadence and how we evidence it.
- **CMS sync severability.** How Tier 2 stays severable once it lands in Clio or Filevine.
- **Unit economics under load.** `$149` flat assumes light usage; the best cases are the most engaged. Model the deeply-engaged client, plus voice transcription.
- **Disbursement pass-through.** Records retrieval is clearly a case expense; software is often overhead. If it lands as overhead in key states, the sale changes from "free to you" to "$149 out of pocket," and the landing page leans on pass-through.
- **Sourcing "50–70% of settlement value."** Stated as fact in the PRD; correctly kept off the landing page. Source before any external use.

## References

- *United States v. Heppner*, S.D.N.Y. (Rakoff, J., Feb. 2026) — [Orrick](https://www.orrick.com/en/Insights/2026/03/Court-Rules-AI-Conversations-Are-Not-Privileged-What-United-States-v-Heppner-Means-for-You) · [Harvard Law Review](https://harvardlawreview.org/blog/2026/03/united-states-v-heppner/) · [McDermott](https://www.mcdermottlaw.com/insights/using-ai-without-waiving-privilege-lessons-from-heppner/) · [NYSBA](https://nysba.org/loose-ai-prompts-sink-ships-how-heppner-shook-the-legal-community/)
- *United States v. Kovel*, 296 F.2d 918 (2d Cir. 1961)
- ABA Formal Op. 512 (July 2024); Model Rules 1.1, 1.4, 1.6, 1.8(e), 5.3, 5.5
