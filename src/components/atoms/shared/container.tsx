import { cn } from "@/lib/utils";
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "default" | "gradient" | "custom";
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
    white: "bg-white",
    gradient: "",
    custom: "bg-gradient-to-br from-primary to-primary-foreground",
    default: "bg-gray-50",
  };

  const spacingClasses = {
    none: "py-0",
    sm: "py-2",
    md: "py-4",
    lg: "py-6",
    xl: "py-8",
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
