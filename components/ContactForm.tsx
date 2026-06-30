export function ContactForm() {
  return (
    <form className="space-y-4" action="#" method="post">
      <p className="text-sm text-muted">
        Form backend will be wired in Phase 3. Fields are placeholders for now.
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium">
          Service interest
        </label>
        <select
          id="service"
          name="service"
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
        >
          <option>Recording</option>
          <option>Mixing</option>
          <option>Mastering</option>
          <option>Lessons</option>
          <option>Rehearsal space</option>
          <option>Equipment rental</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          placeholder="Tell us about your project…"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
      >
        Send message
      </button>
    </form>
  );
}
