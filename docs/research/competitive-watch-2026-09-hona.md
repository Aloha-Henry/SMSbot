# Competitive watch — Hona and "Lia" (Sept 4, 2026)

**Status of this note.** hona.com, support.hona.com, the ABA Journal article and the evolvelaw.ai
profile are all blocked by this environment's proxy. Everything below comes from search-engine
summaries of those pages plus our own prior scans. Spot-check any specific claim against
hona.com before repeating it externally. Never name Hona on the landing page (rule since v1).

**Supersedes** the Hona lines in `docs/source/PIRRA-PRD.md` ("intake/status AI ... none at
documenting recovery"), `PIRRA-Competitive-Scan-Aug2026.md` ("Hona: CRM + Voice AI receptionist
... unchanged") and `docs/OVERVIEW.md`. Those were right in August. They are not right now.

**Corrects** the load-bearing sentence in `competitive-watch-2026-08.md`: "still no conversational
AI ... nobody, human or machine, asks the client 'how's the pain right now?'" That was written about
Quilia and remains true of Quilia. It is no longer true of the category. Hona's agent does ask.

---

## 1. What Hona is

Client-communication platform for consumer-practice firms, PI first. Founded as Milestones, YC,
$2.1M seed (Jul 2023), $9.5M Series A led by Costanoa (Jun 2024). Claims 500+ firms. Native
integrations with 20+ case-management systems (Filevine, Clio, Litify, CASEpeer, SmartAdvocate,
MyCase, Neos, Lawcus, and others). Quote-based pricing; no published price.

Product surface before this month: branded client portal and app with a visual case tracker and
milestone updates; two-way SMS; automated case-stage texts; intake forms and e-sign; NPS and review
requests; a Voice AI receptionist for inbound calls (31 languages); educational video content. A
blog post titled "With Hona's Client Portal, Social Media Will Never Sink Your Case" shows they
think about client conduct as a case risk, which is adjacent to our territory.

## 2. What changed: Lia, launched on or about Sept 3, 2026

Hona now describes itself as "the AI case manager for personal injury firms." Lia is the agent.
From their pages and the ABA Journal / Law.com coverage (CEO Matthew McClellan; beta with 20
firms):

- **Care Coordination** is the named skill for a client in treatment: appointment coordination,
  reminders, follow-ups, and check-ins, by text.
- **"After every visit, she checks in with clients to gather treatment details, symptoms, and
  provider info. Everything is logged automatically."**
- **"Missed appointments, treatment gaps, and red flags get surfaced to your team in real time with
  customizable escalation rules."**
- **"Hona captures treatment updates in real time, so you negotiate with a complete record."**
- Lia **"answers questions based on information from the actual case files"** (ABA Journal).
- Escalation: anything outside what the agent should answer becomes an escalation assigned to the
  case owner "with the reason and the specific ask spelled out."
- Guardrails per their help center: introduces itself as AI; answers honestly if asked whether it is
  a person and offers a human; contact hours; opt-outs; HIPAA; pause per client or firm-wide with
  work-in-progress preserved; user management for which staff may operate Lia.
- Framing stat from the launch: typical treatment-appointment attendance "runs around 70%." The
  product is sold as adherence and case-manager bandwidth: "Your staff can follow up with 20 clients.
  Hona handles 2,000."

## 3. Tripwire status

Words we watch for, because any of them means a competitor has entered the evidence sliver:
**exhibit · certification · authentication · hash · timestamp · provenance · privilege · work
product · 803 · 902 · 1006 · demand exhibit.**

**Not crossed.** Nothing found. The closest phrase is "negotiate with a complete record," which is a
case-manager's record for a negotiator, not a document for a court. No sign of a hash chain,
timestamp authority, message classification, custodian certification, notice mechanics,
jurisdiction awareness, or any privilege or work-product theory.

## 4. What is the same

Be honest about this. A funded competitor with 500 firms has (and, *corrected Sept 5*, not for the first time: EvenUp's Communication Agents ran SMS and voice treatment check-ins from Dec 2025, and Quilia's app carries AI-guided prompts and case memory):

| Hona / Lia | PIRRA |
|---|---|
| Conversational AI on SMS, firm-branded | Same |
| Post-visit check-ins that collect symptoms | Cadenced check-ins that collect how the client is today |
| Treatment-gap and red-flag detection with escalation rules | Treatment-gap and evidentiary flags with routing and required disposition |
| AI status disclosed; hands off to a human on request | Same, plus the attorney is named in the disclosure |
| Pause per client; firm-level control of who runs the agent | Pause, mode change, turn off; autonomy levels and approval regimes |
| "Complete record" for negotiation | Record built to be produced, and exhibits built from it |

The August scan's comfort ("their conversational-AI energy is all aimed at acquiring clients,
none at documenting recovery") is gone. Lia documents treatment. Update the OVERVIEW.

## 5. What is different, and why it holds

### 5.1 The question asked

Lia asks a case manager's questions: did you go, what happened, who did you see, when is the next
one. Symptoms are a field collected on the way. PIRRA asks the damages question: how are you
today, what could you not do, what did it cost you in the life you were living. Present tense on
purpose, at a density designed for then-existing-condition and present-sense-impression pathways.
Lia's cadence is driven by the appointment calendar. PIRRA's cadence is driven by the evidence
rules and the injury arc.

### 5.2 The output

Lia writes to case-management fields and a dashboard, and surfaces escalations. The record it
builds is for the case manager and, downstream, the negotiator. PIRRA's output is the exhibit:
demand-packet exhibit, recovery-curve summary chart, depo-prep log, custodian certification, notice
packet, RFA set, each figure clicking back to the message it came from, each labeled with candidate
pathways for the pinned forum. Hona has no document a firm attaches to a demand or takes to
mediation. This is the sliver, and they are not in it.

### 5.3 The record is designed as evidence from message one, or it is not

This is the part that cannot be bolted on later, and it is the moat:

- **One thread, one purpose.** Lia's thread mixes case-status answers drawn from the case file,
  appointment logistics, and client statements about symptoms. That is a mixed record generated by
  an agent with case-file read access. For defense counsel it is the modern "uncontrolled diary,"
  now automated and searchable. PIRRA's thread contains client statements, neutral agent prompts,
  labeled attorney messages and system events, each classified at write, and nothing else. The
  client-facing model is blind to the intelligence plane and has no tools.
- **Neutral prompts and adverse entries kept.** A record built by a "case manager" that wants
  adherence will nudge. A nudged record is a curated record. PIRRA's prompt library is
  counsel-authorized and neutral, and the depo log carries the entries that cut against the claim
  on purpose.
- **Liability boundary.** Nothing suggests Lia steers away from fault, speed, or scene content. A
  general "how are you doing" agent collects admissions. PIRRA never discusses liability; it steers,
  flags, and never deletes.
- **Integrity.** Append-only hash chain, RFC 3161 timestamps, sealed raw-media vault, message
  classification, custodian certification in the form the forum accepts. None of this appears
  anywhere in Hona's materials.
- **Privilege posture.** Hona's guardrails are HIPAA and disclosure. PIRRA's are a privilege theory
  (channel to counsel, direction letter, election model, three postures, blast-radius doctrine) and
  a control surface built to make the record survivable if the theory fails.

### 5.4 Supervision as a product

Hona has operational supervision: escalate to the case owner, pause, choose who runs the agent.
PIRRA has Rule 5.3 supervision as a product: autonomy Levels 0–4 elected per case, approval
regimes, passive receipt logging, three-tap dispositions, a supervision record exportable in one
click, and a firm AI-use policy generated from settings. Lia "answers questions based on the actual
case files" is also the exact behavior SB 574's "delegating the practice of law" language is aimed
at, and the proposed Rule 5.1 policy duty will ask a firm to explain how that is supervised. PIRRA's
answer to a case-status question is to route it to a human.

### 5.5 Business model

Quote-based platform (portal, voice, intake, NPS, reviews, Lia) versus $149 per case, flat,
published, one job. The PRD's "published pricing is itself a wedge" claim remains true of Hona.

## 6. Threat assessment

**Hona is among the nearest competitors and, with EvenUp, the most likely to drift into the sliver**, because they
already own the conversational SMS channel and the client relationship surface at 500 firms. The
drift move is obvious: "Export a treatment timeline PDF." Watch for it. When it comes, the
argument is §5.3: a timeline exported from a case-manager thread is the uncontrolled diary with a
logo on it, because the record was not designed as evidence from the first message and cannot be
made so retroactively.

**What they cannot easily copy:** the evidence design decisions that have to be true from day one
of a case (neutral prompts, one-purpose thread, classification at write, hash chain, no case-file
access for the client-facing model, liability boundary), the jurisdiction packs, the certification
and notice machinery, and the privilege control surface. All of these are cheap to describe and
expensive to retrofit into a product whose agent already chats about case status.

**What they can copy tomorrow:** the words. Expect "evidence-grade" or "court-ready" in Hona
marketing within a year. Our answer is the exhibit samples and the certification sample, not
adjectives.

**Partner or acquirer?** Hona is a comms layer, not a case-management system, so DR-0002 D9 (push
exhibits to the CMS, no inbound endpoint) does not cover them. There is a plausible world where
PIRRA's record sits beside Hona's portal rather than against it. Note only; no action.

## 7. Actions

1. Update `docs/OVERVIEW.md` competitive paragraph: Hona is no longer "intake and status only."
2. Add the tripwire list above to the watch cadence; re-check Hona monthly, not quarterly.
3. Landing page: no change. Competitors are never named; "not a per-client monthly meter" stays
   accurate; the pricing wedge stays accurate.
4. Sharpen one line for firm conversations, not the website: **"A case manager's log is not an
   exhibit."** It is the whole difference in seven words.

---

*Sources: hona.com (home, /personal-injury, /ai, /solutions), support.hona.com "What is Lia?" and
"User Management," ABA Journal "Personal injury case management platform Hona launches AI agent"
(corrected 9/3/2026), Law.com coverage quoted therein, Capterra/GetApp pricing pages, YC company
page, all via search-engine summaries. Direct fetch blocked for every Hona domain.*

## 8. Corrections (Sept 5, 2026)

An outside reviewer checked two cells of the comparison built from this note against current
product pages. Both were wrong and are withdrawn:

- **Quilia, "no conversational AI."** Quilia's AI page describes "a living memory of each case," AI
  that "spots gaps that quietly lower case value and asks clients for them in plain language," and
  "smart if-this-then-that prompts" that guide clients. That is AI-directed client prompting in the
  app, even if CaseChat SMS remains staff-to-client. The Aug note's finding is stale as to the app
  and stands only as to CaseChat.
- **EvenUp, "downstream consumer only."** EvenUp launched **Communication Agents** on Dec 3, 2025:
  AI voice and SMS agents including **Treatment Check-In Agents** that "conduct friendly,
  conversational check-ins around the clock via SMS or voice calls in English and Spanish," with
  7K+ automated SMS in the first 90 days per EvenUp's own blog, plus agents for claims initiation,
  liability and coverage verification, records follow-up and balance verification.

Consequences: Hona was not the first funded competitor with a conversational SMS agent; EvenUp was
earlier and is larger. EvenUp's liability-verification agent means at least one competitor's agent
discusses liability with clients by design, which sharpens PIRRA's boundary as a difference. The
comparison document (`docs/handoff/00b-competitive-matrix.html`) uses "not verified in public
materials" where we found nothing, never "none." Sources: quilia.com/how-it-works/artificial-intelligence;
evenuplaw.com/products/communication-agents and the Dec 3, 2025 Business Wire release; both via search
summary, sites blocked from this environment.
