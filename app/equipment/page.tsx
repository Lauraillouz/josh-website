import type { Metadata } from "next";
import { EquipmentRentalPicker } from "@/components/EquipmentRentalPicker";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Equipment Rental",
  description:
    "Browse studio gear available for rent — select items and send an enquiry by email.",
};

export default function EquipmentPage() {
  const { equipmentRental } = siteConfig;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">{equipmentRental.title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{equipmentRental.intro}</p>

      <div className="mt-10">
        <EquipmentRentalPicker hideHeader />
      </div>
    </div>
  );
}
