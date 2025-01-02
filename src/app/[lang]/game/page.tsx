
import GameSections from '@/components/games/GameSections'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { defaultLocale, getDictionary, localeNames } from "@/lib/i18n";
import {getSortedGamesData} from '@/lib/game'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const langName = lang || defaultLocale;
  const dict = await getDictionary(langName);
  return {
    title: `${dict.games.title} - ${dict.header.title}`,
    description: dict.games.description || `Read about ${dict.games.title} on Sprunki Lily`,
    alternates: {
      canonical: `https://sprunkiLily.com/${langName}/game/`, 
      languages: {
        "en": `https://sprunkiLily.com/en/game/`,
        "ar": `https://sprunkiLily.com/ar/game/`,
        "es": `https://sprunkiLily.com/es/game/`,
        "fr": `https://sprunkiLily.com/fr/game/`,
        "ja": `https://sprunkiLily.com/ja/game/`,
        "ko": `https://sprunkiLily.com/ko/game/`,
        "pt": `https://sprunkiLily.com/pt/game/`, 
        "ru": `https://sprunkiLily.com/ru/game/`,
        "zh": `https://sprunkiLily.com/zh/game/`,
      }
    }
  };
}

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