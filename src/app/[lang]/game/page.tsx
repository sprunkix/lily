
import GameSections from '@/components/games/GameSections'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { defaultLocale, getDictionary, localeNames } from "@/lib/i18n";
import {getSortedGamesData} from '@/lib/game'
export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);
  const games = getSortedGamesData(langName);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
      <Header locale={dict.header} />  
      <GameSections locale={dict.games} games={games} />
      <Footer locale={dict.footer} currentLang={langName} />
    </div>
  )
}