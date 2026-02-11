---

description: "Task list for Public Page Placeholder Refresh"
---

# Tasks: Public Page Placeholder Refresh

**Input**: Design documents from `/workspaces/VoyajApp/specs/001-public-pages-ui/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Tests are not explicitly requested in the feature spec. This plan uses linting + manual validation checkpoints from quickstart.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm baseline and gather reusable UI patterns before page work starts.

- [X] T001 Review scaffold requirements in `/workspaces/VoyajApp/docs/page-scaffold.md` and capture required sections/links in `/workspaces/VoyajApp/specs/001-public-pages-ui/quickstart.md`
- [X] T002 Review auth-page visual baseline in `/workspaces/VoyajApp/web/src/components/auth-layout.tsx` and `/workspaces/VoyajApp/web/src/app/(auth)/signin/page.tsx`
- [X] T003 [P] Review public route placeholders in `/workspaces/VoyajApp/web/src/app/page.tsx`, `/workspaces/VoyajApp/web/src/app/about/page.tsx`, and `/workspaces/VoyajApp/web/src/app/privacy/page.tsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create shared public-page presentation primitives and enforce scaffold/UX constraints.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T004 Create shared public-page section wrappers and heading patterns in `/workspaces/VoyajApp/web/src/components/public/public-section.tsx`
- [X] T005 [P] Create shared public navigation cluster component for public/auth links in `/workspaces/VoyajApp/web/src/components/public/public-nav-links.tsx`
- [X] T006 [P] Add public-page placeholder content constants aligned to data model entities in `/workspaces/VoyajApp/web/src/lib/public-page-content.ts`
- [X] T007 Add scaffold guardrail notes and route-purpose checklist comments to `/workspaces/VoyajApp/web/src/lib/public-page-content.ts`
- [X] T008 Run lint baseline before story implementation from `/workspaces/VoyajApp/web` using `npm run lint`

**Checkpoint**: Foundation ready; user story implementation can proceed independently.

---

## Phase 3: User Story 1 - Public Landing Consistency (Priority: P1) 🎯 MVP

**Goal**: Refresh `/` with styled placeholders and clear links while matching auth-page visual baseline.

**Independent Test**: Open `/` and verify required sections (Hero, Featured missions, Adventure categories, Testimonials, Footer) plus links to `/about`, `/privacy`, `/signup`, `/signin`.

### Implementation for User Story 1

- [X] T009 [US1] Implement public landing page structure using shared components in `/workspaces/VoyajApp/web/src/app/page.tsx`
- [X] T010 [US1] Add hero and featured placeholder blocks wired from `/workspaces/VoyajApp/web/src/lib/public-page-content.ts` in `/workspaces/VoyajApp/web/src/app/page.tsx`
- [X] T011 [US1] Add categories, testimonials, and footer placeholder blocks in `/workspaces/VoyajApp/web/src/app/page.tsx`
- [X] T012 [US1] Add visible primary/secondary navigation links to `/about`, `/privacy`, `/signup`, and `/signin` in `/workspaces/VoyajApp/web/src/app/page.tsx`
- [X] T013 [US1] Validate heading hierarchy and landmark semantics for homepage sections in `/workspaces/VoyajApp/web/src/app/page.tsx`

**Checkpoint**: User Story 1 should be fully functional and testable on its own.

---

## Phase 4: User Story 2 - Informational Page Clarity (Priority: P2)

**Goal**: Refresh `/about` and `/privacy` placeholders with clear structure and return navigation.

**Independent Test**: Open `/about` and `/privacy`; verify scaffold-required placeholder sections and clear links back to `/`.

### Implementation for User Story 2

- [X] T014 [P] [US2] Implement structured About placeholders (team + mission) in `/workspaces/VoyajApp/web/src/app/about/page.tsx`
- [X] T015 [P] [US2] Implement structured Privacy placeholders (legal section blocks) in `/workspaces/VoyajApp/web/src/app/privacy/page.tsx`
- [X] T016 [US2] Add clear back-to-home navigation treatment in `/workspaces/VoyajApp/web/src/app/about/page.tsx`
- [X] T017 [US2] Add clear back-to-home navigation treatment in `/workspaces/VoyajApp/web/src/app/privacy/page.tsx`
- [X] T018 [US2] Align typography and spacing rhythm between `/about` and `/privacy` in `/workspaces/VoyajApp/web/src/app/about/page.tsx` and `/workspaces/VoyajApp/web/src/app/privacy/page.tsx`

**Checkpoint**: User Stories 1 and 2 both function independently and preserve scaffold mapping.

---

