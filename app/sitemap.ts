import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getLinkedPosts, postISODate } from "@/lib/blog-posts";

const staticRoutes = ["/", "/about", "/services", "/managed-it-services", "/blog", "/contact", "/privacy-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes.map((route) => ({ url: `${SITE_URL}${route}` }));
  // lastModified per article (its real publish date - these aren't edited after the fact) so Google can tell which
  // pages actually changed instead of treating every URL as equally stale.
  const posts = getLinkedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: postISODate(post),
  }));
  return [...pages, ...posts];
}
