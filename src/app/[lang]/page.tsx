import Introduction from '@/components/Introduction'
import CharacterFeatures from '@/components/CharacterFeatures'
import CharacterForms from '@/components/CharacterForms'
import VideoSection from '@/components/VideoSection'
import GameSection from '@/components/game/GameSection'
import GameModules from '@/components/GameModules'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { defaultLocale, getDictionary, localeNames } from "@/lib/i18n";
import RelatedGames from '@/components/game/RelatedGames'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const langName = lang || defaultLocale;
  const postData = await getDictionary(langName);
  return {
    title: `${postData.header.title}`,
    description: postData.header.description || `Read about ${postData.header.title} on Sprunki Lily`,
    alternates: {
      canonical: `https://sprunkiLily.com/${langName}`, 
      languages: {
        "en": `https://sprunkiLily.com/en`,
        "ar": `https://sprunkiLily.com/ar`,
        "es": `https://sprunkiLily.com/es`,
        "fr": `https://sprunkiLily.com/fr`,
        "ja": `https://sprunkiLily.com/ja`,
        "ko": `https://sprunkiLily.com/ko`,
        "pt": `https://sprunkiLily.com/pt`, 
        "ru": `https://sprunkiLily.com/ru`,
        "zh": `https://sprunkiLily.com/zh`,
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
  const GAME_URL = 'https://game.sprunkix.com/game/sprunki-extra-characters/index.html';
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header locale={dict.header} />  
	    <VideoSection locale={dict.videos} />  
	    <GameSection gameUrl={GAME_URL} locale={dict.games} />
      <RelatedGames lang={langName} locale={dict.games} />
      <Introduction locale={dict.introduction} />
      <CharacterFeatures locale={dict.features} />
      <CharacterForms locale={dict.forms} />
      <GameModules locale={dict.gameModules} />
      <Footer locale={dict.footer} currentLang={langName} />
    </div>
  )
}