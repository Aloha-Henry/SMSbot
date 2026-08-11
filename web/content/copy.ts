// ─────────────────────────────────────────────────────────────────────────────
// PIRRA landing page copy.
//
// This copy is FINAL per docs/source/PIRRA-Landing-Page-Brief.md §5.
// Edit the words here — never inline in components.
//
// Before changing anything, read §0 of the brief. The absolutes:
//   · "preserves evidence that would otherwise be lost" — NEVER "creates evidence"
//   · no privilege guarantees, ever — architecture-descriptive only
//   · no outcome or settlement promises
//   · AI status always disclosed
//   · banned for the product: companion, coach, nurse navigator,
//     AI legal assistant, chatbot, therapy, journal
//   · the only hard numbers on this page are the FRE citations and $149
// ─────────────────────────────────────────────────────────────────────────────

export const cta = {
  primary: "Request pilot access",
  secondary: "See a sample exhibit",
  // TODO: replace with the real pirra-demand-exhibit sample
  secondaryHref: "/sample-exhibit.pdf",
} as const;

export const hero = {
  eyebrow: "For plaintiff personal-injury firms",
  headline:
    "Recovery doesn't happen in doctor's offices. Now you have the record that proves it.",
  subhead:
    "PIRRA turns your client's recovery into court-ready exhibits — captured through natural text messages, structured to evidence standards, every fact traceable to the moment your client said it.",
  trust: [
    "Built on FRE 803(3)",
    "902(13)–(14)",
    "1006",
    "Attorney-directed",
    "Works with any case-management system",
  ],
} as const;

export const problem = {
  headline: "The most valuable part of the case is the part nobody documents.",
  body: [
    "Non-economic damages — pain, lost function, the life your client can't live yet — are the majority of settlement value and the least-documented part of every file. You tell clients to keep an injury journal. Almost none of them do. And the ones who do hand you an uncontrolled diary that the defense can subpoena, cherry-pick, and use against them.",
    "So the record of how your client actually suffered — the missed recitals, the daughter they couldn't lift, the nights they couldn't sleep — evaporates. By the time you write the demand, you're reconstructing it from memory.",
  ],
} as const;

export const output = {
  headline: "Exhibits, not notes.",
  subhead:
    "PIRRA's output is a document you attach to a demand or take to mediation — not another dashboard to check.",
  cards: [
    {
      title: "Demand-packet exhibit.",
      body: "A clean two-page PDF: functional-impact curve, category breakdown, verbatim client excerpts with log references, and an integrity block showing the record is complete and untampered. Drop it straight into your demand.",
    },
    {
      title: "Recovery-curve chart (FRE 1006).",
      body: "Pain and function over time, plotted against treatment milestones, with flare-ups and gaps flagged. A summary exhibit built on records that are available for inspection.",
    },
    {
      title: "Depo-prep log.",
      body: "The contemporaneous record, organized for witness prep — built to disclosure standard on purpose.",
    },
  ],
  provenance:
    "Every number clicks back to the exact text message it came from. Nothing is inferred and hidden — good days and bad days are in the record, because a complete record is a credible one.",
} as const;

export const how = {
  headline:
    "Your client sees a text thread. You see the workbench. The court sees a PDF.",
  subhead: "One tamper-evident record underneath, three surfaces on top.",
  steps: [
    {
      title: "The client just texts.",
      body: "PIRRA reaches out from your firm's number by SMS — no app, no login, no download. It checks in the way a person would, and when your client opens up, it listens and captures. Voice notes work too.",
    },
    {
      title: "You get an evidence workbench.",
      body: "A timeline built from your client's own words, treatment-gap and inconsistency alerts you acknowledge, a weekly digest, and the ability to reply to your client right in the same thread. You stay in control; PIRRA does the capturing.",
    },
    {
      title: "The record becomes exhibits.",
      body: "One click turns the structured record into the demand exhibit, the 1006 chart, or the depo log — each one citing its own sources.",
    },
  ],
  disclosure:
    "PIRRA always identifies itself as an AI assistant provided by your firm. Its warmth comes from craft, not from pretending to be human — because a record built on concealment is a record the defense gets to attack.",
} as const;

