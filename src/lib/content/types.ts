import type { Language } from '../i18n';

export interface ContentLoader<T> {
  getContent: (lang: Language) => Promise<T>;
}

export interface MarkdownContent {
  frontmatter: Record<string, any>;
  content: string;
}