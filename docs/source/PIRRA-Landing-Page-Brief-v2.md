# PIRRA — Landing Page Build Brief v2

**For:** Claude (Claude Code)
**From:** Hank
**Supersedes:** PIRRA-Landing-Page-Brief.md (v1). This is a full rebuild brief — v1's page embeds a retired legal architecture and pre-decision pricing language. Where this brief is silent, v1's rules apply; where they conflict, this brief wins.
**What this page is now:** two jobs. (1) The validation page for plaintiff PI firms (pilot recruitment). (2) **The working visual doc for the dev team** — the canonical reference for what the product looks and feels like. Behind a gate until we say otherwise.
**Quality bar:** this gets built like a YC company's launch page. Smooth like Linear or Stripe; serious like a litigation-finance site. Restraint is the brand — the wow comes from craft and one killer interaction, not from motion soup.

---

## 0. Background — what changed since v1 (read this before touching copy)

The legal architecture was rebuilt through an adversarial review process. What the page must now reflect:

1. **The evidence stack changed.** v1's trust strip ("Built on FRE 803(3) · 902(13)–(14) · 1006") assumed a federal courtroom. The architecture is now: the log is the platform's routine business record, authenticated by custodian certification in whatever form the forum accepts (federal 902(11)-style, state analogues, or a live-foundation kit where neither exists), hash-chained and independently timestamped; summaries ride 1006-style rules over inspectable records; the client's statements ride then-existing-condition exceptions that exist essentially everywhere. **Rule: no specific FRE numbers in the hero.** Standards-level language up top; precise citations only in the "why it holds up" section, where they can be stated accurately.
2. **Jurisdiction-awareness is now a feature, not a caveat.** The record never changes; the packaging matches the forum. Say it with pride, briefly.
3. **Pass-through is dead.** Never write "pass it through as a litigation expense" or price it as a "case cost in the same class as court reporters." $149/case flat and published, sold to the firm, full stop.
4. **Privilege framing leads with the firm's channel,** not the Kovel agent line: your number, your direction, messages intended for counsel, your replies in the same thread, everything in your client file. The honesty line survives verbatim (below).
5. **New banned phrases** (in addition to v1 §0's list, which all still applies): "demand engine," "disguised," "creates evidence," "admissible under FRE ___," "self-authenticating in every state," any sentence framing evidence generation as the *purpose* (documentation is the purpose; better demands are a consequence).
6. **The completeness/honesty posture got stronger.** Good days and bad days in the record, silence logged as silence, built to be produced. Lean into it — it's the trust story.

If a design choice conflicts with any rule in this brief or v1 §0, the rule wins.

---

## 1. New requirement: the gate

- Route `/` renders a **password gate** before any content. Password: `1111`.
- Minimal and elegant: PIRRA wordmark, one input, one button, small line: "Preview build — team access."
- Implementation: a single `<Gate>` component; on success set a `sessionStorage` flag (fine here — this is a deployed Next.js app, not an artifact) and render the page. Wrong password: gentle shake, no lockout.
- **This is a curtain, not security.** Client-side check, clearly commented: `// NOTE: preview curtain only — not security. TODO: remove entire Gate component at launch.` Make removal a one-line change.

---

## 2. Build spec (carries over from v1, with additions)

Next.js (App Router) + Tailwind + TypeScript · static/SSG, zero-config Vercel deploy · no backend (form posts to a clearly-marked TODO stub) · mobile-first · semantic, accessible, keyboard-navigable, `prefers-reduced-motion` respected · system fonts or one self-hosted webfont pair · Lighthouse 95+ · copy structured as data (`sections`, `faqs`, `threads`, `useCases` arrays) so words edit in one place · analytics slot empty (`{/* TODO: analytics */}`).

**New:** all interactive demos must be pure React/CSS/SVG (no heavy libs, no video), work without JS where feasible (graceful static fallback), and hit 60fps on a mid-range phone.

---

## 3. Visual direction (v1 direction stands; sharpened)

Near-black ink on warm off-white; one confident deep blue/ink-teal accent used surgically (CTAs, provenance highlights, key underlines); slate for supporting UI. Editorial serif for display, Inter-class grotesque for body/UI. Big calm headlines, generous line-height, real whitespace. Subtle scroll reveals only — fade/rise 200–300ms, nothing bouncy, no parallax. No gavels, no stock photos, no emoji, no AI-brain art. The three-surfaces motif (**text thread → workbench → exhibit**) is the visual spine of the entire page.

---

## 4. The centerpiece interaction — build this first

**The provenance click-through.** One scroll-pinned (or simply sequential on mobile) demo showing the product's entire argument in one gesture:

1. A stylized **SMS thread** (left/top) plays through a short sample conversation — messages appear with realistic human timing, typing indicator on the PIRRA side.
2. The **exhibit** (right/bottom): a beautifully typeset sample demand-exhibit fragment — a metrics tile, a slice of the recovery curve, a verbatim excerpt block with a log reference tag like `LOG-0417`.
3. **The gesture:** the user clicks/taps any number or excerpt in the exhibit → the source message in the thread highlights with the accent color and scrolls into view, with a thin connecting line. Caption: **"Every number clicks back to the exact message it came from."**

That single interaction *is* the product. Make it feel inevitable. Static fallback: the connecting line pre-drawn between one exhibit figure and its source bubble.

---

## 5. Sample content (final copy — use exactly; all clearly synthetic)

Label every demo surface "SAMPLE — illustrative only" (small, persistent, tasteful). Sample client is "Maria S. (sample)". Never render anything that could read as a real screenshot of real data.

### Thread A — onboarding + disclosure (shows the trust posture)
> **PIRRA:** Hi Maria — this is PIRRA, an AI assistant provided by [Firm Name] to help keep track of your recovery for your legal team. Your attorneys review these messages; I'm not a person, and I'll never pretend to be. Reply anytime, in your own words. How are you feeling today?

### Thread B — the daily craft (the "yesterday" exchange)
> **Maria:** man, yesterday my back hurt really bad. thanks for checking in on me today
> **PIRRA:** Sorry yesterday was rough. How's the back feeling right now?
> **Maria:** still like a 6, better than yesterday tho
> **PIRRA:** Glad it's easing a little. Is it getting in the way of anything today?
> **Maria:** couldn't really sit through my kid's practice this morning
> **PIRRA:** That's tough — noted. And you don't have to wait for me: if it flares like that again, text me right when it's happening, anytime.

### Thread C — attorney in-thread (shows the channel)
> **PIRRA:** Quick check-in after this morning's PT — anything hurt, feel limited, or get harder during or right after?
> **Maria:** shoulder locked up on the second set. had to stop early
> **Message from your attorney (S. Alvarez):** Maria, saw this — I'm glad you flagged it. Mention it to Dr. Patel at Thursday's appointment and we'll follow up after.

### Thread D — client-initiated ("this just happened")
> **Maria:** just tried to lift my daughter out of the bath and couldn't. had to call my mom over
> **PIRRA:** I'm sorry, Maria — that's exactly the kind of moment to tell me about, right when it happens. Is the pain still sharp right now, or easing?

### Exhibit fragment (for the centerpiece + Section C)
Two-page-feel mock: header ("Recovery Record — Demand Exhibit · Maria S. (sample) · Period: Mar 3 – Aug 1"), three metric tiles (e.g., "148 of 152 check-ins answered", "Third-party assistance: 11 documented events", "Treatment adherence: 2 gaps, both flagged + resolved"), a functional-impact curve with one flare-up flagged and one gap shown honestly as a gap, a verbatim excerpt block (Thread D's first message, tagged `LOG-0417 · Jun 14 · 7:42 PM`), and an **integrity block**: "Every entry hash-chained and independently timestamped · No entry altered since creation · Complete record: good days and difficult days included."

---

## 6. Page structure & copy (final; changed sections rewritten, carried sections noted)

**A — Hero.** Eyebrow, headline, subhead, CTAs: carry from v1 unchanged. **New trust strip:** `Built to federal and state evidence standards · Attorney-directed · Tamper-evident by design · Works with any case-management system`. (No rule numbers.)

**B — The problem.** Carry from v1 with one edit: "Almost none of them do" → **"Few ever keep one — and the ones who do hand you an uncontrolled diary the defense can subpoena, cherry-pick, and use against them."**

**C — The output (lead with this).** Carry the three cards from v1 (demand-packet exhibit · recovery-curve summary chart · depo-prep log). Update the middle card's parenthetical from "(FRE 1006)" to "(a summary exhibit over records that remain available for inspection)". Provenance line carries verbatim. Wire the cards to the centerpiece demo.

**D — How it works (three surfaces).** Carry structure from v1; embed Threads A–D as the living illustration of step 1. Disclosure line carries verbatim from v1 ("PIRRA always identifies itself as an AI assistant provided by your firm…").

**E — Why it holds up. (REWRITTEN — replaces v1 Section E body.)**
**Headline:** Built to be shown, not hidden.
**Body:** Most client-recovery data is a liability because it's unstructured, incomplete, and easy to attack. PIRRA is architected as evidence from the first message. Your client's statements are captured in the present tense — the way then-existing-condition rules in state and federal courts favor (FRE 803(3) and its state counterparts). The log itself is the platform's routine record, kept identically for every client in the country, and authenticated by custodian certification in the form your forum accepts — with a live-foundation kit standing behind it where certification isn't available. Summaries and charts are built as summary exhibits over records that stay available for inspection (the FRE 1006 discipline).
**Callout (updated):** Every record is cryptographically hash-chained and independently timestamped — tamper-evident by design — without putting any client data on a blockchain.
**Jurisdiction line (new):** PIRRA is jurisdiction-aware. The record never changes; the packaging matches your forum — state or federal — and when the law moves, the packaging moves with it. The evidence doesn't.
**Shield/sword columns:** carry from v1 verbatim.

**F — Why it protects the firm. (REWRITTEN — replaces v1 Section F body.)**
**Headline:** Your channel. Your direction. Your file.
**Body:** PIRRA runs as your firm's channel: your number, a conversation protocol you authorize in writing, every message intended for your legal team, your replies landing in the same thread, and everything — every word, every timestamp — in your client file, not on some consumer app's servers. The system is built end to end to support privilege and work-product positions: attorney direction documented before the first text, one channel with no side-diary, zero-retention model terms, and agent and attorney messages unmistakably labeled.
**Honesty line (carries from v1 verbatim — required, do not cut):** No tool can guarantee privilege — and any vendor who tells you otherwise should worry you. What PIRRA gives you is an architecture built, end to end, to earn the claim: written attorney direction, one privileged thread with no side-channel, zero-retention model terms, and a complete record in your own file.
**New closing line:** And because no tool can guarantee privilege, the record is built to stand on its own if it's ever produced — complete, honest, and tamper-evident. That's not a fallback. That's the design.

**G — Catch the gap.** Carry from v1 verbatim.

**H — NEW SECTION: What it looks like in practice.** Four use-case vignettes, tight, each 2–3 sentences, each paired with a small visual (thread snippet, workbench card, or exhibit fragment):
1. **The gap, caught.** Maria goes quiet for nine days. The workbench flags it; her attorney texts her in the same thread; treatment resumes — and the file shows the firm saw it and acted.
2. **The deposition.** Maria preps from her own contemporaneous entries. Asked what she reviewed, the answer is simple: her own text messages. Her testimony is specific, consistent, and hers.
3. **The "good day" gambit.** The defense surfaces a message about a good weekend. Counsel pulls the six entries before and after it — the flare-up, the missed practice, the help from her mother — because the record was always complete, good days included. That's why it's credible.
4. **The demand.** The exhibit goes out attached to the demand — a functional-impact curve, verbatim excerpts, an integrity block — and every number clicks back to the message it came from.

**I — Pricing. (REWRITTEN per pricing decision.)**
**Headline:** $149 per case. Flat. Published.
**Subhead:** No seats. No annual contract. No migration. Works with any case-management system.
**Body:** Everyone else in this space makes you "contact sales." We don't. One flat, published price per case, start to finish. How your firm accounts for it is your call — we keep it simple on our end.
**Small print:** Extended-litigation cases may tier higher. Dropped-case terms available. Pricing shown is for the pilot program.

**J — Built narrow, on purpose.** Carry from v1, append one sentence: **"PIRRA is built for real recoveries: the record is complete — good days and bad — because completeness is what makes it credible."**

**K — The pilot ask + form.** Carry from v1 (§5-J and §7) unchanged, including the open question ("What's the hardest part of documenting your clients' recovery today?") — make that field **required** now, not optional.

**L — Footer.** Wordmark + descriptor + v1's §6 disclaimer **verbatim** (it survives the architecture change as written).

---

## 7. Acceptance criteria

- [ ] Gate at `/` (PW 1111), single component, curtain-not-security comment, one-line removal.
- [ ] Centerpiece provenance click-through works mouse/touch/keyboard, with static fallback and reduced-motion support.
- [ ] Threads A–D and the exhibit fragment rendered exactly as written, all marked "SAMPLE — illustrative only," typing/timing feel human.
- [ ] Zero rule numbers in the hero; Section E citations match this brief exactly; zero banned phrases (v1 §0 list + §0.5 additions above — grep for: companion, coach, chatbot, journal, creates evidence, guarantee, demand engine, pass-through, self-authenticating in every state, admissible under).
- [ ] No pass-through language anywhere; pricing section matches §6-I.
- [ ] Honesty line and footer disclaimer present verbatim; disclosure line present; form's open question required.
- [ ] All copy as data structures; form endpoint + analytics are marked single-swap TODOs; no fabricated stats, testimonials, or real-looking data.
- [ ] Lighthouse 95+ mobile; keyboard accessible end to end; `prefers-reduced-motion` honored.
- [ ] It looks like a company that understands courtrooms *and* ships like a YC company. If a section feels decorated rather than designed, cut the decoration.

Build the centerpiece first, then the skeleton, then polish. When in doubt: quieter, faster, more honest.
