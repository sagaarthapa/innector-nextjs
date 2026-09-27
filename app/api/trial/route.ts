import { NextRequest, NextResponse } from "next/server";
import { sendNotification } from "@/lib/email";

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

  await sendNotification(`New 15-day trial signup from ${fullName}`, businessEmail, [
    ["Name", fullName],
    ["Business email", businessEmail],
    ["Company", companyName],
    ["Country", country],
    ["Phone", phone],
    ["Challenge", challenge],
  ]);

  return NextResponse.json({ ok: true });
}
