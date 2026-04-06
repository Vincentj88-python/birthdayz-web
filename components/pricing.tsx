const plans = [
  {
    name: "Free",
    price: "R0",
    period: "forever",
    description: "Get started and remember the people who matter most.",
    features: [
      "Up to 10 friends",
      "Morning-of reminders",
      "Manual birthday wishes",
      "Contact import",
    ],
    missing: [
      "AI-powered messages",
      "Advance reminders (7, 3, 1 day)",
      "Afrikaans AI messages",
      "Wish history & streaks",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Premium",
    price: "R29.99",
    period: "/month",
    description: "Never miss a birthday. Never send a boring message.",
    features: [
      "Unlimited friends",
      "AI birthday messages in English & Afrikaans",
      "Reminders: 7, 3, 1 day before + morning of",
      "Send via WhatsApp or SMS",
      "Wish history & streaks",
      "Favourite friends with custom reminders",
      "Birthday stats & year in review",
    ],
    missing: [],
    cta: "Join Waitlist",
    highlight: true,
  },
];

export function Pricing() {
  return (
    <section className="py-24 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text-primary">
            Simple, Honest Pricing
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            Start free. Upgrade when you're ready. No ads, ever.
          </p>
          <p className="mt-2 text-accent-gold font-semibold text-sm">
            Every new user gets a 7-day free Premium trial
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-text-primary text-white border-2 border-text-primary relative"
                  : "bg-surface border border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-gold text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3
                className={`font-[family-name:var(--font-heading)] text-2xl font-bold ${
                  plan.highlight ? "text-white" : "text-text-primary"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlight ? "text-white" : "text-text-primary"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlight ? "text-white/60" : "text-text-muted"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mt-3 text-sm ${
                  plan.highlight ? "text-white/70" : "text-text-secondary"
                }`}
              >
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="text-whatsapp mt-0.5 shrink-0">✓</span>
                    <span className={plan.highlight ? "text-white/90" : "text-text-primary"}>
                      {f}
                    </span>
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="text-text-muted mt-0.5 shrink-0">—</span>
                    <span className="text-text-muted line-through">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`mt-8 block text-center py-3.5 rounded-full font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-accent-red text-white hover:bg-accent-red-hover"
                    : "bg-text-primary/5 text-text-primary hover:bg-text-primary/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-text-muted text-sm">
          Annual plan coming at launch — R249.99/year (save 30%). Prices may vary by region.
        </p>
      </div>
    </section>
  );
}
