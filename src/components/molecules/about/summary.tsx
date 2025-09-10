import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";
import { ContainerSection } from "@/shared/layout/container-section";
import type { AboutSummary as AboutSummaryType } from "@/types";
import { customRenderer } from "@/shared/layout/custome-render";
import {
  getBackgroundColor,
  getHeaderColor,
  getAspectRatioClass,
} from "@/shared/layout/storyblok-global-style";
import { cn } from "@/lib/utils";

interface AboutSummaryProps {
  blok: AboutSummaryType;
  className?: string;
}

export function AboutSummary({ blok, className }: AboutSummaryProps) {
  const desktopLayoutClass = blok.desktop_reverse_layout
    ? "lg:flex-row-reverse"
    : "lg:flex-row";

  const mobileLayoutClass = blok.mobile_reverse_layout
    ? "flex-col-reverse"
    : "flex-col";

  const backgroundColor = getBackgroundColor(
    blok.background_color ?? "Secondary",
  );
  const headerColor = getHeaderColor(
    (blok.headline?.[0]?.highlight as string) ?? "Default Highlight",
  );
  const aspectRatioClass = getAspectRatioClass(
    blok.image_aspect_ratio ?? "auto",
  );

  return (
    <ContainerSection
      className={className}
      background={backgroundColor}
      padding="xl"
      maxWidth="full"
      id="about-summary"
    >
      <div
        className={cn(
          "flex flex-col lg:flex-row gap-8 lg:gap-12 items-center container mx-auto px-4",
          mobileLayoutClass,
          desktopLayoutClass,
        )}
      >
        <div className={cn("flex-1 space-y-6 lg:space-y-8 w-full")}>
          {blok.headline && blok.headline.length > 0 && (
            <div className="space-y-4">
              {blok.headline.map((headline, index) => (
                <h2
                  key={headline._uid || index}
                  className={cn(
                    "text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left leading-tight",
                    headerColor,
                  )}
                >
                  {headline.text}
                </h2>
              ))}
            </div>
          )}

          {blok.description && (
            <div className="prose prose-lg max-w-none">
              {render(blok.description, customRenderer)}
            </div>
          )}
        </div>

        {blok.image?.filename && (
          <div className="flex-1 w-full">
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl shadow-xl w-full",
                aspectRatioClass,
                "max-w-full mx-auto",
              )}
            >
              <Image
                src={blok.image.filename}
                alt={
                  blok.image.alt ??
                  blok.headline?.[0]?.text ??
                  "About summary image"
                }
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        )}

        {!blok.image?.filename && (
          <div className="flex-1 w-full">
            <div
              className={cn(
                "bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center w-full",
                aspectRatioClass,
                "max-w-full mx-auto",
              )}
            >
              <div className="text-center text-gray-400 p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium">About Image</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-8 left-8 w-12 h-12 bg-blue-100 rounded-full opacity-20 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-8 h-8 bg-blue-200 rounded-full opacity-30 hidden lg:block" />
    </ContainerSection>
  );
}
