# PIRRA

**Personal Injury Recovery & Response Agent** — an SMS-native evidence engine for plaintiff personal-injury firms.

> The client sees a text thread, the attorney sees the workbench, the court sees a PDF —
> three surfaces, one tamper-evident record underneath.

PIRRA is the modern pain journal: the one your clients actually keep. It captures recovery
through natural text conversation on the firm's number, under attorney direction, and turns
it into court-ready exhibits with every fact traced back to the message it came from.

**Status:** pre-build. Strategy and architecture only — no implementation yet.

## Where to start

| Doc | What it is |
|---|---|
| [`docs/system-map.md`](docs/system-map.md) | **Start here.** Actors, lifecycle, the three storage streams, the liability boundary, and the build target. |
| [`docs/system-map.html`](docs/system-map.html) | Same map, rendered with full diagrams. |
| [`docs/decisions/0001`](docs/decisions/0001-evidence-privilege-and-scope.md) | The decisions that shaped it — evidence posture, privilege theory, scope boundaries. Supersedes conflicting parts of the source docs. |

## Source docs

Original strategy work, preserved as written. Where these conflict with a decision record,
**the decision record wins**.

- [`docs/source/PIRRA-PRD.md`](docs/source/PIRRA-PRD.md) — product requirements, v0.5
- [`docs/source/PIRRA-Privilege-Architecture.md`](docs/source/PIRRA-Privilege-Architecture.md) — Model C attorney-directed agency, v1.1
- [`docs/source/PIRRA-Competitive-Scan-Aug2026.md`](docs/source/PIRRA-Competitive-Scan-Aug2026.md) — competitive read, August 2026
- [`docs/source/PIRRA-Landing-Page-Brief.md`](docs/source/PIRRA-Landing-Page-Brief.md) — landing page build brief (copy is final)

## The rules that don't bend

Carried from the landing brief and the decision records. These are absolute:

1. **Preserves evidence that would otherwise be lost.** Never *creates evidence*.
2. **No privilege guarantees, anywhere.** Architecture is describable; outcomes are never promised.
3. **No outcome promises.** No settlement figures, no win rates.
4. **AI status always disclosed.** PIRRA never pretends to be human.
5. **Damages only — never liability.** No causation, fault, speed, or scene admissions.
6. **Never coach toward favorable content.** Neutral, open elicitation only.

## Layout

```
docs/
  system-map.md          working architecture
  system-map.html        rendered map
  decisions/             decision records — these supersede source docs
  source/                original strategy docs, as written
src/                     application code (empty)
```

---

*Not legal advice. Evidence-rule and privilege architecture described here is designed to
support, not guarantee, privilege and admissibility, and is subject to review by counsel in
each jurisdiction.*
