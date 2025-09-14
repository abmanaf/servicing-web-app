import { render } from "storyblok-rich-text-react-renderer";
import type { ServicesPart as ServicesPartType } from "@/types";
import { customRenderer } from "@/shared/layout/custome-render";
import { getHeaderColor } from "@/shared/layout/storyblok-global-style";
import { cn } from "@/lib/utils";
import ServicePartImageFallback from "./service-part-image-fallback";
import Image from "next/image";

interface ServicesPartProps {
  blok: ServicesPartType;
}

export function ServicesPart({ blok }: ServicesPartProps) {
  const desktopLayoutClass = blok.desktop_layouts
    ? "lg:flex-row-reverse"
    : "lg:flex-row";

  const mobileLayoutClass = blok.mobile_layouts
    ? "flex-col-reverse"
    : "flex-col";

  const headerColor = getHeaderColor(
    blok.headline?.map(
      (headline) => headline.highlight ?? "Default Highlight",
    )[0] ?? "Default Highlight",
  );

  const imageAspectRatio = blok.image_aspects_ratio
    ? "aspect-[4/3]"
    : "aspect-auto";

  return (
    <div
      className={cn(
        `container mx-auto flex gap-8 lg:gap-12 items-center py-16 lg:py-20`,
        desktopLayoutClass,
        mobileLayoutClass,
      )}
    >
      <div className="flex-1 space-y-6 lg:space-y-8">
        {blok.headline && blok.headline.length > 0 && (
          <div className="space-y-4">
            {blok.headline.map((headline) => (
              <h2
                key={headline._uid}
                className={cn(
                  "text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight",
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

      <div className="flex-1">
        {blok.image?.filename ? (
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl shadow-xl",
              imageAspectRatio,
            )}
          >
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || (blok.headline?.[0]?.text as string)}
              className="object-cover w-full h-full"
              height={600}
              width={600}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        ) : (
          <div
            className={cn(
              "aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center",
              imageAspectRatio,
            )}
          >
            <div className="text-center text-gray-400">
              <ServicePartImageFallback />
              <p className="text-sm font-medium">Service Image</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
