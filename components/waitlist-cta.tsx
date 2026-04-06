import { WaitlistForm } from "./waitlist-form";

export function WaitlistCta() {
  return (
    <section id="waitlist" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text-primary">
          Be the First to Know
        </h2>
        <p className="mt-4 text-text-secondary text-lg">
          Join the waitlist and we'll let you know the moment Birthdayz is ready
          for download.
        </p>
        <div className="mt-8 flex justify-center">
          <WaitlistForm id="waitlist-form" />
        </div>
        <p className="mt-4 text-sm text-text-muted">
          No spam. Just one email when we launch.
        </p>
      </div>
    </section>
  );
}
