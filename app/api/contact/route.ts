import { NextRequest, NextResponse } from "next/server";

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

  // TODO: wire up real email delivery here (e.g. Resend, Nodemailer, SMTP) once credentials are available.

  return NextResponse.json({ ok: true });
}
