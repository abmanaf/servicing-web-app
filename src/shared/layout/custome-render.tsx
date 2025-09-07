import { ArrowRightCircle } from "lucide-react";
import { ReactNode } from "react";

export const customRenderer = {
  nodeResolvers: {
    paragraph: (children: ReactNode) => (
      <p className="text-lg text-gray-600 leading-relaxed mb-4">{children}</p>
    ),
    bullet_list: (children: ReactNode) => (
      <ul className="space-y-1 mb-1">{children}</ul>
    ),
    list_item: (children: ReactNode) => (
      <li className="flex items-start gap-3">
        <ArrowRightCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
        <span className="flex-1 text-gray-700">{children}</span>
      </li>
    ),
    bold: (children: ReactNode) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
  },
};
