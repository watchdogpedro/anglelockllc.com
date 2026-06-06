# AngleLock LLC — Full Content Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate all content from anglelock.com into anglelockllc.com, keeping the existing dark industrial theme and every existing feature intact.

**Architecture:** Product data lives in TypeScript files in `src/lib/products/`. Pages use Next.js App Router dynamic routes (`/products/[category]` and `/products/[category]/[slug]`). Images reference anglelock.com's existing CDN URLs directly — no re-hosting.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS v4, Lucide React

---

## File Map

**Create:**
- `src/lib/products/types.ts` — shared interfaces
- `src/lib/products/profiles.ts` — 24 profiles
- `src/lib/products/components.ts` — 46 components
- `src/lib/products/hardware.ts` — 27 hardware items
- `src/lib/products/accessories.ts` — 17 accessories
- `src/lib/products/doors-and-floors.ts` — 51 door/floor products
- `src/lib/products/motion.ts` — 12 motion products
- `src/lib/products/index.ts` — re-exports + helpers
- `src/lib/custom-designs.ts` — 7 custom design categories
- `src/components/ProductCard.tsx` — reusable product card
- `src/components/ModelViewer.tsx` — Phase 2 placeholder
- `src/components/DropdownNav.tsx` — desktop dropdown nav
- `src/app/products/page.tsx` — products overview
- `src/app/products/[category]/page.tsx` — category listing
- `src/app/products/[category]/[slug]/page.tsx` — product detail
- `src/app/custom-designs/page.tsx` — custom designs overview
- `src/app/industries/page.tsx`
- `src/app/testing/page.tsx`
- `src/app/resources/page.tsx`
- `src/app/resources/literature/page.tsx`

**Modify:**
- `src/components/Navigation.tsx` — full dropdown nav
- `src/components/Footer.tsx` — add product links column
- `src/app/page.tsx` — add client logos + category grid sections
- `src/app/about/page.tsx` — add patents section
- `next.config.ts` — add Shopify CDN to allowed image domains

---

### Task 1: Product types + next.config image domains

**Files:**
- Create: `src/lib/products/types.ts`
- Modify: `next.config.ts`

- [ ] **Step 1: Create the types file**

```ts
// src/lib/products/types.ts
export type ProductCategory =
  | 'profiles'
  | 'components'
  | 'hardware'
  | 'accessories'
  | 'doors-and-floors'
  | 'motion'

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  'profiles': 'Profiles',
  'components': 'Components',
  'hardware': 'Hardware',
  'accessories': 'Accessories',
  'doors-and-floors': 'Doors & Floors',
  'motion': 'Motion',
}

export const CATEGORY_DESCRIPTIONS: Record<ProductCategory, string> = {
  'profiles': 'Structural aluminum extrusion profiles in 40mm and 80mm series.',
  'components': 'Corner brackets, joining plates, threaded inserts, and rivet kits.',
  'hardware': 'Angle nuts, drop-in studs, standard nuts, washers, and fasteners.',
  'accessories': 'End caps, profile supports, snap-in wireways, and cable management.',
  'doors-and-floors': 'Hinges, panel retainers, casters, leveling feet, door seals, and panels.',
  'motion': 'Roller brackets, pivot brackets, and roller carriage kits.',
}

export interface Product {
  slug: string
  name: string
  category: ProductCategory
  description: string
  imageUrl: string
  modelFile?: string  // Phase 2: path to .eprt file e.g. '/models/40x40-4-slot-hd-profile.eprt'
}
```

- [ ] **Step 2: Allow Shopify CDN images in next.config.ts**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd /Users/pauldenman/anglelockllc.com && npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 4: Commit**

```bash
cd /Users/pauldenman/anglelockllc.com
git add src/lib/products/types.ts next.config.ts
git commit -m "feat: add product types and Shopify CDN image config"
```

---

### Task 2: Profiles data file

**Files:**
- Create: `src/lib/products/profiles.ts`

- [ ] **Step 1: Create profiles data**

```ts
// src/lib/products/profiles.ts
import type { Product } from './types'

export const profiles: Product[] = [
  { slug: '20x40-1-slot-double-flange', name: '20x40 1-Slot Double Flange Profile', category: 'profiles', description: 'Double flange configuration for 20x40 dimension structural framing.', imageUrl: 'https://anglelock.com/cdn/shop/products/20x40-1-slot-double-flange.png' },
  { slug: '20x40-1-slot-single-flange', name: '20x40 1-Slot Single Flange Profile', category: 'profiles', description: 'Single flange design in 20x40 size.', imageUrl: '' },
  { slug: '20x120-3-slot-ld-panel', name: '20x120 3-Slot LD Panel Profile', category: 'profiles', description: 'Light-duty panel profile, 3-slot configuration.', imageUrl: '' },
  { slug: '40x40-4-slot-hd', name: '40x40 4-Slot HD Profile', category: 'profiles', description: 'Heavy-duty 4-slot square profile for high-load structural framing.', imageUrl: '' },
  { slug: '40x40-4-slot-sd', name: '40x40 4-Slot SD Profile', category: 'profiles', description: 'Standard-duty 4-slot square profile.', imageUrl: '' },
  { slug: '40x40-3-slot-sd', name: '40x40 3-Slot SD Profile', category: 'profiles', description: 'Standard-duty 3-slot square profile.', imageUrl: '' },
  { slug: '40x40-3-slot-single-flange-sd', name: '40x40 3-Slot Single Flange SD Profile', category: 'profiles', description: 'Single flange, standard-duty configuration.', imageUrl: '' },
  { slug: '40x40-2-slot-90deg', name: '40x40 2-Slot 90° Profile', category: 'profiles', description: 'Right-angle corner profile with 2 slots.', imageUrl: '' },
  { slug: '40x40-2-slot-180deg-sd', name: '40x40 2-Slot 180° SD Profile', category: 'profiles', description: 'Opposing slot configuration, standard-duty.', imageUrl: '' },
  { slug: '40x80-6-slot-hd', name: '40x80 6-Slot HD Profile', category: 'profiles', description: 'Heavy-duty rectangular profile for demanding applications.', imageUrl: '' },
  { slug: '40x80-3-slot-90deg-sd', name: '40x80 3-Slot 90° SD Profile', category: 'profiles', description: 'Corner profile, standard-duty.', imageUrl: '' },
  { slug: '40x120-8-slot-sd', name: '40x120 8-Slot SD Profile', category: 'profiles', description: 'Extended rectangular profile, standard-duty.', imageUrl: '' },
  { slug: '40x120-4-slot-90deg-sd', name: '40x120 4-Slot 90° SD Profile', category: 'profiles', description: 'Corner configuration, standard-duty.', imageUrl: '' },
  { slug: '50x80-4-slot-single-flange-ld', name: '50x80 4-Slot Single Flange LD Profile', category: 'profiles', description: 'Light-duty with single flange.', imageUrl: '' },
  { slug: '55x55-3-slot-45deg-sd-outside-corner', name: '55x55 3-Slot 45° SD Outside Corner Profile', category: 'profiles', description: '45-degree outside corner profile.', imageUrl: '' },
  { slug: '70x70-3-slot-3-way-corner', name: '70x70 3-Slot 3-Way Corner Profile', category: 'profiles', description: 'Three-way corner junction profile.', imageUrl: '' },
  { slug: '70x70-3-slot-3-way-inset-panel', name: '70x70 3-Slot 3-Way Inset Panel Profile', category: 'profiles', description: 'Three-way with inset panel capability.', imageUrl: '' },
  { slug: '70x70-1-slot-3-way-corner', name: '70x70 1-Slot 3-Way Corner Profile', category: 'profiles', description: 'Single-slot three-way corner.', imageUrl: '' },
  { slug: '80x80-8-slot-hd', name: '80x80 8-Slot HD Profile', category: 'profiles', description: 'Heavy-duty large square profile.', imageUrl: '' },
  { slug: '80x120-10-slot-ld', name: '80x120 10-Slot LD Profile', category: 'profiles', description: 'Light-duty extended profile.', imageUrl: '' },
  { slug: '80x120-10-slot-sd', name: '80x120 10-Slot SD Profile', category: 'profiles', description: 'Standard-duty extended profile.', imageUrl: '' },
  { slug: '90x90-4-slot-inside-corner-sd', name: '90x90 4-Slot Inside Corner SD Profile', category: 'profiles', description: 'Inside corner configuration.', imageUrl: '' },
  { slug: '40mm-hand-rail-ld', name: '40mm Hand Rail LD Profile', category: 'profiles', description: 'Light-duty handrail application profile.', imageUrl: '' },
  { slug: '80mm-2-slot-threshold', name: '80mm 2-Slot Threshold Profile', category: 'profiles', description: 'Threshold and transition profile.', imageUrl: '' },
]
```

