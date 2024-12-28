import HorizontalLanguageList from './LanguageSelector/HorizontalList'

export default function Footer({
  locale,
  currentLang
}: {
  locale: any;
  currentLang: string;
}) {
  return (
    <footer className="text-center py-8 border-t border-gray-200">
      <p className="text-gray-600 mb-2">  © {new Date().getFullYear()} {locale.copyright}</p>
      <p className="text-gray-500">{locale.followUs}</p>
      <HorizontalLanguageList params={{ currentLang }} />
    </footer>
  )
}