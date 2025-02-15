'use client';
import { useRouter, usePathname } from 'next/navigation';
import { defaultLocale,getLanguageFromPath, localeNames } from "@/lib/i18n";

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = getLanguageFromPath(pathname)
  const handleLanguageChange = (newLang: string) => {
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');
    router.push(`/${newLang}${pathWithoutLang}`);
  };

  return (
    <select
      onChange={(e) => handleLanguageChange(e.target.value)}
      value={currentLang}
      className="bg-white border border-secondary/20 rounded-md px-3 py-1 text-sm md:text-base md:px-4 md:py-2"
    >
      {Object.keys(localeNames).map((lang:string) => (
        <option key={lang} value={lang}>
          {localeNames[lang].toUpperCase()}
        </option>
      ))}
    </select>
  );
}