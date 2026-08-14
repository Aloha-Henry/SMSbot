# Architecture Update Memo — August 2026

**For:** co-founder review, and for bringing a fresh session up to speed
**Covers:** everything decided since the initial architecture, in one place

> Not legal advice. Nothing here has been reviewed by counsel. Case-law claims are marked with
> what was actually verified and what still needs a real research pass.

---

## TL;DR

Five things changed. In order of consequence:

1. **We had a federal-forum assumption baked in.** PI cases are overwhelmingly state court, and
   the authentication story rested on FRE 902(13)–(14), which most states never adopted.
2. **The fix: the platform certifies, not the claimant.** The log becomes the vendor's business
   record. This is portable across states, and it moves us off *Palmer v. Hoffman*.
3. **FRE 803(5) is the wrong theory and 803(1) is the right one** — which changes the capture
   cadence, not just the paperwork.
4. **A new state-forum risk on prior consistent statements** may close off an entire category of
   client statements in states that never adopted the 2014 amendment.
5. **Photos yes, day-in-the-life montage no** — because completeness doesn't survive
   self-selection.

---

## 1. The forum problem

FRE 902(13) and (14) were added in **December 2017**. State adoption has been patchy. FRE 902(11)
dates to **2000** and analogues are near-universal.

Our "self-authenticating, no live witness" pitch quietly assumed a federal courtroom most of our
cases will never see. In a state without 13/14 we are back to putting a custodian on the stand —
precisely the staffing and deposition exposure we had already listed as a cost.

This was not a small error. It ran through the architecture, the brief, and the landing page.

## 2. The fix — the platform is the certifying party

**The claimant does not certify their own record. We do.**

The log is *our* record of *our* regularly conducted activity, which happens to contain the
client's words. It self-authenticates under FRE 902(11) and its state analogues via a custodian
declaration.

**Why this is better than what we had:**

- **Portable.** Works federally and in nearly every state. 902(13) becomes a supplement where
  available rather than the foundation.
- **Moves us off *Palmer v. Hoffman*,** 318 U.S. 109 (1943), which excluded a record prepared for
  litigation rather than for the systematic conduct of business. It isn't the claimant building
  evidence for their own case — it's a vendor's ordinary record.
- **Hard rule: the certification speaks to system operation only, never to the claim.** *"We
  generate and retain these records for all users as a standard function of the service."*

**What research supports it.** A Southern District of Texas materials paper on the 2017
self-authentication rules states the distinction directly: the business records rules generally
**do not** apply to information found on personal devices, but **often do** apply to electronic
evidence in the records of commercial service providers obtained by subpoena or legal process.
That is exactly our posture. The working analogy is carrier and ISP records — routinely admitted
through custodian declarations, and containing user-generated content the provider didn't author.

### The two-layer correction

902(11)/803(6) admits **the record**. It does not admit **the content**.

The client is not our employee, so their statements inside the log are a second hearsay layer —
structurally identical to a hospital chart, where the chart is a business record but a patient's
statement recorded inside it needs its own exception.

| Layer | Vehicle |
|---|---|
| The log as a record | Vendor business record — 803(6) + 902(11) |
| The client's statements inside it | Still 803(1), 803(3), or 801(d)(1)(B) |

Not a defect. Authentication was the expensive half and this makes it cheap and portable.

---

## 3. The chronology question — answered, and it cuts two ways

**Question raised:** *is there a federal case accepting the certification of a third party who
built a chronology?*

**Short answer: don't seek one, and we don't need one.** The question conflates two different
artifacts with two different vehicles.

**The raw log — strong ground.** A commercial service provider certifying its own message records
is well-trodden. That is Tier 1, and it rides on 803(6)/902(11).

**A vendor-built chronology — weak ground, and the wrong tool.** A chronology is a *derived
analytical product*. The business-records materials are explicit that records created mainly to
assist a lawsuit — the canonical example being a special report drafted at counsel's request — may
be excluded. A chronology built for a specific case is that report. Seeking a business-record
certification for it invites the *Palmer* attack directly onto our best asset.

