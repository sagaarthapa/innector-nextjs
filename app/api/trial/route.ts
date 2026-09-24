import { NextRequest, NextResponse } from "next/server";

type TrialPayload = {
  fullName?: string;
  businessEmail?: string;
  companyName?: string;
  country?: string;
  phone?: string;
  challenge?: string;
  consent?: boolean;
};

export async function POST(request: NextRequest) {
  let body: TrialPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { fullName, businessEmail, companyName, country, phone, challenge, consent } = body;

  if (!fullName?.trim() || !businessEmail?.trim() || !companyName?.trim() || !country?.trim() || !consent) {
    return NextResponse.json(
      { ok: false, error: "Full name, business email, company name, country, and consent are required." },
      { status: 400 }
    );
  }

  // eslint-disable-next-line no-console
  console.log("New 15-day trial signup:", {
    fullName,
    businessEmail,
    companyName,
    country,
    phone,
    challenge,
    consent,
    receivedAt: new Date().toISOString(),
  });

  // TODO: wire up real email delivery / CRM lead capture here (e.g. Resend, Nodemailer, SMTP) once credentials are available.

  return NextResponse.json({ ok: true });
}
