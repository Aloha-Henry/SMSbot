import Gate from "@/components/Gate";
import Wordmark from "@/components/Wordmark";
import Wizard from "@/components/onboarding/Wizard";

export const metadata = {
  title: "Case setup — PIRRA (prototype)",
  robots: { index: false, follow: false },
};

export default function Onboarding() {
  return (
    <Gate>
      <div className="bg-accent px-5 py-1.5 text-center font-mono text-[10.5px] tracking-[0.09em] text-paper">
        INTERACTIVE PROTOTYPE — NOT A LIVE SYSTEM · SYNTHETIC CASE · NOT A REAL CLIENT FILE
      </div>

      <header className="border-b border-rule">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <a href="/">
            <Wordmark descriptor="Case setup" />
          </a>
          <a href="/demo/" className="text-[13.5px] font-medium text-accent">
            Workbench &rarr;
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8">
          <h1 className="font-serif text-[23px] font-semibold leading-tight sm:text-[27px]">
            This is what a case looks like on day one.
          </h1>
          <p className="mt-3 max-w-[62ch] text-[15.5px] leading-relaxed text-ink-soft">
            Two minutes of an attorney&apos;s time, once per case. Change the injury type on the
            first screen and watch the proposals change with it — the mode, the photo series, the
            cadence. Everything after that is yours to override.
          </p>
        </div>

        <Wizard />

        <p className="mt-8 font-mono text-[10.5px] leading-relaxed text-ink-faint">
          Nothing here is a live deployment and no real client exists. Sample data only.
        </p>
      </main>
    </Gate>
  );
}
