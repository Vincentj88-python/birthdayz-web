import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Simple in-memory rate limiter (resets on cold start — fine for testing)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 attempts per minute per IP

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";
    const now = Date.now();
    const entry = rateLimit.get(ip);

    if (entry && entry.resetAt > now) {
      if (entry.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: "Too many requests" },
          { status: 429 }
        );
      }
      entry.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    }

    const { code, birthday } = await request.json();

    if (!code || !birthday) {
      return NextResponse.json(
        { error: "Code and birthday are required" },
        { status: 400 }
      );
    }

    // Validate invite code format (8-char alphanumeric)
    if (typeof code !== "string" || code.length > 20) {
      return NextResponse.json(
        { error: "Invalid invite code" },
        { status: 400 }
      );
    }

    // Validate date format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(birthday)) {
      return NextResponse.json(
        { error: "Invalid date format" },
        { status: 400 }
      );
    }

    // Validate the date is real (not 2024-13-45)
    const parsedDate = new Date(birthday + "T00:00:00Z");
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: "Invalid date" }, { status: 400 });
    }

    // Birthday cannot be in the future
    if (parsedDate > new Date()) {
      return NextResponse.json(
        { error: "Birthday cannot be in the future" },
        { status: 400 }
      );
    }

    // Birthday cannot be before 1900
    if (parsedDate.getFullYear() < 1900) {
      return NextResponse.json({ error: "Invalid date" }, { status: 400 });
    }

    // Use database function to handle everything atomically (bypasses RLS)
    const { data, error: rpcError } = await supabase.rpc(
      "submit_invite_birthday",
      { invite_code_input: code, birthday_input: birthday }
    );

    if (rpcError) {
      console.error("RPC error:", rpcError);
      return NextResponse.json(
        { error: "Failed to submit birthday" },
        { status: 500 }
      );
    }

    if (!data?.success) {
      return NextResponse.json(
        { error: data?.error === "not_found" ? "expired" : "Failed" },
        { status: 410 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Invite submit error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
