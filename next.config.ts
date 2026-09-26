import type { NextConfig } from "next";

/* Next serves everything in public/ with "Cache-Control: public, max-age=0", i.e. a browser re-asks for every image,
   font and stylesheet on every visit. These headers let repeat visits (and every page after the first) reuse them.
   - /css and /js are linked with a content hash (?v=..., see lib/assets.ts), so they can be immutable for a year.
   - /fonts files never change in place (rename the file if one ever does).
   - /images and /video keep their names when replaced, so: 30 days, and a stale copy may be shown for another day while
     the browser re-checks in the background. */
const YEAR = "public, max-age=31536000, immutable";
const MONTH = "public, max-age=2592000, stale-while-revalidate=86400";

const nextConfig: NextConfig = {
  async headers() {
    const cache = (source: string, value: string) => ({ source, headers: [{ key: "Cache-Control", value }] });
    return [cache("/css/:path*", YEAR), cache("/js/:path*", YEAR), cache("/fonts/:path*", YEAR), cache("/images/:path*", MONTH), cache("/video/:path*", MONTH)];
  },
};

export default nextConfig;