**The correct vehicle for the chronology is FRE 1006** — a summary of voluminous records, which
comes in because the *underlying* records are admissible and available for inspection. Entirely
different mechanism. It does not need to be a business record, and calling it one weakens it.

Which means the architecture already had this right:

| Artifact | Vehicle |
|---|---|
| Raw capture log (Tier 1) | 803(6) + 902(11), vendor-certified |
| Timeline / recovery curve / chronology | **FRE 1006 summary** over that admissible substrate |
| Credibility flags, annotations (Tier 2) | Work product — never offered, never certified |

**Design instruction:** the certification covers the substrate, never the summary. If a
certification template ever recites what the chronology shows, it has crossed the line.

**Honest limit on this research.** What was verified is the doctrinal distinction, from public
rules materials. **No squarely-on-point case was located, and no case is cited here for that
proposition.** A real case-law pass — Westlaw, Lexis, or CourtListener — is warranted before this
is asserted anywhere. Two lines worth searching: the adoptive or integrated business-records
doctrine, where one business incorporates another's records into its own, and litigation-support
vendor certifications in the debt-buyer and medical-records-summary contexts. **Do not let anyone,
human or model, hand you a case name for this without pulling the opinion.**

---

## 4. Present sense impression replaces recorded recollection

**FRE 803(5) is structurally wrong for this product.** A recorded recollection *may be read into
evidence but received as an exhibit only if offered by an adverse party*. Our entire output is a
document the factfinder reviews directly. Building the memory-refreshing story produces a record
that can be read aloud and not handed to a jury.

**FRE 803(1) is the right theory.** It comes in as substantive evidence, it can be an exhibit, and
its foundation is *timing at creation* — a documentary fact our system proves — rather than the
witness's present memory state. That is what "freeing time from foundation" actually means.

### This changes the product, not just the paperwork

803(1) requires the statement be made *while or immediately after* perceiving the event. Courts
read "immediately" as minutes, not hours. Our design is "event-driven where possible plus a
decaying calendar default."

**A 6pm scheduled check-in is not a present sense impression of anything that happened at 10am.**

PSI is available only to the extent capture is event-proximate. Required changes:

- Event-triggered messages firing within minutes — post-PT, post-appointment, post-procedure
- A client-initiated "this just happened" path, always open
- Scheduled check-ins stay, but produce 803(3) and 801(d)(1)(B) material, not PSI

Cheap now, expensive after launch.

### The statement-to-rule map

| Statement | Vehicle |
|---|---|
| "Just tried to lift her and couldn't" *(within minutes)* | **803(1)** — present sense impression, admissible as an exhibit |
| "My back is at an 8 right now" | **803(3)** — then-existing physical condition |
| "I couldn't sleep last night" | **801(d)(1)(B)** or **612** — past recollection |
| The log itself | **803(6) + 902(11)** — vendor business record |

---

## 5. The prior-consistent-statement gap — highest-priority open risk

The 2014 amendment added FRE **801(d)(1)(B)(ii)** — rehabilitation when credibility is attacked on
another ground, such as inconsistency or faulty memory. Unlike prong **(i)**, it carries no
pre-motive timing requirement.

**Many states never adopted it.**

This matters because prong (i) may be closed to us entirely: it requires the statement to predate
the motive to fabricate, and a defense lawyer will argue that motive arose *at retention* — while
we begin capturing *after* retention.

**So in a state with only the pre-2014 rule, ordinary past-recollection material may have no
vehicle at all.** *"I couldn't sleep last night"* — a large share of what clients actually say.

This is now the first question in the jurisdiction survey, ahead of the authentication work. If it
turns out several high-volume states lack the rehabilitation prong, that is a **product** finding,
not just a research finding: it pushes much harder toward event-proximate capture, so more of the
record lands as present sense impression rather than recollection.

---

## 6. Requests for admission

