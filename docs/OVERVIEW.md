# PIRRA — Full Plan Overview

*Self-contained summary, August 2026. Written to be read cold, without the rest of the repo.*

---

## 1. What it is, in one paragraph

PIRRA (Personal Injury Recovery & Response Agent) is an SMS-native evidence engine sold to
plaintiff personal-injury law firms. An injured client texts back and forth with an AI agent
on the firm's own phone number, under written attorney direction, for the life of their case.
Those conversations become a structured, timestamped, cryptographically hash-chained record of
the client's recovery — which the firm turns into court-ready exhibits: a demand-packet exhibit,
a recovery-curve chart, a deposition-prep log. Every figure in every exhibit traces back to the
exact message it came from. Price is $149 per case, flat and published.

The framing that governs everything: **PIRRA is the modern pain journal — the one clients
actually keep.**

---

## 2. The problem

Non-economic damages — pain, lost function, the life the client can't live yet — are the
majority of settlement value in a personal-injury case and the least-documented part of every
file. (We believe this is 50–70%; that figure is not yet sourced and should not be used
externally until it is.)

The existing solution is the injury journal. Attorneys tell clients to keep one. Almost nobody
does. And the clients who do produce an uncontrolled diary that the defense can subpoena,
cherry-pick, and weaponize — which is why many attorneys actively discourage them.

So by the time the demand gets written, the record of how the client actually suffered is
reconstructed from memory, months later, in a lawyer's voice rather than the client's.

PIRRA replaces a failed behavior with one that works: a natural text conversation, attorney-
directed, converted into a controlled, complete, tamper-evident record that is built to be
shown rather than hidden.

---

## 3. The product — three surfaces, one record

**The client sees a text thread.** SMS on a firm-branded number. No app, no login, no download.
Voice notes work. The agent checks in the way a person would, and captures when the client opens
up. It always discloses that it is an AI provided by the firm. Cadence is event-driven where
possible (post-appointment, post-PT) with a decaying calendar default. Non-response is logged
with neutral status codes — silence can never read as recovery.

**The paralegal sees a workbench.** A timeline built from the client's own words, each entry
tagged and clicking through to its source message; flags for treatment gaps and inconsistencies;
a weekly digest; and the ability to reply to the client in the same thread. Five surfaces:
queue, case view, thread, flag disposition, exhibit builder.

**The court sees a PDF.** Exhibits deliberately live outside the software — attached to demands,
printed for mediation, filed. All artifacts cite provenance and include the good days, because
completeness is what makes a record credible.

---

## 4. Market and competitive position

The buyer is the owner or managing partner at a contingency-fee plaintiff PI firm, volume to
mid-size. They are busy, skeptical of legal-tech hype, and have been burned before.

Three layers exist in this space, and the occupancy map is the whole strategic argument:

1. **Client-facing conversational SMS capture** — *contested.* EvenUp (~$2B category leader)
   shipped Medical Management + Treatment Check-In agents in Dec 2025 that conduct client
   check-ins via SMS or voice in English and Spanish, flagging treatment gaps and missed
   appointments.
2. **Court-ready evidence output from that capture** — *empty.*
3. **Privilege architecture around it** — *empty.*

PIRRA's moat is layers 2 and 3. Layer 1 is no longer a differentiator, which means the pitch
must lead with what comes *out* of the system, never with "we're conversational."

Others: **Quilia** (~800 firms) ships weekly, has human attorney↔client messaging (CaseChat) and,
*corrected Sept 5, 2026*, AI-guided in-app prompts with case memory; no evidence generation, no FRE
architecture — the most dangerous competitor by velocity. **EvenUp** *(added Sept 5)* launched
Communication Agents in Dec 2025: SMS and voice treatment check-ins and liability-verification
agents, so it is a capture competitor as well as a downstream consumer of exhibits. **Hona** *(updated Sept 4, 2026)* launched "Lia," a conversational SMS agent that
checks in after treatment visits, collects symptoms, flags treatment gaps and escalates to the
case owner, at 500+ firms. It is among the nearest competitors: same channel, same check-in
mechanic, no evidence layer (no exhibits, certification, hash chain, classification, liability
boundary or privilege posture). See `research/competitive-watch-2026-09-hona.md`. **Case
Status** remains a status portal. **Supio / Eve** are attorney-facing.

