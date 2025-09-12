import type { ExperienceQualification } from "@/types";
import { getGridColumns } from "@/shared/layout/storyblok-global-style";
import { cn } from "@/lib/utils";
import Experience from "./card";

interface ExperienceSectionProps {
  blok: ExperienceQualification;
  className?: string;
}

export default function ExperienceSection({
  blok,
  className,
}: ExperienceSectionProps) {
  const columns = getGridColumns(blok.columns || "2");

  return (
    <div className={cn("w-full", className)}>
      <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        {blok.title}
      </h3>
      <div className="space-y-4">
        {blok.experice_card?.map((expericeCard) => (
          <Experience key={expericeCard._uid} blok={expericeCard} />
        ))}
      </div>
    </div>
  );
}
