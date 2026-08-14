# PIRRA — Final Design Proposal v1.1 (Post-Review Consensus Draft)

**Date:** August 13, 2026
**Status:** For human counsel review (Round 4). Not legal advice. Supersedes v1.0.
**Provenance:** v1.0 was reviewed by three AI reviewers (Gemini, ChatGPT, Grok) in blind first passes, followed by a reconciliation round with targeted follow-ups. The process produced **31 dispositioned changes, six reviewer self-corrections or concessions on the record, named authority on both sides of the central question, one closed design decision, one restructured legal theory, and one human-verified statute.** The complete reviewer-response record is the companion document **PIRRA-Consensus-Review-Log.md**, incorporated by reference; change attributions below (G/C/K = review rounds 1–3; RG/RC/RK = reconciliation; FD = founder decision; V = human verification) point into it.

---

## How to review this document (human counsel)

The AI rounds are complete; this draft is for you. The same rules apply, plus one:

1. Every authority is listed in the Citation Register (§8) with its verification status. **Only one entry is human-verified (V1: CA Evid. Code §791).** Everything else — including cases an AI reviewer claimed to have "pulled" — requires a human read before it reaches a filing, a firm, or a deck. The process's own cautionary exhibit: the same AI reviewer characterized the same case (*Hager*) two different ways in consecutive rounds; only the paper opinion settled it.
2. §7's numbered questions are ranked; **Q1 received triple blind convergence** as the decisive issue — start there.
3. Where this document says "genuinely arguable," it means we most need you to argue the defense side.
4. Nothing here claims a legal outcome. The architecture is designed to *support* privilege, work-product, authentication, and hearsay-exception positions — never to guarantee them.

---

## 1. Thesis and identity

**PIRRA is jurisdiction-aware evidence capture infrastructure for plaintiff litigation, launching in personal injury.**

Non-economic damages are the majority of PI settlement value and the least-documented part of every file. Firms tell clients to keep injury journals; few do, and uncontrolled diaries get discovered and weaponized. PIRRA replaces that failed behavior: a natural SMS conversation on the firm's number, attorney-directed, committed to a tamper-evident record, and packaged — per forum — into exhibits, certifications, and discovery instruments.

The spine: **the client sees a text thread, the attorney sees the workbench, the court sees a PDF** — three surfaces, one immutable record underneath.

**The company thesis (revised, C19):** not "we discovered a hearsay hack," but **"we built the infrastructure that preserves the best available evidence, proves what happened to it technically, and knows the procedural and evidentiary options in the actual forum."** The fragmentation of state evidence law becomes part of the moat.

**Case-selection honesty (RC4):** PIRRA is a truth machine. It serves genuinely injured clients — whose complete, contemporaneous record defeats cherry-picking and surveillance theatrics — and it exposes exaggerating ones. Attorney-facing materials say so plainly; it is the positioning, not a defect.

**Language rules (absolute):**
- *Preserves evidence that would otherwise be lost* — never "creates evidence."
- No privilege guarantees anywhere. No admissibility guarantees anywhere ("admissible under FRE 902"-type formulations are banned: authentication is not admissibility, and guarantees are prohibited regardless).
- AI status always disclosed to the client. Never "companion," "coach," "nurse navigator," "chatbot," "AI legal assistant," "journal."
- **Purpose vs. consequence (G10):** the purpose is accurate contemporaneous documentation of the client's condition; better demands and firm retention are *consequences*. No internal or external document ever frames evidence generation as the purpose ("demand engine," "disguised as," and kin are banned). Founder language is discoverable.

**Pricing (FD1):** $149 per case, flat, published — sold to the firm. Whether and how a firm recovers the cost is the firm's question under its own rules; PIRRA makes no pass-through claim and gives no ethics advice. Any state-reference material is citations-only with "discuss with your ethics counsel." Extended-litigation tiering reserved; dropped/lost-case credit is a firm-relations choice.

**Naming:** PIRRA throughout; "Beam Capture," if retained, is an internal module name pending co-founder resolution. Trademark clearance in progress for PIRRA only.

---

## 2. Evidentiary architecture

### 2.1 The two-layer evidentiary structure (renamed per C15 — structure, not automatic admission)

The record is analyzed in two layers per the hearsay-within-hearsay rule (FRE 805 and analogues):

**Layer 1 — the log itself: the vendor's record.** PIRRA generates and retains capture logs for all users as a standard function of operating the service. The candidate foundation is FRE 803(6) via a 902(11) custodian certification and state analogues, with 902(13)–(14) as supplement where adopted. The certification's hard rule: **system operation only, never the claim** — it never vouches for the claimant, never characterizes content, never describes what any summary shows.

