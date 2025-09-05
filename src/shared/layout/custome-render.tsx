import { ArrowRightCircle } from "lucide-react";

export const customRenderOptions = {
  nodeResolvers: {
    ["unordered_list"]: (children: React.ReactNode) => (
      <ul className="space-y-3 list-none">{children}</ul>
    ),
    ["ordered_list"]: (children: React.ReactNode) => (
      <ol className="space-y-3 list-none">{children}</ol>
    ),
    ["list_item"]: (children: React.ReactNode) => (
      <li className="flex items-start gap-3 mt-2">
        <ArrowRightCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
        <span className="text-gray-700">{children}</span>
      </li>
    ),
  },
};
