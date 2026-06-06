// src/app/resources/literature/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Literature | AngleLock LLC",
  description: "Download AngleLock product PDFs, white papers, and technical documentation.",
};

const docs = [
  { title: "AngleLock vs T-Slots", type: "Product PDF", url: "https://anglelock.com/cdn/shop/files/AngleLock-vs-T-Slots.pdf" },
  { title: "Integrated Automation Enclosures", type: "Product PDF", url: "" },
  { title: "Precision Docking Carts", type: "Product PDF", url: "" },
  { title: "3-Way Corner Bracket", type: "Product PDF", url: "" },
  { title: "Dependable Doors", type: "Product PDF", url: "" },
  { title: "Reliable Replacement Doors", type: "Product PDF", url: "" },
  { title: "AngleLock vs T-Slots Static Analysis", type: "White Paper", url: "" },
  { title: "2025 AngleLock Catalog", type: "Full Catalog", url: "https://anglelock.com/cdn/shop/files/2025_AngleLock_Catalog_Final.pdf" },
];

export default function LiteraturePage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">Downloads</p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">LITERATURE</h1>
          <p className="mt-6 max-w-xl text-lg text-silver-dim">
            Technical documentation, white papers, and product PDFs.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {docs.map((doc) => (
            <div key={doc.title} className="flex items-center justify-between rounded-xl border border-border bg-surface p-5">
              <div>
                <p className="font-semibold text-white">{doc.title}</p>
                <p className="mt-1 text-xs text-silver-dim">{doc.type}</p>
              </div>
              {doc.url ? (
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${doc.title} (PDF)`}
                  className="ml-4 flex-shrink-0 rounded-lg border border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  Download
                </a>
              ) : (
                <a
                  href="/contact"
                  className="ml-4 flex-shrink-0 rounded-lg border border-border px-4 py-2 text-sm text-silver-dim hover:text-white"
                >
                  Contact Us
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