**Two battlefields, burdens running opposite directions (RC2):**
- **(B)/(C) predicates** ("kept in the course of a regularly conducted activity"; "making the record was a regular practice") — **PIRRA's burden as proponent.** Carried by the uniformity evidence: identical record-keeping for every user, predating any given case, plus the engineering-controls package (§2.2). This is where *Palmer*-type arguments can also be fought, and the proponent carries it.
- **(E) trustworthiness** — **the opponent's burden** post-2014, but per the Advisory Committee note (quoted, unconfirmed): the opponent "is not necessarily required to introduce affirmative evidence of untrustworthiness" and may sometimes carry the burden through circumstances — preparation in anticipation of litigation plus favoring the preparer being the note's own example. The burden allocation helps; it is **not a *Palmer* cure.**

**The question this architecture must answer — the *Hager* test (RC1):** *would the business have created this record anyway, absent litigation?* In *Hager v. Brinker* (5th Cir. 2024, register: named, human read required), two of three judges reasoned that a litigation threat does not automatically disqualify records the business would have created anyway (there, ordinary HR investigation practice); the *Palmer* exclusion analysis was a single judge, unjoined. PIRRA's honest difficulty: every user is a represented claimant, so "would have created anyway" must rest on the **operational-genuineness workstream** — the record's real, demonstrable utility independent of courtroom admission: the client-communication and care function, treatment-adherence support, gap alerts protecting the client's own health interests. Name what is real; never manufacture utility (that is fake neutrality, see §4.5).

**Adverse authority acknowledged (RG2):** *Certain Underwriters at Lloyd's v. Sinkovich* (4th Cir. 2000, register: named, human read required) excluded a third-party litigation consultant's **report** under 803(6), citing *Palmer*. The distinction brief for counsel: *Sinkovich* condemns a bespoke, human-authored analytical report prepared for one claim — **the artifact class PIRRA deliberately does not certify** (the chronology rides FRE 1006, never 803(6); §2.4). What must be distinguished is the raw, uniform, automated log. *Melendez-Diaz* (register) supplies quotable-against-us rhetoric ("calculated for use essentially in the court") but is Confrontation Clause criminal dicta, not a civil hearsay holding — be ready for it, don't overweight it.

**Posture:** this is ***Palmer* risk mitigation, not avoidance** (C1). The carrier/ISP analogy is illustrative only (C2): those records are typically a neutral third party's, often subpoenaed by the opponent; PIRRA's are proffered by the party that pays for the system. The counter to "PIRRA has no non-litigation business" (G3): *Palmer*'s rationale is litigation motive producing unreliable records, and an append-only, hash-chained, automated pipeline recording good days, bad days, and silence identically for every user **has no discretion through which motive could operate** — the client's motive is real, and it lives in Layer 2, where cross-examination handles it. Whether that holds is Q1.

**Layer 2 — the client's statements inside the log.** The client is not the vendor's employee; each statement needs its own vehicle (§2.3) — structurally identical to a patient's statement inside a hospital chart.

**Machine-metadata track (C3, converging with internal analysis):** timestamps, delivery events, hashes, MessageSids — genuinely machine-generated facts — may not be hearsay at all (the *Lizarraga-Tirado* line) and need only authentication. *Palmer* threatens the wrapper, never the machine layer. Do not assert nationally; investigate per state (pack field `machine_data_treatment`).

### 2.2 The reliability package (engineering controls; certification content TBD)

Five controls, built once, constant everywhere (relabeled per C13/K9 — these are **engineering controls and a practical certification/depo-prep checklist**, not yet asserted as the settled legal standard pending a human read of *Vinhnee* and its underlying 11-step framework):

1. Access control on the **data** · 2. Access control on the **program** · 3. **Change-logging** (alterations after creation are themselves recorded; no overwrite path exists) · 4. **Backup** with restore verification · 5. **Audit** — a scheduled integrity job re-verifies the hash chain against independently anchored digests; reports retained.

**Certification templates come in two non-interchangeable modes over this one substrate (C13):** a **902(11)-mode** declaration (business-record predicates) and a **902(13)-mode** certification (electronic process/system authentication), used per the forum's pack.

### 2.3 Statement-to-rule map — and what it forces in the product

**803(3)/present-state is the highway; everything else is a lane.** (C5/C6/K5.)

| Client statement | Candidate vehicle | Product consequence |
|---|---|---|
| "My back is at an 8 right now" | **803(3)** / CA §1250 then-existing physical condition — robust essentially everywhere | **Load-bearing.** Elicitation biases to present-state framing; see the density principle below |
| "Just tried to lift her and couldn't" (within minutes) | **803(1)** PSI where the analogue is real ("immediately" = minutes) | Event-proximate capture: post-PT/appointment triggers + always-open client-initiated path — justified **primarily as a credibility/contemporaneity feature** (maximally credible 803(3) everywhere), secondarily as PSI eligibility where available (K5) |
| "I couldn't sleep last night" | Prior-consistent rehabilitation where the gate opens; otherwise possibly refresh-only | **Contingent pathway, not an architecture leg (C5).** See the §791 finding below |
| Fallback: witness with genuinely insufficient recollection | **803(5)** recorded recollection — read into evidence; exhibit only if the adverse party offers it | **Demoted, not retired (C18):** a fallback row, never the design target |
| The log itself | 803(6) + 902(11) / state analogues | §2.1–2.2 |
| Timeline / recovery curve / chronology | **1006** summary | §2.4 |

