import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { getServices } from "@/lib/content";
import { getDictionary, isValidLocale, localePath, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const services = getServices(locale, dict);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">{dict.home.servicesTitle}</h2>
            <p className="mt-2 text-muted">{dict.home.servicesSubtitle}</p>
          </div>
          <Link
            href={localePath(locale, "/services")}
            className="text-sm text-accent hover:text-accent-hover"
          >
            {dict.common.viewAllServices}
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold">{dict.home.whyTitle}</h2>
          <p className="mt-4 max-w-2xl text-muted">{dict.home.whyText}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold">{dict.home.portfolioTitle}</h2>
        <p className="mt-2 text-muted">{dict.home.portfolioText}</p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {dict.about.credits.map((credit) => (
            <li
              key={credit}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted"
            >
              {credit}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">{dict.home.ctaTitle}</h2>
            <p className="mt-2 text-muted">{dict.home.ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={localePath(locale, "/services")}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background hover:bg-accent-hover"
            >
              {dict.common.bookSession}
            </Link>
            <Link
              href={localePath(locale, "/equipment")}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-accent"
            >
              {dict.common.rentEquipment}
            </Link>
            <Link
              href={localePath(locale, "/rehearsal")}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-accent"
            >
              {dict.common.bookRehearsal}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
