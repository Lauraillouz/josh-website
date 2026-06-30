"use client";

import { siteData } from "@/lib/site-data";
import { useLocale } from "@/components/LocaleProvider";

export function Footer() {
  const { dict } = useLocale();

  return (
    <footer className="mt-auto border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-zinc-50">{dict.meta.siteName}</p>
          <p className="mt-2 text-sm text-zinc-400">{dict.meta.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-zinc-300">{dict.common.contact}</p>
          <ul className="mt-3 space-y-1 text-sm text-zinc-400">
            <li>
              <a href={`mailto:${siteData.contact.email}`} className="hover:text-accent">
                {siteData.contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteData.contact.phone}`} className="hover:text-accent">
                {siteData.contact.phone}
              </a>
            </li>
            <li>{dict.contact.address}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-zinc-300">{dict.common.links}</p>
          <ul className="mt-3 space-y-1 text-sm text-zinc-400">
            <li>
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {dict.common.instagram}
              </a>
            </li>
            <li>
              <a
                href={siteData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {dict.common.youtube}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 px-4 py-4 text-center text-xs text-zinc-500 sm:px-6">
        © {new Date().getFullYear()} {dict.meta.siteName}. {dict.common.rightsReserved}
      </div>
    </footer>
  );
}
