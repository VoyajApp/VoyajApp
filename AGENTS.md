# AGENTS.md

## Guide for Agents: Creating Beautiful Designs with ShadCN in the `web` Section

Welcome, agent! This guide will help you and future agents leverage [ShadCN UI](https://ui.shadcn.com/) to build visually stunning and consistent interfaces in the `/web` section of VoyajApp.

---

### 0. **Scaffold & UX-Doc First Policy (Required)**
- **Primary planning constraint:** Agents MUST plan and implement against the
  documented scaffold/UX structure first (currently `docs/page-scaffold.md`).
- **No silent deviations:** Agents MUST NOT add routes, remove routes, change
  page purpose, or alter cross-page flows unless explicitly approved by the user.
- **If conflict is detected:** Stop implementation changes and raise the conflict
  clearly. Propose options, then wait for user direction before modifying scaffold/UX docs.
- **Two-step change rule for UX/scaffold shifts:**
  1. Align current work strictly to existing docs.
  2. Handle scaffold/UX updates as a separate, explicit task (discussion first).
- **Traceability requirement:** Plans and implementation notes MUST map each
  feature step to existing scaffolded pages before introducing functionality.

---

### 1. **Getting Started with ShadCN UI**
- Ensure ShadCN is initialized in `/web` (run `npx shadcn@latest init` if not done).
- Refer to the [official docs](https://ui.shadcn.com/docs) for component usage and customization.

---

### 2. **Design Principles**
- **Consistency (Required):** Use ShadCN components by default. Exceptions MUST be
  documented and aligned with the design system.
- **Accessibility (Required):** UIs MUST support keyboard navigation, visible
  focus states, and semantic structure. Test with screen readers when possible.
- **Responsiveness (Required):** UIs MUST work across common breakpoints.
- **Minimalism (Required):** Favor clean layouts, ample whitespace, and clear
  typography.

---

### 2.1 **Constitution Compliance (Required)**
- After completing any task(s), agents MUST review changes against the
  constitution and update them until fully compliant.
- Work that does not pass this review is subject to being discarded.

---

### 3. **Component Usage**
- Import components from ShadCN as needed (e.g., `import { Button } from "@/components/ui/button"`).
- Customize via props and Tailwind classes for colors, spacing, and states.
- Use the [theme generator](https://ui.shadcn.com/themes) for custom color palettes.
- When building custom UI, ensure it matches the design system and meets
  accessibility and responsive requirements.

---

### 4. **Best Practices for Beautiful UI**
- **Typography:** Use ShadCN's font utilities for readable, elegant text.
- **Color:** Stick to the app's palette; use ShadCN's theme system for consistency.
- **Spacing:** Use Tailwind spacing utilities to create balanced layouts.
- **Animations:** Add subtle transitions for interactive elements (e.g., hover, focus).
- **Cards & Modals:** Use ShadCN's card and modal components for content grouping and dialogs.
- **Review Checklist (Required):** Confirm keyboard navigation, focus visibility,
  semantic landmarks, and layout integrity at small/medium/large breakpoints.

---

### 5. **Sample Component Structure**
```tsx
// Example: Beautiful Card using ShadCN
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function ExampleCard() {
  return (
    <Card className="max-w-md mx-auto shadow-lg rounded-xl bg-background">
      <CardHeader className="text-2xl font-bold text-primary">Welcome!</CardHeader>
      <CardContent className="text-muted-foreground">
        This is a beautiful card powered by ShadCN UI.
      </CardContent>
    </Card>
  );
}
```

---

### 6. **Resources**
- [ShadCN UI Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [VoyajApp Design System](#) *(Add link if available)*

---

### 7. **Tips for Future Agents**
- Always check for new ShadCN components and updates.
- Collaborate with designers for feedback and inspiration.
- Document custom components and design decisions in this file.

---

Happy designing! ✨

## Active Technologies
- TypeScript (Next.js App Router project) + Next.js, React, Tailwind CSS, ShadCN UI, lucide-react (001-public-pages-ui)
- N/A (static placeholder content only) (001-public-pages-ui)

## Recent Changes
- 001-public-pages-ui: Added TypeScript (Next.js App Router project) + Next.js, React, Tailwind CSS, ShadCN UI, lucide-react
