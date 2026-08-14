#!/usr/bin/env python3
"""
Generate the sample exhibit pages into web/public/exhibits/.

These are illustrative documents, not marketing copy — they live here rather
than in content/copy.ts because they are sample *artifacts*, and keeping the
shared chrome in one generator beats five hand-maintained copies of the same CSS.

Every page is print-first: ⌘P produces the document a firm would actually
attach. All content is synthetic; the sample client is "Maria S. (sample)".

Run:  python3 scripts/build-exhibits.py
"""

import pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent / "public" / "exhibits"

CSS = """
:root{
  --paper:#FAFAF7; --surface:#fff; --surface-2:#F2F1EA;
  --ink:#14161A; --ink-soft:#4C525C; --ink-faint:#7D838D; --rule:#E3E1D8;
  --accent:#0E4F52; --accent-wash:#E2ECEC; --flag:#8A5A2B;
  --serif:Charter,"Bitstream Charter","Sitka Text",Cambria,Georgia,"Times New Roman",serif;
  --sans:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --mono:ui-monospace,"SF Mono",SFMono-Regular,Menlo,"Cascadia Mono",Consolas,monospace;
}
*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--serif);
     font-size:15px;line-height:1.55;-webkit-font-smoothing:antialiased}
a{color:var(--accent)}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px}

.bar{background:var(--accent);color:var(--paper);font-family:var(--mono);font-size:10.5px;
     letter-spacing:.09em;padding:7px 18px;display:flex;justify-content:space-between;
     gap:14px;flex-wrap:wrap;align-items:center}
.bar a{color:var(--paper);text-decoration:none;border-bottom:1px solid rgba(250,250,247,.5)}
.bar button{font:inherit;color:inherit;background:none;border:1px solid rgba(250,250,247,.55);
            border-radius:2px;padding:2px 9px;cursor:pointer}

.sheet{max-width:760px;margin:26px auto 70px;background:var(--surface);
       border:1px solid var(--rule);padding:44px 48px 40px}

.exh-head{border-bottom:2px solid var(--ink);padding-bottom:14px;margin-bottom:26px}
.exh-head .kicker{font-family:var(--mono);font-size:10px;letter-spacing:.14em;color:var(--ink-faint)}
.exh-head h1{font-size:25px;font-weight:600;letter-spacing:-.01em;margin:7px 0 6px;line-height:1.15}
.exh-head .meta{font-family:var(--mono);font-size:10.5px;letter-spacing:.05em;color:var(--ink-soft);
                display:flex;gap:6px 18px;flex-wrap:wrap}

h2{font-size:15.5px;font-weight:600;margin:30px 0 10px;padding-bottom:5px;border-bottom:1px solid var(--rule)}
h2:first-of-type{margin-top:0}
p{margin:0 0 12px}
.small{font-family:var(--mono);font-size:10.5px;line-height:1.7;color:var(--ink-faint)}

.tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--rule);
       border:1px solid var(--rule);margin:0 0 22px}
.tile{background:var(--surface);padding:13px 14px}
.tile .v{font-size:17px;font-weight:600;line-height:1.2;display:block}
.tile .l{font-family:var(--mono);font-size:9px;letter-spacing:.08em;color:var(--ink-faint);
         margin-top:4px;display:block}

table{width:100%;border-collapse:collapse;font-size:13.5px;margin:0 0 14px}
th{font-family:var(--mono);font-size:9.5px;letter-spacing:.09em;font-weight:500;color:var(--ink-soft);
   text-align:left;padding:7px 10px;background:var(--surface-2);border-bottom:1px solid var(--rule)}
td{padding:8px 10px;border-bottom:1px solid var(--rule);vertical-align:top}
tbody tr:last-child td{border-bottom:0}
td.ref,td.dt{font-family:var(--mono);font-size:10.5px;color:var(--ink-faint);white-space:nowrap}

blockquote{margin:0 0 14px;padding-left:14px;border-left:2px solid var(--rule);font-size:15px}
blockquote .src{display:block;font-family:var(--mono);font-size:9.5px;color:var(--ink-faint);margin-top:4px}

.integrity{margin-top:24px;border:1px solid var(--accent);background:var(--accent-wash);
           padding:14px 16px;font-family:var(--mono);font-size:10px;line-height:1.8;color:var(--ink-soft)}
.integrity b{color:var(--ink);letter-spacing:.08em}

.pathway{margin-top:16px;border-left:3px solid var(--flag);background:#FBF4EA;padding:12px 15px}
.pathway .h{font-family:var(--mono);font-size:9.5px;letter-spacing:.11em;color:var(--flag);display:block;margin-bottom:5px}
.pathway p{margin:0;font-size:13.5px;color:var(--ink-soft)}
.pathway p+p{margin-top:7px}

.decl{font-size:14.5px}
.decl ol{padding-left:20px;margin:0 0 14px}
.decl li{margin-bottom:9px}
.sig{margin-top:30px;border-top:1px solid var(--rule);padding-top:18px;
     display:grid;grid-template-columns:1fr 200px;gap:22px;align-items:end}
.sig .line{border-bottom:1px solid var(--ink);height:26px}
.sig .cap{font-family:var(--mono);font-size:9.5px;color:var(--ink-faint);margin-top:5px}

.state{display:flex;flex-wrap:wrap;gap:5px;margin:0 0 14px}
.state span{font-family:var(--mono);font-size:9px;letter-spacing:.06em;padding:3px 8px;
            border:1px solid var(--rule);border-radius:2px;color:var(--ink-faint)}
.state span.on{border-color:var(--accent);background:var(--accent-wash);color:var(--accent);font-weight:600}
.state span.next{border-style:dashed}

.foot{margin-top:34px;border-top:1px solid var(--rule);padding-top:14px;
      font-family:var(--mono);font-size:9.5px;line-height:1.8;color:var(--ink-faint)}

.idx{display:grid;gap:1px;background:var(--rule);border:1px solid var(--rule)}
.idx a{background:var(--surface);padding:18px 20px;text-decoration:none;color:inherit;display:block}
.idx a:hover{background:var(--surface-2)}
.idx .t{font-size:17px;font-weight:600;display:block}
.idx .d{font-size:13.5px;color:var(--ink-soft);margin-top:5px;display:block}
.idx .r{font-family:var(--mono);font-size:9.5px;letter-spacing:.07em;color:var(--accent);margin-top:9px;display:block}

@media (max-width:680px){
  .sheet{margin:14px 12px 50px;padding:26px 20px}
  .tiles{grid-template-columns:1fr}
  .sig{grid-template-columns:1fr}
}
@media print{
  .bar{display:none}
  body{background:#fff;font-size:10.5pt;line-height:1.4}
  .sheet{max-width:none;margin:0;border:0;padding:0}
  h2{margin-top:18px}
  .integrity,.pathway,table,blockquote{page-break-inside:avoid}
  a{color:#000;text-decoration:none}
}
"""