export const holds = {
  headline: "Built to be shown, not hidden.",
  body: "Most client-recovery data is a liability because it's unstructured and incomplete. PIRRA is architected as evidence from the first message. The structured log is contemporaneous (FRE 803(3)), cryptographically hash-chained and independently timestamped so it's tamper-evident and self-authenticating (FRE 902(13)–(14)), and exportable as summary exhibits over records that remain available for inspection (FRE 1006).",
  callout:
    "Every record is cryptographically hash-chained and independently timestamped — tamper-evident and self-authenticating under FRE 902(14) — without putting any client data on a blockchain.",
  columns: [
    {
      title: "Shield by default.",
      body: "The complete, honest record — every day, good and bad. Completeness is what defeats cherry-picking.",
    },
    {
      title: "Sword on demand.",
      body: "When you're ready, the same record becomes the exhibit that moves the number.",
    },
  ],
} as const;

export const protects = {
  headline: "Attorney-directed by design.",
  body: "PIRRA runs on a Model C attorney-directed agency architecture — the Kovel framework courts already use for a lawyer's non-lawyer agents. Counsel authorizes the conversation protocol; PIRRA acts as the firm's confidential agent; every message lands in your client file, not in some consumer app's servers. The system is built to support privilege and work-product claims — the client-facing capture as privileged communication to counsel, your annotations and alerts as work product.",
  // Required. Do not cut. (Brief §5, Section F.)
  honesty:
    "No tool can guarantee privilege — and any vendor who tells you otherwise should worry you. What PIRRA gives you is an architecture built, end to end, to earn the claim: written attorney direction, one privileged thread with no side-channel, zero-retention model terms, and a complete record in your own file.",
} as const;

export const gap = {
  headline: "Catch the treatment gap before the adjuster does.",
  body: "A client who stops treating, misses appointments, or never mentions the new symptom is a case quietly losing value. PIRRA surfaces treatment gaps, missed care, and inconsistencies as alerts you acknowledge — a documented paper trail that you saw it and acted. One case saved from a silent gap pays for PIRRA across your whole caseload.",
} as const;

export const pricing = {
  headline: "$149 per case. Flat. Published.",
  subhead:
    "No seats. No annual contract. No migration. Works with any case-management system.",
  body: 'Everyone else in this space makes you "contact sales." We don\'t. PIRRA is priced like what it is — a case cost, in the same class as records retrieval or a court reporter — and firms pass it through as a litigation expense, subject to your jurisdiction\'s rules. One flat price, per case, start to finish.',
  smallprint:
    "Extended-litigation cases may tier higher. Dropped/lost-case terms available. Pricing shown is for the pilot program.",
} as const;

export const forWhom = {
  headline: "Built narrow, on purpose.",
  body: "PIRRA does exactly one thing: get truthful, structured, court-ready recovery evidence out of an injured client through text, under your direction. It doesn't do intake. It doesn't answer your phones. It doesn't write your demand. It hands the pain-and-suffering section — sourced and exhibit-ready — to whatever you already use. If you believe in injury journals but your clients never keep them, PIRRA is the version that actually works.",
} as const;

export const pilot = {
  headline: "We're running a small pilot. We want firms that will actually use it.",
  body: "We're taking a handful of plaintiff firms into a structured pilot: real clients, real cases, clear go/kill criteria. If you've ever wished your clients' recovery showed up as evidence instead of a memory, tell us about your firm and we'll be in touch.",
  reassurance:
    "No credit card, no commitment. We'll ask a few questions to see if your caseload is a fit for the pilot.",
} as const;

export const thanks = {
  headline: "Thanks — we'll be in touch.",
  body: "We read every one of these ourselves. If your firm looks like a fit for the pilot, you'll hear from a human (who will tell you they're a human).",
} as const;

export const footer = {
  descriptor:
    "An SMS-native evidence engine for plaintiff personal-injury firms.",
  // Required verbatim. (Brief §6.)
  disclaimer:
    "PIRRA is a legal-team support tool for law firms. It is not a law firm, does not provide legal or medical advice, and does not guarantee any legal outcome, including that any communication will be treated as privileged. Evidence-rule and privilege architecture described here is designed to support, not guarantee, privilege and admissibility, and is subject to review by counsel in each jurisdiction. FRE references describe the standards the system is built against.",
  // TODO: replace with the real contact address
  contact: "mailto:hello@example.com",
} as const;

export const formFields = {
  roles: ["Owner/Partner", "Attorney", "Case manager", "Other"],
  caseloads: ["<25", "25–100", "100–500", "500+"],
  openQuestion: "What's the hardest part of documenting your clients' recovery today?",
} as const;
