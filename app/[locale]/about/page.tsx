import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isValidLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};

  const dict = getDictionary(localeParam);
  return {
    title: dict.about.title,
    description: dict.about.metaDescription,
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const dict = getDictionary(localeParam);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">{dict.about.title}</h1>

      <div className="mt-8 max-w-2xl space-y-4 text-muted">
        {dict.about.bio.map((paragraph, index) => (
          <p key={`bio-${index}`}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">{dict.about.creditsTitle}</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {dict.about.credits.map((credit) => (
            <li
              key={credit}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted"
            >
              {credit}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">{dict.about.creditsNote}</p>
      </section>
    </div>
  );
}
