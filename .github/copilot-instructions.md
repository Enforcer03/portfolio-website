## Repo overview

This is a Next.js (v14) TypeScript resume-template site styled with Tailwind and small SCSS overrides. Data is driven from a single source (`src/data/data.tsx`) and rendered by small, focused React components in `src/components`.

## Quick dev commands

- Install: `yarn install` (this project uses Yarn)
- Dev: `yarn dev` (runs `yarn compile && yarn next dev` — note it runs `tsc --build` before starting Next)
- Build: `yarn build` (runs `yarn compile && yarn next build`)
- Start (production): `yarn start` (runs build then `next start`)
- Lint & format: `yarn lint` (Prettier + ESLint)

Put any runtime/static assets (resume PDF, images) in `public/assets` and reference them like `/assets/resume.pdf` (see `heroData.actions` in `src/data/data.tsx`).

## Key patterns and conventions (follow these)

- Single source of truth for page content: `src/data/data.tsx`. Update text, lists, and arrays here to change the site. Types are declared in `src/data/dataDef.ts`.
- Sections map to IDs defined in `src/data/data.tsx` via `SectionId`. Components use those constants as HTML `id` attributes (see `src/components/Layout/Section.tsx`). Do not rename IDs without updating all references.
- Visual sections live in `src/components/Sections/*`. Layout primitives are in `src/components/Layout/*` (e.g. `Page.tsx`, `Section.tsx`, `ResumeSection.tsx`). Use these when adding new sections for consistent spacing and responsive behavior.
- Icons: custom wrapper at `src/components/Icon/Icon.tsx`. Social icons live in `src/components/Icon/*.tsx` and are used as React components in `src/data/data.tsx` (see `socialLinks`).
- Resume and timeline entries use the `TimelineItem` shape from `src/data/dataDef.ts`. Example publication entry:

```tsx
// add to `publications` in src/data/data.tsx
{
  date: '2025',
  location: 'ICLR, Singapore',
  title: 'Paper title',
  content: <p>Short blurb about the paper.</p>,
}
```

## Build/CI notes

- The compile step runs `tsc --build`; failing type-checks can break the dev server start. Use `yarn run -T tsc --build --verbose` locally when debugging build issues.
- Linting uses Prettier + ESLint and is configured to fail on warnings (`--max-warnings=0`). Run `yarn lint` to reproduce CI lint failures locally.

## Files to check when making changes

- Content: `src/data/data.tsx`, `src/data/dataDef.ts`
- Pages: `src/pages/*` (main page is `src/pages/index.tsx`)
- Layout: `src/components/Layout/*` and `src/components/Sections/*`
- Styles: `tailwind.config.js`, `src/globalStyles.scss`, `postcss.config.js`
- Types/asset modules: `src/types.d.ts` (images are declared here)

## Gotchas & small notes

- The contact form handles inputs only — submissions are NOT wired to an email provider. See README for recommended providers.
- `Page.tsx` embeds a canonical URL pointing to `https://reactresume.com`. Update that if you change the canonical domain.
- Some components are dynamically imported with `ssr: false` (e.g., Header) — be careful when refactoring server/client boundaries.

If anything in this doc is unclear or you want more examples (adding a section, wiring an API for contact form, or CI setup), tell me which area to expand.
