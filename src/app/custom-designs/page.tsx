// src/app/custom-designs/page.tsx
import { customDesigns } from "@/lib/custom-designs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Designs | AngleLock LLC",
  description: "AngleLock custom structural aluminum solutions — carts, cabinets, machine bases, workstations, studio applications, design services, and assembly.",
};

export default function CustomDesignsPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">
            Tailored Solutions
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            CUSTOM DESIGNS
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-silver-dim">
            AngleLock is lightweight, highly configurable, and engineered for repurposing.
            From quick-turn carts to complex machine bases — we design and build to your requirements.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {customDesigns.map((design) => (
            <div
              key={design.slug}
              id={design.slug}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h2 className="mb-3 text-xl font-bold text-white">{design.title}</h2>
              <p className="mb-4 text-sm font-medium text-silver-dim">{design.description}</p>
              <p className="text-sm leading-relaxed text-silver-dim/80">{design.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-accent/20 bg-surface p-8 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">Have a project in mind?</h2>
          <p className="mb-6 text-silver-dim">
            Our engineers will work with you from concept to production.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-bright"
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  );
}
