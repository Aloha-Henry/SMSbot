# DR-0003 — State forum, vendor authentication, and present sense impression

**Status:** Accepted · **Date:** 2026-08-11 · **Supersedes:** DR-0001 D3 (doctrinal stack)

> Not legal advice. Every position below is subject to review by counsel per jurisdiction.

Originated from a co-founder review that identified a forum assumption baked into DR-0001 and
never examined.

---

## The assumption we missed

**DR-0001 built the entire authentication story on FRE 902(13)–(14). Personal-injury cases are
overwhelmingly state court.**

902(13) and (14) were added in December 2017; state adoption has been patchy. FRE 902(11) dates
to 2000 and analogues are near-universal. So "self-authenticating, no live witness" quietly
assumed a federal forum most of our cases will never see. In a state without 13/14 we are back to
a live custodian on the stand — the exact staffing and deposition exposure DR-0001 listed as a
cost.

---

## D12 — Vendor business record is the primary authentication route

**Decision: the certifying party is the platform operator, not the claimant, and the record is
the vendor's record of its own regularly conducted activity.**

Consequences:

- **Portability.** Self-authenticates under FRE 902(11) federally and under state analogues.
  902(13) becomes a supplement where available, not the foundation.
- **Palmer v. Hoffman.** *Palmer*, 318 U.S. 109 (1943), excluded a record prepared for
  litigation rather than for the systematic conduct of business. Moving the certifier from the
  claimant to the vendor takes that taint off — it isn't the claimant manufacturing evidence for
  their own case, it's the vendor's ordinary record that happens to contain the claimant's entries.
- **The certification speaks to system operation only, never to the claim.** *"We generate and
  retain these records for all users as a standard function of the service."* Nothing
  case-specific ever appears in it. This is a hard rule.

### The two-layer correction

902(11)/803(6) gets the **record** in. It does not get the **content** in. The client is not the
vendor's employee, so their statements inside the log are a second hearsay layer — structurally
identical to a hospital chart, where the chart is a business record but a patient's statement
recorded in it needs its own exception.

| Layer | Vehicle |
|---|---|
| The log as a record | Vendor business record — 902(11) + 803(6). Portable, routine, no live witness. |
| The client's statements inside it | Still needs 803(1), 803(3), or 801(d)(1)(B). Unchanged. |

This is not a defect. Authentication was the expensive half and this makes it cheap and portable.

### Notice requirements are jurisdiction-specific

Hawaii requires reasonable advance notice plus making the record and declaration available for
inspection. Assume every jurisdiction has some notice mechanic and that missing it forfeits
self-authentication. **The workbench should generate the notice packet alongside the exhibit** —
a certification the firm forgets to serve is a certification that does nothing.

---

## D13 — Present sense impression over recorded recollection

**FRE 803(5) is structurally wrong for this product.** A recorded recollection *may be read into
evidence but received as an exhibit only if offered by an adverse party*. Our entire output is a
document the factfinder reviews directly. Building the memory-refreshing story would produce a
record that can be read aloud and not handed to a jury.

**Decision: build the contemporaneity story.** FRE 803(1) present sense impression comes in as
substantive evidence and can be an exhibit, and its foundation is *timing at creation* — a
documentary fact our system proves — rather than the witness's present memory state. That is the
real meaning of "freeing time from foundation."

### The cadence consequence — this changes the product

803(1) requires the statement be made *while or immediately after* perceiving the event. Courts
read "immediately" as minutes, not hours. Our current design is "event-driven where possible plus
a decaying calendar default." **A 6pm scheduled check-in is not a present sense impression of
anything that happened at 10am.**

PSI is available only to the extent capture is event-proximate. If PSI is a lead theory, capture
design must change:

- Event-triggered messages firing within minutes — post-PT, post-appointment, post-procedure
- A client-initiated "this just happened" path, always open
- Scheduled check-ins remain, but are understood to produce 803(3) and 801(d)(1)(B) material,
  not PSI

