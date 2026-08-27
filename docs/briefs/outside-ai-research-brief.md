# PIRRA — Research Briefing for an Outside AI Session

**What this is:** a self-contained briefing on PIRRA — the product, the architecture, and the
legal theory — written to hand to an AI research assistant for a deeper research pass. It reflects
the project's current state of thinking (Design Proposal v1.1 plus the California election model,
August 2026). Section 7 is the actual ask; Section 8 is the verification protocol, and it is not
optional.

**Not legal advice. One citation in this entire project is human-verified (CA Evid. Code §791).
Everything else is a lead, not an authority.**

---

## 1. What PIRRA is

PIRRA is **jurisdiction-aware evidence capture for plaintiff litigation, launching in personal
injury.** It descends from the attorney-directed pain journal.

The problem: non-economic damages — pain, lost function, the life the client can't live yet — are
the majority of PI settlement value and the least-documented part of every file. Attorneys tell
clients to keep injury journals; almost none do, and the ones who do produce uncontrolled diaries
the defense subpoenas and cherry-picks. The months between intake and resolution produce nothing,
and the demand gets reconstructed from memory.

PIRRA replaces that failed behavior: a natural SMS conversation on the firm's own number,
authorized and directed by counsel case-by-case, committed to a tamper-evident record, and
packaged — per forum — into exhibits, certifications, and discovery instruments.

**The spine:** the client sees a text thread, the attorney sees a workbench, the court sees a PDF —
three surfaces, one immutable record underneath.

**The purpose/consequence rule (absolute):** the purpose is accurate contemporaneous documentation
of the client's condition. Better demands and stronger cases are *consequences*. No document ever
frames evidence generation as the purpose.

**Pricing:** $149 per case, flat, published, sold to the firm. No claim about how firms account
for it; no ethics advice given.

**Case-selection honesty:** PIRRA is a truth machine. It serves genuinely injured clients — whose
complete contemporaneous record defeats cherry-picking — and it exposes exaggerating ones.
Attorney-facing materials say so plainly. The real election an attorney makes is not "which
entries do I show" but "is this a case where a complete record helps."

## 2. How it works

**Per-case flow:** retention → attorney runs a ~2-minute case setup ("protocol wizard"): first an
explicit deploy/decline election (declining is frictionless and records no reason — a stored
"attorney doubted client" field would be a discoverable disaster), then a **conversation mode**
(Minimal: tap-to-answer check-ins + expense capture · Structured: + injury-matched photo series ·
Standard: + real conversation and an always-open "text me when it happens" path · Intensive: daily
+ event-triggered check-ins minutes after treatment, voice notes) → injury-keyed details (photo
milestones, cadence ceiling, appointment follow-ups) → a review screen rendered as **prose of
direction**, authorized and timestamped to the case. Post-launch the attorney can change mode,
pause, or turn off; every change is recorded to the case.

**Client experience:** SMS on the firm's number. No app, no login. PIRRA always discloses it is an
AI assistant provided by the firm — at onboarding and periodically. Onboarding notice includes:
your legal team reads this; **your statements can be used against you**; be honest, good days
included; anything about how the accident happened goes to your legal team, not here.

**Capture discipline:** present-tense framing bias ("how is the pain *right now*"); event-proximate
triggers (post-PT check-ins within minutes); neutral non-response status codes (silence never
reads as recovery); no coaching — elicitation never steers toward favorable content, and never
asks about fault/liability. Liability content a client volunteers anyway is **committed immutably
like every other event** (never deleted — it is a party-opponent statement and destroying it
inside a tamper-evident chain is provable spoliation), excluded from exhibit surfaces, and routed
to counsel by alert.

**Attorney/paralegal surface (workbench):** timeline over immutable originals; treatment-gap and
inconsistency alerts with an acknowledgment workflow (evidentiary flags are attorney-only);
in-thread reply; a required **pre-demand impeachment-surface review** (find what the defense will
mine before the adjuster does); a **rehabilitation finder** (input an impeaching statement's date
and topic → all prior consistent entries predating it, provenance-cited).

**Outputs:** demand-packet exhibit (functional-impact curve, category breakdown, verbatim excerpts
with log references, integrity block); recovery-curve summary chart (gaps shown, not smoothed);
depo-prep log (built to disclosure standard, includes an adverse-entries section on purpose);
custodian certification (dual-mode: business-record 902(11)-style, or electronic-process
902(13)-style where adopted); notice packet with a machine-enforced state machine — the system
refuses to represent a certification route as ready until the forum's service requirements are
met. **Nothing is ever labeled "admissible"** — outputs carry candidate-pathway tags with rule,
factual basis, and a counsel-review-required flag.

