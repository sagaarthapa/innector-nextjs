import { SITE_URL } from "@/lib/site";

/* JSON-LD structured data (schema.org). Doesn't show up in a plain content fetch or a look at the rendered page - it
   only matters to crawlers reading the <script type="application/ld+json"> tag - which is exactly why it is easy to
   miss and worth getting right: it is what lets Google show a business panel, star ratings, a breadcrumb trail or an
   FAQ accordion directly in search results instead of just a blue link. */

const SOCIAL_LINKS = [
  "https://twitter.com/Innectornet",
  "https://www.facebook.com/innectornet.local",
  "https://www.instagram.com/innectoritsolutions/",
  "https://www.linkedin.com/company/innector-net",
];

// LocalBusiness is a subtype of Organization in schema.org's own hierarchy, so one node covers both: it identifies
// the company (name, logo, sameAs - what an Organization node would do) and its physical location (address, phone -
// what makes it a LocalBusiness). Everywhere on the site (footer, contact page) only gives "Chabahil, Kathmandu,
// Nepal" as the address, not a street number, so that is all this states - inventing a more precise address would be
// wrong, not just imprecise.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Innector",
  legalName: "Innector IT Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/images/innector/innector-logo-black.svg`,
  image: `${SITE_URL}/images/og-image.png`,
  telephone: "+9779705559159",
  email: "info@innector.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chabahil",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  // The business is based in Nepal but its clients are not: same wording used for "What regions do you serve?" on
  // the contact page FAQ.
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Qatar" },
  ],
  sameAs: SOCIAL_LINKS,
};

// A separate WebSite node (distinct from the LocalBusiness node above): identifies the site itself, published by the
// business. This is the schema type that a "sitelinks search box" would hang off of via a SearchAction - deliberately
// left out here, since the blog's search box (app/blog/page.tsx) is decorative (action="#0"), not a real search
// endpoint; claiming one that does not work would be worse than not claiming one. This alone doesn't cause Google to
// show sitelinks either - nothing does, that part is entirely algorithmic - it's just one more standard, honest
// signal for how the site identifies itself.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Innector",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

// BlogPosting node for one article - what lets Google (and an AI Overview/answer engine, which leans on this same
// markup for citation) understand headline/author/dates/image without guessing from the rendered page. `datePublished`
// must be ISO 8601 (see postISODate() in lib/blog-posts.ts) - the human-readable "August 12, 2026" string is for the
// visible page only. author/publisher point at the one real person-equivalent and org this site actually has; no
// dateModified is invented separately from datePublished unless a post is genuinely edited later.
export function articleSchema({
  slug,
  title,
  description,
  image,
  datePublished,
  dateModified,
  wordCount,
  tags,
}: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  wordCount?: number;
  tags?: string[];
}) {
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: title,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    ...(datePublished ? { datePublished, dateModified: dateModified ?? datePublished } : {}),
    author: { "@type": "Person", name: "Innector Team", url: `${SITE_URL}/about` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(wordCount ? { wordCount } : {}),
    ...(tags?.length ? { keywords: tags.join(", ") } : {}),
  };
}

// One Blog node for the /blog index, listing every real article - a standard companion to the per-article
// BlogPosting nodes above, not a replacement for them (this is the "table of contents", each article's own page
// carries the full node).
export function blogSchema(posts: { slug: string; title: string; isoDate?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: "Innector Blog",
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: posts.map(({ slug, title, isoDate }) => ({
      "@type": "BlogPosting",
      headline: title,
      url: `${SITE_URL}/blog/${slug}`,
      ...(isoDate ? { datePublished: isoDate } : {}),
    })),
  };
}
