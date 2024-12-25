import RelatedGame from './RelatedGame';

const relatedGames = [
  {
    title: "Sprunki Ketchup 2.0",
    imageUrl: "https://sprunkiketchup.pro/images/sprunki-ketchup-2.jpg",
    gameUrl: "https://sprunkiketchup.pro/"
  },
  {
    title: "Sprunki Retake",
    imageUrl: "https://sprunkix.com/images/sprunki-retake.png",
    gameUrl: "https://sprunkix.com/game/sprunki-retake/"
  },
  {
    title: "Sprunki Phase 10",
    imageUrl: "https://sprunkix.com/images/sprunki-phase-10.jpg",
    gameUrl: "https://sprunkix.com/game/sprunki-phase-10/"
  }
  ,
  {
    title: "Sprunki Mustard",
    imageUrl: "https://sprunkix.com/images/mustard.webp",
    gameUrl: "https://sprunkix.com/game/sprunki-mustard/"
  }
];

export default function RelatedGames() {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4">Related Games</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {relatedGames.map((game) => (
          <RelatedGame
            key={game.title}
            title={game.title}
            imageUrl={game.imageUrl}
            gameUrl={game.gameUrl}
          />
        ))}
      </div>
    </div>
  );
}