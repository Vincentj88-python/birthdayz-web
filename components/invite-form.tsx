"use client";

import { useState } from "react";

interface InviteFormProps {
  inviteCode: string;
  senderName: string;
  language: string;
}

const t = {
  en: {
    heading: "wants to remember your birthday!",
    subtext: "Enter your birthday below so they never forget.",
    label: "Your birthday",
    submit: "Submit Birthday",
    submitting: "Submitting...",
    successTitle: "Thank you!",
    successMessage: "Your birthday has been saved. {name} will be reminded every year!",
    getApp: "Get the Birthdayz App",
    appSubtext: "Never forget a birthday again — get reminders and send heartfelt wishes.",
    expired: "This invite has already been used.",
    error: "Something went wrong. Please try again.",
  },
  af: {
    heading: "wil jou verjaarsdag onthou!",
    subtext: "Voer jou verjaarsdag hieronder in sodat hulle dit nooit vergeet nie.",
    label: "Jou verjaarsdag",
    submit: "Stuur Verjaarsdag",
    submitting: "Besig om te stuur...",
    successTitle: "Dankie!",
    successMessage: "Jou verjaarsdag is gestoor. {name} sal elke jaar herinner word!",
    getApp: "Kry die Birthdayz-app",
    appSubtext: "Moenie weer 'n verjaarsdag vergeet nie — kry herinnerings en stuur hartlike wense.",
    expired: "Hierdie uitnodiging is reeds gebruik.",
    error: "Iets het verkeerd gegaan. Probeer asseblief weer.",
  },
};

export function InviteForm({ inviteCode, senderName, language }: InviteFormProps) {
  const [birthday, setBirthday] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const lang = language === "af" ? "af" : "en";
  const text = t[lang];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!birthday) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/invite/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: inviteCode, birthday }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error === "expired" ? text.expired : text.error);
        return;
      }

      setSuccess(true);
    } catch {
      setError(text.error);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="text-center space-y-6">
        <div className="text-6xl">🎂</div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
          {text.successTitle}
        </h2>
        <p className="text-text-secondary text-lg">
          {text.successMessage.replace("{name}", senderName)}
        </p>

        <div className="bg-surface border border-border rounded-2xl p-6 mt-8 space-y-4">
          <h3 className="font-heading text-xl font-bold text-text-primary">
            {text.getApp}
          </h3>
          <p className="text-text-muted">{text.appSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://apps.apple.com/app/birthdayz"
              className="inline-flex items-center justify-center gap-2 bg-text-primary text-white px-6 py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=app.birthdayz.mobile"
              className="inline-flex items-center justify-center gap-2 bg-text-primary text-white px-6 py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.452 1.42c.55.32.55 1.124 0 1.444l-2.452 1.42L15.12 12l2.578-2.492zM5.864 3.457L16.8 9.79l-2.302 2.302-8.634-8.635z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-2">
        <p className="text-accent-gold font-body font-bold text-xl">
          {senderName}
        </p>
        <h2 className="font-heading text-2xl font-bold text-text-primary mt-1">
          {text.heading}
        </h2>
        <p className="text-text-secondary mt-2">{text.subtext}</p>
      </div>
      <div>
        <label
          htmlFor="birthday"
          className="block font-body font-semibold text-text-secondary mb-2 text-lg"
        >
          {text.label}
        </label>
        <input
          type="date"
          id="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
          className="w-full px-4 py-3 bg-white border-2 border-border rounded-xl font-body text-lg text-text-primary focus:border-accent-red focus:outline-none transition-colors"
        />
      </div>

      {error && (
        <p className="text-accent-red font-body font-semibold text-center">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !birthday}
        className="w-full bg-accent-red text-white font-body font-bold text-lg py-4 rounded-xl hover:bg-accent-red-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? text.submitting : text.submit}
      </button>
    </form>
  );
}
