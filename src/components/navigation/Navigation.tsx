'use client';
import SiteLinks from './SiteLinks';
import { usePathname } from 'next/navigation';
import { getDictionary,getLanguageFromPath } from '@/lib/i18n';
export default async function Navigation() {
  const pathname = usePathname();
  const currenstLang = getLanguageFromPath(pathname)
  const dict = await getDictionary(currenstLang); 
  return (
  <SiteLinks currenstLang={currenstLang} nav={dict.nav} ></SiteLinks>
  );
}