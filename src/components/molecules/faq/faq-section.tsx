import { ContainerSection } from "@/shared/layout/container-section";
import { SectionHeader } from "@/components/atoms/shared/section-header";
import { FAQTab } from "@/components/atoms/faq/faq-tab";
import type {
  FaqSection as FAQSectionType,
  FaqTab as FAQTabType,
} from "@/types";
import {
  getHeaderColor,
  getBackgroundColor,
} from "@/shared/layout/storyblok-global-style";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FAQSectionProps {
  blok: FAQSectionType;
  className?: string;
}

export function FAQSection({ blok, className }: FAQSectionProps) {
  const faqTabs: FAQTabType[] = Array.isArray(blok?.faq_section)
    ? blok.faq_section.filter(
        (tab): tab is FAQTabType => tab.component === "faqTab",
      )
    : [];

  const backgroundColor = getBackgroundColor(
    blok.background_color ?? "Default",
  );
  const headerColor = getHeaderColor(
    blok.headline?.[0]?.highlight ?? "Default Highlight",
  );

  return (
    <ContainerSection
      className={className}
      background={backgroundColor}
      padding="xl"
      maxWidth="7xl"
      id="faq-section"
    >
      <div className="text-center mb-16">
        {blok.headline && blok.headline.length > 0 && (
          <SectionHeader
            title={blok.headline[0].text ?? ""}
            description={blok.description || ""}
            align="center"
            titleClassName={headerColor}
          />
        )}
      </div>
      <Tabs
        defaultValue={faqTabs[0]._uid}
        className="w-full container mx-auto px-4"
      >
        <div className="mb-8 flex justify-center">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <TabsList className="bg-white h-auto p-1 inline-flex min-w-max">
              {faqTabs.map((tab) => (
                <TabsTrigger
                  key={tab._uid}
                  value={tab._uid}
                  className="px-6 py-3 text-sm md:text-base hover:bg-gray-100 cursor-pointer font-medium data-[state=active]:bg-primary data-[state=active]:hover:bg-primary/90 transition-colors data-[state=active]:text-primary-foreground data-[state=active]:border-primary rounded-full mx-1 whitespace-nowrap flex-shrink-0"
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        {faqTabs.map((tab) => (
          <TabsContent key={tab._uid} value={tab._uid} className="mt-6 sm:mt-8">
            <div className="bg-white rounded-2xl">
              <FAQTab blok={tab} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </ContainerSection>
  );
}
