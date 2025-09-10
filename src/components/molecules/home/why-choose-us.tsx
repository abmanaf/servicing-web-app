"use client";

import { useState } from "react";
import { ContainerSection } from "@/shared/layout/container-section";
import { SectionHeader } from "@/components/atoms/section-header";
import { WhyChooseUsEntry } from "@/components/atoms/why-choose-us-entry";
import type { WhyChooseUs as WhyChooseUsType, Entries } from "@/types";
import { render } from "storyblok-rich-text-react-renderer";
import { customRenderer } from "@/shared/layout/custome-render";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getHeaderColor } from "@/shared/layout/storyblok-global-style";
import { cn } from "@/lib/utils";

interface WhyChooseUsProps {
  blok: WhyChooseUsType;
  className?: string;
}

export function WhyChooseUs({ blok, className }: WhyChooseUsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const entries: Entries[] = Array.isArray(blok?.entries)
    ? blok.entries.filter(
        (entry): entry is Entries => entry.component === "entries",
      )
    : [];

  const headerColor = getHeaderColor(
    (blok.headline?.[0].highlight as string) ?? "Default Highlight",
  );

  return (
    <ContainerSection
      className={className}
      background="default"
      padding="lg"
      maxWidth="7xl"
      id="why-choose-us"
    >
      <SectionHeader
        title={(blok?.headline?.[0]?.text as string) ?? ""}
        description={blok?.description ?? ""}
        align="center"
        className="mb-12"
        titleClassName={headerColor}
      />

      {entries.length > 1 && (
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-16">
          {entries.map((entry, index) => (
            <Button
              key={entry._uid}
              onClick={() => setActiveTab(index)}
              className={cn(
                `px-6 py-2 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground shadow scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 shadow-sm"
                }`,
              )}
            >
              {entry.headline ?? `Option ${index + 1}`}
            </Button>
          ))}
        </div>
      )}

      {entries.length > 0 && (
        <div className="hidden md:block">
          <div className="px-8 lg:px-12">
            <WhyChooseUsEntry blok={entries[activeTab]} />
          </div>
        </div>
      )}

      <div className="md:hidden space-y-8">
        {entries.map((entry) => (
          <div key={entry._uid} className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {entry.headline ?? ""}
                </h3>
                <div className="flex flex-col-reverse gap-4">
                  {entry.description && (
                    <div className="space-y-1 mb-0 text-gray-600 leading-relaxed">
                      {render(entry.description, customRenderer)}
                    </div>
                  )}
                  {entry.image && (
                    <div className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src={entry.image.filename ?? ""}
                        alt={entry.image.alt ?? entry.headline ?? ""}
                        className="w-full h-full object-cover"
                        fill
                        sizes="100vw"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {entries.length === 1 && (
        <div className="hidden md:block">
          <div className="px-8 lg:px-12">
            <WhyChooseUsEntry blok={entries[0]} />
          </div>
        </div>
      )}
    </ContainerSection>
  );
}
