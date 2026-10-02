const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Mirrors lib/email.ts's stance on missing config: until TURNSTILE_SECRET_KEY is set (site key added, but the secret
// not deployed yet), forms should keep working rather than lock everyone out - so this fails open with a logged
// error instead of rejecting every submission.
export async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not set; skipping Turnstile verification.");
    return true;
  }

  if (!token) return false;

  try {
    const params = new URLSearchParams({ secret, response: token, remoteip: ip });
    const res = await fetch(VERIFY_URL, { method: "POST", body: params });
    const data = await res.json();
    return Boolean(data.success);
  } catch (err) {
    console.error("Turnstile verification request failed:", err);
    return false;
  }
}
