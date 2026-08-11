import Wordmark from "@/components/Wordmark";
import { thanks, footer } from "@/content/copy";

export const metadata = { title: "Thanks — PIRRA" };

export default function Thanks() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-rule">
        <div className="mx-auto w-full max-w-5xl px-5 py-5 sm:px-8">
          <a href="/">
            <Wordmark descriptor={footer.descriptor} />
          </a>
        </div>
      </header>

      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8">
          <h1 className="max-w-[16ch] font-serif text-[38px] leading-[1.1] font-semibold tracking-[-0.02em] text-balance sm:text-[52px]">
            {thanks.headline}
          </h1>
          <p className="mt-7 max-w-[58ch] text-[17px] leading-[1.65] text-ink-soft">
            {thanks.body}
          </p>
          <a href="/" className="mt-9 inline-block border-b border-accent pb-0.5 text-[15px] font-medium text-accent">
            &larr; Back
          </a>
        </div>
      </main>

      <footer className="border-t border-rule py-10">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <p className="max-w-[86ch] text-[12.5px] leading-relaxed text-ink-faint">
            {footer.disclaimer}
          </p>
        </div>
      </footer>
    </div>
  );
}
