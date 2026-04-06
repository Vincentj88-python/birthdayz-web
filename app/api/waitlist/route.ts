import { NextResponse } from "next/server";
import { getResend, AUDIENCE_ID } from "@/lib/resend";
import { WelcomeEmail } from "@/emails/welcome";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const resend = getResend();

    // Add contact to Resend Audience
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
    });

    // Send welcome email
    await resend.emails.send({
      from: "Birthdayz <noreply@updates.birthdayz.app>",
      to: email,
      subject: "Welcome to Birthdayz! 🎂",
      react: WelcomeEmail(),
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    // Resend returns a specific error for duplicate contacts
    if (
      error instanceof Error &&
      error.message?.includes("already exists")
    ) {
      return NextResponse.json(
        { error: "You're already on the waitlist!" },
        { status: 409 }
      );
    }

    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
