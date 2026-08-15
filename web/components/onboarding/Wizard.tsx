"use client";

import { useEffect, useRef, useState } from "react";
import {
  copy,
  injuries,
  injuryByKey,
  modes,
  modeByKey,
  directionProse,
  type Details,
  type InjuryKey,
  type Line,
  type Mode,
  type ModeKey,
} from "@/content/onboarding";

/* ── shared bits ──────────────────────────────────────────────────────────── */

const card = "rounded-lg border border-rule bg-paper";
const step = "font-mono text-[10.5px] tracking-[0.14em] text-ink-faint";
const h1 = "font-serif text-[27px] leading-[1.15] font-semibold tracking-[-0.015em] sm:text-[34px]";
const body = "text-[16px] leading-[1.6] text-ink-soft";
const btn =
  "inline-flex items-center justify-center rounded px-5 py-3 text-[15px] font-semibold transition-colors";

function SampleTag({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono text-[9.5px] tracking-[0.09em] text-ink-faint ${className}`}>
      {copy.sample}
    </span>
  );
}

function reduceMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Today, formatted the way a case record would show it. */
function stamp() {
  const d = new Date();
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function today() {
  return new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/* ── preview thread ───────────────────────────────────────────────────────── */

function Preview({ lines }: { lines: Line[] }) {
  return (
    <div className="rounded-lg border border-rule bg-paper-2 p-3.5">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-[0.09em] text-ink-faint">
          {copy.mode.sees.toUpperCase()}
        </span>
        <SampleTag />
      </div>
      <div className="flex flex-col gap-2">
        {lines.map((l, i) => (
          <div key={i} className={l.who === "client" ? "self-end" : "self-start"}>
            <div
              className={`max-w-[15rem] rounded-2xl px-3 py-2 text-[13px] leading-snug ${
                l.who === "client"
                  ? l.tapped
                    ? "border border-accent bg-accent-soft font-mono text-[12px] text-accent"
                    : "bg-accent text-paper"
                  : "border border-rule bg-paper text-ink"
              }`}
            >
              {l.tapped ? `▸ ${l.text}` : l.text}
            </div>
            {l.chips ? (
              <div className="mt-1.5 flex flex-wrap gap-1">
                {l.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-rule bg-paper px-2.5 py-0.5 font-mono text-[10px] text-ink-soft"
                  >
                    {c}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function previewFor(mode: Mode, injury: InjuryKey): Line[] {
  return mode.previewByInjury?.[injury] ?? mode.preview;
}

/* ── mode cards ───────────────────────────────────────────────────────────── */

function ModeCards({
  value,
  onChange,
  injury,
  suggested,
  compact = false,
}: {
  value: ModeKey;
  onChange: (m: ModeKey) => void;
  injury: InjuryKey;
  suggested: ModeKey;
  compact?: boolean;
}) {
  return (
    <div role="radiogroup" aria-label="Conversation mode" className="flex flex-col gap-3">
      {modes.map((m) => {
        const on = value === m.key;
        return (
          <label
            key={m.key}
            className={`block cursor-pointer rounded-lg border p-4 transition-colors sm:p-5 ${
              on ? "border-accent bg-accent-soft" : "border-rule bg-paper hover:border-ink-faint"
            }`}
          >
            <input
              type="radio"
              name="mode"
              value={m.key}
              checked={on}
              onChange={() => onChange(m.key)}
              className="sr-only"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span
                aria-hidden="true"
                className={`mt-1 block h-3.5 w-3.5 shrink-0 rounded-full border-2 ${
                  on ? "border-accent bg-accent" : "border-ink-faint bg-paper"
                }`}
              />
              <span className="font-serif text-[18px] font-semibold">{m.name}</span>
              {m.key === suggested ? (
                <span className="rounded-sm border border-accent px-1.5 py-0.5 font-mono text-[9px] tracking-[0.08em] text-accent">
                  {copy.mode.suggested.toUpperCase()}
                </span>
              ) : null}
              <span className="ml-auto font-mono text-[9.5px] tracking-[0.05em] text-ink-faint">
                {m.cadenceTag}
              </span>
            </div>

            <p className="mt-2 text-[14.5px] leading-snug text-ink-soft">{m.summary}</p>

            {on && !compact ? (
              <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,17rem)]">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.09em] text-ink-faint">
                    {copy.mode.receives.toUpperCase()}
                  </span>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink">{m.receive}</p>
                </div>
                <Preview lines={previewFor(m, injury)} />
              </div>
            ) : null}
          </label>
        );
      })}
    </div>
  );
}

/* ── toggles ──────────────────────────────────────────────────────────────── */

function Toggle({
  on,
  onChange,
  title,
  children,
  disabled = false,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <label
      className={`flex gap-3.5 border-b border-rule py-4 last:border-0 ${
        disabled ? "opacity-45" : "cursor-pointer"
      }`}
    >
      <input
        type="checkbox"
        checked={on}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={`mt-0.5 flex h-5 w-9 shrink-0 items-center rounded-full border transition-colors ${
          on ? "justify-end border-accent bg-accent" : "justify-start border-rule bg-paper-2"
        }`}
      >
        <span className="mx-0.5 block h-3.5 w-3.5 rounded-full bg-paper shadow-sm" />
      </span>
      <span>
        <span className="block text-[15px] font-semibold">{title}</span>
        <span className="mt-1 block text-[14px] leading-relaxed text-ink-soft">{children}</span>
      </span>
    </label>
  );
}

/* ── the wizard ───────────────────────────────────────────────────────────── */

type Stage = "case" | "whether" | "mode" | "details" | "review" | "launched" | "controls";

export default function Wizard() {
  const [stage, setStage] = useState<Stage>("case");
  const [injuryKey, setInjuryKey] = useState<InjuryKey>("leg-fracture");
  const [declined, setDeclined] = useState(false);
  const [mode, setMode] = useState<ModeKey>("structured");
  const [details, setDetails] = useState<Details>(() => ({
    photo: true,
    milestones: [true, true, true, true, true],
    expense: true,
    followUp: true,
    beforeVisit: false,
    cadence: "2× weekly",
  }));
  const [launchedAt, setLaunchedAt] = useState<string | null>(null);
  const [sealing, setSealing] = useState(false);
  const [paused, setPaused] = useState(false);
  const [off, setOff] = useState(false);
  const [askOff, setAskOff] = useState(false);
  const [ledger, setLedger] = useState<string[]>([]);

  const injury = injuryByKey(injuryKey);
  const modeObj = modeByKey(mode);

  // Injury drives the proposals. Re-derive whenever it changes.
  function chooseInjury(k: InjuryKey) {
    const inj = injuryByKey(k);
    setInjuryKey(k);
    setMode(inj.suggested);
    setDetails({
      photo: inj.arc.length > 0 && inj.suggested !== "minimal",
      milestones: inj.arc.map(() => true),
      expense: true,
      followUp: inj.suggested === "standard" || inj.suggested === "intensive",
      beforeVisit: false,
      cadence: inj.cadence,
    });
  }

  function chooseMode(m: ModeKey) {
    setMode(m);
    setDetails((d) => ({
      ...d,
      photo: m === "minimal" ? false : injury.arc.length > 0,
      followUp: m === "standard" || m === "intensive" ? true : d.followUp,
      cadence: m === "intensive" ? "Daily" : m === "standard" ? "2–3× weekly" : "2× weekly",
    }));
  }

  function record(entry: string) {
    setLedger((l) => [`${today()} — ${entry}`, ...l]);
  }

  function authorize() {
    if (reduceMotion()) {
      const t = stamp();
      setLaunchedAt(t);
      record(`Direction authorized — ${modeObj.name} conversation mode.`);
      setStage("launched");
      return;
    }
    setSealing(true);
    window.setTimeout(() => {
      const t = stamp();
      setLaunchedAt(t);
      record(`Direction authorized — ${modeObj.name} conversation mode.`);
      setSealing(false);
      setStage("launched");
    }, 900);
  }

  function reset() {
    setStage("case");
    setDeclined(false);
    setLaunchedAt(null);
    setPaused(false);
    setOff(false);
    setLedger([]);
    chooseInjury(injuryKey);
  }

  /* ── screen: case card ─────────────────────────────────────────────────── */
  if (stage === "case") {
    return (
      <div className={`${card} p-6 sm:p-8`}>
        <div className="flex items-center justify-between">
          <span className={step}>{copy.caseCard.kicker}</span>
          <SampleTag />
        </div>
        <h1 className={`${h1} mt-3`}>{copy.client}</h1>
        <p className="mt-3 max-w-[60ch] font-mono text-[12.5px] leading-relaxed text-ink-soft">
          {injury.detail}
        </p>

        <div className="mt-7 border-t border-rule pt-6">
          <span className="font-mono text-[10px] tracking-[0.1em] text-ink-faint">
            {copy.caseCard.injuryLabel.toUpperCase()}
          </span>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {injuries.map((i) => (
              <button
                key={i.key}
                type="button"
                onClick={() => chooseInjury(i.key)}
                aria-pressed={i.key === injuryKey}
                className={`rounded border px-3 py-1.5 text-[13.5px] transition-colors ${
                  i.key === injuryKey
                    ? "border-accent bg-accent-soft font-semibold text-accent"
                    : "border-rule bg-paper text-ink-soft hover:border-ink-faint"
                }`}
              >
                {i.label}
              </button>
            ))}
          </div>
          <p className="mt-2.5 font-mono text-[10.5px] text-ink-faint">{copy.caseCard.injuryNote}</p>
        </div>

        {declined ? (
          <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-rule pt-6">
            <span className="rounded-sm border border-rule px-2.5 py-1 font-mono text-[10.5px] tracking-[0.06em] text-ink-faint">
              {copy.caseCard.notDeployed}
            </span>
            <button
              type="button"
              onClick={() => {
                setDeclined(false);
                setStage("whether");
              }}
              className="border-b border-accent pb-0.5 text-[14px] font-medium text-accent"
            >
              {copy.caseCard.reopen} &rarr;
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setStage("whether")}
            className={`${btn} mt-7 bg-accent text-paper`}
          >
            {copy.caseCard.cta} &rarr;
          </button>
        )}
      </div>
    );
  }

  /* ── screen 1: whether ─────────────────────────────────────────────────── */
  if (stage === "whether") {
    return (
      <div className={`${card} p-6 sm:p-9`}>
        <span className={step}>{copy.whether.step}</span>
        <h1 className={`${h1} mt-3 max-w-[20ch]`}>{copy.whether.headline}</h1>
        <p className={`mt-5 max-w-[58ch] ${body}`}>{copy.whether.body}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setStage("mode")}
            className="rounded-lg border-2 border-accent bg-accent p-5 text-left text-paper"
          >
            <span className="block text-[17px] font-semibold">{copy.whether.yes} &rarr;</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setDeclined(true);
              setStage("case");
            }}
            className="rounded-lg border border-rule bg-paper p-5 text-left hover:border-ink-faint"
          >
            <span className="block text-[17px] font-semibold">{copy.whether.no}</span>
            <span className="mt-1.5 block text-[13.5px] leading-snug text-ink-soft">
              {copy.whether.declined}
            </span>
          </button>
        </div>
      </div>
    );
  }

  /* ── screen 2: mode ────────────────────────────────────────────────────── */
  if (stage === "mode") {
    return (
      <div className={`${card} p-6 sm:p-9`}>
        <span className={step}>{copy.mode.step}</span>
        <h1 className={`${h1} mt-3`}>{copy.mode.headline}</h1>
        <p className={`mt-4 max-w-[58ch] ${body}`}>{copy.mode.subhead}</p>
        <p className="mt-2 max-w-[58ch] text-[14px] italic text-ink-faint">{injury.why}</p>

        <div className="mt-7">
          <ModeCards value={mode} onChange={chooseMode} injury={injuryKey} suggested={injury.suggested} />
        </div>

        <p className="mt-6 border-l-2 border-rule pl-4 text-[13.5px] leading-relaxed text-ink-faint">
          {copy.mode.footnote}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => setStage("details")} className={`${btn} bg-accent text-paper`}>
            Continue &rarr;
          </button>
          <button
            type="button"
            onClick={() => setStage("whether")}
            className={`${btn} border border-rule text-ink-soft`}
          >
            {copy.review.back}
          </button>
        </div>
      </div>
    );
  }

  /* ── screen 3: details ─────────────────────────────────────────────────── */
  if (stage === "details") {
    const photoAvailable = injury.arc.length > 0 && mode !== "minimal";
    return (
      <div className={`${card} p-6 sm:p-9`}>
        <span className={step}>{copy.details.step}</span>
        <h1 className={`${h1} mt-3`}>{copy.details.headline}</h1>
        <p className={`mt-4 max-w-[58ch] ${body}`}>{copy.details.subhead}</p>

        <div className="mt-7">
          <Toggle
            on={details.photo && photoAvailable}
            disabled={!photoAvailable}
            onChange={(v) => setDetails((d) => ({ ...d, photo: v }))}
            title={copy.details.photo.title}
          >
            {photoAvailable
              ? copy.details.photo.body
              : mode === "minimal"
                ? "Available from Structured mode up."
                : "Little to photograph for this injury."}
          </Toggle>

          {details.photo && photoAvailable ? (
            <div className="border-b border-rule pb-5 pl-[3.1rem]">
              <span className="font-mono text-[9.5px] tracking-[0.09em] text-ink-faint">
                {injury.arcLabel.toUpperCase()}
              </span>
              <div className="mt-3 flex flex-wrap items-stretch gap-1.5">
                {injury.arc.map((m, i) => {
                  const on = details.milestones[i];
                  return (
                    <button
                      key={m}
                      type="button"
                      aria-pressed={on}
                      onClick={() =>
                        setDetails((d) => {
                          const next = [...d.milestones];
                          next[i] = !next[i];
                          return { ...d, milestones: next };
                        })
                      }
                      className={`flex-1 rounded border px-3 py-2.5 text-left text-[12.5px] leading-snug transition-colors ${
                        on
                          ? "border-accent bg-accent-soft text-ink"
                          : "border-rule bg-paper-2 text-ink-faint line-through"
                      }`}
                      style={{ minWidth: "8.5rem" }}
                    >
                      <span className="block font-mono text-[9px] tracking-[0.08em] text-ink-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {m}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          <Toggle
            on={details.expense}
            onChange={(v) => setDetails((d) => ({ ...d, expense: v }))}
            title={copy.details.expense.title}
          >
            {copy.details.expense.body}
          </Toggle>

          <Toggle
            on={details.followUp}
            onChange={(v) => setDetails((d) => ({ ...d, followUp: v }))}
            title={copy.details.followUp.title}
          >
            {copy.details.followUp.body}
          </Toggle>

          <Toggle
            on={details.beforeVisit}
            onChange={(v) => setDetails((d) => ({ ...d, beforeVisit: v }))}
            title={copy.details.beforeVisit.title}
          >
            {copy.details.beforeVisit.body}
          </Toggle>
        </div>

        <div className="mt-7 border-t border-rule pt-6">
          <span className="text-[15px] font-semibold">{copy.details.cadenceTitle}</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {copy.details.cadences.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={details.cadence === c}
                onClick={() => setDetails((d) => ({ ...d, cadence: c }))}
                className={`rounded border px-3 py-1.5 text-[13.5px] transition-colors ${
                  details.cadence === c
                    ? "border-accent bg-accent-soft font-semibold text-accent"
                    : "border-rule bg-paper text-ink-soft hover:border-ink-faint"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="mt-2.5 max-w-[56ch] text-[13.5px] leading-relaxed text-ink-faint">
            {copy.details.cadenceNote}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={() => setStage("review")} className={`${btn} bg-accent text-paper`}>
            Continue &rarr;
          </button>
          <button
            type="button"
            onClick={() => setStage("mode")}
            className={`${btn} border border-rule text-ink-soft`}
          >
            {copy.review.back}
          </button>
        </div>
      </div>
    );
  }

  /* ── screen 4: review ──────────────────────────────────────────────────── */
  if (stage === "review") {
    const d = directionProse(injury, modeObj, details);
    return (
      <div className={`relative ${card} overflow-hidden p-6 sm:p-9`}>
        {sealing ? (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-paper/85">
            <span
              className="rounded-full border-[3px] border-accent px-7 py-4 font-mono text-[13px] tracking-[0.16em] text-accent"
              style={{ animation: "pirra-seal 900ms cubic-bezier(.2,.8,.2,1) forwards" }}
            >
              RECORDED
            </span>
          </div>
        ) : null}

        <span className={step}>{copy.review.step}</span>
        <h1 className={`${h1} mt-3`}>{copy.review.headline}</h1>

        <div className="mt-6 border-l-2 border-accent bg-accent-soft py-5 pl-5 pr-5">
          <p className="font-serif text-[17px] leading-[1.6] text-ink">
            {d.lead}{" "}
            {d.clauses.map((c, i) => (
              <span key={c}>
                <strong className="font-semibold">{c}</strong>
                {i < d.clauses.length - 2 ? "; " : i === d.clauses.length - 2 ? "; and " : ". "}
              </span>
            ))}
          </p>
          <p className="mt-3 font-serif text-[17px] leading-[1.6] text-ink-soft">{d.tail}</p>
        </div>

        <p className="mt-6 font-mono text-[12px] tracking-[0.04em] text-ink-soft">
          {copy.review.price}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <button type="button" onClick={authorize} className={`${btn} bg-accent text-paper`}>
            {copy.review.cta}
          </button>
          <button
            type="button"
            onClick={() => setStage("details")}
            className={`${btn} border border-rule text-ink-soft`}
          >
            {copy.review.back}
          </button>
        </div>
      </div>
    );
  }

  /* ── screen: launched ──────────────────────────────────────────────────── */
  if (stage === "launched") {
    return (
      <div className={`${card} p-6 sm:p-9`}>
        <span
          aria-hidden="true"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent text-[18px] text-accent"
        >
          ✓
        </span>
        <h1 className={`${h1} mt-5`}>{copy.launched.title}</h1>
        <p className="mt-3 font-mono text-[12.5px] tracking-[0.05em] text-ink-soft">
          {launchedAt} · {copy.launched.recorded}
        </p>
        <p className={`mt-5 max-w-[54ch] ${body}`}>
          {modeObj.name} conversation mode, {details.cadence.toLowerCase()}. Maria receives her first
          message today, beginning with who PIRRA is.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setStage("controls")}
            className={`${btn} bg-accent text-paper`}
          >
            {copy.launched.controls} &rarr;
          </button>
          <button type="button" onClick={reset} className={`${btn} border border-rule text-ink-soft`}>
            {copy.launched.restart}
          </button>
        </div>
      </div>
    );
  }

  /* ── screen: controls (the valve) ──────────────────────────────────────── */
  return (
    <>
      <div className={`${card} p-6 sm:p-9`}>
        <div className="flex items-center justify-between">
          <span className={step}>{copy.controls.kicker}</span>
          <SampleTag />
        </div>
        <h1 className={`${h1} mt-3`}>{copy.controls.headline}</h1>

        <p className="mt-4 flex flex-wrap items-center gap-2.5 text-[14px]">
          <span
            className={`h-2 w-2 rounded-full ${off ? "bg-ink-faint" : paused ? "bg-ink-faint" : "bg-accent"}`}
            aria-hidden="true"
          />
          <span className={off ? "text-ink-soft" : "text-ink"}>
            {off ? copy.controls.turnedOff : paused ? copy.controls.paused : copy.controls.running}
          </span>
        </p>

        {!off ? (
          <>
            <div className="mt-7 border-t border-rule pt-6">
              <span className="font-mono text-[10px] tracking-[0.1em] text-ink-faint">
                {copy.controls.currentMode.toUpperCase()}
              </span>
              <div className="mt-3">
                <ModeCards
                  value={mode}
                  onChange={(m) => {
                    const prev = mode;
                    if (m === prev) return;
                    chooseMode(m);
                    record(`Conversation mode changed — ${modeByKey(prev).name} → ${modeByKey(m).name}.`);
                  }}
                  injury={injuryKey}
                  suggested={injury.suggested}
                  compact
                />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 border-t border-rule pt-6">
              <button
                type="button"
                onClick={() => {
                  setPaused((p) => !p);
                  record(paused ? "Check-ins resumed." : "Check-ins paused.");
                }}
                className={`${btn} border border-rule text-ink`}
              >
                {paused ? copy.controls.resume : copy.controls.pause}
              </button>
              <button
                type="button"
                onClick={() => setAskOff(true)}
                className={`${btn} border border-rule text-ink-soft`}
              >
                {copy.controls.off}
              </button>
            </div>
          </>
        ) : null}

        {ledger.length ? (
          <div className="mt-7 border-t border-rule pt-6">
            <span className="font-mono text-[10px] tracking-[0.1em] text-ink-faint">
              {copy.controls.ledger.toUpperCase()}
            </span>
            <ul className="mt-3 flex flex-col">
              {ledger.map((e, i) => (
                <li
                  key={i}
                  className="border-b border-rule py-2 font-mono text-[11.5px] leading-relaxed text-ink-soft last:border-0"
                >
                  {e}
                </li>
              ))}
            </ul>
            <p className="mt-3 font-mono text-[10.5px] text-ink-faint">
              {copy.recordedNote(today())}
            </p>
          </div>
        ) : null}

        <button
          type="button"
          onClick={reset}
          className="mt-7 border-b border-accent pb-0.5 text-[14px] font-medium text-accent"
        >
          {copy.launched.restart}
        </button>
      </div>

      {askOff ? <TurnOffModal onCancel={() => setAskOff(false)} onConfirm={() => {
        setOff(true);
        setAskOff(false);
        record("PIRRA turned off for this case. Record to date sealed in the case file.");
      }} /> : null}
    </>
  );
}

