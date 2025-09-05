import { cn } from "@/lib/utils";

interface HeadlineProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  highlight?: string;
}

export function Headline({
  children,
  as: Component = "h2",
  className,
  highlight,
  ...props
}: HeadlineProps) {
  return (
    <Component
      className={cn(
        "text-2xl font-bold text-gray-900 dark:text-white",
        "md:text-3xl lg:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
      {highlight && <span className="text-primary">{highlight}</span>}
    </Component>
  );
}
