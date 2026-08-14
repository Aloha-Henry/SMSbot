"use client";

import { useRouter } from "next/navigation";
import { formFields, cta, pilot } from "@/content/copy";

// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SWAP POINT — wire the pilot form to a real endpoint here.
// Replace submitPilotRequest with a fetch() to Formspree / your handler.
// Nothing else in the app needs to change.
//
// No database, no auth, no localStorage/sessionStorage anywhere (brief §2).
// ─────────────────────────────────────────────────────────────────────────────
async function submitPilotRequest(data: Record<string, string>): Promise<void> {
  // TODO: wire to real endpoint
  console.log("[pilot request]", data);
}

const label = "block font-mono text-[11px] tracking-[0.08em] text-ink-soft mb-1.5";
const field =
  "w-full rounded border border-rule bg-paper px-3 py-2.5 text-[15px] text-ink " +
  "placeholder:text-ink-faint focus:border-accent";

export default function PilotForm() {
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => {
      data[k] = String(v);
    });
    await submitPilotRequest(data);
    router.push("/thanks");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div>
        <label className={label} htmlFor="firm">
          FIRM NAME
        </label>
        <input id="firm" name="firm" className={field} required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            YOUR NAME
          </label>
          <input id="name" name="name" className={field} required />
        </div>
        <div>
          <label className={label} htmlFor="role">
            ROLE
          </label>
          <select id="role" name="role" className={field} defaultValue={formFields.roles[0]}>
            {formFields.roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="email">
          EMAIL
        </label>
        <input id="email" name="email" type="email" className={field} required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="states">
            STATE(S) YOU PRACTICE IN
          </label>
          <input id="states" name="states" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="caseload">
            APPROX. ACTIVE PI CASES
          </label>
          <select
            id="caseload"
            name="caseload"
            className={field}
            defaultValue={formFields.caseloads[1]}
          >
            {formFields.caseloads.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="cms">
          CURRENT CASE-MANAGEMENT SYSTEM <span className="text-ink-faint">(OPTIONAL)</span>
        </label>
        <input id="cms" name="cms" className={field} />
      </div>

      {/* Required as of brief v2 §6-K — this answer is the point of the form. */}
      <div>
        <label className={label} htmlFor="hardest">
          {formFields.openQuestion.toUpperCase()}
        </label>
        <textarea id="hardest" name="hardest" rows={4} className={field} required />
      </div>

      <div>
        <button
          type="submit"
          className="w-full rounded bg-accent px-6 py-3.5 text-[15px] font-semibold text-paper sm:w-auto"
        >
          {cta.primary}
        </button>
        <p className="mt-3 text-[14px] text-ink-soft">{pilot.reassurance}</p>
      </div>
    </form>
  );
}