- [ ] **Step 2: Verify**

```bash
cd /Users/pauldenman/anglelockllc.com && npx tsc --noEmit
```
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/lib/products/profiles.ts
git commit -m "feat: add profiles product data (24 products)"
```

---

### Task 3: Components data file

**Files:**
- Create: `src/lib/products/components.ts`

- [ ] **Step 1: Create components data**

```ts
// src/lib/products/components.ts
import type { Product } from './types'

export const components: Product[] = [
  { slug: '80mm-universal-butt-joint-joining-plate-kit', name: '80mm Universal Butt Joint Joining Plate Kit', category: 'components', description: 'Universal butt joint plate kit for 80mm profiles.', imageUrl: '' },
  { slug: '40mm-3-way-corner-bracket-kit', name: '40mm 3-Way Corner Bracket Kit', category: 'components', description: 'Three-way corner bracket kit for 40mm profiles.', imageUrl: '' },
  { slug: '40mm-3-way-recessed-corner-bracket-kit-left', name: '40mm 3-Way Recessed Corner Bracket Kit - Left', category: 'components', description: 'Left-hand recessed 3-way corner bracket.', imageUrl: '' },
  { slug: '40mm-3-way-recessed-corner-bracket-kit-right', name: '40mm 3-Way Recessed Corner Bracket Kit - Right', category: 'components', description: 'Right-hand recessed 3-way corner bracket.', imageUrl: '' },
  { slug: '80mm-3-way-corner-bracket-kit', name: '80mm 3-Way Corner Bracket Kit', category: 'components', description: 'Three-way corner bracket kit for 80mm profiles.', imageUrl: '' },
  { slug: '80mm-3-way-recessed-corner-bracket-kit-left', name: '80mm 3-Way Recessed Corner Bracket Kit - Left', category: 'components', description: 'Left-hand recessed 3-way corner bracket for 80mm.', imageUrl: '' },
  { slug: '80mm-3-way-recessed-corner-bracket-kit-right', name: '80mm 3-Way Recessed Corner Bracket Kit - Right', category: 'components', description: 'Right-hand recessed 3-way corner bracket for 80mm.', imageUrl: '' },
  { slug: '80mm-90deg-3-way-corner-bracket-kit-left', name: '80mm 90° 3-Way Corner Bracket Kit - Left', category: 'components', description: 'Left-hand 90-degree 3-way corner bracket for 80mm.', imageUrl: '' },
  { slug: '80mm-90deg-3-way-corner-bracket-kit-right', name: '80mm 90° 3-Way Corner Bracket Kit - Right', category: 'components', description: 'Right-hand 90-degree 3-way corner bracket for 80mm.', imageUrl: '' },
  { slug: '40mm-sd-corner-bracket-kit', name: '40mm SD Corner Bracket Kit', category: 'components', description: 'Standard-duty corner bracket kit for 40mm profiles.', imageUrl: '' },
  { slug: '40mm-sd-panel-mount-corner-bracket-kit', name: '40mm SD Panel Mount Corner Bracket Kit', category: 'components', description: 'Standard-duty panel mount corner bracket for 40mm.', imageUrl: '' },
  { slug: '80mm-md-corner-bracket-kit', name: '80mm MD Corner Bracket Kit', category: 'components', description: 'Medium-duty corner bracket kit for 80mm profiles.', imageUrl: '' },
  { slug: '40mm-hd-corner-bracket-kit', name: '40mm HD Corner Bracket Kit', category: 'components', description: 'Heavy-duty corner bracket kit for 40mm profiles.', imageUrl: '' },
  { slug: '90deg-3x3-hole-joining-plate-kit', name: '90° 3x3 Hole Joining Plate Kit', category: 'components', description: '90-degree joining plate with 3x3 hole pattern.', imageUrl: '' },
  { slug: '40mm-sd-butt-joint-joining-plate', name: '40mm SD Butt Joint Joining Plate', category: 'components', description: 'Standard-duty butt joint plate for 40mm profiles.', imageUrl: '' },
  { slug: '40mm-hd-butt-joint-joining-plate-kit', name: '40mm HD Butt Joint Joining Plate Kit', category: 'components', description: 'Heavy-duty butt joint plate kit for 40mm profiles.', imageUrl: '' },
  { slug: '80mm-sd-butt-joint-joining-plate', name: '80mm SD Butt Joint Joining Plate', category: 'components', description: 'Standard-duty butt joint plate for 80mm profiles.', imageUrl: '' },
  { slug: '80mm-hd-butt-joint-joining-plate', name: '80mm HD Butt Joint Joining Plate', category: 'components', description: 'Heavy-duty butt joint plate for 80mm profiles.', imageUrl: '' },
  { slug: '40-6-standard-threaded-insert-kit', name: '40-6 Standard Threaded Insert Kit', category: 'components', description: 'Patented threaded insert kit for 40-6 slot profiles.', imageUrl: '' },
  { slug: '40-6-standard-double-threaded-insert-kit', name: '40-6 Standard Double Threaded Insert Kit', category: 'components', description: 'Double threaded insert kit for 40-6 slot profiles.', imageUrl: '' },
  { slug: '40-6-standard-threaded-insert-20deg-angle-kit', name: '40-6 Standard Threaded Insert - 20° Angle Kit', category: 'components', description: '20-degree angled threaded insert for 40-6 profiles.', imageUrl: '' },
  { slug: '40-6-standard-threaded-insert-kit-w-drop-in-nut-kit', name: '40-6 Standard Threaded Insert Kit W/ Drop-in Nut Kit', category: 'components', description: 'Threaded insert kit with drop-in nut included.', imageUrl: '' },
  { slug: '40-6-end-mount-threaded-insert', name: '40-6 End Mount Threaded Insert', category: 'components', description: 'End mount variant of the patented threaded insert.', imageUrl: '' },
  { slug: '40mm-sd-perpendicular-corner-bracket-kit', name: '40mm SD Perpendicular Corner Bracket Kit', category: 'components', description: 'Standard-duty perpendicular corner bracket for 40mm.', imageUrl: '' },
  { slug: '80mm-hd-perpendicular-bracket-kit', name: '80mm HD Perpendicular Bracket Kit', category: 'components', description: 'Heavy-duty perpendicular bracket for 80mm profiles.', imageUrl: '' },
  { slug: '80mm-hd-parallel-corner-bracket-kit', name: '80mm HD Parallel Corner Bracket Kit', category: 'components', description: 'Heavy-duty parallel corner bracket for 80mm profiles.', imageUrl: '' },
  { slug: '40mm-universal-perpendicular-bracket-kit', name: '40mm Universal Perpendicular Bracket Kit', category: 'components', description: 'Universal perpendicular bracket for 40mm profiles.', imageUrl: '' },
  { slug: '40mm-sd-universal-corner-bracket-kit', name: '40mm SD Universal Corner Bracket Kit', category: 'components', description: 'Standard-duty universal corner bracket for 40mm.', imageUrl: '' },
  { slug: '80mm-md-custom-universal-corner-bracket-kit', name: '80mm MD Custom Universal Corner Bracket Kit', category: 'components', description: 'Medium-duty custom universal corner bracket for 80mm.', imageUrl: '' },
  { slug: '40mm-end-mount-adjustable-angle-bracket-kit', name: '40mm End Mount Adjustable Angle Bracket Kit', category: 'components', description: 'Adjustable angle bracket with end mount configuration.', imageUrl: '' },
  { slug: '40mm-adjustable-angle-bracket-offset-profile-mount-kit', name: '40mm Adjustable Angle Bracket Offset Profile Mount Kit', category: 'components', description: 'Adjustable angle bracket with offset profile mount.', imageUrl: '' },
  { slug: '40mm-adjustable-angle-bracket-offset-profile-to-end-mount-kit', name: '40mm Adjustable Angle Bracket Offset Profile to End Mount Kit', category: 'components', description: 'Adjustable angle bracket from offset profile to end mount.', imageUrl: '' },
  { slug: '40mm-adjustable-angle-bracket-profile-to-end-mount-kit', name: '40mm Adjustable Angle Bracket Profile to End Mount Kit', category: 'components', description: 'Adjustable angle bracket from profile to end mount.', imageUrl: '' },
  { slug: '40mm-adjustable-angle-bracket-profile-offset-profile-mount-kit', name: '40mm Adjustable Angle Bracket Profile/Offset Profile Mount Kit', category: 'components', description: 'Adjustable angle bracket profile and offset profile mount.', imageUrl: '' },
  { slug: '40mm-adjustable-angle-plate-kit-left', name: '40mm Adjustable Angle Plate Kit - Left', category: 'components', description: 'Left-hand adjustable angle plate kit.', imageUrl: '' },
  { slug: '40mm-adjustable-angle-plate-kit-right', name: '40mm Adjustable Angle Plate Kit - Right', category: 'components', description: 'Right-hand adjustable angle plate kit.', imageUrl: '' },
  { slug: '27mm-angle-rivet-kit', name: 'Ø27mm Angle Rivet Kit', category: 'components', description: '27mm diameter angle rivet kit.', imageUrl: '' },
  { slug: '27x20mm-standard-rivet-kit', name: 'Ø27x20mm Standard Rivet Kit', category: 'components', description: '27x20mm standard rivet assembly kit.', imageUrl: '' },
  { slug: '27mm-25in-universal-angle-rivet-kit', name: 'Ø27mm .25in Universal Angle Rivet Kit', category: 'components', description: '27mm universal angle rivet kit, 0.25 inch.', imageUrl: '' },
  { slug: '27mm-375in-universal-angle-rivet-kit', name: 'Ø27mm .375in Universal Angle Rivet Kit', category: 'components', description: '27mm universal angle rivet kit, 0.375 inch.', imageUrl: '' },
  { slug: '40mm-compound-angle-bracket', name: '40mm Compound Angle Bracket', category: 'components', description: 'Compound angle bracket for complex joint configurations.', imageUrl: '' },
  { slug: '40mm-compound-angle-bracket-kit', name: '40mm Compound Angle Bracket Kit', category: 'components', description: 'Complete compound angle bracket kit for 40mm profiles.', imageUrl: '' },
  { slug: '75mm-2-hole-rivet-plate', name: '75mm 2-Hole Rivet Plate', category: 'components', description: '75mm flat rivet plate with 2-hole pattern.', imageUrl: '' },
  { slug: '150mm-2-hole-rivet-plate', name: '150mm 2-Hole Rivet Plate', category: 'components', description: '150mm flat rivet plate with 2-hole pattern.', imageUrl: '' },
  { slug: '300mm-2-hole-rivet-plate', name: '300mm 2-Hole Rivet Plate', category: 'components', description: '300mm flat rivet plate with 2-hole pattern.', imageUrl: '' },
  { slug: 'custom-2-hole-rivet-plates', name: 'Custom 2-Hole Rivet Plates', category: 'components', description: 'Custom length rivet plates — contact for sizing.', imageUrl: '' },
]
```

- [ ] **Step 2: Verify**

```bash
cd /Users/pauldenman/anglelockllc.com && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/products/components.ts
git commit -m "feat: add components product data (46 products)"
```

---

### Task 4: Hardware + Accessories data files

**Files:**
- Create: `src/lib/products/hardware.ts`
- Create: `src/lib/products/accessories.ts`

- [ ] **Step 1: Create hardware data**

```ts
// src/lib/products/hardware.ts
import type { Product } from './types'

