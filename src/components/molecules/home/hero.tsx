import type { HeroSection as HeroSectionType } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/atoms/container";
import ImageAspectRatio from "@/components/atoms/storyblok-image";
import {
  getHeaderColor,
  getBackgroundColorClass,
} from "@/shared/layout/storyblok-global-style";

import { cn } from "@/lib/utils";
import ImageFallback from "@/shared/layout/image-fallback";

const HeroSection = ({ blok }: { blok: HeroSectionType }) => {
  const headerColor = getHeaderColor(
    blok.headline?.[0].highlight ?? "Default Highlight",
  );
  const nextHeaderTitle = getHeaderColor(
    blok.headline?.[1].highlight ?? "Default Highlight",
  );

  const backgroundColor = getBackgroundColorClass(
    blok.background_color ?? "Default",
  );

  return (
    <Container
      background={backgroundColor}
      spacing="sm"
      alignment="start"
      withOverlay
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <div className="mb-4">
            {blok.headline?.[0]?.text && (
              <h1
                className={cn(
                  "text-xl md:text-3xl lg:text-4xl font-bold",
                  headerColor,
                )}
              >
                {blok.headline[0].text}
              </h1>
            )}
            {blok.headline?.[1]?.text && (
              <h2
                className={cn(
                  "text-xl md:text-3xl lg:text-4xl font-bold",
                  nextHeaderTitle,
                )}
              >
                {blok.headline[1].text}
              </h2>
            )}
          </div>

          {blok.description && (
            <div className="text-xl font-light text-gray-200 my-8">
              <p>{blok.description}</p>
            </div>
          )}

          {blok.buttons && blok.buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              {blok.buttons.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  variant={index === 0 ? "secondary" : "default"}
                  size="lg"
                  className={cn(
                    "",
                    index > 0 ? "text-primary-foreground bg-primary" : "",
                  )}
                >
                  <Link
                    href={button?.link?.cached_url ?? "#"}
                    className="px-8 py-3 text-lg font-semibold"
                  >
                    {button?.label}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>

        {blok.image && blok.image.filename ? (
          <div className="hidden lg:flex flex-1 justify-center lg:justify-end">
            <div className="relative w-full">
              <ImageAspectRatio
                image={blok.image}
                fallback={<ImageFallback />}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex flex-1 justify-center w-full h-full lg:justify-end">
            <div className="border border-white w-full h-full" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default HeroSection;
