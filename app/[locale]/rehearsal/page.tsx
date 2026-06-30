import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookingEmbed } from "@/components/BookingEmbed";
import { getDictionary, isValidLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};

  const dict = getDictionary(localeParam);
  return {
    title: dict.rehearsal.title,
    description: dict.rehearsal.metaDescription,
  };
}

export default async function RehearsalPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const dict = getDictionary(localeParam);
  const { rehearsal } = dict;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">{rehearsal.title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{rehearsal.description}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface-raised p-6">
          <h2 className="text-lg font-semibold">{rehearsal.specs}</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <span className="text-foreground">{rehearsal.capacity}</span>{" "}
              {rehearsal.capacityValue}
            </li>
            <li>
              <span className="text-foreground">{rehearsal.equipment}</span>{" "}
              {rehearsal.equipmentValue}
            </li>
            <li>
              <span className="text-foreground">{rehearsal.rate}</span>{" "}
              {rehearsal.rateValue}
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-surface-raised p-6">
          <h2 className="text-lg font-semibold">{rehearsal.houseRules}</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
            {rehearsal.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <BookingEmbed type="rehearsal" />
      </div>
    </div>
  );
}
