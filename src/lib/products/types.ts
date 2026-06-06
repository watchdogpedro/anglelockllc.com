export type ProductCategory =
  | 'profiles'
  | 'components'
  | 'hardware'
  | 'accessories'
  | 'doors-and-floors'
  | 'motion'

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  profiles: 'Profiles',
  components: 'Components',
  hardware: 'Hardware',
  accessories: 'Accessories',
  'doors-and-floors': 'Doors & Floors',
  motion: 'Motion',
}

export const CATEGORY_DESCRIPTIONS: Record<ProductCategory, string> = {
  profiles: 'Structural aluminum extrusion profiles',
  components: 'Brackets, plates, corner inserts and joining components',
  hardware: 'Nuts, studs, bolts and fastening hardware',
  accessories: 'End caps, cable management and finishing accessories',
  'doors-and-floors': 'Hinges, casters, floor panels and door hardware',
  motion: 'Pivot joints, roller carriages and motion hardware',
}

export interface Product {
  slug: string
  name: string
  category: ProductCategory
  description: string
  imageUrl: string
  modelFile?: string  // Phase 2: path to .eprt file
}