Pricing is itself a wedge: the entire category is contact-sales-only. PIRRA's $149 is the only
public number in the ecosystem.

---

## 5. The legal architecture — the distinctive part

This is where most of the thinking went, and where the product either is or isn't defensible.

### 5.1 Three tiers with three discovery postures

The central architectural decision. Earlier drafts treated the whole channel as one privileged
thread while simultaneously designing the log to be produced in discovery. Those cannot both be
true. Resolved as:

| Tier | Contents | Posture |
|---|---|---|
| **1 — The Record** | Client ↔ PIRRA capture | **Expect production.** No privilege claim asserted by default. Designed to win *on* production. |
| **2 — Intelligence** | Flags, credibility notes, inconsistency alerts, attorney annotations, counsel's protocol | **Work product.** Never produced. |
| **3 — Attorney messages** | Direct attorney ↔ client communication in-thread | **Privileged** on ordinary grounds. |

Asserting privilege over Tier 1 and losing is worse than never asserting it — a failed claim
invites a waiver fight over everything else. Producing a non-privileged document creates no
FRE 502(a) subject-matter waiver exposure, because waiver-expansion requires a waiver.

The three tiers must be **architecturally severable** — separate stores, separate export paths —
not one table with a visibility flag on each row. One bad export destroys the work-product claim
for that firm.

### 5.2 Where privilege actually matters

A pain journal is only the client's words. PIRRA additionally **generates adverse analysis about
the client that never existed before**: credibility flags, inconsistency warnings, engagement
scoring. *"Produce all PIRRA-generated inconsistency alerts for this plaintiff"* is the discovery
request that would make every case using PIRRA worse off than one that didn't.

So the privilege workstream targets **Tier 2, not Tier 1** — and Tier 2 sits on much stronger
ground: ordinary work-product doctrine under Rule 26(b)(3), attorney-directed, containing mental
impressions. It requires no novel theory at all.

### 5.3 Privilege theory: conduit primary, *Kovel* fallback

*United States v. Heppner*, S.D.N.Y. (Rakoff, J., bench ruling Feb. 10, 2026; written opinion
Feb. 17, 2026) held that documents a criminal defendant generated using consumer-grade Claude
while preparing his defense were **not** privileged and not work product. The AI is not a
lawyer; the consumer terms disclaimed confidentiality; and the defendant acted on his own
initiative without counsel's direction.

Rakoff rejected the *Kovel* argument (*United States v. Kovel*, 296 F.2d 918 (2d Cir. 1961) —
the accountant-as-lawyer's-agent case) on **two** grounds:

- **Direction** — Heppner engaged the AI himself, not at counsel's instruction. PIRRA answers
  this cleanly: counsel-retained, counsel-directed, written direction letter, contractual
  confidentiality, zero-retention enterprise model terms.
- **Necessity** — the AI was not *necessary* for counsel to understand the client. **PIRRA does
  not answer this.** Our client speaks English and could simply call the lawyer. This is the
  thinnest member in the whole structure.

Because of that gap, the primary theory is **conduit, not *Kovel***. Putting the attorney
genuinely into the thread means the client is communicating *to counsel* through the firm's
system — the same category as the firm's email server, phone system, or a paralegal under
Rule 5.3 supervision. Conduit requires no necessity showing. *Kovel* remains available as a
per-case fallback, never promised.

Three conditions attach: the attorney's presence must be **real and logged** (a nominal presence
dies on one deposition question — *"how often did you actually read this?"*); Tier 3 must never
share a stream with Tier 1; and response-time expectations must be set explicitly at onboarding,
because a client who believes counsel reads in real time creates Rule 1.4 exposure the firm did
not previously have.

### 5.4 Admissibility stack, ranked by load-bearing capacity

Earlier drafts over-weighted FRE 803(3). It covers *then-existing* condition and expressly
excludes statements of memory offered to prove the fact remembered — which means the
loss-of-enjoyment narrative we care most about ("I couldn't lift my daughter last weekend")
largely falls **outside** it. Reordered:

