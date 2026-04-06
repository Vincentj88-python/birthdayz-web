"use client";

import { useState } from "react";

export function WaitlistForm({ id }: { id?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("You're on the list! Check your inbox for a welcome email.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div id={id} className="bg-surface border border-border rounded-2xl p-6 text-center">
        <p className="text-lg font-semibold text-text-primary">You're in! 🎂</p>
        <p className="text-text-secondary mt-1">{message}</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-3.5 rounded-full bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-red/30 focus:border-accent-red text-base"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-accent-red text-white font-semibold px-8 py-3.5 rounded-full hover:bg-accent-red-hover transition-colors disabled:opacity-60 text-base whitespace-nowrap cursor-pointer"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && (
        <p className="text-accent-red-hover text-sm sm:absolute sm:mt-14">{message}</p>
      )}
    </form>
  );
}
