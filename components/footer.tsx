export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-primary">
              Birthdayz
            </p>
            <p className="text-sm text-text-muted mt-1">
              Never forget a birthday again.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-text-secondary">
            <a href="#waitlist" className="hover:text-text-primary transition-colors">
              Join Waitlist
            </a>
            <a href="mailto:hello@birthdayz.app" className="hover:text-text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {year} Birthdayz. Made with love in South Africa. 🇿🇦
          </p>
          <p className="text-xs text-text-muted">
            iOS & Android — coming soon
          </p>
        </div>
      </div>
    </footer>
  );
}
