import { ContainerSection } from "@/shared/layout/container-section";
import { SectionHeader } from "@/components/atoms/section-header";
import { GridCard } from "@/components/atoms/home/grid-card";
import { Button } from "@/components/ui/button";
import type {
  OurSevices as OurServicesType,
  GridCard as GridCardType,
} from "@/types";
import {
  getBackgroundColor,
  getGridColumns,
} from "@/shared/layout/storyblok-global-style";

import { cn } from "@/lib/utils";
import EmptyService from "@/components/atoms/home/empty-service";
import Link from "next/link";

interface OurServicesProps {
  blok: OurServicesType;
  className?: string;
}

export function OurServices({ blok, className }: OurServicesProps) {
  const gridCards: GridCardType[] = Array.isArray(blok?.grid_card)
    ? blok.grid_card.filter(
        (card): card is GridCardType => card.component === "gridCard",
      )
    : [];

  const backgroundColor = getBackgroundColor(blok.background_color ?? "white");

  return (
    <ContainerSection
      className={className}
      background={backgroundColor}
      padding="xl"
      maxWidth="full"
      id="our-services"
    >
      <SectionHeader
        title={blok.headline?.[0].text as string}
        description={blok.description ?? ""}
        className="mb-16"
        align="center"
      />

      {gridCards.length > 0 && (
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 container mx-auto px-4",
            getGridColumns(blok.columns ?? "Three"),
            "gap-8",
          )}
        >
          {gridCards.map((card) => (
            <GridCard key={card._uid} blok={card} />
          ))}
        </div>
      )}

      {blok.general_button && blok.general_button.length > 0 && (
        <div className="flex justify-center gap-6 mt-16">
          {blok.general_button.map((button) => (
            <Button
              asChild
              key={button._uid}
              className="px-10 py-6 text-lg"
              variant={"primary"}
            >
              <Link href={button.link?.url || button.link?.cached_url || "#"}>
                {button.label}
              </Link>
            </Button>
          ))}
        </div>
      )}

      {gridCards.length === 0 && (
        <div className="text-center py-16">
          <EmptyService />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {blok?.no_service}
          </h3>
          <p className="text-gray-600">{blok?.no_service_description}</p>
        </div>
      )}
    </ContainerSection>
  );
}
