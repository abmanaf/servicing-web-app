import { ContainerSection } from "@/shared/layout/container-section";
import { SectionHeader } from "@/components/atoms/shared/section-header";
import { WorkProcessCard } from "@/components/atoms/service/work-process-card";
import type {
  WorkProcess as WorkProcessType,
  WorkProcessCard as WorkProcessCardType,
} from "@/types";
import {
  getBackgroundColor,
  getGridColumns,
  getHeaderColor,
} from "@/shared/layout/storyblok-global-style";
import { cn } from "@/lib/utils";
import EmptyService from "@/components/atoms/home/empty-service";

interface WorkProcessProps {
  blok: WorkProcessType;
  className?: string;
}

export function WorkProcess({ blok, className }: WorkProcessProps) {
  const processCards: WorkProcessCardType[] = Array.isArray(blok?.work_progress)
    ? blok.work_progress.filter(
        (card): card is WorkProcessCardType =>
          card.component === "workProcessCard",
      )
    : [];

  const columns = getGridColumns(blok.column ?? "4");
  const backgroundColor = getBackgroundColor(blok.background_colors ?? "Muted");
  const headerColor = getHeaderColor(
    blok.header?.[0]?.highlight ?? "Default Highlight",
  );

  return (
    <ContainerSection
      className={className}
      background={backgroundColor}
      padding="md"
      maxWidth="full"
      id="work-process"
    >
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <SectionHeader
          title={blok?.header?.[0]?.text ?? ""}
          description={blok?.description ?? ""}
          align="center"
          titleClassName={headerColor}
        />
      </div>

      {processCards.length > 0 && (
        <div className="relative">
          <div
            className={cn(
              "grid grid-cols-1 gap-8 container mx-auto lg:px-4 relative",
              columns,
            )}
          >
            {processCards.map((card) => (
              <WorkProcessCard key={card._uid} blok={card} />
            ))}
          </div>
        </div>
      )}

      {processCards.length === 0 && (
        <div className="text-center py-16">
          <EmptyService />
        </div>
      )}
    </ContainerSection>
  );
}
