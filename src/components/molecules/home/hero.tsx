"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { HeroSection as HeroSectionProps } from "@/types";
import { Button } from "@/components/ui/button";
import { getHeaderColor } from "@/shared/layout/storyblok-global-style";
import Container from "@/components/atoms/shared/container";

export default function HeroSection({ blok }: { blok: HeroSectionProps }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = blok?.image;

  const headlines = blok?.headline;

  const buttons = blok?.buttons;

  const description = blok?.description;

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) =>
        prevIndex === (images?.length || 0) - 1 ? 0 : prevIndex + 1,
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [images?.length]);

  const scrollToImage = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const scrollPrev = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? (images?.length || 0) - 1 : prevIndex - 1,
    );
  }, [images?.length]);

  const scrollNext = useCallback(() => {
    setSelectedIndex((prevIndex) =>
      prevIndex === (images?.length || 0) - 1 ? 0 : prevIndex + 1,
    );
  }, [images?.length]);

  return (
    <Container
      background="white"
      spacing="xl"
      alignment="start"
      className="py-32"
      containerClassName="w-full"
    >
      <div className="flex flex-col xl:flex-row items-start justify-between w-full gap-8 lg:gap-14">
        <div className="flex flex-col w-full xl:w-2/5 space-y-8">
          <div className="">
            {headlines?.map((headline, index) => (
              <h1
                key={index}
                className={cn(
                  "text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold",
                  getHeaderColor(headline?.highlight || ""),
                )}
              >
                {headline?.text}
              </h1>
            ))}
          </div>

          <p className="text-base text-gray-600 font-normal max-w-xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-1.5 lg:gap-6">
            {buttons?.map((button, index) => (
              <Button
                key={index}
                asChild
                variant={index === 0 ? "secondary" : "default"}
                size="lg"
                className={cn(
                  "w-full sm:w-auto",
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
        </div>

        <div className="relative w-full xl:w-3/5 mt-20 xl:mt-0">
          <div className="relative flex flex-row items-center justify-center">
            <div className="relative">
              <div
                className="relative overflow-hidden bg-gray-100 w-[250px] md:w-[450px] 
                rounded-tr-full rounded-tl-full flex items-center justify-center mx-auto"
              >
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src={images?.[selectedIndex]?.filename || ""}
                    alt={
                      images?.[selectedIndex]?.alt ||
                      `Image ${selectedIndex + 1}`
                    }
                    width={600}
                    height={491}
                    className="mt-20 md:mt-32 object-contain w-full h-full"
                    priority
                  />
                </div>
              </div>

              <div className="absolute -bottom-20 right-0 left-0 flex justify-center gap-2">
                <button
                  aria-label="Scroll to previous item"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                  onClick={scrollPrev}
                >
                  <ChevronLeft className="text-gray-600 w-6 h-6" />
                </button>
                <button
                  aria-label="Scroll to next item"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                  onClick={scrollNext}
                >
                  <ChevronRight className="text-gray-600 w-6 h-6" />
                </button>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center absolute 
                          top-1/2 -translate-y-1/2 right-2 lg:right-0 lg:top-0 lg:translate-y-0 lg:justify-between 
                          h-auto lg:h-full w-fit gap-6 lg:gap-10 lg:-right-6 lg:w-24"
            >
              {images?.slice(0, 3).map((image, index) => (
                <div key={`preview-${image.id}`} className="relative">
                  <button
                    aria-label={`Scroll to preview image ${index + 1}`}
                    onClick={() => scrollToImage(index)}
                    className={cn(
                      "relative p-1 rounded-full transition-all cursor-pointer",
                      {
                        "opacity-100": index === selectedIndex,
                        "opacity-50 hover:opacity-100": index !== selectedIndex,
                      },
                    )}
                  >
                    <Image
                      src={image.filename || ""}
                      alt={`Preview ${index + 1}`}
                      width={75}
                      height={75}
                      className="w-[29.32px] md:w-[75.29px] h-[29.32px] md:h-[75.29px] rounded-md object-cover translate-y-2"
                    />
                  </button>
                  <div className="absolute -z-10 bg-gray-100 w-[35.27px] h-[25.86px] md:w-[87px] md:h-[52px] rounded-br-full rounded-bl-full cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