Atomic rather than compound — a partial denial shouldn't sink the requests they don't contest, and
RFAs asking a party to admit a **legal conclusion** ("this qualifies as a present sense
impression") draw objections as improper. Ask for the underlying facts; let them do the legal work
later.

1. Admit that Exhibit X is a true copy of the log entries made by claimant for the period __ to __.
2. Admit that each entry was made at or near the time of the event, condition, or observation it
   describes.
3. Admit that no entry has been altered or edited since originally recorded.
4. **Admit that no entry has been removed or omitted from Exhibit X.**

**No. 4 was redrafted** from the proposed *"contains no gaps, omissions, or missing entries."* That
version is a fact about the client's engagement, not our conduct — and our own system logs
non-response with neutral status codes, so there will be quiet stretches. A defense lawyer denies
it truthfully and then uses our own status codes to argue the record is incomplete.

**And a reframe on purpose.** These go to the opponent, who has no personal knowledge of how the
entries were made — expect "lacks sufficient information" on 2 and 3. The value isn't the
admission, it's **foreclosure**: a defendant who denies "no entry has been altered" needs a basis
and can't spring a spoliation theory later. Rule 37(c)(2) can shift costs on an unreasonable denial
later proven.

---

## 7. Photos yes, day-in-the-life montage no

**Yes to photos anchored to dated entries.** A photo attached to the day the client described it
inherits everything that makes the text record work: contemporaneous, part of the cadenced record,
a still rather than a production, and it clicks back to its source like every other figure.

**No to a curated day-in-the-life montage.** The text record works because it is *complete* — good
days and bad days, silence logged as silence. Completeness is the entire credibility argument.
**Video is inherently self-selected**; nobody films every day, and people film when they're
struggling. A montage is structurally a highlight reel of bad days, which is the uncontrolled
diary the product exists to replace. It would let the defense attack the completeness of the whole
exhibit, text included.

Day-in-the-life films are also their own litigated category, drawing FRE 403 scrutiny that
documentary evidence doesn't. That risk is real but secondary — most cases settle, and an adjuster
is moved by a video whether or not a judge would admit it. **The completeness objection is the one
that bites at the demand stage too**, and it's the reason for the split.

**Operational requirements** if photos ship: location metadata stripped pre-commit, on the same
logic as liability content — never collected rather than deleted. Image-based liability
classification for scene and vehicle-damage photos, which is materially harder than text
classification and whose false negatives are unrecoverable. Third parties in frame — spouses,
children, home interiors — none of whom consented and all of whom go to the defense on production.
Health-data profile escalation. And **attorney-elected per case, off by default**, set at protocol
authorization.

**Sequencing: not until the liability classifier is proven on text.**

---

## 8. Open tensions

**Uniform record-keeping vs. per-case protocol.** The business-record theory works because the
vendor's record-keeping is uniform and routine across all users. Our privilege architecture has
counsel authorizing a **bespoke conversation protocol per case**. A defense lawyer says: counsel
designed the questions for this litigation, so the record was prepared for this litigation —
*Palmer*, squarely.

Probable resolution: the *record-keeping function* is uniform and vendor-certified (format, cadence
engine, retention, hash chain, timestamps, identical for every user), while *topic authorization*
is per-case work product the vendor never certifies. Genuinely arguable. Goes to counsel.

**The *Kovel* necessity prong** remains unanswered from the earlier analysis. *Heppner* rejected the
argument on two grounds — direction, which our architecture answers, and necessity, which it does
not. Conduit is the workaround, and it depends on counsel genuinely participating in the thread.

**Notice mechanics vary by jurisdiction** and forfeiting them forfeits self-authentication. The
workbench must generate the notice packet alongside the exhibit.

---

## 9. What needs real research

1. **Jurisdiction survey**, sequenced CA → TX → FL → NY. First question in every state is
   801(d)(1)(B)(ii) adoption, then the 902(11) analogue and its notice mechanics. Rule *text* is
   public and reachable without a paid database; **case law on how courts actually apply these
   rules is where a research subscription earns its keep.**
2. **The chronology-certification case-law pass** described in §3. No case is cited above and none
   should be invented.
3. **Counsel review** of the uniform-vs-per-case tension, the quarantine store's discoverability,
   and whether stripping EXIF pre-commit survives a spoliation argument.

**A standing caution.** This is the exact domain where fabricated citations do real damage —
courts have sanctioned lawyers over AI-generated case cites. Every case name that reaches a filing,
a firm, or a pitch deck should be pulled and read first, including anything in this memo.
