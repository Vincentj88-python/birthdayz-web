const messages = [
  {
    style: "Warm & Traditional",
    text: "Liewe Margaret, mag jou 62ste verjaarsdag gevul wees met liefde, lag en al die dinge wat jou hart bly maak. Jy is 'n seën vir almal om jou. Baie geluk! 🎂",
    lang: "Afrikaans",
  },
  {
    style: "Fun & Celebratory",
    text: "Happy 45th, Johan! 🎉 Here's to another year of braais, bad jokes, and being the friend everyone can count on. Have the best day — you deserve it!",
    lang: "English",
  },
  {
    style: "Short & Sweet",
    text: "Veels geluk met jou 70ste, Tannie Rina! Mag dit 'n wonderlike dag wees. 💛",
    lang: "Afrikaans",
  },
];

export function AiDemo() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text-primary">
            AI Messages That Actually Sound Like You
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            No more generic "HBD" texts. Birthdayz generates warm, personal messages
            in English and Afrikaans — tailored to your friend, their age, and your relationship.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {messages.map((msg) => (
            <div
              key={msg.style}
              className="bg-surface border border-border rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-gold">
                  {msg.style}
                </span>
                <span className="text-xs bg-accent-gold/10 text-accent-gold-hover px-2.5 py-0.5 rounded-full font-medium">
                  {msg.lang}
                </span>
              </div>
              <p className="text-text-primary leading-relaxed flex-1 italic">
                "{msg.text}"
              </p>
              <div className="mt-5 flex gap-2">
                <div className="flex-1 bg-whatsapp/10 text-whatsapp text-center py-2.5 rounded-full text-sm font-semibold">
                  Send via WhatsApp
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-text-muted text-sm">
          Powered by Claude AI. Three options every time — pick one, edit it, or write your own.
        </p>
      </div>
    </section>
  );
}