export const hardware: Product[] = [
  { slug: 'm4x07-20mm-1-hole-offset-std-nut', name: 'M4x0.7 20mm 1-Hole Offset Std Nut', category: 'hardware', description: 'Offset standard nut, M4x0.7 thread, 20mm length.', imageUrl: '' },
  { slug: '1-4-20-20mm-1-hole-offset-std-nut', name: '1/4-20 20mm 1-Hole Offset Std Nut', category: 'hardware', description: 'Imperial thread standard offset nut, 1/4-20.', imageUrl: '' },
  { slug: 'm5x08-20mm-1-hole-std-offset-nut', name: 'M5x0.8 20mm 1-Hole Std Offset Nut', category: 'hardware', description: 'M5x0.8 offset nut variant, 20mm.', imageUrl: '' },
  { slug: 'm6x10-20mm-1-hole-std-offset-nut', name: 'M6x1.0 20mm 1-Hole Std Offset Nut', category: 'hardware', description: 'Single-hole offset nut, M6x1.0, 20mm.', imageUrl: '' },
  { slug: 'm6x10-39mm-2-hole-std-nut', name: 'M6x1.0 39mm 2-Hole Std Nut', category: 'hardware', description: 'Two-hole standard straight nut, M6x1.0, 39mm.', imageUrl: '' },
  { slug: 'm8x125-25mm-1-hole-std-offset-nut', name: 'M8x1.25 25mm 1-Hole Std Offset Nut', category: 'hardware', description: 'Larger diameter offset nut, M8x1.25.', imageUrl: '' },
  { slug: 'm6x10x25mm-109-drop-in-t-stud', name: 'M6x1.0x25mm 10.9 Drop-In T-Stud', category: 'hardware', description: 'Grade 10.9 T-stud drop-in assembly kit, M6x1.0x25mm.', imageUrl: '' },
  { slug: 'm6x10-109-drop-in-nut', name: 'M6x1.0 10.9 Drop-In Nut', category: 'hardware', description: 'Grade 10.9 drop-in nut kit, M6x1.0.', imageUrl: '' },
  { slug: 'm8x125x25mm-109-drop-in-t-stud', name: 'M8x1.25x25mm 10.9 Drop-In T-Stud', category: 'hardware', description: 'Larger T-stud assembly kit, M8x1.25x25mm grade 10.9.', imageUrl: '' },
  { slug: 'm6x10-25mm-1-hole-angle-nut', name: 'M6x1.0 25mm 1-Hole Angle Nut', category: 'hardware', description: 'AngleLock fastening system angle nut, 25mm single-hole.', imageUrl: '' },
  { slug: 'm6x10-38mm-1-hole-angle-nut', name: 'M6x1.0 38mm 1-Hole Angle Nut', category: 'hardware', description: 'Extended 1-hole angle nut, M6x1.0, 38mm.', imageUrl: '' },
  { slug: 'm6x10-38mm-2-hole-angle-nut', name: 'M6x1.0 38mm 2-Hole Angle Nut', category: 'hardware', description: 'Two-hole 38mm angle nut, M6x1.0.', imageUrl: '' },
  { slug: 'm6x10-44mm-2-hole-angle-nut', name: 'M6x1.0 44mm 2-Hole Angle Nut', category: 'hardware', description: 'Two-hole 44mm angle nut configuration.', imageUrl: '' },
  { slug: 'm6x10-60mm-2-hole-angle-nut', name: 'M6x1.0 60mm 2-Hole Angle Nut', category: 'hardware', description: 'Longer 2-hole angle nut, M6x1.0, 60mm.', imageUrl: '' },
  { slug: 'm6x10-79mm-2-hole-angle-nut', name: 'M6x1.0 79mm 2-Hole Angle Nut', category: 'hardware', description: 'Extended 2-hole angle nut variant, 79mm.', imageUrl: '' },
  { slug: 'm6x10-78mm-3-hole-angle-nut', name: 'M6x1.0 78mm 3-Hole Angle Nut', category: 'hardware', description: 'Three-hole configuration angle nut, 78mm.', imageUrl: '' },
  { slug: 'm6x10-100mm-3-hole-angle-nut', name: 'M6x1.0 100mm 3-Hole Angle Nut', category: 'hardware', description: 'Larger 3-hole angle nut, 100mm.', imageUrl: '' },
  { slug: '3-way-corner-bracket-washer-plate', name: '3-Way Corner Bracket Washer Plate', category: 'hardware', description: 'Washer plate assembly for 3-way corner brackets.', imageUrl: '' },
  { slug: '3-way-corner-bracket-plate-kit-50mm', name: '3-Way Corner Bracket Plate Kit 50mm SHCS', category: 'hardware', description: '50mm socket head cap screw bracket plate kit.', imageUrl: '' },
  { slug: '3-way-corner-bracket-plate-kit-55mm', name: '3-Way Corner Bracket Plate Kit 55mm SHCS', category: 'hardware', description: '55mm socket head cap screw bracket plate kit.', imageUrl: '' },
  { slug: '3-way-corner-bracket-plate-kit-65mm', name: '3-Way Corner Bracket Plate Kit 65mm SHCS', category: 'hardware', description: '65mm socket head cap screw bracket plate kit.', imageUrl: '' },
  { slug: 'm6-washer', name: 'M6 Washer', category: 'hardware', description: 'M6 metric washer, bright zinc plated.', imageUrl: '' },
  { slug: 'm8-washer', name: 'M8 Washer', category: 'hardware', description: 'M8 metric washer, bright zinc plated.', imageUrl: '' },
  { slug: 'm6x10-109-flange-nut', name: 'M6x1.0 10.9 Flange Nut', category: 'hardware', description: 'Grade 10.9 flanged nut, M6x1.0.', imageUrl: '' },
  { slug: 'm6x10-109-nylon-insert-flange-locknut', name: 'M6x1.0 10.9 Nylon-Insert Flange Locknut', category: 'hardware', description: 'Grade 10.9 flanged locknut with nylon insert.', imageUrl: '' },
  { slug: 'm8x125-109-flange-nut', name: 'M8x1.25 10.9 Flange Nut', category: 'hardware', description: 'Larger grade 10.9 flanged nut, M8x1.25.', imageUrl: '' },
  { slug: 'm6x10x20mm-129-flanged-shcs', name: 'M6x1.0x20mm 12.9 Flanged SHCS', category: 'hardware', description: 'Grade 12.9 flanged socket head cap screw, M6x1.0x20mm.', imageUrl: '' },
]
```

- [ ] **Step 2: Create accessories data**

```ts
// src/lib/products/accessories.ts
import type { Product } from './types'