BAR = """<div class="bar">
  <span>SAMPLE EXHIBIT — ILLUSTRATIVE ONLY · NOT A REAL CLIENT FILE</span>
  <span style="display:flex;gap:14px;align-items:center">
    <a href="/exhibits/">All samples</a>
    <button type="button" onclick="window.print()">Print / Save as PDF</button>
  </span>
</div>"""

FOOT = """<div class="foot">
PIRRA is a legal-team support tool for law firms. It is not a law firm, does not provide legal or
medical advice, and does not guarantee any legal outcome, including that any communication will be
treated as privileged. Evidence-rule architecture described here is designed to support, not
guarantee, privilege and admissibility, and is subject to review by counsel in each jurisdiction.<br>
Every figure in this document is synthetic. Client, firm, providers and dates are invented.
</div>"""


def page(title, body, sheet=True):
    inner = f'<div class="sheet">{body}</div>' if sheet else body
    return f"""<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>{title}</title>
<style>{CSS}</style>
</head><body>
{BAR}
{inner}
</body></html>"""


HEAD = """<div class="exh-head">
  <div class="kicker">{kicker}</div>
  <h1>{h1}</h1>
  <div class="meta">{meta}</div>
</div>"""


def head(kicker, h1, meta):
    return HEAD.format(kicker=kicker, h1=h1, meta=" ".join(f"<span>{m}</span>" for m in meta))


