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
// The 3 old articles (ERP importance, top-5 open-source ERP, digital marketing trends) and the 4 fake teaser cards
// (never real pages in either the old or new site - they linked to /contact) have been retired. Their old URLs 301
// to /blog (see next.config.ts redirects()). New posts below are built around the "hire a company or freelancer"
// keyword cluster (see the plan file) - written in plain, simple language on purpose (a non-technical business owner
// deciding who should build their project is the reader, not a developer).
export const blogPosts: BlogPost[] = [
  {
    slug: "freelancer-or-company",
    title: "Freelancer vs. Company: How to Choose the Right Partner for Your Project",
    excerpt:
      "Trying to decide between hiring a freelancer or a company for your project? This simple guide walks you through the real differences, the risks, and how to pick the right partner - anywhere in the world.",
    image: "/images/blog/freelancer-or-company.webp",
    date: "September 27, 2026",
    tags: ["Hiring Guide", "Freelancers", "Outsourcing"],
    readTime: "4 min read",
    linked: true,
    content: [
      "You have a project. Maybe it's a new website, a mobile app, or software for your business. Now you need someone to build it. Should you hire one person (a freelancer) or a whole company? This is one of the biggest decisions you will make, and getting it wrong can cost you time and money.",
      "This guide breaks it down in plain language, wherever in the world you're hiring from.",
      "## What Is a Freelancer? What Is a Company?",
      "A freelancer is one person who works alone. They take on projects and get paid for the work they do. Most freelancers work from home, by themselves.",
      "A company is a team of people who work together. When you hire a company, more than one person works on your project. Different people can handle different parts, like design, coding, and testing.",
      "## The Good Things About Hiring a Freelancer",
      "- Often cheaper per hour than a company\n- Can be a good fit for small, simple tasks\n- You talk directly to the person doing the work\n- Fewer people involved can mean fewer meetings",
      "## The Problems That Can Happen With Freelancers",
      "Freelancers can be great, but hiring one also comes with risks:",
      "- They may disappear before the project is finished\n- They may miss deadlines, with no one to hold them to it\n- If they get sick, go on holiday, or get busy with another client, your project simply stops\n- One person can't be an expert at everything - design, coding, security, and testing are all different skills\n- If something breaks after they leave, you may have no one left to call",
      "This is exactly why so many people search for a safer alternative to freelance marketplaces like Upwork or Fiverr.",
      "## The Good Things About Hiring a Company",
      "- It's a team, not one person, so work doesn't stop if someone is busy or sick\n- Different experts handle different parts of the job\n- Companies usually follow a real process to manage your project\n- It's easier to get support after the project is finished\n- You can look at their past work (a portfolio) before you decide",
      "## Wait, Isn't a Company Always More Expensive?",
      "Not always. Freelancers often charge by the hour, and small mistakes, missed deadlines, or work that has to be redone can quietly add up. A company's price can look higher at first, but it often already includes support, testing, and a finished result you can trust. **Cheaper doesn't always mean cheaper in the end.**",
      "## A Third Option: A Dedicated Team",
      "Many people think it's freelancer or company and nothing else. There's actually a third choice: a **dedicated team**. This means a small group of experts works only on your project, almost like your own in-house team, but without you having to hire, manage, or pay each person yourself. You get the personal focus of a freelancer with the backup and skills of a company.",
      "## Quick Comparison",
      "TABLE:What You Get|Freelancer|Company|Dedicated Team\nTeam size|One person|Full team|Small focused group\nBackup if someone is busy|No|Yes|Yes\nDifferent skills covered|Rarely|Yes|Yes\nEasy to check past work|Sometimes|Usually|Usually\nBest for|Small, simple tasks|Full projects|Long-term work",
      "## 5 Simple Questions to Help You Decide",
      "1. **How big is my project?** A small task may only need one freelancer. A full website or app usually needs a team.\n2. **What happens if something goes wrong?** If you need someone to fix it fast, a company is the safer choice.\n3. **Do I need more than one skill?** Design, coding, and marketing are different skills. A company already has all of them under one roof.\n4. **Will I need help after the project is done?** Freelancers often move on to the next job. Companies usually offer ongoing support.\n5. **Can I see real examples of their past work?** If the answer is no, that's a warning sign.",
      "## How to Check If a Company Is Trustworthy",
      "Before you hire anyone - a freelancer or a company - check for these signs:",
      "- Ask to see real projects they have built, not just claims\n- Ask exactly who will work on your project\n- Ask what happens if you're not happy with the work\n- See if they explain things in plain language, not confusing jargon\n- Check if they're willing to prove themselves before you fully commit",
      "## Why a Trial Period Solves the Biggest Worry",
      "The biggest fear when hiring anyone is simple: **what if they're not actually good?** Most companies ask you to trust them completely, upfront, before you've seen a single result.",
      "That's why Innector offers a **15-day free trial** on managed IT services. Instead of asking you to believe our claims, we let you see real work first. If you like what you see, you continue. If not, you've lost nothing. [See how the 15-day trial works](/managed-it-services).",
      "## Conclusion",
      "There's no single right answer for everyone. A freelancer can be perfect for a small, simple task. A company or a dedicated team is usually the safer choice for anything bigger, or anything your business depends on.",
      "The real question isn't just \"freelancer or company\" - it's \"who can actually prove they'll deliver?\" [Talk to our team](/contact) about your project, or [try us for 15 days](/managed-it-services) and see for yourself.",
    ],
  },
];

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
