'use client'

import { useState } from 'react';
import GameFrame from '../game/GameFrame';
import StartButton from '../game/StartButton';

interface GamePlayerProps {
  gameUrl: string;
}

export default function GamePlayer({ gameUrl }: GamePlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
      <h2 className="text-3xl font-bold text-text-primary mb-6">Play Now</h2>
      {!isLoaded ? (
        <StartButton onClick={() => setIsLoaded(true)} />
      ) : (
        <GameFrame url={gameUrl} />
      )}
    </section>
  );
}