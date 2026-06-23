# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A portfolio web app scaffolded with Angular CLI 22. As of now it is essentially empty boilerplate: a single root `App` component, no routes defined, no feature code yet. Treat this as a greenfield base to build the portfolio on.

## Commands

- `npm start` / `ng serve` — dev server at http://localhost:4200 (hot reload)
- `npm run build` / `ng build` — production build to `dist/` (default config is `production`)
- `npm run watch` — rebuild on change using the `development` configuration
- `npm test` / `ng test` — run unit tests (Vitest via `@angular/build:unit-test`)
- `ng generate component <name>` — scaffold a component (SCSS style is the configured default)

There is no lint script and no e2e setup. Single-test filtering goes through Vitest's own filters, e.g. `ng test -- <pattern>` to match by file/name.

## Architecture & conventions

- **Angular 22, standalone-only.** There are no NgModules. Bootstrapping is `bootstrapApplication(App, appConfig)` in [src/main.ts](src/main.ts); app-wide providers live in [src/app/app.config.ts](src/app/app.config.ts) (currently `provideRouter` + `provideBrowserGlobalErrorListeners`). Register new providers there.
- **Routing** is defined in [src/app/app.routes.ts](src/app/app.routes.ts) (currently `[]`). Render target is `<router-outlet>` in the root component.
- **Signals over zone change detection.** Component state uses signals (see `title = signal(...)` in [src/app/app.ts](src/app/app.ts)). Prefer signals, `computed`, and the modern reactivity APIs for new state.
- **Component file layout:** `app.ts` / `app.html` / `app.scss` / `app.spec.ts` per component (no `.component.` infix in this project's naming). Components are standalone and declare their own `imports`.
- **Styling:** SCSS. Global styles in [src/styles.scss](src/styles.scss); per-component styles via `styleUrl`. Assets are served from `public/`.
- **TypeScript is strict-leaning:** `noImplicitOverride`, `noImplicitReturns`, `noPropertyAccessFromIndexSignature`, `noFallthroughCasesInSwitch`, plus Angular's `strictInjectionParameters` / `strictInputAccessModifiers`. Use signal inputs/outputs and respect access modifiers.
- **Production budgets** (enforced on build): 500 kB warn / 1 MB error for initial bundle; 4 kB / 8 kB per component stylesheet. Keep component SCSS small.

## Tooling notes

- Formatting via Prettier (`.prettierrc`) — Angular HTML uses the `angular` parser.
- The `angular-developer` skill is available for Angular-specific architecture and code-generation guidance.
