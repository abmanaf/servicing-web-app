"use client";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check } from "lucide-react";
import { SwitchLanguage } from "./hooks/switch-language";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

interface LanguageSwitcherProps {
  currentLocale?: string;
  className?: string;
}

export default function LanguageSwitcher({
  currentLocale = "en",
  className,
}: LanguageSwitcherProps) {
  const activeLocale = currentLocale;

  const currentLanguage =
    languages.find((lang) => lang.code === activeLocale) || languages[0];

  return (
    <div className={cn("relative", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-2 px-3 py-0.5 h-auto"
          >
            <span className="text-lg">{currentLanguage.flag}</span>
            <span className="hidden sm:inline font-medium">
              {currentLanguage.code.toUpperCase()}
            </span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel className="sr-only">
            Select Language
          </DropdownMenuLabel>

          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => SwitchLanguage(language.code)}
              className={cn(
                "flex items-center space-x-3 cursor-pointer mb-2",
                activeLocale === language.code && "bg-accent"
              )}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="flex-1">{language.name}</span>
              {activeLocale === language.code && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
