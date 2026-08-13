# PIRRA — Evidence Architecture Brief

**For:** outside review · **From:** Hank · **Date:** August 2026 · **Length:** ~2 pages

I'm building a system that captures a personal-injury client's recovery by text message and turns
it into demand exhibits. I'm not asking whether it's a good business. I'm asking you to break the
legal architecture, because I'd rather find the cracks now than in a deposition. The last section
is the list of things I already think are weakest — start there if you're short on time.

---

## 1. The thesis: the doctrine is the spec

Most legal tech builds a product and then asks counsel whether it's allowed. We inverted that. We
started from what the Federal Rules of Evidence actually reward, and let the doctrine dictate the
engineering. Every rule below came out the other side as a build requirement, not a disclaimer:

| Doctrine | Became a build requirement |
|---|---|
| **FRE 801(d)(1)(B)** — prior consistent statements | Precise timestamping, a retention-date marker on every entry, and a dedicated export that isolates statements by date |
| **FRE 803(3)** — then-existing condition, *excluding* statements of memory | A prompt library that elicits present tense ("how is the pain *right now*") and posture-tagging of every entry at capture as present-condition vs. past-recollection |
| **FRE 902(13)–(14)** — self-authentication | Append-only store, SHA-256 hash chaining, independent RFC 3161 timestamps, and a designated certifying custodian |
| **FRE 1006** — summary exhibits | Underlying records kept complete and available for inspection, because the summary is worthless if the substrate isn't producible |
| **Work product, Rule 26(b)(3)** | Attorney adjudication of credibility flags as a *required, credential-locked workflow step* — that's where the mental impressions enter |
| **The record is produce-expected** | A classifier that routes liability content to quarantine *before* it is ever written to the produced stream |

The point isn't cleverness. It's that a competitor can copy the exhibit format in a sprint and
cannot copy this reasoning.

**One framing note, because it matters when you attack it:** we are not engineering *around* the
rules. We're engineering *to* them. The system produces what the rules already reward and then
proves provenance. If it reads to you as circumvention anywhere, that's a finding I want.

---

## 2. The counterintuitive move: the record is designed to be produced

This is the part that surprises people, so it's worth stating plainly.

**The capture log is not privileged, and we don't claim it is.** It is the modern version of the
pain journal attorneys already tell clients to keep — and pain journals are discoverable. Attorneys
direct clients to keep them anyway, because documentation value exceeds disclosure cost. We took
the same trade and tried to raise the documentation value without raising the disclosure cost.

Three tiers, three postures:

| Tier | Contents | Posture |
|---|---|---|
| **1 — The Record** | Client ↔ system capture | **Expect production.** No privilege asserted. Designed to win *on* production. |
| **2 — Intelligence** | Credibility flags, inconsistency alerts, attorney annotations, counsel's protocol | **Work product.** Never produced, never synced to the case-management system. |
| **3 — Attorney messages** | Counsel writing to the client in the same thread | **Privileged** on ordinary grounds. |

Asserting privilege over Tier 1 and losing is worse than never asserting it — a failed claim
invites a waiver fight over everything else. Producing a non-privileged document creates no FRE
502(a) subject-matter waiver exposure, because waiver-expansion requires a waiver.

The three tiers are **architecturally severable** — separate stores, separate export paths, and a
case-management connector that physically lacks a Tier 2 endpoint. Not permission-gated: absent.

**Where privilege actually matters is Tier 2, and this is the part I care most about.** A pain
journal is only the client's words. This system additionally *generates adverse analysis about our
own client* that never existed before. "Produce all system-generated inconsistency alerts for this
plaintiff" is the discovery request that would make every case using this worse off than one that
didn't. That's the protection that has to hold.

---

## 3. Privilege theory: conduit, with *Kovel* as fallback

*United States v. Heppner*, S.D.N.Y. (Rakoff, J., Feb. 2026) held that documents a defendant
generated with consumer-grade AI while preparing his defense were neither privileged nor work
product. Rakoff rejected the *Kovel* argument on **two** grounds:

- **Direction** — Heppner acted on his own initiative. We answer this: counsel-retained,
  counsel-directed, written direction letter, contractual confidentiality, zero-retention terms.
