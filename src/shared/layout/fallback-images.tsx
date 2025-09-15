import { cn } from "@/lib/utils";

type FallbackImageProps = {
  svgPath: string;
  description?: string;
  bg_color?: string;
  className?: string;
};

export default function FallbackImage({
  svgPath,
  description,
  bg_color = "bg-white",
  className,
}: FallbackImageProps) {
  return (
    <>
      <div
        className={cn(
          "w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md",
          className,
          bg_color,
        )}
      >
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
            d={svgPath}
          />
        </svg>
      </div>
      {description && <p className="text-sm font-medium">{description}</p>}
    </>
  );
}
