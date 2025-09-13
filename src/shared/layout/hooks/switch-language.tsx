import { useRouter, usePathname } from "next/navigation";

export const useLanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const availableLanguages = ["en", "de"];

  const switchLanguage = (newLocale: string) => {
    let pathWithoutLocale = pathname;

    const pathParts = pathname.split("/");
    if (pathParts.length > 1 && availableLanguages.includes(pathParts[1])) {
      pathWithoutLocale = "/" + pathParts.slice(2).join("/") || "/";
    }

    if (newLocale === "en") {
      router.push(pathWithoutLocale || "/");
    } else {
      router.push(`/${newLocale}${pathWithoutLocale}`);
    }
  };

  return { switchLanguage };
};
