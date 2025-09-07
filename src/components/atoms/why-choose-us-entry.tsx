import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";
import type { Entries } from "@/types";
import { customRenderer } from "@/shared/layout/custome-render";
import ImageFallback from "@/shared/layout/image-fallback";

interface WhyChooseUsEntryProps {
  blok: Entries;
}

export function WhyChooseUsEntry({ blok }: WhyChooseUsEntryProps) {
  if (!blok) {
    return <div>No content available</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center w-full">
      <div className="flex flex-col justify-center space-y-6 lg:pr-8 lg:w-1/2">
        {blok.headline && (
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {blok.headline}
          </h3>
        )}

        {blok.description && (
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <div>{render(blok.description, customRenderer)}</div>
          </div>
        )}
      </div>

      <div className="lg:w-1/2">
        {blok.image && blok.image.filename ? (
          <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden">
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || blok.headline || "Feature image"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        ) : (
          <div className="h-64 lg:h-96 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <ImageFallback />
              <p className="text-sm font-medium sr-only">Feature Image</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
