"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { stripLocaleFromPath } from "@/lib/i18n";

const navRoutes = [
  { route: "/", key: "home" as const },
  { route: "/services", key: "services" as const },
  { route: "/equipment", key: "equipment" as const },
  { route: "/rehearsal", key: "rehearsal" as const },
  { route: "/about", key: "about" as const },
  { route: "/contact", key: "contact" as const },
];

export function Header() {
  const { dict, path } = useLocale();
  const pathname = usePathname();
  const currentRoute = stripLocaleFromPath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href={path("/")} className="text-lg font-semibold tracking-tight text-zinc-50">
          {dict.meta.siteName}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navRoutes.map((item) => (
            <Link
              key={item.route}
              href={path(item.route)}
              className={`text-sm transition-colors hover:text-accent ${
                currentRoute === item.route ? "text-accent" : "text-zinc-400"
              }`}
            >
              {dict.nav[item.key]}
            </Link>
          ))}
          <Link
            href={path("/services")}
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-zinc-950 transition-opacity hover:opacity-90"
          >
            {dict.common.bookSession}
          </Link>
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="rounded-md p-2 text-zinc-400 hover:text-zinc-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={dict.common.toggleMenu}
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <LanguageSwitcher />
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-zinc-800 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navRoutes.map((item) => (
              <li key={item.route}>
                <Link
                  href={path(item.route)}
                  className={`block py-1 text-sm ${
                    currentRoute === item.route ? "text-accent" : "text-zinc-400"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={path("/services")}
                className="inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-zinc-950"
                onClick={() => setMenuOpen(false)}
              >
                {dict.common.bookSession}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
