"use client";

import { useEffect, useRef, useState } from "react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { customRenderer } from "@/shared/layout/custome-render";
import { render } from "storyblok-rich-text-react-renderer";
import { FaqItem as FAQItemType } from "@/types";
import { cn } from "@/lib/utils";

const FAQItem = ({ item }: { item: FAQItemType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <AccordionItem
      ref={itemRef}
      value={item._uid}
      className={cn(
        "border-b border-gray-200 last:border-b-0 transition-all duration-500",
        {
          "opacity-100 translate-y-0": isVisible,
          "opacity-0 translate-y-4": !isVisible,
        },
      )}
    >
      <AccordionTrigger className="flex w-full items-center justify-between py-4 sm:py-6 text-left font-medium text-gray-900 hover:text-blue-600 transition-colors data-[state=open]:text-blue-600">
        <span className="text-base sm:text-lg font-semibold text-left pr-4">
          {item.question}
        </span>
      </AccordionTrigger>
      <AccordionContent className="overflow-hidden text-sm">
        <div className="pb-4 sm:pb-6">
          {render(item.answer, customRenderer)}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
