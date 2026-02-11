import { BookCheck, LockKeyhole, ScrollText } from "lucide-react";
import { PublicNavLinks } from "@/components/public/public-nav-links";
import { PublicSection } from "@/components/public/public-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { publicNavigationLinks, publicPageSections } from "@/lib/public-page-content";

const legalPlaceholders = [
  {
    title: "Privacy Practices",
    icon: LockKeyhole,
    points: [
      "Placeholder copy for what user data is collected and why.",
      "Placeholder copy for retention and deletion requests.",
      "Placeholder copy for consent and communication settings.",
    ],
  },
  {
    title: "Terms of Use",
    icon: ScrollText,
    points: [
      "Placeholder copy for user responsibilities and acceptable use.",
      "Placeholder copy for booking, cancellation, and refund policies.",
      "Placeholder copy for platform rights and service boundaries.",
    ],
  },
  {
    title: "Compliance & Contact",
    icon: BookCheck,
    points: [
      "Placeholder copy for regional compliance obligations.",
      "Placeholder copy for legal updates and effective dates.",
      "Placeholder copy for contact channels related to policy questions.",
    ],
  },
];

export default function PrivacyPage() {
  const sections = publicPageSections["/privacy"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="rounded-2xl border border-white/60 bg-white/75 p-5 shadow-lg backdrop-blur-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Public</p>
              <h1 className="text-3xl font-bold text-slate-900">Privacy Policy / Terms</h1>
            </div>
            <PublicNavLinks links={publicNavigationLinks["/privacy"]} />
          </div>
        </header>

        <PublicSection id={sections[0].id} title={sections[0].label} description={sections[0].summary}>
          <div className="grid gap-4 md:grid-cols-3">
            {legalPlaceholders.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="border-slate-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                      <Icon className="h-4 w-4 text-blue-600" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
                      {item.points.map((point) => (
                        <li key={point} className="list-inside list-disc">
                          {point}
                        </li>
                      ))}
                    </ul>
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
