import type { ServiceOffered } from "@/types";
import ServiceCard from "./card";
import { cn } from "@/lib/utils";

interface ServiceSectionProps {
  blok: ServiceOffered;
  className?: string;
}

export default function ServiceSection({
  blok,
  className,
}: ServiceSectionProps) {

  return (
    <div className={cn("w-full", className)}>
      <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        {blok.title || "Services Offered"}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blok.service_card?.map((service) => (
          <ServiceCard key={service._uid} blok={service} />
        ))}
      </div>
    </div>
  );
}
