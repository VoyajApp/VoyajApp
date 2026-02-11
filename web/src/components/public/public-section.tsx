import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PublicSectionProps {
  id: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function PublicSection({
  id,
  title,
  description,
  children,
  className,
}: PublicSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("w-full", className)}>
      <Card className="border-0 bg-white/85 shadow-lg backdrop-blur-sm">
        <CardHeader className="space-y-2">
          <CardTitle id={`${id}-title`} className="text-2xl font-semibold text-slate-900">
            {title}
          </CardTitle>
          {description ? <p className="text-sm text-slate-600">{description}</p> : null}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </section>
  );
}
