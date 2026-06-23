# Portfolio — Anna Sakhaudinova

Personal portfolio of **Anna Sakhaudinova**, Frontend Developer. A fast,
accessible single-page site built with Angular 22 (standalone components,
signals, zoneless-friendly reactivity).

**Live:** https://atsa21.github.io/portfolio/

## Tech stack

- **Angular 22** — standalone components, no NgModules
- **Signals** for component state; `OnPush` change detection throughout
- **TypeScript** (strict-leaning compiler options)
- **SCSS** with per-component styles
- **Vitest** for unit tests

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:4200 (hot reload)
```

## Scripts

| Command          | Description                                              |
| ---------------- | ------------------------------------------------------- |
| `npm start`      | Dev server with hot reload                               |
| `npm run build`  | Production build to `dist/portfolio/browser`             |
| `npm run watch`  | Rebuild on change (development configuration)            |
| `npm test`       | Run unit tests (Vitest)                                  |

## Project structure

```
src/app/
├── core/                     # app-wide, non-visual concerns
│   ├── models/               # TypeScript interfaces (Project, WorkExperience, …)
│   └── constants/            # content data — one file per constant
├── features/
│   └── landing/              # the landing page feature
│       ├── landing.*         # page shell that composes the sections
│       └── sections/         # hero, about, experience, project-grid, marquee,
│                             #   site-nav, site-footer
├── shared/
│   └── directives/           # reusable directives (e.g. scroll reveal)
└── app.*                     # root component, routes, config
```

### Path aliases

Imports use aliases (configured in [tsconfig.json](tsconfig.json)) instead of
deep relative paths:

| Alias        | Maps to            |
| ------------ | ------------------ |
| `@core/*`    | `src/app/core/*`    |
| `@shared/*`  | `src/app/shared/*`  |
| `@features/*`| `src/app/features/*`|

```ts
import { profile, socials } from '@core/constants';
import { Project } from '@core/models';
import { RevealDirective } from '@shared/directives/reveal.directive';
```

### Editing content

All site content (profile, skills, experience, projects, socials) lives in
[src/app/core/constants/](src/app/core/constants/) — edit those files to update
the site; no component changes needed.

## Deployment

Deployed manually to GitHub Pages with
[angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages):

```bash
npm run deploy
```

This builds the app with `--base-href /portfolio/` and pushes the output to the
`gh-pages` branch. One-time setup: in **Settings → Pages**, set the source to
**Deploy from a branch → `gh-pages` / `(root)`**. The live URL updates a minute
or two after each deploy.
