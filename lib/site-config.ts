export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  details: string[];
  duration?: string;
  href: string;
};

export type EquipmentItem = {
  id: string;
  name: string;
  category: string;
  note?: string;
};

export type BuildPhaseStatus = "done" | "in-progress" | "pending";

export type BuildPhase = {
  id: string;
  title: string;
  status: BuildPhaseStatus;
  summary: string;
  files?: string[];
  pages?: { href: string; label: string }[];
};

export const siteConfig = {
  name: "Josh Studio",
  tagline: "Recording · Mixing · Mastering · Lessons",
  description:
    "Professional sound engineering services — studio sessions, mixing, mastering, and rehearsal space in Paris.",

  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/equipment", label: "Equipment" },
    { href: "/rehearsal", label: "Rehearsal" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ] satisfies NavLink[],

  booking: {
    engineer: {
      label: "Book studio time with Josh",
      url: "https://calendar.google.com/calendar/appointments/schedules/PLACEHOLDER_ENGINEER",
    },
    rehearsal: {
      label: "Book rehearsal space",
      url: "https://calendar.google.com/calendar/appointments/schedules/PLACEHOLDER_REHEARSAL",
    },
  },

  contact: {
    email: "hello@joshstudio.com",
    phone: "+33 6 00 00 00 00",
    address: "Paris, France",
  },

  social: {
    instagram: "https://instagram.com/placeholder",
    youtube: "https://youtube.com/placeholder",
    soundcloud: "https://soundcloud.com/placeholder",
  },

  services: [
    {
      id: "recording",
      title: "Recording",
      description:
        "Capture your sound in a treated studio with pro microphones and preamps.",
      details: [
        "Full-band or solo sessions in a acoustically treated live room with quality mic selection and preamps.",
        "We set levels, capture multiple takes, and comp the best performances — you leave with organized multitracks ready for mix.",
        "Ideal for vocals, acoustic instruments, bands, and overdubs. Session length from 2 hours; full-day blocks available.",
      ],
      duration: "From 2 hours",
      href: "/services",
    },
    {
      id: "mixing",
      title: "Mixing",
      description:
        "Balance, depth, and clarity — mixes that translate on every system.",
      details: [
        "Stem or multitrack mixing with EQ, compression, spatial effects, and automation tailored to your genre.",
        "Hybrid analog/digital workflow for warmth and precision. Two revision rounds included; extra rounds on request.",
        "Delivered as WAV/AIFF; optional instrumental and acapella versions. Typical turnaround 3–7 days per song.",
      ],
      duration: "Per song",
      href: "/services",
    },
    {
      id: "mastering",
      title: "Mastering",
      description:
        "Final polish for streaming, vinyl, and broadcast-ready loudness.",
      details: [
        "Final EQ, dynamics, and loudness optimization for Spotify, Apple Music, CD, or vinyl pre-master.",
        "One cohesive sound across an EP or album with careful sequencing and spacing between tracks.",
        "Includes one revision round and format-specific exports (streaming, CD, vinyl pre-master).",
      ],
      duration: "Per track / EP",
      href: "/services",
    },
    {
      id: "lessons",
      title: "Lessons",
      description:
        "One-on-one coaching in recording, mixing, and production workflows.",
      details: [
        "Hands-on sessions in the studio or remote — mic placement, gain staging, DAW workflow, and mix decisions.",
        "Tailored to your level: beginners learning fundamentals, or experienced producers refining their sound.",
        "Bring your own projects for feedback, or work through exercises on studio gear. 1–2 hour sessions.",
      ],
      duration: "1–2 hours",
      href: "/services",
    },
    {
      id: "production",
      title: "Production Coaching",
      description:
        "Guidance on arrangement, sound design, and finishing your tracks.",
      details: [
        "Creative direction on structure, instrumentation, and sonic identity — from demo to release-ready.",
        "Feedback on works in progress: arrangement, sound design, vocal production, and how to finish strong.",
        "Flexible format — single deep-dive sessions or ongoing check-ins as your project develops.",
      ],
      duration: "Flexible",
      href: "/services",
    },
    {
      id: "equipment",
      title: "Equipment Rental",
      description:
        "Browse available mics, interfaces, and outboard — select what you need and send an enquiry.",
      details: [
        "Rent mics, interfaces, outboard compressors, monitors, and accessories by the day or week.",
        "Pick the gear you need from our inventory, add your contact details, and send an enquiry — we'll confirm availability and rates.",
        "Pickup at the studio or local delivery on request. Ideal for home sessions, live gigs, or supplementing your own setup.",
      ],
      href: "/equipment",
    },
  ] satisfies Service[],

  equipmentRental: {
    title: "Equipment rental",
    intro:
      "Select one or more items below, then send an email to check availability and rates.",
    items: [
      { id: "sm57", name: "Shure SM57", category: "Microphones" },
      { id: "sm7b", name: "Shure SM7B", category: "Microphones" },
      { id: "u87", name: "Neumann U87", category: "Microphones", note: "Studio favourite" },
      { id: "c414", name: "AKG C414", category: "Microphones" },
      { id: "beta52", name: "Shure Beta 52A", category: "Microphones", note: "Kick drum" },
      { id: "apollo-x8", name: "Universal Audio Apollo x8", category: "Interfaces" },
      { id: "focusrite-18i20", name: "Focusrite Scarlett 18i20", category: "Interfaces" },
      { id: "1176", name: "UA 1176LN", category: "Outboard", note: "Compressor" },
      { id: "la2a", name: "Teletronix LA-2A", category: "Outboard", note: "Optical compressor" },
      { id: "dbx-160", name: "DBX 160A", category: "Outboard" },
      { id: "reamp-box", name: "Radial Reamp box", category: "Outboard" },
      { id: "genelec-8030", name: "Genelec 8030 pair", category: "Monitors" },
      { id: "mic-stands", name: "Mic stands (×4)", category: "Accessories" },
      { id: "xlr-cables", name: "XLR cable pack", category: "Accessories" },
      { id: "di-boxes", name: "DI boxes (×2)", category: "Accessories" },
    ] satisfies EquipmentItem[],
  },

  rehearsal: {
    title: "Rehearsal Space",
    capacity: "Up to 6 musicians",
    equipment: "PA, drum kit, bass amp, guitar amp, mics",
    rate: "€25 / hour",
    rules: [
      "Respect neighbours — no excessive volume after 10pm",
      "Leave the room clean and cables coiled",
      "No smoking inside the building",
    ],
  },

  about: {
    bio: [
      "Josh is a sound engineer with over 10 years of experience across recording, mixing, and mastering for artists, labels, and independent producers.",
      "His studio combines analog warmth with a modern hybrid workflow — fast turnarounds without sacrificing detail.",
      "Whether you're tracking a full band or polishing a single, the goal is the same: make your music sound like you, at its best.",
    ],
    credits: ["Artist A", "Label B", "Project C", "Album D"],
  },

  legal: {
    cancellation:
      "Cancellations with 48h notice receive a full refund. Late cancellations may be charged 50%.",
    privacy:
      "We only use your contact details to respond to enquiries and manage bookings.",
  },
} as const;

