import { Metadata } from 'next';
import GameHeader from '@/components/games/GameHeader';
import GamePlayer from '@/components/games/GamePlayer';
import GameFeatures from '@/components/games/GameFeatures';
import GameVideos from '@/components/games/GameVideos';
import GameFAQ from '@/components/games/GameFAQ';
import RelatedGames from '@/components/game/RelatedGames';
import GameComments from '@/components/comments/GameComments';

interface GamePageProps {
  params: {
    lang: string;
    slug: string;
  };
}


export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game ={ title: "Sprunki Extra Characters", description: "Play Sprunki Extra Characters online for free", keywords: "Sprunki Extra Characters, Sprunki, Sprunki Games, Sprunki Ketchup, Sprunki Mustard, Sprunki Retake, Sprunki Phase 10", ogImage: "https://sprunkix.com/images/sprunki-extra-characters.jpg" } //;{await getGameData(params.lang, params.slug);}
  
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
  const game ={ title: "Sprunki Extra Characters", gameUrl: "https://game.sprunkix.com/game/sprunki-extra-characters/index.html", description: "Play Sprunki Extra Characters online for free", keywords: "Sprunki Extra Characters, Sprunki, Sprunki Games, Sprunki Ketchup, Sprunki Mustard, Sprunki Retake, Sprunki Phase 10", ogImage: "https://sprunkix.com/images/sprunki-extra-characters.jpg" } //;{await getGameData(params.lang, params.slug);}
  
  
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
    
    </div>
  );
   /**  <GameFeatures features={game.features} />*/
     /**  <GameVideos videos={game.videos} />*/
     /**  <GameFAQ faqs={game.faqs} />*/
     /**  <GameComments gameSlug={params.slug} />*/
     /**  <RelatedGames currentGame={game.slug} lang={params.lang} />*/
}