/* ── turn-off modal ───────────────────────────────────────────────────────── */

function TurnOffModal({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    cancelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/35 p-5"
      onClick={onCancel}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="off-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-lg border border-rule bg-paper p-6 sm:p-7"
      >
        <h2 id="off-title" className="font-serif text-[21px] font-semibold">
          {copy.controls.modalTitle}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{copy.controls.modalBody}</p>

        <div className="mt-4 rounded border border-rule bg-paper-2 p-3.5">
          <span className="font-mono text-[9.5px] tracking-[0.09em] text-ink-faint">
            {copy.controls.modalClientIntro.toUpperCase()}
          </span>
          <p className="mt-2 font-serif text-[15px] leading-snug text-ink">
            &ldquo;{copy.controls.modalClientLine}&rdquo;
          </p>
        </div>

        <p className="mt-4 font-mono text-[11px] leading-relaxed text-ink-faint">
          {copy.controls.modalRecorded}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={onConfirm} className={`${btn} bg-accent text-paper`}>
            {copy.controls.modalConfirm}
          </button>
          <button
            ref={cancelRef}
            type="button"
            onClick={onCancel}
            className={`${btn} border border-rule text-ink-soft`}
          >
            {copy.controls.modalCancel}
          </button>
        </div>
      </div>
    </div>
  );
}
