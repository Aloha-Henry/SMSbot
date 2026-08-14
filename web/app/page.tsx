import Wordmark from "@/components/Wordmark";
import PilotForm from "@/components/PilotForm";
import { SmsMockup, WorkbenchMockup, ExhibitMockup } from "@/components/Mockups";
import {
  cta,
  hero,
  problem,
  output,
  how,
  holds,
  protects,
  gap,
  pricing,
  forWhom,
  pilot,
  roadmap,
  footer,
} from "@/content/copy";

/* Layout primitives. Copy lives in content/copy.ts — never inline here. */

const shell = "mx-auto w-full max-w-5xl px-5 sm:px-8";
const prose = "max-w-[62ch]";
const h2 = "font-serif text-[30px] leading-[1.15] font-semibold tracking-[-0.01em] sm:text-[40px]";
const eyebrow = "font-mono text-[11px] tracking-[0.13em] text-accent";
const bodyText = "text-[17px] leading-[1.65] text-ink-soft";

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href="#pilot"
      className={`inline-block rounded bg-accent px-6 py-3.5 text-[15px] font-semibold text-paper ${className}`}
    >
      {cta.primary}
    </a>
  );
}

function SecondaryCta() {
  return (
    <a
      href={cta.secondaryHref}
      className="inline-block border-b border-accent pb-0.5 text-[15px] font-medium text-accent"
    >
      {cta.secondary} &rarr;
    </a>
  );
}

