import { useState } from 'react';
import LanguageDropdown from '../LanguageSelector/Dropdown';
import NavLink from './NavLink';
interface SiteLinksProps {
  currenstLang: string;
  nav: any;
}

export default function SiteLinks({ currenstLang, nav }:SiteLinksProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
<nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-primary">Sprunki Lily</span>
          </div>
           {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href={`/${currenstLang}`}>{nav.home}</NavLink>
            <NavLink href={`/${currenstLang}/game`}>{nav.games}</NavLink>
            <NavLink href={`/blog`}>Blog</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            {/* <NavLink href={`/${currenstLang}/characters`}>{dict.nav.characters}</NavLink> */}
            {/* <NavLink href={`/${currenstLang}/community`}>{dict.nav.community}</NavLink> */}
          </div>

             {/* Language Selector - Desktop */}
          <div className="hidden md:block">
            <LanguageDropdown/>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-primary hover:text-primary hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
       {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <NavLink href={`/${currenstLang}`}>{nav.home}</NavLink>
          <NavLink href={`/${currenstLang}/game`}>{nav.games}</NavLink>
          <NavLink href={`/blog`}>Blog</NavLink>
          <NavLink href="/about-us">About Us</NavLink>
          <div className="pt-4 pb-2">
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </nav>);
}