export const accessories: Product[] = [
  { slug: '40x40-end-cap-black', name: '40x40 End Cap - Black', category: 'accessories', description: 'Compact end cap for 40x40 profiles, black.', imageUrl: '' },
  { slug: '40x80-end-cap-black', name: '40x80 End Cap - Black', category: 'accessories', description: 'End cap sized for 40x80 profile dimensions, black.', imageUrl: '' },
  { slug: '40x120-end-cap-kit-black', name: '40x120 End Cap Kit - Black', category: 'accessories', description: 'Kit-form end cap for 40x120 profiles, black.', imageUrl: '' },
  { slug: '40mm-hand-rail-end-cap-kit-black', name: '40mm Hand Rail End Cap Kit - Black', category: 'accessories', description: 'Specialized end cap kit designed for 40mm hand rail.', imageUrl: '' },
  { slug: '50x80-single-flange-end-cap-lh-kit-black', name: '50x80 Single Flange End Cap LH Kit - Black', category: 'accessories', description: 'Left-hand single flange end cap kit for 50x80 profiles.', imageUrl: '' },
  { slug: '50x80-single-flange-end-cap-rh-kit-black', name: '50x80 Single Flange End Cap RH Kit - Black', category: 'accessories', description: 'Right-hand single flange end cap kit for 50x80 profiles.', imageUrl: '' },
  { slug: '55x55-end-cap-kit-black', name: '55x55 End Cap Kit - Black', category: 'accessories', description: 'End cap kit for 55x55 profile dimensions.', imageUrl: '' },
  { slug: '70x70-end-cap-kit-black', name: '70x70 End Cap Kit - Black', category: 'accessories', description: 'End cap kit sized for 70x70 profiles.', imageUrl: '' },
  { slug: '80x80-end-cap-kit-black', name: '80x80 End Cap Kit - Black', category: 'accessories', description: 'End cap kit for 80x80 profile configurations.', imageUrl: '' },
  { slug: '80x120-end-cap-kit-black', name: '80x120 End Cap Kit - Black', category: 'accessories', description: 'End cap kit for 80x120 profiles.', imageUrl: '' },
  { slug: '90x90-end-cap-kit-black', name: '90x90 End Cap Kit - Black', category: 'accessories', description: 'End cap kit for 90x90 profile dimensions.', imageUrl: '' },
  { slug: '40mm-profile-support', name: '40mm Profile Support', category: 'accessories', description: 'Bracket support member for 40mm profiles.', imageUrl: '' },
  { slug: '80mm-profile-support', name: '80mm Profile Support', category: 'accessories', description: 'Bracket support designed for 80mm profiles.', imageUrl: '' },
  { slug: '3-way-profile-support', name: '3-Way Profile Support', category: 'accessories', description: 'Multi-directional bracket support accessory.', imageUrl: '' },
  { slug: '40-6-black-snap-in-flange-2000mm', name: '40-6 Black Snap-In Flange - 2000mm', category: 'accessories', description: '2000mm snap-in flange component in black.', imageUrl: '' },
  { slug: '40-6-black-snap-in-wireway-2000mm', name: '40-6 Black Snap-In Wireway - 2000mm', category: 'accessories', description: '2000mm snap-in wireway for cable management.', imageUrl: '' },
  { slug: '40-6-snap-in-pvc-trough-w-cover-2000mm', name: '40-6 Snap-In PVC Trough w/Cover - 2000mm', category: 'accessories', description: '2000mm trough with integrated cover for wire routing.', imageUrl: '' },
]
```

- [ ] **Step 3: Verify**

```bash
cd /Users/pauldenman/anglelockllc.com && npx tsc --noEmit
```

- [ ] **Step 4: Commit**

```bash
git add src/lib/products/hardware.ts src/lib/products/accessories.ts
git commit -m "feat: add hardware (27) and accessories (17) product data"
```

---

### Task 5: Doors & Floors + Motion data files

**Files:**
- Create: `src/lib/products/doors-and-floors.ts`
- Create: `src/lib/products/motion.ts`

- [ ] **Step 1: Create doors-and-floors data**

```ts
// src/lib/products/doors-and-floors.ts
import type { Product } from './types'