## 3. Architecture (compact)

- **Two planes.** Evidence plane: append-only event store — verbatim text, `message_class` on
  every event (`agent_prompt` / `client_statement` / `attorney_communication` / `system_event`),
  client+server timestamps, delivery/response timing, neutral prompt registry (neutral text only,
  no rule-targeting metadata), hash chain (SHA-256) + independent trusted timestamps (RFC 3161 —
  explicitly not a blockchain), sealed raw-media vault (exact received binary, metadata intact,
  access-logged) with sanitized derivatives serving working surfaces, audit/integrity reports.
  Intelligence plane: extraction, credibility/consistency flags, attorney annotations, counsel's
  protocol objects, jurisdiction advisories, the "why this question" panel.
  **The plane label does not determine discoverability** — protection is asserted item-by-item
  (counsel's protocol: strongest work-product candidate; jurisdiction packs: weakest; audit
  reports: production-ready by design; liability-flagged *client words* are never protected by the
  bucket, only the annotation may be).
- **Capture is uniform nationwide.** Jurisdiction packs (versioned, ~25 structured fields per
  state, human-reviewed before shipping) feed exactly two consumers — the counsel advisory
  generator and the packaging engine — **never the capture engine**. Characterization happens at
  export; forum change re-runs the mapping over the same substrate. Rationale: a subpoenaed config
  reading "Target: Rule 803(1), priority HIGH" is a machine-readable prepared-for-litigation
  admission, and at capture time most cases have no known forum anyway (most settle pre-suit).
- **Governance ("the library test"):** every prompt must have a genuine standalone check-in
  justification without consulting jurisdiction metadata. No fake neutrality: the record's
  evidentiary utility is acknowledged honestly; what is defended is that the documentation
  function is genuine and uniform.

## 4. Evidence theory

**Two-layer hearsay structure (FRE 805 and analogues):**

- **Layer 1 — the log itself.** The vendor's record of its own regularly conducted activity,
  generated identically for every user as a standard function of the service. Candidate
  foundation: FRE 803(6) via 902(11) custodian certification and state analogues (chosen over
  902(13)–(14) because PI is overwhelmingly state court and the 2017 federal e-authentication
  rules are patchily adopted; 902(11)-style certification is near-universal). The certification's
  hard rule: **system operation only, never the claim** — it never vouches for the claimant,
  never characterizes content, never describes what any summary shows.
  Fallback stack: certification → stipulation → live qualified witness (depo-prep kit exists for
  this). CA mechanics: §1561 affidavit rides the subpoena regime, so the CA package ships a
  stipulation-in-lieu workflow and a friendly-SDT option.
- **Layer 2 — the client's statements inside the log.** The client is not the vendor's employee;
  each statement needs its own vehicle. **803(3)/then-existing condition is the highway**
  (present-tense capture is engineered for exactly this); 803(1) present sense impression is a
  lane where the analogue is real (event-proximate capture, "immediately" = minutes);
  prior-consistent rehabilitation is a contingent pathway (see §791 below); 803(5) recorded
  recollection is a demoted fallback (read-in only; exhibit only if the adversary offers it).
  Machine metadata (timestamps, hashes, delivery events) may not be hearsay at all
  (*Lizarraga-Tirado* line) — investigate per state.
- **The density principle:** present-tense framing doesn't convert historical facts; it creates
  new evidence of current condition. The lever is density — capture the present so often the
  record never depends on memory. Response rate is therefore an evidentiary quality metric, not
  just retention economics.

**The *Palmer* problem (the project's #1 open question).** *Palmer v. Hoffman* (1943): records
prepared for litigation rather than the systematic conduct of business can be excluded. Every
PIRRA user is a represented claimant, so "would the business have created this record anyway?"
(the *Hager v. Brinker* framing, 5th Cir. 2024 — intra-panel split) must rest on operational
genuineness: the record's real utility independent of admission (client communication, treatment
adherence, gap alerts). Adverse authority: *Certain Underwriters v. Sinkovich* (4th Cir. 2000) —
a litigation consultant's bespoke *report* excluded under 803(6). Distinction: the report artifact
class is exactly what PIRRA never business-record-certifies; chronologies and summaries ride
FRE 1006 over inspectable records, never 803(6). Posture: this is risk *mitigation*, not
avoidance. The mitigating facts: an append-only, automated, uniform pipeline recording good days,
bad days, and silence identically for every user has no discretion through which litigation motive
could operate; the client's motive is real and lives in Layer 2, where cross-examination handles
it.

