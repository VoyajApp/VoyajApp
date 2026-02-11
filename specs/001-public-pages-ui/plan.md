# Implementation Plan: Public Page Placeholder Refresh

**Branch**: `001-public-pages-ui` | **Date**: 2026-02-11 | **Spec**: `/workspaces/VoyajApp/specs/001-public-pages-ui/spec.md`
**Input**: Feature specification from `/workspaces/VoyajApp/specs/001-public-pages-ui/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command.

## Summary

Refresh public pages (`/`, `/about`, `/privacy`) with styled placeholder UI that matches
existing auth-page visual language while keeping the scaffolded route inventory and flow
unchanged. Implement only placeholder content and navigation polish, with accessibility and
responsive behavior as first-class constraints.

## Technical Context

**Language/Version**: TypeScript (Next.js App Router project)  
**Primary Dependencies**: Next.js, React, Tailwind CSS, ShadCN UI, lucide-react  
**Storage**: N/A (static placeholder content only)  
**Testing**: Existing project linting and manual UI validation checklist for critical flows  
**Target Platform**: Web browsers (desktop and mobile)  
**Project Type**: Web application (`web/` frontend)  
**Performance Goals**: Public pages render without noticeable delay and maintain smooth
interaction on standard desktop/mobile devices  
**Constraints**: Must preserve scaffold route map and page purpose from
`/workspaces/VoyajApp/docs/page-scaffold.md`; no backend/API dependency for this feature  
**Scale/Scope**: Three public pages and their navigation links to existing auth routes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Stack boundary respected (`web/` frontend, `api/` backend, HTTP-only integration)
- [x] API contract impact identified; OpenAPI/schema updates planned if needed
- [x] Security and privacy controls identified for auth/data handling changes
- [x] Critical-path test strategy defined for each planned user story
- [x] Observability/migration impact assessed (logging, health checks, migrations)
- [x] UI uses ShadCN by default; a11y + responsive checks are planned
- [x] **Scaffold/UX alignment check completed** against current docs
      (currently `docs/page-scaffold.md`)
- [x] Any route/flow/page-purpose deviation is explicitly approved and tracked
      in Complexity Tracking

Gate assessment notes:
- No stack-boundary risk: changes are confined to `web/src/app` pages.
- API contract impact is documented as additive reference-only contracts for public
  page content; no backend contract break is introduced.
- No auth or PII handling changes; risk is low and limited to presentation.
- Critical path tests are defined as page-level manual checks for navigation,
  section presence, keyboard focus, and responsive integrity.
- No migrations/health/logging changes are required for this UI-only scope.
- No scaffold deviations are planned.
- Scaffold compliance was revalidated after implementation on 2026-02-11 with
  route/section/link checks and desktop/mobile Playwright screenshots.

## Project Structure

### Documentation (this feature)

```text
/workspaces/VoyajApp/specs/001-public-pages-ui/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-pages-placeholder.openapi.yaml
└── tasks.md
```

### Source Code (repository root)

```text
/workspaces/VoyajApp/web/
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   └── privacy/page.tsx
│   ├── components/
│   └── lib/
└── tests/ (if later introduced)
```

**Structure Decision**: Use the existing Next.js frontend structure under
`/workspaces/VoyajApp/web/src/app` and update only scaffolded public page files.

## Phase 0: Outline & Research

Research tasks executed:
- Research visual consistency patterns between existing auth pages and public pages.
- Research placeholder-content best practices for pre-integration product pages.
- Research accessibility and responsive validation criteria for marketing/static pages.
- Research low-risk contract representation strategy for UI-only features.

Deliverable:
- `/workspaces/VoyajApp/specs/001-public-pages-ui/research.md`

## Phase 1: Design & Contracts

Design outputs planned:
- Data model for placeholder page sections/navigation entities.
- Reference API contract for public-page content shape (non-breaking, optional for later backend wiring).
- Quickstart validation steps for implementers and reviewers.

Deliverables:
- `/workspaces/VoyajApp/specs/001-public-pages-ui/data-model.md`
- `/workspaces/VoyajApp/specs/001-public-pages-ui/contracts/public-pages-placeholder.openapi.yaml`
- `/workspaces/VoyajApp/specs/001-public-pages-ui/quickstart.md`

Post-design Constitution Check:
- [x] All initial gates still pass.
- [x] No unresolved clarifications remain.
- [x] No scaffold/UX deviations introduced.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No constitution violations identified for this feature.
