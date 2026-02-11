# Research: Public Page Placeholder Refresh

## Decision 1: Use auth-page visual baseline for public placeholders

- Decision: Match the visual baseline established by existing auth flows: gradient-backed
  layouts, clear card/section hierarchy, consistent spacing rhythm, and prominent primary CTAs.
- Rationale: The feature request explicitly asks public pages to align with auth/login/registration
  UI; consistency improves trust and reduces perceived product fragmentation.
- Alternatives considered:
  - Keep current unstyled scaffold text only: rejected because it fails the requested visual refresh.
  - Create a totally new visual language for public pages: rejected because it breaks
    consistency requirements and increases rework risk.

## Decision 2: Keep scope strictly scaffold-aligned

- Decision: Restrict work to existing scaffold routes and purposes: `/`, `/about`, `/privacy`.
- Rationale: Constitution Principle VI requires scaffold/UX-doc compliance and forbids unapproved
  route or flow changes.
- Alternatives considered:
  - Add new public routes (e.g., dedicated marketing sections): rejected due to out-of-scope
    scaffold changes.
  - Repurpose existing pages into new flows: rejected due to explicit governance constraints.

## Decision 3: Treat feature as UI-only with no runtime data dependency

- Decision: Use static placeholder content for V1 and avoid backend integration.
- Rationale: Feature scope is placeholder UI refresh; adding dynamic content increases complexity
  and delays delivery without improving immediate validation goals.
- Alternatives considered:
  - Pull content from backend CMS or API: rejected as unnecessary coupling for placeholder stage.
  - Add temporary local API handlers: rejected as added maintenance burden.

## Decision 4: Validate accessibility and responsiveness as release gates

- Decision: Include keyboard-navigation and cross-breakpoint readability checks in quickstart.
- Rationale: Constitution requires accessibility and responsiveness for all UI changes.
- Alternatives considered:
  - Desktop-only visual review: rejected because it misses required a11y/responsive coverage.
  - Purely subjective UI review: rejected because it is less testable and less repeatable.

## Decision 5: Provide a reference OpenAPI contract for future content wiring

- Decision: Add a non-breaking contract file describing optional public-page content endpoints.
- Rationale: Constitution requires API contract impact assessment. Even though this is UI-only,
  a reference contract records expected content shape for future backend integration.
- Alternatives considered:
  - No contract artifact at all: rejected because plan workflow requires contracts output.
  - Fully committing to backend implementation now: rejected as out of scope for placeholder refresh.

## Clarification resolution status

All Technical Context entries are resolved. No `NEEDS CLARIFICATION` items remain.
