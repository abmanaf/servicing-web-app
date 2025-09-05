import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchFieldProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
}

export function SearchField({
  placeholder,
  value,
  onChange,
  className,
  inputClassName,
}: SearchFieldProps) {
  return (
    <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground z-10" />
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "w-full h-10 text-lg pl-12 pr-4 border-2 border-gray-200 focus:border-primary transition-colors rounded-full",
          inputClassName
        )}
      />
    </div>
  );
}