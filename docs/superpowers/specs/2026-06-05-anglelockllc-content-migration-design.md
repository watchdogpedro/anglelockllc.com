# anglelockllc.com — Full Content Migration Design
**Date:** 2026-06-05  
**Project:** anglelockllc.com (Next.js, dark industrial theme)  
**Goal:** Migrate all content from anglelock.com (Shopify) into anglelockllc.com while preserving every existing element of the LLC site.

---

## Overview

anglelockllc.com currently has a lean investor-focused site (homepage, about, contact, videos, investors). The goal is to expand it into a full product/business site by migrating all content from anglelock.com — 180+ products across 6 categories, custom design services, industries, testing data, patents, resources — without removing or breaking anything that exists today.

Phase 2 (eDrawings 3D viewer per product) is designed for but not built now — files must be sourced from AngleLock's SolidWorks library first.

---

## What We Are Keeping (Do Not Touch)

- Dark industrial theme, color tokens, Geist font
- Homepage hero, AnimatedCounter, SectionReveal, IndustryCarousel
- Book3D + LeadCapture webhook (book download lead gen)
- Investors page + Investors/Data Room
- About, Contact, Videos pages
- Footer, Navigation component structure (we expand it, not replace it)
- All existing metadata and SEO config

---

## Architecture

### Data Layer
All product data lives in TypeScript data files — no database needed.

```
src/lib/
  products/
    profiles.ts         — 24 profile products
    components.ts       — 46 component products
    hardware.ts         — 27 hardware products
    accessories.ts      — 17 accessory products
    doors-and-floors.ts — 51 door/floor products
    motion.ts           — 12 motion products
    index.ts            — re-exports + shared types
  custom-designs.ts     — 7 custom design categories
  industries.ts         — industries served content
```

Each product entry shape:
```ts
interface Product {
  slug: string
  name: string
  category: ProductCategory
  description: string
  imageUrl: string
  modelFile?: string   // Phase 2: path to .eprt file
}
```

### New Routes

```
/products                          — overview of all 6 categories
/products/profiles                 — 24 profiles grid
/products/components               — 46 components grid
/products/hardware                 — 27 hardware grid
/products/accessories              — 17 accessories grid
/products/doors-and-floors         — 51 doors & floors grid
/products/motion                   — 12 motion products grid
/products/[category]/[slug]        — individual product detail page (Phase 2 ready)
/custom-designs                    — overview of all 7 custom types
/custom-designs/[type]             — individual custom design page
/industries                        — industries served
/testing                           — testing data methodology
/resources                         — resources hub
/resources/literature              — PDF downloads
```

### Updated Navigation

Replaces the current investor-nav with a full product nav:

```
Products ▾
  Profiles | Components | Hardware
  Accessories | Doors & Floors | Motion

Custom Designs ▾
  Carts | Cabinets & Enclosures | Machine Bases
  Workstations | Studio Applications | Design Services | Assembly

About ▾
  Our Story | Patents | Industries Served

Resources ▾
  Blog | Gallery | Videos | Literature | Testing Data

Contact Us        [Get a Quote] CTA button
```

Investors link stays in the nav (currently highlighted in blue — keep that styling). It sits at the right end of the desktop nav alongside the new product links.

### Homepage Additions

Two new sections inserted after the existing hero/tech/proof sections:
1. **Client logos bar** — Disney, Boeing, Snap-on, MSOE, Milwaukee (already referenced in their brand)
2. **Product categories grid** — 6 cards linking to product sections (same dark card style as existing sections)

Existing Book3D/LeadCapture section stays exactly where it is.

### Product Pages

Category listing pages: responsive grid of product cards. Each card shows:
- Product image (sourced from anglelock.com CDN)
- Product name
- Brief description
- "View Details" link → detail page

Product detail page (Phase 2 ready):
- Full product info
- Image gallery
- Placeholder 3D viewer section (shows "3D model coming soon" until .eprt files arrive)
- Related products

### Image Strategy

Product images are currently hosted on anglelock.com's Shopify CDN (e.g., `cdn.shopify.com/s/files/...`). Phase 1 references them via their existing CDN URLs. We will not re-host images until we have a reason to (avoids a large file migration task).

### eDrawings (Phase 2 — Placeholder Only in Phase 1)

Product detail pages include a `<ModelViewer />` client component that renders:
- Phase 1: "3D model coming soon" placeholder with the AngleLock accent color
- Phase 2: eDrawings Web Viewer iframe, loading `/public/models/[slug].eprt`

The component is written and wired up in Phase 1 so Phase 2 is a drop-in.

---

## Pages Not Being Built Now

- Blog (anglelock.com blog posts require manual content migration — add as follow-up)
- Gallery (images need curation — add as follow-up)
- Individual custom design sub-pages beyond the overview

---

## Constraints

- Keep all existing routes working — no 404s on current pages
- Mobile-first responsive, matching existing breakpoints
- No new dependencies unless essential
- Investors link preserved in footer navigation

---

## Success Criteria

- All 6 product category pages populated with correct product names and images
- Navigation fully functional with all dropdowns on desktop and mobile
- Custom Designs, Industries, Testing, Patents, Literature pages live
- Homepage shows client logos and product category grid
- Existing anglelockllc.com features all intact and working
- Product detail pages exist and are Phase 2 ready (3D viewer placeholder in place)
