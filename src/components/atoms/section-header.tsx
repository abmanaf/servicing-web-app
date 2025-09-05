import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "left" | "center" | "right";
}

export function SectionHeader({
  title,
  description,
  className,
  titleAs: TitleComponent = "h2",
  align = "left",
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl", alignmentClasses[align], className)}>
      <TitleComponent
        className={cn(
          "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
          { "mb-4": description },
        )}
      >
        {title}
      </TitleComponent>
      {description && (
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
}
