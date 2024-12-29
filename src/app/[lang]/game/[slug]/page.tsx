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
interface GamePageProps {
  params: {
    lang: string;
    slug: string;
  };
}


export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = await getGameData(params.lang, params.slug);
  return {
    title: `${game.title} -  Sprunki Games`,
    description: game.description,
    keywords: game.keywords,
    openGraph: {
      title: `${game.title} - Sprunki Games`,
      description: game.description,
      images: [game.ogImage],
    }
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const dict = await getDictionary(params.lang);
  const game = await getGameData(params.lang, params.slug);
  console.log(game);
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
      <GameComments locale={dict.games} gameSlug={params.slug} />
      <RelatedGames locale={dict.games} lang={params.lang} />
      <GameFeatures locale={dict.games} features={game.features} />
      <GameVideos locale={dict.games} videos={game.videos} />
      <GameFAQ locale={dict.games} faqs={game.faqs} />
      
    </div>
  );
     
}