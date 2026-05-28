# Ved Umrajkar — Portfolio Website

Personal portfolio and resume site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Deployed as a static export to GitHub Pages.

**Live site:** [enforcer03.github.io/portfolio-website](https://enforcer03.github.io/portfolio-website)

## Stack

- Next.js 14 (static export)
- TypeScript
- Tailwind CSS + Headless UI
- LaTeX resume (`main.tex` → `main.pdf`)

## Getting Started

```bash
yarn install
yarn dev        # http://localhost:3000/portfolio-website
```

```bash
yarn build      # compiles TS + builds static export
yarn lint       # prettier + eslint
```

## Customisation

All site content lives in [`src/data/profile.json`](src/data/profile.json) — edit that file to update bio, timeline, socials, and contact info. The resume PDF goes in `public/assets/resume.pdf`.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that runs `yarn build` and deploys the `out/` directory to GitHub Pages.

## License

MIT
