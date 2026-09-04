# PIRRA: Legal Architecture and Build Guardrails

> **Provenance.** Received from Hank on 2026-09-04, authored by an outside AI research session
> ("Chat") dated 2026-09-03. Preserved as written. Our reconciliation is
> [`docs/briefs/2026-09-response-to-legal-architecture-memo.md`](../briefs/2026-09-response-to-legal-architecture-memo.md).
> Where this memo conflicts with a decision record or the v1.1 design proposal, those win.

**To:** Claude / PIRRA product and engineering
**Date:** September 3, 2026
**Scope:** California-first, attorney-directed communication with already-represented personal injury clients
**Status:** Research-informed product memo—not a legal opinion or certification of the existing build

## 1. Executive position

PIRRA has a credible architecture worth building: a law firm's client-communication channel with AI-assisted information collection, organization, and routing.

The strongest framing is not "a private AI journal that eventually sends useful information to a lawyer." It is "a client communicating with their legal team through a firm-authorized portal, with clearly identified AI assistance."

That distinction must be real in the workflow, contracts, permissions, and data handling—not merely branding.

The Perplexity report identifies legitimate risks, but overstates the proposition that an AI intermediary necessarily defeats privilege. Conversely, firm authorization, confidentiality labels, enterprise subscriptions, and attorney review do not automatically establish protection.

Our objective should be to support a defensible privilege claim while preserving reliable records and meaningful attorney control. We should not promise a discovery-proof system.

## 2. Legal conclusions the build should—and should not—assume

### Electronic intermediaries do not automatically defeat privilege

California Evidence Code §952 accommodates certain third parties involved in transmitting communications or accomplishing the purpose of the legal consultation. Section 917(b) provides that an otherwise privileged communication does not lose protection solely because it travels electronically or because those facilitating or storing it may access its contents. [§952](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=EVID&sectionNum=952.), [§917](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=EVID&sectionNum=917.)

These provisions support an intermediary analysis. They do not conclusively establish that every generative-AI interaction falls within that protection. Active interviewing, inference, vendor access, and secondary data use require separate scrutiny.

Calling the vendor an "agent of counsel" helps document the intended relationship; it does not decide the legal question.

### Pain updates can be privileged communications

A confidential client-to-lawyer communication made within the legal representation does not become discoverable merely because it discusses factual matters such as pain, missed work, or treatment.

The distinction is between the protected communication and the underlying facts, which may be obtainable independently. California's Supreme Court expressly distinguishes those concepts. [Costco Wholesale Corp. v. Superior Court](https://law.justia.com/cases/california/supreme-court/2009/s163335/)

However, uploading a previously existing medical record or independent diary does not automatically make the original document privileged.

### Work product requires its own analysis

Do not describe every AI summary as "attorney work product" by construction.

