// ─────────────────────────────────────────────────────────────────────────────
// Protocol wizard — case setup content.
//
// FINAL copy per PIRRA-Protocol-Wizard-Brief. Rules that apply to every string
// in this file:
//
//   BANNED anywhere in this UI: AI employee · elicitation · elicitation
//   intensity · evidence generation · admissible · guaranteed · privileged
//   (as a promise) · creates evidence · companion · coach · chatbot · journal ·
//   demand engine.
//
//   HOUSE TERMS: PIRRA is "the firm's assistant, under your direction."
//   Modes are "conversation modes." The flow is "case setup" / "direction."
//
//   THE DECLINE PATH CAPTURES NO REASON. A stored "attorney doubted client
//   credibility" field is a discoverable disaster. Screen 1 records the
//   election and nothing else. Do not add a notes field here.
//
//   PRICING APPEARS EXACTLY ONCE — the review screen. Nowhere else.
// ─────────────────────────────────────────────────────────────────────────────

export type ModeKey = "minimal" | "structured" | "standard" | "intensive";
export type InjuryKey = "leg-fracture" | "cervical-strain" | "laceration" | "shoulder";

export type Line = {
  who: "pirra" | "client";
  text: string;
  /** Tap-to-answer affordances shown as chips under a PIRRA line. */
  chips?: string[];
  /** Renders the client reply as a chip selection rather than typed text. */
  tapped?: boolean;
};

/* ── Injury types ─────────────────────────────────────────────────────────── */

export type Injury = {
  key: InjuryKey;
  label: string;
  /** The line on the case card, simulating the CMS handoff. */
  detail: string;
  suggested: ModeKey;
  /** Why this mode is suggested — shown quietly, never as a rule. */
  why: string;
  /** Proposed photo arc. Empty means photos add little for this injury. */
  arc: string[];
  arcLabel: string;
  cadence: string;
};

export const injuries: Injury[] = [
  {
    key: "leg-fracture",
    label: "Leg fracture",
    detail:
      "fracture, left tibia · surgical repair 6/2 · Date of loss: 5/28 · Treating: ortho + PT (2×/week) · Client phone on file ✓",
    suggested: "structured",
    why: "Visible, staged recovery — the photo series carries a lot here.",
    arcLabel: "Proposed photo series — leg fracture",
    arc: [
      "Cast",
      "Getting around on crutches",
      "Daily life during recovery",
      "Cast removal",
      "Back to normal activities",
    ],
    cadence: "2× weekly",
  },
  {
    key: "cervical-strain",
    label: "Cervical strain",
    detail:
      "cervical strain · Date of loss: 5/28 · Treating: chiro + PT (3×/week) · Client phone on file ✓",
    suggested: "standard",
    why: "Little to photograph. What matters is how the days actually go.",
    arcLabel: "Proposed photo series — cervical strain",
    arc: ["Range of motion, monthly", "Daily life during recovery"],
    cadence: "2–3× weekly",
  },
  {
    key: "laceration",
    label: "Laceration / scar",
    detail:
      "laceration, right forearm · sutured 5/28 · Date of loss: 5/28 · Treating: wound care + plastics consult · Client phone on file ✓",
    suggested: "structured",
    why: "Scarring changes on a schedule. A consistent series is the whole story.",
    arcLabel: "Proposed photo series — scar progression",
    arc: ["Week 1", "Week 3", "Week 6", "Week 12", "Week 24"],
    cadence: "2× weekly",
  },
  {
    key: "shoulder",
    label: "Shoulder injury",
    detail:
      "shoulder injury, right rotator cuff · Date of loss: 5/28 · Treating: ortho + PT (2×/week) · Client phone on file ✓",
    suggested: "intensive",
    why: "Symptoms spike right after therapy. Timing is what gets missed.",
    arcLabel: "Proposed photo series — shoulder",
    arc: ["Range of motion, weekly", "Daily life during recovery"],
    cadence: "Daily",
  },
];

export const injuryByKey = (k: InjuryKey) => injuries.find((i) => i.key === k)!;

/* ── Conversation modes ───────────────────────────────────────────────────── */

export type Mode = {
  key: ModeKey;
  name: string;
  summary: string;
  cadenceTag: string;
  receive: string;
  preview: Line[];
  /** Structured's preview changes with the injury; others are constant. */
  previewByInjury?: Partial<Record<InjuryKey, Line[]>>;
};

