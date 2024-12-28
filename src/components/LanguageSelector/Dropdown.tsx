
import { useRouter, usePathname } from 'next/navigation';
import { defaultLocale, localeNames } from "@/lib/i18n";

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLang: string) => {
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');
    router.push(`/${newLang}${pathWithoutLang}`);
  };

  return (
    <select
      onChange={(e) => handleLanguageChange(e.target.value)}
      value={defaultLocale}
      className="bg-white border border-secondary/20 rounded-md px-3 py-1 text-sm"
    >
      {Object.keys(localeNames).map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}