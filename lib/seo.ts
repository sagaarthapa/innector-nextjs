import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { getPostBySlug, postISODate } from "@/lib/blog-posts";

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
   the site-wide default, since that is what a link to the article should actually look like when shared.
   (The 3 old ERP/digital-marketing entries that used to live here are gone along with the articles themselves - see
   next.config.ts redirects() for where their URLs now go.) */

// Unlike meta() above (type: "website", for every static page), an article needs Open Graph's "article" type plus
// publishedTime and tags - the difference between a shared link showing as a generic page preview versus a proper
// article card (with a date and topic) on LinkedIn/Facebook/Slack, and one more honest, correct signal for crawlers.
// The published date is read from the one place it's actually defined (lib/blog-posts.ts) instead of being retyped
// here a second time and risking the two drifting apart.
function articleMeta(slug: string, title: string, description: string, image: string): Metadata {
  const post = getPostBySlug(slug);
  const url = `${SITE_URL}/blog/${slug}`;
  const publishedTime = postISODate(post);
  return {
    title,
    description,
    alternates: { canonical: url },
    authors: [{ name: "Innector Team", url: `${SITE_URL}/about` }],
    openGraph: {
      title,
      description,
      url,
      siteName: "Innector",
      type: "article",
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
      authors: [`${SITE_URL}/about`],
      tags: post?.tags,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
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

export const POST_SEO: Record<string, Metadata> = {
  "freelancer-vs-company": articleMeta(
    "freelancer-vs-company",
    "Freelancer vs. Company: How to Choose | Innector",
    "Freelancer or company? A simple guide to the real differences, the risks, and how to choose the right partner for your project - anywhere in the world.",
    `${SITE_URL}/images/blog/freelancer-or-company.webp`
  ),
  "try-before-you-hire": articleMeta(
    "try-before-you-hire",
    "Try Before You Hire: 15-Day Trial | Innector",
    "Why a 15-day trial beats a sales pitch when hiring anyone. See how Innector's risk-free trial works, and what it actually proves.",
    `${SITE_URL}/images/blog/try-before-you-hire.webp`
  ),
  "risks-of-hiring-a-freelancer": articleMeta(
    "risks-of-hiring-a-freelancer",
    "5 Risks of Hiring a Freelancer | Innector",
    "The 5 biggest risks of hiring a freelancer for your project, in plain language, and simple ways to protect yourself.",
    `${SITE_URL}/images/blog/risks-of-hiring-a-freelancer.webp`
  ),
  "how-to-evaluate-an-outsourcing-company": articleMeta(
    "how-to-evaluate-an-outsourcing-company",
    "How to Evaluate an Outsourcing Company | Innector",
    "10 simple questions that separate a trustworthy outsourcing partner from a risky one, wherever in the world you're hiring from.",
    `${SITE_URL}/images/blog/how-to-evaluate-an-outsourcing-company.webp`
  ),
  "hospital-management-software-case-study": articleMeta(
    "hospital-management-software-case-study",
    "HMIS Case Study: Hospital Software | Innector",
    "Inside HMIS: a real Hospital Management Information System with 29+ modules built by Innector, from patient registration to national health reporting.",
    `${SITE_URL}/images/case-studies/hmis.webp`
  ),
  "true-cost-of-a-freelancer-vs-a-company": articleMeta(
    "true-cost-of-a-freelancer-vs-a-company",
    "The True Cost of a Freelancer vs. Company | Innector",
    "Real numbers for what a freelancer and a company actually cost - hourly rates, hidden costs, and how to compare the true price of your project.",
    `${SITE_URL}/images/blog/true-cost-of-a-freelancer-vs-a-company.webp`
  ),
  "small-business-guide-to-hiring-an-it-partner": articleMeta(
    "small-business-guide-to-hiring-an-it-partner",
    "Small Business Guide to Hiring an IT Partner | Innector",
    "In-house hire, freelancer, or managed IT partner? A simple small business guide comparing the real cost and coverage of each option.",
    `${SITE_URL}/images/blog/small-business-guide-to-hiring-an-it-partner.webp`
  ),
  "dedicated-team-vs-staff-augmentation": articleMeta(
    "dedicated-team-vs-staff-augmentation",
    "Dedicated Team vs. Staff Augmentation | Innector",
    "Freelancer vs. company isn't the whole picture. Compare all 4 hiring models - freelancer, company, dedicated team, and staff augmentation.",
    `${SITE_URL}/images/blog/dedicated-team-vs-staff-augmentation.webp`
  ),
  "non-technical-founder-guide-to-hiring-a-developer": articleMeta(
    "non-technical-founder-guide-to-hiring-a-developer",
    "Non-Technical Founder's Guide to Hiring | Innector",
    "A simple, judgment-free guide for non-technical founders hiring a developer for the first time - no coding knowledge required.",
    `${SITE_URL}/images/blog/non-technical-founder-guide-to-hiring-a-developer.webp`
  ),
};
