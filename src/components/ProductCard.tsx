import Link from "next/link";
import { CATEGORY_LABELS } from "@/lib/products";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23141414'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='14' fill='%238a8a8a' text-anchor='middle' dominant-baseline='middle'%3EImage Coming Soon%3C/text%3E%3C/svg%3E";

export default function ProductCard({ product, showCategory = false }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-light">
        <img
          src={product.imageUrl || PLACEHOLDER}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        {showCategory && (
          <p className="mb-1 text-xs tracking-wider text-accent uppercase">
            {CATEGORY_LABELS[product.category]}
          </p>
        )}
        <h3 className="text-sm font-semibold leading-snug text-white">
          {product.name}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-silver-dim line-clamp-2">
          {product.description}
        </p>
        <span className="mt-3 inline-block text-xs font-medium text-accent group-hover:underline">
          View Details →
        </span>
      </div>
    </Link>
  );
}
