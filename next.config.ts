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
  // The old blog articles were retired (see lib/blog-posts.ts) without new replacements yet, so both the truly old
  // URLs (innector.net ran as a flat GitHub Pages site before this rebuild - confirmed via its own llms.txt) and the
  // current live Next.js ones now 301 to /blog instead of 404ing. Add a specific redirect here once a new article
  // covering the same or a related topic exists, rather than leaving it pointed at the index forever.
  async redirects() {
    const toBlog = (source: string) => ({ source, destination: "/blog", permanent: true });
    return [
      // old GitHub Pages site (flat .html URLs)
      toBlog("/blog.html"),
      toBlog("/blog-erp-importance.html"),
      toBlog("/blog-top-5-erp.html"),
      toBlog("/blog-digital-marketing-trends.html"),
      // this site's own now-removed article URLs
      toBlog("/blog/erp-importance"),
      toBlog("/blog/top-5-open-source-erp"),
      toBlog("/blog/digital-marketing-trends"),
      // slug improved for SEO (was too short/generic) right after this article first went live - real redirect to
      // its replacement, not to the index, since one actually exists this time.
      { source: "/blog/hmis-case-study", destination: "/blog/hospital-management-software-case-study", permanent: true },
    ];
  },
};

export default nextConfig;
