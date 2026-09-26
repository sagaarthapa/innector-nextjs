import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

/* Cache-busting for the template's plain CSS/JS in public/ (Next does not fingerprint files it does not build).

   "/css/main.min.css" -> "/css/main.min.css?v=1a2b3c4d", where the hash is of the file's content. The pages are static, so
   this runs at build time; when a file changes, the next build gives it a new URL. That is what makes it safe for
   next.config.ts to serve /css and /js as "immutable" for a year (a visitor's second page view then costs no requests).
   If the file cannot be read (unexpected runtime layout), the plain URL is returned and still works. */
const cache = new Map<string, string>();

export function versioned(url: string): string {
  let v = cache.get(url);
  if (v === undefined) {
    try {
      v = createHash("md5").update(readFileSync(path.join(process.cwd(), "public", url))).digest("hex").slice(0, 8);
    } catch {
      v = "";
    }
    cache.set(url, v);
  }
  return v ? `${url}?v=${v}` : url;
}
