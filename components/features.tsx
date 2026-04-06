const features = [
  {
    icon: "📱",
    title: "Import from Contacts",
    description:
      "Automatically find friends who already have birthdays saved on your phone. No typing needed — just tap and go.",
  },
  {
    icon: "🤖",
    title: "AI Birthday Wishes",
    description:
      "Get 3 heartfelt, personalised message options — warm & traditional, fun & celebratory, or short & sweet. Pick one, edit if you like, and send.",
  },
  {
    icon: "💬",
    title: "Send via WhatsApp",
    description:
      "One tap opens WhatsApp with your message ready to go. No copying, no pasting. Works with SMS too.",
  },
  {
    icon: "🔔",
    title: "Never Miss a Date",
    description:
      "Get reminded 7 days, 3 days, and 1 day before — plus the morning of. Choose the timing that works for you.",
  },
  {
    icon: "🇿🇦",
    title: "English & Afrikaans",
    description:
      "AI messages that sound natural in your language — not awkward translations. Zulu and Xhosa coming soon.",
  },
  {
    icon: "🔗",
    title: "Invite Friends Easily",
    description:
      "Send a link via WhatsApp — friends add their birthday in 10 seconds in their browser. No app needed for them.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text-primary text-center">
          Everything You Need to Be a Great Friend
        </h2>
        <p className="mt-4 text-text-secondary text-center text-lg max-w-2xl mx-auto">
          Simple, warm, and built for people who care about the people in their lives.
        </p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-surface border border-border rounded-2xl p-7 hover:shadow-lg hover:shadow-accent-gold/5 transition-all hover:-translate-y-0.5"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
