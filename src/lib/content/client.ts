import type { Language } from '../i18n';
import type { HomeContent } from '@/types/content';
import type { GameData } from '@/types/game';

export async function getHomeContent(lang: Language = 'en'): Promise<HomeContent> {
  const sections = ['introduction', 'features', 'forms', 'videos', 'game-modules', 'footer'];
  
  const content = await Promise.all(
    sections.map(async section => {
      const response = await fetch(`/api/content/${lang}/${section}`);
      const data = await response.json();
      return [section, data];
    })
  );

  return Object.fromEntries(content);
}

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
  const response = await fetch(`/api/games/${lang}/related/${currentSlug}?limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch related games');
  }
  return response.json();
}