export type Language = 'en' | 'zh' | 'es';

export const SUPPORTED_LANGUAGES: Language[] = ['en'];

export function getLanguageFromPath(path: string): Language {
  const lang = path.split('/')[1];
  return SUPPORTED_LANGUAGES.includes(lang as Language) ? (lang as Language) : 'en';
}