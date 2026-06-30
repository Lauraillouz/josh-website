import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingEmbed } from "@/components/BookingEmbed";
import { ServiceCard } from "@/components/ServiceCard";
import { getServices } from "@/lib/content";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};

  const dict = getDictionary(localeParam);
  return {
    title: dict.services.title,
    description: dict.services.metaDescription,
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const services = getServices(locale, dict);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">{dict.services.title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{dict.services.description}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-16">
        <BookingEmbed type="engineer" />
      </div>
    </div>
  );
}
