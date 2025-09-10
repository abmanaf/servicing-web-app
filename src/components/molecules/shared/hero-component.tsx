import Image from "next/image";
import Container from "@/components/atoms/container";
import { cn } from "@/lib/utils";
import ScrollToServiceButton from "@/components/atoms/service/scroll-to-service-button";

type BackgroundClass = "white" | "default" | "gradient" | "custom";

type HeaderColorClass =
  | "text-white"
  | "text-primary"
  | "text-blue-500"
  | "text-gray-900"
  | "text-gray-700";

interface HeroSectionProps {
  image: string;
  headline: string;
  description: string;
  explore_service: string;
  className?: string;
  background?: BackgroundClass;
  heightClass?: string;
  overlayOpacity?: string;
  headerColor?: HeaderColorClass;
}

export function HeroSection({
  image,
  headline,
  description,
  explore_service,
  className,
  background = "default",
  heightClass,
  overlayOpacity,
  headerColor,
}: HeroSectionProps) {
  return (
    <Container
      className={cn("relative overflow-hidden", className, "p-0")}
      background={background}
      spacing="xl"
      alignment="center"
      fullWidth
    >
      {image && (
        <div className={cn("absolute inset-0", heightClass)}>
          <Image
            src={image}
            alt={"Services Hero Background"}
            fill
            className="w-full h-full object-cover"
            priority
            sizes="100vw"
          />
          <div className={cn("absolute inset-0", overlayOpacity)} />
        </div>
      )}

      <div className={cn("relative flex justify-center", heightClass)}>
        <div className="container mx-auto px-4 mt-8 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <div className="max-w-4xl space-y-6">
            <h1
              className={cn(
                "text-xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg",
                headerColor,
              )}
            >
              {headline}
            </h1>

            {description && (
              <p className="text-base text-white md:text-lg lg:text-xl leading-relaxed font-light max-w-3xl mx-auto drop-shadow-lg">
                {description}
              </p>
            )}

            {explore_service && (
              <ScrollToServiceButton label={explore_service} />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