export const modes: Mode[] = [
  {
    key: "minimal",
    name: "Minimal",
    summary: "Quick structured check-ins plus expense capture. Smallest footprint.",
    cadenceTag: "2×/week · tap-to-answer",
    receive:
      "Pain and function scores over time · a running expense ledger with photos of every bill.",
    preview: [
      { who: "pirra", text: "Quick check-in, Maria. Pain right now, 1–5?", chips: ["1", "2", "3", "4", "5"] },
      { who: "client", text: "3", tapped: true },
      {
        who: "pirra",
        text: "Got it. Any trouble today with walking, sleep, or work?",
        chips: ["none", "some", "a lot"],
      },
      { who: "client", text: "some", tapped: true },
      {
        who: "pirra",
        text: "Noted — thanks. And anytime you get a bill or receipt for anything injury-related, just text a photo of it here.",
      },
    ],
  },
  {
    key: "structured",
    name: "Structured",
    summary: "Minimal, plus guided photo documentation matched to the injury.",
    cadenceTag: "2×/week + photo prompts at milestones",
    receive:
      "Everything in Minimal · a dated photo series of the injury and recovery milestones.",
    preview: [
      { who: "pirra", text: "Morning, Maria. Pain right now, 1–5?" },
      { who: "client", text: "4", tapped: true },
      {
        who: "pirra",
        text: "Sorry it's a rough one. When you have a second today, send me a photo of the cast — and one of you getting around on the crutches, whatever that looks like right now. Just everyday reality; no need to stage anything.",
      },
    ],
    previewByInjury: {
      laceration: [
        { who: "pirra", text: "Morning, Maria. Pain right now, 1–5?" },
        { who: "client", text: "4", tapped: true },
        {
          who: "pirra",
          text: "Sorry it's a rough one. When you have a second today, send me a photo of how the scar looks this week — same spot, same light as last time if you can.",
        },
      ],
      "cervical-strain": [
        { who: "pirra", text: "Morning, Maria. Pain right now, 1–5?" },
        { who: "client", text: "4", tapped: true },
        {
          who: "pirra",
          text: "Sorry it's a rough one. When you get a moment, send me a short photo or clip of how far you can turn your head today — just however it goes, no need to push it.",
        },
      ],
      shoulder: [
        { who: "pirra", text: "Morning, Maria. Pain right now, 1–5?" },
        { who: "client", text: "4", tapped: true },
        {
          who: "pirra",
          text: "Sorry it's a rough one. When you have a second, send me a photo of how far you can raise the arm today — whatever it is right now, that's the useful thing.",
        },
      ],
    },
  },
  {
    key: "standard",
    name: "Standard",
    summary: "Structured, plus real conversation — Maria can tell her story in her own words.",
    cadenceTag: "2–3×/week + always-open “text me when it happens”",
    receive:
      "Everything in Structured · Maria's own words, captured when things happen, with the moments that matter flagged for you.",
    preview: [
      { who: "client", text: "man, yesterday my back hurt really bad. thanks for checking in on me today" },
      { who: "pirra", text: "Sorry yesterday was rough. How's it feeling right now?" },
      { who: "client", text: "still like a 6, better than yesterday tho" },
      { who: "pirra", text: "Glad it's easing a little. Is it getting in the way of anything today?" },
      { who: "client", text: "couldn't really sit through my kid's practice this morning" },
      {
        who: "pirra",
        text: "That's tough — noted. And you don't have to wait for me: if it flares like that again, text me right when it's happening, anytime.",
      },
    ],
  },
  {
    key: "intensive",
    name: "Intensive",
    summary: "Daily contact, full conversation, all media. For cases where the record is the case.",
    cadenceTag: "daily + event-triggered (post-PT, post-appointment) + all media lanes",
    receive:
      "Everything in Standard, daily · check-ins minutes after treatment · voice notes welcomed.",
    preview: [
      {
        who: "pirra",
        text: "You just finished PT — did anything hurt, feel limited, or get harder during or right after?",
      },
      { who: "client", text: "shoulder locked up on the second set, had to stop early" },
      {
        who: "pirra",
        text: "I'm sorry — noted, with the time. If it's easier to talk than type, send a voice note anytime; it all comes through the same.",
      },
    ],
  },
];

export const modeByKey = (k: ModeKey) => modes.find((m) => m.key === k)!;
export const modeRank: ModeKey[] = ["minimal", "structured", "standard", "intensive"];

/* ── Screen copy ──────────────────────────────────────────────────────────── */

