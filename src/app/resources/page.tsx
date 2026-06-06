// src/app/resources/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | AngleLock LLC",
  description: "AngleLock resources — technical literature, videos, testing data, and installation guides.",
};

const resources = [
  { title: "Literature", description: "Product PDFs, white papers, and technical documentation.", href: "/resources/literature", icon: "📄" },
  { title: "Videos", description: "Installation guides, product demos, and application showcases.", href: "/videos", icon: "▶" },
  { title: "Testing Data", description: "Load testing methodology and structural analysis.", href: "/testing", icon: "⚗" },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">Technical Resources</p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">RESOURCES</h1>
          <p className="mt-6 max-w-xl text-lg text-silver-dim">
            Everything you need to specify, install, and get the most from AngleLock systems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <Link key={r.href} href={r.href} className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/40">
              <div className="mb-4 text-3xl">{r.icon}</div>
              <h2 className="text-xl font-bold text-white">{r.title}</h2>
              <p className="mt-2 text-sm text-silver-dim">{r.description}</p>
              <span className="mt-4 inline-block text-sm text-accent group-hover:underline">Explore →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