export const doorsAndFloors: Product[] = [
  { slug: 'm16-stem-mt-leveling-foot-2700kg', name: 'M16 Stem Mt Leveling Foot (2700kg)', category: 'doors-and-floors', description: 'Heavy-duty leveling foot, M16 stem mount, 2700kg capacity.', imageUrl: '' },
  { slug: '70x70-m16-stem-caster-end-mount-kit', name: '70x70 M16 Stem Caster End Mount Kit', category: 'doors-and-floors', description: 'M16 stem caster end mounting kit for 70x70 profiles.', imageUrl: '' },
  { slug: '40mm-lh-inside-hinge-kit', name: '40mm LH Inside Hinge Kit', category: 'doors-and-floors', description: 'Left-hand interior hinge assembly for door frames.', imageUrl: '' },
  { slug: '40mm-rh-inside-hinge-kit', name: '40mm RH Inside Hinge Kit', category: 'doors-and-floors', description: 'Right-hand interior hinge assembly for door frames.', imageUrl: '' },
  { slug: '40mm-lh-outside-hinge-kit', name: '40mm LH Outside Hinge Kit', category: 'doors-and-floors', description: 'Left-hand exterior hinge assembly for door frames.', imageUrl: '' },
  { slug: '40mm-rh-outside-hinge-kit', name: '40mm RH Outside Hinge Kit', category: 'doors-and-floors', description: 'Right-hand exterior hinge assembly for door frames.', imageUrl: '' },
  { slug: '40mm-universal-panel-retainer-m8-straight-nut-black', name: '40mm Universal Panel Retainer w/M8 Straight Nut - Black', category: 'doors-and-floors', description: 'Panel fastening component with M8 straight nut, black.', imageUrl: '' },
  { slug: '40mm-universal-panel-retainer-m8-drop-in-t-stud-black', name: '40mm Universal Panel Retainer w/M8 Drop-In T-Stud - Black', category: 'doors-and-floors', description: 'Panel fastening with drop-in T-stud design, black.', imageUrl: '' },
  { slug: '40mm-panel-retainer-bracket-m6-straight-nut', name: '40mm Panel Retainer Bracket w/M6 Straight Nut', category: 'doors-and-floors', description: 'Bracket-style panel retainer with M6 straight nut.', imageUrl: '' },
  { slug: '40mm-panel-retainer-bracket-m6-drop-in-nut', name: '40mm Panel Retainer Bracket w/M6 Drop-In Nut', category: 'doors-and-floors', description: 'Panel retainer bracket with M6 drop-in nut.', imageUrl: '' },
  { slug: '40mm-panel-retainer-bracket-m6-drop-in-stud', name: '40mm Panel Retainer Bracket w/M6 Drop-In Stud', category: 'doors-and-floors', description: 'Panel retainer bracket with M6 drop-in stud.', imageUrl: '' },
  { slug: '40x80-m12-stem-plate-caster-mounting-kit', name: '40x80 M12 Stem/Plate Caster Mounting Kit', category: 'doors-and-floors', description: 'M12 stem/plate caster mounting for 40x80 profiles.', imageUrl: '' },
  { slug: '40x80-m16-stem-hd-plate-caster-profile-mounting-kit', name: '40x80 M16 Stem/HD Plate Caster Profile Mounting Kit', category: 'doors-and-floors', description: 'Heavy-duty M16 caster mounting for 40x80 profiles.', imageUrl: '' },
  { slug: '70x70-hd-floor-anchor-plate', name: '70x70 HD Floor Anchor Plate', category: 'doors-and-floors', description: 'Heavy-duty floor anchoring plate for 70x70 profiles.', imageUrl: '' },
  { slug: '70x70-m12-stem-caster-end-mounting-kit', name: '70x70 M12 Stem Caster End Mounting Kit', category: 'doors-and-floors', description: 'M12 stem caster end mount for 70x70 profiles.', imageUrl: '' },
  { slug: '70x70-m12-stem-plate-caster-end-mounting-kit', name: '70x70 M12 Stem/Plate Caster End Mounting Kit', category: 'doors-and-floors', description: 'Dual-mount M12 caster option for 70x70 profiles.', imageUrl: '' },
  { slug: '70x70-m16-stem-hd-plate-caster-end-mounting-kit', name: '70x70 M16 Stem/HD Plate Caster End Mounting Kit', category: 'doors-and-floors', description: 'Heavy-duty M16 caster mounting for 70x70 profiles.', imageUrl: '' },
  { slug: '80x80-m12-stem-plate-caster-mounting-kit', name: '80x80 M12 Stem/Plate Caster Mounting Kit', category: 'doors-and-floors', description: 'M12 caster mounting kit for 80x80 profiles.', imageUrl: '' },
  { slug: '80x80-m16-stem-hd-plate-caster-mounting-kit', name: '80x80 M16 Stem/HD Plate Caster Mounting Kit', category: 'doors-and-floors', description: 'Heavy-duty M16 caster mounting for 80x80 profiles.', imageUrl: '' },
  { slug: '40mm-floor-anchor-kit', name: '40mm Floor Anchor Kit', category: 'doors-and-floors', description: 'Basic floor anchoring assembly for 40mm profiles.', imageUrl: '' },
  { slug: '80mm-floor-anchor-bracket-kit', name: '80mm Floor Anchor Bracket Kit', category: 'doors-and-floors', description: 'Floor attachment brackets for 80mm components.', imageUrl: '' },
  { slug: '80mm-perpendicular-floor-anchor-bracket-kit', name: '80mm Perpendicular Floor Anchor Bracket Kit', category: 'doors-and-floors', description: 'Perpendicular floor anchoring for 80mm profiles.', imageUrl: '' },
  { slug: 'm8-stem-mount-leveling-foot-450kg', name: 'M8 Stem Mount Leveling Foot (450kg)', category: 'doors-and-floors', description: 'Lightweight leveling foot, M8, 450kg capacity.', imageUrl: '' },
  { slug: 'm8-stem-mt-leveling-foot-40mm-stud-1400kg', name: 'M8 Stem Mt Leveling Foot 40mm Stud (1400kg)', category: 'doors-and-floors', description: 'Enhanced leveling foot, M8, 40mm stud, 1400kg capacity.', imageUrl: '' },
  { slug: 'm12-stem-mount-leveling-foot-2000kg', name: 'M12 Stem Mount Leveling Foot (2000kg)', category: 'doors-and-floors', description: 'Mid-range leveling foot, M12, 2000kg capacity.', imageUrl: '' },
  { slug: 'm8-stem-mt-50mm-caster-w-total-brake-40kg', name: 'M8 Stem Mt 50mm Caster w/ Total Brake (40kg)', category: 'doors-and-floors', description: 'Small caster with locking brake, M8, 40kg capacity.', imageUrl: '' },
  { slug: 'm12-stem-mt-75mm-caster-w-total-brake-70kg', name: 'M12 Stem Mt 75mm Caster w/ Total Brake (70kg)', category: 'doors-and-floors', description: 'Medium caster with braking, M12, 70kg capacity.', imageUrl: '' },
  { slug: 'plate-mt-75mm-swivel-caster-w-total-brake-70kg', name: 'Plate Mt 75mm Swivel Caster w/ Total Brake (70kg)', category: 'doors-and-floors', description: 'Swiveling caster with brake, plate mount, 70kg.', imageUrl: '' },
  { slug: 'plate-mt-75mm-fixed-caster-70kg', name: 'Plate Mt 75mm Fixed Caster (70kg)', category: 'doors-and-floors', description: 'Non-swiveling 75mm plate-mount caster, 70kg.', imageUrl: '' },
  { slug: 'plate-mt-125mm-fixed-caster-125kg', name: 'Plate Mt 125mm Fixed Caster (125kg)', category: 'doors-and-floors', description: 'Fixed plate-mount caster for heavier loads, 125kg.', imageUrl: '' },
  { slug: 'plate-mt-125mm-swivel-caster-w-total-brake-125kg', name: 'Plate Mt 125mm Swivel Caster w/Total Brake (125kg)', category: 'doors-and-floors', description: 'Swivel caster with brake, plate mount, 125kg.', imageUrl: '' },
  { slug: 'm12-stem-mt-leveling-caster-black-250kg', name: 'M12 Stem Mt Leveling Caster - Black (250kg)', category: 'doors-and-floors', description: 'Caster combining mobility and leveling, M12, 250kg.', imageUrl: '' },
  { slug: 'plate-mt-swivel-leveling-caster-black-250kg', name: 'Plate Mt Swivel Leveling Caster - Black (250kg)', category: 'doors-and-floors', description: 'Swivel caster with leveling capability, 250kg.', imageUrl: '' },
  { slug: 'plate-mt-100mm-fixed-caster-400kg', name: 'Plate Mt 100mm Fixed Caster (400kg)', category: 'doors-and-floors', description: 'Heavy-duty fixed plate-mount caster, 400kg.', imageUrl: '' },
  { slug: 'plate-mt-100mm-swivel-caster-w-brake-400kg', name: 'Plate Mt 100mm Swivel Caster w/ Brake (400kg)', category: 'doors-and-floors', description: 'Swivel caster with brake for high-capacity use, 400kg.', imageUrl: '' },
  { slug: '40-6-hd-magnetic-locking-door-catch-kit', name: '40-6 HD Magnetic Locking Door Catch Kit', category: 'doors-and-floors', description: 'Heavy-duty magnetic door locking system.', imageUrl: '' },
  { slug: '40-6-magnetic-door-catch-kit', name: '40-6 Magnetic Door Catch Kit', category: 'doors-and-floors', description: 'Standard magnetic door locking assembly.', imageUrl: '' },
  { slug: '40-6-177mm-universal-handle-kit-black-caps', name: '40-6 177mm Universal Handle Kit - Black Caps', category: 'doors-and-floors', description: 'Door handle assembly with black caps, 177mm.', imageUrl: '' },
  { slug: '40-6-panel-gasket-slot-cover', name: '40-6 Panel Gasket/Slot Cover', category: 'doors-and-floors', description: 'Gasket and slot covering for panel edges.', imageUrl: '' },
  { slug: '40-6-snap-in-door-seal', name: '40-6 Snap-in Door Seal', category: 'doors-and-floors', description: 'Quick-fastening door seal component.', imageUrl: '' },
  { slug: '40-6-panel-gasket-1000mm', name: '40-6 Panel Gasket - 1000mm', category: 'doors-and-floors', description: 'Extended gasket strip for panel sealing, 1000mm.', imageUrl: '' },
  { slug: '40-6-snap-in-double-56mm-panel-retainer', name: '40-6 Snap-in Double 5.6mm Panel Retainer', category: 'doors-and-floors', description: 'Dual-panel retaining system, 5.6mm.', imageUrl: '' },
  { slug: '40-6-beveled-snap-in-56mm-panel-retainer', name: '40-6 Beveled Snap-in 5.6mm Panel Retainer', category: 'doors-and-floors', description: 'Angled snap-in panel retainer, 5.6mm.', imageUrl: '' },
  { slug: '40-6-snap-in-56mm-panel-retainer', name: '40-6 Snap-in 5.6mm Panel Retainer', category: 'doors-and-floors', description: 'Standard snap-in panel fastening, 5.6mm.', imageUrl: '' },
  { slug: '6mm-black-abs-textured-panel', name: '6mm Black ABS Textured Panel', category: 'doors-and-floors', description: 'Textured black ABS plastic panel material.', imageUrl: '' },
  { slug: '56mm-clear-polycarbonate-panel', name: '5.6mm Clear Polycarbonate Panel', category: 'doors-and-floors', description: 'Transparent polycarbonate panel for visibility.', imageUrl: '' },
  { slug: '56mm-black-pvc-coated-1in-wire-mesh', name: '5.6mm Black PVC-Coated 1" Wire Mesh', category: 'doors-and-floors', description: 'Black PVC-coated wire mesh panel material.', imageUrl: '' },
  { slug: '56mm-yellow-pvc-coated-1in-wire-mesh', name: '5.6mm Yellow PVC-Coated 1" Wire Mesh', category: 'doors-and-floors', description: 'Yellow safety mesh panel material.', imageUrl: '' },
  { slug: '0625in-grey-melamine-birch-plywood', name: '0.625" Grey Melamine Birch Plywood', category: 'doors-and-floors', description: 'Grey melamine birch plywood panel option.', imageUrl: '' },
  { slug: '40-6-bi-fold-door-guide-kit', name: '40-6 Bi-Fold Door Guide Kit', category: 'doors-and-floors', description: 'Bi-fold door tracking system.', imageUrl: '' },
  { slug: '40-6-bi-fold-door-support-pin-kit', name: '40-6 Bi-Fold Door Support Pin Kit', category: 'doors-and-floors', description: 'Support pins for bi-fold door operation.', imageUrl: '' },
]
```

- [ ] **Step 2: Create motion data**

```ts
// src/lib/products/motion.ts
import type { Product } from './types'

