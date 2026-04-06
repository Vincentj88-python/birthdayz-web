const steps = [
  {
    number: "1",
    icon: "👥",
    title: "Add Your Friends",
    description:
      "Import birthdays from your contacts or invite friends to share theirs with a simple WhatsApp link. They don't even need the app.",
  },
  {
    number: "2",
    icon: "🔔",
    title: "Get Reminded",
    description:
      "Receive a notification days before each birthday — with enough time to buy a gift, plan a surprise, or just find the right words.",
  },
  {
    number: "3",
    icon: "🎉",
    title: "Send a Wish",
    description:
      "Pick an AI-generated message that actually sounds like you. Tap send, and it opens WhatsApp with the message ready to go.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text-primary text-center">
          How It Works
        </h2>
        <p className="mt-4 text-text-secondary text-center text-lg">
          Three steps. Under two minutes. That's it.
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={step.number} className="text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
              )}
              <div className="w-16 h-16 rounded-full bg-accent-gold/15 flex items-center justify-center mx-auto mb-5 relative">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent-gold text-white font-bold text-sm mb-3">
                {step.number}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
