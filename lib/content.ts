import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { siteData, type ServiceId } from "@/lib/site-data";

export type ServiceContent = {
  id: ServiceId;
  title: string;
  description: string;
  details: string[];
  duration?: string;
  href: string;
};

export type EquipmentItemContent = {
  id: string;
  name: string;
  category: string;
  note?: string;
};

export function getServices(locale: Locale, dict: Dictionary): ServiceContent[] {
  return siteData.serviceIds.map((id) => {
    const service = dict.services[id];
    const href =
      id === "equipment" ? localePath(locale, "/equipment") : localePath(locale, "/services");

    return {
      id,
      title: service.title,
      description: service.description,
      details: [...service.details],
      duration: "duration" in service ? service.duration : undefined,
      href,
    };
  });
}

export function getEquipmentItems(dict: Dictionary): EquipmentItemContent[] {
  return siteData.equipmentCatalog.map((item) => {
    const category =
      dict.equipment.categories[
        item.categoryKey as keyof typeof dict.equipment.categories
      ];
    const noteKey = "noteKey" in item ? item.noteKey : undefined;
    const note = noteKey
      ? dict.equipment.itemNotes[noteKey as keyof typeof dict.equipment.itemNotes]
      : undefined;
    const name =
      "nameKey" in item
        ? dict.equipment.itemNames[item.nameKey as keyof typeof dict.equipment.itemNames]
        : item.name;

    return {
      id: item.id,
      name,
      category,
      note,
    };
  });
}

export function formatItemsSelected(dict: Dictionary, count: number): string {
  const template =
    count === 1 ? dict.equipment.itemsSelected : dict.equipment.itemsSelectedPlural;
  return template.replace("{count}", String(count));
}

export function formatSendHint(dict: Dictionary, email: string): string {
  return dict.equipment.sendHint.replace("{email}", email);
}
