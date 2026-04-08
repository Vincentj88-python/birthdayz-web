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

    // Look up the invite
    const { data: invite, error: fetchError } = await supabase
      .from("invites")
      .select("*")
      .eq("invite_code", code)
      .single();

    if (fetchError || !invite) {
      return NextResponse.json(
        { error: "Invite not found" },
        { status: 404 }
      );
    }

    if (invite.status !== "pending") {
      return NextResponse.json(
        { error: "expired" },
        { status: 410 }
      );
    }

    // Update the invite
    const { error: updateInviteError } = await supabase
      .from("invites")
      .update({
        status: "completed",
        birthday_submitted: birthday,
        completed_at: new Date().toISOString(),
      })
      .eq("id", invite.id);

    if (updateInviteError) {
      console.error("Update invite error:", updateInviteError);
      return NextResponse.json(
        { error: "Failed to update invite" },
        { status: 500 }
      );
    }

    // Update the friend's birthday if friend_id exists
    if (invite.friend_id) {
      const { error: updateFriendError } = await supabase
        .from("friends")
        .update({
          birthday,
          birthday_source: "invite",
        })
        .eq("id", invite.friend_id);

      if (updateFriendError) {
        console.error("Update friend error:", updateFriendError);
        // Non-fatal — invite is already marked complete
      }
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
