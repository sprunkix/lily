import type { GameData } from '@/types/game';
import type { Language } from '@/lib/i18n';

export async function getGameData(lang: Language, slug: string): Promise<GameData> {
  const response = await fetch(`/api/games/${lang}/${slug}`);
  if (!response.ok) {
    throw new Error('Game not found');
  }
  return response.json();
}

export async function getGameSlugs(lang: Language): Promise<string[]> {
  const response = await fetch(`/api/games/${lang}`);
  if (!response.ok) {
    throw new Error('Failed to fetch game slugs');
  }
  return response.json();
}

export async function getRelatedGames(
  lang: Language, 
  currentSlug: string, 
  limit: number = 3
): Promise<GameData[]> {
  const response = await fetch(`/api/games/${lang}/related/${currentSlug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch related games');
  }
  return response.json();
}