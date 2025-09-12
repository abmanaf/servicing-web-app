import type { Contact as ContactInfoCardType } from "@/types";
import { cn } from "@/lib/utils";

type ContactInfoCardProps = {
  blok: ContactInfoCardType;
  className?: string;
};

export default function ContactInfoCard({
  blok,
  className,
}: ContactInfoCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200",
        className,
      )}
    >
      <div className="font-medium text-gray-700 text-sm sm:text-base">
        {blok.label}
      </div>
      <div className="text-gray-900 text-sm sm:text-base font-semibold break-words">
        {blok.value}
      </div>
    </div>
  );
}
