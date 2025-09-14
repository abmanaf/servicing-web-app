import { ContainerSection } from "@/shared/layout/container-section";
import { ServicesPart } from "@/components/atoms/service/services-part";
import type {
  ServicesSection as ServicesSectionType,
  ServicesPart as ServicesPartType,
} from "@/types";
import ServiceFallback from "./service-fallback";
import { SectionHeader } from "@/components/atoms/shared/section-header";
import {
  getHeaderColor,
  getBackgroundColor,
} from "@/shared/layout/storyblok-global-style";

interface ServicesSectionProps {
  blok: ServicesSectionType;
  className?: string;
}

export function ServicesSection({ blok, className }: ServicesSectionProps) {
  const services: ServicesPartType[] = Array.isArray(blok?.sevice)
    ? blok.sevice.filter(
        (service): service is ServicesPartType =>
          service.component === "servicesPart",
      )
    : [];

  const headerColor = getHeaderColor(
    (blok.headline?.[0].highlight as string) ?? "Default Highlight",
  );

  const backgroundColor = getBackgroundColor(
    blok.background_color ?? "Default",
  );
  return (
    <ContainerSection
      className={className}
      background={backgroundColor}
      padding="xl"
      maxWidth="full"
      id="services-section"
    >
      <SectionHeader
        title={(blok.headline?.[0].text as string) ?? ""}
        description={blok.description ?? ""}
        className="mb-8"
        align="center"
        titleClassName={headerColor}
      />
      {services.length > 0 ? (
        <div className="divide-y container mx-auto lg:px-4">
          {services.map((service) => (
            <ServicesPart key={service._uid} blok={service} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <ServiceFallback />
        </div>
      )}
    </ContainerSection>
  );
}
