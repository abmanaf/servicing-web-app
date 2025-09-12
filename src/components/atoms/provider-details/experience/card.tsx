import type { ExperieceCard } from "@/types";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  blok: ExperieceCard;
  className?: string;
}

export default function ExperienceCard({
  blok,
  className,
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full",
        className,
      )}
    >
      <h4 className="font-semibold text-blue-700 text-lg mb-2">{blok.title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {blok.description}
      </p>
    </div>
  );
}
