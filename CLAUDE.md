# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mathro is a French mathematics education website with course content and exercises for students in grades 5ème through 3ème (French middle school system). Built with SvelteKit and deployed on Vercel.

## Development Commands

All commands run from the `www/` directory:

```bash
npm run dev              # Start dev server (localhost:5173)
npm run build            # Production build
npm run check            # TypeScript type checking (svelte-check)
npm run lint             # Prettier + ESLint check
npm run format           # Auto-format with Prettier
npm run test             # Run tests once
npm run test:watch       # Watch mode
npm run test:ui          # Interactive Vitest UI
```

### Vérification complète

```bash
npm run check && npm run lint    # TypeScript + Prettier + ESLint
```

Pour lancer les vérifications séparément :

```bash
npx eslint .                     # ESLint seul (problèmes de code)
npx prettier --check .           # Prettier seul (formatage)
```

## Tech Stack

- **Svelte 5** with runes ($state, $derived, $effect)
- **SvelteKit 2** with file-based routing
- **TypeScript** (strict mode)
- **Node.js 22.x** (strictly enforced via .npmrc)
- **Vite** for builds
- **Vitest** for testing

## Architecture

### Key Directories (within `www/src/`)

- `routes/` - SvelteKit pages: homepage, `cahier_de_cours/[niveau]`, `cahier_d_exercices/[niveau]`, `outils/`, `scratch/`
- `lib/cahier/` - Core notebook system:
  - `store.svelte.ts` - Global state (zoom, grade level, page number, print mode)
  - `composants/` - Reusable components for chapters, courses, exercises, margins, math, SVG
  - `contenu/` - Course content data per grade level
- `lib/constitution_classes/` - Class management tools with drag-and-drop
- `lib/scratch/` - Scratch programming integration

### Design Patterns

- **Print-first UI**: Pages designed for A4 printing with Seyes grid (French ruled paper)
- **Responsive scaling**: CSS variables `--taille-page`, `--carreau`, `--font-size`
- **Dynamic route params**: `[niveau]` for grade levels
- **WASM integration**: `@vmastro/exercices` package requires vite-plugin-wasm

### Code Style

- French variable names and comments throughout
- Tabs for indentation, single quotes, no trailing commas
- 150 character line width
