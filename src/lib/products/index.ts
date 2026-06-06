// src/lib/products/index.ts
export * from './types'
export { profiles } from './profiles'
export { components } from './components'
export { hardware } from './hardware'
export { accessories } from './accessories'
export { doorsAndFloors } from './doors-and-floors'
export { motion } from './motion'

import { profiles } from './profiles'
import { components } from './components'
import { hardware } from './hardware'
import { accessories } from './accessories'
import { doorsAndFloors } from './doors-and-floors'
import { motion } from './motion'
import type { Product, ProductCategory } from './types'

export const ALL_PRODUCTS: Product[] = [
  ...profiles,
  ...components,
  ...hardware,
  ...accessories,
  ...doorsAndFloors,
  ...motion,
]

export const PRODUCTS_BY_CATEGORY: Record<ProductCategory, Product[]> = {
  profiles,
  components,
  hardware,
  accessories,
  'doors-and-floors': doorsAndFloors,
  motion,
}

export function getProduct(category: ProductCategory, slug: string): Product | undefined {
  return PRODUCTS_BY_CATEGORY[category]?.find(p => p.slug === slug)
}
