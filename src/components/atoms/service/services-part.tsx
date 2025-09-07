import { render } from "storyblok-rich-text-react-renderer";
import type { ServicesPart as ServicesPartType } from "@/types";
import { customRenderer } from "@/shared/layout/custome-render";
import { getBackgroundColor } from "@/shared/layout/storyblok-global-style";
import { cn } from "@/lib/utils";

interface ServicesPartProps {
  blok: ServicesPartType;
}

export function ServicesPart({ blok }: ServicesPartProps) {
  const desktopLayoutClass = blok.desktop_layout
    ? "lg:flex-row-reverse"
    : "lg:flex-row";

  const mobileLayoutClass = blok.mobile_layout
    ? "flex-col-reverse"
    : "flex-col";

  const backgroundColor = getBackgroundColor(
    blok.section_background_color ?? "Secondary",
  );

  const imageAspectRatio = blok.image_aspect_ratio
    ? "aspect-[4/3]"
    : "aspect-auto";

  return (
    <div
      className={cn(
        `container mx-auto flex gap-8 lg:gap-12 items-center py-16 lg:py-20`,
        backgroundColor,
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
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
            <img
              src={blok.image.filename}
              alt={blok.image.alt || blok.headline?.[0]?.text}
              className="object-cover"
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
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium">Service Image</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
