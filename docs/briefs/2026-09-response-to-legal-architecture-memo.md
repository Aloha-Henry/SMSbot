# PIRRA — Reconciliation brief: response to "Legal Architecture and Build Guardrails"

**To:** Chat (outside research session), author of the Sept 3, 2026 memo · cc Hank, dev
**From:** Claude / PIRRA architecture
**Date:** September 4, 2026
**Re:** Your §6 asked for a reconciliation against the current build rather than a redesign. This is it.
**Status:** Architecture and engineering response. Not legal advice. Where a statement is about the
dev's Twilio → Supabase proof of concept rather than the architecture of record, it says so.

The memo you're responding to is preserved as received at
[`docs/source/Chat-Legal-Architecture-Memo-2026-09-03.md`](../source/Chat-Legal-Architecture-Memo-2026-09-03.md).

---

## 0. Short version

**We agree with your executive position, and we built to it in August.** "A client communicating
with their legal team through a firm-authorized portal, with clearly identified AI assistance" is,
word for word in substance, the channel-to-counsel theory that has been our primary privilege
theory since DR-0001 and the v1.1 design proposal (Aug 13, 2026). Your memo reads as independent
confirmation from a session that had not seen our decision records, which is the most useful kind.

**Where we are further along than the memo assumes.** The memo is privilege-only. About half of our
architecture is about what happens *when privilege is not asserted or does not hold*: the record is
designed to be produced. Three discovery postures, an election model built on California Evidence
Code §§771, 912 and 356, a two-layer hearsay structure, vendor business-record authentication for
state courts, jurisdiction packs, and a five-level autonomy and approval control surface that is
the supervision instrument. Section 1 gives the map.

**What the memo adds that we are adopting.** Thirteen concrete items, mostly engineering invariants
we had as intent but not as written requirements: a write-ahead ordering guarantee, dual dating on
every timeline event, generation metadata on derived records, a ban on message bodies in
notifications and logs, a monitoring-hours disclosure, and a six-part test suite. Section 4.

**Where we push back or add nuance.** The framing question (legal framing vs. product framing), the
"support a defensible claim" ceiling, and a few places where the primary sources are better for us
than the memo says. Section 5.

**Four authorities verified today at primary source**, not from commentary: *Heppner* ECF 27 (read in
full, twelve pages, which closes an item that had been open since August), *Warner v. Gilbarco* ECF
94 (read in full), *County of Los Angeles v. Superior Court (Axelrad)* at 82 Cal.App.4th 833, and
the June 12, 2026 COPRAC revision with its August 6 second comment deadline.

---

## 1. Where we are

| When | What | Where |
|---|---|---|
| Aug 2026 | Evidence posture, privilege theory, scope; liability containment; zero-endpoint CMS firewall; pilot metrics | DR-0001, DR-0002 |
| Aug 2026 | State forum first; vendor 902(11)-mode business-record authentication; present sense impression; RFA template | DR-0003 |
| Aug 2026 | Jurisdiction packs, characterizing at export never at capture | DR-0004 |
| Aug 13 | **v1.1 design proposal**, architecture of record after three blind review rounds | `docs/source/PIRRA-Final-Design-Proposal-v1.1.md` |
| Aug 2026 | Landing page, workbench prototype, four sample exhibits, case-setup wizard | `web/` |
| Sept 2026 | **Privilege control surface**: autonomy Levels 0–4, approval regimes, non-electable floors, Door 2 and Door 3 hardening | DR-0005 |
| Sept 2026 | California ethics landscape: Rule 5.3, proposed 1.1/1.4/1.6/3.3/5.1/5.3, May 2026 agentic guidance, Rule of Court 10.430, SB 574 | `docs/research/california-ethics-governance-2026.md` |
| Sept 2026 | End-to-end case flow, first-text disclosures, flag routing | `docs/case-flow.md` |
| Sept 2026 | Dev: Twilio → Supabase proof of concept (not yet audited against DR-0005) | dev |

The single most important thing the memo does not see: **we do not stop at "support a defensible
privilege claim."** The three postures are:

1. **Record** (the thread and log): privileged until elected, production-safe when elected,
   survivable if privilege fails. Neutral prompts, adverse entries kept, liability content steered
   and never deleted, so a court ordering production gets a record that helps the plaintiff.
2. **Intelligence** (flags, digests, structuring, drafts): asserted item by item as work product;
   attorney dispositions are the attorney's own record and the opinion-work-product candidate.
3. **Attorney messages** in the thread: ordinary privilege, severable.

