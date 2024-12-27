import { Metadata } from 'next';
import { getGameData } from '@/lib/games';
import { SUPPORTED_LANGUAGES, type Language } from '@/lib/i18n';
import GameHeader from '@/components/games/GameHeader';
import GamePlayer from '@/components/games/GamePlayer';
import GameFeatures from '@/components/games/GameFeatures';
import GameVideos from '@/components/games/GameVideos';
import GameFAQ from '@/components/games/GameFAQ';
import RelatedGames from '@/components/game/RelatedGames';
import GameComments from '@/components/comments/GameComments';

interface GamePageProps {
  params: {
    lang: Language;
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = [];
  for (const lang of SUPPORTED_LANGUAGES) {
    const slugs = await getGameSlugs(lang);
    for (const slug of slugs) {
      paths.push({ lang, slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = await getGameData(params.lang, params.slug);
  
  return {
    title: `${game.title} - Play Free Online | Sprunki Games`,
    description: game.description,
    keywords: game.keywords,
    openGraph: {
      title: `${game.title} - Play Free Online | Sprunki Games`,
      description: game.description,
      images: [game.ogImage],
    }
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const game = await getGameData(params.lang, params.slug);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <GameHeader 
        title={game.title}
        description={game.description}
      />
      <GamePlayer 
        gameUrl={game.gameUrl}
        title={game.title}
        description={game.description}
      />
      <GameFeatures features={game.features} />
      <GameVideos videos={game.videos} />
      <GameFAQ faqs={game.faqs} />
      <GameComments gameSlug={params.slug} />
      <RelatedGames currentGame={game.slug} lang={params.lang} />
    </div>
  );
}