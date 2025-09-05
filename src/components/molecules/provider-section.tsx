"use client";

import { SectionHeader } from "@/components/atoms/section-header";
import { ProviderCard } from "./provider-card";
import { SearchField } from "@/components/atoms/search";
import type { ProviderSection as ProviderSectionType } from "@/types";
import { useState, useMemo } from "react";
import { ContainerSection } from "@/shared/layout/container-section";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type ProviderSectionProps = {
  blok: ProviderSectionType;
  className?: string;
};

export function ProviderSection({ blok, className }: ProviderSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Safely get provider details
  const providerDetails = Array.isArray(blok?.provider_details)
    ? blok.provider_details
    : [];

  // Filter providers based on search term
  const filteredProviders = useMemo(() => {
    if (!searchTerm.trim()) return providerDetails;

    return providerDetails.filter(
      (provider) =>
        provider.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.service?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [providerDetails, searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

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
      />

      <div className="w-full max-w-2xl mx-auto mb-12">
        <SearchField
          placeholder={blok?.search_placeholder ?? "Search..."}
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full"
        />
      </div>

      {filteredProviders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center container mx-auto px-4">
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
            {searchTerm.trim()
              ? "No providers found"
              : "No providers available"}
          </h3>
          <p className="text-gray-600">
            {searchTerm.trim()
              ? `No providers found for "${searchTerm}"`
              : "Check back later for available service providers"}
          </p>
        </div>
      )}
    </ContainerSection>
  );
}
