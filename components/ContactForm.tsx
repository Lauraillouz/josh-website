"use client";

import { useLocale } from "@/components/LocaleProvider";

export function ContactForm() {
  const { dict } = useLocale();
  const options = dict.contact.serviceOptions;

  return (
    <form className="space-y-4" action="#" method="post">
      <p className="text-sm text-muted">{dict.contact.formNotice}</p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          {dict.contact.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder={dict.contact.namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          {dict.equipment.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder={dict.equipment.emailPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium">
          {dict.contact.serviceInterest}
        </label>
        <select
          id="service"
          name="service"
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
        >
          <option>{options.recording}</option>
          <option>{options.mixing}</option>
          <option>{options.mastering}</option>
          <option>{options.lessons}</option>
          <option>{options.rehearsal}</option>
          <option>{options.equipment}</option>
          <option>{options.other}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          {dict.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder={dict.contact.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
      >
        {dict.contact.sendMessage}
      </button>
    </form>
  );
}