- **Necessity** — the AI was not necessary for counsel to understand the client. **We do not answer
  this.** Our client speaks English and could call the lawyer.

So the primary theory isn't *Kovel* at all. Counsel participates directly in the thread, which
makes the system a **conduit** — the same category as the firm's email server or a paralegal under
Rule 5.3 — and conduit requires no necessity showing. *Kovel* stays available as a per-case
fallback. Never promised.

---

## 4. Where I think this is weakest — attack here first

**1. The 801(d)(1)(B)(i) timing problem may be fatal to our lead theory.** Subsection (i) requires
the statement to predate the motive to fabricate. In a PI case a defense lawyer will argue the
motive arose at retention — and we start capturing *after* retention. If that lands, every
statement we hold is post-motive and (i) is unavailable to us entirely.

My current answer is that **(ii)** — added in 2014, rehabilitation when credibility is attacked on
another ground, such as inconsistency or faulty memory — carries no equivalent pre-motive
requirement, and that's the more robust prong for us. I want to know whether you think (ii) actually
bears that weight, or whether I'm leaning on a provision courts are still working out.

**2. Does elicitation weaken 803(3)?** These aren't spontaneous utterances; a system asked a
question and the client answered. I believe an elicited present-condition statement is still 803(3),
but I'd like to know how a skeptical judge reads AI-prompted responses, and whether the question
phrasing becomes an issue.

**3. Whose statement is it?** The client typed it. But if the question shapes the answer, is there
an argument that the record is partly the system's statement rather than the declarant's? We have a
hard no-coaching rule — neutral, open elicitation only, no steering toward favorable content — but
the transcript is discoverable and every question we asked is in it.

**4. The quarantine store.** We classify pre-commit and route liability content out of the produced
stream, but we never delete it — deletion inside a tamper-evident chain is provable spoliation. So
it exists, immutably, outside Tier 1. Is that store discoverable? Does routing it look like
sequestration to a judge who doesn't like us?

**5. Notice cuts both ways.** Every flag is hash-chained and independently timestamped. An
unacknowledged flag sitting sixty days is proof the firm was on notice and did nothing. We've built
an acknowledgment SLA, but I'd like your read on whether we've manufactured a malpractice exhibit
against our own customers.

**6. Client consent.** Engagement-letter addendum plus a plain-language SMS disclosure before any
substantive capture: it's an AI from your firm, this is recorded, your legal team sees it, **the
other side may see it too**, be honest including the good days, and anything about *how it happened*
goes to your legal team, not here. Is that sufficient informed consent under Rule 1.4, and does
telling a client the defense may read it suppress the candor the whole thing runs on?

---

**7. Does the vendor business-record theory survive a per-case protocol?** Rather than have the
claimant certify their own record, we make the platform operator the certifying party: the log is
the vendor's record of its regularly conducted activity, self-authenticating under 902(11) and its
state analogues, with the certification speaking only to system operation. That's meant to sidestep
*Palmer v. Hoffman* — it isn't the claimant building evidence for their own case.

But the theory depends on the record-keeping being uniform and routine across all users, and our
privilege architecture depends on counsel authorizing a **bespoke conversation protocol per case**.
A defense lawyer says: counsel designed the questions for this litigation, so the record was
prepared for this litigation. My intended answer is that the *record-keeping function* is uniform —
format, cadence engine, retention, hash chain — while *topic authorization* is separate work
product the vendor never certifies. **Does that separation hold, or am I splitting a hair a judge
won't split?**

**8. In a state that never adopted 801(d)(1)(B)(ii), does anything carry past-recollection
material?** Most of these cases are state court. If a state has only the pre-2014 rule, the
pre-motive prong is the only one available — and per item 1, that prong may be closed to us
entirely. Is there something I'm not seeing for "I couldn't sleep last night" in those
jurisdictions, or does that category simply not come in?

---

## 5. What I'd find most useful

Not a memo. Just your instinct on which of the eight above is the one that actually kills it, and
whether there's a ninth I haven't seen. If the answer is "the necessity prong means you should
stop claiming any privilege anywhere," I'd rather hear that now.

*Nothing here is legal advice or a request for representation, and none of these positions has been
blessed by counsel — that's what I'm asking you for.*
