#!/usr/bin/env python3
"""Build docs/demo-case/thread.json from docs/demo-case/thread.md, and check the demo case
for fidelity between the derived documents and the thread.

The Markdown table is the source of truth (it is what humans review). This script:

  1. parses every `| LOG-#### | ... |` row into a JSON record the dev can load into the POC;
  2. checks the Counts table at the foot of thread.md against the parsed rows;
  3. checks that every LOG-#### cited in timeline.md and reviewer-packet.md exists;
  4. checks that every number in the pain series (timeline.md §2) appears in its cited rows;
  5. checks that every digest receipt in timeline.md §4 follows the draft it reviewed;
  6. checks that every sourced-slot prompt quotes a prior client_statement verbatim.

Any failure exits non-zero. An outside reviewer found four fidelity errors in revision 1 of the
timeline that a source link alone did not prevent; checks 3–6 exist so those classes of error
cannot recur silently.

Row schema (thread.json):
    log_id, seq, at_local ("2026-03-11T09:36", client-local), message_class, who, role,
    library_id (agent prompts) or null, text, media ({"type":"voice","duration_s":41} or null),
    prev_hash (null; the POC computes the chain)
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CASE = ROOT / "docs" / "demo-case"
THREAD = CASE / "thread.md"
TIMELINE = CASE / "timeline.md"
PACKET = CASE / "reviewer-packet.md"
OUT = CASE / "thread.json"

ROW = re.compile(
    r"^\|\s*(LOG-\d{4})\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*(.*?)\s*\|\s*$"
)
VOICE = re.compile(r"voice note,\s*(\d+):(\d{2})")
LOGREF = re.compile(r"LOG-(\d{4})")
RANGE = re.compile(r"LOG-(\d{4})[–-](\d{4})")

errors: list[str] = []

NUMBER_WORDS = {
    "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5",
    "six": "6", "seven": "7", "eight": "8", "nine": "9", "ten": "10",
}
# A present pain score: "back is a 6", "shoulder 5", "a 3 right now", "5 sitting", "4 and 4", "3." at start.
SCORE = re.compile(
    r"(?:back|shoulder|overall|both|is a|about a|like a|now,?)\W{0,3}\d{1,2}\b"
    r"|\b\d{1,2}\s*(?:rn|right now|now|sitting|lying|standing)\b"
    r"|^\s*\d{1,2}\b"
    r"|\b\d{1,2}\s+and\s+\d{1,2}\b",
    re.I,
)


def normalize(text: str) -> str:
    """Lower-case and spell number words as digits so 'about a four' counts as 4."""
    out = text.lower()
    for w, d in NUMBER_WORDS.items():
        out = re.sub(rf"\b{w}\b", d, out)
    return out


def err(msg: str) -> None:
    errors.append(msg)


def role_for(message_class: str, who: str) -> str:
    if message_class == "agent_prompt":
        return "agent"
    if message_class == "client_statement":
        return "client"
    if message_class == "system_event":
        return "system"
    return "attorney" if "attorney" in who.lower() else "staff"


def parse_thread() -> list[dict]:
    rows = []
    for line in THREAD.read_text(encoding="utf-8").splitlines():
        m = ROW.match(line)
        if not m:
            continue
        log_id, when, klass, who, lib, text = m.groups()
        media = None
        vm = VOICE.search(who)
        if vm:
            media = {"type": "voice", "duration_s": int(vm.group(1)) * 60 + int(vm.group(2))}
        rows.append(
            {
                "log_id": log_id,
                "seq": int(log_id.split("-")[1]),
                "at_local": when.replace(" ", "T"),
                "message_class": klass,
                "who": who,
                "role": role_for(klass, who),
                "library_id": None if lib in ("—", "-", "") else lib,
                "text": text.replace("\\|", "|"),
                "media": media,
                "prev_hash": None,
            }
        )
    return rows


def check_counts(rows: list[dict]) -> None:
    text = THREAD.read_text(encoding="utf-8")
    counts_section = text.split("## Counts", 1)[1] if "## Counts" in text else ""
    by_class: dict[str, int] = {}
    for r in rows:
        by_class[r["message_class"]] = by_class.get(r["message_class"], 0) + 1
    expected = {"Rows": len(rows), **by_class}
    for key, val in expected.items():
        m = re.search(rf"^\|\s*{re.escape(key)}\s*\|\s*(\d+)", counts_section, re.M)
        if not m:
            err(f"counts: no row for {key}")
        elif int(m.group(1)) != val:
            err(f"counts: {key} says {m.group(1)}, thread has {val}")
    # library-id specific counts stated in the table
    lib_counts: dict[str, int] = {}
    for r in rows:
        if r["library_id"]:
            lib_counts[r["library_id"]] = lib_counts.get(r["library_id"], 0) + 1
    for lib, n in re.findall(r"(P-\d+[a-z]?) ×(\d+)", counts_section):
        if lib_counts.get(lib, 0) != int(n):
            err(f"counts: {lib} ×{n} stated, thread has {lib_counts.get(lib, 0)}")
    # no repeat present-state question within 60 minutes of an answered one (rule 1).
    # A "score" is a 0-10 number in pain context, not any digit ("woke up 4 times" is not a score).
    present_state = {"P-10a", "P-12a", "P-12b"}
    last_score_at: str | None = None
    for r in rows:
        if r["role"] == "client" and SCORE.search(normalize(r["text"])):
            last_score_at = r["at_local"]
        elif r["library_id"] in present_state and last_score_at:
            if minutes_between(last_score_at, r["at_local"]) < 60:
                err(f"rule 1: {r['log_id']} asks a present-state question {minutes_between(last_score_at, r['at_local'])} min after a score")


def minutes_between(a: str, b: str) -> int:
    from datetime import datetime

    fa = datetime.fromisoformat(a)
    fb = datetime.fromisoformat(b)
    return int((fb - fa).total_seconds() // 60)


def cited_ids(text: str) -> set[int]:
    ids: set[int] = set()
    for a, b in RANGE.findall(text):
        ids.update(range(int(a), int(b) + 1))
    for n in LOGREF.findall(text):
        ids.add(int(n))
    return ids


def check_refs(rows: list[dict]) -> None:
    have = {r["seq"] for r in rows}
    for path in (TIMELINE, PACKET):
        for n in sorted(cited_ids(path.read_text(encoding="utf-8")) - have):
            err(f"{path.name}: cites LOG-{n:04d}, which does not exist")


def check_pain_series(rows: list[dict]) -> None:
    by_seq = {r["seq"]: r for r in rows}
    text = TIMELINE.read_text(encoding="utf-8")
    if "### Pain" not in text:
        err("timeline: no pain series")
        return
    section = text.split("### Pain", 1)[1].split("###", 1)[0]
    for line in section.splitlines():
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) != 5 or not re.match(r"\d\d-\d\d", cells[0]):
            continue
        date, back, shoulder, unloc, src = cells
        refs = [int(n) for n in LOGREF.findall(src)]
        if not refs:
            err(f"pain series {date}: no source")
            continue
        haystack = normalize(" ".join(by_seq[n]["text"] for n in refs if n in by_seq))
        nums_in_src = set(re.findall(r"\b\d{1,2}\b", haystack))
        for col, val in (("back", back), ("shoulder", shoulder), ("unlocated", unloc)):
            for num in re.findall(r"\b\d{1,2}\b", re.sub(r"\(.*?\)", "", val)):
                if num not in nums_in_src:
                    err(f"pain series {date} {col}={num}: not present in {', '.join(f'LOG-{n:04d}' for n in refs)}")
        # a located score must come from a row that names the region
        for col, val, words in (("back", back, ("back",)), ("shoulder", shoulder, ("shoulder", "arm"))):
            if re.search(r"\d", val) and not any(w in haystack for w in words):
                err(f"pain series {date}: {col} score but cited row(s) never name the {col}")


def check_receipts() -> None:
    text = TIMELINE.read_text(encoding="utf-8")
    drafted: dict[str, str] = {}
    opened: dict[str, str] = {}
    for line in text.splitlines():
        m = re.match(r"^\|\s*SUP-\w+\s*\|\s*(\d\d-\d\d \d\d:\d\d)\s*\|\s*(.*?)\s*\|", line)
        if not m:
            continue
        when, event = m.groups()
        d = re.search(r"Digest wk (\d) drafted", event)
        o = re.search(r"Digest wk (\d) opened", event)
        if d:
            drafted[d.group(1)] = when
        if o:
            opened[o.group(1)] = when
    for wk, when in opened.items():
        if wk not in drafted:
            err(f"receipts: digest wk {wk} opened but never drafted")
        elif when < drafted[wk]:
            err(f"receipts: digest wk {wk} opened at {when}, before drafted at {drafted[wk]}")


def check_sourced_slots(rows: list[dict]) -> None:
    client_text_so_far: list[str] = []
    for r in rows:
        if r["role"] == "client":
            client_text_so_far.append(r["text"].lower())
        elif r["library_id"] in ("P-15", "P-15b"):
            quoted = re.findall(r"\u201c(.+?)\u201d|\"(.+?)\"", r["text"])
            flat = [a or b for a, b in quoted]
            if not flat:
                err(f"sourced slot {r['log_id']}: no quoted excerpt")
            for q in flat:
                if not any(q.lower() in t for t in client_text_so_far):
                    err(f"sourced slot {r['log_id']}: \"{q}\" is not a verbatim excerpt of an earlier client_statement")


def main() -> int:
    rows = parse_thread()
    if not rows:
        print("no rows parsed", file=sys.stderr)
        return 1
    seqs = [r["seq"] for r in rows]
    if seqs != list(range(1, len(rows) + 1)):
        err(f"non-contiguous LOG ids around {[s for s in seqs if s not in range(1, len(rows) + 1)][:3]}")
    check_counts(rows)
    check_refs(rows)
    check_pain_series(rows)
    check_receipts()
    check_sourced_slots(rows)

    if errors:
        print("FIDELITY CHECK FAILED", file=sys.stderr)
        for e in errors:
            print("  -", e, file=sys.stderr)
        return 1

    doc = {
        "case": "Maria S. (synthetic)",
        "protocol": "PIRRA-STD-1.4",
        "autonomy_level": 2,
        "approval_regime": "library",
        "forum_pinned": "CA Superior Court",
        "period": {"from": rows[0]["at_local"][:10], "to": rows[-1]["at_local"][:10]},
        "note": "All content synthetic. Generated from docs/demo-case/thread.md; do not hand-edit.",
        "rows": rows,
    }
    OUT.write_text(json.dumps(doc, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    by_class: dict[str, int] = {}
    for r in rows:
        by_class[r["message_class"]] = by_class.get(r["message_class"], 0) + 1
    print(f"wrote {OUT.relative_to(ROOT)} · {len(rows)} rows · {by_class} · fidelity checks passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
