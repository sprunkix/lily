import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = ["", "en", "en-US","pt", "fr", "ko", "zh", "zh-CN", "zh-TW", 'zh-HK', 'ja', "ar", "es", "ru"];
export const localeNames: any = {
  en: "🇺🇸 English",
  pt: "🇵🇹 Português",
  fr: "🇫🇷 Français",
  es: "🇪🇸 Español",
  ko: "🇰🇷 한국어",
  ja: "🇯🇵 日本語",
  ar: "🇸🇦 العربية",
  zh: "🇨🇳 中文",
  ru: "🇷🇺 Русский",
};
export const defaultLocale = "en";

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}
export function getLanguageFromPath(path: string) {
  const lang = path.split('/')[1];
  return locales.includes(lang) ? (lang) : 'en';
}

const dictionaries: any = {
  en: () => import("@/localization/en.json").then((module) => module.default),
  zh: () => import("@/localization/zh.json").then((module) => module.default),
  ja: () => import("@/localization/ja.json").then((module) => module.default),
  ar: () => import("@/localization/ar.json").then((module) => module.default),
  es: () => import("@/localization/es.json").then((module) => module.default),
  ru: () => import("@/localization/ru.json").then((module) => module.default),
  pt: () => import("@/localization/pt.json").then((module) => module.default),
  fr: () => import("@/localization/fr.json").then((module) => module.default),
  ko: () => import("@/localization/ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    locale = "zh";
  }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "en";
  }

  return dictionaries[locale]();
};