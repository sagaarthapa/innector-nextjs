// Canonical origin used for metadataBase, robots.txt and sitemap.xml.
// Override with NEXT_PUBLIC_SITE_URL when deploying somewhere other than innector.net.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://innector.net").replace(/\/$/, "");
