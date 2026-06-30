"use client";

import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/lib/site-config";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      id={service.id}
      className="flex flex-col rounded-xl border border-border bg-surface-raised p-6 transition-colors hover:border-accent/40"
    >
      <h3 className="text-lg font-semibold">{service.title}</h3>
      {service.duration && (
        <p className="mt-1 text-xs uppercase tracking-wide text-accent">
          {service.duration}
        </p>
      )}
      <p className="mt-3 flex-1 text-sm text-muted">{service.description}</p>

      {expanded && (
        <div className="mt-4 space-y-3 border-t border-border pt-4">
          {service.details.map((paragraph, index) => (
            <p
              key={`${service.id}-detail-${index}`}
              className="text-sm leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
          {service.id === "equipment" && (
            <Link
              href={service.href}
              className="inline-block text-sm font-medium text-accent hover:text-accent-hover"
            >
              Browse gear & send enquiry →
            </Link>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
        className="mt-6 self-start text-left text-sm font-medium text-accent hover:text-accent-hover"
      >
        {expanded ? "Show less ↑" : "Learn more →"}
      </button>
    </article>
  );
}
