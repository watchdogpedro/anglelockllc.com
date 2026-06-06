// src/app/products/[category]/[slug]/page.tsx
import { notFound } from "next/navigation";
import ModelViewer from "@/components/ModelViewer";
import {
  PRODUCTS_BY_CATEGORY,
  CATEGORY_LABELS,
  getProduct,
} from "@/lib/products";
import type { ProductCategory } from "@/lib/products";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  for (const [category, products] of Object.entries(PRODUCTS_BY_CATEGORY)) {
    for (const product of products) {
      params.push({ category, slug: product.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProduct(category as ProductCategory, slug);
  if (!product) return {};
  return {
    title: `${product.name} | AngleLock LLC`,
    description: product.description,
  };
}

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='500' viewBox='0 0 600 500'%3E%3Crect width='600' height='500' fill='%23141414'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='16' fill='%238a8a8a' text-anchor='middle' dominant-baseline='middle'%3EImage Coming Soon%3C/text%3E%3C/svg%3E";

export default async function ProductDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const product = getProduct(category as ProductCategory, slug);
  if (!product) notFound();

  const categoryProducts = PRODUCTS_BY_CATEGORY[category as ProductCategory];
  const related = categoryProducts.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-silver-dim">
          <a href="/products" className="hover:text-accent">Products</a>
          <span>/</span>
          <a href={`/products/${category}`} className="hover:text-accent">
            {CATEGORY_LABELS[category as ProductCategory]}
          </a>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-xl border border-border bg-surface-light">
            <img
              src={product.imageUrl || PLACEHOLDER}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <p className="mb-3 text-sm tracking-[0.3em] text-accent uppercase">
              {CATEGORY_LABELS[category as ProductCategory]}
            </p>
            <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-silver-dim">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-bright"
              >
                Request a Quote
              </a>
              <a
                href="tel:2624218840"
                className="rounded-lg border border-border px-6 py-3 text-center text-sm font-semibold text-silver-dim transition-colors hover:border-accent hover:text-white"
              >
                Call (262) 421-8840
              </a>
            </div>

            {/* 3D Viewer */}
            <div className="mt-10">
              <h2 className="mb-4 text-lg font-bold text-white">3D Model</h2>
              <ModelViewer
                modelFile={product.modelFile}
                productName={product.name}
              />
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-8 text-2xl font-bold text-white">
              More in {CATEGORY_LABELS[category as ProductCategory]}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <a
                  key={p.slug}
                  href={`/products/${p.category}/${p.slug}`}
                  className="group rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent/40"
                >
                  <p className="text-sm font-semibold text-white group-hover:text-accent">
                    {p.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
