import type { Dictionary } from "@/lib/i18n";
import { siteData } from "@/lib/site-data";

export type EquipmentEnquiryContact = {
  name: string;
  email: string;
  phone: string;
};

export function buildEquipmentEnquiryMailto(
  contact: EquipmentEnquiryContact,
  selectedNames: string[],
  notes: string,
  emailCopy: Dictionary["equipment"]["mailto"],
): string {
  const trimmedName = contact.name.trim();
  const trimmedEmail = contact.email.trim();
  const trimmedPhone = contact.phone.trim();

  const lines = [
    emailCopy.greeting,
    "",
    emailCopy.intro,
    "",
    ...selectedNames.map((name) => `- ${name}`),
    "",
    emailCopy.myDetails,
    `${emailCopy.nameLabel} ${trimmedName}`,
    `${emailCopy.emailLabel} ${trimmedEmail}`,
    `${emailCopy.phoneLabel} ${trimmedPhone}`,
    "",
    emailCopy.datesNeeded,
    "",
  ];

  if (notes.trim()) {
    lines.push(emailCopy.additionalDetails, notes.trim(), "");
  }

  lines.push(emailCopy.thankYou, trimmedName);

  const params = new URLSearchParams({
    subject: emailCopy.subject.replace("{name}", trimmedName),
    body: lines.join("\n"),
  });

  return `mailto:${siteData.contact.email}?${params.toString()}`;
}
