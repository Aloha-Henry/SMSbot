// Illustrative CSS/SVG mockups of the three surfaces.
// Brief §8: obviously synthetic sample content, never presented as real
// screenshots of real client data. Do not swap these for actual screenshots
// without scrubbing every field.

const tag = "font-mono text-[10px] tracking-[0.09em] text-ink-faint";

/** Surface 1 — what the client sees. */
export function SmsMockup() {
  const msgs: { who: "pirra" | "client"; text: string }[] = [
    { who: "pirra", text: "How's the pain right now, 0 to 10?" },
    { who: "client", text: "About an 8. Can't turn my head to back out of the driveway." },
    { who: "pirra", text: "What can't you do today that you could before?" },
    { who: "client", text: "Can't pick up my daughter. She's 4." },
  ];
  return (
    <div className="rounded-lg border border-rule bg-paper p-4">
      <div className={`${tag} mb-3 flex items-center justify-between`}>
        <span>YOUR FIRM&apos;S NUMBER</span>
        <span>SAMPLE</span>
      </div>
      <div className="flex flex-col gap-2">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-[13px] leading-snug ${
              m.who === "client"
                ? "self-end bg-accent text-paper"
                : "self-start border border-rule bg-paper-2 text-ink"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Surface 2 — what the firm sees. */
export function WorkbenchMockup() {
  const rows = [
    { wk: "WK 02", q: "Pain 8/10, limited rotation", t: "PRESENT-CONDITION" },
    { wk: "WK 05", q: "2 missed PT sessions", t: "GAP FLAGGED" },
    { wk: "WK 08", q: "Flare-up after lifting", t: "PRESENT-CONDITION" },
    { wk: "WK 13", q: "First full night of sleep", t: "PRESENT-CONDITION" },
  ];
  return (
    <div className="rounded-lg border border-rule bg-paper p-4">
      <div className={`${tag} mb-3 flex items-center justify-between`}>
        <span>EVIDENCE WORKBENCH</span>
        <span>SAMPLE CLIENT</span>
      </div>
      <ul className="flex flex-col">
        {rows.map((r, i) => (
          <li
            key={i}
            className="flex items-baseline gap-3 border-b border-rule py-2 last:border-0"
          >
            <span className="font-mono text-[10px] text-ink-faint">{r.wk}</span>
            <span className="flex-1 text-[13px] leading-snug">{r.q}</span>
            <span
              className={`font-mono text-[9px] tracking-[0.07em] ${
                r.t === "GAP FLAGGED" ? "text-accent" : "text-ink-faint"
              }`}
            >
              {r.t}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Surface 3 — what the court sees. */
export function ExhibitMockup() {
  return (
    <div className="rounded-lg border border-rule bg-paper p-4">
      <div className={`${tag} mb-3 flex items-center justify-between`}>
        <span>DEMAND EXHIBIT</span>
        <span>SAMPLE</span>
      </div>
      <svg
        viewBox="0 0 300 110"
        role="img"
        aria-label="Illustrative chart showing reported pain declining over fourteen weeks with a flare-up, plotted against a shaded treatment gap."
        className="mb-3 h-auto w-full"
      >
        <rect x="96" y="8" width="42" height="82" fill="var(--color-paper-2)" />
        <polyline
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          points="8,14 40,24 72,36 104,44 136,40 168,20 200,52 232,62 264,72 292,78"
        />
        <line x1="8" y1="90" x2="292" y2="90" stroke="var(--color-rule)" />
        <text x="8" y="104" className="font-mono" fontSize="7" fill="var(--color-ink-faint)">
          WK 1
        </text>
        <text
          x="292"
          y="104"
          textAnchor="end"
          className="font-mono"
          fontSize="7"
          fill="var(--color-ink-faint)"
        >
          WK 14
        </text>
      </svg>
      <blockquote className="border-l-2 border-rule pl-3 font-serif text-[13px] leading-snug">
        &ldquo;Can&apos;t pick up my daughter. She&apos;s 4.&rdquo;
        <span className="mt-1 block font-mono text-[9px] text-ink-faint">
          WK 06 · LOG REF M-0042
        </span>
      </blockquote>
      <p className="mt-3 border border-rule bg-paper-2 p-2 font-mono text-[9px] leading-relaxed text-ink-soft">
        INTEGRITY — HASH-CHAINED, INDEPENDENTLY TIMESTAMPED, NO GAPS IN CHAIN
      </p>
    </div>
  );
}
