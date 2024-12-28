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
    <ul className="flex gap-4 justify-center">
      {Object.keys(localeNames).map((lang) => (
        <li key={lang}>
          <Link
            href={`/${lang}${pathWithoutLang}`}
            className={`text-sm ${
              currentLang === lang
                ? 'text-primary font-semibold'
                : 'text-text-secondary hover:text-primary'
            }`}
          >
            {localeNames[lang].toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
}