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
