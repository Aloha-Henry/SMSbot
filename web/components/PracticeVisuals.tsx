// Small illustrative visuals for the "in practice" vignettes.
// Pure CSS/SVG, no libraries. All content synthetic and labelled.

import { sampleLabel } from "@/content/threads";

const shell = "rounded-lg border border-rule bg-paper p-4";
const cap = "font-mono text-[9px] tracking-[0.09em] text-ink-faint";

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={shell}>
      <div className="mb-3 flex items-center justify-between">
        <span className={cap}>{title}</span>
        <span className={cap}>{sampleLabel}</span>
      </div>
      {children}
    </div>
  );
}

/** 1 — the gap, caught. A workbench alert mid-acknowledgment. */
function GapVisual() {
  return (
    <Frame title="WORKBENCH ALERT">
      <div className="border-l-2 border-accent pl-3">
        <p className="text-[13.5px] font-semibold">No response · 9 days</p>
        <p className="mt-1 text-[12.5px] leading-snug text-ink-soft">
          Logged as an administrative gap. Silence never reads as recovery.
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["ATTORNEY TEXTED", "TREATMENT RESUMED", "ACKNOWLEDGED"].map((t) => (
          <span
            key={t}
            className="rounded-sm border border-rule px-1.5 py-0.5 font-mono text-[8.5px] tracking-[0.06em] text-ink-soft"
          >
            {t}
          </span>
        ))}
      </div>
    </Frame>
  );
}

/** 2 — the deposition. Her own entries, dated. */
function DepoVisual() {
  const rows = [
    ["MAR 14", "back at a 7 this morning"],
    ["APR 02", "couldn't carry the laundry basket"],
    ["MAY 02", "shoulder locked up on the second set"],
  ];
  return (
    <Frame title="DEPO-PREP LOG">
      <ul className="flex flex-col">
        {rows.map(([d, t]) => (
          <li key={d} className="flex gap-3 border-b border-rule py-1.5 last:border-0">
            <span className="font-mono text-[9.5px] text-ink-faint">{d}</span>
            <span className="flex-1 font-serif text-[13px] leading-snug">&ldquo;{t}&rdquo;</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[11.5px] italic text-ink-soft">Reviewed: her own text messages.</p>
    </Frame>
  );
}

/** 3 — the "good day" gambit. Context on both sides of the cherry-picked line. */
function GoodDayVisual() {
  return (
    <Frame title="CONTEXT PULLED">
      <div className="flex flex-col gap-1.5">
        <p className="rounded border border-rule px-2.5 py-1.5 text-[12px] leading-snug text-ink-soft">
          couldn&apos;t sit through my kid&apos;s practice
        </p>
        <p className="rounded border border-accent bg-accent-soft px-2.5 py-1.5 text-[12px] leading-snug">
          good weekend, made it to the beach for an hour
          <span className="mt-0.5 block font-mono text-[8.5px] tracking-[0.06em] text-ink-faint">
            SURFACED BY THE DEFENSE
          </span>
        </p>
        <p className="rounded border border-rule px-2.5 py-1.5 text-[12px] leading-snug text-ink-soft">
          paid for it monday — flare-up, mom had to come over
        </p>
      </div>
    </Frame>
  );
}

/** 4 — the demand. Miniature of the exhibit. */
function DemandVisual() {
  return (
    <Frame title="DEMAND EXHIBIT">
      <svg viewBox="0 0 260 60" aria-hidden="true" className="h-auto w-full">
        <polyline
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          points="6,18 44,26 82,34 120,38 158,22 196,38 232,44 254,48"
        />
        <line x1="6" y1="52" x2="254" y2="52" stroke="var(--color-rule)" />
      </svg>
      <p className="mt-2 border-l-2 border-rule pl-2.5 font-serif text-[12px] leading-snug">
        &ldquo;had to call my mom over&rdquo;
        <span className="mt-0.5 block font-mono text-[8.5px] text-ink-faint">LOG-0417</span>
      </p>
    </Frame>
  );
}

export default function PracticeVisual({ kind }: { kind: string }) {
  if (kind === "gap") return <GapVisual />;
  if (kind === "depo") return <DepoVisual />;
  if (kind === "good-day") return <GoodDayVisual />;
  return <DemandVisual />;
}
