import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — experience, gear, and credits.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold">About</h1>

      <div className="mt-8 max-w-2xl space-y-4 text-muted">
        {siteConfig.about.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Selected credits</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {siteConfig.about.credits.map((credit) => (
            <li
              key={credit}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted"
            >
              {credit}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Full portfolio and gear highlights — Phase 2.
        </p>
      </section>
    </div>
  );
}
