# ShadCN Dashboard & Landing Template

A full-stack dual-architecture solution featuring an administrative dashboard and a high-converting marketing landing page, powered by Next.js 16, Vite, React 19, and shadcn/ui.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](License.md)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)](https://nextjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)](https://ui.shadcn.com/)

## Installation

Clone the repository and install dependencies in your chosen version:

```bash
# Clone the monorepo
git clone https://github.com/DiaztMF/shadcn-dashboard.git
cd shadcn-dashboard

# For Next.js App Router version
cd nextjs-version
npm install

# Or for Vite SPA version
cd ../vite-version
npm install
```

## Quick Start

### Running the Next.js Version:
```bash
cd nextjs-version
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the Next.js application.

### Running the Vite Version:
```bash
cd vite-version
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the Vite application.

## What

This monorepo provides a production-ready template that bundles both a public SaaS marketing landing page and an internal metrics dashboard. It includes dark/light theme switching, interactive charts, metric cards, and responsive navigation out of the box.

## Why

Most teams build marketing pages and application dashboards in silos, leading to mismatched design tokens and duplicative styling logic. This template unifies the visual language using shadcn/ui primitives across both Next.js (for SEO-first landing pages) and Vite (for ultra-fast client-side single-page applications).

## API & Routes

### Next.js Version Routes
| Route | Type | Description |
|---|---|---|
| `/` | Page (RSC) | High-converting marketing landing page with hero, features, and pricing |
| `/dashboard` | Page (Client) | Executive overview dashboard with metrics cards and activity graphs |
| `/dashboard/users` | Page (Client) | User table management with pagination and search filter |
| `/dashboard/settings` | Page (Client) | Account and application preference settings |

## Examples

### Switching Theme Mode
The template integrates `next-themes` for persistent, flicker-free theme transitions:

```tsx
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button variant="outline" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Mode
    </Button>
  );
}
```

## Architecture & Development Guides

```
shadcn-dashboard/
├── nextjs-version/          # Full Next.js 16 App Router implementation
│   ├── app/                 # Routes, pages, and dashboard layout
│   ├── components/          # shadcn/ui primitives and custom blocks
│   └── package.json         # Next.js workspace configuration
├── vite-version/            # Ultra-fast Vite 7 + React 19 SPA
│   ├── src/                 # Client-side components and routing
│   └── package.json         # Vite workspace configuration
├── docs/                    # VitePress documentation portal
├── DESIGN.md                # Semantic Design System guidelines
└── License.md               # MIT License declaration
```

For design tokens, typography rules, and component behavior, see [DESIGN.md](DESIGN.md).

## License

This project is licensed under the MIT License. See [License.md](License.md) for details.
