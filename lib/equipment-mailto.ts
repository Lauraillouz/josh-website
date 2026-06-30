import { siteConfig } from "@/lib/site-config";

export type EquipmentEnquiryContact = {
  name: string;
  email: string;
  phone: string;
};

export function buildEquipmentEnquiryMailto(
  contact: EquipmentEnquiryContact,
  selectedNames: string[],
  notes: string,
): string {
  const trimmedName = contact.name.trim();
  const trimmedEmail = contact.email.trim();
  const trimmedPhone = contact.phone.trim();
  const lines = [
    "Hello,",
    "",
    "I would like to enquire about renting the following equipment:",
    "",
    ...selectedNames.map((name) => `- ${name}`),
    "",
    "My details:",
    `Name: ${trimmedName}`,
    `Email: ${trimmedEmail}`,
    `Phone: ${trimmedPhone}`,
    "",
    "Dates needed:",
    "",
  ];

  if (notes.trim()) {
    lines.push("Additional details:", notes.trim(), "");
  }

  lines.push(`Thank you,`, trimmedName);

  const params = new URLSearchParams({
    subject: `Equipment rental enquiry — ${trimmedName}`,
    body: lines.join("\n"),
  });

  return `mailto:${siteConfig.contact.email}?${params.toString()}`;
}
