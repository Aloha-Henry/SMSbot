# DR-0002 — Liability containment, the CMS firewall, and what a pilot can prove

**Status:** Accepted · **Date:** 2026-08-11 · **Builds on:** [DR-0001](./0001-evidence-privilege-and-scope.md)

> Not legal advice. Every legal position below is subject to review by outside counsel per jurisdiction.

Produced from an adversarial review round with an outside model. Three decisions survived it,
and several proposals were rejected — the rejections are recorded at the end, because they will
be proposed again.

---

## D8 — The Liability Containment Engine is primary technical IP

DR-0001 D5 established the liability boundary but treated enforcement as prompt-library
discipline: capture the message into Tier 1, then flag it. **That ordering was wrong.**

**Decision: classification happens pre-commit.** An inbound message is classified *before* it is
written to any tier. Liability content is routed to a **quarantine store** and never enters
Tier 1 at all.

This matters because Tier 1 is the produce-expected stream. Under the old ordering, a causation
admission would sit inside the exhibit stream permanently — immutable, undeletable, and produced
along with everything else. Under pre-commit routing, producing the record does not produce the
admission.

Compatible with the immutability requirement: quarantine is **routing, not deletion**. The
message remains immutable, hash-chained, and timestamped — it simply lives outside the stream
that has an egress path. No spoliation exposure.

**Consequences:**
- The classifier is a real-time gate on the write path, not a batch job. Latency budget matters —
  it sits between message receipt and any reply.
- False negatives are unrecoverable (content in Tier 1 cannot be moved out). False positives are
  cheap (quarantined damages content can be reviewed and released by an attorney). **Tune
  aggressively toward over-quarantine.**
- Quarantine triggers an immediate attorney flag. Never a paralegal flag.
- **Open for counsel:** whether the quarantine store is itself protected. The underlying facts are
  discoverable regardless — via deposition of the client — but the store's posture needs a
  position before the pilot.
- **Voice remains the highest-risk channel.** An SMS turn has a gate between messages; a live call
  does not. Voice likely requires summarize-and-quarantine by default rather than verbatim
  capture into Tier 1.

This is the piece nobody else in the category has to build, because nobody else is producing
evidence. It is the engineering priority.

---

## D9 — The zero-endpoint CMS firewall

DR-0001 left open how Tier 2 stays severable once data syncs into Clio or Filevine. Resolved:

| Direction | Contents |
|---|---|
| **Pushed to CMS** | Finalized Tier 1 exhibit PDFs. Administrative milestones only (`check-in completed`, `exhibit generated`). |
| **Never leaves PIRRA** | All Tier 2 — credibility flags, inconsistency alerts, attorney annotations, protocol, alert history. |

**The connector must physically lack a Tier 2 endpoint.** Not disabled by default, not
permission-gated — *absent*. Access control is necessary and insufficient here, because the
failure mode is not an unauthorized user. It is a conscientious paralegal copying a flag into a
Clio note because that is where case notes go. Defend against diligence, not malice.

Supporting controls: flags render as non-selectable text with no copy affordance; no Tier 2 field
appears in any export, report, or API response schema; explicit training line in onboarding.

**Metadata line, drawn precisely:** `check-in completed` is safe to sync. `flag raised` is not —
the existence and timing of a flag is itself work product, and a CMS timeline showing flag events
reconstructs Tier 2 from metadata alone.

Integration targets: Clio, Filevine, SmartAdvocate.

---

## D10 — What a pilot can and cannot prove

**Settlement lift is not measurable.** Not difficult — structurally unavailable. There is no
counterfactual: a case cannot be settled twice, and cases differ by injury, venue, adjuster,
policy limits, and defense counsel. A control group would require deliberately under-documenting
a cohort of real injured plaintiffs, which is a malpractice and ethics problem rather than a study
design.

Any pilot designed around settlement lift produces numbers that cannot be published, cannot be
defended, and would violate the no-outcome-promises rule if they were.

**Defensible pilot KPIs:**

