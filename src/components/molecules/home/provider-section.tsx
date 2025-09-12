"use client";

import { SectionHeader } from "@/components/atoms/shared/section-header";
import { ProviderCard } from "../../atoms/home/provider-card";
import { SearchField } from "@/components/atoms/home/search";
import type { ProviderSection as ProviderSectionType } from "@/types";
import { useState, useMemo } from "react";
import { ContainerSection } from "@/shared/layout/container-section";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getGridColumns,
  getHeaderColor,
} from "@/shared/layout/storyblok-global-style";

type ProviderSectionProps = {
  blok: ProviderSectionType;
  className?: string;
};

export function ProviderSection({ blok, className }: ProviderSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const providersDetails = Array.isArray(blok?.provider_details)
    ? blok.provider_details
    : [];
  const filteredProviders = useMemo(() => {
    if (!searchTerm.trim()) return providersDetails;

    return providersDetails.filter(
      (provider) =>
        provider.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.service?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.email?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [providersDetails, searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const columns = getGridColumns(blok.columns ?? "Three");
  const headerColor = getHeaderColor(
    (blok.headline?.[0].highlight as string) ?? "Default Highlight",
  );
  return (
    <ContainerSection
      className={cn(className, "mx-auto")}
      background="muted"
      padding="lg"
      maxWidth="full"
    >
      <SectionHeader
        title={blok?.headline?.[0]?.text as string}
        description={blok?.description || ""}
        align="center"
        className="mb-12"
        titleClassName={headerColor}
      />
      {providersDetails.length > 0 && (
        <div className="w-full max-w-2xl mx-auto mb-12">
          <SearchField
            placeholder={blok?.search_placeholder ?? "Search..."}
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full"
          />
        </div>
      )}
      {filteredProviders.length > 0 ? (
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 container mx-auto px-4",
            columns,
            "gap-8",
          )}
        >
          {filteredProviders.map((provider) => (
            <div key={provider._uid} className="w-full">
              <ProviderCard blok={provider} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {searchTerm.trim() ? blok.search_no_provider : blok.no_provider_yet}
          </h3>
          <p className="text-gray-600">
            {searchTerm.trim()
              ? `${blok.no_provider_search_item} ${searchTerm}`
              : blok.no_provider_description}
          </p>
        </div>
      )}
    </ContainerSection>
  );
}
