import { ContainerSection } from "@/shared/layout/container-section";
import { SectionHeader } from "@/components/atoms/shared/section-header";
import { TeamCard } from "@/components/atoms/about/team-card";
import type { OurTeam as OurTeamType, TeamCard as TeamCardType } from "@/types";
import {
  getGridColumns,
  getBackgroundColor,
  getHeaderColor,
} from "@/shared/layout/storyblok-global-style";
import { cn } from "@/lib/utils";

interface OurTeamProps {
  blok: OurTeamType;
  className?: string;
}

export function OurTeam({ blok, className }: OurTeamProps) {
  const teamCards: TeamCardType[] = Array.isArray(blok?.team_card)
    ? blok.team_card.filter(
        (card): card is TeamCardType => card.component === "teamCard",
      )
    : [];

  const backgroundColor = getBackgroundColor(blok.background_color ?? "Muted");
  const columns = getGridColumns(blok.columns ?? "Three");

  return (
    <ContainerSection
      className={className}
      background={backgroundColor}
      padding="xl"
      maxWidth="full"
      id="our-team"
    >
      <div className="text-center mb-16 max-w-3xl mx-auto">
        {blok.headline && blok.headline.length > 0 && (
          <SectionHeader
            title={blok.headline[0].text ?? ""}
            description={blok.description ?? ""}
            align="center"
            titleClassName={getHeaderColor(
              (blok.headline?.[0].highlight as string) ?? "Default Highlight",
            )}
          />
        )}
      </div>

      {teamCards.length > 0 && (
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2",
            columns,
            "gap-8 container mx-auto px-4",
          )}
        >
          {teamCards.map((card) => (
            <TeamCard key={card._uid} blok={card} />
          ))}
        </div>
      )}

      {teamCards.length === 0 && (
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No team members yet
          </h3>
          <p className="text-gray-600">
            Add team cards to introduce your amazing team
          </p>
        </div>
      )}

      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-100 rounded-full opacity-20 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-blue-200 rounded-full opacity-30 hidden lg:block" />
    </ContainerSection>
  );
}
