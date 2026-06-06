import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import {
  PRODUCTS_BY_CATEGORY,
  CATEGORY_LABELS,
  CATEGORY_DESCRIPTIONS,
} from "@/lib/products";
import type { ProductCategory } from "@/lib/products";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(PRODUCTS_BY_CATEGORY).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = category as ProductCategory;
  if (!PRODUCTS_BY_CATEGORY[cat]) return {};
  return {
    title: `${CATEGORY_LABELS[cat]} | AngleLock LLC`,
    description: CATEGORY_DESCRIPTIONS[cat],
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = category as ProductCategory;
  const products = PRODUCTS_BY_CATEGORY[cat];

  if (!products) notFound();

  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-4">
          <a href="/products" className="text-sm text-silver-dim hover:text-accent">
            ← All Products
          </a>
        </div>
        <div className="mb-12">
          <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">
            Product Category
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            {CATEGORY_LABELS[cat].toUpperCase()}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-silver-dim">
            {CATEGORY_DESCRIPTIONS[cat]}
          </p>
          <p className="mt-2 text-sm text-silver-dim">
            {products.length} products
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
