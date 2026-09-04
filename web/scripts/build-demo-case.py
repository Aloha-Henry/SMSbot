#!/usr/bin/env python3
"""Build docs/demo-case/thread.json from docs/demo-case/thread.md.

The Markdown table is the source of truth (it is what humans review). This script
parses every `| LOG-#### | ... |` row into a JSON record the dev can load into the
proof of concept. Regenerate rather than hand-editing the JSON.

Row schema:
    log_id            "LOG-0042"
    seq               42
    at_local          "2026-03-11T09:36"        (client-local, no tz; POC assigns tz + TSA)
    message_class     agent_prompt | client_statement | attorney_communication | system_event
    who               label as shown, e.g. "PIRRA", "Maria", "Sara Alvarez (your attorney)"
    role              agent | client | attorney | staff | system
    library_id        "P-10" for agent prompts, else null
    text              the message
    media             {"type": "voice", "duration_s": 41} when the row is a voice note, else null
    prev_hash         placeholder; the POC computes the real chain
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "docs" / "demo-case" / "thread.md"
OUT = ROOT / "docs" / "demo-case" / "thread.json"

ROW = re.compile(r"^\|\s*(LOG-\d{4})\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*(.*?)\s*\|\s*$")
VOICE = re.compile(r"voice note,\s*(\d+):(\d{2})")


def role_for(message_class: str, who: str) -> str:
    if message_class == "agent_prompt":
        return "agent"
    if message_class == "client_statement":
        return "client"
    if message_class == "system_event":
        return "system"
    return "attorney" if "attorney" in who.lower() else "staff"


def main() -> int:
    rows = []
    for line in SRC.read_text(encoding="utf-8").splitlines():
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
    if not rows:
        print("no rows parsed", file=sys.stderr)
        return 1
    seqs = [r["seq"] for r in rows]
    if seqs != list(range(1, len(rows) + 1)):
        print(f"non-contiguous LOG ids: {seqs[:5]}…", file=sys.stderr)
        return 1
    doc = {
        "case": "Maria S. (synthetic)",
        "protocol": "PIRRA-STD-1.3",
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
    print(f"wrote {OUT.relative_to(ROOT)} · {len(rows)} rows · {by_class}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
