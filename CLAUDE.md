# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mathro is a French mathematics education website with course content and exercises for students in grades 6ème through 4ème (French middle school). Built with SvelteKit, deployed on Vercel.

## Development Commands

All commands run from the `www/` directory:

```bash
npm run dev              # Start dev server (localhost:5173)
npm run build            # Production build
npm run check            # TypeScript type checking (svelte-check)
npm run lint             # Prettier + ESLint check
npm run format           # Auto-format with Prettier
npm run test             # Run tests once (vitest run)
npm run test:watch       # Watch mode
npm run test:ui          # Interactive Vitest UI
```

### Vérification complète avant commit

```bash
npm run check && npm run lint    # TypeScript + Prettier + ESLint
```

Pour lancer séparément :

```bash
npx eslint .                     # ESLint seul
npx prettier --check .           # Prettier seul
```

## Tech Stack

- **Svelte 5** with runes (`$state`, `$derived`, `$effect`)
- **SvelteKit 2** with file-based routing and `@sveltejs/adapter-vercel`
- **TypeScript** (strict mode + `noUncheckedIndexedAccess`, `noImplicitReturns`, `noPropertyAccessFromIndexSignature`)
- **Node.js 22.x** (enforced in `.npmrc` and `package.json` engines)
- **Vitest** for testing (tests in `www/__tests__/`)
- **WASM**: `@vmastro/exercices` package via `vite-plugin-wasm-pack`

## Code Style

- French variable names, comments, and file names throughout
- Tabs for indentation, single quotes, no trailing commas, 150 char line width
- Imports must be sorted (`sort-imports` ESLint rule, case-sensitive)
- Unused imports are errors (`unused-imports/no-unused-imports`)

## Architecture

### Routes (`www/src/routes/`)

- `/` — Homepage with links to grade levels
- `/cahier_de_cours/[niveau]` — Course notebook (dynamic by grade: 4, 5, 6)
- `/cahier_d_exercices/[niveau]` — Exercise notebook
- `/outils/constitution_classes/` — Drag-and-drop class assignment tool
- `/outils/ovnv/` — Scheduling/organization tool

The root layout (`+layout.svelte`) conditionally skips the standard header for paths containing `cahier`, `scratch`, or `outils`.

### Core Notebook System (`www/src/lib/cahier/`)

This is the heart of the application — a virtual French notebook with Seyes grid paper.

**Global State** (`store.svelte.ts`): `page_state` ($state rune) tracks grade level (`niveau: 3|4|5|6`), page number, display mode (two-page/full-screen/zoom), Seyes grid visibility, and print status. `PAGES.liste` holds dynamically loaded page components.

**Dynamic Page Loading** (`importation_pages.ts`): Uses `import.meta.glob()` (eager) to load all Svelte page components for a given grade level. Pattern: `$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},cours/{niveau}eme/*/*}.svelte`

**Page Rendering** (`composants/PageDeCahier.svelte`): Each page is an A4-proportioned div with:
- CSS variables scaling from `--taille-page`: `--carreau` = height/37.1, `--font-size` = height/60
- SVG-based Seyes grid background (2mm small lines, 8mm thick lines, pink margin at 42mm)
- ResizeObserver for responsive sizing

**PDF Export** (`impression.ts`): Ctrl+P triggers custom export using `html-to-image` + `jsPDF` (not browser print).

### Content Structure

Course/exercise pages live under:
- `lib/cahier/cours/{6eme,5eme,4eme}/` — Course pages
- `lib/cahier/exercices/{6eme,5eme,4eme}/` — Exercise pages

Each chapter is a directory like `01 - Fractions/` containing `Page1.svelte`, `Page2.svelte`, etc.

Chapter metadata in `lib/cahier/contenu/sommaires/{niveau}.json`:
```json
{
  "période": 1,
  "numéro": 1,
  "titre": "Fractions",
  "catégories": ["Nombres, calcul et résolution de problèmes"],
  "objectifs": ["..."],
  "première_page": 3,
  "annexe": false
}
```

### Composant Hierarchy for Content Pages

A typical course page uses this nesting:
```svelte
<Chapitre titre="..." />
<Contenu apres_un_titre>
  <Partie numero={1} titre="..." />
  <SousPartie numero={1} titre="..." />
  <Definition lignes={2}>...</Definition>
  <Exemples lignes={3}>
    <Item>...</Item>
  </Exemples>
</Contenu>
```

**Chapter structuring** (`composants/de_chapitrage/`): `Chapitre`, `Partie`, `SousPartie`, `SousSousPartie`, `Contenu`, `DansLaMarge`, `Annexe`

**Course paragraphs** (`composants/de_cours/`): All extend `Paragraphe.svelte` base. Key types: `Definition`, `Theoreme`, `Propriete`, `Formule`, `Exemple(s)`, `Demonstration`, `Remarque`, `Methode`, `Texte`, `Vocabulaire`, `Schema`, `Tableau`

The `lignes` prop on paragraphs specifies height in "carreaux" (grid squares). Colors: red for theorems/properties, green for definitions, blue for conventions, black for general text.

**Exercise components** (`composants/d_exercices/`): `Activité`, `Exercice`, `Énoncé`, `Question`

**SVG geometry** (`composants/svg/`): Extensive library — `Point`, `Segment`, `Cercle`, `Droite`, `Polygone`, `AngleDroit`, `Angle`, `Grille`, `AxeGradué`, and 3D perspective shapes (`perspective_cavalière/`)

**Math rendering**: Uses `mathlifier` package — pattern is `{@html math('LaTeX expression')}`

### Class Assignment Tool (`www/src/lib/constitution_classes/`)

Drag-and-drop interface for assigning students to classes with option constraints (Latin, Greek, LV2). Uses `PersistedState` for localStorage persistence. Supports Excel import/export.

### Keyboard Shortcuts (in notebook views)

`p` page numbers, `m` full-screen, `z` zoom, `s` Seyes grid, arrow keys navigation, Ctrl+P PDF export