| Metric | Definition | Why it holds |
|---|---|---|
| **Engagement retention** | % of clients still responding at month 1 / 3 / 6 | The largest execution risk in the product. Directly measurable. |
| **Exhibit acceptance** | % of generated exhibits an attorney actually sends with a demand | The truest signal of value. If firms generate exhibits and never use them, nothing else matters. |
| **Gap detection** | Count of treatment gaps flagged, with attorney confirmation the gap was material | Operational fact, not an outcome claim. |
| **Time saved** | Paralegal hours to assemble the pain-and-suffering section, PIRRA vs. baseline | Real, sellable, and provable. |
| **Flag acknowledgment latency** | Time from flag raised to attorney disposition | Already required for the SLA; doubles as an engagement metric. |

**Two pilot-design requirements that follow, and are easy to miss:**

1. **A 90-day pilot cannot measure month-6 retention.** Either the pilot runs longer, or the
   90-day pilot measures the month-1 through month-3 retention *curve* as a leading indicator and
   retention is reported as a follow-on. Do not design a 90-day pilot around a 6-month metric.
2. **Time-saved requires a week-zero baseline.** The firm's current process must be instrumented
   *before* PIRRA is switched on. Skip this and the metric is unrecoverable.

---

## D11 — Tier-precise external communication

Refines DR-0001 D2. The rule is not "never discuss privilege" — it is tier-specific:

| Tier | What we say externally |
|---|---|
| **1 — The Record** | **Never claim privilege.** 100% discoverable from day one. The value is winning *because* of transparency — completeness defeats cherry-picking, and prior consistent statements (FRE 801(d)(1)(B)) do the work. |
| **2 — Intelligence** | **Always explain work product** (Rule 26(b)(3)). An attorney who does not understand that credibility flags are protected should refuse to buy. This is a material fact about the product, not a marketing claim. |
| **3 — Attorney comms** | Ordinary attorney-client privilege via conduit. Unremarkable — the same doctrine that keeps the firm's email server from destroying privilege. |

Never assert "conduit theory" as a sales concept or claim any guaranteed outcome. Describe
architecture; never promise protection.

---

## Rejected, and why — these will be proposed again

**Settlement-lift ROI calculators and dollar projections.** Outcome promises with a number
attached. Bar-advertising exposure lands on the *firm* using the tool, not only on us. See D10 for
why the underlying claim is unavailable in the first place.

**Repricing $149 as firm overhead.** Case cost versus overhead is not a positioning choice — it is
determined by state rules on litigation expenses and the firm's fee agreement. It remains an open
question requiring state-by-state analysis (DR-0001), not a decision we get to make. Overhead is
the *risk case*; pass-through as a disbursement is the wedge.

**Fabricated metrics** — "90%+ client engagement," "up to 70% of damage value lost." No data
exists. In a pilot agreement these stop being marketing and become misrepresentation.

**"FRE 801(d)(1)(B) compliant" as a product claim.** A category error. The rule governs when a
prior consistent statement ceases to be hearsay, and it engages only after the opponent charges
recent fabrication — at trial. No document can be "compliant" with it in advance. "Prior
consistent statement packet" is accurate; "compliant" is not, and an attorney with evidence chops
will catch it immediately.

**Horizontal expansion into intake or medical-record summarization.** Intake is Hona and Case
Status. Records summarization is Supio and EvenUp. Both better funded, both with distribution.
This is precisely the widening move the sliver strategy exists to prevent, and the PRD's roadmap
test rejects it by name.

**Acquisition-driven roadmap forks.** At pre-build with zero customers, the engineering that
maximizes acquisition value and the engineering that maximizes standalone value are identical:
build it well, get real firms using it, own the client relationship. The fork matters at Series A.
Optimizing for acquisition before product-market fit produces a product nobody wants and no
acquirer values.

**"Without paralegal bloat" as a benefit claim.** The paralegal *is* the operator (DR-0001 D6). A
promise that breaks in pilot week one, in front of the people evaluating the product.
