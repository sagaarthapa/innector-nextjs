import { Resend } from "resend";

// Where form submissions land - matches the address shown everywhere on the site (footer, contact page, menu).
// Overridable via env var since it's config, not code; CONTACT_NOTIFY_EMAIL in .env.local/Vercel wins if set.
const NOTIFY_TO = process.env.CONTACT_NOTIFY_EMAIL || "info@innector.net";
// innector.net is verified in Resend, so mail can be sent from an address on the site's own domain instead of the
// shared onboarding@resend.dev sandbox sender.
const FROM = "Innector Website <notifications@innector.net>";

const resend = new Resend(process.env.RESEND_API_KEY);

// Field values are attacker-controlled (anyone can POST to the form endpoints), so they're escaped before going into
// the HTML email body.
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function renderRows(fields: [string, string | undefined][]): string {
  return fields
    .filter(([, value]) => value?.trim())
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap">${label}</td><td style="padding:4px 0">${escapeHtml(value!).replace(/\n/g, "<br/>")}</td></tr>`)
    .join("");
}

// Returns true on success. Never throws: a broken/missing API key or a Resend outage should not stop the form from
// telling the visitor "thanks, we got it" (the submission is already logged to the server console as a fallback).
export async function sendNotification(subject: string, replyTo: string | undefined, fields: [string, string | undefined][]): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set; skipping email notification.");
    return false;
  }
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo,
      subject,
      html: `<table cellspacing="0" cellpadding="0" style="font:14px/1.5 -apple-system,sans-serif">${renderRows(fields)}</table>`,
    });
    if (error) {
      console.error("Resend failed to send notification:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Resend threw while sending notification:", err);
    return false;
  }
}