export const buildPhases: BuildPhase[] = [
  {
    id: "phase-0",
    title: "Phase 0 — Gather inputs",
    status: "pending",
    summary: "Brand content, photos, Google Calendar setup from the engineer.",
  },
  {
    id: "phase-1",
    title: "Phase 1 — Project foundation",
    status: "done",
    summary: "Scaffold, layout, config-driven content, placeholder pages.",
    files: [
      "lib/site-config.ts",
      "components/Header.tsx",
      "components/Footer.tsx",
      "components/Hero.tsx",
      "components/ServiceCard.tsx",
      "components/BookingEmbed.tsx",
      "components/ContactForm.tsx",
      "app/layout.tsx",
      "app/globals.css",
      "app/page.tsx",
      "app/services/page.tsx",
      "app/rehearsal/page.tsx",
      "app/about/page.tsx",
      "app/contact/page.tsx",
    ],
    pages: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/rehearsal", label: "Rehearsal" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    id: "phase-2",
    title: "Phase 2 — Core pages",
    status: "in-progress",
    summary:
      "Full page content, portfolio teaser, service sections, about bio.",
  },
  {
    id: "phase-3",
    title: "Phase 3 — Booking integration",
    status: "pending",
    summary: "Real Google Calendar embeds, contact form backend.",
  },
  {
    id: "phase-4",
    title: "Phase 4 — Polish & deploy",
    status: "pending",
    summary: "SEO, images, legal pages, analytics, Vercel deploy.",
  },
];
