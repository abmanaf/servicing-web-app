import type { ServiceCard as ServiceCardType } from "@/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ServiceCardProps {
  blok: ServiceCardType;
  className?: string;
}

export default function ServiceCard({ blok, className }: ServiceCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {blok.icon?.filename && (
        <div className="mb-3 flex justify-center">
          <Image
            src={blok.icon.filename}
            alt={blok.title || "Service icon"}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      )}

      <h4 className="font-semibold text-blue-700 text-lg mb-2 text-center">
        {blok.title}
      </h4>

      {blok.specific_works && (
        <p className="text-gray-600 text-sm leading-relaxed text-center flex-grow">
          {blok.specific_works}
        </p>
      )}
    </div>
  );
}