1. **FRE 801(d)(1)(B) — prior consistent statements.** *Lead theory.* Against a charge of recent
   fabrication or improper influence, contemporaneous statements made before the motive arose
   come in substantively. This is the strongest argument for contemporaneous capture and the one
   a badly-kept journal can never deliver.
2. **FRE 612 + foundation for testimony.** The workhorse. The client testifies; the log makes
   the testimony specific, dated, and consistent.
3. **FRE 703 — expert reliance.** Life care planners, treating physicians, vocational experts.
4. **FRE 803(3).** Real but narrow — present-tense condition only.
5. **FRE 1006 — summary exhibits.** A presentation rule. Keep it; don't lead with it.
6. **FRE 902(13)–(14).** Authentication only — answers *"is this the real log,"* not *"does it
   come in."* Requires a qualified certifying person, who can be deposed.

Product requirements follow directly: statement-posture tagging at capture time; a prompt library
engineered to elicit present-tense statements; precise timestamping with a pre-motive marker; and
a prior-consistent-statement packet as a first-class export.

Worth noting that ~95% of these cases settle. The exhibit's real job is moving an adjuster, not
surviving a Rule 104 hearing — which means the FRE citations are doing *credibility* work, and
therefore need to be airtight.

### 5.5 Tamper-evidence

Append-only event store with cryptographic hash chaining plus independent RFC 3161 trusted
timestamps. Self-authenticating under FRE 902(13)–(14). Explicitly **not** a blockchain, and the
sales line says so, because "no client data on a blockchain" is a feature to this buyer.

Messages are immutable originals. Corrections annotate; they never overwrite. No true deletion
once a client is under representation — archival only.

**This cuts both ways**, which is not obvious: an unacknowledged flag sitting for sixty days
inside a hash-chained, independently timestamped record is *proof the firm was on notice and did
nothing*. Handled well that's a selling point — a documented trail that the firm saw it and
acted. Handled badly it's the exhibit that gets PIRRA sued alongside its own customer. Requires
an acknowledgment SLA, escalation on lapse, and a retention decision with outside counsel.

---

## 6. Scope boundaries

### 6.1 The liability boundary

**PIRRA captures damages. PIRRA never discusses liability** — not causation, not fault, not
speed, not what anyone said at the scene.

This follows directly from Tier 1 being produce-expected. A client's contemporaneous statement
about causation is the most dangerous artifact obtainable in a PI case, and it routes straight
to the defense. *"I only looked down for a second"* ends the case — inside a self-authenticating
record the firm built on purpose. Liability facts already live in attorney-controlled places:
the police report, intake, the deposition.

The non-obvious consequence: because the log is immutable, a liability statement that lands in
Tier 1 **cannot be removed** — deletion is spoliation, and deleting inside a tamper-evident chain
makes the deletion provable.

So **classification happens before the write, not after it.** The Liability Containment Engine is
a real-time gate on the write path: liability content routes to a quarantine store and never
enters Tier 1 at all, which means producing the record does not produce the admission. Quarantine
is routing rather than deletion — the message stays immutable and hash-chained, just outside the
stream with an egress path, so there is no spoliation exposure. False negatives are unrecoverable;
false positives are cheap and attorney-reversible, so the classifier tunes aggressively toward
over-quarantine, and every quarantine raises an immediate attorney flag.

This is the primary technical IP — the piece nobody else in the category has to build, because
nobody else is producing evidence. The prompt library carries the other half: PIRRA never opens
with or returns to how the injury happened, the most natural rapport move in human conversation,
designed out entirely.

Voice is the highest-risk channel here. An SMS turn has a gate between messages; a live call does
not, and a client on the phone volunteers causation within thirty seconds.

### 6.2 The strategic boundary

The substrate being built — firm-branded number, SMS and voice, AI agent, attorney and paralegal
in-thread, immutable record, practice-management sync — **is** a client communication system, and
a broader one than the product docs admit. It would be tempting to reposition as a legal
communication layer that bolts onto any case-management system.

**Decision: build the substrate, sell the outcome.** We stay in the evidence sliver.