## Phase 5: User Story 3 - Accessible Public Navigation (Priority: P3)

**Goal**: Ensure keyboard navigation, focus visibility, and responsive readability across public pages.

**Independent Test**: Keyboard-only traversal and breakpoint checks pass for `/`, `/about`, and `/privacy` without horizontal overflow.

### Implementation for User Story 3

- [X] T019 [US3] Add consistent visible focus styles for public-page interactive elements in `/workspaces/VoyajApp/web/src/app/globals.css`
- [X] T020 [P] [US3] Refine responsive layout behavior for homepage sections in `/workspaces/VoyajApp/web/src/app/page.tsx`
- [X] T021 [P] [US3] Refine responsive layout behavior for About page in `/workspaces/VoyajApp/web/src/app/about/page.tsx`
- [X] T022 [P] [US3] Refine responsive layout behavior for Privacy page in `/workspaces/VoyajApp/web/src/app/privacy/page.tsx`
- [X] T023 [US3] Validate keyboard tab order and focus visibility across all public routes in `/workspaces/VoyajApp/specs/001-public-pages-ui/quickstart.md`

**Checkpoint**: All user stories satisfy accessibility and responsive acceptance outcomes.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency checks, documentation updates, and release readiness.

- [X] T024 [P] Update feature quickstart validation notes with final findings in `/workspaces/VoyajApp/specs/001-public-pages-ui/quickstart.md`
- [X] T025 Run final lint and capture output notes from `/workspaces/VoyajApp/web` using `npm run lint`
- [X] T026 Confirm scaffold route-purpose compliance against `/workspaces/VoyajApp/docs/page-scaffold.md` and update `/workspaces/VoyajApp/specs/001-public-pages-ui/plan.md` if needed

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Starts immediately.
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories.
- **User Stories (Phase 3+)**: Depend on Foundational completion.
- **Polish (Phase 6)**: Depends on all user story phases being complete.

### User Story Dependencies

- **US1 (P1)**: Starts after Phase 2; delivers MVP by itself.
- **US2 (P2)**: Starts after Phase 2; independent from US1 except shared styling primitives.
- **US3 (P3)**: Starts after US1 and US2 implementations to validate and harden full public flow.

### Dependency Graph

- Phase 1 -> Phase 2 -> US1
- Phase 2 -> US2
- US1 + US2 -> US3
- US1 + US2 + US3 -> Phase 6

---

## Parallel Execution Opportunities

- **Phase 2**: `T005` and `T006` can run in parallel after `T004` starts shared component structure.
- **US2**: `T014` and `T015` can run in parallel across different files.
- **US3**: `T020`, `T021`, and `T022` can run in parallel after `T019` establishes global focus styles.
- **Phase 6**: `T024` can run in parallel with `T025`.

## Parallel Example: User Story 2

```bash
Task: "T014 [US2] Implement structured About placeholders in /workspaces/VoyajApp/web/src/app/about/page.tsx"
Task: "T015 [US2] Implement structured Privacy placeholders in /workspaces/VoyajApp/web/src/app/privacy/page.tsx"
```

## Parallel Example: User Story 3

```bash
Task: "T020 [US3] Refine responsive layout behavior for homepage sections in /workspaces/VoyajApp/web/src/app/page.tsx"
Task: "T021 [US3] Refine responsive layout behavior for About page in /workspaces/VoyajApp/web/src/app/about/page.tsx"
Task: "T022 [US3] Refine responsive layout behavior for Privacy page in /workspaces/VoyajApp/web/src/app/privacy/page.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 2: Foundational.
3. Complete Phase 3: User Story 1.
4. Validate `/` independently against scaffold, navigation, and visual baseline.

### Incremental Delivery

1. Deliver US1 (landing).
2. Deliver US2 (about/privacy clarity).
3. Deliver US3 (a11y/responsive hardening).
4. Execute Phase 6 polish and final compliance checks.

### Team Parallel Strategy

1. One contributor completes Phase 1 and Phase 2.
2. Then split by files:
   - Contributor A: US1 (`/workspaces/VoyajApp/web/src/app/page.tsx`)
   - Contributor B: US2 (`/workspaces/VoyajApp/web/src/app/about/page.tsx`, `/workspaces/VoyajApp/web/src/app/privacy/page.tsx`)
3. Rejoin for US3 and Phase 6 validation.

---

## Validation Summary

- Every task follows required checklist format: `- [ ] T### [P?] [US?] Description with file path`.
- Each user story has independently testable outcomes tied to its phase checkpoint.
- Task list preserves scaffold route inventory and page-purpose constraints.
