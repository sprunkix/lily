import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import type { Language } from './i18n';
import type { HomeContent, ContentSection } from '@/types/content';

const CONTENT_DIRECTORY = path.join(process.cwd(), 'src/data/home');

async function getContentSection(lang: Language, section: string): Promise<ContentSection> {
  const fullPath = path.join(CONTENT_DIRECTORY, lang, `${section}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    frontmatter: data,
    content
  };
}

export async function getHomeContent(lang: Language = 'en'): Promise<HomeContent> {
  const sections = ['introduction', 'features', 'forms', 'videos', 'game-modules', 'footer'];
  
  const content = await Promise.all(
    sections.map(async section => {
      try {
        return [section, await getContentSection(lang, section)];
      } catch (error) {
        // Fallback to English if translation doesn't exist
        return [section, await getContentSection('en', section)];
      }
    })
  );

  return Object.fromEntries(content) as HomeContent;
}