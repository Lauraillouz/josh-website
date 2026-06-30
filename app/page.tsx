import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Services</h2>
            <p className="mt-2 text-muted">
              Studio sessions, post-production, coaching, and gear rental.
            </p>
          </div>
          <Link href="/services" className="text-sm text-accent hover:text-accent-hover">
            View all services →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold">Why work with me</h2>
          <p className="mt-4 max-w-2xl text-muted">
            A hybrid analog/digital workflow, fast turnarounds, and a focus on
            making your music translate — in the studio and on every playback
            system.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold">Portfolio teaser</h2>
        <p className="mt-2 text-muted">
          Credits and audio samples coming in Phase 2.
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {siteConfig.about.credits.map((credit) => (
            <li
              key={credit}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted"
            >
              {credit}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-16 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Ready to book?</h2>
            <p className="mt-2 text-muted">
              Studio sessions, rehearsal space, or gear rental — pick your flow.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background hover:bg-accent-hover"
            >
              Book a session
            </Link>
            <Link
              href="/equipment"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-accent"
            >
              Rent equipment
            </Link>
            <Link
              href="/rehearsal"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-accent"
            >
              Book rehearsal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
