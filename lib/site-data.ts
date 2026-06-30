/** Non-translatable structure: URLs, contact details, gear catalog IDs. */

export const siteData = {
  contact: {
    email: "hello@joshstudio.com",
    phone: "+33 6 00 00 00 00",
  },

  social: {
    instagram: "https://instagram.com/placeholder",
    youtube: "https://youtube.com/placeholder",
    soundcloud: "https://soundcloud.com/placeholder",
  },

  booking: {
    engineer: {
      url: "https://calendar.google.com/calendar/appointments/schedules/PLACEHOLDER_ENGINEER",
    },
    rehearsal: {
      url: "https://calendar.google.com/calendar/appointments/schedules/PLACEHOLDER_REHEARSAL",
    },
  },

  serviceIds: [
    "recording",
    "mixing",
    "mastering",
    "lessons",
    "production",
    "equipment",
  ] as const,

  equipmentCatalog: [
    { id: "sm57", name: "Shure SM57", categoryKey: "microphones" },
    { id: "sm7b", name: "Shure SM7B", categoryKey: "microphones" },
    { id: "u87", name: "Neumann U87", categoryKey: "microphones", noteKey: "u87" },
    { id: "c414", name: "AKG C414", categoryKey: "microphones" },
    { id: "beta52", name: "Shure Beta 52A", categoryKey: "microphones", noteKey: "beta52" },
    { id: "apollo-x8", name: "Universal Audio Apollo x8", categoryKey: "interfaces" },
    { id: "focusrite-18i20", name: "Focusrite Scarlett 18i20", categoryKey: "interfaces" },
    { id: "1176", name: "UA 1176LN", categoryKey: "outboard", noteKey: "1176" },
    { id: "la2a", name: "Teletronix LA-2A", categoryKey: "outboard", noteKey: "la2a" },
    { id: "dbx-160", name: "DBX 160A", categoryKey: "outboard" },
    { id: "reamp-box", name: "Radial Reamp box", categoryKey: "outboard" },
    { id: "genelec-8030", nameKey: "genelec-8030", categoryKey: "monitors" },
    { id: "mic-stands", nameKey: "mic-stands", categoryKey: "accessories" },
    { id: "xlr-cables", nameKey: "xlr-cables", categoryKey: "accessories" },
    { id: "di-boxes", nameKey: "di-boxes", categoryKey: "accessories" },
  ],
} as const;

export type ServiceId = (typeof siteData.serviceIds)[number];
