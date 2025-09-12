import { cn } from "@/lib/utils";
import type { ContactInfo } from "@/types";
import ContactInfoCard from "./info-card";

type ContactInfoSectionProps = {
  blok: ContactInfo;
  className?: string;
};

export default function ContactInfoSection({
  blok,
  className,
}: ContactInfoSectionProps) {
  return (
    <div className={cn("w-full", className)}>
      <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        {blok.title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blok.contact?.map((contact) => (
          <ContactInfoCard key={contact._uid} blok={contact} />
        ))}
      </div>
    </div>
  );
}
