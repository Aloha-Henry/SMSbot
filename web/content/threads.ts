// ─────────────────────────────────────────────────────────────────────────────
// Sample conversation and exhibit content.
//
// Every string here is FINAL per PIRRA-Landing-Page-Brief-v2 §5. All of it is
// synthetic. The sample client is "Maria S. (sample)" and every surface that
// renders this content carries a visible "SAMPLE — illustrative only" label.
//
// NEVER replace this with real client content, and never render anything here
// in a way that could read as a screenshot of a real file.
// ─────────────────────────────────────────────────────────────────────────────

export type Speaker = "pirra" | "client" | "attorney";

export type Msg = {
  id: string;
  who: Speaker;
  /** Display name override — attorney messages are labelled distinctly. */
  label?: string;
  text: string;
  /** Log reference shown under the bubble, when this entry is exhibit-cited. */
  ref?: string;
};

export type Thread = {
  key: string;
  title: string;
  caption: string;
  messages: Msg[];
};

/* ── Thread A — onboarding + disclosure (the trust posture) ───────────────── */
export const threadA: Thread = {
  key: "onboarding",
  title: "First contact",
  caption: "AI status is disclosed before anything else is captured.",
  messages: [
    {
      id: "a1",
      who: "pirra",
      text: "Hi Maria — this is PIRRA, an AI assistant provided by [Firm Name] to help keep track of your recovery for your legal team. Your attorneys review these messages; I'm not a person, and I'll never pretend to be. Reply anytime, in your own words. How are you feeling today?",
    },
  ],
};

/* ── Thread B — the daily craft (the "yesterday" exchange) ────────────────── */
export const threadB: Thread = {
  key: "daily",
  title: "The daily craft",
  caption: "Yesterday's pain becomes today's condition — asked in the present tense.",
  messages: [
    {
      id: "b1",
      who: "client",
      text: "man, yesterday my back hurt really bad. thanks for checking in on me today",
    },
    { id: "b2", who: "pirra", text: "Sorry yesterday was rough. How's the back feeling right now?" },
    { id: "b3", who: "client", text: "still like a 6, better than yesterday tho" },
    {
      id: "b4",
      who: "pirra",
      text: "Glad it's easing a little. Is it getting in the way of anything today?",
    },
    { id: "b5", who: "client", text: "couldn't really sit through my kid's practice this morning" },
    {
      id: "b6",
      who: "pirra",
      text: "That's tough — noted. And you don't have to wait for me: if it flares like that again, text me right when it's happening, anytime.",
    },
  ],
};

/* ── Thread C — attorney in-thread (the channel) ──────────────────────────── */
export const threadC: Thread = {
  key: "attorney",
  title: "Your attorney, in the same thread",
  caption: "One channel. No side-diary. Agent and attorney unmistakably labelled.",
  messages: [
    {
      id: "c1",
      who: "pirra",
      text: "Quick check-in after this morning's PT — anything hurt, feel limited, or get harder during or right after?",
    },
    { id: "c2", who: "client", text: "shoulder locked up on the second set. had to stop early" },
    {
      id: "c3",
      who: "attorney",
      label: "Message from your attorney (S. Alvarez)",
      text: "Maria, saw this — I'm glad you flagged it. Mention it to Dr. Patel at Thursday's appointment and we'll follow up after.",
    },
  ],
};

/* ── Thread D — client-initiated ("this just happened") ───────────────────── */
export const threadD: Thread = {
  key: "initiated",
  title: "The always-open path",
  caption: "The client reaches out the moment it happens — not at a scheduled check-in.",
  messages: [
    {
      id: "d1",
      who: "client",
      text: "just tried to lift my daughter out of the bath and couldn't. had to call my mom over",
    },
    {
      id: "d2",
      who: "pirra",
      text: "I'm sorry, Maria — that's exactly the kind of moment to tell me about, right when it happens. Is the pain still sharp right now, or easing?",
    },
  ],
};

export const threads: Thread[] = [threadA, threadB, threadC, threadD];

/* ── Centerpiece thread — the messages the exhibit cites ──────────────────── */
export const centerpieceThread: Msg[] = [
  {
    id: "c-1",
    who: "pirra",
    text: "Quick check-in after this morning's PT — anything hurt, feel limited, or get harder during or right after?",
  },
  {
    id: "c-2",
    who: "client",
    text: "shoulder locked up on the second set. had to stop early",
    ref: "LOG-0289 · May 2 · 10:14 AM",
  },
  { id: "c-3", who: "pirra", text: "Sorry — that sounds rough. How's it feeling right now?" },
  {
    id: "c-4",
    who: "client",
    text: "still like a 6, better than yesterday tho",
    ref: "LOG-0291 · May 2 · 10:16 AM",
  },
  {
    id: "c-5",
    who: "client",
    text: "couldn't really sit through my kid's practice this morning",
    ref: "LOG-0302 · May 4 · 9:03 AM",
  },
  {
    id: "c-6",
    who: "pirra",
    text: "That's tough — noted. And you don't have to wait for me: if it flares like that again, text me right when it's happening, anytime.",
  },
  {
    id: "c-7",
    who: "client",
    text: "just tried to lift my daughter out of the bath and couldn't. had to call my mom over",
    ref: "LOG-0417 · Jun 14 · 7:42 PM",
  },
];

/* ── Exhibit fragment ─────────────────────────────────────────────────────── */

export const exhibit = {
  header: "Recovery Record — Demand Exhibit",
  sub: "Maria S. (sample) · Period: Mar 3 – Aug 1",

  /** Aggregate tiles. `source` links a tile to a thread message; aggregates have none. */
  tiles: [
    { id: "t-checkins", label: "Check-ins answered", value: "148 of 152", source: null },
    {
      id: "t-assist",
      label: "Third-party assistance",
      value: "11 documented events",
      source: "c-7",
    },
    {
      id: "t-adherence",
      label: "Treatment adherence",
      value: "2 gaps, both flagged + resolved",
      source: null,
    },
  ],

  /** Curve markers that click back to their source message. */
  markers: [
    { id: "m-flare", label: "Flare-up", source: "c-2", x: 236, y: 34 },
    { id: "m-score", label: "Reported 6", source: "c-4", x: 300, y: 62 },
  ],

  excerpt: {
    id: "x-1",
    source: "c-7",
    text: "just tried to lift my daughter out of the bath and couldn't. had to call my mom over",
    ref: "LOG-0417 · Jun 14 · 7:42 PM",
  },

  integrity:
    "Every entry hash-chained and independently timestamped · No entry altered since creation · Complete record: good days and difficult days included.",
} as const;

export const sampleLabel = "SAMPLE — illustrative only";
