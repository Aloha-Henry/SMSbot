# California ethics, supervision and AI governance for lawyers — what your ethics counsel meant

**Status:** research memo, September 2026 · **Confidence:** every item below was captured through
search summaries; primary sites (calbar.ca.gov, courts.ca.gov, leginfo) are blocked from this
environment. Quotations marked *(quoted in summary)* were reproduced by the search layer and should
be pulled from the source before being repeated to a firm. Nothing here is legal advice.

---

## 1. The one-paragraph answer

Your ethics counsel is describing a specific, datable shift. In 2022 the Legislature shut down the
State Bar's regulatory sandbox and paraprofessional programs (AB 2958). Since 2023 the same
institutions have moved the other way: the Bar published Practical Guidance on generative AI
(Nov 2023), the Judicial Council adopted the nation's first court rule on AI (Rule 10.430, effective
Sept 2025), the Supreme Court directed the Bar to write AI into the enforceable Rules of
Professional Conduct (Aug 2025), COPRAC proposed those amendments (Mar 2026), the Bar replaced the
guidance with a version covering **agentic AI** (May 2026), and the Legislature passed SB 574
regulating lawyers' AI use 75–0 (Aug 31, 2026, awaiting the Governor). The posture is not
"don't." It is "you may, if you supervise it, govern it, verify it, and keep client information
inside a confidential system." **Supervision** and **governance** are the two words that appear in
every one of those documents, and they are exactly the two things PIRRA's control surface is built
around.

## 2. What "supervision" means here — Rule 5.3

California Rule 5.3, Responsibilities Regarding Nonlawyer Assistants *(text quoted in summary)*:

> (a) a lawyer who individually or together with other lawyers possesses managerial authority in a
> law firm, shall make reasonable efforts to ensure that the firm has in effect measures giving
> reasonable assurance that the nonlawyer's conduct is compatible with the professional obligations
> of the lawyer; (b) a lawyer having direct supervisory authority over the nonlawyer, whether or not
> an employee of the same law firm, shall make reasonable efforts to ensure that the person's
> conduct is compatible with the professional obligations of the lawyer; and (c) a lawyer shall be
> responsible for conduct of such a person that would be a violation of these rules or the State
> Bar Act if engaged in by a lawyer if: (1) the lawyer orders or, with knowledge of the relevant
> facts and of the specific conduct, ratifies the conduct involved …

The 2026 proposed amendment makes the AI application explicit: a lawyer must give nonlawyer
assistants "appropriate instruction and supervision concerning all ethical aspects of their
employment, including the use of technology in the provision of legal services, such as artificial
intelligence." Commentary on the proposal says the Bar "likens AI to a nonlawyer assistant, meaning
the same level of oversight applies."

