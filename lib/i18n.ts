import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const dictionaries = { en, fr } as const;

export type Dictionary = typeof en;

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const match = pathname.match(/^\/(en|fr)(\/.*)?$/);
  if (!match) return pathname;
  return match[2] || "/";
}
