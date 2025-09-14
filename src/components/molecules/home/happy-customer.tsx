import { render } from "storyblok-rich-text-react-renderer";
import { ContainerSection } from "@/shared/layout/container-section";
import type { HappyCustomer as HappyCustomerType } from "@/types";
import { ArrowRight } from "lucide-react";
import { customRenderer } from "@/shared/layout/custome-render";
import { cn } from "@/lib/utils";
import HappyCustomerImageFallback from "@/components/atoms/home/happy-customer-image-fallback";
import ImageDecorator from "@/shared/layout/image-decorator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HappyCustomerProps {
  blok: HappyCustomerType;
  className?: string;
}

export function HappyCustomer({ blok, className }: HappyCustomerProps) {
  const desktopLayoutClass = blok.reverse_destop_layout
    ? "lg:flex-row-reverse"
    : "lg:flex-row";

  const mobileLayoutClass = blok.reverser_mobile_layout
    ? "flex-col-reverse"
    : "flex-col";

  return (
    <ContainerSection
      className={cn(className, "")}
      padding="xl"
      maxWidth="full"
      id="happy-customer"
    >
      <div
        className={cn(
          "flex",
          mobileLayoutClass,
          desktopLayoutClass,
          "gap-12 container mx-auto px-4 lg:gap-16 items-center",
        )}
      >
        <div className="flex-1 space-y-8">
          {blok.headline && (
            <div>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {blok.headline}
              </h2>
            </div>
          )}

          {blok.description && (
            <div className="prose prose-lg space-y-0 max-w-none">
              {render(blok.description, customRenderer)}
            </div>
          )}

          {blok.button && blok.button.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {blok.button.map((btn) => (
                <Button asChild key={btn._uid} className="py-4 gap-2">
                  <Link href={btn.link?.url || btn.link?.cached_url || "#"}>
                    {btn.label}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>

        {blok.image?.filename ? (
          <div className="flex-1 w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-xl w-full max-w-full mx-auto">
              <img
                src={blok.image.filename}
                alt={blok.image.alt ?? blok.headline ?? "About summary image"}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <ImageDecorator />
            </div>
          </div>
        ) : (
          <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center">
            <div className="text-center text-gray-400">
              <HappyCustomerImageFallback />
              <p className="text-sm font-medium">{blok.fallback_description}</p>
            </div>
          </div>
        )}
      </div>
    </ContainerSection>
  );
}
