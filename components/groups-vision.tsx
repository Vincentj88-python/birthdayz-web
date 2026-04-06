const useCases = [
  { icon: "⛪", label: "Church groups" },
  { icon: "🏫", label: "School parents" },
  { icon: "🏢", label: "Office teams" },
  { icon: "📖", label: "Book clubs" },
  { icon: "👨‍👩‍👧‍👦", label: "Extended family" },
  { icon: "🏘️", label: "Neighbourhood groups" },
];

export function GroupsVision() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-surface border border-border rounded-3xl p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute top-4 right-4 bg-accent-gold/15 text-accent-gold-hover text-xs font-bold px-3 py-1 rounded-full">
            COMING SOON
          </div>
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text-primary">
              Groups — Birthday Reminders for Communities
            </h2>
            <p className="mt-5 text-text-secondary text-lg leading-relaxed">
              Imagine never missing a birthday in your church group, your child's
              school class, or your office team. Groups lets an admin add everyone
              once — and the whole community gets reminded.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Collective birthday cards. Shared wish signing. Gift pooling.
              Everything a community organiser needs to bring people together on
              the days that matter.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {useCases.map((uc) => (
              <div
                key={uc.label}
                className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm font-medium text-text-primary"
              >
                <span>{uc.icon}</span>
                <span>{uc.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-background border border-border rounded-xl p-5 text-center">
              <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-primary">Individual</p>
              <p className="text-text-muted text-sm mt-1">Friends & family</p>
              <p className="text-accent-gold font-bold mt-2">R29.99/mo</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-5 text-center">
              <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-primary">Group Admin</p>
              <p className="text-text-muted text-sm mt-1">20-100 members</p>
              <p className="text-accent-gold font-bold mt-2">R79/mo</p>
            </div>
            <div className="bg-background border border-border rounded-xl p-5 text-center">
              <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-primary">Organisation</p>
              <p className="text-text-muted text-sm mt-1">Schools, churches, offices</p>
              <p className="text-accent-gold font-bold mt-2">R199-499/mo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
