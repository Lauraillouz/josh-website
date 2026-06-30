import type { Metadata } from "next";
import { BookingEmbed } from "@/components/BookingEmbed";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: "Recording, mixing, mastering, lessons, production coaching, and equipment rental.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">Services</h1>
      <p className="mt-3 max-w-2xl text-muted">
        From tracking to final master — book studio time or browse gear for rent.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {siteConfig.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="mt-16">
        <BookingEmbed type="engineer" />
      </div>
    </div>
  );
}
