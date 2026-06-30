import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EquipmentRentalPicker } from "@/components/EquipmentRentalPicker";
import { getDictionary, isValidLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};

  const dict = getDictionary(localeParam);
  return {
    title: dict.equipment.title,
    description: dict.equipment.metaDescription,
  };
}

export default async function EquipmentPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const dict = getDictionary(localeParam);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">{dict.equipment.title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{dict.equipment.intro}</p>

      <div className="mt-10">
        <EquipmentRentalPicker hideHeader />
      </div>
    </div>
  );
}
