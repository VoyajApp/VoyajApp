# AGENTS.md

## Guide for Agents: Creating Beautiful Designs with ShadCN in the `web` Section

Welcome, agent! This guide will help you and future agents leverage [ShadCN UI](https://ui.shadcn.com/) to build visually stunning and consistent interfaces in the `/web` section of VoyajApp.

---

### 1. **Getting Started with ShadCN UI**
- Ensure ShadCN is initialized in `/web` (run `npx shadcn@latest init` if not done).
- Refer to the [official docs](https://ui.shadcn.com/docs) for component usage and customization.

---

### 2. **Design Principles**
- **Consistency:** Use ShadCN components for all UI elements to maintain a unified look.
- **Accessibility:** Always use accessible components and test with screen readers.
- **Responsiveness:** Ensure designs look great on all devices using ShadCN's responsive utilities.
- **Minimalism:** Favor clean layouts, ample whitespace, and clear typography.

---

### 3. **Component Usage**
- Import components from ShadCN as needed (e.g., `import { Button } from "@/components/ui/button"`).
- Customize via props and Tailwind classes for colors, spacing, and states.
- Use the [theme generator](https://ui.shadcn.com/themes) for custom color palettes.

---

### 4. **Best Practices for Beautiful UI**
- **Typography:** Use ShadCN's font utilities for readable, elegant text.
- **Color:** Stick to the app's palette; use ShadCN's theme system for consistency.
- **Spacing:** Use Tailwind spacing utilities to create balanced layouts.
- **Animations:** Add subtle transitions for interactive elements (e.g., hover, focus).
- **Cards & Modals:** Use ShadCN's card and modal components for content grouping and dialogs.

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
