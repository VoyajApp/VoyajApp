export type PublicPageRoute = "/" | "/about" | "/privacy";

export interface PublicPageSection {
  id: string;
  label: string;
  summary: string;
  order: number;
}

export interface PublicNavigationLink {
  label: string;
  href: string;
  sourceRoute: PublicPageRoute;
  priority: "primary" | "secondary";
}

/*
 Scaffold guardrails (docs/page-scaffold.md):
 - Keep public route inventory fixed to `/`, `/about`, and `/privacy`.
 - Keep page purposes fixed: landing, about, privacy/terms.
 - Required homepage sections: Hero, Featured missions, Adventure categories,
   Testimonials, Footer.
 - Required links from `/`: `/about`, `/privacy`, `/signup`, `/signin`.
 - Required links from `/about` and `/privacy`: back to `/`.
*/

export const publicPageSections: Record<PublicPageRoute, PublicPageSection[]> = {
  "/": [
    {
      id: "hero",
      label: "Hero",
      summary: "Primary value proposition and route to account entry points.",
      order: 1,
    },
    {
      id: "featured-missions",
      label: "Featured missions",
      summary: "Sample mission cards that preview marketplace-style experiences.",
      order: 2,
    },
    {
      id: "adventure-categories",
      label: "Adventure categories",
      summary: "Curated category placeholders to signal browseable trip themes.",
      order: 3,
    },
    {
      id: "testimonials",
      label: "Testimonials",
      summary: "Trust-building quotes and social proof placeholders.",
      order: 4,
    },
    {
      id: "footer",
      label: "Footer",
      summary: "Essential navigation and product trust links.",
      order: 5,
    },
  ],
  "/about": [
    {
      id: "meet-the-team",
      label: "Meet the team",
      summary: "Placeholder bios that explain guide and adventurer expertise.",
      order: 1,
    },
    {
      id: "brand-story-mission",
      label: "Brand story & mission",
      summary: "Narrative placeholder describing the mission behind Voyaj.",
      order: 2,
    },
  ],
  "/privacy": [
    {
      id: "legal-text",
      label: "Legal text placeholder",
      summary: "Policy and terms placeholder sections for legal transparency.",
      order: 1,
    },
  ],
};

export const publicNavigationLinks: Record<PublicPageRoute, PublicNavigationLink[]> = {
  "/": [
    { label: "About", href: "/about", sourceRoute: "/", priority: "secondary" },
    { label: "Privacy", href: "/privacy", sourceRoute: "/", priority: "secondary" },
    { label: "Sign Up", href: "/signup", sourceRoute: "/", priority: "primary" },
    { label: "Sign In", href: "/signin", sourceRoute: "/", priority: "secondary" },
  ],
  "/about": [
    { label: "Back to Home", href: "/", sourceRoute: "/about", priority: "secondary" },
  ],
  "/privacy": [
    { label: "Back to Home", href: "/", sourceRoute: "/privacy", priority: "secondary" },
  ],
};
