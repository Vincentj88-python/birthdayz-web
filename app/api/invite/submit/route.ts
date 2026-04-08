import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { code, birthday } = await request.json();

    if (!code || !birthday) {
      return NextResponse.json(
        { error: "Code and birthday are required" },
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
