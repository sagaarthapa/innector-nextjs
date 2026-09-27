import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

/* Page titles and descriptions (the <title> and <meta name="description"> that search results show), plus the
   canonical link, Open Graph and Twitter Card tags every page needs (site audits flag missing canonicals and
   og:/twitter: tags as real problems - without them, shared links show no preview card, and Google has to guess
   which URL variant is the "real" one).

   Source for title/description: the old site's HTML (innector-bootstrap-main/*.html), page by page. The home page
   uses the wording the client supplied ("Innector: Affordable Managed IT Services for Global SMBs"); the old
   index.html had the same text as "Affordable Managed IT Services for Global SMBs | Innector" plus " 15-day free
   trial available." at the end of the description. Edit a page's wording here; the pages, the layout default and the
   blog articles all read from this file. */

const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.png`;

function meta(path: string, title: string, description: string, image = DEFAULT_OG_IMAGE): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Innector",
      type: "website",
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: "Innector IT Solutions" }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@Innectornet",
      title,
      description,
      images: [image],
    },
  };
}

export const SEO = {
  home: meta(
    "/",
    "Innector: Affordable Managed IT Services for Global SMBs",
    "Global IT solutions provider serving SMBs in USA, Canada, Australia, Dubai & Qatar. Expert remote IT support, managed services & digital solutions."
  ),
  about: meta(
    "/about",
    "About Us - Innector IT Solutions",
    "Learn about Innector IT Solutions - your global IT partner serving SMBs in USA, Canada, Australia, Dubai & Qatar with expert remote support and managed services since 2018."
  ),
  services: meta(
    "/services",
    "Our Services - Innector IT Solutions",
    "Comprehensive remote IT services for global SMBs - Web development, mobile apps, digital marketing, ERP, cybersecurity & AI/ML solutions. Serving USA, Canada, Australia, Dubai & Qatar."
  ),
  managedIt: meta(
    "/managed-it-services",
    "Managed IT Services - 15-Day Free Trial | Innector",
    "All-in-One Managed IT Services for SMBs - $999/month. 15-Day FREE Trial for businesses in USA, Canada, Australia, Dubai & Qatar. Web hosting, security, support & more."
  ),
  blog: meta(
    "/blog",
    "Blog - Innector IT Solutions",
    "IT insights & digital transformation tips for SMBs. Read about ERP systems, digital marketing trends, cybersecurity, and business growth strategies from Innector's experts."
  ),
  contact: meta(
    "/contact",
    "Contact Us - Innector IT Solutions",
    "Contact Innector IT Solutions for managed IT services & remote support. Serving SMBs in USA, Canada, Australia, Dubai & Qatar. 24/7 support available. Start your free trial today."
  ),
  privacy: meta(
    "/privacy-policy",
    "Privacy Policy - Innector IT Solutions",
    "Privacy Policy - Innector IT Solutions. Learn how we collect, use, and protect your personal information."
  ),
} as const;

/* Blog articles, by slug (see lib/blog-posts.ts). Each uses its own article image for the share preview instead of
   the site-wide default, since that is what a link to the article should actually look like when shared. */
export const POST_SEO: Record<string, Metadata> = {
  "erp-importance": meta(
    "/blog/erp-importance",
    "What is ERP and Why is it Important for Businesses | Innector IT Solutions",
    "Discover why ERP systems are crucial for business growth. Learn how Enterprise Resource Planning software helps SMBs streamline operations, reduce costs & improve efficiency.",
    `${SITE_URL}/images/innector/erp-nepal-scaled.webp`
  ),
  "top-5-open-source-erp": meta(
    "/blog/top-5-open-source-erp",
    "Top 5 Open Source ERP Solutions for SMBs | Innector IT Solutions",
    "Compare the top 5 open source ERP solutions for SMBs. Expert review of Odoo, ERPNext, Dolibarr & more. Find the best free ERP system for your business needs.",
    `${SITE_URL}/images/innector/erp-image.webp`
  ),
  "digital-marketing-trends": meta(
    "/blog/digital-marketing-trends",
    "Digital Marketing Trends for SMBs | Innector IT Solutions",
    "Stay ahead with the latest digital marketing trends for SMBs. Expert insights on SEO, social media, content marketing, and strategies to grow your online presence."
  ),
};
