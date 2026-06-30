import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingEmbed } from "@/components/BookingEmbed";
import { ContactForm } from "@/components/ContactForm";
import { getDictionary, isValidLocale, localePath, type Locale } from "@/lib/i18n";
import { siteData } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};

  const dict = getDictionary(localeParam);
  return {
    title: dict.contact.title,
    description: dict.contact.metaDescription,
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">{dict.contact.title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{dict.contact.description}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">{dict.contact.getInTouch}</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a
                href={`mailto:${siteData.contact.email}`}
                className="text-accent hover:text-accent-hover"
              >
                {siteData.contact.email}
              </a>
            </li>
            <li>{siteData.contact.phone}</li>
            <li>{dict.contact.address}</li>
          </ul>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold">{dict.contact.bookStudioTitle}</h2>
            <p className="mt-2 text-sm text-muted">{dict.contact.bookStudioText}</p>
            <Link
              href={localePath(locale, "/services")}
              className="mt-3 inline-block text-sm text-accent hover:text-accent-hover"
            >
              {dict.common.goToServices}
            </Link>
          </div>

          <BookingEmbed type="engineer" />
          <BookingEmbed type="rehearsal" />
        </div>
      </div>
    </div>
  );
}
