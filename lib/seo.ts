import type { Metadata } from "next";

/* Page titles and descriptions (the <title> and <meta name="description"> that search results show).

   Source: the old site's HTML (innector-bootstrap-main/*.html), page by page. The home page uses the wording the client
   supplied ("Innector: Affordable Managed IT Services for Global SMBs"); the old index.html had the same text as
   "Affordable Managed IT Services for Global SMBs | Innector" plus " 15-day free trial available." at the end of the
   description. Edit a page's wording here; the pages, the layout default and the blog articles all read from this file. */

const meta = (title: string, description: string): Metadata => ({ title, description });

export const SEO = {
  home: meta(
    "Innector: Affordable Managed IT Services for Global SMBs",
    "Global IT solutions provider serving SMBs in USA, Canada, Australia, Dubai & Qatar. Expert remote IT support, managed services & digital solutions."
  ),
  about: meta(
    "About Us - Innector IT Solutions",
    "Learn about Innector IT Solutions - your global IT partner serving SMBs in USA, Canada, Australia, Dubai & Qatar with expert remote support and managed services since 2018."
  ),
  services: meta(
    "Our Services - Innector IT Solutions",
    "Comprehensive remote IT services for global SMBs - Web development, mobile apps, digital marketing, ERP, cybersecurity & AI/ML solutions. Serving USA, Canada, Australia, Dubai & Qatar."
  ),
  managedIt: meta(
    "Managed IT Services - 15-Day Free Trial | Innector",
    "All-in-One Managed IT Services for SMBs - $999/month. 15-Day FREE Trial for businesses in USA, Canada, Australia, Dubai & Qatar. Web hosting, security, support & more."
  ),
  blog: meta(
    "Blog - Innector IT Solutions",
    "IT insights & digital transformation tips for SMBs. Read about ERP systems, digital marketing trends, cybersecurity, and business growth strategies from Innector's experts."
  ),
  contact: meta(
    "Contact Us - Innector IT Solutions",
    "Contact Innector IT Solutions for managed IT services & remote support. Serving SMBs in USA, Canada, Australia, Dubai & Qatar. 24/7 support available. Start your free trial today."
  ),
  privacy: meta(
    "Privacy Policy - Innector IT Solutions",
    "Privacy Policy - Innector IT Solutions. Learn how we collect, use, and protect your personal information."
  ),
} as const;

/* Blog articles, by slug (see lib/blog-posts.ts). */
export const POST_SEO: Record<string, Metadata> = {
  "erp-importance": meta(
    "What is ERP and Why is it Important for Businesses | Innector IT Solutions",
    "Discover why ERP systems are crucial for business growth. Learn how Enterprise Resource Planning software helps SMBs streamline operations, reduce costs & improve efficiency."
  ),
  "top-5-open-source-erp": meta(
    "Top 5 Open Source ERP Solutions for SMBs | Innector IT Solutions",
    "Compare the top 5 open source ERP solutions for SMBs. Expert review of Odoo, ERPNext, Dolibarr & more. Find the best free ERP system for your business needs."
  ),
  "digital-marketing-trends": meta(
    "Digital Marketing Trends for SMBs | Innector IT Solutions",
    "Stay ahead with the latest digital marketing trends for SMBs. Expert insights on SEO, social media, content marketing, and strategies to grow your online presence."
  ),
};
