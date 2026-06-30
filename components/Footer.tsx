import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-zinc-50">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-zinc-400">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-zinc-300">Contact</p>
          <ul className="mt-3 space-y-1 text-sm text-zinc-400">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-accent"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-accent"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>{siteConfig.contact.address}</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-zinc-300">Links</p>
          <ul className="mt-3 space-y-1 text-sm text-zinc-400">
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 px-4 py-4 text-center text-xs text-zinc-500 sm:px-6">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
