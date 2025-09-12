import { Accordion } from "@/components/ui/accordion";
import FAQItem from "@/components/atoms/faq/faq-item";
import type { FaqTab as FAQTabType } from "@/types";

interface FAQTabProps {
  blok: FAQTabType;
}

export function FAQTab({ blok }: FAQTabProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-6 lg:p-8 border border-gray-100">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200">
        {blok.title}
      </h3>
      <Accordion type="multiple" className="w-full">
        {blok.questions?.map((item) => (
          <FAQItem key={item._uid} item={item} />
        ))}
      </Accordion>
    </div>
  );
}
