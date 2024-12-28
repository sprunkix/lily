// @auto-i18n-check. Please do not delete the line.

export const localeItems = [
{code: 'ar', name: 'العربية'},
{code: 'de', name: 'Deutsch'},
{code: 'en', name: 'English'},
{code: 'es', name: 'Español'},
{code: 'fr', name: 'Français'},
{code: 'ja', name: '日本語'},
{code: 'ko', name: '한국어'},
{code: 'zh', name: '中文简体'},
//{code: 'hi', name: 'हिन्दी'},
//{code: 'id', name: 'Bahasa Indonesia'},
//{code: 'it', name: 'Italiano'},
//{code: 'ms', name: 'Bahasa Melayu'},
//{code: 'pt', name: 'Português'},
//{code: 'ru', name: 'Русский'},
//{code: 'th', name: 'ไทย'},
//{code: 'vi', name: 'Tiếng Việt'},
//{code: 'zh-t', name: '中文繁體'},
];

export const locales = localeItems.map((item) => item.code);
export const defaultLocale = 'en';
