import { cache } from 'react';
import type { GameData } from '@/types/game';
import type { Language } from '@/types/language';

// Simulated database/cache of games
const gamesData: Record<Language, Record<string, GameData>> = {
  en: {
    'sprunki-adventure': {
      slug: 'sprunki-adventure',
      title: 'Sprunki Adventure',
      description: 'Embark on an epic journey with Sprunki in this exciting adventure game.',
      keywords: ['sprunki adventure', 'adventure game', 'puzzle game'],
      ogImage: 'https://games.sprunkix.com/images/sprunki-adventure-og.jpg',
      gameUrl: 'https://game.sprunkix.com/adventure',
      features: [
        {
          title: 'Magical Worlds',
          description: 'Explore 5 unique and enchanting worlds',
          icon: '🌍'
        }
      ],
      videos: [
        {
          title: 'Gameplay Trailer',
          url: 'https://youtube.com/embed/xxxx',
          thumbnail: 'https://games.sprunkix.com/images/trailer-thumb.jpg'
        }
      ],
      faqs: [
        {
          question: 'How do I play Sprunki Adventure?',
          answer: 'Use arrow keys to move, spacebar to jump, and collect gems to progress.'
        }
      ]
    }
  }
};

export const getGameData = cache(async (lang: Language, slug: string): Promise<GameData> => {
  const game = gamesData[lang]?.[slug];
  if (!game) {
    throw new Error(`Game not found: ${slug} (${lang})`);
  }
  return game;
});

export const getGameSlugs = cache(async (lang: Language): Promise<string[]> => {
  return Object.keys(gamesData[lang] || {});
});

export const getRelatedGames = cache(async (
  lang: Language, 
  currentSlug: string, 
  limit: number = 3
): Promise<GameData[]> => {
  const allGames = Object.values(gamesData[lang] || {});
  return allGames
    .filter(game => game.slug !== currentSlug)
    .slice(0, limit);
});