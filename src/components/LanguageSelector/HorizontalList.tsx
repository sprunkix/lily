'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { defaultLocale, localeNames } from "@/lib/i18n";

export default function HorizontalLanguageList({
  params: { currentLang },
}: {
  params: { currentLang: string };
}) {
  const pathname = usePathname();
  const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');

  return (
    <div className="max-w-full overflow-x-auto">
      <ul className="flex flex-wrap justify-center gap-2 px-4">
      {Object.keys(localeNames).map((lang) => (
        <li key={lang} className="flex-none">
          <Link
            href={`/${lang}${pathWithoutLang}`}
            className={`inline-block px-3 py-1 rounded-full text-sm ${
              currentLang === lang
                ? 'bg-primary text-white'
                : 'text-text-secondary hover:text-primary hover:bg-accent/20'
            } transition-colors`}
          >
            {localeNames[lang].toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}