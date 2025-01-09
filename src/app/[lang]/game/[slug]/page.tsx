import { Metadata } from 'next';
import GameHeader from '@/components/games/GameHeader';
import GamePlayer from '@/components/games/GamePlayer';
import GameFeatures from '@/components/games/GameFeatures';
import GameVideos from '@/components/games/GameVideos';
import GameFAQ from '@/components/games/GameFAQ';
import RelatedGames from '@/components/game/RelatedGames';
import GameComments from '@/components/comments/GameComments';
import { getGameData } from '@/lib/game';
import { getDictionary } from '@/lib/i18n';
import Footer from '@/components/Footer';
interface GamePageProps {
  params: {
    lang: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = await getGameData(params.lang, params.slug);
  return {
    title: `${game.title}`,
    description: game.description,
    keywords: game.keywords,
    alternates: {
      canonical: `https://sprunkiLily.com/${params.lang}/game/${params.slug}`, 
      languages: {
        "en": `https://sprunkiLily.com/en/game/${params.slug}`,
        "ar": `https://sprunkiLily.com/ar/game/${params.slug}`,
        "es": `https://sprunkiLily.com/es/game/${params.slug}`,
        "fr": `https://sprunkiLily.com/fr/game/${params.slug}`,
        "ja": `https://sprunkiLily.com/ja/game/${params.slug}`,
        "ko": `https://sprunkiLily.com/ko/game/${params.slug}`,
        "pt": `https://sprunkiLily.com/pt/game/${params.slug}`, 
        "ru": `https://sprunkiLily.com/ru/game/${params.slug}`,
        "zh": `https://sprunkiLily.com/zh/game/${params.slug}`,
      }
    },
    openGraph: {
      title: `${game.title}`,
      description: game.description,
      images: [game.ogImage],
      
    }
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const dict = await getDictionary(params.lang);
  const game = await getGameData(params.lang, params.slug);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <GameHeader 
        title={game.title}
        description={game.description}
      />
      <GamePlayer locale={dict.games}
        gameUrl={game.gameUrl}
        title={game.title}
        description={game.description}
      />
      <GameComments locale={dict.games} lang={params.lang} gameSlug={game.title} />
      <RelatedGames locale={dict.games} lang={params.lang} />
      <GameFeatures locale={dict.games} features={game.features} />
      <GameVideos locale={dict.games} videos={game.videosUrl} />
      <GameFAQ locale={dict.games} faqs={game.faqs} />
      <Footer locale={dict.footer} currentLang={params.lang} />
    </div>
  );
     
}