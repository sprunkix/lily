'use client';
import NavLink from './NavLink';
import LanguageDropdown from '../LanguageSelector/Dropdown';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n';
export default async function Navigation() {
  const pathname = usePathname();
  const currenstLang = pathname.split('/')[1] || 'en';
  const dict = await getDictionary(currenstLang); 
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <NavLink href={`/${currenstLang}`}>{dict.nav.home}</NavLink>
            <NavLink href={`/${currenstLang}/game`}>{dict.nav.games}</NavLink>
            {/* <NavLink href={`/${currenstLang}/characters`}>{dict.nav.characters}</NavLink> */}
            {/* <NavLink href={`/${currenstLang}/community`}>{dict.nav.community}</NavLink> */}
          </div>
          <LanguageDropdown/>
        </div>
      </div>
    </nav>
  );
}