import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts, getLinkedPosts } from "@/lib/blog-posts";
import ServiceMarquee from "@/components/ServiceMarquee";
import type { Metadata } from "next";
import { POST_SEO } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  // the old site's own title and description for each article; a post without an entry falls back to its own title/excerpt
  return POST_SEO[slug] ?? (post ? { title: `${post.title} | Innector IT Solutions`, description: post.excerpt } : {});
}

export function generateStaticParams() {
  return getLinkedPosts().map((post) => ({ slug: post.slug }));
}

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(
        <a key={key++} href={match[2]}>
          {match[1]}
        </a>
      );
    } else if (match[3] !== undefined) {
      nodes.push(<strong key={key++}>{match[3]}</strong>);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

function renderContentBlock(block: string, idx: number) {
  if (block.startsWith("## ")) {
    return (
      <div className="mxd-article__block" key={idx}>
        <h3>{parseInline(block.slice(3))}</h3>
      </div>
    );
  }

  if (block.startsWith("### ")) {
    return (
      <div className="mxd-article__block" key={idx}>
        <h4>{parseInline(block.slice(4))}</h4>
      </div>
    );
  }

  if (block.startsWith("TABLE:")) {
    const [headerRow, ...bodyRows] = block
      .slice(6)
      .split("\n")
      .map((row) => row.split("|"));
    return (
      <div className="mxd-article__block" key={idx} style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {headerRow.map((cell, i) => (
                <th
                  key={i}
                  style={{ textAlign: "left", padding: "0.8rem", borderBottom: "1px solid currentColor" }}
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} style={{ padding: "0.8rem", borderBottom: "1px solid rgba(128,128,128,0.25)" }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const lines = block.split("\n");
  const isUnordered = lines.length > 0 && lines.every((line) => line.startsWith("- "));
  const isOrdered = lines.length > 0 && lines.every((line) => /^\d+\.\s/.test(line));

  if (isUnordered) {
    return (
      <div className="mxd-article__block" key={idx}>
        <ul className="article-ul">
          {lines.map((line, i) => (
            <li key={i}>{parseInline(line.replace(/^- /, ""))}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (isOrdered) {
    return (
      <div className="mxd-article__block" key={idx}>
        <ol className="article-ol">
          {lines.map((line, i) => (
            <li key={i}>{parseInline(line.replace(/^\d+\.\s/, ""))}</li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="mxd-article__block" key={idx}>
      <p className="mxd-article__normal">{parseInline(block)}</p>
    </div>
  );
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.linked || !post.content) {
    notFound();
  }

  const linkedPosts = getLinkedPosts();
  const linkedIndex = linkedPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = linkedIndex > 0 ? linkedPosts[linkedIndex - 1] : undefined;
  const nextPost = linkedIndex < linkedPosts.length - 1 ? linkedPosts[linkedIndex + 1] : undefined;
  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <div className="mxd-page-content inner-page-content">

      {/* Section - Blog Article Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container grid-l-container">

          {/* Block - Inner Headline Breadcrumbs Start */}
          <div className="mxd-block">
            <div className="inner-headline">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    {/* breadcrumbs */}
                    <div className="inner-headline__breadcrumbs loading-fade">
                      <div className="breadcrumbs__nav">
                        <span>
                          <a className="mxd-scramble" href="/">Home</a>
                        </span>
                        <span>
                          <a className="mxd-scramble" href="/blog">Blog</a>
                        </span>
                        <span className="current-item">{post.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Inner Headline Breadcrumbs End */}

          <div className="mxd-article-area">

            {/* Article Container Start */}
            <div className="mxd-article-container mxd-grid-item">

              {/* Article Start */}
              <div className="mxd-article loading-wrap">

                {/* Article Headline Start */}
                <div className="mxd-article__headline">
                  <div className="mxd-article__tags loading-item">
                    {post.tags?.map((tag) => (
                      <a href="#0" key={tag}>
                        <span className="tag tag-m meta-tag comma-tag mxd-scramble">{tag}</span>
                      </a>
                    ))}
                  </div>
                  <div className="mxd-article__title">
                    <h2 className="small loading-split">{post.title}</h2>
                  </div>
                  <div className="mxd-article__meta loading-item">
                    <div className="mxd-article__data">
                      <span className="tag tag-m meta-tag slash-tag">{post.date}</span>
                      <span className="tag tag-m meta-tag">{post.readTime}</span>
                    </div>
                  </div>
                </div>
                {/* Article Headline End */}

                {/* Article Thumb Start */}
                <div className="mxd-article__thumb loading-item">
                  <img loading="lazy" decoding="async" src={post.image} alt={post.title} />
                </div>
                {/* Article Thumb End */}

                {/* Article Content Start */}
                <div className="mxd-article__content">
                  {post.content.map((block, idx) => renderContentBlock(block, idx))}
                </div>
                {/* Article Content End */}

              </div>
              {/* Article End */}

              {/* Article Author Start */}
              <div className="mxd-article-author">
                <div className="mxd-article-author__data">
                  <a className="mxd-article-author__avatar" href="/about">
                    <img loading="lazy" decoding="async" src="/images/innector/innectorgoldenlogo.png" alt="Innector Team" />
                  </a>
                  <div className="mxd-article-author__info">
                    <h4 className="mxd-article-author__name">
                      <a href="/about">Innector Team</a>
                      <small className="mxd-article-author__position">IT Solutions &amp; Digital Marketing</small>
                    </h4>
                    <div className="mxd-article-author__socials">
                      <a className="tag tag-m tag-bg default mxd-scramble" href="https://www.linkedin.com/company/innector-net" target="_blank" rel="noreferrer">LinkedIn</a>
                      <a className="tag tag-m tag-bg default mxd-scramble" href="https://twitter.com/Innectornet" target="_blank" rel="noreferrer">Twitter</a>
                    </div>
                  </div>
                </div>
                <div className="mxd-article-author__quote">
                  <p className="mxd-article__normal">Written by the Innector team in Kathmandu. We help SMBs plan, implement,
                    and support ERP, cloud, and digital marketing projects. Have a question about this article? <a href="/contact">Get in touch</a>.</p>
                </div>
              </div>
              {/* Article Author End */}

              {/* Article Navigation Start */}
              {(prevPost || nextPost) && (
                <div className="mxd-article-navigation">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-6 mxd-article-navigation__navitem left">
                        {prevPost && (
                          <>
                            <a className="btn btn-line-icon btn-line-icon-small btn-line-medium slide-left" href={`/blog/${prevPost.slug}`} aria-label="Previous Article">
                              <i>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                  <path d="M7.2,18v-3.6h3.6v3.6h-3.6ZM3.6,7.2H0v3.6h3.6v3.6h3.6v-3.6h10.8v-3.6H7.2v-3.6h-3.6s0,3.6,0,3.6ZM7.2,3.6h3.6V0h-3.6v3.6Z" />
                                </svg>
                              </i>
                              <span className="btn-caption mxd-scramble">Prev</span>
                            </a>
                            <a className="mxd-article-navigation__link" href={`/blog/${prevPost.slug}`}>
                              <span>{prevPost.title}</span>
                            </a>
                          </>
                        )}
                      </div>
                      <div className="col-6 mxd-article-navigation__navitem right">
                        {nextPost && (
                          <>
                            <a className="btn btn-line-icon btn-line-icon-small btn-line-medium slide-right" href={`/blog/${nextPost.slug}`} aria-label="Next Article">
                              <span className="btn-caption mxd-scramble">Next</span>
                              <i>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                                  <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                                </svg>
                              </i>
                            </a>
                            <a className="mxd-article-navigation__link" href={`/blog/${nextPost.slug}`}>
                              <span>{nextPost.title}</span>
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Article Navigation End */}

            </div>
            {/* Article Container End */}

          </div>
        </div>
      </div>
      {/* Section - Blog Article End */}

      {/* Section - More on Topic Start */}
      <div className="mxd-section blur-section pinned-section padding-top-subtitle-mobile padding-bottom-preview">
        <div className="pinned-section__inner">
          <div className="mxd-container grid-l-container">

            {/* Block - Section Title v03 Start */}
            <div className="mxd-block">
              <div className="mxd-section-title pre-subtitle-s">
                <div className="container-fluid p-0">
                  <div className="row g-0 d-flex flex-column-reverse flex-xl-row">
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-section-title__title">
                        <h2 className="reveal-type">More on topic</h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-controls">
                        <div className="mxd-section-title__controls pre-title justify-end anim-uni-in-up">
                          <a className="btn btn-line btn-line-default" href="/blog">
                            <span className="btn-caption mxd-scramble">All Articles</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title v03 End */}

            {/* Block - Blog Preview Grid x3 Start */}
            <div className="mxd-block">
              <div className="mxd-blog-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-blog-grid__gallery">
                    {relatedPosts.map((related) => (
                      <div className="col-12 col-lg-4 mxd-blog-item animate-card-3" key={related.slug}>
                        <div className="mxd-blog-item__date">
                          <span className="meta-date">{related.date}</span>
                        </div>
                        <a
                          className="mxd-blog-item__media active-cursor-permanent"
                          data-cursor-text={related.linked ? "Read Post" : "Contact Us"}
                          href={related.linked ? `/blog/${related.slug}` : "/contact"}
                        >
                          <img loading="lazy" decoding="async" src={related.image} alt={related.title} />
                        </a>
                        <div className="mxd-blog-item__caption">
                          <div className="mxd-blog-item__title">
                            <a className="blog-name-m" href={related.linked ? `/blog/${related.slug}` : "/contact"}>
                              {related.title}
                            </a>
                          </div>
                          <div className="mxd-blog-item__tags">
                            {related.tags?.map((tag) => (
                              <span key={tag} className="tag tag-s tag-medium mxd-scramble">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Blog Preview Grid x3 End */}

          </div>
          <div className="pinned-section__trigger"></div>
        </div>
      </div>
      {/* Section - More on Topic End */}

      {/* Section - CTA with Marquee Start */}
      <div className="mxd-section blur-section bg-color-opposite">
        <div className="mxd-container fullwidth-container">

          {/* Block - CTA with Marquee Objects Start */}
          <div className="mxd-block">
            <div className="mxd-promo transparent">
              <div className="mxd-promo__wrap auto-height">
                {/* content */}
                <div className="mxd-promo__content">
                  <div className="mxd-promo__btngroup anim-uni-in-up">
                    <a className="btn btn-line btn-line-opposite" href="/contact">
                      <span className="btn-caption mxd-scramble">Write a line</span>
                    </a>
                  </div>
                  <div className="mxd-promo__caption">
                    <a className="active-cursor-accent" data-cursor-text="Contact Us" href="/contact">
                      <h2 className="reveal-type opposite">Have a project in mind? Let&apos;s talk.</h2>
                    </a>
                  </div>
                </div>
                {/* marquee */}
                <div className="mxd-promo__marquee">

                  {/* Marquee Divider Start */}
                  <ServiceMarquee />
                  {/* Marquee Divider End */}

                </div>
              </div>
            </div>
          </div>
          {/* Block - CTA with Marquee Objects End */}

        </div>
      </div>
      {/* Section - CTA with Marquee End */}

    </div>
  );
}

