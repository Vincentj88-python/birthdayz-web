import type { Metadata } from "next";
import { Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Birthdayz — Never Forget a Birthday Again",
  description:
    "Birthdayz reminds you of every friend and family member's birthday — and helps you send the perfect wish with one tap. AI-powered messages in English and Afrikaans.",
  openGraph: {
    title: "Birthdayz — Never Forget a Birthday Again",
    description:
      "Birthday reminders with AI-powered wishes sent via WhatsApp. Join the waitlist!",
    url: "https://birthdayz.app",
    siteName: "Birthdayz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${quicksand.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
