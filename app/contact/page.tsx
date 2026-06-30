import type { Metadata } from "next";
import Link from "next/link";
import { BookingEmbed } from "@/components/BookingEmbed";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch or book studio time and rehearsal space.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Questions, quotes, or custom projects — send a message or book directly.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-accent hover:text-accent-hover"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.address}</li>
          </ul>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold">Book studio time</h2>
            <p className="mt-2 text-sm text-muted">
              Recording, mixing, mastering, lessons.
            </p>
            <Link
              href="/services"
              className="mt-3 inline-block text-sm text-accent hover:text-accent-hover"
            >
              Go to services →
            </Link>
          </div>

          <BookingEmbed type="engineer" />
          <BookingEmbed type="rehearsal" />
        </div>
      </div>
    </div>
  );
}
