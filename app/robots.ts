import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Everything public is crawlable (including /favicon.ico and /favicon/*, which Google
// must be able to fetch to show the icon in search results). Only the API is excluded.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