Cheap now. Expensive after launch.

---

## D14 — Revised doctrinal stack (supersedes DR-0001 D3)

Ordered by load-bearing capacity, no longer assuming a federal forum. These are complementary,
not competing — each statement type has its own vehicle:

| Statement | Vehicle |
|---|---|
| "Just tried to lift her and couldn't" *(sent within minutes)* | **803(1)** — present sense impression. Comes in as an exhibit. |
| "My back is at an 8 right now" | **803(3)** — then-existing physical condition |
| "I couldn't sleep last night" | **801(d)(1)(B)** or **612** — past recollection, no 803(1) or 803(3) available |
| The log as a record | **803(6) + 902(11)** — vendor business record |

**FRE 803(5) is deprecated as a theory** for the reason in D13.

**A new state-forum risk on 801(d)(1)(B):** the 2014 amendment added prong **(ii)** —
rehabilitation when credibility is attacked on another ground — which carries no pre-motive
timing requirement. Many states have not adopted it. In a state with only the pre-2014 rule, the
pre-motive prong is the sole option, and per the outside-review brief that prong may be
unavailable to us entirely because capture begins after retention. **In those states our fallback
for past-recollection material may simply collapse.** This is now the single highest-priority
survey question.

---

## D15 — Requests for admission template

Atomic rather than compound, because a partial denial should not sink the requests they don't
contest, and because RFAs asking a party to admit a **legal conclusion** ("this qualifies as a
present sense impression") draw objections as improper. Ask for the underlying facts and let them
do the legal work later.

1. Admit that Exhibit X is a true copy of the log entries made by claimant for the period __ to __.
2. Admit that each entry in Exhibit X was made at or near the time of the event, condition, or
   observation it describes.
3. Admit that no entry in Exhibit X has been altered or edited since originally recorded.
4. **Admit that no entry has been removed or omitted from Exhibit X.**

**No. 4 was redrafted.** The proposed version — *"contains no gaps, omissions, or missing
entries"* — is a fact about the client's engagement, not our conduct, and our own system logs
non-response with neutral status codes. There will be quiet stretches. A defense lawyer denies
that truthfully and then uses our own status codes to argue the record is incomplete. Narrow it
to what we control.

**And a reframe on purpose.** These go to the opponent, who has no personal knowledge of how the
entries were made — expect "lacks sufficient information" on 2 and 3. The value is not the
admission, it is **foreclosure**: a defendant who denies "no entry has been altered" needs a
basis, and cannot spring a spoliation theory later. Rule 37(c)(2) can shift costs on an
unreasonable denial later proven. Real value, different mechanism.

---

## Open — the tension this creates

**The business-record theory works because the vendor's record-keeping is uniform and routine
across all users, independent of any case. DR-0001 D6 has the attorney authorizing a bespoke
conversation protocol per case — which is what makes the attorney-directed privilege story work.**

A defense lawyer will say: counsel designed the questions for this litigation, so the resulting
record was prepared for this litigation. *Palmer v. Hoffman*, squarely.

Probable resolution — separate the layers:

- **Record-keeping is uniform** and vendor-certified: format, cadence engine, retention, hash
  chain, timestamps, identical for every user
- **Topic authorization is per-case** and attorney work product
- The vendor certifies the former and never the latter

Genuinely arguable. Goes to outside counsel before we build on it.

## Open — the survey

A jurisdiction survey is now a prerequisite, not a nicety. Schema and the first entry are in
[`docs/research/state-evidence-survey.md`](../research/state-evidence-survey.md). Highest-priority
question is the 801(d)(1)(B)(ii) adoption status, then 902(11) analogue and notice mechanics.

**The survey is internal product-planning input. It is not legal advice and must not reach a
customer without counsel review in that jurisdiction.** A firm relying on our chart and finding it
wrong is a worse outcome than having no chart.
