# Data Model: Public Page Placeholder Refresh

## Overview

This feature is UI-first and uses static placeholder content. The entities below define the
content structure and navigation semantics to keep page composition consistent and testable.

## Entities

### 1. PublicPage

- Purpose: Represents a scaffolded public route.
- Fields:
  - `route` (string, required): Allowed values: `/`, `/about`, `/privacy`.
  - `title` (string, required): Primary page heading.
  - `description` (string, optional): Supporting summary text.
  - `sections` (array<PublicPageSection>, required): Ordered page sections.
  - `navLinks` (array<PublicNavigationLink>, required): Page-level navigation actions.
- Validation Rules:
  - `route` MUST match a scaffolded route in `docs/page-scaffold.md`.
  - `sections` MUST include all scaffold-required placeholders for the given route.
  - `navLinks` MUST include required link targets for each route.

### 2. PublicPageSection

- Purpose: Represents one content block placeholder in a public page.
- Fields:
  - `id` (string, required): Unique section identifier within the page.
  - `label` (string, required): Human-readable section title.
  - `summary` (string, optional): Placeholder supporting copy.
  - `order` (integer, required): Render order on page.
- Validation Rules:
  - `label` MUST be non-empty and descriptive.
  - `order` MUST be unique within a page and greater than 0.
  - Section list MUST preserve scaffold semantics (for homepage: Hero, Featured missions,
    Adventure categories, Testimonials, Footer).

### 3. PublicNavigationLink

- Purpose: Represents a visitor-facing navigation action.
- Fields:
  - `label` (string, required): Link text.
  - `href` (string, required): Target route.
  - `sourceRoute` (string, required): Page where link is rendered.
  - `priority` (enum, required): `primary` or `secondary`.
- Validation Rules:
  - `href` MUST target an existing route.
  - Required links from `/` MUST include `/about`, `/privacy`, `/signup`, `/signin`.
  - `/about` and `/privacy` MUST include a route back to `/`.

## Relationships

- A `PublicPage` has many `PublicPageSection` records.
- A `PublicPage` has many `PublicNavigationLink` records.
- A `PublicNavigationLink` references one `PublicPage` via `sourceRoute`.

## State Transitions

This feature has no persisted runtime state transitions. Navigation flow transitions are:

1. `/` -> `/about`
2. `/` -> `/privacy`
3. `/` -> `/signup`
4. `/` -> `/signin`
5. `/about` -> `/`
6. `/privacy` -> `/`
