"use client";

import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";
import { gate } from "@/content/copy";

// ─────────────────────────────────────────────────────────────────────────────
// NOTE: preview curtain only — not security. The check runs entirely in the
// browser and the page content ships in the same bundle; anyone who wants past
// it can get past it. It exists to keep the preview off casual eyes.
//
// TODO: remove entire Gate component at launch.
// Removal is one line: in app/page.tsx, replace `<Gate>…</Gate>` with its
// children. Nothing else references this file.
// ─────────────────────────────────────────────────────────────────────────────

const CODE = "1111";
const FLAG = "pirra-preview";

export default function Gate({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState("");
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(FLAG) === "1") setOpen(true);
    } catch {
      /* private mode — fall through to the prompt */
    }
    setReady(true);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim() === CODE) {
      try {
        sessionStorage.setItem(FLAG, "1");
      } catch {
        /* non-fatal */
      }
      setOpen(true);
      return;
    }
    setWrong(true);
    window.setTimeout(() => setWrong(false), 600);
  }

  // Avoid a flash of the gate for someone who already entered.
  if (!ready) return null;
  if (open) return <>{children}</>;

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Wordmark />
        <form onSubmit={submit} className={`mt-8 ${wrong ? "animate-[shake_450ms_ease-in-out]" : ""}`}>
          <label htmlFor="gate-code" className="sr-only">
            {gate.placeholder}
          </label>
          <div className="flex gap-2">
            <input
              id="gate-code"
              type="password"
              autoFocus
              autoComplete="off"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={gate.placeholder}
              aria-invalid={wrong}
              aria-describedby={wrong ? "gate-error" : undefined}
              className="min-w-0 flex-1 rounded border border-rule bg-paper px-3 py-2.5 text-[15px] text-ink placeholder:text-ink-faint focus:border-accent"
            />
            <button
              type="submit"
              className="rounded bg-accent px-5 py-2.5 text-[15px] font-semibold text-paper"
            >
              {gate.button}
            </button>
          </div>
          <p
            id="gate-error"
            role={wrong ? "alert" : undefined}
            className="mt-3 font-mono text-[11px] tracking-[0.08em] text-ink-faint"
          >
            {wrong ? gate.error : gate.note}
          </p>
        </form>
      </div>
    </main>
  );
}
