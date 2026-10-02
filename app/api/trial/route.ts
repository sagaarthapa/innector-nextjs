import { NextRequest, NextResponse } from "next/server";
import { sendNotification, sendAcknowledgement, escapeHtml } from "@/lib/email";
import { clientIp, isRateLimited } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";

type TrialPayload = {
  fullName?: string;
  businessEmail?: string;
  companyName?: string;
  country?: string;
  phone?: string;
  challenge?: string;
  consent?: boolean;
  website?: string; // honeypot - real users never see or fill this field, bots fill every input they find
  turnstileToken?: string;
};

export async function POST(request: NextRequest) {
  let body: TrialPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { fullName, businessEmail, companyName, country, phone, challenge, consent, website, turnstileToken } = body;

  // Honeypot tripped: pretend success so the bot doesn't learn to leave this field alone, but drop the submission.
  if (website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const ip = clientIp(request);
  if (isRateLimited(`trial:${ip}`)) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  if (!fullName?.trim() || !businessEmail?.trim() || !companyName?.trim() || !country?.trim() || !consent) {
    return NextResponse.json(
      { ok: false, error: "Full name, business email, company name, country, and consent are required." },
      { status: 400 }
    );
  }

  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return NextResponse.json({ ok: false, error: "Verification failed. Please try again." }, { status: 400 });
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

  await Promise.all([
    sendNotification(`New 15-day trial signup from ${fullName}`, businessEmail, [
      ["Name", fullName],
      ["Business email", businessEmail],
      ["Company", companyName],
      ["Country", country],
      ["Phone", phone],
      ["Challenge", challenge],
    ]),
    sendAcknowledgement(
      businessEmail,
      "Your 15-day trial request - Innector",
      `Hi ${escapeHtml(fullName)},`,
      `<p>Thanks for requesting a 15-day trial with Innector for <strong>${escapeHtml(companyName)}</strong>. Our team will get back to you as soon as possible to get you started.</p>`
    ),
  ]);

  return NextResponse.json({ ok: true });
}
