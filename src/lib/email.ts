import { Resend } from "resend";
import type { LeadInput } from "@/lib/validation";

export async function sendLeadNotification(lead: LeadInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !notifyTo) {
    console.warn(
      "Resend not configured (missing RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL) — skipping email notification."
    );
    return;
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Six Travel <onboarding@resend.dev>",
      to: notifyTo,
      subject: `New enquiry — ${lead.company}`,
      text: [
        `Name: ${lead.name}`,
        `Company: ${lead.company}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone}`,
        `Need: ${lead.need}`,
        lead.message ? `Message: ${lead.message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (err) {
    console.error("Failed to send lead notification email:", err);
  }
}