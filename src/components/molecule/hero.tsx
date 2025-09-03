import type { HeroSection as HeroSectionType } from "@/types";
import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../atoms/container";
import ImageAspectRatio from "../atoms/storyblok-image";

const HeroSection = ({ blok }: { blok: HeroSectionType }) => {
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
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                {blok.headline[0].text}
              </h1>
            )}
            {blok.headline?.[1]?.text && (
              <h2 className="text-2xl md:text-4xl font-bold text-blue-300">
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
              {blok.buttons[0] && (
                <Button asChild variant="secondary" size="lg">
                  <Link
                    href={blok.buttons[0].link?.cached_url ?? "#"}
                    className="px-8 py-3 text-lg font-semibold"
                  >
                    {blok.buttons[0].label ?? "Get Started"}
                  </Link>
                </Button>
              )}
              {blok.buttons[1] && (
                <Button asChild variant="outline" size="lg">
                  <Link
                    href={blok.buttons[1].link?.cached_url ?? "#"}
                    className="border-white text-black hover:bg-white/10 px-8 py-3 text-lg font-semibold"
                  >
                    {blok.buttons[1].label ?? "Learn More"}
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>

        {blok.image && blok.image.filename && (
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <ImageAspectRatio
                image={blok.image}
                preserveAspectRatio={blok.preserve_image_ratio}
                width={600}
                height={blok.preserve_image_ratio ? undefined : 100}
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default HeroSection;
