# PIRRA — Privilege Architecture (Model C: Attorney-Directed Agency) — v1.1

Companion doc to the PRD. **Not legal advice — final architecture, contracts, and sample logs to be reviewed by outside counsel per jurisdiction.**

## Legal foundation
- Analysis proceeds by analogy: *United States v. Kovel*, 296 F.2d 918 (2d Cir. 1961) (nonlawyer agents/translators); paralegal/staff cases; interpreter cases; client-portal practice; and *United States v. Heppner* (S.D.N.Y. Feb. 17, 2026).
- **Heppner:** client's unilateral use of a consumer AI chatbot failed privilege (not an attorney; ToS destroyed confidentiality; no counsel direction). **Dicta:** counsel-directed use "might arguably" make the AI "akin to a highly trained professional who may act as a lawyer's agent" under *Kovel*. PIRRA is that dicta built as a product.
- Privilege protects **communications, not facts**. Underlying facts remain discoverable. Privilege is never automatic or guaranteed.
- Ethics overlay: Model Rules 1.1, 1.4, 1.6, 5.3, 5.5 + **ABA Formal Op. 512** (July 2024).

## Committed architecture (4 layers)
### Layer 1 — Attorney Authorization
- **Conversation protocol, not a script.** Counsel authorizes topics, method, guardrails — including express authorization for empathetic conversation as the means of elicitation. Protocol is opinion work product.
- **Direction letter** (per client): firm retains PIRRA as its confidential agent solely to facilitate client-to-counsel communication.
- **Contractual chain:** firm → PIRRA services agreement → PIRRA's enterprise model-provider agreement (zero retention, no training) → per-firm tenant isolation.
- **BYOM optional** enterprise tier with approved-provider allowlist, config validation, eval gate.

### Layer 2 — The Channel (ONE privileged thread)
- Client authenticates into the firm's instance. Agent vs. attorney messages unmistakably labeled.
- **Bidirectional attorney messaging** — direct privileged A-C communication, documented involvement, engagement flywheel.
- **DECISION: no separate companion mode.** One case-scoped empathetic channel; off-topic drift steered back; crises escalate to humans.

### Layer 3 — Firm Data Plane
- **Immutable originals** in the firm file; corrections annotate, never overwrite; FRE 502(d)/clawback ready.
- **Tamper-evident record integrity:** append-only event store with cryptographic hash chaining + independent trusted timestamps (RFC 3161). Self-authenticating under FRE 902(13)–(14). **Explicitly NOT a blockchain.** Sales line: "Every record is cryptographically hash-chained and independently timestamped — tamper-evident and self-authenticating under FRE 902(14) — without putting any client data on a blockchain."
- **AI parser + timeline builder** (work product): source-linked extraction with full provenance.
- **Firm client file via MCP** into practice management.

### Layer 4 — Attorney Surface
- Attorney-managed timeline (opinion work product); alerts + acknowledgment workflow; weekly digest; message the client in-thread.

## Red team — what defeats this architecture
Consumer-grade API terms · unvalidated BYOM account · discoverable companion side-channel · client treats it as a personal diary · no written attorney direction · outputs never reaching the firm file · UI copy overpromising privilege · unsupervised automation · crisis statements without escalation.

**The build discipline IS the legal defense.** Never claim the architecture "guarantees" privilege.
