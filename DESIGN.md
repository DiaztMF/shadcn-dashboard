# Design System: ShadCN Dashboard & Landing Template

## 1. Visual Theme & Atmosphere
A high-agency, professional SaaS dual-interface bridging an authoritative marketing landing page with a dense, analytical command dashboard.
- **Density:** 7 (Data-dense tabular cards, compact stats metrics, and structured sidebar hierarchy)
- **Variance:** 5 (Balanced symmetry for analytical clarity, offset bento grids on the landing hero)
- **Motion:** 6 (Instant UI feedback, micro-hover elevations, and smooth theme transitions)

The aesthetic embodies industrial precision: deep zinc obsidian backgrounds, surgical monochrome lines, and high-contrast typographic hierarchy.

## 2. Color Palette & Roles
- **Deep Zinc Canvas** (`#09090B`) — Primary dark canvas background (Zinc-950)
- **Obsidian Surface** (`#121215`) — Elevated card containers, dashboard tables, and sidebar background
- **Primary Ink** (`#FAFAFA`) — Primary headings, key metrics numbers, and high-emphasis labels
- **Muted Steel** (`#71717A`) — Supporting descriptions, table column headers, and secondary captions
- **Structural Border** (`#27272A`) — 1px clean separation borders (Zinc-800)
- **Precision Indigo** (`#4F46E5`) — Single action accent for primary CTAs, active tab indicators, and chart focus series
*(Banned: AI neon purple glow, cyan highlights, or saturated gradients.)*

## 3. Typography Rules
- **Display & Section Headers:** `Geist` — Clean, geometric sans-serif with neutral character and tight tracking (`-0.025em`)
- **Body Text:** `Geist` — Crisp readability with max `65ch` width for prose
- **Metrics, Data & Code:** `Geist Mono` — Mandatory for all tabular metrics, currency numbers, percentages, and timestamps
- **Banned:** `Inter`, decorative serifs, script fonts, or comic display typography in dashboard or SaaS views

## 4. Component Stylings
- **Buttons:** Based on shadcn/ui primitives. Flat background, border-1px contrast, 0.375rem radius (`rounded-md`), tactile active down-state.
- **Metric Cards:** Clean border-1px container with top border accent highlight on active items. Negative space and borders replace heavy drop shadows.
- **Data Tables:** Compact row padding (`py-2.5 px-4`), alternating subtle hover rows, monospace numerical alignment to the right.
- **Sidebar & Navigation:** Left-anchored vertical rail with 1px border separator. Active state marked by subtle surface lift (`#1E1E24`) and accent indicator bar.
- **Theme Toggle:** Flawless dual-mode synchronization (`next-themes` / Vite dark mode) with zero flash of unstyled content (FOUC).

## 5. Layout Principles
- **Landing Layout:** Asymmetric bento grid showcasing real dashboard previews above the fold. Max-width container constrained to `1280px`.
- **Dashboard Layout:** Fixed sidebar + dynamic content canvas. Resilient responsive drawer collapse on viewports `< 1024px`.
- **Mobile Behavior:** Full single-column reflow for charts and stat blocks under `768px`. Zero horizontal document scroll.

## 6. Motion & Interaction
- **Tab & Route Transitions:** Instant or light spring (`stiffness: 150, damping: 25`).
- **Dashboard Charts:** Non-jarring SVG path ease-in animations (`duration: 0.4s`).
- **Performance:** CSS transforms exclusively. No layout-thrashing property animations.

## 7. Anti-Patterns (Banned)
- No emojis anywhere in code, icons, or navigation
- No pure black (`#000000`)
- No neon glows, drop-shadow halos, or colorful laser gradients
- No generic mock user names ("John Doe", "Jane Smith") — use authentic realistic data
- No fake round statistics (`100% Guaranteed`, `99.999%`)
- No AI marketing buzzwords ("Unleash synergy", "Next-Gen AI power")
