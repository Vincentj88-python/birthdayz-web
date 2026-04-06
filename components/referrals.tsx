export function Referrals() {
  return (
    <section className="py-24 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-text-primary">
          Invite Friends, Earn Premium
        </h2>
        <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
          Every friend who downloads Birthdayz earns you an extra week of
          Premium — for free. Stack up to 90 days.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <div className="text-4xl mb-3">📤</div>
            <p className="font-semibold text-text-primary">You invite a friend</p>
            <p className="text-sm text-text-secondary mt-1">
              Send a WhatsApp link — takes 2 seconds
            </p>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-6">
            <div className="text-4xl mb-3">📲</div>
            <p className="font-semibold text-text-primary">They download the app</p>
            <p className="text-sm text-text-secondary mt-1">
              Create an account and start adding birthdays
            </p>
          </div>
          <div className="bg-surface border border-border rounded-2xl p-6">
            <div className="text-4xl mb-3">⭐</div>
            <p className="font-semibold text-text-primary">You earn 1 week Premium</p>
            <p className="text-sm text-text-secondary mt-1">
              Stacks up to 90 days — completely free
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
