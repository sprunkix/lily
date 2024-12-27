import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import type { Language } from '../i18n';
import type { MarkdownContent } from './types';

export async function loadMarkdownContent(directory: string, lang: Language, filename: string): Promise<MarkdownContent> {
  const fullPath = path.join(process.cwd(), 'src/data', directory, lang, `${filename}.md`);
  
  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content };
  } catch (error) {
    // Fallback to English if translation doesn't exist
    if (lang !== 'en') {
      return loadMarkdownContent(directory, 'en', filename);
    }
    throw error;
  }
}