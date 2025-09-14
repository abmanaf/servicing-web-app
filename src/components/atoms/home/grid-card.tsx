import type { GridCard as GridCardType } from "@/types";
import { cn } from "@/lib/utils";

interface GridCardProps {
  blok: GridCardType;
  className?: string;
}

export function GridCard({ blok, className }: GridCardProps) {
  const iconWidth = blok.icon_widths ?? "48px";
  const rowSpan = blok.row_spans === "2" ? "lg:row-span-2" : "";
  const hasBorder = blok.borders ? "border border-gray-200" : "";

  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group",
        hasBorder,
        rowSpan,
        className,
      )}
    >
      {blok.icons?.filename && (
        <div className="mb-6 flex justify-start">
          <div
            className="relative mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{
              width: iconWidth,
              height: iconWidth,
            }}
          >
            <img
              src={blok.icons.filename}
              alt={blok.icons.alt ?? blok.label ?? "Service icon"}
              className="object-contain"
              width={iconWidth}
              height={iconWidth}
            />
          </div>
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
      </div>
    </div>
  );
}
