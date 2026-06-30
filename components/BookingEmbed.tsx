"use client";

import { siteData } from "@/lib/site-data";
import { useLocale } from "@/components/LocaleProvider";

type BookingEmbedProps = {
  type: "engineer" | "rehearsal";
};

export function BookingEmbed({ type }: BookingEmbedProps) {
  const { dict } = useLocale();
  const booking = siteData.booking[type];
  const label =
    type === "engineer" ? dict.booking.engineerLabel : dict.booking.rehearsalLabel;
  const isPlaceholder = booking.url.includes("PLACEHOLDER");

  return (
    <div className="rounded-xl border border-border bg-surface-raised p-6">
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="mt-2 text-sm text-muted">{dict.booking.confirmation}</p>

      {isPlaceholder ? (
        <div className="mt-6 flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-surface p-8 text-center">
          <p className="text-sm text-muted">{dict.booking.placeholder}</p>
          <a
            href={booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-full bg-accent px-5 py-2 text-sm font-medium text-background hover:bg-accent-hover"
          >
            {dict.booking.openBooking}
          </a>
        </div>
      ) : (
        <iframe
          src={booking.url}
          title={label}
          className="mt-6 h-[600px] w-full rounded-lg border border-border"
        />
      )}
    </div>
  );
}
