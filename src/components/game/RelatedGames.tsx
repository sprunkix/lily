import { getSortedGamesData } from '@/lib/game';
import RelatedGame from './RelatedGame';

interface RelatedGamesProps {
  lang: string;
  locale: any;
}

export default async function RelatedGames({ lang, locale }: RelatedGamesProps) {
	const relatedGames = await getSortedGamesData(lang).slice(0, 4);
  return (
    <section id="game" className="bg-white rounded-xl shadow-sm p-8 mb-4 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-4">{locale.relatedGames}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {relatedGames.map((game) => (
          <RelatedGame
            key={game.title}
            title={game.title}
            imageUrl={game.ogImage}
			      gameUrl={game.gameUrl}
          />
        ))}
      </div>
      </section>
  )
}