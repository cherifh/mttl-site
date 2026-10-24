# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # static export build -> writes to ./out
npm run start   # serve a production Next.js build (not used for this static export; mainly for local sanity checks)
npm run lint    # next lint
```

There is no test suite in this repo. There is no `npm install` note beyond the standard one — `package-lock.json` is present, so use `npm ci`/`npm install` as usual.

## Architecture

This is a static marketing site (French) for MTTL, a customs/transport/shipping agency in Conakry, Guinea, built with Next.js 14 App Router + TypeScript + Tailwind.

- **Static export, not a server app.** `next.config.js` sets `output: "export"` and `images.unoptimized: true`. There are no API routes and no server-side data fetching anywhere — every page is static content baked in at build time. `npm run build` produces the deployable site in `out/`. Keep this in mind before adding anything that needs a Node server (API routes, `next/image` optimization, middleware, etc.) — it won't work under static export.
- **Pages are plain content components** under `app/*/page.tsx` (`/`, `/a-propos`, `/services`, `/consignation`, `/contact`). Each page's copy and structured content (service lists, stats, gallery photos, etc.) is defined as a local `const` array/object at the top of the file (e.g. `SERVICES_OVERVIEW`, `CHAIN_STEPS`, `KEY_FIGURES`, `GALLERY_PHOTOS`) and then mapped over in JSX. When updating site copy or adding/removing a service, edit these data arrays rather than hand-writing repeated JSX blocks.
- **Shared layout** lives in `app/layout.tsx`: it wires up the three Google Fonts (`Space_Grotesk` → `--font-display`, `Inter` → `--font-body`, `IBM_Plex_Mono` → `--font-mono`) and wraps every page in `<Header>` / `<Footer>`.
- **`components/`** holds the reusable UI:
  - `Reveal.tsx` is the scroll-in animation primitive — wraps content, uses `IntersectionObserver` to toggle a `reveal-visible` class once the element enters the viewport, falls back to visible immediately if `IntersectionObserver` is unavailable (SSR/old browsers). Takes a `delay` (ms) prop for staggering lists and an `as` prop to render as a different tag (e.g. `as="li"`). Most page sections are wrapped in `<Reveal>`.
  - `icons.tsx` defines a shared inline-SVG icon set (`FileCheckIcon`, `TruckIcon`, `AnchorIcon`, `BoxesIcon`, …) with a common stroke style (`base` object); icons take a `className` to control sizing and are always `aria-hidden`.
  - `Header.tsx` / `MobileNav.tsx` render the nav from a single `NAV_LINKS` array; `Header` highlights the active link via `usePathname()`.
  - `Gallery.tsx`, `ShippingRoute.tsx`, `PortBadge.tsx`, `Counter.tsx` are page-specific decorative/content components (photo grid, animated SVG route, animated badge, animated number counter).
- **Styling** is Tailwind-only (`tailwind.config.ts` + `app/globals.css`). The brand palette ("Port Horizon": `navy`, `ocean`, `teal`, `mint`, `coral`, `coralDeep`, `sand`, `ink`, `steel`) and custom gradients/keyframes/animations (`gradient-pan`, `float`, `shimmer`, `dash-flow`, etc.) are declared as Tailwind theme extensions — reuse these tokens instead of introducing new raw colors/animations. The `@/*` path alias maps to the repo root (`tsconfig.json`).
- **Content is French** throughout (site `lang="fr"`); keep new copy consistent with the existing tone and terminology (e.g. "dédouanement", "consignation", "transport").