**Translation for PIRRA:** the Bar's own frame for an AI that does work in a representation is
*nonlawyer assistant*. That is the frame the product was already using ("the firm's assistant,
under your direction"). Rule 5.3 asks for three things, and each maps to a shipped or specified
artifact:

| Rule 5.3 asks for | PIRRA artifact |
|---|---|
| Firm-level **measures** giving reasonable assurance (5.3(a)) | The firm AI policy the product ships as a template; autonomy-level and approval-regime defaults set at the firm level (DR-0005) |
| **Direct supervision** by the responsible lawyer (5.3(b)) | The per-case direction record, e-signed and hash-anchored; the approval regimes; the workbench as counsel's inbox with logged receipt; attorney-only disposition of evidentiary flags |
| Lawyer **responsible for the conduct** (5.3(c)) | Every outbound logged with level, prompt id, protocol clause, model version, validator result and approver; the allowlist validator; mandatory escalation; the client-facing model blind to the intelligence plane |

## 3. What "governance" means here — Rule 5.1 and the May 2026 guidance

**Proposed Rule 5.1 amendment:** managerial lawyers must establish internal policies and procedures
that "govern the use of artificial intelligence, in accordance with the Rules of Professional
Conduct." The word *govern* is the Bar's, and it is the word she used.

**May 14, 2026 Practical Guidance** (replacing the 2023 version at the Supreme Court's request):
*(quoted in summary)*

> Lawyers should establish clear policies regarding the use of generative AI and agentic AI, and
> those policies must be updated as AI systems change, become more autonomous, and are integrated
> into legal workflows.

> Agentic AI introduces an additional degree of autonomy, including the ability to initiate tasks or
> interact with external tools, and the capacity to conclude tasks without human review or approval.
> Yet, this autonomy does not satisfy a lawyer's duty to exercise independent judgment, nor does it
> alter a lawyer's existing ethical obligations.

> A lawyer remains fully responsible for any outputs and work product generated with the assistance
> of AI.

**Translation for PIRRA:** at Levels 3 and 4 PIRRA is agentic in the Bar's sense (it initiates
contact and concludes an exchange without per-message review). The guidance does not prohibit that.
It requires that the lawyer's independent judgment not be displaced and that the firm have a
written, maintained policy. DR-0005's autonomy levels are a governance instrument in exactly the
guidance's terms: the firm chooses how much autonomy, records the choice, and can change it.

## 4. The rest of the 2026 proposed rule package (COPRAC, approved Mar 13 2026; comment closed May 4 2026; Supreme Court has final authority)

| Rule | Proposed change | PIRRA consequence |
|---|---|---|
| **1.1 Competence** | New comment: lawyers must independently review, verify, and exercise professional judgment regarding AI output | Attorney adjudication of flags; exhibits never labeled "admissible"; the pre-demand impeachment review |
| **1.4 Communication** | New Comment 5: when AI use "presents a significant risk or materially affects the scope, cost, manner, or decision-making process of representation," the lawyer must communicate sufficient information to permit informed decisions *(quoted in summary)* | The client onboarding notice and the engagement-letter addendum are Rule 1.4 compliance, not just privilege hygiene. AI use here materially affects the *manner* of representation, so disclosure is not optional |
| **1.6 Confidentiality** | "Reveal" expanded to include "exposing confidential information to technological systems, including artificial intelligence tools, where such exposure creates a material risk that the information may be accessed, retained, or used … in a manner inconsistent with the lawyer's duty of confidentiality" *(quoted in summary)* | Zero-retention model terms, in-tenant models for Levels 1–2, customer-managed keys, Twilio body retention off. Under this language, a consumer-grade or training-enabled deployment would itself be a *revelation* |
| **3.3 Candor** | Verify the accuracy and existence of all cited authorities before filing | Applies to the firm's filings, not PIRRA's output directly; the citation-register discipline in our own docs is the same principle |
| **5.1 / 5.3** | As above | As above |

These are proposed, not adopted. California's approach is notable because it would move AI duties
into **enforceable rule text** with disciplinary consequences, rather than advisory opinions.

**Timeline update (Sept 4, 2026).** The first comment period on the March 13 proposals closed May 4,
2026. At its June 12, 2026 meeting COPRAC approved **modified** proposals and opened a second 45-day
comment period, which closed **August 6, 2026**. The revision adds a definition of artificial
intelligence to Comment [1] and a new Comment [2] requiring the lawyer to exercise professional
judgment over "all aspects of that use, including but not limited to, the inputs and outputs."
Status after August 6 is not known to us; the Board of Trustees is the next step, and any adoption
must be verified before proposal language is treated as effective. The "inputs" language matters to
PIRRA: the neutral-prompt library is an attorney-reviewed input, and the direction letter is the
record of that review. (Flagged by the outside memo at
`docs/source/Chat-Legal-Architecture-Memo-2026-09-03.md`; confirmed against the State Bar's
public-comment page via search summary.)

## 5. The 2023 Practical Guidance points that carry into the product *(quoted in summary)*

- Confidentiality: a lawyer "must not input any confidential information of the client into
  generative AI solution unless the lawyer knows that the provider will not share the information
  with others or use the information for itself, such as to train or improve its AI product."
- Disclosure: the lawyer "should consider disclosure to their client that they intend to use
  generative AI in the representation, including how the technology will be used, and the benefits
  and risks of such use."
- Fees: the fee agreement "should explain the basis for all fees and costs, including those
  associated with the use of generative AI," and the lawyer "must not charge hourly fees for the
  time saved by using generative AI."
- Verification: AI-generated text, citations or summaries must be verified through human review.

**PIRRA consequence on fees:** $149 flat per case, disclosed in the engagement letter, is the
compliant shape. A firm must never bill attorney hours for work PIRRA did.

## 6. Rule of Court 10.430 (Judicial Council, adopted Jul 18 2025, effective Sep 1 2025)

Applies to courts, not lawyers, but it is the clearest statement of the branch's posture. Any court
permitting generative AI had to adopt a use policy by December 15, 2025, addressing: no
confidential or nonpublic information into AI systems without safeguards; meaningful human review
and correction of AI content; disclosure when content is entirely AI-produced; no use producing
unlawful discrimination. Standard 10.80 supplies model policy language. Courts may also prohibit AI
entirely.

**Why it matters to you:** the four pillars (confidentiality, human oversight, disclosure, bias) are
the same four the Bar uses. When ethics counsel says "governance," this is the template she has in
her head. A firm AI policy built on those four headings will read as native to any California
regulator.

## 7. SB 574 (Umberg) — passed Aug 31 2026, 75–0 in the Assembly; on the Governor's desk

Provisions as captured *(quoted in summary; pull the enrolled text)*:

- Would "prohibit an attorney from delegating the practice of law to generative artificial
  intelligence."
- Would require an attorney using generative AI "to ensure that confidential, personal identifying,
  or other nonpublic information is not entered into a public generative artificial intelligence
  system."
- Would require attorneys to "take reasonable steps to verify the accuracy of generative
  artificial intelligence outputs and to correct any erroneous or hallucinated output in any
  material used by the attorney."
- Would require disclosure of generative AI use to the court for documents submitted to it.
- Also reaches arbitrators and judicial officers.

**Two things to run down before any pilot in California:**

1. **"Delegating the practice of law."** PIRRA must never do anything a court could call practicing
   law: no legal advice, no settlement discussion, no case evaluation delivered to the client.
   Mandatory escalation of legal and settlement questions (DR-0005 floor) is what keeps the
   assistant on the right side of this line. Ask counsel whether structured damages check-ins under
   written direction fall within "practice of law" in the bill's sense. The answer should be no,
   but get it.
2. **"Public generative artificial intelligence system."** The bill's definition decides whether an
   enterprise, zero-retention, in-tenant deployment is "public." In-tenant models for Levels 1–2
   (DR-0005 D23) are the cleanest possible answer; for Levels 3–4 the enterprise terms must be
   documented against whatever definition the enrolled bill uses.

**The arc she was describing:** Senator Umberg co-sponsored the 2022 legislation that stopped the
Bar's sandbox. He authored SB 574. Same legislator, four years apart, moving from *prohibit* to
*regulate*. That is the shift from resistance to conditional encouragement in one person.

## 8. SB 243 — companion chatbots (effective Jan 1 2026)

Imposes disclosure, crisis-protocol, minor-protection and reporting duties on operators of
"companion chatbots," with a private right of action ($1,000 per violation or actual damages,
plus fees). Exemptions include chatbots used solely for customer service or operational purposes.

**PIRRA consequence:** stay outside the definition, on purpose and demonstrably. The existing
language rules (never "companion," never "coach," never a relationship framing) and the
"legal-team support tool" positioning are the compliance posture. Keep the crisis-escalation
protocol regardless, because it is also Rule 1.1 competence and because a client in crisis is a
human first.

## 9. What to build so a California firm can show compliance, not just claim it

This is the governance package the product should ship. Each item is a supervision or governance
artifact in the Bar's own vocabulary.

1. **Firm AI-use policy template** on the four 10.430 headings, pre-filled with PIRRA's actual
   configuration and blanks for firm choices (default autonomy level, approval regime, who
   supervises). Proposed Rule 5.1 will require a policy; hand them one.
2. **Supervision record, per case:** the direction letter, the autonomy and approval election,
   every change, and the receipt log showing the workbench was reviewed. This is 5.3(b) made
   provable.
3. **Client disclosure kit:** onboarding SMS text, engagement-letter addendum paragraph, periodic
   re-disclosure cadence. Rule 1.4 Comment 5 compliance, and the §952 confidentiality fact.
4. **Confidentiality attestation:** model terms (zero retention, no training), Twilio retention
   setting, key custody, tenant isolation, all in a one-page document the firm can put in its
   Rule 1.6 file.
5. **Verification and responsibility trail:** the outbound log and the attorney-adjudication
   record. Rule 1.1 and 5.3(c).
6. **Fee-disclosure language** for the engagement letter: flat per-case cost, no hourly billing of
   AI work.
7. **Nothing labeled "admissible," ever.** Rule 3.3 and SB 574 verification duties both point the
   same way.

## 10. Questions for ethics counsel, in order

1. Does a structured damages check-in under written attorney direction fall within "delegating the
   practice of law" as SB 574 uses the phrase?
2. What is the enrolled bill's definition of a "public generative artificial intelligence system,"
   and does an enterprise zero-retention deployment fall outside it? Does in-tenant inference?
3. Under proposed Rule 1.4 Comment 5, is our onboarding disclosure sufficient, or does she want
   the engagement letter to carry it as well?
4. Under proposed Rule 1.6's expanded "reveal," which of our vendor configurations does she want
   documented in the firm's file, and in what form?
5. What does she want the supervision record to contain to satisfy 5.3(b) in a disciplinary
   inquiry?
6. Is she comfortable that PIRRA sits outside SB 243's "companion chatbot" definition as designed?

## Sources (search-captured; primary sites blocked from this environment)

State Bar Practical Guidance (PDF): https://www.calbar.ca.gov/sites/default/files/portals/0/documents/ethics/Generative-AI-Practical-Guidance.pdf ·
Proposed amendments, public comment page: https://www.calbar.ca.gov/public/public-meetings-comment/public-comment/public-comment-archives/2026-public-comment/proposed-amendments-rules-professional-conduct-related-artificial-intelligence ·
Agenda Item 6.3, May 2026 Board: https://www.calbar.ca.gov/sites/default/files/portals/0/documents/ethics/Agenda-Item-6.3.pdf ·
LawSites on the proposed rules: https://www.lawnext.com/2026/05/california-bar-proposes-rule-requiring-lawyers-to-verify-every-ai-output-and-five-other-ai-focused-ethics-changes.html ·
ABA Journal on the proposed rules: https://www.abajournal.com/news/article/california-bar-proposes-first-ai-specific-changes-to-ethics-rules ·
Legal Ethics Lawyer blog: https://legalethicslawyer.blog/2026/03/27/california-proposes-amendments-to-the-rules-of-professional-conduct-re-artificial-intelligence/ ·
Mondaq on the 2026 guidance: https://www.mondaq.com/unitedstates/new-technology/1824118/california-state-bar-issues-2026-ethics-guidance-on-ai-use-in-legal-practice ·
CLA on the 2023 guidance: https://calawyers.org/privacy-law/california-state-bar-releases-guidance-on-use-of-genai-in-practice-of-law/ ·
Rule 5.3 text (calbar PDF): https://www.calbar.ca.gov/sites/default/files/portals/0/documents/rules/rrc2014/final_rules/rrc2-5.3_%5B3-110%5D-all.pdf ·
Rule of Court 10.430: https://courts.ca.gov/cms/rules/index/ten/rule10_430 · Morgan Lewis summary: https://www.morganlewis.com/pubs/2025/08/california-courts-adopt-rule-governing-the-states-generative-ai-use · ABA Journal: https://www.abajournal.com/news/article/californias-courts-must-adopt-ai-policies-judicial-council-says ·
SB 574 text: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB574 · Farella: https://www.fbm.com/publications/californias-sb-574-new-ai-rules-for-lawyers-and-arbitrators/ · Clio: https://www.clio.com/blog/california-sb-574-ai-bill-lawyers/ · Artificial Lawyer: https://www.artificiallawyer.com/2026/08/26/california-sb-574-will-ais-home-state-kill-off-ai-for-law/ · Sen. Umberg: https://sd34.senate.ca.gov/news/reuters-california-senate-passes-bill-regulating-lawyers-use-ai ·
AB 2958 (2022): https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220AB2958 · Bloomberg Law: https://news.bloomberglaw.com/business-and-practice/california-restrains-state-bar-from-expanding-nonlawyer-practice · IAALS: https://iaals.du.edu/news/will-governor-newsom-kill-california-state-bar-efforts-explore-regulatory-innovation ·
SB 243: Orrick: https://www.orrick.com/en/Insights/2026/04/2026-State-Chatbot-Laws-Key-Provisions-and-Regulatory-Trends · FPF: https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/ · Gunderson: https://www.gunder.com/en/news-insights/insights/client-insight-california-sb-243-new-compliance-requirements-for-operators-of-ai-companion-chatbots
