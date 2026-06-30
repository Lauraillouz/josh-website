import { siteConfig } from "@/lib/site-config";

type BookingEmbedProps = {
  type: "engineer" | "rehearsal";
};

export function BookingEmbed({ type }: BookingEmbedProps) {
  const booking = siteConfig.booking[type];
  const isPlaceholder = booking.url.includes("PLACEHOLDER");

  return (
    <div className="rounded-xl border border-border bg-surface-raised p-6">
      <h3 className="text-lg font-semibold">{booking.label}</h3>
      <p className="mt-2 text-sm text-muted">
        You&apos;ll receive a confirmation by email after booking.
      </p>

      {isPlaceholder ? (
        <div className="mt-6 flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-dashed border-border bg-surface p-8 text-center">
          <p className="text-sm text-muted">
            Google Calendar embed will go here (Phase 3).
          </p>
          <a
            href={booking.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-full bg-accent px-5 py-2 text-sm font-medium text-background hover:bg-accent-hover"
          >
            Open booking page
          </a>
        </div>
      ) : (
        <iframe
          src={booking.url}
          title={booking.label}
          className="mt-6 h-[600px] w-full rounded-lg border border-border"
        />
      )}
    </div>
  );
}
