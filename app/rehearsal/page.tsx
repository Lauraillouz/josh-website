import type { Metadata } from "next";
import { BookingEmbed } from "@/components/BookingEmbed";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Rehearsal Space",
  description: "Book the rehearsal room — PA, amps, and drums included.",
};

export default function RehearsalPage() {
  const { rehearsal } = siteConfig;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">{rehearsal.title}</h1>
      <p className="mt-3 max-w-2xl text-muted">
        A treated rehearsal room for bands and solo artists. Photos coming in
        Phase 2.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface-raised p-6">
          <h2 className="text-lg font-semibold">Specs</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <span className="text-foreground">Capacity:</span> {rehearsal.capacity}
            </li>
            <li>
              <span className="text-foreground">Equipment:</span>{" "}
              {rehearsal.equipment}
            </li>
            <li>
              <span className="text-foreground">Rate:</span> {rehearsal.rate}
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-surface-raised p-6">
          <h2 className="text-lg font-semibold">House rules</h2>
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
