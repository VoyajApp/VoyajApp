import { Flag, HeartHandshake, Route } from "lucide-react";
import { PublicNavLinks } from "@/components/public/public-nav-links";
import { PublicSection } from "@/components/public/public-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { publicNavigationLinks, publicPageSections } from "@/lib/public-page-content";

const teamPlaceholders = [
  {
    role: "Community Guide Lead",
    summary: "Placeholder bio showing the people who curate local experiences.",
  },
  {
    role: "Adventure Operations",
    summary: "Placeholder bio for quality, safety, and mission consistency oversight.",
  },
  {
    role: "Traveler Success",
    summary: "Placeholder bio for onboarding, support, and repeat-adventure guidance.",
  },
];

const missionHighlights = [
  {
    label: "Purpose",
    text: "Make local exploration easier to discover and more meaningful to complete.",
    icon: Flag,
  },
  {
    label: "Approach",
    text: "Blend structure and spontaneity through guided and self-paced adventure flows.",
    icon: Route,
  },
  {
    label: "Promise",
    text: "Keep experiences inclusive, navigable, and trust-first from first click onward.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  const sections = publicPageSections["/about"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="rounded-2xl border border-white/60 bg-white/75 p-5 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Public</p>
              <h1 className="text-3xl font-bold text-slate-900">About Us</h1>
            </div>
            <PublicNavLinks links={publicNavigationLinks["/about"]} />
          </div>
        </header>

        <PublicSection id={sections[0].id} title={sections[0].label} description={sections[0].summary}>
          <div className="grid gap-4 md:grid-cols-3">
            {teamPlaceholders.map((person) => (
              <Card key={person.role} className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">{person.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-600">{person.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PublicSection>

        <PublicSection id={sections[1].id} title={sections[1].label} description={sections[1].summary}>
          <div className="grid gap-4 md:grid-cols-3">
            {missionHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="border-slate-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                      <Icon className="h-4 w-4 text-indigo-600" />
                      {item.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </PublicSection>
      </div>
    </main>
  );
}