export const copy = {
  sample: "SAMPLE — illustrative only",
  client: "Maria S. (sample)",

  caseCard: {
    kicker: "NEW CASE SETUP",
    injuryLabel: "Injury type",
    injuryNote: "Demo control — changing this re-populates the proposals downstream.",
    cta: "Set up PIRRA for this case",
    notDeployed: "PIRRA: not deployed",
    reopen: "Set up PIRRA for this case",
  },

  whether: {
    step: "STEP 1 OF 4",
    headline: "Should PIRRA run on this case?",
    body: "PIRRA builds a complete, dated record of your client's recovery — good days and bad. It's built for cases where the recovery is real and the record helps. That's your call, case by case.",
    yes: "Deploy PIRRA for this case",
    no: "Not for this case",
    declined: "No charge. You can set up PIRRA for this case anytime.",
  },

  mode: {
    step: "STEP 2 OF 4",
    headline: "How much should come in from Maria?",
    subhead:
      "You set the flow. Change it or turn it off anytime — every change is recorded to the case.",
    suggested: "Suggested",
    sees: "What Maria sees",
    receives: "What you receive",
    footnote:
      "Every mode runs on the same sealed record — timestamped, unalterable, complete. Modes change what's asked, never how it's kept.",
  },

  details: {
    step: "STEP 3 OF 4",
    headline: "The details",
    subhead: "Proposed from the injury type. Everything here is yours to change.",
    photo: {
      title: "Photo series",
      body: "Dated photographs at recovery milestones, prompted in the thread.",
    },
    expense: {
      title: "Expense capture",
      body: "Maria texts photos of bills and receipts; you get a dated ledger.",
    },
    followUp: {
      title: "Appointment follow-ups",
      body: "A check-in shortly after each treatment visit.",
    },
    beforeVisit: {
      title: "Before-visit reminders",
      body: "Before appointments, PIRRA reminds Maria of symptoms she's already reported, so she can tell her provider herself. It only ever repeats back what Maria has already said — it never suggests a symptom.",
    },
    cadenceTitle: "Check-in cadence",
    cadenceNote:
      "You set the ceiling. Maria can ease the timing on her end at any point; she can never raise it above what you set here.",
    cadences: ["Daily", "2–3× weekly", "2× weekly", "Weekly"],
  },

  review: {
    step: "STEP 4 OF 4",
    headline: "Your direction",
    price: "$149 per case, flat — every mode. Declined cases: no charge.",
    cta: "Authorize & launch",
    back: "Back",
  },

  launched: {
    title: "Directed and launched",
    recorded: "Recorded to the case.",
    controls: "View case controls",
    restart: "Run the demo again",
  },

  controls: {
    kicker: "CASE CONTROLS",
    headline: "PIRRA on this case",
    currentMode: "Current conversation mode",
    change: "Change mode",
    pause: "Pause",
    resume: "Resume",
    paused: "Paused — no check-ins are going out.",
    running: "Running.",
    off: "Turn off",
    turnedOff: "PIRRA is off for this case. The record to date stays sealed in the case file.",
    modalTitle: "Turn PIRRA off for this case?",
    modalBody:
      "Turning PIRRA off stops all check-ins. The record to date stays sealed in the case file — nothing is deleted.",
    modalClientLine: "Your legal team will be in touch with you directly from here — thank you, Maria.",
    modalClientIntro: "Maria will receive:",
    modalRecorded: "This election is recorded to the case with today's date.",
    modalConfirm: "Turn off",
    modalCancel: "Cancel",
    ledger: "Case record",
  },

  // Appears on mode drops and turn-off. No scolding — just visible honesty.
  recordedNote: (date: string) => `Recorded: ${date}. Changes are part of the case record.`,
} as const;

/* ── Direction prose ──────────────────────────────────────────────────────── */

export type Details = {
  photo: boolean;
  milestones: boolean[];
  expense: boolean;
  followUp: boolean;
  beforeVisit: boolean;
  cadence: string;
};

/** Written as direction, not as settings. */
export function directionProse(
  injury: Injury,
  mode: Mode,
  d: Details,
): { lead: string; clauses: string[]; tail: string } {
  const clauses: string[] = [`${mode.name} conversation mode`];

  clauses.push(
    mode.key === "intensive"
      ? `${d.cadence.toLowerCase()} check-ins plus follow-ups shortly after treatment`
      : d.followUp
        ? `${d.cadence.toLowerCase()} check-ins plus follow-ups after treatment`
        : `${d.cadence.toLowerCase()} check-ins`,
  );

  const chosen = d.milestones.filter(Boolean).length;
  if (d.photo && chosen > 0) {
    clauses.push(
      `a photo series for the ${injury.label.toLowerCase()} (${chosen} milestone${chosen === 1 ? "" : "s"})`,
    );
  }
  if (d.expense) clauses.push("expense capture on");
  if (d.beforeVisit) clauses.push("before-visit reminders of symptoms she has already reported");

  return {
    lead: `You are directing PIRRA — the firm's assistant, operating under your supervision — to communicate with ${copy.client} about her recovery as follows:`,
    clauses,
    tail:
      "Maria will always be told PIRRA is an AI assistant provided by your firm. Everything lands in your case file. You can change or stop this at any time; every change is recorded.",
  };
}
