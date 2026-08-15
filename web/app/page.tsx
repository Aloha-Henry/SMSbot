import Gate from "@/components/Gate";
import Wordmark from "@/components/Wordmark";
import PilotForm from "@/components/PilotForm";
import Reveal from "@/components/Reveal";
import Provenance from "@/components/Provenance";
import ThreadView from "@/components/ThreadView";
import PracticeVisual from "@/components/PracticeVisuals";
import { threads } from "@/content/threads";
import {
  cta,
  hero,
  problem,
  output,
  centerpiece,
  how,
  holds,
  protects,
  containment,
  gap,
  practice,
  pricing,
  forWhom,
  pilot,
  footer,
} from "@/content/copy";

/* Layout primitives. Copy lives in content/copy.ts — never inline here. */

const shell = "mx-auto w-full max-w-5xl px-5 sm:px-8";
const wide = "mx-auto w-full max-w-6xl px-5 sm:px-8";
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

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block border-b border-accent pb-0.5 text-[15px] font-medium text-accent"
    >
      {children}
    </a>
  );
}

function Section({
  id,
  children,
  tone = "paper",
  container = shell,
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "paper" | "alt";
  container?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-rule py-16 sm:py-24 ${tone === "alt" ? "bg-paper-2" : "bg-paper"}`}
    >
      <div className={container}>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Gate>
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
              <TextLink href={cta.secondaryHref}>{cta.secondary} &rarr;</TextLink>
            </div>
            {/* No rule numbers here — brief v2 §0.1. */}
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
              <div key={c.title} className="flex flex-col bg-paper p-6">
                <h3 className="font-serif text-[19px] font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13.5px] font-medium">
                  <a href={c.href} className="border-b border-accent pb-0.5 text-accent">
                    {output.sampleLink} &rarr;
                  </a>
                  <a href="#provenance" className="text-ink-faint">
                    {output.centerpieceLink} &darr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-11 max-w-[64ch] font-serif text-[21px] leading-[1.5] text-ink">
            {output.provenance}
          </p>
        </Section>

        {/* ── Centerpiece · provenance click-through ───────────────── */}
        <section id="provenance" className="border-t border-rule bg-paper-2 py-16 sm:py-24">
          <div className={wide}>
            <Reveal>
              <p className={eyebrow}>{centerpiece.eyebrow}</p>
              <h2 className={`${h2} mt-4 max-w-[22ch] text-balance`}>{centerpiece.headline}</h2>
              <p className={`mt-4 ${bodyText}`}>{centerpiece.sub}</p>
            </Reveal>
            <div className="mt-12">
              <Provenance />
            </div>
          </div>
        </section>

        {/* ── D · How it works ─────────────────────────────────────── */}
        <Section container={wide}>
          <p className={eyebrow}>THE THREE SURFACES</p>
          <h2 className={`${h2} mt-4 max-w-[24ch] text-balance`}>{how.headline}</h2>
          <p className={`mt-5 ${prose} ${bodyText}`}>{how.subhead}</p>

          <ol className="mt-11 grid gap-10 lg:grid-cols-3">
            {how.steps.map((s, i) => (
              <li key={s.title}>
                <span className="font-mono text-[11px] tracking-[0.1em] text-ink-faint">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-serif text-[19px] font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>

          {/* Threads A–D as the living illustration of step 1. */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {threads.map((t, i) => (
              <Reveal key={t.key} delay={i * 40}>
                <div>
                  <h4 className="font-serif text-[16px] font-semibold">{t.title}</h4>
                  <p className="mt-1 mb-3 text-[13.5px] leading-snug text-ink-soft">{t.caption}</p>
                  <ThreadView messages={t.messages} play />
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-11 max-w-[70ch] border-l-2 border-accent pl-5 text-[14.5px] leading-relaxed text-ink-soft">
            {how.disclosure}
          </p>

          <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
            <PrimaryCta />
            <TextLink href={cta.setupHref}>{cta.setup} &rarr;</TextLink>
            <TextLink href={cta.demoHref}>{cta.demo} &rarr;</TextLink>
          </div>
          <p className="mt-4 max-w-[62ch] font-mono text-[11.5px] leading-relaxed text-ink-faint">
            {cta.demoNote}
          </p>
        </Section>

        {/* ── E · Why it holds up ──────────────────────────────────── */}
        <Section tone="alt">
          <p className={eyebrow}>EVIDENCE ARCHITECTURE</p>
          <h2 className={`${h2} mt-4`}>{holds.headline}</h2>
          <p className={`mt-6 ${prose} ${bodyText}`}>{holds.body}</p>

          <p className="mt-9 max-w-[68ch] border border-accent bg-accent-soft p-6 font-serif text-[18px] leading-[1.55] text-ink">
            {holds.callout}
          </p>

          <p className={`mt-9 max-w-[68ch] ${bodyText}`}>{holds.jurisdiction}</p>

          <p className="mt-7 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <TextLink href={holds.certLink.href}>{holds.certLink.label} &rarr;</TextLink>
            <span className="text-[14px] text-ink-soft">{holds.certLink.note}</span>
          </p>

          <div className="mt-11 grid max-w-3xl gap-8 sm:grid-cols-2">
            {holds.columns.map((c) => (
              <div key={c.title} className="border-t-2 border-ink pt-4">
                <h3 className="font-serif text-[19px] font-semibold">{c.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── F · Why it protects the firm ─────────────────────────── */}
        <Section>
          <p className={eyebrow}>PRIVILEGE ARCHITECTURE</p>
          <h2 className={`${h2} mt-4`}>{protects.headline}</h2>
          <p className={`mt-6 ${prose} ${bodyText}`}>{protects.body}</p>
          <p className="mt-8 max-w-[68ch] border-l-2 border-accent pl-5 font-serif text-[18px] leading-[1.55] text-ink">
            {protects.honesty}
          </p>
          <p className={`mt-7 max-w-[68ch] ${bodyText}`}>{protects.closing}</p>
        </Section>

        {/* ── F.5 · Scope discipline ───────────────────────────────── */}
        <Section tone="alt">
          <p className={eyebrow}>{containment.eyebrow}</p>
          <h2 className={`${h2} mt-4 max-w-[20ch] text-balance`}>{containment.headline}</h2>
          <div className={`mt-6 ${prose} flex flex-col gap-5`}>
            <p className={bodyText}>{containment.body}</p>
            <p className={bodyText}>{containment.body2}</p>
          </div>
          <p className="mt-9 max-w-[64ch] border-l-2 border-accent pl-5 font-serif text-[19px] leading-[1.5] text-ink">
            {containment.pointed}
          </p>
        </Section>

        {/* ── G · Catch the gap ────────────────────────────────────── */}
        <Section>
          <p className={eyebrow}>SAFETY VALUE</p>
          <h2 className={`${h2} mt-4 max-w-[22ch] text-balance`}>{gap.headline}</h2>
          <p className={`mt-6 ${prose} ${bodyText}`}>{gap.body}</p>
        </Section>

        {/* ── H · What it looks like in practice ───────────────────── */}
        <Section tone="alt" container={wide}>
          <p className={eyebrow}>{practice.eyebrow}</p>
          <h2 className={`${h2} mt-4`}>{practice.headline}</h2>

          <div className="mt-11 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {practice.cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 40}>
                <div className="grid gap-5 sm:grid-cols-[1fr_minmax(0,240px)] sm:items-start">
                  <div>
                    <h3 className="font-serif text-[19px] font-semibold">{c.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{c.body}</p>
                  </div>
                  <PracticeVisual kind={c.visual} />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ── I · Pricing ──────────────────────────────────────────── */}
        <Section>
          <p className={eyebrow}>PRICING</p>
          <h2 className={`${h2} mt-4`}>{pricing.headline}</h2>
          <p className="mt-4 font-serif text-[21px] leading-snug text-ink">{pricing.subhead}</p>
          <p className={`mt-6 ${prose} ${bodyText}`}>{pricing.body}</p>
          <p className="mt-7 font-mono text-[11.5px] leading-relaxed text-ink-faint">
            {pricing.smallprint}
          </p>
        </Section>

        {/* ── J · Built narrow ─────────────────────────────────────── */}
        <Section tone="alt">
          <p className={eyebrow}>SCOPE</p>
          <h2 className={`${h2} mt-4`}>{forWhom.headline}</h2>
          <div className={`mt-6 ${prose} flex flex-col gap-5`}>
            <p className={bodyText}>{forWhom.body}</p>
            <p className={bodyText}>{forWhom.append}</p>
          </div>
        </Section>

        {/* ── K · The pilot ask ────────────────────────────────────── */}
        <section id="pilot" className="border-t border-rule py-16 sm:py-24">
          <div className={shell}>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
              <div>
                <p className={eyebrow}>THE PILOT</p>
                <h2 className={`${h2} mt-4 text-balance`}>{pilot.headline}</h2>
                <p className={`mt-6 ${bodyText}`}>{pilot.body}</p>
                {/* TODO: pilot testimonials once we have them */}
              </div>
              <div className="border border-rule bg-paper-2 p-6 sm:p-8">
                <PilotForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── L · Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-rule py-14">
        <div className={shell}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Wordmark />
              <p className="mt-2 max-w-[42ch] text-[14.5px] text-ink-soft">{footer.descriptor}</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
              <a href={cta.demoHref} className="text-accent">
                Workbench prototype
              </a>
              <a href={cta.secondaryHref} className="text-accent">
                Sample exhibits
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
    </Gate>
  );
}
