# State evidence rule survey

**Purpose:** determine, per jurisdiction, whether the authentication and hearsay theories in
[DR-0003](../decisions/0003-state-forum-authentication-and-psi.md) are actually available.
Personal-injury cases are overwhelmingly state court, and our architecture was built against the
Federal Rules.

> **This is internal product-planning input. It is not legal advice, and no cell of it may be
> asserted to a customer without counsel review in that jurisdiction.** A firm relying on this
> chart and finding it wrong is worse than the firm having no chart at all. Every entry records
> its source; anything unverified says so.

## Questions, in priority order

1. **801(d)(1)(B)(ii) adopted?** *(highest priority)* Did the state adopt the 2014 federal
   amendment adding rehabilitation-on-another-ground? If not, only the pre-motive prong exists —
   and that prong may be unavailable to us entirely, since capture begins after retention. In a
   state with only the pre-2014 rule, our fallback for past-recollection material may collapse.
2. **902(11) analogue?** Certified records of regularly conducted activity — the primary
   authentication route under D12. Citation, and what the certification must contain.
3. **Notice mechanics.** Advance notice? Inspection right? Deadline? Missing it forfeits
   self-authentication, so the workbench must generate the notice packet.
4. **902(13)/(14) analogue?** Nice-to-have supplement, not the foundation.
5. **803(6) business records.** Local numbering and any state-specific wrinkle.
6. **803(1) present sense impression.** Available? Any narrower judicial reading of
   "immediately"?
7. **803(3) then-existing condition.** Available?
8. **Rule 106 / completeness.** Supports the shield-by-default argument.

## Method

State rules of evidence are public. Primary sources are the state legislature or judiciary site,
with Justia and Cornell LII as cross-checks. No paid database is required for rule *text*.

**CourtListener is connected** and is the tool for case law. Three things learned the hard way
while verifying *Heppner*:

- **Search RECAP, not just opinions.** The opinions index returned zero results for a real,
  widely-covered S.D.N.Y. ruling; the RECAP docket index had it immediately. District-court
  memoranda frequently appear as docket entries rather than indexed opinions. A zero-result
  opinion search is **not** evidence a case doesn't exist.
- **Rate limit is 5 requests/minute** on the free tier. Plan queries; don't fan out.
- **Full document text is often not free.** A docket entry can be confirmed while the document
  itself sits behind PACER. Confirming a case exists is not the same as having read it.

**Never record a holding in this file from a search snippet or a secondary source.** Note the
citation, note that the text is unread, and mark it pending. Fabricated and mischaracterized
citations are the highest-damage failure mode in this project.

## Sequencing

Home market first, then by PI case volume: **HI** → CA, TX, FL, NY, PA, IL, GA, OH, NJ, NC, MI,
AZ → remainder.

---

## Hawaii

Rules are codified at HRS ch. 626 (Hawaii Rules of Evidence). **Hawaii renumbers** — business
records are `HRE 803(b)(6)`, not `803(6)` — so any template built on federal numbering breaks on
contact.

| Question | Finding | Source |
|---|---|---|
| **902(11) analogue** | **Yes.** HRE 902(11), added by Act 134, Session Laws 2002, implementing the certification procedure in the 2002 amendment to HRE 803(b)(6). | [HRS §626-1 Rule 902](https://www.capitol.hawaii.gov/hrscurrent/Vol13_Ch0601-0676/HRS0626/HRS_0626-0001-0902.htm) · [Justia](https://law.justia.com/codes/hawaii/title-33/chapter-626/rule-902/) |
| **Notice mechanics** | **Yes, and they bite.** Reasonable notice in advance of trial (or during trial on good cause), *plus* the record and declaration made available for inspection sufficiently in advance to give an adverse party fair opportunity to challenge. | same |
| **Certification is itself authenticated** | The certification is a document requiring authentication independent of the records it accompanies — received as self-authenticating under 902(1), (2), or (3), or by statutory presumption under 902(10). **Our declaration template has to satisfy this too.** | same |
| **Does the certification do real work?** | **Yes.** Hawaii case law holds a record inadmissible as a business record under HRE 803(b)(6) where it lacked a 902(11)-compliant certification. Not ceremonial. | same |
| **803(b)(6) business records** | Present, with the 2002 certification amendment. Local numbering `803(b)(6)`. | — |
| **902(13)/(14) analogue** | **Reported absent — not yet verified.** Raised in co-founder review. Confirm against current HRE 902 text before relying on it. | *pending* |
| **801(d)(1)(B)(ii) — the priority question** | **Not yet researched.** Hawaii handles prior statements through HRE 802.1, a different structure from the federal rule, so this needs direct reading rather than analogy. | *pending* |
| **803(1) present sense impression** | **Not yet researched.** | *pending* |
| **803(3) then-existing condition** | **Not yet researched.** | *pending* |
| **Completeness** | **Not yet researched.** | *pending* |

**Read so far:** the D12 vendor-certification route is available in Hawaii, which is the load-bearing
finding — the home market works without any dependence on 902(13)/(14). The open item that could
still hurt is 802.1 and whether Hawaii has a rehabilitation prong equivalent to the federal
801(d)(1)(B)(ii).

---

## Remaining jurisdictions

Not yet started. Add one section per state in the format above. Do not summarize a state as
"probably follows the federal rule" — the whole reason this document exists is that the
assumption failed.
