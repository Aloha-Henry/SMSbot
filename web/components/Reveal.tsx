"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Subtle scroll reveal — fade and rise, 260ms. Nothing bouncy, no parallax.
 *
 * Degrades to plain content in three cases: no JS (the element ships visible
 * and the effect only ever removes the hidden state), reduced-motion, and any
 * environment without IntersectionObserver.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // Only hide once we know we can animate — avoids content being stuck
    // invisible if the observer never fires.
    setArmed(true);

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = armed && !shown;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(12px)" : "none",
        transition: armed ? `opacity 260ms ease, transform 260ms ease ${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
