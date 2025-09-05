import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "default" | "gradient" | "custom";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  alignment?: "start" | "center" | "end";
  fullWidth?: boolean;
  withOverlay?: boolean;
}

const Container = ({
  children,
  className = "",
  containerClassName = "",
  background = "default",
  spacing = "lg",
  alignment = "center",
  fullWidth = false,
  withOverlay = false,
}: SectionProps) => {
  const backgroundClasses = {
    default: "bg-white",
    gradient: "bg-gradient-to-br from-blue-900 to-purple-800",
    custom: "",
  };

  const spacingClasses = {
    none: "py-0",
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
    xl: "py-24",
  };

  const alignmentClasses = {
    start: "items-start text-left",
    center: "items-center text-center",
    end: "items-end text-right",
  };

  return (
    <section
      className={cn(
        "relative w-full flex justify-center overflow-hidden",
        backgroundClasses[background],
        spacingClasses[spacing],
        className,
      )}
    >
      {withOverlay && <div className="absolute inset-0 bg-black opacity-20" />}

      <div
        className={cn(
          "relative z-10 flex flex-col",
          alignmentClasses[alignment],
          fullWidth ? "w-full" : "container px-4 md:px-6",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