# ── curve used by demand packet + recovery curve ─────────────────────────────
def curve(width=660, height=210, detailed=False):
    pain = "18,44 66,58 114,74 162,86 210,92 246,42 282,88 330,96 378,104 426,110 474,118 522,126 570,132 618,138 642,142"
    func = "18,168 66,160 114,150 162,140 210,134 246,158 282,132 330,124 378,116 426,108 474,100 522,92 570,84 618,76 642,72"
    ms = [(66, "PT begins"), (246, "Flare-up"), (426, "Imaging"), (570, "PT ends")] if detailed else []
    marks = "".join(
        f'<line x1="{x}" y1="26" x2="{x}" y2="176" stroke="var(--rule)" stroke-dasharray="2 3"/>'
        f'<text x="{x}" y="20" text-anchor="middle" style="font:500 8.5px var(--mono);fill:var(--ink-faint)">{lbl}</text>'
        for x, lbl in ms
    )
    return f"""<svg viewBox="0 0 {width} {height}" role="img"
  aria-label="Functional-impact curve, March through August. Reported pain declines overall with one flare-up spike in mid-May; reported function rises. A treatment gap in June is shown as a shaded band."
  style="width:100%;height:auto;display:block;margin:0 0 6px">
  <rect x="282" y="26" width="48" height="150" fill="var(--surface-2)"/>
  <text x="306" y="20" text-anchor="middle" style="font:500 8.5px var(--mono);fill:var(--ink-faint)">GAP</text>
  {marks}
  <line x1="18" y1="176" x2="642" y2="176" stroke="var(--rule)"/>
  <polyline fill="none" stroke="var(--accent)" stroke-width="2" points="{pain}"/>
  <polyline fill="none" stroke="var(--ink-faint)" stroke-width="1.6" stroke-dasharray="5 3" points="{func}"/>
  <circle cx="246" cy="42" r="4" fill="#fff" stroke="var(--flag)" stroke-width="2"/>
  <g style="font:400 8.5px var(--mono);fill:var(--ink-faint)">
    <text x="18" y="192">MAR 3</text>
    <text x="330" y="192" text-anchor="middle">MAY 26</text>
    <text x="642" y="192" text-anchor="end">AUG 1</text>
  </g>
  <g style="font:500 8.5px var(--mono)">
    <text x="18" y="208" fill="var(--accent)">— reported pain (0–10)</text>
    <text x="200" y="208" fill="var(--ink-faint)">--- reported function (0–10)</text>
    <text x="400" y="208" fill="var(--flag)">○ flare-up</text>
  </g>
</svg>"""


EXCERPTS = [
    ("LOG-0289 · May 2 · 10:14 AM", "shoulder locked up on the second set. had to stop early"),
    ("LOG-0302 · May 4 · 9:03 AM", "couldn't really sit through my kid's practice this morning"),
    ("LOG-0417 · Jun 14 · 7:42 PM",
     "just tried to lift my daughter out of the bath and couldn't. had to call my mom over"),
    ("LOG-0455 · Jul 2 · 8:20 AM", "slept through the night for the first time. more like a 4 today"),
]

INTEGRITY = """<div class="integrity">
<b>RECORD INTEGRITY</b><br>
412 entries · Mar 3 – Aug 1 · no entry removed or omitted<br>
Append-only event store · SHA-256 hash chain, unbroken on last verification<br>
Independent trusted timestamps (RFC 3161) · scheduled integrity job re-verifies against anchored digests<br>
Complete record: good days and difficult days both included · non-response logged with neutral status codes<br>
No client data placed on any blockchain.
</div>"""


def pathway(*paras):
    ps = "".join(f"<p>{p}</p>" for p in paras)
    return f'<div class="pathway"><span class="h">CANDIDATE EVIDENTIARY PATHWAY — COUNSEL REVIEW REQUIRED</span>{ps}</div>'


