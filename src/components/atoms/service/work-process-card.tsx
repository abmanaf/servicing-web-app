import type { WorkProcessCard as WorkProcessCardType } from "@/types";
import { getBackgroundColor } from "@/shared/layout/storyblok-global-style";
import { cn } from "@/lib/utils";

interface WorkProcessCardProps {
  blok: WorkProcessCardType;
}

export function WorkProcessCard({ blok }: WorkProcessCardProps) {
  const hasBorder = blok.border ? "border border-gray-200" : "";
  const rowSpan = blok.row_span === "2" ? "lg:row-span-2" : "";
  const backgroundColor = getBackgroundColor(blok.card_bg_color ?? "Muted");
  const iconWidth = blok.icon_width ?? "48px";
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 lg:p-8 shadow hover:shadow transition-all duration-300 group",
        backgroundColor,
        hasBorder,
        rowSpan,
        "flex flex-col items-start text-start",
      )}
    >
      {blok.icon?.filename && (
        <div
          className="relative mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{
            width: iconWidth,
            height: iconWidth,
          }}
        >
          <img
            src={blok.icon.filename}
            alt={blok.icon.alt || blok.title}
            className="object-contain"
            width={iconWidth}
            height={iconWidth}
          />
        </div>
      )}

      <div className="flex-1 flex flex-col">
        {blok.title && (
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
            {blok.title}
          </h3>
        )}

        {blok.description && (
          <p className="text-gray-600 leading-relaxed flex-1">
            {blok.description}
          </p>
        )}
      </div>
    </div>
  );
}