**The 801(d)(2) asymmetry (priced cost):** every log entry is a party-opponent statement when
offered *against* the client, while the client's favorable historical statements face hearsay
walls. The completeness architecture stands anyway — a selective log is strictly worse
(spoliation, cherry-pick optics, Rule 106 pulls context in regardless). Consequences: attorney
case-selection honesty; the pre-demand impeachment review; the "can be used against you"
onboarding notice; liability steering.

## 5. Privilege and work product — the three postures, and the California election model

Three data categories with three discovery postures:

| Category | Posture |
|---|---|
| The capture record (client ↔ PIRRA) | **Production-safe by design.** Privilege is argued (below), never promised, never load-bearing. |
| The intelligence layer (flags, annotations, counsel's protocol) | **Work product.** Attorney adjudication of evidentiary flags is a required credential-locked step — that is where mental impressions enter, upgrading ordinary to opinion work product. |
| Attorney's in-thread messages | **Ordinary attorney-client privilege.** Withheld at production with privilege-log entries; severable via `message_class`. |

**Privilege theory for the capture record — restructured.** Primary: **conduit / channel-to-counsel**
— PIRRA is the firm's communication infrastructure (firm number, messages intended for counsel,
attorney genuinely receiving and replying in-thread, everything in the client file); the operative
doctrine is agency + confidentiality (like a lawyer's assistant or answering service), not *Kovel*
necessity. Secondary: *Kovel*'s own disjunctive bar — "necessary, **or at least highly useful**,
for the effective consultation." Attorney participation is measured as substantive engagement,
never message counts. **On *United States v. Heppner* (S.D.N.Y. 2026, Rakoff, J.)** — the AI
chatbot privilege case: its grounds were (1) not an attorney, (2) no reasonable confidentiality
expectation under consumer ToS, (3) not at counsel's direction. The counsel-directed-agent
language is dicta. **The opinion does not analyze or reject a necessity prong** — an earlier
project memo said otherwise; that was a drift error, since corrected. PIRRA is built to be the
opposite of Heppner on all three actual grounds.

**The California election model (newest layer of the theory — needs the most research).**
California's statutory framework is materially friendlier than federal *Kovel*-as-glossed:
Evid. Code §952 extends confidentiality to third persons "reasonably necessary for the
transmission of the information" (a transmission standard, not a necessity standard —
cf. *City & County of San Francisco v. Superior Court* (1951), physician-as-agent); §917 presumes
confidentiality with the burden on the opponent; §954/*Costco* (2009) make attached privilege
absolute, with no in-camera testing per §915. On this frame, **counsel's practitioner model is:
privileged until elected, production-safe when elected, survivable if privilege fails.** The
attorney asserts privilege from day one, uses the record freely for case evaluation and exam
crafting (opinion work product, CCP §2018.030(a), absolute), and elects disclosure — demand
package, exhibits — at the moment of maximum value, accepting §912 waiver *then*. The vendor
never promises privilege; counsel asserts it.

Known constraints on that model (all California): **§771** — mandatory production of writings a
witness used to refresh recollection, *including before testifying* (broader than FRE 612), with
waiver risk per the *Kerns Construction* line — so the witness must never study the transcript as
prep material even though the attorney may freely work from it; **§912(a)/§356** — disclosure of
a significant part waives the communication and completeness pulls in the rest, so the disclosure
election is record-level, not entry-level (no "good weeks only"); **expert reliance** — feeding
the record to a testifying expert is a disclosure event; ***Suezaki*** — facts never become
privileged by being communicated (the defense always gets the facts by deposition; the fight is
only over the documents). And the crown jewel, **the one human-verified finding: CA Evid. Code
§791(a)** — prior consistent statements are admissible once an *inconsistent* statement is
admitted, if they predate it, with **no pre-motive timing requirement** (and §1236 makes them
substantive). Early, dense capture means PIRRA entries almost always predate any impeaching
statement — so in never-disclose mode the record enters at counsel's election *in rebuttal*, at
the defense's invitation, at maximum value.

## 6. The attack bank (argue these against us)

"An evidence-generation engine with an empathetic skin" · "the design itself supplies the
motive-to-fabricate narrative" · "*Palmer* in a lab coat" · "Garbage-In, Hash-Out" (low-response
clients leave a state-selection attack standing) · the commercial-flow narrative (claimant hires
lawyer → lawyer buys PIRRA → lawyer authorizes what PIRRA asks → PIRRA produces demand artifacts —
"the protocol object itself proves litigation purpose") · the §952 attack ("an AI vendor is not
'reasonably necessary for transmission' — she could text the lawyer directly") · the 801(d)(2)
mining list · *Melendez-Diaz* rhetoric ("calculated for use essentially in the court" — criminal
Confrontation Clause dicta; be ready, don't overweight).

## 7. Research questions, ranked — this is the ask

1. **The *Palmer* fight.** Does uniform automated record-keeping plus operational genuineness
   survive the commercial-flow attack at the 803(6)(B)/(C) predicates, where every user is a
   represented claimant? Read *Hager v. Brinker* (5th Cir. 2024) and *Sinkovich* (4th Cir. 2000)
   and say which side of *Hager*'s intra-panel split a **California state trial court** would
   take. What non-litigation utility should be documented before a pilot?
2. **CA §952 and an AI agent.** Does "reasonably necessary for the transmission of the
   information" cover an AI intermediary on the firm's number under counsel's written direction?
   Map the agent/intermediary cases (*City & County of S.F.*; interpreter, investigator,
   psychologist lines). How does *Costco*'s dominant-purpose test apply to a mixed
   documentation-and-communication channel?
3. **CA §771 + privilege/work product.** Scope of the refresh-production rule for pre-testimony
   review; the *Kerns* waiver line and anything since; can counsel prep a witness *from* a
   privileged record without triggering it, and where exactly is the line?
4. **Waiver scope on a demand-package disclosure.** Under §912(a) ("significant part") and §356,
   if counsel attaches PIRRA exhibits (summaries + excerpts) to a pre-litigation demand, how much
   of the underlying thread comes with them? Is an 8-month thread one communication or many?
5. **§791(a)/§1236 in practice.** Confirm §1236; find §791(a) applications — does the defense's
   "frame every impeachment as motive-based" gambit defeat the (a) branch?
6. **The 801(d)(1)(B)(ii) survey.** Which states adopted the 2014 rehabilitation prong? In states
   with only pre-motive prong (i), does any vehicle carry ordinary past-recollection material
   ("I couldn't sleep last night") given capture begins after retention?
7. **Vendor posture.** A paid plaintiff-side vendor proffering its own records: any analogue lines
   worth a research budget (adoptive/integrated business records; provider records obtained by
   legal process; debt-buyer and med-chron records — noting those may enter through different
   doors)?
8. ***Heppner* itself.** Pull the memorandum (No. 1:25-cr-00503 (JSR), S.D.N.Y., Dkt. 27,
   Feb. 17, 2026). Confirm the three grounds and the absence of a necessity holding. Check the
   docket for developments after the April 2026 trial date — an appeal would change its weight.

## 8. Verification protocol — mandatory

This project was burned once by AI-characterized authority (the same reviewer characterized the
same case two different ways in consecutive rounds; a propagated "necessity holding" in *Heppner*
turned out not to exist). Rules for this research session:

- **For every authority returned:** full citation, court, year, what it actually holds, whether
  the key language is holding or dicta, and a confidence statement. Distinguish "I have seen this
  text" from "this is commonly said about the case."
- **Do not synthesize a case name to fit an argument.** A wrong citation in this domain is the
  highest-damage failure available. "No authority found" is a valuable answer.
- Statutes quoted here from memory (**everything except §791**) must be checked against current
  text: CA Evid. Code §§356, 771, 791, 912, 915, 917, 952, 954, 1236, 1237, 1250, 1271,
  1552–1553, 1560–1562; CCP §2018.030; FRE 106, 501, 502, 612, 801(d), 803(1)(3)(5)(6), 805,
  902(11)(13)(14), 1006; FRCP 26(b)(3), 36, 37.
- Everything produced is input for **human counsel review** — it reaches no filing, firm, or deck
  before a human pulls and reads it.

## 9. Language rules (apply to anything you draft)

*Preserves evidence that would otherwise be lost* — never "creates evidence." No privilege or
admissibility guarantees anywhere; "admissible under [rule]" is banned (authentication is not
admissibility). AI status always disclosed. Never: companion, coach, chatbot, journal, nurse
navigator, AI legal assistant, demand engine, elicitation, "disguised." Documentation is the
purpose; better demands are a consequence. Founder language is discoverable — write accordingly.
