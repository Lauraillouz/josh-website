"use client";

import { useMemo, useState } from "react";
import type { EquipmentItem } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";
import { buildEquipmentEnquiryMailto } from "@/lib/equipment-mailto";

function groupByCategory(items: EquipmentItem[]) {
  const groups = new Map<string, EquipmentItem[]>();

  for (const item of items) {
    const list = groups.get(item.category) ?? [];
    list.push(item);
    groups.set(item.category, list);
  }

  return [...groups.entries()];
}

function canSendEnquiry(
  selectedCount: number,
  name: string,
  email: string,
  phone: string,
): boolean {
  return (
    selectedCount > 0 &&
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    phone.trim().length > 0
  );
}

export function EquipmentRentalPicker({ hideHeader = false }: { hideHeader?: boolean }) {
  const { equipmentRental } = siteConfig;
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const grouped = useMemo(
    () => groupByCategory([...equipmentRental.items]),
    [equipmentRental.items],
  );

  const selectedNames = equipmentRental.items
    .filter((item) => selected.has(item.id))
    .map((item) => item.name);

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function clearAll() {
    setSelected(new Set());
  }

  const readyToSend = canSendEnquiry(selected.size, name, email, phone);

  const mailtoHref = readyToSend
    ? buildEquipmentEnquiryMailto(
        { name, email, phone },
        selectedNames,
        notes,
      )
    : undefined;

  return (
    <div className="rounded-xl border border-border bg-surface-raised p-6 sm:p-8">
      {!hideHeader && (
        <>
          <h2 className="text-xl font-semibold">{equipmentRental.title}</h2>
          <p className="mt-2 text-sm text-muted">{equipmentRental.intro}</p>
        </>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={clearAll}
          className="text-sm text-muted hover:text-foreground"
        >
          Clear selection
        </button>
        {selected.size > 0 && (
          <span className="text-sm text-muted">
            {selected.size} item{selected.size === 1 ? "" : "s"} selected
          </span>
        )}
      </div>

      <div className="mt-6 space-y-8">
        {grouped.map(([category, items]) => (
          <div key={category}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-accent">
              {category}
            </h3>
            <ul className="mt-3 space-y-2">
              {items.map((item) => {
                const checked = selected.has(item.id);
                return (
                  <li key={item.id}>
                    <label
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 transition-colors ${
                        checked
                          ? "border-accent/50 bg-accent/5"
                          : "border-border hover:border-accent/30"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(item.id)}
                        className="mt-1 h-4 w-4 rounded border-border accent-[var(--accent)]"
                      />
                      <span className="flex-1">
                        <span className="font-medium">{item.name}</span>
                        {item.note && (
                          <span className="mt-0.5 block text-sm text-muted">
                            {item.note}
                          </span>
                        )}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4 border-t border-border pt-8">
        <h3 className="text-sm font-medium">Your details</h3>
        <p className="text-sm text-muted">
          Required to send your enquiry — included in the email so we can reply.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="equipment-name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="equipment-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="equipment-email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="equipment-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="equipment-phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              id="equipment-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
              placeholder="+33 6 00 00 00 00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="equipment-notes" className="block text-sm font-medium">
            Additional details (optional)
          </label>
          <textarea
            id="equipment-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
            placeholder="Dates, project type, pickup vs delivery…"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        {mailtoHref ? (
          <a
            href={mailtoHref}
            className="inline-flex justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Send enquiry by email
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex justify-center rounded-full bg-accent/40 px-6 py-2.5 text-sm font-medium text-background/70"
          >
            {selected.size === 0
              ? "Select equipment to enquire"
              : "Fill in your details to send"}
          </button>
        )}
        <p className="text-sm text-muted">
          Opens your email app with your contact details and a bullet list of
          selected gear — sent to {siteConfig.contact.email}.
        </p>
      </div>
    </div>
  );
}
