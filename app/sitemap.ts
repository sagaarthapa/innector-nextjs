import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getLinkedPosts } from "@/lib/blog-posts";

const staticRoutes = ["/", "/about", "/services", "/managed-it-services", "/blog", "/contact", "/privacy-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes.map((route) => ({ url: `${SITE_URL}${route}` }));
  const posts = getLinkedPosts().map((post) => ({ url: `${SITE_URL}/blog/${post.slug}` }));
  return [...pages, ...posts];
}
