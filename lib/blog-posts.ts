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
    slug: "freelancer-vs-company",
    title: "Freelancer vs. Company: How to Choose the Right Partner for Your Project",
    excerpt:
      "Trying to decide between hiring a freelancer or a company for your project? This simple guide walks you through the real differences, the risks, and how to pick the right partner - anywhere in the world.",
    image: "/images/blog/freelancer-or-company.webp",
    date: "August 12, 2026",
    tags: ["Hiring Guide", "Freelancers", "Outsourcing"],
    readTime: "5 min read",
    linked: true,
    content: [
      "You have a project. Maybe it's a new website, a mobile app, or software for your business. Now you need someone to build it. Should you hire one person (a freelancer) or a whole company? This freelancer vs. company decision is one of the biggest you will make, and getting it wrong can cost you time and money.",
      "This guide breaks it down in plain language, wherever in the world you're hiring from.",
      "## What Is a Freelancer? What Is a Company?",
      "A freelancer is one person who works alone. They take on projects and get paid for the work they do. Most freelancers work from home, by themselves.",
      "A company is a team of people who work together. When you hire a company, more than one person works on your project. Different people can handle different parts, like design, coding, and testing.",
      "## The Good Things About Hiring a Freelancer",
      "- Often cheaper per hour than a company\n- Can be a good fit for small, simple tasks\n- You talk directly to the person doing the work\n- Fewer people involved can mean fewer meetings",
      "## The Problems That Can Happen With Freelancers",
      "Freelancers can be great, but hiring one also comes with risks:",
      "- They may disappear before the project is finished\n- They may miss deadlines, with no one to hold them to it\n- If they get sick, go on holiday, or get busy with another client, your project simply stops\n- One person can't be an expert at everything - design, coding, security, and testing are all different skills\n- If something breaks after they leave, you may have no one left to call",
      "This is exactly why so many people search for a safer alternative to freelance marketplaces like Upwork or Fiverr. [See all 5 risks in detail, and how to avoid them](/blog/risks-of-hiring-a-freelancer).",
      "## The Good Things About Hiring a Company",
      "- It's a team, not one person, so work doesn't stop if someone is busy or sick\n- Different experts handle different parts of the job\n- Companies usually follow a real process to manage your project\n- It's easier to get support after the project is finished\n- You can look at their past work (a portfolio) before you decide",
      "## Wait, Isn't a Company Always More Expensive?",
      "Not always. Freelancers often charge by the hour, and small mistakes, missed deadlines, or work that has to be redone can quietly add up. A company's price can look higher at first, but it often already includes support, testing, and a finished result you can trust. **Cheaper doesn't always mean cheaper in the end.**",
      "## A Third Option: A Dedicated Team",
      "Many people think it's freelancer or company and nothing else. There's actually a third choice: a **dedicated team**. This means a small group of experts works only on your project, almost like your own in-house team, but without you having to hire, manage, or pay each person yourself. You get the personal focus of a freelancer with the backup and skills of a company.",
      "## Quick Comparison",
      "TABLE:What You Get|Freelancer|Company|Dedicated Team\nTeam size|One person|Full team|Small focused group\nBackup if someone is busy|No|Yes|Yes\nDifferent skills covered|Rarely|Yes|Yes\nEasy to check past work|Sometimes|Usually|Usually\nBest for|Small, simple tasks|Full projects|Long-term work",
      "Still not sure which column fits your project? [Tell us about it](/contact) and we'll give you a straight answer, no pressure either way.",
      "## 5 Simple Questions to Help You Decide",
      "1. **How big is my project?** A small task may only need one freelancer. A full website or app usually needs a team.\n2. **What happens if something goes wrong?** If you need someone to fix it fast, a company is the safer choice.\n3. **Do I need more than one skill?** Design, coding, and marketing are different skills. A company already has all of them under one roof.\n4. **Will I need help after the project is done?** Freelancers often move on to the next job. Companies usually offer ongoing support.\n5. **Can I see real examples of their past work?** If the answer is no, that's a warning sign.",
      "## How to Check If a Company Is Trustworthy",
      "Before you hire anyone - a freelancer or a company - check for these signs:",
      "- Ask to see real projects they have built, not just claims\n- Ask exactly who will work on your project\n- Ask what happens if you're not happy with the work\n- See if they explain things in plain language, not confusing jargon\n- Check if they're willing to prove themselves before you fully commit",
      "Outsourcing to a company overseas, or one you'll never meet in person, adds its own worries. [Here's a full checklist for evaluating an outsourcing partner](/blog/how-to-evaluate-an-outsourcing-company).",
      "## Why a Trial Period Solves the Biggest Worry",
      "The biggest fear when hiring anyone is simple: **what if they're not actually good?** Most companies ask you to trust them completely, upfront, before you've seen a single result.",
      "That's why Innector offers a **15-day free trial** on managed IT services. Instead of asking you to believe our claims, we let you see real work first. If you like what you see, you continue. If not, you've lost nothing. [Read more about why a trial beats a sales pitch](/blog/try-before-you-hire), or [see the 15-day trial details](/managed-it-services).",
      "## Conclusion",
      "There's no single right answer for everyone. A freelancer can be perfect for a small, simple task. A company or a dedicated team is usually the safer choice for anything bigger, or anything your business depends on.",
      "The real question isn't just \"freelancer or company\" - it's \"who can actually prove they'll deliver?\" [Talk to our team](/contact) about your project, or [try us for 15 days](/managed-it-services) and see for yourself.",
    ],
  },
  {
    slug: "try-before-you-hire",
    title: "Try Before You Hire: Why a 15-Day Trial Beats a Sales Pitch",
    excerpt:
      "Anyone can promise great work. A trial period lets you see it first. Here's why testing a company before you commit is the smartest way to hire, and how Innector's 15-day free trial actually works.",
    image: "/images/blog/try-before-you-hire.webp",
    date: "September 9, 2026",
    tags: ["Free Trial", "Hiring Guide", "Risk-Free"],
    readTime: "3 min read",
    linked: true,
    content: [
      "Hiring a company or a freelancer usually means one thing: you pay first, and hope the work is good. That's a scary way to make a decision. [What if they turn out to be one of the risky freelancers we cover here](/blog/risks-of-hiring-a-freelancer)? What if the company's promises don't match reality?",
      "There's a simple fix: work with someone who lets you test them first.",
      "## The Biggest Problem With Hiring Anyone",
      "Every company says the same things. \"We're reliable.\" \"We're experts.\" \"You'll love the results.\" Words are cheap, and anyone can say them, whether they're true or not.",
      "The real question isn't what a company says about itself. It's whether they're willing to **prove it before you pay for a full project**.",
      "## Why \"Trust Me\" Isn't Good Enough",
      "Think about it from your side. You're about to hand over your project, your time, and your money to someone you may have never met. A polished website or a confident sales call doesn't tell you how they'll actually perform.",
      "A trial period changes the whole conversation. Instead of \"trust me,\" it becomes \"see for yourself.\"",
      "## What a Trial Period Actually Proves",
      "- How fast they respond to you\n- How clearly they explain things\n- Whether they actually understand your project\n- The real quality of their work, not just their portfolio\n- Whether you'd actually enjoy working with them long-term",
      "## How Innector's 15-Day Free Trial Works",
      "1. **You tell us about your project.** No long contracts, no upfront payment.\n2. **We get to work for 15 days.** You see real progress, not just promises.\n3. **You decide.** If you're happy, you continue with us. If not, you simply walk away.",
      "That's the entire process. [See the full details of the 15-day trial](/managed-it-services).",
      "## What You Risk (Spoiler: Almost Nothing)",
      "With most hiring decisions, you risk your money, your time, and your project's deadline, all before you know if the person or company is any good. With a trial period, you risk very little. You get real work, and you only continue if you're convinced.",
      "## Trial vs. No Trial: Quick Comparison",
      "TABLE:What Happens|Hiring Without a Trial|Hiring With a Trial\nWhen you see real work|After you've already paid|Before you fully commit\nRisk if it's a bad fit|High - money and time lost|Low - you simply walk away\nHow you judge them|Portfolio and promises|Actual, current work\nConfidence before committing|You're hoping|You've already seen it",
      "## Questions to Ask About Any Trial Offer",
      "- Is the trial actually free, with no hidden charges?\n- Do you get real work, or just a sales demo?\n- Is there any pressure or a contract hidden in the fine print?\n- Can you walk away with no penalty if you're not happy?",
      "If the answer to any of these is unclear, ask before you start.",
      "## Conclusion",
      "A company confident in its own work has no reason to hide from a trial. If a business asks you to commit fully before showing you anything real, that's worth noticing. [Read the full guide to freelancer vs. company hiring](/blog/freelancer-vs-company), or [start your 15-day free trial with Innector](/managed-it-services) and see the difference yourself.",
    ],
  },
  {
    slug: "risks-of-hiring-a-freelancer",
    title: "5 Risks of Hiring a Freelancer for Your Project (and How to Avoid Them)",
    excerpt:
      "Freelancers can be a great choice for small tasks, but hiring one also comes with real risks. Here are the 5 biggest ones, in plain language, and how to protect yourself.",
    image: "/images/blog/risks-of-hiring-a-freelancer.webp",
    date: "August 26, 2026",
    tags: ["Freelancers", "Hiring Guide", "Risk Management"],
    readTime: "2 min read",
    linked: true,
    content: [
      "Freelance marketplaces make it easy to hire someone in minutes. That speed is exactly why so many projects run into trouble later. Before you hire a freelancer, it helps to know exactly what can go wrong, and how to protect yourself. [For the full freelancer vs. company breakdown, start here](/blog/freelancer-vs-company).",
      "## Risk 1: They Disappear Before Finishing",
      "This is often called \"ghosting.\" A freelancer takes your project, does some work, and then simply stops replying. No warning, no explanation. You're left with a half-finished project and no way to fix it.",
      "## Risk 2: Missed Deadlines With No One to Answer To",
      "A single freelancer has no manager checking their work and no team holding them accountable. If they're busy, distracted, or simply slower than expected, your deadline quietly slips, and there's little you can do about it.",
      "## Risk 3: One Person, Limited Skills",
      "Building a website or an app usually needs several different skills: design, coding, testing, and often marketing too. One freelancer is rarely great at all of these at once. Something usually suffers.",
      "## Risk 4: No Backup If Something Goes Wrong",
      "If a freelancer gets sick, goes on holiday, or simply gets busy with another client, your project stops completely. There's no one else to step in and keep things moving.",
      "## Risk 5: No Support After the Project Ends",
      "Once a freelancer is paid and gone, getting them to fix a bug or make a small update later can be difficult, or impossible if they've moved on to other work.",
      "## How to Protect Yourself If You Still Want to Hire a Freelancer",
      "- Ask for links to real, live projects they've completed, not just screenshots\n- Break the project into small, paid milestones instead of one big payment\n- Get everything in writing: deadlines, deliverables, and what happens if they miss them\n- Ask what backup plan exists if they become unavailable\n- Keep a copy of all project files and access, not just the freelancer",
      "## A Safer Alternative: Try Before You Commit",
      "None of these risks disappear just by hiring a company instead. The real fix is working with someone, freelancer or company, who's willing to prove their work **before** you fully commit. [See how a 15-day trial removes most of this risk entirely](/blog/try-before-you-hire).",
      "## Conclusion",
      "Freelancers aren't automatically a bad choice. For a small, simple task, one person can be perfect. But for anything your business depends on, it's worth knowing these risks first. [Talk to our team](/contact) about a safer way to get your project done.",
    ],
  },
  {
    slug: "how-to-evaluate-an-outsourcing-company",
    title: "How to Evaluate an Outsourcing Company: 10 Questions to Ask Before You Hire",
    excerpt:
      "Outsourcing your project to a company you've never met can feel risky, especially across borders. Here are 10 simple questions that separate a trustworthy partner from a risky one.",
    image: "/images/blog/how-to-evaluate-an-outsourcing-company.webp",
    date: "September 18, 2026",
    tags: ["Outsourcing", "Hiring Guide", "Global Business"],
    readTime: "2 min read",
    linked: true,
    content: [
      "More businesses today hire outside help from anywhere in the world, not just their own city. That opens up more choice, but it also means learning how to evaluate an outsourcing company you may never meet in person. Here's how to check if they're actually trustworthy before you sign anything.",
      "## Why Outsourcing Feels Risky (and Why It Doesn't Have to)",
      "The worry is simple: how do you trust a company you can't visit, run by people you've only spoken to on a video call? The good news is that a trustworthy company usually makes itself easy to check. A risky one avoids being checked at all.",
      "## 10 Questions to Ask Before You Hire an Outsourcing Company",
      "1. **Can I see real projects you've built?** A trustworthy company will happily show you finished, live work.\n2. **Who exactly will work on my project?** You want real names and real roles, not a vague \"our team.\"\n3. **How do you communicate, and how often?** Regular updates are a good sign. Silence between big \"reveals\" is not.\n4. **What happens if I'm not happy with the work?** There should be a clear answer, not a shrug.\n5. **Can I test your work before I fully commit?** [A company confident in its own work usually offers a trial](/blog/try-before-you-hire).\n6. **What's included in your price, and what costs extra?** Hidden costs are a common surprise later on.\n7. **How do you handle time zone differences?** A good outsourcing partner already has a clear answer to this.\n8. **What happens if a team member leaves?** Your project shouldn't depend entirely on one person.\n9. **Do you offer support after the project is finished?** Ask this before you start, not after something breaks.\n10. **Can you explain your process in simple terms?** If they can't explain it simply, that's worth noticing.",
      "## Red Flags to Watch For",
      "- No real examples of past work, or examples that seem copied from somewhere else\n- Pressure to pay the full amount immediately\n- Vague answers to direct questions\n- No willingness to let you test their work first\n- Communication that suddenly slows down after you've paid",
      "## See This In Action: A Real Example",
      "Reading a checklist is one thing. Seeing a real, complex project actually built is another. [Take a look at HMIS, a full hospital management system we built](/blog/hospital-management-software-case-study), to see the kind of work these questions should uncover.",
      "## Conclusion",
      "Outsourcing isn't risky because a company is far away. It's risky when a company can't, or won't, answer simple questions clearly. [Read our full guide on choosing between a freelancer and a company](/blog/freelancer-vs-company), or [get in touch](/contact) and ask us these exact 10 questions yourself.",
    ],
  },
  {
    slug: "hospital-management-software-case-study",
    title: "How We Built HMIS: A Real Hospital Management Software Project",
    excerpt:
      "An inside look at HMIS, a real Hospital Management Information System with 29+ connected modules built by Innector, from patient registration to national health reporting. Proof of what we can build, not just a promise.",
    image: "/images/case-studies/hmis.webp",
    date: "September 27, 2026",
    tags: ["Case Study", "Healthcare Software", "Our Work"],
    readTime: "4 min read",
    linked: true,
    content: [
      "It's easy for any company to say \"we can build complex software.\" It's more convincing to simply show one. HMIS (Hospital Management Information System) is a real system Innector built, with more than 29 connected modules that run a hospital's daily work from one screen: patient care, diagnostics, pharmacy, inventory, billing, insurance, accounting, and even national health reporting.",
      "## What HMIS Actually Does",
      "A hospital doesn't run on just one task. It needs to manage patients, doctors, appointments, medicine, test results, and money, often all at the same time, without mistakes. HMIS brings all of that into one connected system instead of several separate tools that don't talk to each other.",
      "## The Five Areas HMIS Covers",
      "HMIS is organized into five main areas, each covering a different part of running a hospital:",
      "- **Command Centre:** a live dashboard, appointments, reports, and a full activity log\n- **Patient Care:** patient records, outpatient visits (OPD), inpatient admissions (IPD), Emergency, Surgery, and TeleMedicine\n- **Diagnostics & Supply:** the Laboratory, Radiology, Pharmacy, Blood Bank, and general inventory (Logistics)\n- **Public & Community Health:** maternal and child health, community health programs, immunization records, disease surveillance, and birth and death registration\n- **Business & Administration:** billing, insurance claims, full accounting, staff records, and system settings",
      "## Following a Patient Through the System",
      "A good way to understand HMIS is to follow a single patient through it:",
      "1. **Register:** the patient's details are entered once, including Nepal's address system and their Health ID or National ID.\n2. **OPD (Outpatient):** for a regular visit, the patient joins a queue by doctor and department, with a live \"in progress\" or \"completed\" status.\n3. **IPD (Inpatient):** if the patient needs to be admitted, HMIS tracks their bed, consultant, and reason for admission, right through to discharge.\n4. **Emergency:** in the emergency room, patients are triaged (marked by urgency using a colour code), assigned a bed, and tracked until an outcome is recorded.",
      "Every one of these steps uses the **same patient record**. Nobody has to type the same information twice.",
      "## Diagnostics: From Sample to Result",
      "When a doctor orders a lab test or a scan, HMIS tracks it from start to finish. The Laboratory module handles test catalogs, result entry, and flags critical findings that need urgent attention. The Radiology module works the same way for X-rays and other imaging. Both modules track turnaround time, in plain terms, how long it actually takes to get a result back to the patient.",
      "## Pharmacy: From Shelf to Sale",
      "The Pharmacy module tracks medicine stock, with low-stock alerts so nothing runs out unexpectedly, and also works as a point-of-sale system at the counter. It supports the payment methods people in Nepal actually use: cash, eSewa, Khalti, FonePay, and card, and it automatically handles medicines that are exempt from VAT under Nepal's tax rules.",
      "## Money Matters Too: Billing, Insurance, and Real Accounting",
      "Every action in HMIS, a consultation, a test, a medicine sold, automatically creates a billing line. Nothing has to be typed into a separate system.",
      "HMIS also manages full insurance claims, including Nepal's Social Health Insurance and HIB (Health Insurance Board) submissions, with clear queues for anything that needs attention, like an expired deadline or a rejected claim.",
      "Behind all of this sits a real double-entry accounting ledger, the same kind of proper bookkeeping system a qualified accountant would expect, not just a simple list of payments. It includes a full chart of accounts, journal entries, and financial reports like a trial balance, profit & loss statement, and balance sheet.",
      "## Built Specifically for Nepal",
      "HMIS isn't a generic template with a new logo on it. It's built around how healthcare actually works in Nepal: the provincial address system, pricing in Nepali Rupees, VAT-exempt medicines, Nepal's Social Health Insurance process, and DHIS2, the system health authorities use to collect national health data. Reports can be exported and fed directly into that national system, instead of being copied in by hand.",
      "## Why This Project Matters",
      "Anyone can claim to \"build complex software.\" Building a system this connected, where a mistake in one part (like billing or a lab result) can affect patient care, takes real experience and a real process. This is exactly the kind of proof [our guide on evaluating an outsourcing company](/blog/how-to-evaluate-an-outsourcing-company) tells you to look for: not just words, but a real, working result.",
      "## What This Means If You're Evaluating Us",
      "If your own project is smaller than a hospital system, that's completely fine, most are. The point isn't that every project needs to be this complex. It's that a company capable of handling this level of detail, more than 29 connected modules, all working correctly together, can almost certainly handle yours.",
      "## Conclusion",
      "Real projects are the best proof of what a company can actually do. [See our full guide on choosing the right partner for your project](/blog/freelancer-vs-company), or [get in touch](/contact) to talk about what you're trying to build.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Newest first, by `date` - the listing page (featured post + the rest) and any future "recent posts" style list
// read this, so a real publish-date spread (not everything dropped on the same day) actually shows up as one instead
// of being silently ignored by array order. A post with no date sorts last rather than crashing on an invalid Date.
export function getLinkedPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.linked)
    .sort((a, b) => (b.date ? Date.parse(b.date) : 0) - (a.date ? Date.parse(a.date) : 0));
}

// Tag-aware: posts sharing the most tags with the current one come first (a post with zero shared tags could still
// fill a remaining slot rather than leave it empty, but never ranks above a genuine match).
export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  const currentTags = new Set(current?.tags ?? []);
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.linked)
    .map((post) => ({ post, shared: post.tags?.filter((tag) => currentTags.has(tag)).length ?? 0 }))
    .sort((a, b) => b.shared - a.shared)
    .slice(0, count)
    .map(({ post }) => post);
}
