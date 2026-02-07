# AngleLock LLC Website - Project Configuration

**Last Updated:** 2026-02-07

## Project Overview
- **Company:** AngleLock LLC - Structural Aluminum Systems
- **Domain:** anglelockllc.com (registered on Porkbun)
- **Tagline:** "The strength of a simple IDEA"
- **Location:** 1058 Overland Court, Grafton, WI 53024
- **Phone:** (262) 421-8840
- **Email:** info@anglelock.com

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **React:** React 19
- **Package Manager:** npm
- **Deployment:** Vercel
- **Source Control:** GitHub

## Repository & Deployment
- **GitHub:** git@github.com:watchdogpedro/anglelockllc.com.git
- **Vercel Project:** anglelockllc.com
- **Vercel Project ID:** prj_VlEeEYux1ihlmwUcaBXS8da81dSM
- **Vercel Org ID:** team_gd1J3p6pdSP1AMc7tiI0YiJ6
- **Live URL:** https://anglelockllc.com (pending DNS setup)
- **Vercel Preview:** https://anglelockllc-nfuu4z91a-paul-denmans-projects.vercel.app

## Working Directory
```
/Users/pauldenman/anglelockllc.com/
```

## Key Commands
```bash
# Development
npm run dev          # Start local dev server (http://localhost:3000)

# Building
npm run build        # Build for production

# Linting
npm run lint         # Run ESLint

# Deployment (auto-deploys from GitHub push when connected)
git push origin main # Push to GitHub → triggers Vercel deploy
```

## Deployment Process
1. Test locally: `npm run dev`
2. Build check: `npm run build`
3. Commit changes
4. Push to GitHub: `git push origin main`
5. Vercel auto-deploys from main branch

## DNS Setup (Porkbun → Vercel)
Configure these DNS records on Porkbun:
- **A Record:** `@` → `76.76.21.21`
- **CNAME Record:** `www` → `cname.vercel-dns.com`

## Old Site Reference
The original static HTML site is at `/Users/pauldenman/anglelock/` (GitHub: watchdogpedro/anglelock).
Content and images from the old site can be referenced during migration.

## Project Structure
```
src/
├── app/              # Next.js App Router pages & API routes
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles
├── components/       # React components (to be created)
├── lib/              # Utility functions (to be created)
└── public/           # Static assets
```

## Important Rules
- **Always** test build locally before pushing
- **Always** push to GitHub (Vercel auto-deploys)
- **Never** commit files with secrets (.env, credentials)
- **Path alias:** Use `@/` for imports (maps to `./src/`)

## Related Projects
- **SeekON.AI:** `/Users/pauldenman/seekon.ai/` — sister project, same GitHub account
- **Old AngleLock site:** `/Users/pauldenman/anglelock/` — static HTML reference site

## Company Background
AngleLock is a patented structural aluminum framing system that eliminates the need for
traditional T-slot and steel solutions. The system features mechanically locking,
precision-aligned joints that provide extreme strength, vibration resistance, and
perfect alignment. Key clients include Disney, Boeing, Snap-On, Milwaukee, and MSOE.

## Product Categories
- Profiles (aluminum extrusions)
- Components & Fasteners
- Doors/Floors
- Accessories
- Motion Hardware
- Custom Design Services
- Assembly Services

## Industries Served
- Manufacturing & Automation
- Aerospace & Defense
- Industrial Applications
