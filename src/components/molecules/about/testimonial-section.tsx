import type { TestimonialSection as TestimonialSectionType } from "@/types";
import TestimonialCard from "@/components/atoms/about/testimonial-card";
import { SectionHeader } from "@/components/atoms/section-header";
import { ContainerSection } from "@/shared/layout/container-section";
import {
  getBackgroundColor,
  getHeaderColor,
} from "@/shared/layout/storyblok-global-style";
interface TestimonialSectionProps {
  blok: TestimonialSectionType;
  className?: string;
}

export function TestimonialSection({
  blok,
  className,
}: TestimonialSectionProps) {
  const backgroundColor = getBackgroundColor(
    blok.background_color ?? "Default",
  );
  const headerColor = getHeaderColor(
    blok.headline?.[0].highlight ?? "Default Highlight",
  );
  return (
    <ContainerSection
      className={className}
      background={backgroundColor}
      padding="xl"
      maxWidth="7xl"
      id="testimonial-section"
    >
      <div className="text-center mb-16">
        <SectionHeader
          title={blok.headline?.[0].text ?? ""}
          description={blok.description ?? ""}
          align="center"
          titleClassName={headerColor}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {blok.testimonial_card?.map((testimonialCard, index) => (
          <TestimonialCard key={index} blok={testimonialCard} />
        ))}
      </div>
    </ContainerSection>
  );
}