California distinguishes writings reflecting attorney impressions and legal theories from other, qualified work product. Attorney-directed witness interviews can receive protection, providing a useful—but not AI-specific—analogy for counsel-directed information gathering. [CCP §2018.030](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CCP&sectionNum=2018.030.), [Coito v. Superior Court](https://law.justia.com/cases/california/supreme-court/2012/s181712.html)

California also does not categorically restrict attorney work product to litigation preparation. Do not import a federal formulation into every California analysis. [County of Los Angeles v. Superior Court](https://law.justia.com/cases/california/court-of-appeal/4th/82/819.html)

For product purposes, call summaries derived records potentially protected by privilege and/or work product. Attorney approval is a review event, not an automatic legal transformation.

### The recent AI cases are warnings, not a universal answer

United States v. Heppner rejected protection for a defendant's independently initiated Claude exchanges. The court left open the possibility of a different analysis for counsel-directed use; it did not establish an approved architecture or a binding three-part "Rakoff Privilege Test." [Heppner opinion](https://storage.courtlistener.com/recap/gov.uscourts.nysd.652138/gov.uscourts.nysd.652138.27.0.pdf)

In contrast, Warner v. Gilbarco rejected compelled production of a self-represented litigant's AI materials on procedural grounds and, alternatively, work-product grounds. That was not a holding that chatbot conversations enjoy attorney-client privilege. [Warner order](https://cases.justia.com/federal/district-courts/michigan/miedce/2:2024cv12333/379552/94/0.pdf?ts=1770829006)

Neither federal trial-court decision settles PIRRA's treatment under California law.

Pre-suit operation does not remove these questions. Attorney-client privilege does not require a filed lawsuit, and materials created before filing may later become subjects of discovery disputes.

## 3. Recommended operating architecture

The following are proposed product controls, not a claim that statutes prescribe this exact implementation.

### A. Establish the firm relationship before collection

Each enabled matter should have:

* An identified client, firm, responsible attorney, and authorized staff.
* Recorded firm authorization for the workflow.
* Approved collection topics, prompt versions, and escalation rules.
* Clear client explanations of AI involvement, firm access, response expectations, and alternatives for contacting a human.

Authorization should identify an actual operating policy, not simply a checkbox stating that everything is privileged.

### B. Deliver original communications to the firm from the outset

When the client sends a message, preserve it in the firm-controlled matter record and make it accessible to authorized personnel before AI processing.

The parser should operate on a communication the firm has already received. It should not be the gatekeeper deciding which parts of an otherwise separate chatbot conversation eventually reach counsel.

Preserve the AI questions and responses too: the context of a client's answer matters.

Distinguish "received by the firm's system" from "read by your lawyer." The interface must not imply human review that has not occurred.

### C. Keep identities and visibility distinct

The same conversation can include AI, staff, and attorney messages, but each must be unmistakably attributed.

* Identify AI-generated follow-ups as AI assistance.
* Identify human messages by the actual sender and role.
* Never send an AI-generated message under an attorney's name without approval.
* Keep internal legal analysis separate from the client-visible conversation.
* Provide a clear human-contact option.

A warm conversational style is compatible with this design. The AI should not pose as the lawyer, a therapist, or a treating professional.

### D. Make the timeline a sourced interpretation

Every generated event or summary should include:

* Links to the supporting messages or documents.
* Event date versus date reported.
* Attribution, such as "client reported."
* Missing information, ambiguity, and conflicting accounts.
* Generation version and subsequent review history.

A client reporting that pain followed an accident is not an AI-established medical causation finding.

The attorney-managed timeline should be a reviewed view over preserved source records. Corrections should not silently rewrite the original account.

### E. Separate automatic processing from consequential action

Subject to counsel-approved boundaries, reasonable automation candidates include:

* Archiving incoming messages.
* Asking bounded factual follow-up questions.
* Producing internal draft summaries and timeline suggestions.
* Routing source-linked alerts.
* Synchronizing records to designated internal destinations.

Require human approval for substantive legal advice, settlement recommendations, externally used case narratives, and disclosures to insurers or other outside recipients.

Do not assume privilege requires a lawyer to approve every routine chat bubble. Equally, do not assume approving a prompt once satisfies every ongoing supervision obligation.

California's updated 2026 guidance emphasizes meaningful lawyer supervision and review, particularly where agents make substantive determinations or transmit client information externally. The firm should approve the precise level of autonomy before deployment. [State Bar guidance](https://www.calbar.ca.gov/sites/default/files/portals/0/documents/ethics/Generative-AI-Practical-Guidance.pdf)

### F. Enforce permissions outside the model

MCP is an integration mechanism, not a security or privilege boundary.

The application—not the model—must enforce firm identity, matter access, permitted destinations, and allowed actions.

Use narrow integration permissions. Treat client messages and uploaded documents as untrusted content, never as authority to change permissions or execute arbitrary tools.

An instruction embedded in a message must not enable another client's file to be retrieved or an insurer to be contacted.

Internal synchronization should have delivery status, duplicate prevention, and visible failure handling. Receiving a message must not depend on the case-management integration being online.

## 4. Confidentiality, preservation, and operational safeguards

### Review the whole data path

Document every service that can receive content: model provider, hosting, transcription, search indexes, monitoring, support systems, backups, and integrations.

Recommended defaults include:

* Contractual limits to providing the authorized service.
* No model training or unrelated secondary use of client content.
* No cross-firm learning from identifiable matter data.
* Restricted, audited personnel access.
* Encryption and firm/matter isolation.
* Clear incident-response and legally permitted notice procedures.

An "enterprise" label does not substitute for reviewing the actual agreement and configuration. Nor can a vendor promise to ignore valid legal process.

Avoid confidential message bodies in push notifications, analytics, and routine error logs.

### Preserve responsibly

Maintain original communications and version history under a counsel-approved retention policy, with legal-hold capability.

Do not delete underlying messages because a summary exists or because a record might be unfavorable. Conversely, do not equate sound preservation with retaining every technical log forever.

Vendor-side retention minimization and the firm's duty to preserve its records are separate design questions.

Support matter export and orderly offboarding. Firm control should not become data lock-in or a claim that the firm owns the client's privilege.

### Make alerts operationally meaningful

An alert needs an assigned recipient, urgency, acknowledgement state, and escalation path—not just a dashboard badge.

Tell clients when humans monitor the channel. Do not promise continuous monitoring unless the firm actually provides it.

The app must not diagnose, prescribe treatment, or encourage someone to wait for a lawyer when immediate emergency assistance is appropriate.

## 5. Current-law and launch gates

Use the State Bar's updated 2026 guidance, not only its 2023 version. Also distinguish existing obligations from proposed amendments: the official proposal was revised in June 2026, with a second comment deadline of August 6. Verify any subsequent adoption before treating proposal language as effective. [Official proposal](https://www.calbar.ca.gov/public-comment/proposed-amendments-rules-professional-conduct-related-artificial-intelligence)

Before a live sensitive-data pilot, California counsel should review:

1. Whether the actual collection workflow supports privilege under §§952 and 917.
2. The separate treatment of raw messages, attachments, AI responses, summaries, and attorney annotations.
3. Vendor terms, client disclosures, and secondary-use restrictions.
4. Supervision, external-disclosure controls, retention, and legal holds.
5. Any changes required for other jurisdictions.

Synthetic-data development can proceed while those questions are resolved.

## 6. Requested engineering response

Please reconcile this memo with the current build rather than redesigning it blindly.

Identify:

* Which controls exist, are partial, or are missing.
* Where original communications first become available to the firm.
* Every service receiving confidential content.
* Which actions the AI can take without approval.
* How originals, derived records, and reviewed outputs are distinguished.
* Tests for cross-matter access, prompt injection, unsupported summaries, missed alerts, failed synchronization, and unauthorized disclosure.

Separate engineering defects from questions requiring counsel's judgment.

**Bottom line:** Build PIRRA as a reliable, confidential channel between an existing client and legal team, with constrained AI assistance and traceable records. That is a defensible product direction—not a guarantee that every record will be protected.
