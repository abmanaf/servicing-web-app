import type { WorkProcessCard as WorkProcessCardType } from "@/types";
import { cn } from "@/lib/utils";
import { cardBackgroundColor } from "@/shared/layout/storyblok-global-style";

interface WorkProcessCardProps {
  blok: WorkProcessCardType;
}

export function WorkProcessCard({ blok }: WorkProcessCardProps) {
  const hasBorder = blok.borders ? "border border-gray-200" : "";
  const rowSpan = blok.row_spans === "2" ? "lg:row-span-2" : "";
  const backgroundColor = cardBackgroundColor(blok.card_bg_colors ?? "white");
  const iconWidth = blok.icon_widths ?? "48px";

  return (
    <div
      className={cn(
        "rounded-2xl p-6 lg:p-8 shadow hover:shadow transition-all duration-300 group",
        backgroundColor,
        hasBorder,
        rowSpan,
        "flex flex-col items-start text-start",
      )}
    >
      {blok.icons?.filename && (
        <div
          className="relative mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{
            width: iconWidth,
            height: iconWidth,
          }}
        >
          <img
            src={blok.icons.filename}
            alt={blok.icons.alt || blok.title || "Process icon"}
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
