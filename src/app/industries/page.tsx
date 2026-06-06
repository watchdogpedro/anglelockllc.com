// src/app/industries/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries Served | AngleLock LLC",
  description: "AngleLock structural aluminum systems serve manufacturing, automation, aerospace, broadcast, healthcare, and more.",
};

const industries = [
  { name: "Manufacturing & Automation", description: "Machine guards, conveyor frames, robotic cells, and custom work cells engineered to withstand continuous vibration." },
  { name: "Aerospace & Defense", description: "Precision structural assemblies where alignment and vibration resistance are non-negotiable. Trusted by Boeing and major defense contractors." },
  { name: "Entertainment & Studios", description: "Broadcast studios, trade show displays, stage sets, and temporary event structures that assemble fast and hold rigid." },
  { name: "Education & Research", description: "Lab fixtures, test rigs, and educational equipment at institutions like MSOE that need reconfigurable precision structures." },
  { name: "Tool & Die / MRO", description: "Maintenance, repair, and tooling applications where Snap-on and similar brands demand structural reliability." },
  { name: "Food & Beverage", description: "Stainless-compatible assemblies with corrosion-resistant hardware for cleanroom and food-safe environments." },
  { name: "Healthcare", description: "Medical device frames and lab equipment requiring precise alignment and vibration damping." },
  { name: "Consumer Products", description: "Custom structures for retail, displays, and product development prototyping." },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">
            Where AngleLock Works
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            INDUSTRIES SERVED
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-silver-dim">
            Anywhere structural aluminum is used, AngleLock outperforms. Our patented mechanical
            locking system eliminates the failure modes that T-slot and steel alternatives accept as normal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-xl border border-border bg-surface p-6">
              <h2 className="mb-3 text-lg font-bold text-white">{ind.name}</h2>
              <p className="text-sm leading-relaxed text-silver-dim">{ind.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {[
            { client: "Boeing", detail: "Aerospace structural framing" },
            { client: "Disney", detail: "Studio & entertainment structures" },
            { client: "Snap-on", detail: "Tooling & MRO applications" },
            { client: "MSOE", detail: "Educational research equipment" },
            { client: "Milwaukee Tool", detail: "Manufacturing & automation" },
          ].map((logo) => (
            <div key={logo.client} className="w-full sm:w-64 rounded-xl border border-border bg-surface p-6 text-center">
              <p className="text-2xl font-black tracking-wide text-white">{logo.client}</p>
              <p className="mt-1 text-xs text-silver-dim">{logo.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
