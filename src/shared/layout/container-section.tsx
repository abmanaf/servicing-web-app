import { cn } from "@/lib/utils";
import { ReactNode, JSX } from "react";

interface ContainerSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: keyof JSX.IntrinsicElements;
  background?: "default" | "muted" | "primary" | "secondary";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "7xl";
}

export function ContainerSection({
  children,
  className,
  id,
  as: Component = "section",
  background = "default",
  padding = "lg",
  maxWidth = "7xl",
}: ContainerSectionProps) {
  const backgroundClasses = {
    default: "bg-white",
    muted: "bg-gray-50",
    primary: "bg-primary-50",
    secondary: "bg-secondary-50",
  };

  const paddingClasses = {
    none: "",
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-20",
  };

  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <Component
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          maxWidthClasses[maxWidth],
        )}
      >
        {children}
      </div>
    </Component>
  );
}
