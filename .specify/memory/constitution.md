<!--
Sync Impact Report
- Version: 1.2.0 → 1.3.0
- Modified principles:
	- VI. UI Consistency, Accessibility, and Responsiveness
		→ VI. UI Consistency, Accessibility, Responsiveness, and Scaffold Compliance
- Added sections: N/A
- Removed sections: N/A
- Templates requiring updates:
	- ✅ .specify/templates/plan-template.md
	- ✅ .specify/templates/spec-template.md
	- ✅ .specify/templates/tasks-template.md
	- ⚠ .specify/templates/commands/*.md (directory not present)
- Runtime guidance requiring updates:
	- ✅ AGENTS.md
	- ✅ README.md
- Deferred placeholders/TODOs:
	- TODO(RATIFICATION_DATE): original ratification date unknown
-->
# Voyaj Constitution

## Core Principles

### I. Stack Boundary & Directory Ownership
The `web/` directory MUST contain only the Next.js frontend (App Router) and
its UI logic. The `api/` directory MUST contain only the Django backend and its
server-side logic. Frontend and backend MUST communicate exclusively through
documented HTTP APIs; no shared runtime code or direct database access from the
frontend is permitted. Rationale: clear ownership and deployability.

### II. Contract-First API & Typed Clients
Every API change MUST update a single source of truth contract (OpenAPI or
equivalent). The frontend MUST consume API responses via generated types or
runtime-validated schemas; ad-hoc, unvalidated JSON usage is forbidden.
Breaking API changes MUST be versioned and announced in the contract.
Rationale: prevent drift and runtime regressions.

### III. Security & Privacy by Default (NON-NEGOTIABLE)
All authentication and authorization MUST be enforced server-side. Secrets MUST
live in environment variables or managed secret stores, never in source.
CSRF protection, secure cookies, and input validation MUST be enabled for
state-changing requests. Personally identifiable data MUST NOT be logged.
Rationale: protect users and data.

### IV. Test Coverage for Critical Paths
Changes to user-facing flows or API endpoints MUST include automated tests
covering the critical path. API endpoints MUST have integration tests that
exercise database interaction. Frontend critical flows MUST have at least one
automated UI test or equivalent contract-driven test. Rationale: prevent
regressions in core journeys.

### V. Operational Readiness & Observability
Backend services MUST provide health checks and structured logging. Database
schema changes MUST be done via migrations and be reversible. Performance
budgets MUST be respected (Core Web Vitals for web; p95 latency targets for API
as defined in specs). Rationale: safe deployment and reliable operation.

### VI. UI Consistency, Accessibility, Responsiveness, and Scaffold Compliance
All new or modified web UI MUST use ShadCN components unless a documented
exception is approved. UI MUST meet accessibility basics (keyboard navigation,
focus states, semantic structure) and be responsive across common breakpoints.
Visual design MUST favor minimalism, clear typography, and consistent spacing.
Planning and implementation MUST align to the currently documented page scaffold
and UX docs (currently `docs/page-scaffold.md`) before introducing new flows.
Agents MUST NOT add routes, remove routes, repurpose scaffolded pages, or change
cross-page flow definitions without explicit user approval in a separate
scaffold/UX update task.
Rationale: consistent, inclusive, and maintainable user experiences.

## Architecture & Stack Constraints

- Frontend: Next.js App Router in `web/`, TypeScript, Tailwind, ShadCN UI.
- Backend: Django (with a REST framework) in `api/`, PostgreSQL as the system of
	record.
- Shared contracts: OpenAPI (or equivalent) committed in-repo and used to
	generate or validate client types.
- Configuration: environment-based settings for all secrets and deploy
	differences; no hard-coded endpoints in the frontend.
- Data: all persistent data MUST live in PostgreSQL and be accessed via Django
	ORM in the backend.
- UI: ShadCN components are the default; custom UI MUST match the design system
	and meet accessibility and responsive requirements.
- Scaffold and UX documentation are authoritative for route inventory and page
	flow definitions until explicitly amended.

## Delivery Workflow & Quality Gates

- Every change MUST pass linting, type checks, and required tests before merge.
- PRs MUST include a clear description of contract changes and migration steps.
- Backward-incompatible API changes MUST include a migration plan and version
	bump in the contract.
- Release notes MUST call out user-visible changes and risk areas.
- Web UI changes MUST include an accessibility and responsive layout review.
- Feature plans MUST include a route-flow alignment check against scaffold/UX
	docs and document any approved exceptions.
- After completing any task(s), changes MUST be reviewed against this
	constitution and updated until fully compliant.

## Governance

- This constitution supersedes all other development guidance.
- Amendments require a documented proposal, rationale, and impact analysis,
	plus updates to dependent templates and guidance files.
- Versioning follows semantic rules: MAJOR for incompatible governance changes,
	MINOR for new or expanded rules, PATCH for clarifications.
- Compliance is reviewed during planning and implementation; every plan MUST
	complete a Constitution Check and document any justified exceptions.
- Any scaffold/UX-doc deviation MUST be approved before implementation and
	recorded in both the feature plan and PR description.

**Version**: 1.3.0 | **Ratified**: TODO(RATIFICATION_DATE): original ratification date unknown | **Last Amended**: 2026-02-11
