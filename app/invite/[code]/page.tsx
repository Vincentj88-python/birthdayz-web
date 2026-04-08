import { supabase } from "@/lib/supabase";
import { InviteForm } from "@/components/invite-form";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ lang?: string }>;
}

const text = {
  en: {
    heading: "wants to remember your birthday!",
    subtext:
      "Enter your birthday below so they never forget to wish you on your special day.",
    expired: "This invite has expired or already been used.",
    notFound: "This invite link is invalid.",
    backHome: "Visit Birthdayz",
  },
  af: {
    heading: "wil jou verjaarsdag onthou!",
    subtext:
      "Voer jou verjaarsdag hieronder in sodat hulle nooit vergeet om jou op jou spesiale dag geluk te wens nie.",
    expired: "Hierdie uitnodiging het verval of is reeds gebruik.",
    notFound: "Hierdie uitnodigingskakel is ongeldig.",
    backHome: "Besoek Birthdayz",
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { code } = await params;

  const { data: invite } = await supabase
    .from("invites")
    .select("language")
    .eq("invite_code", code)
    .single();

  const lang = invite?.language === "af" ? "af" : "en";

  return {
    title:
      lang === "af"
        ? "Birthdayz — Deel jou verjaarsdag"
        : "Birthdayz — Share your birthday",
    description:
      lang === "af"
        ? "Iemand wil jou verjaarsdag onthou! Voer dit in sodat hulle jou kan wens."
        : "Someone wants to remember your birthday! Enter it so they can wish you.",
    openGraph: {
      title:
        lang === "af"
          ? "Deel jou verjaarsdag op Birthdayz"
          : "Share your birthday on Birthdayz",
      description:
        lang === "af"
          ? "Iemand wil jou verjaarsdag onthou!"
          : "Someone wants to remember your birthday!",
      url: `https://birthdayz.app/invite/${code}`,
      siteName: "Birthdayz",
      type: "website",
    },
  };
}

export default async function InvitePage({ params, searchParams }: PageProps) {
  const { code } = await params;
  const { lang: langParam } = await searchParams;

  // Fetch the invite with the sender's name
  const { data: invite, error } = await supabase
    .from("invites")
    .select("*, users:from_user_id(display_name)")
    .eq("invite_code", code)
    .single();

  const lang =
    langParam === "af" ? "af" : invite?.language === "af" ? "af" : "en";
  const t = text[lang];

  // Invite not found
  if (error || !invite) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="text-6xl">🔗</div>
          <h1 className="font-heading text-2xl font-bold text-text-primary">
            {t.notFound}
          </h1>
          <a
            href="/"
            className="inline-block bg-accent-red text-white font-body font-bold px-8 py-3 rounded-xl hover:bg-accent-red-hover transition-colors"
          >
            {t.backHome}
          </a>
        </div>
      </main>
    );
  }

  // Already completed
  if (invite.status !== "pending") {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="text-6xl">✅</div>
          <h1 className="font-heading text-2xl font-bold text-text-primary">
            {t.expired}
          </h1>
          <a
            href="/"
            className="inline-block bg-accent-red text-white font-body font-bold px-8 py-3 rounded-xl hover:bg-accent-red-hover transition-colors"
          >
            {t.backHome}
          </a>
        </div>
      </main>
    );
  }

  const senderName =
    (invite.users as { display_name: string } | null)?.display_name ?? "Someone";

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <span className="text-5xl">🎂</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-4">
            Birthdayz
          </h1>
        </div>

        {/* Card */}
        <div className="bg-surface border border-border rounded-3xl p-6 md:p-8 shadow-xl shadow-accent-gold/5">
          <InviteForm
            inviteCode={code}
            senderName={senderName}
            language={lang}
          />
        </div>

        {/* Footer */}
        <p className="text-center text-text-muted text-sm">
          Powered by{" "}
          <a href="/" className="text-accent-red hover:underline">
            Birthdayz
          </a>
        </p>
      </div>
    </main>
  );
}
