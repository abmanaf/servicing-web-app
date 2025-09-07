import type { HeroSection as HeroSectionType } from "@/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/atoms/container";
import ImageAspectRatio from "@/components/atoms/storyblok-image";
import { getHeaderColor } from "@/shared/layout/storyblok-global-style";

import { cn } from "@/lib/utils";

const HeroSection = ({ blok }: { blok: HeroSectionType }) => {
  const headerColor = getHeaderColor(
    blok.headline?.[0].highlight ?? "Default Highlight",
  );
  const nextHeaderTitle = getHeaderColor(
    blok.headline?.[1].highlight ?? "Default Highlight",
  );
  return (
    <Container
      background="gradient"
      spacing="xl"
      alignment="start"
      withOverlay
      className="text-white"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex-1 max-w-2xl text-left">
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
                  variant={index === 0 ? "secondary" : "outline"}
                  size="lg"
                  className={cn(
                    "border-white",
                    index > 0
                      ? "text-black bg-amber-100 hover:bg-amber-200"
                      : "",
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
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <ImageAspectRatio
                image={blok.image}
                preserveAspectRatio={blok.preserve_image_ratio}
                width={600}
                height={blok.preserve_image_ratio ? undefined : 100}
                fallback={
                  <div className="border border-white w-full h-full max-w-md" />
                }
              />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex justify-center w-full h-full lg:justify-end">
            <div className="border border-white w-full h-full max-w-md" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default HeroSection;
