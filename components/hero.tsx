import { WaitlistForm } from "./waitlist-form";

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-accent-gold/15 text-accent-gold-hover font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
          <span>🇿🇦</span>
          <span>Built in South Africa, for South Africa</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight">
          Never Forget a{" "}
          <span className="text-accent-red">Birthday</span> Again
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-xl mx-auto leading-relaxed">
          Birthdayz reminds you of every birthday and helps you send heartfelt,
          AI-powered wishes via WhatsApp — in English or Afrikaans.
        </p>
        <div className="mt-10 flex justify-center">
          <WaitlistForm />
        </div>
        <p className="mt-4 text-sm text-text-muted">
          Be the first to know when we launch. No spam, ever.
        </p>

        {/* Phone mockup placeholder */}
        <div className="mt-16 max-w-sm mx-auto">
          <div className="bg-surface border border-border rounded-[2rem] p-6 shadow-xl shadow-accent-gold/5">
            <div className="bg-background rounded-2xl p-5 space-y-4">
              <p className="text-xs text-text-muted font-semibold uppercase tracking-wider">Today</p>
              <div className="flex items-center gap-3 bg-accent-red/10 rounded-xl p-3">
                <span className="text-3xl">🎂</span>
                <div className="text-left">
                  <p className="font-semibold text-text-primary text-sm">Margaret turns 62 today!</p>
                  <p className="text-xs text-accent-red font-medium">Tap to send a wish</p>
                </div>
              </div>
              <p className="text-xs text-text-muted font-semibold uppercase tracking-wider">This Week</p>
              <div className="flex items-center gap-3 rounded-xl p-3 border border-border">
                <span className="text-2xl">🎈</span>
                <div className="text-left">
                  <p className="font-semibold text-text-primary text-sm">Johan — turns 45 in 3 days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl p-3 border border-border">
                <span className="text-2xl">🎁</span>
                <div className="text-left">
                  <p className="font-semibold text-text-primary text-sm">Tannie Rina — turns 70 in 5 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
