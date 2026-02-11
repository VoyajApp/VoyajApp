import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PublicNavigationLink } from "@/lib/public-page-content";

interface PublicNavLinksProps {
  links: PublicNavigationLink[];
  className?: string;
}

export function PublicNavLinks({ links, className }: PublicNavLinksProps) {
  return (
    <nav aria-label="Public page navigation" className={cn("flex flex-wrap gap-3", className)}>
      {links.map((link) => {
        const isPrimary = link.priority === "primary";

        return (
          <Button
            asChild
            key={`${link.sourceRoute}-${link.href}-${link.label}`}
            variant={isPrimary ? "default" : "outline"}
            className={cn(
              "public-focus h-10 px-5 font-medium",
              isPrimary
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
                : "border-slate-300 bg-white/90 text-slate-700 hover:bg-slate-100",
            )}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </nav>
  );
}
