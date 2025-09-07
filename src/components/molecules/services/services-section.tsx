import { ContainerSection } from "@/shared/layout/container-section";
import { ServicesPart } from "@/components/atoms/service/services-part";
import type {
  ServicesSection as ServicesSectionType,
  ServicesPart as ServicesPartType,
} from "@/types";
import ServiceFallback from "./service-fallback";
import { SectionHeader } from "@/components/atoms/section-header";

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

  return (
    <ContainerSection
      className={className}
      background="default"
      padding="xl"
      maxWidth="full"
      id="services-section"
    >
      <SectionHeader
        title={blok.headline?.[0].text as string}
        description={blok.description ?? ""}
        className="mb-8"
        align="center"
      />
      {services.length > 0 ? (
        <div className="divide-y">
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