Everything defensible about PIRRA is evidence-specific — the FRE architecture, tier severability,
the damages boundary, posture tagging, the exhibit outputs. Strip those away and we compete with
Case Status, Hona, and ultimately the case-management vendors themselves, who ship messaging as a
feature rather than buy it. It also breaks both of our best assets: the published $149 works only
as a *case cost*, and the regulatory burden we absorb (bot disclosure, crisis escalation,
telephony compliance, privilege architecture) is only worth carrying if we capture the evidence
premium.

The substrate is nonetheless built general — pluggable channel transports, a matter-type-agnostic
tier store, and a real CMS integration layer — because those are cheap now and a rewrite later.

---

## 7. Operating model

**Spine: attorney authorizes → PIRRA captures → paralegal runs → attorney adjudicates →
exhibits out.**

PI firms run on case managers; building for an attorney persona who never logs in is how legal
tech dies. So the workbench is built for the paralegal, and the attorney gets the same
application with two extra permissions and a digest.

The attorney touches exactly two things, both credential-locked and non-delegable:

1. **Protocol authorization** at case open — roughly 60 seconds, once. These clicks *are* the
   attorney direction, and they generate the direction letter for the file. If a paralegal can do
   this, the direction prong of the privilege argument gets thin.
2. **Evidentiary-flag disposition.** A paralegal silently dismissing a credibility flag is making
   a legal judgment — a Rule 5.3 supervision problem and a malpractice problem. The attorney's
   disposition is also what puts mental impressions into Tier 2, upgrading it from ordinary to
   *opinion* work product. The compliance requirement and the privilege requirement turn out to
   be the same feature.

Flags are tiered accordingly. Operational (missed appointment, client gone quiet, new symptom) →
paralegal disposes. Evidentiary (account inconsistency, adverse statement, volunteered liability)
→ attorney only, paralegal read-only.

**Client consent** is not a novel problem — the attorney already has the "keep a journal"
conversation. PIRRA supplies the upgraded script: an engagement-letter addendum, an onboarding
SMS disclosure before any substantive capture (it's an AI from your firm · what you say is
recorded · your legal team sees it · **the other side may see it too** · be honest including the
good days · emergencies go to 911 · anything about how it happened goes to your legal team, not
here), periodic re-disclosure, and two-party recording consent per state for any voice channel.

**Hard rule:** PIRRA never coaches toward favorable content. Neutral, open elicitation only. A
coached journal dies on cross; a coached AI journal dies worse, because the transcript proves the
coaching in the machine's own words.

---

## 8. Business model

$149 per case, flat, published — tiering to roughly $199–249 for extended litigation. Target COGS
under $10 per case life, implying 90%+ margin. Priced as a **case cost** in the same reference
class as records retrieval or a court reporter, never as a software line item. No seats, no
annual contract, no migration, works with any case-management system.

Firms pass it through as a litigation expense (authority: ABA Formal Op. 93-379 and the Rule
1.8(e) framework), which requires state-by-state analysis before it can be asserted in a sale. A
dropped/lost-case policy is required.

Sales leads with **case preservation** (catch the treatment gap before the adjuster does — one
saved case pays for PIRRA across a whole caseload) plus **evidence production** (exhibits that
move settlement value).

### 8.1 What a pilot can and cannot prove

**Settlement lift is not measurable** — not difficult, structurally unavailable. There is no
counterfactual: a case cannot be settled twice, and cases differ by injury, venue, adjuster,
policy limits, and defense counsel. A control group would require deliberately under-documenting
a cohort of real injured plaintiffs, which is a malpractice and ethics problem rather than a
study design. A pilot designed around settlement lift produces numbers that cannot be published
or defended, and that would violate the no-outcome-promises rule if they were.

Defensible KPIs: **engagement retention** (% still responding at month 1 / 3 / 6 — the largest
execution risk in the product); **exhibit acceptance** (% of generated exhibits an attorney
actually sends with a demand — the truest signal of value, since exhibits generated and never
used mean nothing else matters); **gap detection** (count of treatment gaps flagged, with
attorney confirmation the gap was material); **time saved** (paralegal hours to assemble the
pain-and-suffering section versus baseline); and **flag acknowledgment latency**, already
required for the SLA.

Two design requirements follow and are easy to miss. A 90-day pilot **cannot** measure month-6
retention — either it runs longer, or it measures the month-1-to-3 curve as a leading indicator.
And time-saved **requires a week-zero baseline**, instrumented before PIRRA is switched on;
skip it and the metric is unrecoverable.

