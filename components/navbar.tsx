"use client";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text-primary">
          Birthdayz
        </a>
        <a
          href="#waitlist"
          className="bg-accent-red text-white font-semibold px-6 py-2.5 rounded-full hover:bg-accent-red-hover transition-colors text-sm"
        >
          Join the Waitlist
        </a>
      </div>
    </nav>
  );
}
