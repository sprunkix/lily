import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import type { GameData } from '@/types/game';
import type { Language } from '@/types/language';

const GAMES_DIRECTORY = path.join(process.cwd(), 'src/data/games');

export async function getGameData(lang: Language, slug: string): Promise<GameData> {
  const fullPath = path.join(GAMES_DIRECTORY, lang, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data } = matter(fileContents);
  
  return {
    slug,
    ...data as Omit<GameData, 'slug'>
  };
}

export async function getGameSlugs(lang: Language): Promise<string[]> {
  const langPath = path.join(GAMES_DIRECTORY, lang);
  const files = await fs.readdir(langPath);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

export async function getRelatedGames(
  lang: Language, 
  currentSlug: string, 
  limit: number = 3
): Promise<GameData[]> {
  const slugs = await getGameSlugs(lang);
  const otherSlugs = slugs.filter(slug => slug !== currentSlug);
  
  const games = await Promise.all(
    otherSlugs.slice(0, limit).map(slug => getGameData(lang, slug))
  );
  
  return games;
}