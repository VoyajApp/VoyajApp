# Voyaj

Voyaj is a web application for discovering, booking, and running real-world adventures. It connects Adventurers with local Guides through a marketplace, and provides role-based dashboards, profiles, and end-to-end authentication flows.

This repository currently contains the web frontend (Next.js + Tailwind + ShadCN UI) under the `web` directory.

## Overview
- Purpose: Enable Adventurers to browse marketplace listings and track trips, while Guides manage offerings, profiles, and earnings.
- Key Areas:
	- Landing and static pages (About, Privacy)
	- Authentication (email and social flows: sign in/up, activation, password reset)
	- Adventurer area: dashboard, active adventures, logs, profile
	- Guide area: dashboard, local tools, earnings, profile
	- Marketplace: browse and discover adventures

## Repository Layout
- Web app source lives in [web](web/README.md)
	- App routes and pages in [web/src/app](web/src/app)
	- UI components in [web/src/components/ui](web/src/components/ui)
	- Utilities in [web/src/lib](web/src/lib)

## Tech Stack
- Framework: Next.js (App Router) with React and React Compiler enabled ([web/next.config.ts](web/next.config.ts))
- Language: TypeScript
- UI: Tailwind CSS v4, ShadCN UI, Radix UI, lucide-react
- Forms & Validation: react-hook-form, zod
- Tooling: ESLint, PostCSS, TypeScript

See project dependencies in [web/package.json](web/package.json).

## Getting Started (Web)
Prerequisites: a recent Node.js LTS and a package manager (npm/yarn/pnpm). The commands below use npm.

1) Install dependencies

```bash
cd web
npm install
```

2) Run the development server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

3) Production build and start

```bash
npm run build
npm start
```

4) Lint

```bash
npm run lint
```

## App Structure
- Global shell and theme: [web/src/app/layout.tsx](web/src/app/layout.tsx), [web/src/app/globals.css](web/src/app/globals.css)
- Landing: [web/src/app/page.tsx](web/src/app/page.tsx)
- Static pages: [web/src/app/about/page.tsx](web/src/app/about/page.tsx), [web/src/app/privacy/page.tsx](web/src/app/privacy/page.tsx)
- Auth flows: [web/src/app/(auth)](web/src/app/(auth)) — activate, forgot-password, reset-password, signin, signup, social-signin, social-signup
- Adventurer area: [web/src/app/adventure](web/src/app/adventure)
- Guide area: [web/src/app/guide](web/src/app/guide)
- Marketplace: [web/src/app/marketplace/page.tsx](web/src/app/marketplace/page.tsx)
- UI components: [web/src/components/ui](web/src/components/ui) (e.g., [button](web/src/components/ui/button.tsx))
- Utilities: [web/src/lib/utils.ts](web/src/lib/utils.ts)

Most routes currently contain scaffolds/placeholders ready to be wired to real data and logic.

## UI & Design
- ShadCN UI is configured (see [web/components.json](web/components.json)) and Tailwind v4 tokens/theme are defined in [web/src/app/globals.css](web/src/app/globals.css).
- For design guidelines and examples, see [AGENTS.md](AGENTS.md).
- Prefer ShadCN components for consistency and accessibility across the app.

## Contributing
- Open issues and roadmap discussion live in GitHub Issues: https://github.com/VoyajApp/VoyajApp/issues
- Suggested next areas: authentication backend integration, marketplace data model and APIs, dashboards, deployment pipeline, and analytics.

## Notes
- The web app is the primary focus at this stage; backend/APIs and data persistence are to be integrated next according to the open issues.