function Section({
  id,
  children,
  tone = "paper",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "paper" | "alt";
}) {
  return (
    <section
      id={id}
      className={`border-t border-rule py-16 sm:py-24 ${
        tone === "alt" ? "bg-paper-2" : "bg-paper"
      }`}
    >
      <div className={shell}>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="border-b border-rule">
        <div className={`${shell} flex items-center justify-between py-5`}>
          <Wordmark descriptor={footer.descriptor} />
          <a href="#pilot" className="text-[14px] font-medium text-accent">
            {cta.primary}
          </a>
        </div>
      </header>

      <main>
        {/* ── A · Hero ─────────────────────────────────────────────── */}
        <section className="py-16 sm:py-28">
          <div className={shell}>
            <p className={eyebrow}>{hero.eyebrow}</p>
            <h1 className="mt-5 max-w-[19ch] font-serif text-[38px] leading-[1.08] font-semibold tracking-[-0.02em] text-balance sm:text-[62px]">
              {hero.headline}
            </h1>
            <p className={`mt-7 ${prose} ${bodyText} sm:text-[19px]`}>{hero.subhead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <PrimaryCta />
              <SecondaryCta />
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-rule pt-5 font-mono text-[11px] tracking-[0.05em] text-ink-faint">
              {hero.trust.map((t, i) => (
                <li key={t} className="flex gap-4">
                  {i > 0 ? <span aria-hidden="true">·</span> : null}
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── B · The problem ──────────────────────────────────────── */}
        <Section tone="alt">
          <h2 className={`${h2} max-w-[20ch] text-balance`}>{problem.headline}</h2>
          <div className={`mt-7 ${prose} flex flex-col gap-5`}>
            {problem.body.map((p) => (
              <p key={p.slice(0, 24)} className={bodyText}>
                {p}
              </p>
            ))}
          </div>
        </Section>

        {/* ── C · The output ───────────────────────────────────────── */}
        <Section>
          <p className={eyebrow}>THE OUTPUT</p>
          <h2 className={`${h2} mt-4`}>{output.headline}</h2>
          <p className={`mt-5 ${prose} ${bodyText}`}>{output.subhead}</p>

          <div className="mt-11 grid gap-px border border-rule bg-rule sm:grid-cols-3">
            {output.cards.map((c) => (
              <div key={c.title} className="bg-paper p-6">
                <h3 className="font-serif text-[19px] font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-11 grid items-center gap-8 sm:grid-cols-2">
            <p className="font-serif text-[21px] leading-[1.5] text-ink">
              {output.provenance}
            </p>
            <ExhibitMockup />
          </div>
        </Section>

        {/* ── D · How it works ─────────────────────────────────────── */}
        <Section tone="alt">
          <p className={eyebrow}>THE THREE SURFACES</p>
          <h2 className={`${h2} mt-4 max-w-[24ch] text-balance`}>{how.headline}</h2>
          <p className={`mt-5 ${prose} ${bodyText}`}>{how.subhead}</p>

          <ol className="mt-11 grid gap-8 sm:grid-cols-3">
            {how.steps.map((s, i) => (
              <li key={s.title}>
                <span className="font-mono text-[11px] tracking-[0.1em] text-ink-faint">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-serif text-[19px] font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
                <div className="mt-5">
                  {i === 0 ? <SmsMockup /> : i === 1 ? <WorkbenchMockup /> : <ExhibitMockup />}
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-11 max-w-[70ch] border-l-2 border-accent pl-5 text-[14.5px] leading-relaxed text-ink-soft">
            {how.disclosure}
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
            <PrimaryCta />
            <a
              href={cta.demoHref}
              className="inline-block border-b border-accent pb-0.5 text-[15px] font-medium text-accent"
            >
              {cta.demo} &rarr;
            </a>
          </div>
          <p className="mt-4 max-w-[62ch] font-mono text-[11.5px] leading-relaxed text-ink-faint">
            {cta.demoNote}
          </p>
        </Section>

        {/* ── E · Why it holds up ──────────────────────────────────── */}
        <Section>
          <p className={eyebrow}>EVIDENCE ARCHITECTURE</p>
          <h2 className={`${h2} mt-4`}>{holds.headline}</h2>
          <p className="mt-4 max-w-[48ch] font-serif text-[21px] leading-snug text-ink">
            {holds.subhead}
          </p>
          <p className={`mt-6 ${prose} ${bodyText}`}>{holds.body}</p>

          <div className="mt-12 grid gap-px border border-rule bg-rule sm:grid-cols-2">
            {holds.pillars.map((p) => (
              <div key={p.title} className="bg-paper p-7">
                <h3 className="font-serif text-[19px] font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-11 max-w-[68ch] border border-accent bg-accent-soft p-6 font-serif text-[18px] leading-[1.55] text-ink">
            {holds.callout}
          </p>

          <div className="mt-11 grid max-w-3xl gap-8 sm:grid-cols-2">
            {holds.columns.map((c) => (
              <div key={c.title} className="border-t-2 border-ink pt-4">
                <h3 className="font-serif text-[19px] font-semibold">{c.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-11 max-w-[72ch] border-l-2 border-accent pl-5 text-[15px] leading-relaxed text-ink-soft">
            {holds.honesty}
          </p>
        </Section>

        {/* ── F · Why it protects the firm ─────────────────────────── */}
        <Section tone="alt">
          <p className={eyebrow}>PRIVILEGE ARCHITECTURE</p>
          <h2 className={`${h2} mt-4`}>{protects.headline}</h2>
          <p className={`mt-6 ${prose} ${bodyText}`}>{protects.body}</p>
          <p className="mt-8 max-w-[68ch] border-l-2 border-accent pl-5 font-serif text-[18px] leading-[1.55] text-ink">
            {protects.honesty}
          </p>
        </Section>

        {/* ── G · Catch the gap ────────────────────────────────────── */}
        <Section>
          <p className={eyebrow}>SAFETY VALUE</p>
          <h2 className={`${h2} mt-4 max-w-[22ch] text-balance`}>{gap.headline}</h2>
          <p className={`mt-6 ${prose} ${bodyText}`}>{gap.body}</p>
        </Section>

        {/* ── H · Pricing ──────────────────────────────────────────── */}
        <Section tone="alt">
          <p className={eyebrow}>PRICING</p>
          <h2 className={`${h2} mt-4`}>{pricing.headline}</h2>
          <p className="mt-4 font-serif text-[21px] leading-snug text-ink">{pricing.subhead}</p>
          <p className={`mt-6 ${prose} ${bodyText}`}>{pricing.body}</p>
          <p className="mt-7 font-mono text-[11.5px] leading-relaxed text-ink-faint">
            {pricing.smallprint}
          </p>
        </Section>

        {/* ── I · Who it's for ─────────────────────────────────────── */}
        <Section>
          <p className={eyebrow}>SCOPE</p>
          <h2 className={`${h2} mt-4`}>{forWhom.headline}</h2>
          <p className={`mt-6 ${prose} ${bodyText}`}>{forWhom.body}</p>
        </Section>

        {/* ── I.5 · Roadmap — NOT a shipping feature, keep future-tense ─ */}
        <Section tone="alt">
          <div className="max-w-[74ch] border border-rule bg-paper p-7 sm:p-9">
            <p className="font-mono text-[11px] tracking-[0.13em] text-ink-faint">
              {roadmap.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-[25px] leading-tight font-semibold sm:text-[31px]">
              {roadmap.headline}
            </h2>
            <p className={`mt-5 ${bodyText}`}>{roadmap.body}</p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{roadmap.election}</p>
            <p className="mt-6 border-t border-rule pt-4 font-mono text-[11.5px] leading-relaxed text-ink-faint">
              {roadmap.status}
            </p>
          </div>
        </Section>

        {/* ── J · The pilot ask ────────────────────────────────────── */}
        <section id="pilot" className="border-t border-rule bg-paper-2 py-16 sm:py-24">
          <div className={shell}>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
              <div>
                <p className={eyebrow}>THE PILOT</p>
                <h2 className={`${h2} mt-4 text-balance`}>{pilot.headline}</h2>
                <p className={`mt-6 ${bodyText}`}>{pilot.body}</p>
                {/* TODO: pilot testimonials once we have them */}
              </div>
              <div className="border border-rule bg-paper p-6 sm:p-8">
                <PilotForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── K · Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-rule py-14">
        <div className={shell}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Wordmark />
              <p className="mt-2 max-w-[42ch] text-[14.5px] text-ink-soft">
                {footer.descriptor}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
              <a href={cta.demoHref} className="text-accent">
                Workbench prototype
              </a>
              <a href={cta.secondaryHref} className="text-accent">
                Sample exhibit
              </a>
              <a href="#pilot" className="text-accent">
                {cta.primary}
              </a>
              {/* TODO: replace with the real contact address */}
              <a href={footer.contact} className="text-accent">
                Contact
              </a>
            </nav>
          </div>
          <p className="mt-10 max-w-[86ch] border-t border-rule pt-6 text-[12.5px] leading-relaxed text-ink-faint">
            {footer.disclaimer}
          </p>
        </div>
      </footer>
    </>
  );
}
