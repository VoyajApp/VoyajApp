import { Compass, MapPinned, Mountain, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PublicNavLinks } from "@/components/public/public-nav-links";
import { PublicSection } from "@/components/public/public-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { publicNavigationLinks, publicPageSections } from "@/lib/public-page-content";

const featuredMissionPlaceholders = [
  {
    title: "Sunrise Ridge Sprint",
    description: "Half-day challenge placeholder blending views, checkpoints, and local stories.",
    icon: Mountain,
  },
  {
    title: "Old Town Signal Run",
    description: "City discovery placeholder with clue-driven stops and flexible pacing.",
    icon: MapPinned,
  },
  {
    title: "Harbor Twilight Route",
    description: "Evening placeholder mission focused on landmarks, food, and photo moments.",
    icon: Compass,
  },
];

const categoryPlaceholders = ["City Quests", "Nature Tracks", "Weekend Challenges", "Family-Friendly", "Cultural Trails", "Night Missions"];

const testimonialPlaceholders = [
  {
    quote: "The flow feels clear from landing to sign-in, even at placeholder stage.",
    name: "Early Tester",
  },
  {
    quote: "I can already picture how missions and guides will fit in this layout.",
    name: "Design Review Group",
  },
];

export default function Page() {
  const sections = publicPageSections["/"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-bold text-white">
                V
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Voyaj</p>
                <h1 className="text-2xl font-bold text-slate-900">Landing Page</h1>
              </div>
            </div>
            <PublicNavLinks links={publicNavigationLinks["/"]} />
          </div>
        </header>

        <PublicSection
          id={sections[0].id}
          title={sections[0].label}
          description={sections[0].summary}
          className="scroll-mt-6"
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                <Sparkles className="h-3.5 w-3.5" />
                Placeholder Public Experience
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Discover local adventures built for curious travelers.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600">
                This hero block is a styled placeholder mirroring auth-page polish while preserving
                scaffolded flow. Real listings, guide details, and booking logic will be connected in
                later phases.
              </p>
            </div>
            <Card className="border-slate-200 bg-white/90">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-slate-900">Why this placeholder exists</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <p>Clear hierarchy for quick scanning.</p>
                <p>Visible entry points to sign-up and sign-in.</p>
                <p>Reusable section layout for consistent future content.</p>
              </CardContent>
            </Card>
          </div>
        </PublicSection>

        <PublicSection id={sections[1].id} title={sections[1].label} description={sections[1].summary}>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredMissionPlaceholders.map((mission) => {
              const Icon = mission.icon;
              return (
                <Card key={mission.title} className="border-slate-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                      <Icon className="h-4 w-4 text-blue-600" />
                      {mission.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-slate-600">{mission.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </PublicSection>

        <PublicSection id={sections[2].id} title={sections[2].label} description={sections[2].summary}>
          <div className="flex flex-wrap gap-3">
            {categoryPlaceholders.map((category) => (
              <span
                key={category}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {category}
              </span>
            ))}
          </div>
        </PublicSection>

        <PublicSection id={sections[3].id} title={sections[3].label} description={sections[3].summary}>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonialPlaceholders.map((testimonial) => (
              <Card key={testimonial.name} className="border-slate-200 bg-white">
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm leading-relaxed text-slate-700">“{testimonial.quote}”</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PublicSection>

        <PublicSection id={sections[4].id} title={sections[4].label} description={sections[4].summary}>
          <div className="space-y-4">
            <Separator />
            <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Placeholder trust and legal information will live here.
              </p>
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4 text-indigo-600" />
                Built for adventurers and guides.
              </p>
            </div>
          </div>
        </PublicSection>
      </div>
    </main>
  );
}
