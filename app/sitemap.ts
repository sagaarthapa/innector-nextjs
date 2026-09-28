import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getLinkedPosts, postISODate } from "@/lib/blog-posts";

const staticRoutes = ["/", "/about", "/services", "/managed-it-services", "/blog", "/contact", "/privacy-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  // A real, honest value rather than an invented per-page date: this file's own build/deploy time, since Next
  // regenerates the sitemap on every deploy and none of the static pages carry their own last-edited date.
  const buildDate = new Date().toISOString();
  // Home's own canonical tag renders without a trailing slash (Next's metadata resolution normalizes it that way for
  // the root path) - matching that exactly here instead of leaving the two to quietly disagree.
  const pages = staticRoutes.map((route) => ({ url: route === "/" ? SITE_URL : `${SITE_URL}${route}`, lastModified: buildDate }));
  // lastModified per article (its real publish date - these aren't edited after the fact) so Google can tell which
  // pages actually changed instead of treating every URL as equally stale.
  const posts = getLinkedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: postISODate(post),
  }));
  return [...pages, ...posts];
}
