// Best-effort per-IP rate limit for the form endpoints. Lives in a module-scope Map, so it only holds state for the
// lifetime of one warm serverless instance - it won't share counts across concurrent instances or survive a cold
// start. That's fine here: it's a backstop behind Turnstile and the honeypot, not the primary defense, and it still
// catches the common case of a bot hammering the same warm function in a short burst.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

const hits = new Map<string, { count: number; firstAt: number }>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();

  for (const [k, entry] of hits) {
    if (now - entry.firstAt > WINDOW_MS) hits.delete(k);
  }

  const entry = hits.get(key);
  if (!entry) {
    hits.set(key, { count: 1, firstAt: now });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_HITS;
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}
