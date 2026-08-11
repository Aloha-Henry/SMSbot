# PIRRA — Landing Page Build Brief

**For:** Claude (in the terminal / Claude Code)
**From:** Hank
**Purpose of the page:** A single marketing landing page for **PIRRA** whose one job is to get **plaintiff personal-injury firms** to **request pilot access**. This page is going out to real firms next week to test whether they'd actually use the product — so it must be credible to a working PI attorney in 60 seconds, honest, and free of anything a defense lawyer or bar regulator would weaponize.
**Deliverable:** A deployable landing page (see Build Spec). Copy in this brief is **final** — build layout around it; do not rewrite the words. Where you need filler, use the placeholders specified, never invented product claims.

---

## 0. Read this first — the rules that cannot be broken

PIRRA operates in a regulated space (evidence law + bar advertising rules). The following are **absolute**. A beautiful page that breaks one of these is a failed deliverable.

1. **"Preserves evidence that would otherwise be lost." NEVER "creates evidence."** PIRRA captures and structures what the client actually experienced. It does not manufacture anything. Every verb choice matters: *preserve, capture, document, structure, organize, produce (an exhibit from existing statements)* — yes. *Create evidence, generate testimony, build a case* — no.
2. **No privilege guarantees. Anywhere.** You may describe the *architecture* ("attorney-directed," "built on the Kovel agent framework," "designed to support privilege and work-product claims"). You may **never** say "everything is privileged," "guaranteed privileged," "protected communications," or imply the tool assures any legal outcome. Privilege language is always conditional and architecture-descriptive.
3. **No outcome promises.** No "increase your settlements by X%," no "win more cases," no dollar guarantees. Attorney-facing value is framed as *better evidence, caught treatment gaps, court-ready exhibits* — not results. (The internal sales line "You recover, we deliver" is **attorney-materials only and still not an outcome promise** — do not put revenue/settlement promises on the page.)
4. **AI is always disclosed.** PIRRA never pretends to be human. On this page, be matter-of-fact that it's an AI assistant provided by the firm, with a human voice, under attorney direction. Never "undetectable," "sounds human," "clients won't know."
5. **Never these words for the product:** "companion," "coach," "nurse navigator," "AI legal assistant," "chatbot," "therapy," "diary/journal-keeper" (we *replace* the failed journal — don't call PIRRA a journal). PIRRA is an **SMS-native evidence engine with a human voice.**
6. **Client-facing outcome optics:** nothing on the page should read as PIRRA promising the *injured client* anything. This is a firm tool sold to firms.
7. **Pricing is real and public — use it.** $149 per case, flat, published. Do not soften it to "contact us." The published price IS a differentiator (see §5).

If any requested design choice conflicts with the above, the rule wins. When unsure, choose the more conservative, more honest phrasing.

---

## 1. Who this page is for & what it must do

**Audience:** Owners / managing partners / case-managers at **plaintiff personal-injury firms** (contingency-fee, volume-to-mid-size). They are busy, skeptical of legal-tech hype, and have been burned by tools that promise AI magic. They care about: settlement value, non-economic damages they can't currently document, treatment gaps that quietly kill cases, malpractice exposure, and whether something is worth their staff's time.

**Primary CTA (everywhere):** **Request pilot access** → short form (see §7).
**Secondary CTA:** **See a sample exhibit** → opens/downloads the demand-exhibit sample (placeholder PDF for now; see §8).

**Success for the page:** a PI attorney reads it, immediately understands "this turns my clients' recovery into court-ready exhibits and catches treatment gaps, it's $149 a case, and it's built to protect privilege," and requests a pilot.

**This is a validation page.** Tone is confident but not overhyped. It's fine — good, even — to sound like a small, sharp team running a limited pilot rather than a mega-launch. Scarcity is real: the pilot is a handful of firms.

---

## 2. Build spec (technical)

- **Stack:** Next.js (App Router) + Tailwind CSS + TypeScript.
- **Shape:** Single long-form landing page (one route, `/`). A second thin route `/thanks` for post-form confirmation is fine.
- **Deploy target:** Static/SSG, deployable to Vercel with zero config. No backend required for v1 — the pilot form can POST to a placeholder endpoint / Formspree-style handler / or just a `mailto:`+`console.log` stub clearly marked `// TODO: wire to real endpoint`. Make the form integration a single, obvious swap point.
- **No database, no auth, no client storage.** (Also: do not use localStorage/sessionStorage.)
- **Performance:** fast, no heavy hero video, system fonts or one self-hosted webfont. Lighthouse-friendly. Mobile-first — many attorneys will open this on a phone.
- **Accessibility:** semantic HTML, proper heading hierarchy, sufficient contrast, focus states, alt text. This audience includes people who care about ADA.
- **Analytics hook:** leave a clearly-marked, empty analytics slot in `layout` (`{/* TODO: analytics */}`) — don't add a real tracker.
- **Structure the copy as data** where reasonable (e.g., an array of `sections`, `faqs`, `steps`) so the words are easy to edit in one place.

---

## 3. Visual direction

Think **serious legal-tech, not consumer app.** The reference feeling: a well-designed litigation-finance or evidence-platform site — restrained, confident, editorial. It should feel like it was made by people who understand courtrooms.

- **Palette:** near-black ink (`#111`-ish) on warm off-white (`#FAFAF7`-ish); one confident accent — a deep, trustworthy blue or ink-teal (NOT startup purple, NOT medical green, NOT alarm red). Use accent sparingly: CTAs, key underlines, the provenance/exhibit motif. A single muted "evidence" neutral (slate) for supporting UI.
- **Type:** an editorial serif for headlines (e.g., a Georgia/Charter/Source Serif feel) paired with a clean grotesque sans for body/UI (e.g., Inter). Big, calm headline sizes. Generous line-height in body.
- **Motif:** the product's spine is *"the client sees a text thread, the attorney sees the workbench, the court sees a PDF."* Use this literally as a visual device — three surfaces. A stylized SMS thread, a workbench/timeline, and an exhibit page. Keep mockups tasteful and clearly illustrative (placeholder, not fake screenshots claiming to be real).
- **Provenance as a visual idea:** every claim ties back to a source. Small "log-reference" tags, hash-chain / timestamp iconography used lightly, can reinforce the tamper-evident story without gimmick.
- **No stock photos of gavels, scales of justice, or smiling diverse people in suits.** No emoji. No AI-brain imagery. Restraint is the brand.
- **Logo/name:** you don't have final brand assets. Set "PIRRA" as a clean wordmark (the serif, letter-spaced) with a one-line descriptor lockup. Make it a single swappable component. Pronunciation aside is optional and subtle ("PIRRA /ˈpeer-ah/") — skip if it clutters.

---

## 4. The core story (what the page must land)

Sequence the argument in this order — it's deliberate (lead with the *output*, not "we're conversational," per the competitive read):

1. **The problem attorneys already know:** non-economic damages are the majority of case value and the least-documented part of every case. Clients are told to keep injury journals; almost nobody does, and uncontrolled diaries get discovered and weaponized.
2. **The output (lead with this):** PIRRA produces **court-ready exhibits** — a demand-packet exhibit, an FRE 1006 recovery-curve chart, a depo-prep log — from the client's own contemporaneous statements, every number tracing back to the exact message it came from.
3. **How it's captured:** a natural SMS conversation on the firm's number. No app, no login for the client. Attorney-directed. The client just texts.
4. **Why it holds up:** built to evidence standards (FRE 803(3), 902(13)–(14), 1006) — hash-chained and independently timestamped, tamper-evident and self-authenticating, **without** putting client data on a blockchain. Shield-by-default (complete, honest record) with sword-on-demand exhibits.
5. **Why it protects the firm:** Model C attorney-directed agency (the Kovel framework) — designed to support privilege and work-product claims, everything landing in the firm's client file, AI status always disclosed.
6. **The catch-a-gap safety value:** treatment gaps and missed appointments surfaced before the adjuster finds them. One saved case pays for PIRRA for years.
7. **The offer:** $149 per case, flat, published. Any case-management system. Pass-through as a case cost. Then the pilot ask.

Throughout, the one-liner that separates PIRRA from everyone else: **"Quilia and the rest collect data. PIRRA produces evidence."** (You may name-drop the category ("client-update apps," "intake AI") rather than naming competitors on the live page — see §9.)

---

## 5. Section-by-section — FINAL COPY

Build the page in this order. Copy below is final. Headline / subhead / body are labeled. Keep body tight.

### Section A — Hero
**Eyebrow:** For plaintiff personal-injury firms
**Headline:** Recovery doesn't happen in doctor's offices. Now you have the record that proves it.
**Subhead:** PIRRA turns your client's recovery into court-ready exhibits — captured through natural text messages, structured to evidence standards, every fact traceable to the moment your client said it.
**Primary CTA button:** Request pilot access
**Secondary CTA (text link/button):** See a sample exhibit →
**Trust strip (small, under CTAs):** Built on FRE 803(3) · 902(13)–(14) · 1006 · Attorney-directed · Works with any case-management system

### Section B — The problem (attorneys already feel this)
**Headline:** The most valuable part of the case is the part nobody documents.
**Body:** Non-economic damages — pain, lost function, the life your client can't live yet — are the majority of settlement value and the least-documented part of every file. You tell clients to keep an injury journal. Almost none of them do. And the ones who do hand you an uncontrolled diary that the defense can subpoena, cherry-pick, and use against them.
**Body (second para):** So the record of how your client actually suffered — the missed recitals, the daughter they couldn't lift, the nights they couldn't sleep — evaporates. By the time you write the demand, you're reconstructing it from memory.

### Section C — The output (LEAD WITH THIS)
**Headline:** Exhibits, not notes.
**Subhead:** PIRRA's output is a document you attach to a demand or take to mediation — not another dashboard to check.
**Three output cards** (use the workbench→PDF motif):
- **Demand-packet exhibit.** A clean two-page PDF: functional-impact curve, category breakdown, verbatim client excerpts with log references, and an integrity block showing the record is complete and untampered. Drop it straight into your demand.
- **Recovery-curve chart (FRE 1006).** Pain and function over time, plotted against treatment milestones, with flare-ups and gaps flagged. A summary exhibit built on records that are available for inspection.
- **Depo-prep log.** The contemporaneous record, organized for witness prep — built to disclosure standard on purpose.
**Provenance line (emphasize, with visual):** Every number clicks back to the exact text message it came from. Nothing is inferred and hidden — good days and bad days are in the record, because a complete record is a credible one.

### Section D — How it works (the three surfaces)
**Headline:** Your client sees a text thread. You see the workbench. The court sees a PDF.
**Subhead:** One tamper-evident record underneath, three surfaces on top.
**Three steps:**
1. **The client just texts.** PIRRA reaches out from your firm's number by SMS — no app, no login, no download. It checks in the way a person would, and when your client opens up, it listens and captures. Voice notes work too.
2. **You get an evidence workbench.** A timeline built from your client's own words, treatment-gap and inconsistency alerts you acknowledge, a weekly digest, and the ability to reply to your client right in the same thread. You stay in control; PIRRA does the capturing.
3. **The record becomes exhibits.** One click turns the structured record into the demand exhibit, the 1006 chart, or the depo log — each one citing its own sources.
**Disclosure line (small, honest, deliberate):** PIRRA always identifies itself as an AI assistant provided by your firm. Its warmth comes from craft, not from pretending to be human — because a record built on concealment is a record the defense gets to attack.

### Section E — Why it holds up (evidence architecture)
**Headline:** Built to be shown, not hidden.
**Body:** Most client-recovery data is a liability because it's unstructured and incomplete. PIRRA is architected as evidence from the first message. The structured log is contemporaneous (FRE 803(3)), cryptographically hash-chained and independently timestamped so it's tamper-evident and self-authenticating (FRE 902(13)–(14)), and exportable as summary exhibits over records that remain available for inspection (FRE 1006).
**Callout line:** Every record is cryptographically hash-chained and independently timestamped — tamper-evident and self-authenticating under FRE 902(14) — without putting any client data on a blockchain.
**Shield/sword framing (two short columns):**
- **Shield by default.** The complete, honest record — every day, good and bad. Completeness is what defeats cherry-picking.
- **Sword on demand.** When you're ready, the same record becomes the exhibit that moves the number.

### Section F — Why it protects the firm (privilege architecture)
**Headline:** Attorney-directed by design.
**Body:** PIRRA runs on a Model C attorney-directed agency architecture — the *Kovel* framework courts already use for a lawyer's non-lawyer agents. Counsel authorizes the conversation protocol; PIRRA acts as the firm's confidential agent; every message lands in your client file, not in some consumer app's servers. The system is built to support privilege and work-product claims — the client-facing capture as privileged communication to counsel, your annotations and alerts as work product.
**Honesty line (required, do not cut):** No tool can guarantee privilege — and any vendor who tells you otherwise should worry you. What PIRRA gives you is an architecture built, end to end, to earn the claim: written attorney direction, one privileged thread with no side-channel, zero-retention model terms, and a complete record in your own file.

### Section G — Catch the gap (the safety-value / ROI angle)
**Headline:** Catch the treatment gap before the adjuster does.
**Body:** A client who stops treating, misses appointments, or never mentions the new symptom is a case quietly losing value. PIRRA surfaces treatment gaps, missed care, and inconsistencies as alerts you acknowledge — a documented paper trail that you saw it and acted. One case saved from a silent gap pays for PIRRA across your whole caseload.

### Section H — Pricing (use the published number as a wedge)
**Headline:** $149 per case. Flat. Published.
**Subhead:** No seats. No annual contract. No migration. Works with any case-management system.
**Body:** Everyone else in this space makes you "contact sales." We don't. PIRRA is priced like what it is — a case cost, in the same class as records retrieval or a court reporter — and firms pass it through as a litigation expense, subject to your jurisdiction's rules. One flat price, per case, start to finish.
**Small print line:** Extended-litigation cases may tier higher. Dropped/lost-case terms available. Pricing shown is for the pilot program.

### Section I — Who it's for / who it's not
**Headline:** Built narrow, on purpose.
**Body:** PIRRA does exactly one thing: get truthful, structured, court-ready recovery evidence out of an injured client through text, under your direction. It doesn't do intake. It doesn't answer your phones. It doesn't write your demand. It hands the pain-and-suffering section — sourced and exhibit-ready — to whatever you already use. If you believe in injury journals but your clients never keep them, PIRRA is the version that actually works.

### Section J — The pilot ask (conversion section)
**Headline:** We're running a small pilot. We want firms that will actually use it.
**Body:** We're taking a handful of plaintiff firms into a structured pilot: real clients, real cases, clear go/kill criteria. If you've ever wished your clients' recovery showed up as evidence instead of a memory, tell us about your firm and we'll be in touch.
**Primary CTA button:** Request pilot access
**Reassurance line under form:** No credit card, no commitment. We'll ask a few questions to see if your caseload is a fit for the pilot.

### Section K — Footer
- PIRRA wordmark + one-line descriptor: *An SMS-native evidence engine for plaintiff personal-injury firms.*
- Small legal disclaimer (required — see §6).
- Minimal nav: Sample exhibit · Request pilot access · Contact (mailto placeholder).

---

## 6. Required disclaimer text (footer, small but present)

Include this verbatim in the footer:

> PIRRA is a legal-team support tool for law firms. It is not a law firm, does not provide legal or medical advice, and does not guarantee any legal outcome, including that any communication will be treated as privileged. Evidence-rule and privilege architecture described here is designed to support, not guarantee, privilege and admissibility, and is subject to review by counsel in each jurisdiction. FRE references describe the standards the system is built against.

---

## 7. The pilot form (fields)

Keep it short — this is a validation instrument. Fields:
- Firm name
- Your name + role (dropdown: Owner/Partner · Attorney · Case manager · Other)
- Email (required)
- State(s) you practice in
- Approx. active PI cases (dropdown ranges: <25 · 25–100 · 100–500 · 500+)
- Current case-management system (free text — optional)
- One open question: *"What's the hardest part of documenting your clients' recovery today?"* (optional textarea — this is gold for validation)
- Submit → route to `/thanks`.

`/thanks` copy:
**Headline:** Thanks — we'll be in touch.
**Body:** We read every one of these ourselves. If your firm looks like a fit for the pilot, you'll hear from a human (who will tell you they're a human).

