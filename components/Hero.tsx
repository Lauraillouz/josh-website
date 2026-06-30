"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

export function Hero() {
  const { dict, path } = useLocale();

  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {dict.hero.eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {dict.meta.siteName}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">{dict.meta.tagline}</p>
        <p className="mt-6 max-w-2xl text-muted">{dict.meta.siteDescription}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={path("/services")}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            {dict.common.bookSession}
          </Link>
          <Link
            href={path("/equipment")}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {dict.common.rentEquipment}
          </Link>
          <Link
            href={path("/rehearsal")}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {dict.common.bookRehearsalSpace}
          </Link>
        </div>
      </div>
    </section>
  );
}