---

## 9. Regulatory surface

FTC Health Breach Notification Rule and state consumer-health-data laws. AI disclosure always —
bot-disclosure statutes (e.g. California's B.O.T. Act) plus FTC/UDAP exposure, and concealment
would hand the defense a motion. California's companion-chatbot law and Illinois's AI-therapy
restrictions push hard toward "legal-team support tool" positioning only — which is thin
protection if the actual transcripts read like therapy, so real conversation audits against that
line are a standing compliance workstream, not a positioning sentence. Crisis escalation protocol
(medical emergency → 911 plus firm alert). UPL deflection (settlement and legal questions →
decline and route to the attorney). Prompt-injection containment. Bar advertising rules govern
all marketing: no outcome promises, no privilege guarantees, ever.

There is **no separate companion mode.** One case-scoped channel; off-topic drift steered back;
crises escalate to humans. A discoverable companion side-channel would be a gift to the defense.

---

## 10. Known risks and open questions

Listed honestly, because these are what a good outside read should attack.

**Legal**
- The *Kovel* **necessity prong** is unanswered. Conduit is the workaround, but conduit depends
  entirely on the attorney's presence in the thread being genuine and provable.
- *Heppner* is a single district-court opinion in a criminal matter. Influential (Rakoff), widely
  written about, but binding nowhere.
- FRE 902(13)–(14) requires a qualified certifying person who can be deposed — a staffing
  requirement and a discovery vector into PIRRA the company.
- Disbursement pass-through may fail. Records retrieval is clearly a case expense; software is
  often overhead. If it lands as overhead in key states, the sale changes from "free to you" to
  "$149 out of pocket," and the marketing currently leans on pass-through.

**Product**
- Volume is a double-edged sword: 800 messages over 14 months is far more surface to cherry-pick
  from than a 20-entry journal. Completeness plus FRE 106 is the answer, but it is an argument,
  not a guarantee.
- Client engagement decay over 6–24 months is the single largest execution risk. The entire value
  depends on injured people continuing to text back.
- Voice materially raises both the liability-boundary risk and COGS.

**Business**
- Sub-$10 COGS is modeled against an average client. The most valuable cases are the most engaged
  ones, which are the most expensive ones.
- "Everyone bigger is a channel" holds until the channel builds the middle. EvenUp already owns
  both ends — client SMS capture and demand output — and has the distribution.
- The most defensible asset (privilege/tier architecture) is also the least demo-able. Hardest
  thing to copy, hardest thing to show in a sales meeting.

**Unresolved**
- Case closure: retention, export to the firm file, the client's copy, and the billing event
  after settlement. Immutability governs during representation; after is unwritten.
- Whether the quarantine store is itself protected. The underlying facts are discoverable
  regardless — via deposition of the client — but the store needs a stated posture before pilot.
- How to evidence the attorney's minimum touch cadence.

*Tier 2 severability inside a case-management system is resolved: the connector physically lacks
a Tier 2 endpoint. Only finalized Tier 1 exhibit PDFs and administrative milestones sync out —
and not `flag raised`, since the existence and timing of a flag is itself work product.*

---

## 11. What we'd most want challenged

1. **Is "conduit" actually stronger than *Kovel* here, or is it wishful?** The claim is that an
   attorney genuinely participating in the thread converts this from a third-party-agent problem
   into an ordinary-communications-infrastructure problem. Does that hold, or does the AI's
   active elicitation role break the conduit analogy no matter who else is in the thread?

2. **Is the three-tier severability sufficient**, or does producing Tier 1 realistically drag
   Tier 2 into discovery anyway — on the theory that the analysis is derived from the produced
   record?

3. **Is the pain-journal analogy load-bearing or convenient?** It resolves a lot of tension. Does
   it survive the fact that PIRRA also *generates analysis*, which no journal does?

4. **Is staying in the sliver right**, given that EvenUp already occupies the capture layer with
   distribution we can't match?

5. **Does the liability boundary survive contact with reality** — with real injured clients, on
   voice, over 14 months?

---

*Not legal advice. Every legal position above is subject to review by outside counsel per
jurisdiction before being asserted to a customer.*
