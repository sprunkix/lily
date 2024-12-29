'use client';
import { useRouter, usePathname } from 'next/navigation';
import { defaultLocale, localeNames } from "@/lib/i18n";

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const handleLanguageChange = (newLang: string) => {
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');
    router.push(`/${newLang}${pathWithoutLang}`);
  };

  return (
    <select
      onChange={(e) => handleLanguageChange(e.target.value)}
      value={currentLang}
      className="bg-white border border-secondary/20 rounded-md px-3 py-1 text-sm"
    >
      {Object.keys(localeNames).map((lang:string) => (
        <option key={lang} value={lang}>
          {localeNames[lang].toUpperCase()}
        </option>
      ))}
    </select>
  );
}