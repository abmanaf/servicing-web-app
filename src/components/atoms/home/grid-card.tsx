import type { GridCard as GridCardType } from "@/types";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface GridCardProps {
  blok: GridCardType;
  className?: string;
}

export function GridCard({ blok, className }: GridCardProps) {
  const iconWidth = blok.icon_width ?? "48px";
  const rowSpan = blok.row_span === "Two" ? "lg:row-span-2" : "";
  const hasBorder = blok.border ? "border border-gray-200" : "";

  const aspectRatioClass =
    blok.row_span === "Two"
      ? "aspect-[4/5] lg:aspect-auto"
      : "aspect-square lg:aspect-auto";

  return (
    <div
      className={cn(
        `bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group ${hasBorder} ${rowSpan} ${className}`,
      )}
    >
      {(blok.icon?.filename ?? blok.image?.filename) && (
        <div className="mb-6 flex justify-start">
          {blok.icon?.filename ? (
            <div className="relative mb-4 transition-transform duration-300 group-hover:scale-110">
              <img
                src={blok.icon?.filename ?? ""}
                alt={blok.icon?.alt ?? blok.label ?? "Service icon"}
                className="object-contain"
                width={iconWidth}
                height={iconWidth}
              />
            </div>
          ) : blok.image?.filename ? (
            <div
              className={cn(
                `relative mb-4 overflow-hidden rounded-xl ${aspectRatioClass}`,
              )}
            >
              <img
                src={blok.image?.filename ?? ""}
                alt={blok.image?.alt ?? blok.label ?? "Service image"}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                width={iconWidth}
                height={iconWidth}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          ) : null}
        </div>
      )}

      <div className="flex-1 flex flex-col">
        {blok.label && (
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 text-start group-hover:text-blue-600 transition-colors">
            {blok.label}
          </h3>
        )}

        {blok.description && (
          <p className="text-gray-600 mb-6 text-start leading-relaxed flex-1">
            {blok.description}
          </p>
        )}

        {blok.grid_button && blok.grid_button.length > 0 && (
          <div className="flex justify-center space-x-4 mt-auto">
            {blok.grid_button.map((button) => (
              <Button
                asChild
                key={button._uid}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group/button"
              >
                <Link href={"#"}>{button.label as string}</Link>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
