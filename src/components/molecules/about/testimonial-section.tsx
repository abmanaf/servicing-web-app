import type {
  TestimonialSection as TestimonialSectionType,
  TestimonialCard as TestimonialCardType,
} from "@/types";
import TestimonialCard from "@/components/atoms/about/testimonial-card";
import { SectionHeader } from "@/components/atoms/shared/section-header";
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
  const testimonies: TestimonialCardType[] = Array.isArray(blok?.testimonies)
    ? blok.testimonies.filter(
        (testimony): testimony is TestimonialCardType =>
          testimony.component === "testimonialCard",
      )
    : [];
  const backgroundColor = getBackgroundColor(
    blok.background_colors ?? "Default",
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
        {testimonies?.map((testimony) => (
          <TestimonialCard key={testimony._uid} blok={testimony} />
        ))}
      </div>
    </ContainerSection>
  );
}
