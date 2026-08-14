"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ThreadView from "./ThreadView";
import { centerpieceThread, exhibit, sampleLabel } from "@/content/threads";
import { centerpiece } from "@/content/copy";

type Line = { x1: number; y1: number; x2: number; y2: number } | null;

/**
 * The centerpiece: click any highlighted figure in the exhibit and the source
 * message highlights, scrolls into view, and a thin line connects the two.
 *
 * Static fallback: `DEFAULT_SELECTION` is selected on mount, so a reader who
 * never interacts — or whose JS never runs the measurement — still sees one
 * exhibit figure joined to its source message.
 */
const DEFAULT_SELECTION = { item: exhibit.excerpt.id, msg: exhibit.excerpt.source };

export default function Provenance() {
  const [sel, setSel] = useState<{ item: string; msg: string }>(DEFAULT_SELECTION);
  const [line, setLine] = useState<Line>(null);
  const [touched, setTouched] = useState(false);

  const wrap = useRef<HTMLDivElement>(null);
  const msgEls = useRef<Map<string, HTMLElement>>(new Map());
  const itemEls = useRef<Map<string, HTMLElement>>(new Map());

  const registerMsg = useCallback((id: string, el: HTMLDivElement | null) => {
    if (el) msgEls.current.set(id, el);
    else msgEls.current.delete(id);
  }, []);

  const registerItem = useCallback((id: string, el: HTMLElement | null) => {
    if (el) itemEls.current.set(id, el);
    else itemEls.current.delete(id);
  }, []);

  const measure = useCallback(() => {
    const box = wrap.current;
    const a = itemEls.current.get(sel.item);
    const b = msgEls.current.get(sel.msg);
    if (!box || !a || !b) {
      setLine(null);
      return;
    }
    const r = box.getBoundingClientRect();
    const ra = a.getBoundingClientRect();
    const rb = b.getBoundingClientRect();
    // Draw from the exhibit item's left edge to the message bubble's right edge
    // when side by side; the same maths reads fine stacked on mobile.
    setLine({
      x1: ra.left - r.left,
      y1: ra.top - r.top + ra.height / 2,
      x2: rb.right - r.left,
      y2: rb.top - r.top + rb.height / 2,
    });
  }, [sel]);

  useEffect(() => {
    const id = window.requestAnimationFrame(measure);
    return () => window.cancelAnimationFrame(id);
  }, [measure]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize);
    };
  }, [measure]);

  function pick(item: string, msg: string | null) {
    if (!msg) return;
    setTouched(true);
    setSel({ item, msg });
    const el = msgEls.current.get(msg);
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el?.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
  }

  const linkable =
    "cursor-pointer rounded transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <div ref={wrap} className="relative">
      {/* Connector. Decorative — the highlight carries the meaning on its own. */}
      {line ? (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full lg:block"
        >
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="var(--color-accent)"
            strokeWidth="1.25"
            strokeDasharray="3 3"
            opacity="0.75"
          />
          <circle cx={line.x1} cy={line.y1} r="3" fill="var(--color-accent)" />
          <circle cx={line.x2} cy={line.y2} r="3" fill="var(--color-accent)" />
        </svg>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-14">
        {/* ── Thread ─────────────────────────────────────────────── */}
        <div className="order-2 lg:order-1">
          <ThreadView
            messages={centerpieceThread}
            play
            forceComplete={touched}
            highlight={sel.msg}
            registerRef={registerMsg}
          />
        </div>

        {/* ── Exhibit ────────────────────────────────────────────── */}
        <div className="order-1 lg:order-2">
          <div className="rounded-lg border border-rule bg-paper p-5 sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-rule pb-3">
              <div>
                <h3 className="font-serif text-[16px] font-semibold">{exhibit.header}</h3>
                <p className="mt-0.5 font-mono text-[9.5px] tracking-[0.07em] text-ink-faint">
                  {exhibit.sub}
                </p>
              </div>
              <span className="font-mono text-[9.5px] tracking-[0.09em] text-ink-faint">
                {sampleLabel}
              </span>
            </div>

            {/* Tiles */}
            <div className="mt-4 grid grid-cols-3 gap-px bg-rule">
              {exhibit.tiles.map((t) => {
                const active = sel.item === t.id;
                const Tag = t.source ? "button" : "div";
                return (
                  <Tag
                    key={t.id}
                    {...(t.source
                      ? {
                          type: "button" as const,
                          onClick: () => pick(t.id, t.source),
                          "aria-pressed": active,
                          title: "Click to see the source message",
                        }
                      : {})}
                    ref={(el: HTMLElement | null) => registerItem(t.id, el)}
                    className={[
                      "bg-paper p-3 text-left",
                      t.source ? linkable : "",
                      t.source && active ? "bg-accent-soft" : "",
                    ].join(" ")}
                  >
                    <span
                      className={`block font-serif text-[15px] font-semibold leading-tight ${
                        t.source ? "underline decoration-accent decoration-dotted underline-offset-4" : ""
                      }`}
                    >
                      {t.value}
                    </span>
                    <span className="mt-1 block font-mono text-[9px] tracking-[0.07em] text-ink-faint">
                      {t.label}
                    </span>
                  </Tag>
                );
              })}
            </div>

            {/* Curve */}
            <div className="relative mt-5">
              <svg
                viewBox="0 0 360 110"
                role="img"
                aria-label="Illustrative functional-impact curve over five months, showing a flare-up spike and one treatment gap shown honestly as a gap."
                className="h-auto w-full"
              >
                <rect x="150" y="8" width="40" height="86" fill="var(--color-paper-2)" />
                <text
                  x="170"
                  y="20"
                  textAnchor="middle"
                  style={{ font: "500 8px var(--font-mono)", fill: "var(--color-ink-faint)" }}
                >
                  GAP
                </text>
                <polyline
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1.75"
                  points="8,26 48,38 88,50 128,58 168,62 208,66 236,34 268,58 300,62 332,74 352,80"
                />
                <line x1="8" y1="94" x2="352" y2="94" stroke="var(--color-rule)" />
                <text x="8" y="106" style={{ font: "400 8px var(--font-mono)", fill: "var(--color-ink-faint)" }}>
                  MAR
                </text>
                <text
                  x="352"
                  y="106"
                  textAnchor="end"
                  style={{ font: "400 8px var(--font-mono)", fill: "var(--color-ink-faint)" }}
                >
                  AUG
                </text>
              </svg>

              {/* Markers as real buttons, positioned over the curve. */}
              {exhibit.markers.map((m) => {
                const active = sel.item === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    ref={(el) => registerItem(m.id, el)}
                    onClick={() => pick(m.id, m.source)}
                    aria-pressed={active}
                    aria-label={`${m.label} — click to see the source message`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 ${linkable}`}
                    style={{ left: `${(m.x / 360) * 100}%`, top: `${(m.y / 110) * 100}%` }}
                  >
                    <span
                      className={`block h-3 w-3 rounded-full border-2 border-accent ${
                        active ? "bg-accent" : "bg-paper"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Excerpt */}
            <button
              type="button"
              ref={(el) => registerItem(exhibit.excerpt.id, el)}
              onClick={() => pick(exhibit.excerpt.id, exhibit.excerpt.source)}
              aria-pressed={sel.item === exhibit.excerpt.id}
              className={`mt-5 block w-full border-l-2 border-rule pl-3 text-left ${linkable} ${
                sel.item === exhibit.excerpt.id ? "border-accent bg-accent-soft" : ""
              }`}
            >
              <span className="block font-serif text-[14.5px] leading-snug">
                &ldquo;{exhibit.excerpt.text}&rdquo;
              </span>
              <span className="mt-1 block font-mono text-[9px] tracking-[0.06em] text-ink-faint">
                {exhibit.excerpt.ref}
              </span>
            </button>

            {/* Integrity */}
            <p className="mt-5 border border-rule bg-paper-2 p-3 font-mono text-[9.5px] leading-relaxed text-ink-soft">
              {exhibit.integrity}
            </p>
          </div>

          <p className="mt-3 font-mono text-[10.5px] tracking-[0.07em] text-ink-faint">
            {centerpiece.hint}
          </p>
        </div>
      </div>
    </div>
  );
}