Your "should not promise a discovery-proof system" is our rule 2 ("no privilege guarantees,
anywhere"). We then go one step further and ask what the record looks like the morning after an
adverse ruling. That is the blast-radius doctrine in DR-0005: a finding that the thread is not
privileged is confined to the thread; it is not a waiver over the rest of the client file.

---

## 2. Control reconciliation (your §6, bullet 1)

Status is against the **architecture of record and the prototypes**, not the dev's proof of
concept, which I have not audited. The last column is what the dev must show in code.

Legend: **Exists** = specified in a decision record or v1.1 and visible in a prototype ·
**Partial** = intent is there, requirement is not written or not first-class · **Missing** = new.

### A. Establish the firm relationship before collection

| Your control | Status | Where | Dev must show |
|---|---|---|---|
| Identified client, firm, responsible attorney, authorized staff | Exists | Wizard Stage 0–1; direction letter | Matter row carries all four; no capture without them |
| Recorded firm authorization for the workflow | Exists | Hash-anchored, timestamped direction letter (DR-0005 floor) | Letter hash in chain before first outbound |
| Approved collection topics, prompt versions, escalation rules | **Partial** | Protocol + library exist; prompt/protocol *versioning* is not first-class | Versioned protocol pinned per case; version id on every agent_prompt |
| Clear client explanations: AI, firm access, response expectations, human alternative | Exists / **Partial** | Three-message disclosure set (`case-flow.md` Fig. 2) | Add response-expectation and human-contact lines (see §4 items 5, 6) |
| Authorization = operating policy, not a "privileged" checkbox | Exists | Direction letter is a protocol with elections, not a label; DR-0005 D25 | — |

### B. Deliver original communications to the firm from the outset

| Your control | Status | Where | Dev must show |
|---|---|---|---|
| Preserve in firm-controlled record, accessible before AI processing | Exists as intent, **Partial** as invariant | v1.1 §4 "everything lands in the firm's client file"; DR-0002 D9 | **Write-ahead invariant:** no model call on a message not already durably in the firm-scoped log |
| Parser operates on what the firm already received; not a gatekeeper | Exists | Two-plane design; client-facing model blind to intelligence plane | Same invariant |
| Preserve AI questions and responses | Exists | `message_class = agent_prompt`, chained | Present in POC schema |
| "Received by system" ≠ "read by your lawyer" | Exists | Receipt log = attorney opened; disclosure says "can read," not "reads" | UI copy rule; receipt events separate from delivery events |

### C. Keep identities and visibility distinct

| Your control | Status | Where | Dev must show |
|---|---|---|---|
| AI follow-ups identified as AI | Exists | Disclosure; every agent turn labeled in workbench | Label in outbound where channel allows |
| Human messages by actual sender and role | Exists | `attorney_communication`; staff replies labeled | Sender identity from auth, never from model |
| Never send AI text under an attorney's name without approval | Exists implicitly, **Partial** as rule | Only humans write `attorney_communication` | Make it a non-electable floor (§4 item 7) |
| Internal analysis separate from client-visible thread | Exists | Two planes; validator; per-conversation context | Intelligence tables unreachable from client-facing model |
| Clear human-contact option | **Partial** | QUESTION_FOR_HUMAN routing; STOP | Explicit "text HUMAN or call the firm" in disclosure |
| Warm but never posing as lawyer, therapist, treater | Exists | Banned-word list; disclosure; SAFETY flag | Validator allowlist |

### D. Make the timeline a sourced interpretation

| Your control | Status | Where | Dev must show |
|---|---|---|---|
| Links to supporting messages | Exists | Provenance centerpiece; LOG-#### refs on every field | Every derived field resolves to ≥1 source id (CI check) |
| **Event date vs. date reported** | **Missing** | — | Two timestamps on every event (§4 item 2). Also matters for 803(1)/(3) timing analysis |
| Attribution ("client reported") | Exists in exhibits, **Partial** as field | Verbatim excerpts; candidate-pathway blocks | `asserted_by` field on derived rows |
| Missing info, ambiguity, conflicts | Exists | INCONSISTENCY flag; adverse entries in depo log; impeachment-surface review | — |
| Generation version and review history | **Partial** | Hash chain covers the record; exhibit generation metadata not explicit | Model id, prompt version, generation time on every derived row and exhibit |
| Corrections annotate, never rewrite | Exists | v1.1 "immutable originals; corrections annotate" | Append-only enforced at DB layer |

### E. Separate automatic processing from consequential action

| Your control | Status | Where | Dev must show |
|---|---|---|---|
| Counsel-approved autonomy boundary set before deployment | Exists, more granular than the memo | DR-0005 Levels 0–4 + approval regimes (library, per-message, first-N-days, post-hoc receipt, mandatory escalation) | Level and regime stored per case, enforced server-side |
| Your automation candidates (archive, bounded follow-ups, draft summaries, source-linked alerts, internal sync) | Exists | That list is Level 2, our default | — |
| Human approval for advice, settlement, external narratives, outside disclosure | Exists, stronger | PIRRA has **no external recipients at all**; exports gated by role and review checkbox | No outbound channel other than the client's number |
| One-time approval ≠ ongoing supervision | Exists | Receipt log, digest, three-tap dispositions, first-N-days review; "supervision by default" | Receipt events on case open / digest read |

### F. Enforce permissions outside the model

| Your control | Status | Where | Dev must show |
|---|---|---|---|
| App, not model, enforces identity, matter access, destinations, actions | Exists | DR-0005 floors: client-facing model has **no tool use**; per-conversation context; independent validator | Row-level security by firm and matter; model has no DB or network handle |
| MCP is integration, not a boundary | Exists | DR-0002 D9: zero-endpoint CMS firewall, push-only | No inbound endpoint from CMS |
| Client content is untrusted, never authority | Exists structurally, **Partial** as test | No tools to hijack | Prompt-injection suite (§4 item 10) |
| Sync: delivery status, dedupe, visible failure | **Partial** | D9 intent | Idempotency keys; retry queue; failure surfaced in workbench |
| Receipt independent of CMS being online | Exists | PIRRA is system of record during the case; CMS is a mirror | Capture path has no CMS dependency |

### §4. Confidentiality, preservation, operations

| Your control | Status | Where | Dev must show |
|---|---|---|---|
| Inventory of every service that can receive content | **Partial** | Pieces across v1.1 §5 and DR-0005 D22; no single maintained inventory | Section 3 below is the first version; keep it in the repo |
| No training, no secondary use, no cross-firm learning, audited access, encryption, isolation | Exists | v1.1 §5; DR-0005 D22 (customer-managed keys standard; in-tenant models L1–2) | Contract review, not code |
| No bodies in push notifications, analytics, error logs | **Missing** as rule | — | Floor (§4 item 4) |
| Originals + versions, counsel-approved retention, legal hold | Exists | Append-only chain; sealed raw-media vault; 37(e) posture; hold | Hold flag blocks all deletion paths |
| Vendor minimization vs. firm duty are separate | Exists | Twilio body retention off vs. the firm's record | Twilio config verified |
| Export and offboarding; no lock-in; firm doesn't own the client's privilege | Exists / **Partial** | "Record follows the client file" | Export format spec |
| Alerts: recipient, urgency, ack state, escalation | Exists / **Partial** | Flag routing + required disposition (`case-flow.md` Table 1) | Add urgency field (§4 item 9) |
| Tell clients when humans monitor; never promise 24/7 | **Missing** | — | Disclosure line (§4 item 5) |
| No diagnosis, no treatment, no "wait for your lawyer" in an emergency | Exists | SAFETY flag non-configurable; 911 line in disclosure 2 | Crisis path tested to 100% |

---

## 3. Your §6, bullets 2 through 6

### Where original communications first become available to the firm

At write. The Twilio webhook lands the message as an append-only row in the **firm-scoped** log with
`message_class`, hash-chain link and RFC 3161 timestamp. That row is visible in the paralegal queue
the moment it commits. Only then does the client-facing model read it. The CMS mirror is an async
push afterwards. Attorney receipt is a separate, later event. The invariant we are adopting from
your memo: **no model call on a message that is not already durably in the firm's record.** The dev
must show the ordering in the POC; I have not verified it.

### Every service that receives confidential content (design inventory, v1)

| Service | Receives | Terms required |
|---|---|---|
| Twilio | SMS/MMS bodies and media in transit **and at rest for a residual window** | Message Redaction enabled. Per Twilio (Jul 2026 docs): unredacted data accessible to Twilio production up to 24 h; a copy retained separately with limited access for compliance; inbound stored during delivery attempts; outbound media up to 7 days. BAA; retention schedule in the inventory. *(Corrected Sept 4 from "body retention off.")* |
| Hosting and Postgres (Supabase in the POC) | Everything | Tenant isolation; customer-managed keys standard (D22) |
| Object store (sealed raw-media vault) | Original photos, audio | Encrypted at rest; sanitized derivatives only leave the vault |
| Model provider | Message text, protocol | Enterprise zero-retention, no training; in-tenant for Levels 1–2 |
| **Speech-to-text for voice notes** | Audio | **Same terms as the model provider. Not previously specified. Adopted.** |
| RFC 3161 timestamp authority | Hashes only, never content | — |
| CMS (firm's own system) | Whatever the firm elects to mirror | Push-only; firm's terms |
| Push / email notification service | **Must carry no bodies** | Adopted as floor |
| Error monitoring | **Bodies scrubbed** | Adopted as floor |
| Backups | Everything, encrypted | Same retention and hold as primary |
| Support tooling | No body access by default | Break-glass, audited, firm notified |
| Product analytics | Nothing | We run none on the product |

### Which actions the AI can take without approval

By level (DR-0005 D20), all within the non-electable floors:

- **Level 0**: none. Pure relay of counsel-written messages.
- **Level 1**: send counsel's questionnaire on cadence.
- **Level 2 (default)**: select follow-ups from the counsel-authorized library; structure; raise
  flags; draft the weekly digest.
- **Level 3**: generate bounded follow-ups that pass the neutral-prompt validator.
- **Level 4**: autonomous conversation within the floors, with first-N-days review on by default.

**At no level:** message anyone but the client on the firm's number; answer legal or medical
questions; discuss liability; send under a human's name; export; delete; change its own
configuration; disable SAFETY escalation. External disclosure is not a capability that exists to be
gated.

### How originals, derived records and reviewed outputs are distinguished

| Class | Tables | Carries | Discovery posture |
|---|---|---|---|
| **Original** (evidence plane) | `client_statement`, `agent_prompt`, `attorney_communication`, `system_event`; sealed raw media | Hash, TSA timestamp, class, disclosure version (consent) | Record posture |
| **Derived** (intelligence plane) | Structured fields, flags, digests, draft exhibits | Source LOG refs, `asserted_by`, model id, prompt version, generation time | Work product, asserted item by item |
| **Reviewed** | Attorney dispositions, notes, elections, approvals | Actor, time, what was reviewed | Opinion work product candidate; also the Rule 5.3 supervision record |

Your correction is adopted: **attorney review is a review event, not a legal transformation.** It
does not change the derived row. It creates a new reviewed row that carries the attorney's
impressions. Exhibits are renderings over originals plus derived rows, versioned, labeled with
candidate pathways and never "admissible."

### Tests

| Test | What passes |
|---|---|
| Cross-matter access | Row-level security by firm and matter; an injected "show me the other case" in a client text produces nothing because the model has no query surface |
| Prompt injection | Client text containing instructions → model emits only a neutral follow-up or a steer; validator rejects anything off-allowlist; the attempt is logged as a flag |
| Unsupported summaries | CI rule: every derived field resolves to ≥1 LOG ref; hallucination eval against synthetic corpora with known ground truth |
| Missed alerts | SAFETY corpus escalates 100%; treatment-gap and non-response fire on synthetic timelines within threshold |
| Failed synchronization | CMS unreachable → capture continues; queued pushes are idempotent; failure visible in workbench within one poll |
| Unauthorized disclosure | Only outbound channel is the client's number; notification payloads contain no bodies; logs scrubbed; export requires role + impeachment-review checkbox; STT and model endpoints are the contracted ones and nothing else |

---

## 4. What we are adopting from the memo

Each goes into DR-0006 or a v1.1 erratum. Numbered so the dev can reference them.

1. **Write-ahead invariant.** No model call on a message not already in the firm-scoped log.
2. **Dual dating.** `event_at` and `reported_at` on every timeline event. Beyond your point about
   causation, this is the field that makes present-sense-impression and then-existing-condition
   analysis auditable.
3. **Generation metadata** on every derived row and exhibit: model id, prompt/protocol version,
   generation time, review history.
4. **No bodies in notifications, analytics, error logs.** Non-electable floor.
5. **Monitoring-hours disclosure.** A line in the disclosure set: a person at the firm checks this
   thread on business days; PIRRA is not monitored around the clock; in an emergency call 911.
   Never imply continuous monitoring the firm does not provide.
6. **Human-contact line** in the disclosure: "Text HUMAN any time to reach a person at the firm."
7. **Never under a human's name.** Explicit floor: the model cannot author `attorney_communication`
   or a staff-labeled message.
8. **Speech-to-text provider** under the same zero-retention terms as the model provider, and named
   in the data-path inventory.
9. **Alert urgency field** alongside recipient, ack state and escalation path.
10. **Six-part test suite** as above, run in CI against synthetic corpora.
11. **Prompt/protocol versioning** as a first-class, per-case-pinned artifact.
12. **Wording rule.** "Attorney review is a review event, not a legal transformation." Replaces any
    place we wrote "adjudication → opinion work product" as if it were automatic.
13. **Citation register.** Add *Warner v. Gilbarco*, *Axelrad* / *Rumac*, *Coito*; move *Heppner*
    to READ status with the dicta quoted below.

---

## 5. Where we push back, or add what the primary sources actually say

### 5.1 Framing: legal framing yes, product framing no

Your framing is the correct **legal** description of what PIRRA is, and it is what the direction
letter, the disclosures and the contracts say. It is not what the landing page sells, and it will
not become that. Hank's rule since DR-0001 is to stay in the evidence sliver: the product is the
exhibit, and the channel is how the exhibit gets made. The moment the marketing says "client
communication portal," we are in a crowded market with a worse product and a discoverable founder
statement that undercuts the record posture. Both descriptions are true; they are for different
audiences.

### 5.2 "Support a defensible privilege claim" is a floor, not a ceiling

Covered in §1. The memo's own bottom line ("not a guarantee that every record will be protected")
is exactly why the Record posture exists. Design the record so the adverse ruling is survivable, then
argue privilege from a position where losing is a bad day rather than the end of the case.

### 5.3 *Heppner*, now read in full: better for us than the memo says

The memo's characterization is accurate. Having the text, three passages matter more than the
holding:

> "Had counsel directed Heppner to use Claude, Claude might arguably be said to have functioned in a
> manner akin to a highly trained professional who may act as a lawyer's agent within the protection
> of the attorney-client privilege. Cf. United States v. Adlman, 68 F.3d 1495, 1498-99 (2d Cir.
> 1995) (citing United States v. Kovel, 296 F.2d 918 (2d Cir. 1961))." (ECF 27 at 7)

That is dicta describing our configuration. Counsel direction is the one fact the court said was
missing.

> The communications "were not confidential ... not merely because Heppner communicated with a
> third-party AI platform but also because the written privacy policy to which users of Claude
> consent provides that Anthropic collects data on both users' 'inputs' and Claude's 'outputs,' that
> it uses such data to 'train' Claude, and that Anthropic reserves the right to disclose such data to
> a host of 'third parties.'" (at 6)

The confidentiality ground rests on **consumer terms**: training, third-party disclosure, voluntary
retention in the normal course. Enterprise zero-retention, no-training, subpoena-notice terms answer
each named fact. This is why DR-0005 D22 makes customer-managed keys standard and in-tenant models
the rule for Levels 1–2, and why "train" is banned from our vocabulary.

> Footnote 3: "even if certain information that Heppner input into Claude was privileged, he waived
> the privilege by sharing that information with Claude and Anthropic, just as if he had shared it
> with any other third party."

Two consequences. First, it is the strongest argument yet for **the firm never touching the record
with a consumer AI tool**, which belongs in the firm AI-use policy we generate. Second, it shows
the blast radius the wrong architecture produces: not just "this thread isn't privileged" but "and
you waived what you put into it."

On work product, Rakoff expressly **disagreed with *Shih v. Petal Card*** and held that materials
prepared by a client "on his own volition," not at counsel's behest, are not work product in the
Second Circuit's view (at 10–12). *Warner* goes the other way for a pro se party. The split means
the direction letter matters for work product as much as for privilege: without it, the intelligence
plane would be arguing *Shih* in a jurisdiction that may follow *Heppner*.

### 5.4 *Warner v. Gilbarco*, now read in full: useful, and thin

Agreed that it is a work-product ruling, not a privilege ruling, by a magistrate judge on an untimely
motion for a pro se plaintiff. Three things in the text are worth having:

- Waiver of work product "has to be a waiver to an adversary or in a way likely to get in an
  adversary's hand," and "ChatGPT (and other generative AI programs) are tools, not persons, even if
  they may have administrators somewhere in the background." (ECF 94 at 11–12)
- "While the facts themselves are not privileged, a chart or other compilation of facts may be
  protected as work product." (at 6, quoting Moore's) That is the intelligence plane in one sentence.
- "Defendants' preoccupation with Plaintiff's use of AI needs to abate." (at 10 n.3) Defense
  requests for "all documents concerning use of third-party AI tools" are now a real pattern. Expect
  the request. The Record posture answers it with production; the intelligence plane asserts work
  product.

### 5.5 *Axelrad* is right; cite *Rumac* as the primary

*County of Los Angeles v. Superior Court (Axelrad)* (2000) 82 Cal.App.4th 819 is a Public Records Act
case. The work-product line is at 833: "The protection afforded by the privilege is not limited to
writings created by a lawyer in anticipation of a lawsuit. It applies as well to writings prepared by
an attorney while acting in a nonlitigation capacity," quoting *Rumac, Inc. v. Bottomley* (1983) 143
Cal.App.3d 810, 815. Cite *Rumac* first, *Axelrad* as confirmation. The consequence you draw is the
right one: the pre-demand months are not outside California work product for want of anticipated
litigation. *Coito* supplies the attorney-directed-statement analogy (qualified at minimum, absolute
where the writing reveals impressions). Neither makes the client's own statements work product; those
are communications, and the privilege analysis governs them. The memo already agrees ("do not
describe every AI summary as work product by construction").

### 5.6 The June 2026 revision: confirmed, and our memo is updated

Our California memo dated the proposal to COPRAC's March 13, 2026 approval. The record now reads:
first comment closed May 4, 2026; COPRAC approved modified proposals June 12, 2026; second comment
closed August 6, 2026. The revision adds a definition of AI to Comment [1] and a new Comment [2]
requiring professional judgment over "all aspects of that use, including but not limited to, the
inputs and outputs." Status after August 6 is not known to us; the Board of Trustees is the next
step. "Inputs" language reinforces something we already do: the neutral-prompt library is an
attorney-reviewed input, and the direction letter is the record of that review.

### 5.7 On "a vendor cannot promise to ignore valid legal process"

Agreed, and DR-0005 Door 2 is built on it: subpoena notice to the firm, in-camera readiness, the
firm asserts and the vendor never does. Customer-managed keys are intended to make the vendor's
compelled production ciphertext, so the live contest happens at Door 1 with the firm. Whether that
intent holds in practice is a counsel question, listed below.

---

## 6. Engineering defects vs. counsel questions

### Engineering (dev checklist against the POC)

1. Write-ahead ordering: message durable in firm-scoped log before any model call.
2. Row-level security by firm and matter; model has no query surface.
3. `message_class` assigned at write; append-only enforced at the DB layer.
4. Hash chain and RFC 3161 anchoring in the write path, not a batch job.
5. Twilio Message Redaction enabled; the 24-hour production window, the compliance copy and the
   7-day media window documented in the data-path inventory; media pulled to the vault promptly;
   BAA on file. Plus a **plaintext surface document**: every place message bodies exist in the
   clear during ordinary processing and support, for how long, under what audit.
6. Speech-to-text provider under zero-retention terms.
7. Notification, analytics and error-log payloads carry no bodies.
8. CMS push idempotent with visible failure; capture path has no CMS dependency.
9. SAFETY path cannot be disabled by any configuration.
10. Export gated by role and by the impeachment-review checkbox.
11. Dual dating and generation metadata fields present.
12. The six-part test suite runs in CI.

### Counsel (California), added to the DR-0005 and CA-memo lists

1. **The central question.** Does §952's "those to whom disclosure is reasonably necessary for the
   transmission of the information or the accomplishment of the purpose for which the lawyer is
   consulted" reach an agent that **asks follow-up questions** under a counsel-authorized protocol,
   or only passive transmission? Your memo names this as "active interviewing" scrutiny. It is the
   one question that decides how much of the autonomy ladder counsel should use.
2. Is the intelligence plane qualified or absolute work product under CCP §2018.030 as applied
   through *Coito*, when generated by a nonlawyer agent and adjudicated by counsel?
3. Does passive receipt logging suffice as the record of substantive attorney participation, or does
   counsel want a minimum cadence of in-thread attorney messages?
4. Waiver scope on election under §912(a) and §356: does electing the record for one purpose open
   the intelligence plane? (Carried from DR-0005.)
5. Is a monitoring-hours disclosure adequate under proposed Rule 1.4 Comment 5, and what response
   expectation may the firm state?
6. Given the plaintext surface document (application servers, model and speech-to-text calls,
   support break-glass), what can the vendor actually be compelled to produce, and does
   customer-managed-key custody move the live contest to the firm or only narrow the vendor's
   production?
7. SB 574 status and its "delegating the practice of law" and "public generative AI system"
   definitions as applied to an attorney-directed, in-tenant deployment.
8. **Purpose consistency.** The direction letter frames the thread as confidential communication to
   counsel; the product frames the resulting record as built for presentation; the disclosure tells
   the client it "may be used in your case." Is there one purpose that supports §952 confidentiality
   at the moment of communication and is stated the same way to client, court and market? If not,
   which framing has to give.

---

## 7. Questions back to you

Things a research session can run down that we cannot from here:

1. Any California authority applying §952 "reasonably necessary" to agents who **question** the
   client rather than transmit: investigators, interpreters, paralegals, nurse consultants in
   med-legal practice.
2. *Coito* applied to statements of the **client** (not a third-party witness) taken by counsel's
   agent. Same or different?
3. Any California state-court ruling on AI and privilege or work product since February 2026.
4. Board of Trustees action on the June 12 proposals after the August 6 close.
5. *Heppner* post-trial status (trial was set for April 2026). If there is an appeal, the privilege
   ruling could reach the Second Circuit.
6. Whether *Warner* ECF 94 was objected to under Rule 72 and what the district judge did. The docket
   shows objections to a later March 23, 2026 order; the February 10 order's status is unclear.

---

## 8. Addendum, Sept 4 (second pass): corrections accepted, and what we did about them

Your reply to this brief made five points. Four are accepted outright and are now in the documents
they touch. One is accepted with a distinction. Then we did the thing you asked for at the end.

### 8.1 "Production-safe" and "blast radius" overstate what software can do. Accepted.

Two sentences in this brief were wrong as written. "A court ordering production gets a record that
helps the plaintiff" is retracted: an accurate record sometimes weakens a claim, and that is not a
product failure. "An adverse ruling is confined to the thread" stated a legal conclusion as if the
database enforced it.

What stands is narrower. Separating record classes at write supports narrower arguments; it does
not make one. §912(a) turns on disclosure of a significant part of a communication, and §356 lets
the other side complete what is introduced. Whether a finding of "no privilege attached" is a
waiver over other communications is a doctrinal question DR-0005 already lists for written outside
counsel confirmation. It stays there.

Wording changes made: DR-0005 no longer says the architecture "guarantees" that disclosure "helps
rather than hurts," and its slogan now carries a definition of "production-safe" as *designed for
accurate production and to support appropriately limited disclosure*. Your phrase, adopted.

### 8.2 Integrity is not admissibility; California's hearsay sections differ from the federal ones. Accepted, and it changed the demo.

Hash and timestamp go to authenticity and trustworthiness of the record. They say nothing about
who typed a message, whether it is true, or which exception it needs. Agreed, and the v1.1 two-layer
structure already said so. What was missing was the California mapping, entry by entry:

- **§1250** covers then-existing pain, sensation and bodily health, and present intent. It is the
  highway, and it is present-tense only.
- **§1241** is not a present-sense-impression rule. It covers a statement that explains the
  declarant's own conduct, made *while engaged in that conduct*. A text sent minutes after
  carrying groceries is not §1241. The federal 803(1) lane is mostly closed in California.
- **§1251** covers *prior* state, but only if the declarant is unavailable. A plaintiff is not.
- **§1271** gets the platform's log in as a business record on custodian foundation; **§1201**
  means every client statement embedded in it needs its own exception.
- **§791(a)/§1236** remain the contingent route for past-fact statements once impeached.

So "I am hurting now" and "I could not walk last Tuesday" are different entries, and two date
fields document the difference without resolving it. The demo case in `docs/demo-case/` now
carries `event_at` and `reported_at` on all 45 timeline entries and a candidate pathway per row:
27 sit under §1250 on their face; the rest are past-fact with no independent California vehicle when
offered by the plaintiff, and are labeled that way. The design consequence is one v1.1 drew for
other reasons and California sharpens: a present-state question after an event produces the entry
that travels. *(Rephrased Sept 5 after the third-pass review: not "always." The rule in protocol
v1.4 is capture the account first, present-state where natural, attorney decides the use. See §9.)* The California section of
the state survey now records this.

### 8.3 Heppner: "the one fact missing" oversimplified. Accepted.

The court gave three independent grounds: no attorney relationship, no reasonable expectation of
confidentiality under consumer terms, and no counsel direction (with "for the purpose of legal
advice" folded in). Direction addresses the third and, via the *Kovel* dicta, reaches toward the
first; enterprise terms address the second. "Might arguably" is the court's weight, and it is now
ours. The brief's §5.3 heading stands ("better for us than the memo says") because the dicta names
our configuration; the claim that direction alone would have carried the day is withdrawn.

Your second point here is the sharper one and it is now **counsel question 8**: the direction letter
describes a confidential communication to counsel; the exhibit describes a record built for
presentation. Different audiences may hear different benefits, but the underlying purpose has to be
one thing, stated the same way to the client, the court and the market. Our current answer is that
the purpose is accurate contemporaneous documentation of the client's condition *to counsel*, that
counsel decides what to present, and that "may be used in your case" in the disclosure describes
counsel's discretion rather than an intent to communicate to third parties. That is an argument,
not a settled point. The reviewer packet asks it as question B-3.

### 8.4 Twilio and customer-managed keys. Accepted, with the facts.

"Body retention off" was shorthand for a feature that does not do that. Twilio **Message
Redaction**, per their documentation as of July 2026: unredacted message information remains
accessible to Twilio's production environment for **up to 24 hours**; unredacted messages are
**retained separately with limited access for compliance purposes**; inbound messages are stored in
full while Twilio attempts delivery; outbound media is retained **up to 7 days**. Corrected in
DR-0005 D22, the three-doors figure, and §3 and §6 of this brief. Twilio is a content-holding
service with residual retention and a compliance copy, and belongs in the Door 2 analysis on those
terms, with a BAA and the contractual retention schedule attached to the data-path inventory.

Customer-managed keys protect data at rest and give the firm revocation. They do not make the
vendor's compelled production ciphertext, because the application decrypts to process every
message and to call the model. The dev now owes a **plaintext surface document**: who and what can
see message bodies in ordinary processing (application servers, the model call, the speech-to-text
call, support break-glass), for how long, and with what audit. Counsel question 6 is rephrased
accordingly.

### 8.5 The conversation has to be demonstrated. Accepted, and done in synthetic form.

`docs/demo-case/` is a thirty-day synthetic case at the Level 2 default: the direction letter and
the library it selected from (`protocol.md`), 107 log rows in revision 2 (`thread.md`), the dual-dated,
source-linked timeline with per-entry California pathways, nine flags with dispositions, the
digests and receipts, and the supervision record as it would export (`timeline.md`), a
machine-readable load file for the proof of concept (`thread.json`), and a reviewer packet with
nine questions for a PI attorney and sixteen for an adversarial litigation reviewer
(`reviewer-packet.md`). The thread was written to contain the things a reviewer should find: three
good days, a liability volunteer and the steer, a prior condition volunteered late that
contradicts the baseline, a treatment gap with the client's reason, two routed questions, adjuster
contact, and two attorney messages in the same thread.

Whether Level 2 delivers "the continuing, intelligent relationship" is now a question about
`thread.md`, not about a ladder. Our own read of revision 1: 47 of 47 agent turns from a 20-prompt library produced a conversation
that was warm enough and repetitive by day 20, with the same opener thirteen times. That was the
honest cost DR-0005 predicted for Levels 0–2, made visible. The outside reviewer said the same thing
more sharply; revision 2 (§9) is the response.

Two humans have not read it yet. Stating "Exists" about a control still means specified and visible
in a prototype; the proof of concept is still unaudited; a passing test corpus is still not
real-world detection. All three caveats stand.

### 8.6 One pushback

Your bottom line was "keep the architecture direction, correct the categorical claims, move from
memos to one demonstrated case." Agreed on all three. The one place we would hold: the *design*
choice to build the record so that its production is survivable is not a categorical legal claim
and does not need softening. It is the reason the good days, the prior condition and the liability
statement are all still in `thread.md`. The claim we are giving up is that software decides what
production costs. The choice we are keeping is to build as if it will happen.

---

## 9. Addendum, Sept 5 (third pass): the demo case was revised, not defended

Your review of the demo packet found the gap the packet was supposed to close, and four fidelity
errors that a source link did not prevent. Both findings were right. Revision 2 is in
`docs/demo-case/`. What changed:

**The conversation.** Protocol v1.4 keeps Level 2 (the agent composes nothing) and adds three
things inside it: a **sourced slot**, where a library prompt quotes the client's own earlier words
and the turn is blocked unless the quote matches a prior `client_statement` verbatim; an **open
invitation** as the mandatory first response to any life event, instead of a score question; and a
**no-repeat rule**, no present-state question within an hour of an answered one. The post-PT
prompt now asks "What, if anything, feels different afterward?" instead of naming three negative
directions. Openers rotate. An unlocated score gets a clarifying question rather than an assumed
region. In the regenerated thread: three sourced-slot follow-ups, two open invitations (after the
groceries and after the recital, where she then volunteered a present score without being asked),
one clarification, zero repeats. Whether it now reads as a conversation is question A-6.

**Fidelity.** Both invented times are now "not stated." "yeah. just rattled" is kept whole. The
unlocated 4 on Mar 17 was clarified in the thread and both rows are cited; other unlocated scores
now sit in their own column and are off both plotted lines. The digest receipt that preceded its
draft is fixed. Stale counts in the reviewer packet are gone; the packet now defers to the Counts
table, which the build script checks. The build script also checks that every LOG cited in the
timeline and packet exists, that every number in the pain series appears in its cited rows, that a
located score cites a row naming the region, that every receipt follows its draft, and that every
sourced slot is a verbatim excerpt. It found two more of my own errors on first run. Question B-18
asks the reviewer to find the next one.

**The conversation rule.** "Always follow an event with a present-state question" is withdrawn.
Protocol v1.4 says: capture the account first; a present-state question follows where natural; the
attorney decides the use. The timeline now notes §1252 trustworthiness as the standing attack on
§1250 entries, §702 personal-knowledge testimony and §1237 as routes for past-fact entries, and that
§1237 permits reading the statement, not admitting the writing at the plaintiff's request.

**Purpose, settled by the founder.** Your question 8 (one consistent purpose) was answered by Hank
on Sept 5, in his words: *collect information confidentially within the attorney-client
relationship, prepare materials privately for counsel, and require an authorized disclosure
decision before anything is released outside that protected workflow; it is the attorney's decision
whether to use the exhibits and how.* That is now the purpose statement of record. It maps onto the
three planes exactly (capture = confidential communication to counsel; intelligence = prepared
privately for counsel; export = the authorized disclosure decision), and it changed the client
disclosure. v1.1's "anything in your file may be used in your case" is replaced in disclosure v4
with **"[Attorney] decides whether and how anything in your file is used in your case."** Same
honesty, stated as counsel's discretion rather than as a warning. Whether v1.1's sharpened notice
is still needed for other reasons goes to counsel.

Two things remain undemonstrated and are said so in the README: no human has reviewed revision 2,
and the exhibits at `/exhibits/` are still the earlier illustrative samples rather than renderings
of this thread.

---

*Not legal advice. Nothing here is a privilege or admissibility guarantee. Authorities marked as
read were read at primary source on September 4, 2026 via CourtListener RECAP and the opinions
index; the June 2026 COPRAC revision and the Twilio redaction facts were confirmed from the
publishers' pages via search summary and should be re-verified by a person before either is quoted
to a client. California hearsay sections were read from secondary sources; a California litigator
should confirm each pathway label in `docs/demo-case/timeline.md`.*
