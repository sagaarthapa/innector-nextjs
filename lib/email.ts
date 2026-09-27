import { Resend } from "resend";

// Where form submissions land - matches the address shown everywhere on the site (footer, contact page, menu).
// Overridable via env var since it's config, not code; CONTACT_NOTIFY_EMAIL in .env.local/Vercel wins if set.
const NOTIFY_TO = process.env.CONTACT_NOTIFY_EMAIL || "info@innector.net";
// innector.net is verified in Resend, so mail sends from the same address the site shows everywhere as its contact
// email, both for the internal notification and the acknowledgement the sender gets back.
const FROM = "Innector <info@innector.net>";

const resend = new Resend(process.env.RESEND_API_KEY);

// Field values are attacker-controlled (anyone can POST to the form endpoints), so they're escaped before going into
// an HTML email body. Exported so callers can safely interpolate a name/company into an acknowledgement's greeting
// or body text too.
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function renderRows(fields: [string, string | undefined][]): string {
  return fields
    .filter(([, value]) => value?.trim())
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap">${label}</td><td style="padding:4px 0">${escapeHtml(value!).replace(/\n/g, "<br/>")}</td></tr>`)
    .join("");
}

// Shared send: never throws. A broken/missing API key or a Resend outage should not stop a form from telling the
// visitor "thanks, we got it" - the submission is already logged to the server console as a fallback either way.
async function send(to: string, subject: string, html: string, replyTo?: string): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set; skipping email.");
    return false;
  }
  try {
    const { error } = await resend.emails.send({ from: FROM, to, replyTo, subject, html });
    if (error) {
      console.error("Resend failed to send:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Resend threw while sending:", err);
    return false;
  }
}

// Internal notification to the team inbox, one row per submitted field. replyTo is the visitor's own address, so
// replying from the inbox goes straight back to them.
export function sendNotification(subject: string, replyTo: string | undefined, fields: [string, string | undefined][]): Promise<boolean> {
  const html = `<table cellspacing="0" cellpadding="0" style="font:14px/1.5 -apple-system,sans-serif">${renderRows(fields)}</table>`;
  return send(NOTIFY_TO, subject, html, replyTo);
}

// Auto-reply straight to the person who submitted the form, confirming it was received. replyTo points back at the
// team inbox, so if they reply to the confirmation itself, it still reaches Innector.
export function sendAcknowledgement(to: string, subject: string, greeting: string, bodyHtml: string): Promise<boolean> {
  const html = `<div style="font:15px/1.6 -apple-system,sans-serif;color:#161616;max-width:480px">
<p>${escapeHtml(greeting)}</p>
${bodyHtml}
<p style="margin-top:24px">Best regards,<br/>The Innector Team</p>
</div>`;
  return send(to, subject, html, NOTIFY_TO);
}
