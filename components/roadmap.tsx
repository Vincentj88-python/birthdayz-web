const milestones = [
  {
    phase: "Now",
    title: "Waitlist Open",
    description: "Sign up to be the first to know when Birthdayz launches.",
    status: "active" as const,
  },
  {
    phase: "Phase 1",
    title: "App Launch",
    description:
      "iOS & Android app with contact import, birthday reminders, AI wishes via WhatsApp, and English + Afrikaans support.",
    status: "upcoming" as const,
  },
  {
    phase: "Phase 2",
    title: "Groups & Communities",
    description:
      "Create birthday groups for churches, schools, offices, and families. Shared cards, collective wishes, and group admin tools.",
    status: "upcoming" as const,
  },
  {
    phase: "Phase 3",
    title: "Gift Partnerships",
    description:
      "Partner with NetFlorist, Yuppiechef, and Takealot. Get gift suggestions and send flowers or gifts directly from the app.",
    status: "upcoming" as const,
  },
  {
    phase: "Phase 4",
    title: "More Languages & Birthday Deals",
    description:
      "Zulu, Xhosa, and more languages. Birthday deals from restaurants, spas, and experience companies — delivered on the right day.",
    status: "upcoming" as const,
  },
];

export function Roadmap() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text-primary">
            Where We're Headed
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Birthdayz is just getting started. Here's what's coming.
          </p>
        </div>
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div key={m.phase} className="flex gap-5">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full shrink-0 mt-1.5 ${
                    m.status === "active"
                      ? "bg-accent-red ring-4 ring-accent-red/20"
                      : "bg-border"
                  }`}
                />
                {i < milestones.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border" />
                )}
              </div>
              {/* Content */}
              <div className="pb-10">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    m.status === "active" ? "text-accent-red" : "text-text-muted"
                  }`}
                >
                  {m.phase}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-primary mt-1">
                  {m.title}
                </h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
