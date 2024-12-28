'use client';
import { useRouter, usePathname } from 'next/navigation';
import { defaultLocale, localeNames } from "@/lib/i18n";

export default function LanguageDropdown({
    params: { currentLang },
  }: {
    params: { currentLang: string };
  }) {
  const router = useRouter();
  const pathname = usePathname();

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