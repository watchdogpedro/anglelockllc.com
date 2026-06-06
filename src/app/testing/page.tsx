// src/app/testing/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing Data | AngleLock LLC",
  description: "AngleLock structural testing methodology — vertical, horizontal, tensile, moment, and torsion loading analysis.",
};

const tests = [
  { name: "Vertical Loading", description: "Bracket mounted to vertical profile with downward load applied. Measures structural capacity in the most common installation orientation." },
  { name: "Horizontal Loading", description: "Bracket mounted to horizontal profile with side load applied in standard and alternate directions. Tests lateral rigidity." },
  { name: "Tensile Loading", description: "Bracket mounted horizontally with axial load along the free profile. Validates the mechanical lock under pull-apart forces." },
  { name: "Moment about X-Axis", description: "Pure moment loading simulating door-like opening and closing forces. Tests rotational rigidity at the joint." },
  { name: "Moment about Y-Axis", description: "Pure moment parallel to the fixed profile, both clockwise and counterclockwise. Validates torsional joint integrity." },
  { name: "Torsion", description: "Pure moment about the Z-axis parallel with free profile, both clockwise and counterclockwise. Comprehensive torsion resistance analysis." },
];

export default function TestingPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">
            Proven Performance
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            TESTING DATA
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-silver-dim">
            AngleLock components and profiles are rigorously tested to prove every claim we make.
            Six test types cover the full range of real-world loading conditions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test) => (
            <div key={test.name} className="rounded-xl border border-border bg-surface p-6">
              <h2 className="mb-3 text-lg font-bold text-white">{test.name}</h2>
              <p className="text-sm leading-relaxed text-silver-dim">{test.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-accent/20 bg-surface p-8">
          <h2 className="mb-3 text-xl font-bold text-white">Request Testing Data</h2>
          <p className="mb-6 max-w-xl text-silver-dim">
            Specific load ratings, test reports, and static analysis documents are available upon request.
            Contact us with your application requirements.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="/contact" className="rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold text-white hover:bg-accent-bright">
              Contact Us
            </a>
            <a href="tel:2624218840" className="rounded-lg border border-border px-6 py-3 text-center text-sm text-silver-dim hover:text-white">
              (262) 421-8840
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