**The density principle (C6, replacing v1.0's "conversion" language):** present-state framing does not convert historical facts — it **creates new evidence of the current condition.** The lever is *density*: capture the present so often that the record never depends on historical statements. Response rate is therefore an **evidentiary quality metric** (RG5): a client answering 90% of system-initiated prompts has little room for state-selective reporting; a low-response client leaves the self-selection attack ("Garbage-In, Hash-Out") standing. **Week-8 engagement is the record's credibility, not just retention economics.**

**The survey question (C5 reframe):** not "does historical material have a vehicle" but "does it have a **predictable, affirmative substantive pathway independent of a particular impeachment event**." First question in every jurisdiction pack, with pack fields `prior_consistent_rehab_rule` and `residual_exception` (broad residual exceptions, e.g. Nevada's, make "no vehicle" conclusions unsafe).

**The California finding — VERIFIED (V1):** CA Evid. Code §791 (human-read against leginfo, verbatim-confirmed) has two subdivisions: **(a)** keys to the *inconsistent statement's* timing — no motive requirement; **(b)** is the pre-motive branch. With §1236 (companion section making qualifying statements admissible for their truth — quoted, one pull from confirmation), CA prior-consistents are **contingent but alive** — and **§791(a) is structurally favored by exactly what PIRRA does**: early, dense capture means log entries will almost always predate any later inconsistent statement the defense impeaches with. Product feature: the workbench **rehabilitation finder** (§4.8).

### 2.4 Summaries and the certification line

A vendor-built chronology is a derived analytical product — the *Sinkovich* artifact class. It is never business-record-certified. The vehicle is **FRE 1006**: a summary of voluminous admissible records that remain available for inspection. **Hard rule:** if a certification ever recites what a chronology shows, it has crossed the line. Tier-2 intelligence (credibility flags, annotations, alert history) is work product — never offered, never certified.

### 2.5 Media (rearchitected per G1 + C12 — the process's highest-confidence change)

**Sealed raw-media vault:** the exact received binary, metadata intact, preserved in encrypted, access-logged, restricted storage — never surfaced, never used in working surfaces. **Sanitized derivatives** (EXIF-stripped) serve all routine surfaces. Redaction and production decisions happen at the packaging layer, with protective orders as the tool for third-party privacy — not destruction at ingestion. (v1.0's "stripped pre-commit / never collected" design is retired: stripping received ESI after a hold arguably attaches at retention was an avoidable FRCP 37(e) fight.)

Photos remain **attorney-elected per case, off by default**, anchored to dated entries only. **Day-in-the-life montage rejected:** completeness is the credibility argument, and self-selected video is structurally a highlight reel of bad days — the uncontrolled diary the product exists to replace. Sequencing: not until the liability classifier is proven on text.

### 2.6 Discovery posture

**RFAs go to the defendant only** (FRCP 36 runs between parties). The foreclosure set — atomic, fact-based, expecting useful denials (Rule 37(c)(2) cost-shifting): true copy; made at or near the time; unaltered since recording. The **"no gaps/omissions" RFA is permanently retired** (our own neutral status codes let the defense deny it truthfully and weaponize it). Never ask the opponent to admit a legal conclusion.

The reliability-package checklist doubles as **(a)** the certification templates' content source and **(b)** a **deposition-prep outline** for a live platform witness.

**The 801(d)(2) asymmetry (RC4 — the most important risk identified by the review process):** every log entry is a party-opponent statement when offered *against* the client, while the client's own favorable historical statements face hearsay walls. The defense mines the complete log — good days, activity references, inconsistent scores, missed treatment, prior injuries, contradictions against depositions and medicals. **The completeness architecture stands anyway:** a selective log is strictly worse (spoliation exposure, cherry-pick optics, FRE 106 pulls context in regardless). The asymmetry is the priced cost of the credibility strategy, and it produces four requirements: (1) attorney-facing **case-selection honesty** (§1); (2) a formalized **pre-demand impeachment-surface review** in the workbench (§4.8) — find the mined nuggets before the adjuster does; (3) **client onboarding language**: statements can be *used against you*, not merely "remain discoverable"; (4) validation of **liability steering** — 801(d)(2) is precisely why elicitation never asks about fault (steer / flag / never delete, §4.2).

### 2.7 The authentication fallback stack (formalized out of review round 1)

**Certification where available → stipulation where obtainable → live qualified witness always supported** (C7). Concretely: 803(6)+902(11)-mode certification → 902(13)/(14) where adopted → authenticity stipulation → 901(b)(1) client adoption / 901(b)(9) platform-witness foundation (the depo-prep kit exists for exactly this). **California mechanics (G2/RG6, verified in part):** the §1561 affidavit rides the subpoena regime — the CA pack therefore ships a **stipulation-in-lieu package and a friendly-SDT workflow** (the firm subpoenas its own vendor, which also lands the record in the "obtained by legal process" posture), plus §§1552–1553 computer-record presumptions with foundation. Judicial notice is not a pathway (conceded, RG6). **Business-model consequence (C7):** custodian operations are a real function, not an edge case — standardized declaration kits, deposition-ready custodians, cost model.

---

## 3. Privilege architecture (Model C)

### 3.1 The four layers (unchanged core)

(1) **Attorney authorization before any client message** — counsel authorizes a conversation *protocol, not a script*, including express authorization for empathetic conversation as the means of facilitation; per-client direction letter; contractual chain (firm → PIRRA as confidential agent → enterprise model terms: zero retention, no training, subpoena notice, tenant isolation); BYOM tier with validation + eval gate. (2) **One privileged thread, no companion side-channel** — reaffirmed 3/3 by the review process (RK1): segregation recreates the discoverable-emotional-diary problem; "two threads look cleaner on paper and create a worse evidentiary and discovery posture in practice." AI status disclosed; agent vs. attorney messages unmistakably labeled; bidirectional attorney messaging in-thread. (3) **Everything lands in the firm's client file** (MCP); immutable originals; corrections annotate; litigation-hold and 502(d) ready. (4) **Attorney surface** (§4.8).

### 3.2 *Palmer* risk mitigation (renamed per C1 — mitigation, not resolution)

The two halves of the architecture want opposite characterizations of the same record, and the defense's exhibit is **the commercial flow itself** (C1/K2): claimant retains PI lawyer → lawyer buys PIRRA → lawyer authorizes what PIRRA elicits → PIRRA captures damages evidence → PIRRA produces demand artifacts. "The existence of the protocol object — even as pure work product, never certified — proves litigation purpose."

**What the split does:** it keeps the *certified* layer factually uniform. The vendor certifies only what is identical for every user and predates any case: capture mechanics, cadence engine, reply timing, retention, hash chain, timestamps, the reliability package, neutral prompt text, status codes. Topic authorization, elicitation emphasis, and any jurisdiction-aware framing live in **counsel's protocol** as opinion work product; the jurisdiction pack is delivered *to counsel* as advisory input and to the packaging engine — **never into the capture engine.** The disclosable substrate contains no rule-targeting information anywhere (§4.5).

**What the split does not do:** erase the purpose for which the record came into existence. The strongest factual defense is not database separation — it is **evidence that the capture records are operationally genuine and useful independent of courtroom admission** (C1), i.e., passing the *Hager* test (§2.1). This is genuinely arguable and is **Q1**.

### 3.3 The privilege theory, restructured (RK3/C8/C9/C10)

**Primary: conduit / channel-to-counsel.** PIRRA is the firm's communication infrastructure — firm-branded number, messages intended for counsel, the attorney genuinely receiving and replying in-thread, everything landing in the client file. On this frame the operative doctrine is **agency + confidentiality** (a lawyer's assistant, answering service, or voicemail taking client messages), not *Kovel* necessity. The attorney-participation engineering is what makes the characterization *factually true* — measured as **substantive engagement** (attorney reads, substantive replies, alert-driven actions), never message counts; performative cadence is worse than absence in the record (K7).

**Secondary: *Kovel*'s own disjunctive bar** — the agent's presence "necessary, **or at least highly useful**, for the effective consultation" (pin quote, register). The facilitation argument: without the agent, the consultation about recovery is *empty* — the communication never occurs. Behavioral-necessity framed as *Kovel*-necessity fails (RK3: it proves superior automation, not a translation barrier); framed under "highly useful for effective consultation," it is contested but live. **Banned:** the "translates client experience into legal categories" steelman — it concedes the evidence-engineering attack.

**Routing:** FRE 501 → state privilege law governs state-law claims. The design target is the operative agency/facilitation doctrine in each launch state (CA/AZ/NV privilege counsel question), not a mechanical federal *Kovel* test.

***Heppner*, corrected (C8, confirmed by unprompted three-source convergence, K1):** the opinion's grounds were (1) not an attorney, (2) no reasonable confidentiality expectation in the consumer product, (3) not prepared at counsel's direction or reflective of counsel's strategy at creation. The counsel-directed-agent language is "might arguably" **dicta**. The opinion does **not** analyze or reject a separate necessity prong — v1.0's contrary statement was a drift error propagated from the Aug memo. **Pull the opinion** (top register priority) to confirm.

**The waiver lifecycle (C10):** the same communications begin shielded and are later deliberately offered. 502(a) limits subject-matter waiver, but fairness can pull related communications along; state rules vary. Hence the **`message_class` taxonomy** (§4.2) and production protocol: the offered substrate is client statements + eliciting prompts; attorney communications are withheld with privilege-log entries; whether completeness/fairness forces them anyway is a Q5 sub-question.

**Graceful degradation (honest limit):** if agent-privilege fails on the thread, the Layer-A record was **built to be produced** — shield by default. Privilege failure costs pre-election confidentiality and pressures Layer-B adjacencies; it is not catastrophic to the disclosable record. The catastrophic design would have been a hidden diary; that is not this design.

**The attack bank (for counsel prep):** "an evidence-generation engine with an empathetic skin"; "the design itself supplies the motive-to-fabricate narrative" (RK1); "*Palmer* in a lab coat"; "Garbage-In, Hash-Out" (RG5); the commercial-flow narrative (C1/K2); the 801(d)(2) mining list (RC4). Counters filed with each in the Review Log.

---

## 4. Back-end architecture

### 4.1 Two planes — corrected mental model (C11)

**Evidence plane = deliberately production-ready. Intelligence plane = protection asserted item-by-item** — the plane label does not determine discoverability. Item map: counsel protocol = strongest work-product candidate; jurisdiction packs = weakest (pre-case vendor R&D; counsel's *application* is different); the "why this question" panel = split by generic-vs-case-specific rationale; liability-flagged **client words are never protected by the bucket** (the annotation may be); **audit/integrity reports are production-ready-by-design** — a system that relies on integrity to authenticate cannot shield the audit trail; the neutral prompt registry is assumed discoverable, *and that is desirable* — the prompts are built to survive daylight.

```
CLIENT (SMS/RCS/MMS, firm-branded number)
        │
   Twilio webhook ── signature validation · E.164 · allowlist · MessageSid idempotency
        │
   CAPTURE ENGINE (uniform nationwide; counsel's protocol object as per-case input)
   conversation orchestrator (no tool use) · reply scheduler · escalation triggers ·
   commit pipeline (classify → hash → commit → anchor; native media → vault, derivative → store)
        │
┌───────┴────────────────────────────┐
│  EVIDENCE PLANE (production-ready) │   INTELLIGENCE PLANE (asserted item-by-item)
│  append-only event store           │   extraction/flags · credibility & consistency
│  message_class on every event      │   analysis · attorney annotations · alert history
│  hash chain + trusted timestamps   │   counsel protocol objects · jurisdiction advisories
│  neutral prompt registry           │   "why this question" panel · rule-target metadata
│  sealed raw-media vault + derivs   │
│  audit/integrity reports           │
└───────┬────────────────────────────┘
        │
   PACKAGING ENGINE (jurisdiction packs; notice state machine)
   exhibits · 1006 charts · depo log · dual-mode certifications · notice packets ·
   defendant RFA set · CA stipulation/friendly-SDT package · candidate-pathway labels
        │
   MCP → firm client file (system of record)          WORKBENCH (attorney surface)
```

### 4.2 The immutable evidence store

Append-only. Every event: `raw_text` verbatim · **`message_class`** (`agent_prompt` / `client_statement` / `attorney_communication` / `system_event`) — the waiver-scope and production-protocol backbone (C10) · `eliciting_prompt_id` (→ neutral text only) · client + server timestamps · channel · delivery/response timing · media refs (native binary + metadata → sealed vault; sanitized derivative → working store) · neutral non-response status codes (silence never reads as recovery) · annotation events (no overwrite path) · `hash_prev`/`hash_self` · trusted-timestamp anchors (RFC 3161 or third-party digest anchoring — **not a blockchain**). No deletion once under representation — archival only. **Liability-adjacent content: steer / flag / never delete** — elicitation never asks about fault (801(d)(2) is why); anything arriving anyway commits immutably, is excluded from exhibit surfaces, and routes to counsel by alert.

### 4.3 Reliability controls → certification recitals (dual-mode)

The five §2.2 controls map to concrete implementations (RBAC + tenant isolation + access logging; signed releases + change control + deploy audit; append-only store + annotation events; automated backup + restore tests; scheduled hash-chain re-verification against anchored digests, reports retained). One package, three uses: engineering spec, certification-template content (902(11)-mode and 902(13)-mode variants), live-witness depo-prep outline.

### 4.4 Capture engine (uniform nationwide)

Event-triggered check-ins within minutes (post-PT/appointment/procedure) + always-open client-initiated path + decaying calendar default, client-adjustable, with re-engagement flows — **engagement engineering is evidentiary engineering** (§2.3 density principle). Micro-prompt spine + conversational capture net; present-state framing bias; steering only for genuinely non-case content; AI disclosure maintained; burst detection and human reply timing. Escalations: medical emergency → 911/ER + firm alert; UPL/settlement → decline + route to attorney; treatment gap → alert into the acknowledgment workflow. Neutrality rule: capture taxonomy maps to insurer value drivers; *elicitation never does.* Containment: no tool use in the client channel; history scoped per conversation; model output treated as data.

### 4.5 Prompt registry + the library test (C14)

Prompts live in the evidence plane as `{prompt_id, neutral_text, version}` — nothing else; all rationale metadata lives only in the intelligence plane. **Governance rule — the library test:** every prompt must have a genuine standalone check-in justification ("would a thoughtful non-lawyer check-in service plausibly ask this?") **without consulting jurisdiction metadata.** Jurisdiction affects *selection and timing among* legitimate prompts; it never spawns rule-bespoke prompts. **No fake neutrality:** the system's evidentiary utility is acknowledged honestly; what is defended is that the documentation function is genuine and uniform. Acceptance tests: the library test (legal) and client-perceptibility of CA-vs-AZ weighting (UX) — both must pass.

### 4.6 Jurisdiction pack service

Versioned, signed config documents (~20–30 fields): forum · `business_record_rule` · `custodian_affidavit_available` + mechanics (e.g., CA: subpoena-tied; stipulation-in-lieu supported) · `electronic_self_auth_rule` · `notice_period` + mechanics · `present_sense_rule` + timing · `current_physical_condition_rule` · `past_condition_rule` · `prior_consistent_rehab_rule` · **`residual_exception`** · **`machine_data_treatment`** · `recorded_recollection_rule` · `summary_rule` · `photo_authentication` · `rfa_mechanics` · `privilege_notes` (operative agency/facilitation doctrine) · citations · `last_reviewed` · `reviewed_by`. **Constraints:** packs feed exactly two consumers — the counsel advisory generator and the packaging engine — never the capture engine. Nothing ships without `reviewed_by` populated by a named human who pulled the rule text. Cases pin pack versions at opening; forum field = anticipated + alternate; forum change re-runs mapping over the same substrate. Launch packs: Federal + pilot-firm states (CA/AZ/NV working assumption; pilot geography overrides).

### 4.7 Packaging engine + the notice state machine (C16)

Per forum: demand-packet exhibit · 1006 recovery curve · depo-prep log (FRE 612 discipline) · dual-mode custodian certification · **notice packet with machine-enforced state:** `CERTIFICATION_ELIGIBLE → NOTICE_NOT_SERVED → NOTICE_SERVED → OBJECTION_RECEIVED → LIVE_FOUNDATION_REQUIRED` — the engine **refuses to represent a certification route as ready** until service requirements are satisfied · defendant RFA set · CA stipulation/friendly-SDT package · provenance throughout. **Labeling:** never "admissible" — candidate-pathway tags with rule, factual basis, and a counsel-review-required flag.

### 4.8 Workbench

Timeline over immutable originals · alerts + acknowledgment (tiers, budgets, batching) · weekly digest · in-thread reply · live view · "why this question" panel (intelligence plane) · **pre-demand impeachment-surface review** (RC4): a required step surfacing the Tier-2 inconsistency flags and the defense's likely 801(d)(2) mining list before any demand ships · **rehabilitation finder** (V1): input an inconsistent statement's date + topic → all prior consistent entries on that topic predating it, provenance-cited — §791(a)-shaped by design, useful everywhere.

### 4.9 Controls

Encryption; tenant isolation; zero-retention/no-training model terms; BYOM validation + eval gate; subpoena protocol (firm asserts privilege/control; vendor notice; in-camera readiness); minimal-metadata discipline; data follows the client file; FTC HBNR + state consumer-health-data compliance; bot-disclosure compliance; "legal-team support tool" positioning; TCPA/10DLC as MVP-critical.

---

## 5. Operational flow, per case

Retention → direction letter + engagement amendment → counsel reviews the jurisdiction advisory and authorizes the protocol (topics, emphasis, media election, escalation defaults) → client onboarding: consent + AI disclosure + **sharpened notice: your statements go in your file and can be used against you** → capture runs (uniform engine; counsel's protocol; substantive attorney touches) → workbench monitoring → **pre-demand impeachment-surface review** → packaging: exhibit + certification + notice packet (state machine green) + RFA set for the pinned forum → forum change re-maps over the same substrate → resolution: archival; record follows the client file.

---

## 6. Changelog v1.0 → v1.1 (by source; full dispositions in the Review Log)

| Change | Source |
|---|---|
| §3.2 renamed "*Palmer* risk mitigation"; commercial-flow = canonical attack; operational-genuineness workstream; *Hager* test named | C1, K2, RC1 |
| §2.1 two-battlefield burden structure; AC-note corrected proposition; carrier/ISP analogy demoted | C2, RC2 |
| Media rearchitected: sealed raw-media vault + sanitized derivatives (replaces pre-commit stripping) | G1 ≡ C12 (double-blind) |
| §2.3 rewritten: density principle (creates-not-converts); survey question reframed; (B)(ii)-type paths demoted to contingent; 803(5) restored as fallback; response rate = evidentiary metric | C5, C6, K5, RG5 |
| CA §791 verified (two branches; (a) non-motive-timed); §791(a) structurally favored by early capture; rehabilitation finder | **V1**, C4, RG4 |
| CA mechanics: three-tier fallback stack; stipulation-in-lieu + friendly-SDT; judicial notice rejected; custodian-ops business item | G2, C7, RG6 |
| *Heppner* corrected (no necessity holding; drift error); privilege theory restructured: conduit primary, *Kovel*-highly-useful secondary, translation steelman banned, state routing, graceful degradation | C8, C9, K1, RK3 |
| One-thread design reaffirmed 3/3; companion mode closed | RK1 |
| `message_class` taxonomy + production/withholding protocol; waiver-lifecycle sub-question | C10 |
| Plane mental model corrected: production-ready vs. asserted item-by-item; audit reports production-ready | C11 |
| Library test governance; no fake neutrality | C14 |
| Notice state machine; certification-readiness enforcement | C16 |
| 801(d)(2) asymmetry: risk entry + case-selection honesty + pre-demand review + onboarding language + steering validation | RC4 |
| Stratification replaced (adjuster-discounting version); uncertainty-reduction value theory | RC3 |
| Firm-as-certifier rejected; adoptive/integrated residual folded into Q2 research | K11, RK2 |
| Vinnhee five factors relabeled engineering controls; dual-mode certifications | C13, K9 |
| Pass-through dropped; pricing separated from recoverability; purpose-vs-consequence language rule | FD1, C17, G10 |
| Pack fields `residual_exception`, `machine_data_treatment`; sales-copy journal-claim caution | C3, C5, K10 |

---

## 7. Open questions for human counsel (ranked)

1. **The *Palmer* fight (triple-convergent — start here).** Does the uniform/per-case split plus operational genuineness survive the commercial-flow attack at the (B)/(C) predicates? Argue the defense side. Read *Hager* and *Sinkovich* first (register) and tell us which side of *Hager*'s intra-panel split a state trial court in our launch states would take. What real non-litigation utility would you want documented before the pilot?
2. **Vendor posture.** Paid plaintiff-side vendor proffering its own record: does uniformity carry (B)/(C), and how much does the (E) burden actually help given the AC note? Which analogue line (adoptive/integrated records; provider records obtained by legal process) is worth a research budget — noting RK3's caution that debt-buyer/med-chron records may enter through different doors?
3. **Prior-consistent survey** per the reframed question, state by state (CA resolved-verified; confirm §1236). Does the defense's "frame every impeachment as motive" gambit (C7 refinement, G7) work in practice?
4. **CA package review:** §1271 testimony requirement; §1561 "personnel of the business" textual question for claimant-authored content; stipulation-in-lieu + friendly-SDT workflow; §§1552–1553 role.
5. **Privilege:** the operative agency/facilitation doctrine per launch state; the conduit-primary theory's strength; what substantive attorney-participation record a court would want; the waiver-lifecycle question (does fairness pull withheld attorney messages into a production of client statements + prompts?); pull *Heppner*.
6. **Discoverability map** (§4.1 item list) — confirm or correct each posture.
7. **Media/vault:** preservation posture confirmed; third-party-in-frame handling via protective order; any residual 37(e) exposure.
8. **Certification templates** (attached in next rev, dual-mode): system-operation line discipline; whether recitals suffice per *Vinhnee* once pulled.
9. **Library-test audit:** review the prompt library against the standalone-justification standard; review sample CA-vs-AZ exchanges for perceptibility.
10. **Two-layer tolerance** by state; any business-record analogue that resists party-proffered records containing the party's own statements.
11. **Notice mechanics** per state; state-machine spec review.
12. **Client counseling materials:** onboarding/consent language including the "can be used against you" notice; case-selection guidance language for firms (RC4).

---

## 8. Citation register (status-controlled)

**Statuses:** VERIFIED-HUMAN · QUOTED-UNCONFIRMED (text quoted by an AI; check against source) · NAMED-PULL-REQUIRED (full cite exists; human read required) · LOCATE (insufficient cite) · RULE-TEXT-CHECK (public text; verify current version).

| Authority | Used for | Status |
|---|---|---|
| **CA Evid. Code §791** | Two-branch prior-consistent structure; (a) non-motive-timed | **VERIFIED-HUMAN (V1, Aug 13 2026, leginfo)** |
| CA Evid. Code §1236 | §791-qualifying statements admissible for truth | QUOTED-UNCONFIRMED — one pull from done |
| *Hager v. Brinker Texas, Inc.*, 102 F.4th 692 (5th Cir. May 22, 2024) | Intra-panel *Palmer* split; the "would have created anyway" test | NAMED-PULL-REQUIRED (same AI characterized it two ways across rounds — read the opinion) |
| *Certain Underwriters at Lloyd's v. Sinkovich*, 232 F.3d 200, 204–05 (4th Cir. 2000) | Adverse: litigation consultant's report excluded under 803(6) | NAMED-PULL-REQUIRED — priority; distinction brief |
| *Melendez-Diaz v. Massachusetts*, 557 U.S. 305, 321–22 (2009) | "Calculated for use essentially in the court" rhetoric | NAMED-PULL-REQUIRED; context caveat (Confrontation Clause criminal dicta) |
| *United States v. Heppner* (S.D.N.Y. Feb. 17, 2026) (Rakoff, J. per reviewer) | Grounds: not attorney / no confidentiality / no direction; *Kovel* dicta; **no necessity holding** | NAMED-PULL-REQUIRED — **top priority** (three-source convergence to confirm) |
| *United States v. Kovel*, 296 F.2d 918, 922 (2d Cir. 1961) | "Necessary, or at least highly useful, for the effective consultation" | QUOTED-UNCONFIRMED pin cite; pull |
| *Palmer v. Hoffman*, 318 U.S. 109 (1943) | Litigation-prepared record excluded | NAMED-PULL-REQUIRED |
| *In re Vee Vinhnee*, 336 B.R. 437 (9th Cir. BAP 2005) (+ Imwinkelried framework) | Reliability foundation; our five-factor distillation | NAMED-PULL-REQUIRED before any "must contain" claim |
| *United States v. Lizarraga-Tirado*, 789 F.3d 1107 (9th Cir. 2015) | Machine-generated data not hearsay | NAMED-PULL-REQUIRED |
| *Tome v. United States*, 513 U.S. 150 (1995) | Pre-motive requirement, federal prong (i) | NAMED-PULL-REQUIRED |
| 2014 Advisory Committee note, FRE 803(6)(E) | "Not necessarily required to introduce affirmative evidence" | QUOTED-UNCONFIRMED |
| FRE 803(1),(3),(5),(6); 805; 801(d)(1)(B); **801(d)(2)**; 902(11),(13),(14); 1006; 612; 502; 106; 501; FRCP 36; 37(c)(2); 37(e) + 2015 AC note | Throughout | RULE-TEXT-CHECK |
| CA Evid. Code §§1241, 1250, 1271, 1552–1553, 1560–1562 (incl. "personnel of the business") | CA package | RULE-TEXT-CHECK (characterizations consistent across reviewers; verify) |
| TX 801(e)(1)(B); FL prior-consistent provision; AZ mirror incl. prong (ii); NV NRS 51.075 residual; NY pre-motive doctrine; HRE 902 ending at (11) | Survey inputs | RULE-TEXT-CHECK per pack; nothing ships without `reviewed_by` |
| ABA Op. 512 (incl. fees section); FL Ethics Op. 24-1; NYSBA Op. 1023; ABA Op. 93-379; Model Rules 1.1, 1.4, 1.5, 1.6, 1.8(e), 5.3, 5.5 | Ethics overlay (pass-through refs now optional-enablement per FD1) | NAMED-PULL-REQUIRED (NYSBA number least confident) |
| *Bistrian v. Levi* (E.D. Pa. 2020); *Live Oak Banking v. Blakely* (S.D. Tex. 2023, WL-only) | 37(e)/metadata (moot for design; papers the file) | NAMED-PULL-REQUIRED / LOCATE (WL-only = highest fabrication-risk profile) |
| CA fair-claims-settlement regulations (thorough/objective investigation) | Demand-floor analysis | LOCATE |
| S.D. Tex. materials paper (2017 self-auth rules) | Provider-records distinction | LOCATE |
| *In re Grand Jury* (9th Cir.); *Kellogg* (D.C. Cir.) | Dual-purpose tests | NAMED-PULL-REQUIRED |

---

## 9. Build sequence and pilot posture

**Phase 1 — Channel POC** (in flight): unchanged; AI disclosure in system prompt; deletion → archival before real clients.
**Phase 2 — Evidence layer:** append-only store + hash chain + anchoring; **plane separation, neutral prompt registry, and `message_class` built in from the start**; **sealed raw-media vault + derivative pipeline** (replaces the EXIF-strip commit step — spec correction already issued); event-proximate cadence + client-initiated path; escalations; counsel-protocol object; reliability controls.
**Phase 3 — Workbench + packaging:** timeline, alerts+ack, digest, demand exhibit, **dual-mode certification templates, notice state machine, pre-demand impeachment-surface review, rehabilitation finder,** candidate-pathway labeling; 1006 chart + depo log fast-follow.
**Phase 4 — Scale:** ISV tenancy; CMS integrations; jurisdiction pack service + versioning; BYOM; photos only after the text liability classifier proves out; custodian-ops function stood up before contested-case volume.

**Pilot posture:** Model C only; existing clients under active representation; written direction letters; documented **substantive** supervision and attorney touches; zero-training contracts; contemporaneous privilege logs; PIRRA-managed inference; 90-day bounded test. **Go/kill gates (expanded per K12):** week-8 engagement floor (now an *evidentiary* threshold, §2.3); **outside-counsel sign-off in pilot states on both pillars — the privilege architecture AND the business-record/*Palmer* theory**; attorney willingness-to-pay; one attorney reference. The pilot cannot produce admissibility outcomes; it produces engagement data, counsel sign-off, and willingness-to-pay — the demand-floor value thesis (RC3) is what it tests.

---

*Standing caution: this document contains legal characterizations assembled from project research and AI review rounds. One item is human-verified; everything else must be pulled and read by a human before it reaches a filing, a firm, or a deck — including everything in this document.*
