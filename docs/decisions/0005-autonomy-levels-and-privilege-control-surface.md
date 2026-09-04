# DR-0005 — Autonomy levels, approval regimes, and the privilege control surface

**Status:** Accepted · **Date:** 2026-09 · **Builds on:** Design Proposal v1.1 §3–§4, DR-0004
**Supersedes:** the flat "never claim privilege over the record" rule in DR-0002 D11, refined below

> Not legal advice. Statutory and ethics references are from working memory except where marked
> and must be pulled before use outside the team.

---

## Why this record exists

A founder question forced the issue: *if a court ever holds that the attorney-directed AI's
conversation was not privileged, does the firm lose everything?* The answer is no, and the
reasoning is the foundation of this record.

**Privilege is assessed per communication.** A judicial finding that the AI thread was not
privileged is a finding that privilege never attached to that thread. It is not a waiver, because
waiver requires the holder's voluntary disclosure. It does not reach the client's emails, calls,
meetings, or any other communication. The blast radius of an adverse ruling is the PIRRA thread
itself. *(Doctrinal; obtain written confirmation from outside counsel before any pilot.)*

That confines the question to: **how strong can the privilege posture over the thread be made,
and how survivable is the thread if the posture fails?** This record answers the first half. The
second half is the production-safe architecture already in v1.1.

## The organizing principle

The court's question is whether the client was communicating with her lawyer through the
lawyer's tool, or talking to a machine. Every control below moves the answer one way:

**The less the AI generates in the client channel, the more ordinary the legal question.**
Generation is where the AI becomes an actor. Selection and transmission are where it remains a
medium, like an answering service or an email server.

## Terminology rule (absolute)

Counsel **authorizes**, **configures**, or **directs** the assistant. Counsel never **trains** it.
"Training" a model on client communications is the conduct ABA Formal Op. 512 warns against and is
Heppner's second ground. The word does not appear in UI, docs, contracts, or marketing.

---

## D20 — Autonomy levels (Dial 1)

Elected per case at setup. Recorded to the case. Changeable, with each change recorded.

| Level | Client channel behavior | Analogy | Posture | Cost |
|---|---|---|---|---|
| **0 · Relay** | Counsel authors every message; PIRRA schedules delivery and records replies. No AI in the channel. | Email / voicemail | Identical to channels firms already use | Highest lawyer time, lowest engagement |
| **1 · Counsel's questionnaire** | Counsel approves a fixed prompt library at setup. PIRRA *selects* by schedule and rule. Tap-to-answer or free text. Fixed acknowledgment set. | Answering service delivering the lawyer's questions | Very strong | Low engagement, no follow-up |
| **2 · Selected follow-up** | Level 1 plus follow-ups *chosen* from a counsel-approved set by a classifier reading the reply. Zero free generation. | Decision tree | Strong; selection is mechanical | Moderate engagement |
| **3 · Bounded generation** | AI generates natural follow-ups inside counsel's authorized topics; an independent validator rejects anything off-scope before send. | The untested case, mitigated by direction and disclosure | Novel | High engagement |
| **4 · Autonomous** | Full generation, event-triggered, voice notes. | Most novel | Weakest characterization | Highest engagement and density |

Mapping to the wizard's existing conversation modes: Minimal ≈ 1, Structured ≈ 2, Standard ≈ 3,
Intensive ≈ 4. Level 0 is new. **"Firm mode"** = Levels 0–1 with library approval. **"Auto
mode"** = Levels 3–4. That is the top-level election on the mode screen.

*Refinement, Sept 5, 2026 (protocol v1.4, `docs/demo-case/protocol.md`).* Level 2 selection may fill a
**sourced slot** in a library prompt with the client's own earlier words, validated verbatim against a
prior `client_statement`; a failed match blocks the turn. This gives the agent memory without giving
it composition. It is still Level 2: the model writes nothing. The refinement exists because a
library-only agent with no memory read as a questionnaire in the first demonstrated case.

**Default: Level 2.** The wizard suggests the strongest posture that meets the case's evidentiary
need and requires the attorney to elect upward knowingly. The mode screen states the posture
consequence of each level in plain, non-guarantee language.

## D21 — Approval regimes (Dial 2)

Orthogonal to autonomy.

| Regime | Mechanism | Effect | Tradeoff |
|---|---|---|---|
| **Library approval** | Counsel approves the question set once at setup | Every Level 1–2 message is counsel's authored text | None. **Floor for every level.** |
| **Per-message approval** | A firm human approves each generated message before send | Each message becomes counsel's communication | Destroys event-proximate timing; heavy staff burden. Levels 3–4 only. |
| **First-N-days approval** | Per-message approval for an initial window, then auto | Firm sees the assistant's voice on this client first | Small burden. **Default on when Level 3–4 is elected.** |
| **Post-hoc review with receipt** | Sent immediately; review by attorney or staff logged within a window | Evidence that communications reach counsel | SMS cannot be recalled |
| **Mandatory escalation** | Liability, medical emergency, settlement or legal questions, anything off-protocol route to a human *before* any response | Always on | None. **Floor.** |

## D22 — Floors: on at every level, not electable

