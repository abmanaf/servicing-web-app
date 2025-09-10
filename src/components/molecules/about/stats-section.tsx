import { ContainerSection } from "@/shared/layout/container-section";
import { SectionHeader } from "@/components/atoms/section-header";
import { StatCard } from "@/components/atoms/about/stat-card";
import type {
  StatsSection as StatsSectionType,
  StatCard as StatCardType,
} from "@/types";
import {
  getBackgroundColor,
  getHeaderColor,
} from "@/shared/layout/storyblok-global-style";

interface StatsSectionProps {
  blok: StatsSectionType;
  className?: string;
}

export function StatsSection({ blok, className }: StatsSectionProps) {
  const statCards: StatCardType[] = Array.isArray(blok?.stat_card)
    ? blok.stat_card.filter(
        (card): card is StatCardType => card.component === "statCard",
      )
    : [];

  const backgroundColor = getBackgroundColor(
    blok.background_color ?? "Default",
  );

  const headerColor = getHeaderColor(blok.headline?.[0].highlight ?? "Default");
  return (
    <ContainerSection
      className={className}
      background={backgroundColor}
      padding="xl"
      maxWidth="7xl"
      id="stats-section"
    >
      <div className="text-center mb-16 max-w-4xl mx-auto">
        {blok.headline && blok.headline.length > 0 && (
          <SectionHeader
            title={blok.headline[0].text || ""}
            description={blok.description || ""}
            align="center"
            titleClassName={headerColor}
          />
        )}
      </div>

      {statCards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statCards.map((card, index) => (
            <StatCard
              key={card._uid}
              blok={card}
              animate={blok.animation !== "none"}
              delay={index * 200}
            />
          ))}
        </div>
      )}

      {statCards.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No statistics available
          </h3>
          <p className="text-gray-600">
            Add stat cards to display your achievements
          </p>
        </div>
      )}

      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 hidden lg:block" />
    </ContainerSection>
  );
}
