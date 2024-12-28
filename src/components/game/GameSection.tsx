'use client';

import { useState } from 'react';
import GameFrame from './GameFrame';
import StartButton from './StartButton';
import RelatedGames from './RelatedGames';

export default function GameSection({gameUrl}:{gameUrl:string}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="game" className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">Play Sprunki lily</h2>
      {!isLoaded ? (
        <StartButton onClick={() => setIsLoaded(true)} />
      ) : (
        <GameFrame url={gameUrl} />
      )}
      <RelatedGames currentGame="sprunki-extra-characters" lang="en" />
    </section>
  );
}