export const motion: Product[] = [
  { slug: '40mm-roller-bracket-kit', name: '40mm Roller Bracket Kit', category: 'motion', description: 'Enables smooth rolling motion for assemblies requiring component movement.', imageUrl: '' },
  { slug: '40mm-pivot-bracket-offset-profile-mount-kit', name: '40mm Pivot Bracket Offset Profile Mount Kit', category: 'motion', description: 'Pivoting capability with offset profile mounting configuration.', imageUrl: '' },
  { slug: '40mm-pivot-bracket-profile-mount-to-end-mount-kit', name: '40mm Pivot Bracket Profile Mount to End Mount Kit', category: 'motion', description: 'Facilitates pivoting between profile and end mounting points.', imageUrl: '' },
  { slug: '40mm-pivot-bracket-end-mount-kit', name: '40mm Pivot Bracket End Mount Kit', category: 'motion', description: 'Pivoting functionality with end-mounted bracket design.', imageUrl: '' },
  { slug: '40mm-pivot-bracket-offset-profile-to-end-mount-kit', name: '40mm Pivot Bracket Offset Profile to End Mount Kit', category: 'motion', description: 'Enables pivoting connection from offset profiles to end mounts.', imageUrl: '' },
  { slug: '40mm-pivot-bracket-profile-to-offset-profile-mount-kit', name: '40mm Pivot Bracket Profile to Offset Profile Mount Kit', category: 'motion', description: 'Pivoting between standard and offset profile configurations.', imageUrl: '' },
  { slug: '40mm-rh-inline-pivot-kit', name: '40mm RH Inline Pivot Kit', category: 'motion', description: 'Right-hand inline pivot system for rotational movement.', imageUrl: '' },
  { slug: '40mm-lh-inline-pivot-kit', name: '40mm LH Inline Pivot Kit', category: 'motion', description: 'Left-hand inline pivot system for rotational movement.', imageUrl: '' },
  { slug: '40x40-sd-roller-carriage-kit-outside-mount', name: '40x40 SD Roller Carriage Kit, Outside Mount', category: 'motion', description: 'Standard-duty roller carriage, external mount on 40mm profiles.', imageUrl: '' },
  { slug: '40x40-hd-roller-carriage-kit-outside-mount', name: '40x40 HD Roller Carriage Kit, Outside Mount', category: 'motion', description: 'Heavy-duty roller carriage, external mount on 40mm profiles.', imageUrl: '' },
  { slug: '40x80-sd-roller-carriage-kit-outside-mount', name: '40x80 SD Roller Carriage Kit, Outside Mount', category: 'motion', description: 'Standard-duty roller carriage, external mount on 80mm profiles.', imageUrl: '' },
  { slug: '40x80-hd-roller-carriage-kit-outside-mount', name: '40x80 HD Roller Carriage Kit, Outside Mount', category: 'motion', description: 'Heavy-duty roller carriage, external mount on 80mm profiles.', imageUrl: '' },
]
```

- [ ] **Step 3: Verify**

```bash
cd /Users/pauldenman/anglelockllc.com && npx tsc --noEmit
```

- [ ] **Step 4: Commit**

```bash
git add src/lib/products/doors-and-floors.ts src/lib/products/motion.ts
git commit -m "feat: add doors-and-floors (51) and motion (12) product data"
```

---

### Task 6: Products index + custom designs data

**Files:**
- Create: `src/lib/products/index.ts`
- Create: `src/lib/custom-designs.ts`

- [ ] **Step 1: Create products index**

```ts
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
```

- [ ] **Step 2: Create custom designs data**

```ts
// src/lib/custom-designs.ts
export interface CustomDesign {
  slug: string
  title: string
  description: string
  details: string
  imageUrl: string
}