# ── 1 · demand packet ────────────────────────────────────────────────────────
demand = (
    head("DEMAND EXHIBIT", "Recovery Record",
         ["Maria S. (sample)", "Period: Mar 3 – Aug 1", "Forum: California Superior Court",
          "Pack: CA-2026.1"])
    + """<div class="tiles">
  <div class="tile"><span class="v">148 of 152</span><span class="l">CHECK-INS ANSWERED</span></div>
  <div class="tile"><span class="v">11</span><span class="l">DOCUMENTED THIRD-PARTY ASSISTANCE EVENTS</span></div>
  <div class="tile"><span class="v">2</span><span class="l">TREATMENT GAPS — BOTH FLAGGED + RESOLVED</span></div>
</div>

<h2>Functional impact over the reporting period</h2>"""
    + curve()
    + """<p class="small">Summary prepared from the underlying entry log, which remains available for inspection.</p>

<h2>Category breakdown</h2>
<table>
  <thead><tr><th>DOMAIN</th><th>ENTRIES</th><th>REPRESENTATIVE PERIOD</th></tr></thead>
  <tbody>
    <tr><td>Sleep disruption</td><td class="dt">61</td><td class="dt">Mar 3 – Jul 2</td></tr>
    <tr><td>Lifting / carrying limitation</td><td class="dt">44</td><td class="dt">Mar 9 – Aug 1</td></tr>
    <tr><td>Missed family activity</td><td class="dt">27</td><td class="dt">Mar 21 – Jul 19</td></tr>
    <tr><td>Assistance required from others</td><td class="dt">11</td><td class="dt">Apr 2 – Jul 28</td></tr>
    <tr><td>Reported improvement</td><td class="dt">38</td><td class="dt">Jun 1 – Aug 1</td></tr>
  </tbody>
</table>

<h2>Verbatim excerpts</h2>"""
    + "".join(f'<blockquote>&ldquo;{t}&rdquo;<span class="src">{r}</span></blockquote>' for r, t in EXCERPTS)
    + INTEGRITY
    + pathway(
        "Client statements: then-existing physical condition (CA Evid. Code §1250 / FRE 803(3) counterpart) "
        "for present-tense entries; entries describing earlier events are marked in the underlying log and "
        "are not offered on that basis.",
        "The log itself: record of regularly conducted activity, custodian certification attached separately "
        "(see the certification sample). This summary: summary-of-voluminous-records treatment over an "
        "inspectable substrate.",
        "Nothing in this document asserts that any statement is admissible. Pathways are candidates for "
        "counsel to evaluate in the pinned forum.")
    + FOOT
)

# ── 2 · recovery curve ───────────────────────────────────────────────────────
recovery = (
    head("SUMMARY EXHIBIT", "Recovery Curve",
         ["Maria S. (sample)", "Period: Mar 3 – Aug 1", "Forum: California Superior Court"])
    + "<h2>Reported pain and function against treatment milestones</h2>"
    + curve(detailed=True)
    + """<p class="small">Plotted from 412 entries. Vertical rules mark treatment milestones drawn from the
client's own reports; the shaded band is a documented care gap, shown rather than smoothed.</p>

<h2>What the chart is built from</h2>
<table>
  <thead><tr><th>ELEMENT</th><th>SOURCE</th><th>ENTRIES</th></tr></thead>
  <tbody>
    <tr><td>Reported pain series</td><td>Client responses to present-condition prompts</td><td class="dt">212</td></tr>
    <tr><td>Reported function series</td><td>Client responses to activity prompts</td><td class="dt">168</td></tr>
    <tr><td>Treatment milestones</td><td>Client-reported appointments, corroborated against records</td><td class="dt">18</td></tr>
    <tr><td>Flare-up marker</td><td>LOG-0289, client-initiated</td><td class="dt">1</td></tr>
    <tr><td>Care gap band</td><td>Neutral non-response status codes, Jun 4 – Jun 13</td><td class="dt">9 days</td></tr>
  </tbody>
</table>

<h2>Gap disclosure</h2>
<p>One care gap of nine days appears in the reporting period. It is shown on the chart rather than
interpolated. The gap was flagged to the legal team on the second day of non-response and resolved
after contact; the acknowledgment is recorded in the case file.</p>"""
    + INTEGRITY
    + pathway(
        "Summary-of-voluminous-records treatment (FRE 1006 discipline and state counterparts). The "
        "underlying entries remain available for inspection and are produced on request.",
        "A summary is only as good as its substrate: this chart is offered together with the entry log it "
        "was built from, not in place of it.")
    + FOOT
)

