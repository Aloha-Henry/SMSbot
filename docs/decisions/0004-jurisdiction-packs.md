# DR-0004 — Jurisdiction packs, and where they live

**Status:** Accepted · **Date:** 2026-08-14 · **Builds on:** [DR-0003](./0003-state-forum-authentication-and-psi.md)


> **SUPERSEDED IN LARGE PART by `docs/source/PIRRA-Final-Design-Proposal-v1.1.md`**
> (Aug 13 2026), which reflects three rounds of adversarial AI review plus reconciliation.
> Retained for the reasoning trail. Where this record and v1.1 conflict, **v1.1 wins**.
> Largely carried forward into v1.1 §4.6 — packs feed the counsel advisory generator and the packaging engine, never the capture engine.

> Not legal advice. Every position below is subject to review by counsel per jurisdiction.

Originated from a co-founder exchange proposing one immutable capture substrate with jurisdiction
as a configuration layer. **The architecture is adopted. Where the layer sits is changed.**

---

## D16 — Adopt jurisdiction packs

One capture system, not fifty products. A universal substrate — original client response, exact
prompt, timestamps, delivery and response timing, edit history, attachments, hashes, non-response
codes, system metadata, complete immutable event log — that never varies by forum. A jurisdiction
layer on top.

Three details from the proposal are kept as-is because they're right:

- **Forum, not residence.** Set anticipated forum plus alternates. Cases get removed, transferred,
  filed somewhere unexpected. Changing forum must never destroy information that matters under
  another ruleset.
- **Versioned packs.** A case opened under `CA-2026.1` keeps that profile even after `CA-2027.1`
  ships.
- **Never stamp `ADMISSIBLE`.** The system offers *candidate evidentiary pathway · basis · counsel
  review required*. That is the honest output and the safe one.

The reframe is also right and should replace the positioning language: **PIRRA is a
jurisdiction-aware evidence capture system, not an admissible diary.** Fragmentation of state
evidence law becomes moat rather than obstacle.

---

## D17 — The packs govern characterization, not capture

**This is the change.** The proposal wired jurisdiction into the capture engine — different
questions, different timing, by forum. Three problems, and one of them is serious.

### The serious one: a config file is a Palmer exhibit

DR-0003's answer to *"this record was prepared for litigation"* is that the vendor's record-keeping
is uniform and routine across all users. A capture engine that asks different questions because of
where the case will be tried undoes that. A defense lawyer subpoenas the profile and reads:

> `Target: Ariz. R. Evid. 803(1)` · `Prompt priority: HIGH`

That is a machine-readable admission that the questions were engineered for this lawsuit's forum.
*Palmer v. Hoffman* with a config file.

### The one nobody raised: at capture time there is usually no forum

Capture starts at intake. **Most PI cases settle pre-suit — there is no forum, and there never will
be.** For the cases that are filed, forum is frequently unknown for months. Meanwhile the pre-suit
window is exactly when contemporaneity is most valuable.

A design that requires selecting a jurisdiction at case open assumes a fact that usually isn't
available.

### And the pathways don't actually conflict

The proposal's own example undoes it. Arizona gets *"did anything hurt during or immediately after
the appointment?"* — event-proximate. California gets *"how does your neck feel right now?"* —
present-condition.

**These are the same message.** *"You just finished PT — how does your neck feel right now?"* is
event-proximate **and** present-tense. It serves 803(1) and 803(3) simultaneously, and it costs
nothing extra.

Across the pathways that matter, good capture practice is good capture practice everywhere. There
is no real trade to make.

### Decision

**Capture uniformly and maximally. Characterize by jurisdiction at export.**

| Layer | Varies by forum? |
|---|---|
| Storage, hashing, timestamping, retention, log format | **Never** |
| Cadence engine mechanics; the fact that check-ins occur | **Never** |
| Baseline prompt library — present-tense, event-proximate, neutral | **Never** |
| Optional supplemental prompts | Only at counsel's express election |
| Statement characterization, pathway mapping, export packaging | **Yes — this is the pack** |
| Certification template, notice packet, rule citations | **Yes** |

What this buys:

- **The Palmer defense holds.** Capture is genuinely uniform. The pack is analysis applied to a
  record that already exists.
- **The unknown-forum problem disappears.** Capture correctly from day one without knowing where
  it will be tried.
- **Forum changes are free.** Re-run the mapping over the same immutable substrate. Re-export.
  Nothing to re-capture.