export const customDesigns: CustomDesign[] = [
  {
    slug: 'carts',
    title: 'Carts',
    description: 'Mobile storage and transport solutions built with AngleLock structural aluminum.',
    details: 'Lightweight and highly configurable, AngleLock carts can be customized for any load requirement. The patented mechanical locking system ensures your cart stays rigid under dynamic loads — no loosening over time.',
    imageUrl: '',
  },
  {
    slug: 'cabinets-enclosures',
    title: 'Cabinets & Enclosures',
    description: 'Industrial storage and protection systems engineered for precision and durability.',
    details: 'AngleLock cabinets and enclosures combine structural integrity with modular flexibility. Compatible with our full door, panel, and hardware system for a complete enclosure solution.',
    imageUrl: '',
  },
  {
    slug: 'machine-bases',
    title: 'Machine Bases',
    description: 'Industrial equipment foundations that eliminate vibration and maintain alignment.',
    details: 'Machine bases built with AngleLock profiles deliver 7x the strength of T-slot alternatives. The mechanical locking system prevents joint loosening under continuous vibration — critical for precision manufacturing.',
    imageUrl: '',
  },
  {
    slug: 'workstations',
    title: 'Workstations',
    description: 'Industrial work surfaces designed for ergonomics, strength, and adaptability.',
    details: 'AngleLock workstations are built to last in demanding industrial environments. Reconfigurable without tools, and strong enough to handle heavy tooling and equipment.',
    imageUrl: '',
  },
  {
    slug: 'studio-applications',
    title: 'Studio Applications',
    description: 'Event and temporary structures that assemble fast and hold tight.',
    details: 'From broadcast studios to trade show displays, AngleLock structures go up quickly and stay rigid under load. Disassemble and reconfigure as your needs change.',
    imageUrl: '',
  },
  {
    slug: 'design-services',
    title: 'Design Services',
    description: 'Professional engineering consultation for custom structural aluminum projects.',
    details: 'Our engineers work with you from concept to production. We design to your specifications, optimize for AngleLock\'s patented system, and deliver ready-to-build drawings.',
    imageUrl: '',
  },
  {
    slug: 'assembly',
    title: 'Project Assembly Assistance',
    description: 'On-site and remote assembly support for complex AngleLock builds.',
    details: 'Whether you need hands-on assembly help or remote guidance, our team ensures your project is built correctly. We also offer pre-assembled substructures for faster integration.',
    imageUrl: '',
  },
]
```

- [ ] **Step 3: Verify**

```bash
cd /Users/pauldenman/anglelockllc.com && npx tsc --noEmit
```

- [ ] **Step 4: Commit**

```bash
git add src/lib/products/index.ts src/lib/custom-designs.ts
git commit -m "feat: add products index helpers and custom designs data"
```

---

### Task 7: Navigation overhaul

**Files:**
- Modify: `src/components/Navigation.tsx`

- [ ] **Step 1: Replace Navigation.tsx with full dropdown nav**

```tsx
// src/components/Navigation.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  highlight?: boolean;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    children: [
      { label: "Profiles", href: "/products/profiles" },
      { label: "Components", href: "/products/components" },
      { label: "Hardware", href: "/products/hardware" },
      { label: "Accessories", href: "/products/accessories" },
      { label: "Doors & Floors", href: "/products/doors-and-floors" },
      { label: "Motion", href: "/products/motion" },
    ],
  },
  {
    label: "Custom Designs",
    children: [
      { label: "Carts", href: "/custom-designs#carts" },
      { label: "Cabinets & Enclosures", href: "/custom-designs#cabinets-enclosures" },
      { label: "Machine Bases", href: "/custom-designs#machine-bases" },
      { label: "Workstations", href: "/custom-designs#workstations" },
      { label: "Studio Applications", href: "/custom-designs#studio-applications" },
      { label: "Design Services", href: "/custom-designs#design-services" },
      { label: "Assembly Assistance", href: "/custom-designs#assembly" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Patents", href: "/about#patents" },
      { label: "Industries Served", href: "/industries" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Videos", href: "/videos" },
      { label: "Literature", href: "/resources/literature" },
      { label: "Testing Data", href: "/testing" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Investors", href: "/investors", highlight: true },
];

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href!}
        className={
          item.highlight
            ? "text-sm font-semibold text-accent transition-colors hover:text-accent-bright"
            : "text-sm text-silver-dim transition-colors hover:text-white"
        }
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-silver-dim transition-colors hover:text-white"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 min-w-[200px] rounded-lg border border-border bg-surface py-2 shadow-xl">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-silver-dim transition-colors hover:bg-surface-light hover:text-white"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-wider text-white">
              ANGLELOCK
            </span>
            <span className="text-[10px] tracking-[0.3em] text-silver-dim uppercase">
              Structural Aluminum Systems
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <DropdownItem key={item.label} item={item} />
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-bright"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                    className="flex w-full items-center justify-between py-2 text-lg text-silver-dim"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 flex flex-col gap-1 pb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-1.5 text-sm text-silver-dim hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 text-lg ${item.highlight ? "font-semibold text-accent" : "text-silver-dim hover:text-white"}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/pauldenman/anglelockllc.com && npm run build 2>&1 | tail -20
```
Expected: compiled successfully (or only pre-existing warnings)

- [ ] **Step 3: Commit**

```bash
git add src/components/Navigation.tsx
git commit -m "feat: expand navigation to full product/custom/resources dropdowns"
```

---

### Task 8: ProductCard component + /products overview page

**Files:**
- Create: `src/components/ProductCard.tsx`
- Create: `src/app/products/page.tsx`

- [ ] **Step 1: Create ProductCard component**

```tsx
// src/components/ProductCard.tsx
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
```

- [ ] **Step 2: Create /products overview page**

```tsx
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
```

- [ ] **Step 3: Verify build**

```bash
cd /Users/pauldenman/anglelockllc.com && npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
git add src/components/ProductCard.tsx src/app/products/page.tsx
git commit -m "feat: add ProductCard component and products overview page"
```

---

### Task 9: Category listing pages + product detail pages

**Files:**
- Create: `src/app/products/[category]/page.tsx`
- Create: `src/app/products/[category]/[slug]/page.tsx`
- Create: `src/components/ModelViewer.tsx`

- [ ] **Step 1: Create category listing page**

```tsx
// src/app/products/[category]/page.tsx
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
```

- [ ] **Step 2: Create ModelViewer placeholder component**

```tsx
// src/components/ModelViewer.tsx
"use client";

interface ModelViewerProps {
  modelFile?: string;
  productName: string;
}

export default function ModelViewer({ modelFile, productName }: ModelViewerProps) {
  if (!modelFile) {
    return (
      <div className="flex aspect-square max-w-md items-center justify-center rounded-xl border border-border bg-surface-light">
        <div className="text-center">
          <div className="mb-3 text-4xl text-silver-dim">⬡</div>
          <p className="text-sm font-medium text-silver-dim">3D Model Coming Soon</p>
          <p className="mt-1 text-xs text-silver-dim/60">{productName}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-square max-w-md overflow-hidden rounded-xl border border-border bg-surface-light">
      <iframe
        src={`https://www.edrawingsviewer.com/view?file=${encodeURIComponent(modelFile)}`}
        className="h-full w-full"
        title={`3D model of ${productName}`}
        allowFullScreen
      />
    </div>
  );
}
```

- [ ] **Step 3: Create product detail page**

```tsx
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
```

- [ ] **Step 4: Verify build**

```bash
cd /Users/pauldenman/anglelockllc.com && npm run build 2>&1 | tail -30
```
Expected: compiled successfully

- [ ] **Step 5: Commit**

```bash
git add src/app/products/[category]/page.tsx src/app/products/[category]/[slug]/page.tsx src/components/ModelViewer.tsx
git commit -m "feat: add category listing pages, product detail pages, ModelViewer placeholder"
```

---

### Task 10: Custom designs + info pages

**Files:**
- Create: `src/app/custom-designs/page.tsx`
- Create: `src/app/industries/page.tsx`
- Create: `src/app/testing/page.tsx`
- Create: `src/app/resources/page.tsx`
- Create: `src/app/resources/literature/page.tsx`

- [ ] **Step 1: Create custom designs page**

```tsx
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
```

- [ ] **Step 2: Create industries page**

```tsx
// src/app/industries/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries Served | AngleLock LLC",
  description: "AngleLock structural aluminum systems serve manufacturing, automation, aerospace, broadcast, healthcare, and more.",
};

const industries = [
  { name: "Manufacturing & Automation", description: "Machine guards, conveyor frames, robotic cells, and custom work cells engineered to withstand continuous vibration." },
  { name: "Aerospace & Defense", description: "Precision structural assemblies where alignment and vibration resistance are non-negotiable. Trusted by Boeing and major defense contractors." },
  { name: "Entertainment & Studios", description: "Broadcast studios, trade show displays, stage sets, and temporary event structures that assemble fast and hold rigid." },
  { name: "Education & Research", description: "Lab fixtures, test rigs, and educational equipment at institutions like MSOE that need reconfigurable precision structures." },
  { name: "Tool & Die / MRO", description: "Maintenance, repair, and tooling applications where Snap-on and similar brands demand structural reliability." },
  { name: "Food & Beverage", description: "Stainless-compatible assemblies with corrosion-resistant hardware for cleanroom and food-safe environments." },
  { name: "Healthcare", description: "Medical device frames and lab equipment requiring precise alignment and vibration damping." },
  { name: "Consumer Products", description: "Custom structures for retail, displays, and product development prototyping." },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">
            Where AngleLock Works
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
            INDUSTRIES SERVED
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-silver-dim">
            Anywhere structural aluminum is used, AngleLock outperforms. Our patented mechanical
            locking system eliminates the failure modes that T-slot and steel alternatives accept as normal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-xl border border-border bg-surface p-6">
              <h2 className="mb-3 text-lg font-bold text-white">{ind.name}</h2>
              <p className="text-sm leading-relaxed text-silver-dim">{ind.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { client: "Boeing", detail: "Aerospace structural framing" },
            { client: "Disney", detail: "Studio & entertainment structures" },
            { client: "Snap-on", detail: "Tooling & MRO applications" },
            { client: "MSOE", detail: "Educational research equipment" },
            { client: "Milwaukee Tool", detail: "Manufacturing & automation" },
          ].map((logo) => (
            <div key={logo.client} className="rounded-xl border border-border bg-surface p-6 text-center">
              <p className="text-2xl font-black tracking-wide text-white">{logo.client}</p>
              <p className="mt-1 text-xs text-silver-dim">{logo.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Create testing page**

```tsx
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
```

- [ ] **Step 4: Create resources hub + literature page**

```tsx
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
```

```tsx
// src/app/resources/literature/page.tsx
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
                  className="ml-4 flex-shrink-0 rounded-lg border border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  Download
                </a>
              ) : (
                <span className="ml-4 flex-shrink-0 rounded-lg border border-border px-4 py-2 text-sm text-silver-dim">
                  Contact Us
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 5: Verify build**

```bash
cd /Users/pauldenman/anglelockllc.com && npm run build 2>&1 | tail -20
```

- [ ] **Step 6: Commit**

```bash
git add src/app/custom-designs/page.tsx src/app/industries/page.tsx src/app/testing/page.tsx src/app/resources/page.tsx src/app/resources/literature/page.tsx
git commit -m "feat: add custom designs, industries, testing, resources, and literature pages"
```

---

### Task 11: Update About page with patents section

**Files:**
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Add patents section to the end of AboutPage** (append before the final closing tags)

Find the line in `src/app/about/page.tsx` that closes the last section before `</main>`, and add a patents section after it:

```tsx
{/* ========== PATENTS ========== */}
<section id="patents" className="border-t border-border py-20">
  <div className="mx-auto max-w-7xl px-6">
    <SectionReveal>
      <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">
        Intellectual Property
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
        150+ PATENTS WORLDWIDE
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-silver-dim">
        AngleLock's patented mechanical locking system is protected across 12+ countries,
        covering both utility innovations and design elements of our modular framing system.
      </p>
    </SectionReveal>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { region: "United States", count: "50+ patents" },
        { region: "Germany", count: "10 patents" },
        { region: "Japan", count: "10 patents" },
        { region: "China", count: "8 patents" },
        { region: "United Kingdom", count: "9 patents" },
        { region: "Australia", count: "6 patents" },
        { region: "Canada", count: "5 patents" },
        { region: "France, Spain, Italy, Korea, Austria, Switzerland, Hong Kong", count: "Additional registrations" },
      ].map((p) => (
        <SectionReveal key={p.region}>
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-sm font-bold text-white">{p.region}</p>
            <p className="mt-1 text-sm text-accent">{p.count}</p>
          </div>
        </SectionReveal>
      ))}
    </div>

    <SectionReveal>
      <p className="mt-8 text-sm text-silver-dim">
        PCT (Patent Cooperation Treaty): 8 international applications. Contact us for IP licensing inquiries.
      </p>
    </SectionReveal>
  </div>
</section>
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/pauldenman/anglelockllc.com && npm run build 2>&1 | tail -10
```

- [ ] **Step 3: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: add patents section to about page (150+ patents, 12 countries)"
```

---

### Task 12: Homepage additions — client logos + product category grid

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add ClientLogos component inline in page.tsx**

In `src/app/page.tsx`, find the section after the hero (after the `</section>` that contains the hero content) and add a client logos bar:

```tsx
{/* ========== CLIENT LOGOS ========== */}
<section className="border-y border-border py-12">
  <div className="mx-auto max-w-7xl px-6">
    <p className="mb-8 text-center text-xs tracking-[0.4em] text-silver-dim uppercase">
      Trusted By Industry Leaders
    </p>
    <div className="flex flex-wrap items-center justify-center gap-12">
      {["Boeing", "Disney", "Snap-on", "MSOE", "Milwaukee Tool"].map((brand) => (
        <span
          key={brand}
          className="text-lg font-black tracking-wider text-silver-dim/50 transition-colors hover:text-silver-dim"
        >
          {brand}
        </span>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add product categories grid section**

After the client logos section and before the Book3D/LeadCapture section, add:

```tsx
{/* ========== PRODUCT CATEGORIES ========== */}
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6">
    <SectionReveal>
      <p className="mb-4 text-sm tracking-[0.4em] text-accent uppercase">
        Complete System
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
        EVERY COMPONENT.
        <br />
        <span className="text-gradient">ONE SYSTEM.</span>
      </h2>
      <p className="mt-4 max-w-xl text-lg text-silver-dim">
        From structural profiles to precision hardware — everything engineered to lock together.
      </p>
    </SectionReveal>

    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { label: "Profiles", href: "/products/profiles", count: "24", desc: "Structural extrusion profiles" },
        { label: "Components", href: "/products/components", count: "46", desc: "Brackets, plates & inserts" },
        { label: "Hardware", href: "/products/hardware", count: "27", desc: "Nuts, studs & fasteners" },
        { label: "Accessories", href: "/products/accessories", count: "17", desc: "End caps & cable management" },
        { label: "Doors & Floors", href: "/products/doors-and-floors", count: "51", desc: "Hinges, casters & panels" },
        { label: "Motion", href: "/products/motion", count: "12", desc: "Pivots & roller carriages" },
      ].map((cat) => (
        <SectionReveal key={cat.label}>
          <a
            href={cat.href}
            className="group flex items-center justify-between rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/40 hover:bg-surface-light"
          >
            <div>
              <p className="font-bold text-white">{cat.label}</p>
              <p className="mt-0.5 text-sm text-silver-dim">{cat.desc}</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-accent">{cat.count}</p>
              <p className="text-xs text-silver-dim">products</p>
            </div>
          </a>
        </SectionReveal>
      ))}
    </div>

    <SectionReveal>
      <div className="mt-8 text-center">
        <a
          href="/products"
          className="inline-block rounded-lg border border-accent px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
        >
          Browse Full Catalog
        </a>
      </div>
    </SectionReveal>
  </div>
</section>
```

- [ ] **Step 3: Verify build**

```bash
cd /Users/pauldenman/anglelockllc.com && npm run build 2>&1 | tail -10
```

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add client logos bar and product categories grid to homepage"
```

---

### Task 13: Footer update + final build + deploy

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Add Products column to footer**

In `src/components/Footer.tsx`, find the grid div and add a Products column alongside the existing columns:

```tsx
{/* Products */}
<div>
  <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
    Products
  </h4>
  <div className="flex flex-col gap-3">
    {[
      { label: "Profiles", href: "/products/profiles" },
      { label: "Components", href: "/products/components" },
      { label: "Hardware", href: "/products/hardware" },
      { label: "Accessories", href: "/products/accessories" },
      { label: "Doors & Floors", href: "/products/doors-and-floors" },
      { label: "Motion", href: "/products/motion" },
    ].map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="text-sm text-silver-dim transition-colors hover:text-accent"
      >
        {link.label}
      </Link>
    ))}
  </div>
</div>
```

Also add a Company column:

```tsx
{/* Company */}
<div>
  <h4 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
    Company
  </h4>
  <div className="flex flex-col gap-3">
    {[
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Custom Designs", href: "/custom-designs" },
      { label: "Testing Data", href: "/testing" },
      { label: "Literature", href: "/resources/literature" },
      { label: "Investors", href: "/investors" },
      { label: "Contact", href: "/contact" },
    ].map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="text-sm text-silver-dim transition-colors hover:text-accent"
      >
        {link.label}
      </Link>
    ))}
  </div>
</div>
```

- [ ] **Step 2: Run full production build**

```bash
cd /Users/pauldenman/anglelockllc.com && npm run build
```
Expected: `✓ Compiled successfully` with route table showing all new pages

- [ ] **Step 3: Spot check routes in the build output**

The build output should list these routes:
- `/products` ✓
- `/products/[category]` — 6 static pages ✓  
- `/products/[category]/[slug]` — 177 static pages ✓
- `/custom-designs` ✓
- `/industries` ✓
- `/testing` ✓
- `/resources` ✓
- `/resources/literature` ✓

- [ ] **Step 4: Final commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add Products and Company columns to footer"
```

- [ ] **Step 5: Push to GitHub**

```bash
git push origin main
```

- [ ] **Step 6: Deploy to Vercel production**

```bash
vercel --prod --yes
```

- [ ] **Step 7: Request Google indexing for new pages**

```bash
node ~/.claude/scripts/google-index.js https://anglelockllc.com/products
node ~/.claude/scripts/google-index.js https://anglelockllc.com/custom-designs
node ~/.claude/scripts/google-index.js https://anglelockllc.com/industries
```
