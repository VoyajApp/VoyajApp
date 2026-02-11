# Quickstart: Public Page Placeholder Refresh

## Goal

Implement and validate styled placeholder UI updates for public routes while preserving
scaffold flow and accessibility/responsive requirements.

## Scope

- Included routes: `/`, `/about`, `/privacy`
- Must preserve links and route purpose per `docs/page-scaffold.md`
- Must visually align with existing auth pages

## Steps

1. Open project root:
   - `cd /workspaces/VoyajApp`
2. Start frontend app:
   - `cd /workspaces/VoyajApp/web`
   - `npm install`
   - `npm run dev`
3. Open pages and verify structure:
   - `http://localhost:3000/`
   - `http://localhost:3000/about`
   - `http://localhost:3000/privacy`

## Validation Checklist

1. Scaffold route and purpose validation
   - Homepage includes placeholder sections: Hero, Featured missions, Adventure categories,
     Testimonials, Footer.
   - About page contains placeholder sections for team and brand mission.
   - Privacy page contains legal placeholder content.
   - No new public routes introduced.

2. Navigation validation
   - From `/`: links to `/about`, `/privacy`, `/signup`, `/signin` are visible and working.
   - From `/about`: clear link back to `/`.
   - From `/privacy`: clear link back to `/`.

3. Accessibility validation
   - Keyboard tab order traverses all links and buttons logically.
   - Focus indicator is visible for all interactive elements.
   - Headings and landmarks remain semantically clear.

4. Responsive validation
   - Test small viewport (~360px), medium (~768px), large (~1280px).
   - No horizontal scrolling caused by layout overflow.
   - Placeholder content remains readable and non-overlapping.

## Out of Scope

- Backend data integration for public content
- New routes or changed scaffold page purposes
- Booking/marketplace/adventure functional flows
