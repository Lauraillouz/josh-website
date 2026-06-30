"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, stripLocaleFromPath } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

const localeLabels = {
  en: "localeEn",
  fr: "localeFr",
} as const;

export function LanguageSwitcher() {
  const { locale, dict } = useLocale();
  const pathname = usePathname();
  const route = stripLocaleFromPath(pathname);

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-zinc-700 p-0.5 text-xs font-medium"
      role="group"
      aria-label={dict.common.language}
    >
      {locales.map((code) => {
        const active = code === locale;
        const href = `/${code}${route === "/" ? "" : route}`;
        const label = dict.common[localeLabels[code]];

        return (
          <Link
            key={code}
            href={href}
            title={label}
            className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
              active
                ? "bg-accent text-zinc-950"
                : "text-zinc-400 hover:text-zinc-50"
            }`}
            aria-current={active ? "true" : undefined}
            aria-label={label}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
