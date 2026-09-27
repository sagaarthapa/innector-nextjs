export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string; // path under /images/innector/... or /img/... for a fitting Azurio decorative fallback if no real Innector image fits
  date?: string;
  tags?: string[];
  readTime?: string;
  linked: boolean;
  content?: string[]; // paragraphs/sections for the real articles
}

/**
 * Simple inline block syntax used inside `content`:
 * - "## Heading"            -> <h2>
 * - "### Sub-heading"       -> <h3>
 * - "- item\n- item"        -> <ul><li>...</li></ul>
 * - "1. item\n2. item"      -> <ol><li>...</li></ol>
 * - "TABLE:h1|h2|h3\nr1|r2|r3" -> a simple comparison table (first row = header)
 * - anything else           -> <p>
 * Inline text also supports **bold** and [label](/url) links.
 */
// Empty for now: the 3 old articles (ERP importance, top-5 open-source ERP, digital marketing trends) and the 4 fake
// teaser cards (never real pages in either the old or new site - they linked to /contact) have been retired. Their
// old URLs 301 to /blog (see next.config.ts redirects()). New posts, built broadly around the "hire a company or
// freelancer" keyword cluster (see the plan file), go here next - not another ERP-heavy set like the old blog was.
export const blogPosts: BlogPost[] = [];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLinkedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.linked);
}

// Not yet tag-aware (a stub with no tags overlap would just fall through) - fine while blogPosts is empty; revisit
// once new posts exist so a post's "related" section only surfaces genuinely related topics.
export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, count);
}