- **The client-experience risk disappears.** There are no per-state scripts, so nothing can read as
  a different interrogation in different states.
- **Launch geography decouples from research.** A firm in any state can be onboarded immediately,
  because capture is universal. The pack is only needed to *package* an exhibit for a forum.

That last point resolves the go-to-market objection: **the launch trio doesn't have to be
CA/AZ/NV.** Build the pack schema so any state can be Wave 1, and let the pilot firms decide.

### Supplementary note on 803(6)

Configurable service is not irregular record-keeping. FRE 803(6) requires the *record-keeping
practice* be regular, not that every customer receive identical service — a hospital's records vary
by department, a bank's by account type, and enterprise software logs are business records though
every tenant configures differently. The vendor certifies that it logs everything, uniformly, for
every user, regardless of configuration.

**But do not lean on this.** The real risk was never that a config breaks 803(6) technically. It's
that *"Target: Ariz. R. Evid. 803(1) — Prompt priority: HIGH"* is a terrible exhibit whatever the
doctrine says. It hands the defense a story: *they engineered your client's answers to hit an
evidence rule.* That is a credibility problem, and credibility is the entire product.

---

## D18 — How packs are written

Even inside counsel's layer, language matters. The rule mapping belongs in an advisory memo. **The
operative protocol reads like a conversation guide, not a targeting document.**

| Don't write | Write |
|---|---|
| `Target: CA Evid. Code §1250 · Prompt priority: HIGH` | `Emphasize how the client feels at the moment of the check-in.` |
| `Maximize 803(1) capture window` | `Reach out within minutes of appointments where practical.` |

Same behavior, and it doesn't read as evidence engineering when someone reads it aloud.

**The "why PIRRA asked this" panel stays — in Tier 2 only.** Attorneys will value it, and it is the
most litigation-purposed document imaginable: prompts annotated with target rules and *potential
use: demand / deposition / trial*. It must be generated as counsel-facing analysis, never stored as
capture-engine metadata, and never share a store with the certifiable substrate.

**Hard rule:** the `eliciting_prompt_id` in the disclosable log points to **neutral prompt text**.
Never to a rule target.

---

## D19 — Pack schema

Roughly 20–30 structured fields per jurisdiction, not a 40-page memorandum. Adopted from the
proposal, with two additions:

```
business_record_rule            present_sense_rule
custodian_affidavit_available   present_sense_timing_cases
electronic_self_auth_rule       current_physical_condition_rule
notice_period                   past_condition_rule
notice_mechanics                prior_consistent_rehab_rule
certification_template_id       recorded_recollection_rule
summary_rule                    photo_authentication
RFA_mechanics                   privilege_notes
case_law_citations              rule_text_pulled     ← added
last_reviewed                   verified_by_counsel  ← added
reviewed_by                     pack_version
```

**Nothing ships in a pack with `rule_text_pulled` or `reviewed_by` unpopulated.** Enforce it in
code, not in policy — a pack missing either field should fail validation and refuse to load.

`verified_by_counsel` is separate from `reviewed_by` on purpose: a pack a human assembled from rule
text is not the same as a pack outside counsel has blessed, and the export should be able to say
which it is.

---

## Verification status of the source material

The Arizona and Nevada characterizations in the originating proposal — federal-style present sense
impression, then-existing condition, both prior-consistent-statement branches, 902(11)
certification, 902(13)/(14) — **have not been verified against rule text.** They may well be
correct. They are exactly the kind of confident statutory claim this project has already been
burned believing.

The California characterization is directionally consistent with prior understanding: §1250 covers
then-existing physical sensation while excluding memory or belief offered to prove the fact
remembered, and California's contemporaneous-statement provision is narrower than FRE 803(1).
**Also unverified against current text.**

CourtListener access dropped mid-session, so none of this could be checked here. **No pack ships
on any of it until the rule text is pulled.** Per DR-0003's method note, a search snippet is a
lead, not a citation.

---

## Open

- **Side-by-side conversation samples** before committing: what a check-in actually reads like
  under the uniform baseline. If the tuning is invisible to the client, D17 is working. If any
  version reads stilted or lawyerly, the baseline prompt library is wrong.
- **Whether any state has a pathway requiring a genuinely distinct question** that the uniform
  baseline can't reach. If one exists, it becomes an optional supplemental prompt at counsel's
  election — never vendor default.
- **Counsel review** of whether characterization-at-export is materially safer than
  capture-time tuning, which is the load-bearing assumption in D17.
