"use client";

import { SectionHeader } from "@/components/atoms/shared/section-header";
import { ServiceReferenceCard } from "../../atoms/home/service-reference-card";
import { SearchField } from "@/components/atoms/home/search";
import type { ProviderSection as ProviderSectionType } from "@/types";
import { useState, useMemo } from "react";
import { ContainerSection } from "@/shared/layout/container-section";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

import { ServiceReference } from "./index";

type ProviderSectionProps = {
  blok: ProviderSectionType & {
    provider_reference?: ServiceReference[];
  };
  className?: string;
};

export function ProviderSection({ blok, className }: ProviderSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const serviceReferences = Array.isArray(blok?.provider_reference)
    ? blok.provider_reference
    : [];

  const filteredServiceReferences = useMemo(() => {
    if (!searchTerm.trim()) return serviceReferences;

    return serviceReferences.filter((service) => {
      const providerInfo = (service.content as any).body[0];

      const emailContact = providerInfo.contactInfo?.[0]?.contact?.find(
        (c: any) => c.label === "Email Address",
      );
      const phoneContact = providerInfo.contactInfo?.[0]?.contact?.find(
        (c: any) => c.label === "Phone Number",
      );

      const callButton = providerInfo.get_in_touch?.find(
        (g: any) => g.label === "Call Now",
      );
      const messageButton = providerInfo.get_in_touch?.find(
        (g: any) => g.label === "Send Message",
      );

      const email = emailContact?.value || messageButton?.value || "";
      const phone = phoneContact?.value || callButton?.value || "";
      const name = providerInfo.name || "";
      const profession = providerInfo.profession || "";

      return (
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
        email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        phone.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [serviceReferences, searchTerm]);

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
        title={blok?.headline || ""}
        description={blok?.description || ""}
        align="center"
        className="mb-12"
      />

      {serviceReferences.length > 0 && (
        <div className="w-full max-w-2xl mx-auto mb-12">
          <SearchField
            placeholder={
              blok?.search_placeholder ?? "Search service providers..."
            }
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full"
          />
        </div>
      )}

      {filteredServiceReferences.length > 0 ? (
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto px-4",
            "gap-6",
          )}
        >
          {filteredServiceReferences.map((service) => (
            <ServiceReferenceCard
              key={service._uid as unknown as string}
              service={service as unknown as ServiceReference}
            />
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
