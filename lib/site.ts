// Canonical origin used for metadataBase, canonical link tags, Open Graph/Twitter urls, robots.txt and sitemap.xml.
// www, not bare innector.net: Vercel's domain settings already 308-redirect the bare domain here, so this is
// whichever URL a visitor (and Google) actually lands on. Override with NEXT_PUBLIC_SITE_URL for other deployments
// (e.g. the *.vercel.app preview URL), where this www redirect does not exist.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.innector.net").replace(/\/$/, "");
