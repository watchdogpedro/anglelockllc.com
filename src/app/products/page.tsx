// src/app/products/page.tsx

import Link from "next/link";
import { PRODUCTS_BY_CATEGORY, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS } from "@/lib/products";
import type { ProductCategory } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | AngleLock LLC",
  description: "Browse AngleLock's complete product catalog — profiles, components, hardware, accessories, doors & floors, and motion systems.",
};

const CATEGORY_ICONS: Record<ProductCategory, string> = {
  profiles: "▬",
  components: "◈",
  hardware: "⬡",
  accessories: "◻",
  "doors-and-floors": "◫",
  motion: "⟳",
};

export default function ProductsPage() {
  const categories = Object.keys(PRODUCTS_BY_CATEGORY) as ProductCategory[];

  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">
            Complete Product Catalog
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            STRUCTURAL ALUMINUM
            <br />
            <span className="text-gradient">COMPONENTS</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-silver-dim">
            Every component in the AngleLock system is engineered to work together.
            Patented mechanical locking delivers 7x the strength of T-slot alternatives.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/products/${cat}`}
              className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/40 hover:bg-surface-light"
            >
              <div className="mb-4 text-3xl text-accent">{CATEGORY_ICONS[cat]}</div>
              <h2 className="text-xl font-bold text-white">{CATEGORY_LABELS[cat]}</h2>
              <p className="mt-2 text-sm text-silver-dim">{CATEGORY_DESCRIPTIONS[cat]}</p>
              <p className="mt-4 text-xs text-silver-dim">
                {PRODUCTS_BY_CATEGORY[cat].length} products
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
                Browse {CATEGORY_LABELS[cat]} →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