# ── 3 · depo-prep log ────────────────────────────────────────────────────────
rows = [
    ("Mar 9", "LOG-0031", "Sleep", "woke up 4 times, back locked when I got up"),
    ("Mar 21", "LOG-0088", "Family activity", "missed my daughter's recital, couldn't sit that long"),
    ("Apr 2", "LOG-0140", "Assistance", "neighbour carried the groceries in for me"),
    ("May 2", "LOG-0289", "Flare-up", "shoulder locked up on the second set. had to stop early"),
    ("May 4", "LOG-0302", "Family activity", "couldn't really sit through my kid's practice this morning"),
    ("Jun 14", "LOG-0417", "Assistance", "tried to lift my daughter out of the bath and couldn't. called my mom over"),
    ("Jul 2", "LOG-0455", "Improvement", "slept through the night for the first time. more like a 4 today"),
    ("Jul 28", "LOG-0502", "Lifting", "back to half days at work, still can't lift anything heavy"),
]
depo = (
    head("WITNESS PREPARATION", "Deposition Preparation Log",
         ["Maria S. (sample)", "Period: Mar 3 – Aug 1", "Built to disclosure standard"])
    + """<div class="pathway" style="margin-top:0;margin-bottom:22px">
<span class="h">READ THIS FIRST</span>
<p>This log is built on the assumption that it will be produced. Using a document to refresh a
witness's recollection can trigger production of that document; this one is prepared to withstand
that, not to avoid it. It contains the client's own entries, complete, including entries that do
not help.</p>
</div>

<h2>Chronological entries by topic</h2>
<table>
  <thead><tr><th>DATE</th><th>REF</th><th>TOPIC</th><th>VERBATIM</th></tr></thead>
  <tbody>"""
    + "".join(
        f'<tr><td class="dt">{d}</td><td class="ref">{r}</td><td>{t}</td><td>&ldquo;{x}&rdquo;</td></tr>'
        for d, r, t, x in rows)
    + """</tbody></table>

<h2>Topic index</h2>
<table>
  <thead><tr><th>TOPIC</th><th>ENTRIES</th><th>FIRST</th><th>LAST</th></tr></thead>
  <tbody>
    <tr><td>Sleep disruption</td><td class="dt">61</td><td class="dt">Mar 4</td><td class="dt">Jul 2</td></tr>
    <tr><td>Lifting / carrying</td><td class="dt">44</td><td class="dt">Mar 9</td><td class="dt">Aug 1</td></tr>
    <tr><td>Missed family activity</td><td class="dt">27</td><td class="dt">Mar 21</td><td class="dt">Jul 19</td></tr>
    <tr><td>Assistance required</td><td class="dt">11</td><td class="dt">Apr 2</td><td class="dt">Jul 28</td></tr>
    <tr><td>Reported improvement</td><td class="dt">38</td><td class="dt">Jun 1</td><td class="dt">Aug 1</td></tr>
  </tbody>
</table>

<h2>Entries that cut against the claim</h2>
<p>Listed deliberately. A record that contains only helpful entries is a record the defense gets to
attack as curated; the complete version is the credible one, and counsel should see these before
the other side does.</p>
<table>
  <thead><tr><th>DATE</th><th>REF</th><th>ENTRY</th></tr></thead>
  <tbody>
    <tr><td class="dt">Apr 19</td><td class="ref">LOG-0203</td><td>&ldquo;good weekend, made it to the beach for about an hour&rdquo;</td></tr>
    <tr><td class="dt">Jun 4–13</td><td class="ref">SYS-0061</td><td>Nine days, no response. Logged as an administrative gap.</td></tr>
    <tr><td class="dt">Jul 2</td><td class="ref">LOG-0455</td><td>&ldquo;slept through the night for the first time&rdquo;</td></tr>
  </tbody>
</table>"""
    + INTEGRITY
    + pathway(
        "Prepared on the expectation of production. Where a witness reviews a writing to refresh "
        "recollection, the adverse party's entitlement to that writing is assumed rather than resisted.",
        "Contemporaneous entries may also support rehabilitation where a prior consistent statement "
        "pathway is open in the forum — that determination is counsel's, not the system's.")
    + FOOT
)