---

## 8. Assets & placeholders

- **Sample exhibit:** wire the "See a sample exhibit" CTA to `/sample-exhibit.pdf` — a placeholder file. Mark clearly: `// TODO: replace with real pirra-demand-exhibit sample`. Do not fabricate a fake exhibit image that looks like real client data.
- **Surface mockups:** the SMS thread, workbench timeline, and exhibit page should be **illustrative CSS/SVG mockups with obviously synthetic sample content** (e.g., "Sample client," neutral placeholder text), never anything presented as a real screenshot of real data.
- **Logo:** wordmark component, swappable.
- **No real firm logos, no fake testimonials, no fabricated stats.** If you want social proof scaffolding, leave a clearly-commented empty `{/* TODO: pilot testimonials once we have them */}` — do not invent quotes.

---

## 9. What NOT to do (guardrails recap for the build)

- Don't name competitors on the live page. Refer to the category ("client-update apps," "intake AI," "the rest of the space"). The line "they collect data, PIRRA produces evidence" is fine as long as "they" is generic.
- Don't invent statistics, percentages, case counts, or settlement figures. The only hard numbers on the page are the FRE citations and $149.
- Don't write privilege as a guarantee. Don't write evidence as "created." Don't write outcome promises.
- Don't add a chat widget, an "AI assistant" bubble, cookie-heavy trackers, autoplay media, or a newsletter popup.
- Don't make the client the audience. Every benefit is addressed to the firm.
- Keep the AI-disclosure and the "no privilege guarantee" honesty lines in — they are trust features, not fine print to bury.

