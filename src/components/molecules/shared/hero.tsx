import type { OtherHeroSection as ServicesHeroSectionType } from "@/types";
import { HeroSection } from "./hero-component";

import {
  getHeaderColor,
  getHeightClass,
  getOverlayOpacity,
} from "@/shared/layout/storyblok-global-style";

interface SharedHeroSectionProps {
  blok: ServicesHeroSectionType;
  className?: string;
}

export function SharedHeroSection({ blok, className }: SharedHeroSectionProps) {
  const heightClass = getHeightClass(blok?.image_heights ?? "Default");

  const headerColor = getHeaderColor(
    blok?.headline?.[0].highlight ?? "Default Highlight",
  );

  const overlayOpacity = getOverlayOpacity(
    blok?.background_image_opacity ?? "Default",
  );

  return (
    <HeroSection
      image={blok.image?.filename ?? ""}
      headline={blok.headline?.[0].text ?? ""}
      description={blok.description ?? ""}
      explore_service={blok?.explore_service?.[0]?.label ?? ""}
      className={className}
      heightClass={heightClass}
      overlayOpacity={overlayOpacity}
      headerColor={headerColor}
    />
  );
}
