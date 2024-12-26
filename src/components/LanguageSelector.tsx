import { SUPPORTED_LANGUAGES, type Language } from '@/lib/i18n';
import { useRouter } from 'next/router';

export default function LanguageSelector() {
  const router = useRouter();
  const currentPath = router.asPath;

  const handleLanguageChange = (newLang: Language) => {
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '');
    router.push(`/${newLang}${pathWithoutLang}`);
  };

  return (
    <div className="absolute top-4 right-4">
      <select
        onChange={(e) => handleLanguageChange(e.target.value as Language)}
        value={router.locale}
        className="bg-white border border-secondary/20 rounded-md px-3 py-1 text-sm"
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}