---

## 10. Acceptance criteria (definition of done)

- [ ] Single Next.js + Tailwind page, deployable to Vercel with no backend, mobile-first, accessible.
- [ ] All section copy from §5 present and unedited.
- [ ] Primary CTA "Request pilot access" appears in hero, mid-page, and the pilot section; leads to the §7 form; form routes to `/thanks`.
- [ ] Secondary CTA "See a sample exhibit" wired to placeholder PDF with TODO.
- [ ] Footer disclaimer (§6) present verbatim.
- [ ] Zero banned words (§0.5): companion, coach, nurse navigator, AI legal assistant, chatbot, therapy, journal-as-product.
- [ ] Zero privilege guarantees; zero "creates evidence"; zero outcome/settlement promises. AI-disclosure line present.
- [ ] $149 published pricing present, framed as a case cost.
- [ ] No fabricated testimonials, stats, or real-looking client data; mockups clearly illustrative.
- [ ] Copy stored as editable data structures where reasonable; form endpoint and analytics are clearly-marked single-swap TODOs.

---

## Appendix — source of truth (for your reference, not for the page)

This brief is distilled from the PIRRA project docs. If you need deeper context while building, the canonical sources are:
- **Positioning line:** *Because recovery doesn't happen in doctor's offices.*
- **Identity:** SMS-native evidence engine with a human voice. *Quilia collects data; PIRRA produces evidence.*
- **Spine:** *The client sees a text thread, the attorney sees the workbench, and the court sees a PDF — three surfaces, one tamper-evident record underneath.*
- **Evidence strategy:** Shield by default (complete disclosable log — FRE 803(3), 902(13)–(14), 1006), sword on demand (exhibits).
- **Privilege:** Model C attorney-directed agency (*Kovel*; *Heppner* S.D.N.Y. 2026 dicta). No privilege guarantees in UI/marketing — ever.
- **Pricing:** $149/case flat, published; pass-through as a case cost; only public price in the category.
- **Competitive read (Aug 2026):** The evidence-out lane is still empty. EvenUp now runs client-facing SMS/voice *treatment* check-in agents (gap tracking, not evidence/exhibits), so "we're conversational" is a weakening differentiator — **lead with evidence-out + privilege, not conversation.** Quilia's client messaging (CaseChat) is human, not AI.
- **Language rule (absolute):** *preserves evidence that would otherwise be lost* — never *creates evidence*; never *companion/coach/nurse navigator/AI legal assistant*; always discloses AI status; no privilege or outcome guarantees.
