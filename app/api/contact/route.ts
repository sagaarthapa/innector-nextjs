import { NextRequest, NextResponse } from "next/server";
import { sendNotification, sendAcknowledgement, escapeHtml } from "@/lib/email";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, company, message } = body;

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { ok: false, error: "First name, last name, email, and message are required." },
      { status: 400 }
    );
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
