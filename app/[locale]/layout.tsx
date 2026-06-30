import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleProvider } from "@/components/LocaleProvider";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { getDictionary, isValidLocale, locales, type Locale } from "@/lib/i18n";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const dict = getDictionary(locale);
  return {
    title: {
      default: dict.meta.siteName,
      template: `%s · ${dict.meta.siteName}`,
    },
    description: dict.meta.siteDescription,
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dict={dict}>
      <SetHtmlLang locale={locale} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
