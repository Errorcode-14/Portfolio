# Cybersecurity Portfolio

A dark, terminal-themed single-page cybersecurity portfolio built with **React + TypeScript + Tailwind CSS + Framer Motion** (Vite). Static, no backend, deployable to GitHub Pages.

## Features

- Matrix-green / cyber-blue terminal theme, monospace throughout
- Live clock + pulsing `SECURE` badge in the navbar, active-section highlight
- Hero with matrix-rain canvas, cycling typewriter roles, blinking cursor
- Sections: Features, About + Education, Experience, Projects (filterable), In Development (animated progress bars), Skills (expandable groups), Tools, Certifications, Blogs, Contact (info only)
- Scroll-triggered fade-ins, hover glow on cards
- Fully responsive with a mobile hamburger menu
- No contact form (contact info only)

## Local development

```bash
npm install
npm run dev
```

Build and preview the production bundle:

```bash
npm run build
npm run preview
```

## Customize

All content lives in **`src/data.ts`** and a few `index.html` meta tags. Replace every bracketed placeholder (`[YOUR NAME]`, `[YOUR EMAIL]`, `[PROJECT TITLE]`, `[Tool 1]`, etc.) with your own details. No component edits are required for basic content changes.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. The Vite `base` in `vite.config.ts` is set to `'/portfolio/'` for a project site served at `https://<username>.github.io/portfolio/`.
   - If you rename the repo, change `base` to `'/<new-repo-name>/'`.
   - For a user site (`<username>.github.io`) or a custom domain, set `base` to `'/'`.
3. In GitHub: **Settings > Pages > Source > GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` runs `npm ci && npm run build` and publishes `dist/` automatically on every push to `main`.

## Notes

- The contact form was intentionally removed; the contact section shows info only. If you later want working submissions on a static host, use a client-side service such as Formspree or Web3Forms.
