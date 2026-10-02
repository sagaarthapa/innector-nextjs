import { NextRequest, NextResponse } from "next/server";
import { sendNotification, sendAcknowledgement, escapeHtml } from "@/lib/email";
import { clientIp, isRateLimited } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  website?: string; // honeypot - real users never see or fill this field, bots fill every input they find
  turnstileToken?: string;
};

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, company, message, website, turnstileToken } = body;

  // Honeypot tripped: pretend success so the bot doesn't learn to leave this field alone, but drop the submission.
  if (website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const ip = clientIp(request);
  if (isRateLimited(`contact:${ip}`)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { ok: false, error: "First name, last name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return NextResponse.json({ ok: false, error: "Verification failed. Please try again." }, { status: 400 });
  }

  // eslint-disable-next-line no-console
  console.log("New contact form submission:", {
    firstName,
    lastName,
    email,
    phone,
    company,
    message,
    receivedAt: new Date().toISOString(),
  });

  await Promise.all([
    sendNotification(`New contact form message from ${firstName} ${lastName}`, email, [
      ["Name", `${firstName} ${lastName}`],
      ["Email", email],
      ["Phone", phone],
      ["Company", company],
      ["Message", message],
    ]),
    sendAcknowledgement(
      email,
      "We've received your message - Innector",
      `Hi ${escapeHtml(firstName)},`,
      `<p>Thanks for reaching out to Innector. We've received your message and our team will get back to you as soon as possible.</p>
<p style="margin-top:16px;padding:12px 16px;background:#f5f5f0;border-radius:6px;color:#575960">${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`
    ),
  ]);

  return NextResponse.json({ ok: true });
}
