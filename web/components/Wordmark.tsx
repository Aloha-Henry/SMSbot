// Single swappable brand component. No final brand assets yet — this is the
// serif wordmark lockup described in brief §3. Replace the contents here when
// real assets land; nothing else references the mark directly.

export default function Wordmark({ descriptor }: { descriptor?: string }) {
  return (
    <div>
      <span className="font-serif text-[21px] font-semibold tracking-[0.14em] text-ink">
        PIRRA
      </span>
      {descriptor ? (
        <span className="ml-3 hidden font-mono text-[11px] tracking-[0.06em] text-ink-faint sm:inline">
          {descriptor}
        </span>
      ) : null}
    </div>
  );
}
