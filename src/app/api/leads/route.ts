import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";
import { supabase } from "@/lib/supabase";
import { sendLeadNotification } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 }
    );
  }

  const lead = parsed.data;

  const { error } = await supabase.from("leads").insert({
    name: lead.name,
    company: lead.company,
    email: lead.email,
    phone: lead.phone,
    need: lead.need,
    message: lead.message ?? null,
  });

  if (error) {
    console.error("Supabase insert failed:", error.message);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  await sendLeadNotification(lead);

  return NextResponse.json({ ok: true });
}