# ── 4 · custodian certification ──────────────────────────────────────────────
cert = (
    head("CUSTODIAN CERTIFICATION", "Declaration of Custodian of Records",
         ["902(11)-mode", "Forum: California Superior Court", "Pack: CA-2026.1"])
    + """<div class="pathway" style="margin-top:0;margin-bottom:22px">
<span class="h">THE LINE THIS DOCUMENT DOES NOT CROSS</span>
<p>This declaration speaks to <b>system operation only</b>. It never vouches for the claimant, never
characterizes the content of any entry, and never describes what any summary shows. A certification
that recites what a chronology demonstrates has stopped being a business-record certification.</p>
</div>

<div class="decl">
<p>I, <span style="border-bottom:1px solid var(--rule);padding:0 40px">&nbsp;</span>, declare:</p>
<ol>
  <li>I am employed by the platform operator as a custodian of records. I am authorized to make this
      declaration and I have personal knowledge of the systems described below.</li>
  <li>The platform generates and retains capture logs for <b>every user of the service</b>, as a standard
      function of operating it. Log generation is automatic and is not configured, enabled or altered
      on a per-matter basis.</li>
  <li>Each entry is recorded at or near the time of the event it records, by the automated process
      that receives it, and is committed to an append-only store from which no deletion path exists.</li>
  <li>Records are kept in the course of the platform's regularly conducted activity, and making these
      records is a regular practice of that activity.</li>
  <li>The records accompanying this declaration are true and complete copies of entries drawn from
      that store for the period stated, produced by the same automated export used for all users.</li>
</ol>

<h2>Reliability controls in effect throughout the period</h2>
<table>
  <thead><tr><th>CONTROL</th><th>IMPLEMENTATION</th></tr></thead>
  <tbody>
    <tr><td>Access control — data</td><td>Role-based access, per-tenant isolation, access logging</td></tr>
    <tr><td>Access control — program</td><td>Signed releases, change control, deploy audit trail</td></tr>
    <tr><td>Change logging</td><td>Append-only store; corrections recorded as annotation events; no overwrite path</td></tr>
    <tr><td>Backup</td><td>Automated backup with periodic restore verification</td></tr>
    <tr><td>Audit</td><td>Scheduled integrity job re-verifies the hash chain against independently anchored digests; reports retained</td></tr>
  </tbody>
</table>

<h2>Notice status</h2>
<div class="state">
  <span>CERTIFICATION_ELIGIBLE</span>
  <span class="on">NOTICE_SERVED</span>
  <span class="next">OBJECTION_RECEIVED</span>
  <span class="next">LIVE_FOUNDATION_REQUIRED</span>
</div>
<p class="small">The packaging engine will not represent a certification route as ready until service
requirements for the pinned forum are satisfied. A live-foundation kit stands behind this
declaration if certification is unavailable or an objection is sustained.</p>

<p style="margin-top:22px">I declare under penalty of perjury under the laws of the State of California
that the foregoing is true and correct.</p>

<div class="sig">
  <div><div class="line"></div><div class="cap">SIGNATURE — CUSTODIAN OF RECORDS</div></div>
  <div><div class="line"></div><div class="cap">DATE</div></div>
</div>
</div>"""
    + INTEGRITY
    + FOOT
)

# ── index ────────────────────────────────────────────────────────────────────
items = [
    ("demand-packet", "Demand-packet exhibit",
     "The two-page document that attaches to a demand: functional-impact curve, category breakdown, "
     "verbatim excerpts with log references, and an integrity block.", "4 SECTIONS · PRINTS TO 2 PAGES"),
    ("recovery-curve", "Recovery-curve summary chart",
     "Pain and function over time against treatment milestones, with the flare-up marked and the care "
     "gap shown rather than smoothed — plus the table of what the chart was built from.",
     "SUMMARY OVER AN INSPECTABLE SUBSTRATE"),
    ("depo-log", "Deposition-preparation log",
     "The contemporaneous record organized for witness prep, including a section listing the entries "
     "that cut against the claim. Built on the assumption it will be produced.",
     "INCLUDES ADVERSE ENTRIES"),
    ("certification", "Custodian certification",
     "The declaration that authenticates the log as the platform's own routine record — speaking to "
     "system operation only, never to the claim. With the reliability controls and notice state.",
     "902(11)-MODE · NOTICE STATE MACHINE"),
]
index = f"""<div class="sheet">
{head("SAMPLES", "Sample exhibits",
      ["Maria S. (sample)", "All content synthetic", "Print any of these to PDF"])}
<p>These are the documents PIRRA produces from the record. Every figure is invented — there is no
real client, firm, provider or date anywhere in them. They are here so a firm can judge the output
before judging the pitch.</p>
<p class="small" style="margin-bottom:22px">Each is print-first: use Print / Save as PDF for the
version you would actually attach.</p>
<div class="idx">
{"".join(f'<a href="/exhibits/{s}/"><span class="t">{t}</span><span class="d">{d}</span><span class="r">{r} &rarr;</span></a>' for s, t, d, r in items)}
</div>
{FOOT}
</div>"""

# ── write ────────────────────────────────────────────────────────────────────
PAGES = {
    "index.html": ("Sample exhibits — PIRRA", index, False),
    "demand-packet/index.html": ("Demand-packet exhibit — PIRRA (sample)", demand, True),
    "recovery-curve/index.html": ("Recovery-curve summary chart — PIRRA (sample)", recovery, True),
    "depo-log/index.html": ("Deposition-preparation log — PIRRA (sample)", depo, True),
    "certification/index.html": ("Custodian certification — PIRRA (sample)", cert, True),
}

for rel, (title, body, sheet) in PAGES.items():
    p = OUT / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(page(title, body, sheet=sheet), encoding="utf-8")
    print(f"wrote {p.relative_to(OUT.parent.parent)}  ({p.stat().st_size:,} bytes)")