1. **The client-facing model is blind to the intelligence plane.** It never receives flags,
   credibility notes, or annotations. Otherwise the defense argues the AI steered around
   inconsistencies, which is coaching.
2. **No tool use in the client channel.** No browsing, no record fetches, no actions. Inputs are
   the conversation and counsel's protocol only.
3. **Per-conversation context.** No memory across clients or cases.
4. **Topic allowlist enforced by an independent validator**, not by prompt instruction. Disagreement
   between generator and validator routes to a human.
5. **Neutral prompt text only in the registry.** Rule targets and evidentiary rationale live on the
   analysis plane (DR-0004 D18).
6. **AI disclosure at onboarding and on a cadence, naming the responsible attorney.** The §952
   "so far as the client is aware" fact.
7. **Direction letter e-signed and hash-anchored before message one.**
8. **Every outbound logged**: level, prompt id, protocol clause, model version, validator result,
   approver if any. Source material for the custodian declaration and depo-prep kit.

## D23 — Door 2 hardening: the vendor cannot leak

- **Customer-managed encryption keys.** The firm holds the keys. A subpoena to PIRRA yields
  ciphertext. The fight moves to the privilege holder. **Standard, not an upsell.**
- **In-tenant models for classification and selection** (Levels 1–2 need nothing more). No
  client content leaves for an external model provider. External frontier models are reached
  only when generation (Levels 3–4) is elected, under zero-retention enterprise terms.
  Consequence: the strongest-posture configuration also has the fewest third parties in it.
- Twilio **Message Redaction** enabled, with the residual window documented rather than assumed
  away: per Twilio's July 2026 documentation, unredacted data stays accessible to Twilio's
  production environment for up to 24 hours, a copy is retained separately with limited access
  for compliance, inbound messages are stored in full during delivery attempts, and outbound media
  is retained up to 7 days. BAA and enterprise terms. *(Corrected Sept 4, 2026 from "message-body
  retention off," which described a feature that does not exist in that form.)*
- Single-tenant deployment option.

## D24 — Door 3 guardrails: against the attorney's own foot

- No export without attorney credential.
- No cherry-pick export mode exists in the code. Whole record or nothing.
- Warnings, stating the consequence, when anyone attempts to share the transcript with the client
  (California §771 refresh-production risk) or with a testifying expert (disclosure event).

## D25 — Refinement of DR-0002 D11

Old rule: "never claim privilege over the record." Too flat. Correct split:

- **The vendor never promises privilege to anyone.** Unchanged.
- **Counsel asserts privilege from day one** where the forum's law supports it, logs it, and
  resists production. The architecture is built so that whatever is eventually disclosed, by
  election or by adverse ruling, is accurate, complete and uncurated. It cannot guarantee that an
  accurate record helps; sometimes it will not, and that is not a product failure. *(Reworded
  Sept 4, 2026 after outside review.)*

**Privileged until elected. Production-safe when elected. Survivable if privilege fails. Failure
confined to the thread.**

*Definitions, added Sept 4, 2026.* "Production-safe" means **designed for accurate production and
to support appropriately limited disclosure**. It is a design property of the record, not a legal
outcome. "Failure confined to the thread" is the doctrinal proposition stated at the top of this
record (a finding that privilege never attached is not a waiver of other communications) and
remains subject to written outside-counsel confirmation (open question 1). Separating record
classes at write supports narrower arguments under §912(a) and §356; it does not make them.

## The honest cost

Levels 0–2 give up warmth and density, and density is the record's evidentiary quality metric.
A firm wanting the strongest privilege posture gets a thinner record; a firm wanting the richest
record accepts the novel legal question. The tradeoff belongs to the attorney. The product's job is
to make it visible and recorded, not to pretend it away.

## Engineering requirements (for the Twilio → Supabase build)

**Outbound pipeline, every level:**
`select (or generate if L3+) → validate against allowlist → approval gate if configured → send →
log {level, prompt_id, protocol_clause, model_version, validator_result, approver}`

**Data plane:** evidence and intelligence in separate Postgres schemas with separate service
roles; client-facing model role has no grant on the intelligence schema; export is a database
function over the evidence schema alone; `message_class` non-null enum on every event; append-only
enforced by trigger; hash chain in trigger; RFC 3161 anchoring job; customer-managed keys at the
application layer; raw-media vault bucket separate from derivatives.

**Model plane:** in-tenant small model for classification and selection; external model client
instantiated only when case level ≥ 3, with zero-retention terms; validator is a separate model
call with the allowlist, never the generator grading itself.

**Case setup:** autonomy level and approval regime are fields on the direction record, e-signed,
hash-anchored, shown on the review screen as prose of direction, and appended to the case record on
every change.

## Open for counsel

1. Written confirmation of the blast-radius conclusion: an adverse ruling on the thread reaches
   nothing else in the client file.
2. Whether Level 1–2 (selection only) materially strengthens the §952 "reasonably necessary for
   transmission" characterization versus Level 3–4, or whether courts will treat the categories
   alike.
3. Whether per-message approval converts each message into counsel's own communication for
   privilege purposes, and whether first-N-days approval carries any of that weight.
4. Confirm §952, §771, Op. 512, and the California generative-AI guidance against current text.
