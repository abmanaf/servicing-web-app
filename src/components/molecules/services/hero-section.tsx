import Image from "next/image";
import Container from "@/components/atoms/container";
import type { ServicesHeroSection as ServicesHeroSectionType } from "@/types";
import { cn } from "@/lib/utils";

import {
  getHeaderColor,
  getHeightClass,
  getOverlayOpacity,
} from "@/shared/layout/storyblok-global-style";
import ExploreSvg from "../../atoms/service/explore-svg";
import ScrollToServiceButton from "@/components/atoms/service/scroll-to-service-button";

interface ServicesHeroSectionProps {
  blok: ServicesHeroSectionType;
  className?: string;
}

export function ServicesHeroSection({
  blok,
  className,
}: ServicesHeroSectionProps) {
  const heightClass = getHeightClass(blok?.image_height ?? "Default");

  const backgroundColor = getHeaderColor(
    blok?.headline?.[0].highlight ?? "Default Highlight",
  );

  const overlayOpacity = getOverlayOpacity(blok?.image_opacity ?? "Default");

  return (
    <Container
      className={cn("relative overflow-hidden", className, "p-0")}
      background="default"
      spacing="xl"
      alignment="center"
      fullWidth
    >
      {blok.image?.filename && (
        <div className={cn("absolute inset-0", heightClass)}>
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || "Services Hero Background"}
            fill
            className="w-full h-full object-cover"
            priority
            sizes="100vw"
          />
          <div className={cn("absolute inset-0", overlayOpacity)} />
        </div>
      )}

      <div className={cn("relative flex justify-center", heightClass)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <div className="max-w-4xl space-y-6">
            <h1
              className={cn(
                "text-xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg",
                backgroundColor,
              )}
            >
              {blok.headline?.[0]?.text as string}
            </h1>

            {blok.description && (
              <p className="text-base text-white md:text-lg lg:text-xl leading-relaxed font-light max-w-3xl mx-auto drop-shadow-lg">
                {blok.description}
              </p>
            )}

            <ScrollToServiceButton
              label={blok?.explore_service?.[0]?.label as string}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ExploreSvg />
      </div>
    </Container>
  );
}
