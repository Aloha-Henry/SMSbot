"use client";

import { useEffect, useRef, useState } from "react";
import type { Msg } from "@/content/threads";
import { sampleLabel } from "@/content/threads";

function prefersReduce() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Typing() {
  return (
    <div className="self-start" aria-hidden="true">
      <div className="flex gap-1 rounded-2xl border border-rule bg-paper-2 px-3.5 py-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block h-1.5 w-1.5 rounded-full bg-ink-faint"
            style={{ animation: `pirra-blink 1.1s ${i * 0.18}s infinite ease-in-out` }}
          />
        ))}
      </div>
    </div>
  );
}

export function Bubble({
  msg,
  highlighted = false,
  innerRef,
}: {
  msg: Msg;
  highlighted?: boolean;
  innerRef?: (el: HTMLDivElement | null) => void;
}) {
  const mine = msg.who === "client";
  const attorney = msg.who === "attorney";

  return (
    <div
      ref={innerRef}
      className={`flex max-w-[86%] flex-col sm:max-w-[78%] ${mine ? "self-end items-end" : "self-start items-start"}`}
      data-msg={msg.id}
    >
      {!mine ? (
        <span className="mb-1 font-mono text-[9.5px] tracking-[0.09em] text-ink-faint">
          {msg.label ?? (attorney ? "ATTORNEY" : "PIRRA")}
        </span>
      ) : null}
      <div
        className={[
          "rounded-2xl px-3.5 py-2.5 text-[14.5px] leading-snug transition-shadow duration-200",
          mine
            ? "bg-accent text-paper"
            : attorney
              ? "border-l-[3px] border-accent bg-accent-soft text-ink"
              : "border border-rule bg-paper-2 text-ink",
          highlighted ? "shadow-[0_0_0_3px_var(--color-accent)]" : "",
        ].join(" ")}
      >
        {msg.text}
      </div>
      {msg.ref ? (
        <span className="mt-1 font-mono text-[9.5px] tracking-[0.05em] text-ink-faint">
          {msg.ref}
        </span>
      ) : null}
    </div>
  );
}

export default function ThreadView({
  messages,
  play = false,
  forceComplete = false,
  highlight = null,
  registerRef,
  className = "",
  showSampleLabel = true,
}: {
  messages: Msg[];
  play?: boolean;
  forceComplete?: boolean;
  highlight?: string | null;
  registerRef?: (id: string, el: HTMLDivElement | null) => void;
  className?: string;
  showSampleLabel?: boolean;
}) {
  const [count, setCount] = useState(play ? 0 : messages.length);
  const [typing, setTyping] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  // Kick playback when the thread first scrolls into view.
  useEffect(() => {
    if (!play || started.current) return;

    if (prefersReduce() || typeof IntersectionObserver === "undefined") {
      setCount(messages.length);
      started.current = true;
      return;
    }
    const el = boxRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started.current) {
          started.current = true;
          setCount(1);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [play, messages.length]);

  // Advance one message at a time, with a typing beat before PIRRA speaks.
  useEffect(() => {
    if (!play || count === 0 || count >= messages.length) return;
    const next = messages[count];
    const isAgent = next.who !== "client";

    let t2: number | undefined;
    const t1 = window.setTimeout(() => {
      if (isAgent) {
        setTyping(true);
        t2 = window.setTimeout(() => {
          setTyping(false);
          setCount((c) => c + 1);
        }, 700);
      } else {
        setCount((c) => c + 1);
      }
    }, isAgent ? 260 : 520);

    return () => {
      window.clearTimeout(t1);
      if (t2) window.clearTimeout(t2);
    };
  }, [play, count, messages]);

  // Any interaction with the exhibit skips the rest of the playback.
  useEffect(() => {
    if (forceComplete) {
      setTyping(false);
      setCount(messages.length);
      started.current = true;
    }
  }, [forceComplete, messages.length]);

  const shown = messages.slice(0, count);

  return (
    <div ref={boxRef} className={`rounded-lg border border-rule bg-paper p-4 ${className}`}>
      {showSampleLabel ? (
        <div className="mb-3 flex items-center justify-between font-mono text-[9.5px] tracking-[0.09em] text-ink-faint">
          <span>YOUR FIRM&apos;S NUMBER</span>
          <span>{sampleLabel}</span>
        </div>
      ) : null}
      <div className="flex flex-col gap-3">
        {shown.map((m) => (
          <Bubble
            key={m.id}
            msg={m}
            highlighted={highlight === m.id}
            innerRef={registerRef ? (el) => registerRef(m.id, el) : undefined}
          />
        ))}
        {typing ? <Typing /> : null}
      </div>
    </div>
  );
}
