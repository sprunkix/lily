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
          {/* mobile */}
          <div className="flex md:hidden">
            <button 
              onClick={() => {
                const mobileMenu = document.querySelector('#mobile-menu');
                mobileMenu?.classList.toggle('hidden');
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* pc */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink href={`/${currenstLang}`}>{dict.nav.home}</NavLink>
            <NavLink href={`/${currenstLang}/game`}>{dict.nav.games}</NavLink>
            {/* <NavLink href={`/${currenstLang}/characters`}>{dict.nav.characters}</NavLink> */}
            {/* <NavLink href={`/${currenstLang}/community`}>{dict.nav.community}</NavLink> */}
          </div>

          {/* language */}
          <div className="flex items-center flex-shrink-0">
            <LanguageDropdown/>
          </div>
        </div>

        {/* 移动端菜单内容 */}
        <div id="mobile-menu" className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href={`/${currenstLang}`}>{dict.nav.home}</NavLink>
            <NavLink href={`/${currenstLang}/game`}>{dict.nav.games}</NavLink>
            {/* <NavLink href={`/${currenstLang}/characters`}>{dict.nav.characters}</NavLink> */}
            {/* <NavLink href={`/${currenstLang}/community`}>{dict.nav.community}</NavLink> */}
          </div>
        </div>
      </div>
    </nav>
  );
}