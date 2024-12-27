import type { GameData } from '@/types/game';
import type { Language } from '@/lib/i18n';

const API_BASE = '/api/games';

export async function fetchGameData(lang: Language, slug: string): Promise<GameData> {
  const response = await fetch(`${API_BASE}/${lang}/${slug}`);
  if (!response.ok) {
    throw new Error('Game not found');
  }
  return response.json();
}

export async function fetchGameSlugs(lang: Language): Promise<string[]> {
  const response = await fetch(`${API_BASE}/${lang}`);
  if (!response.ok) {
    throw new Error('Failed to fetch game slugs');
  }
  return response.json();
}

export async function fetchRelatedGames(
  lang: Language, 
  currentSlug: string, 
  limit: number = 3
): Promise<GameData[]> {
  const response = await fetch(`${API_BASE}/${lang}/related/${currentSlug}?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch related games');
  }
  return response.json();
}