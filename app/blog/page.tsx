import { getLinkedPosts } from "@/lib/blog-posts";
import ServiceMarquee from "@/components/ServiceMarquee";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import { SEO } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = SEO.blog;

// getLinkedPosts() (not the raw blogPosts array) so this only ever lists real, clickable posts, newest-published
// first. Every list below is derived from it so the page degrades to a clean empty state automatically instead of
// crashing on blogPosts[0] being undefined whenever there are none.
const posts = getLinkedPosts();
const featuredPost = posts[0];
const remainingPosts = posts.slice(1);
const recentPosts = posts.slice(1, 4);
const categories = Array.from(
  posts.reduce((map, post) => {
    post.tags?.forEach((tag) => map.set(tag, (map.get(tag) ?? 0) + 1));
    return map;
  }, new Map<string, number>())
).map(([name, count]) => ({ name, count }));

export default function BlogPage() {
  return (
    <div className="mxd-page-content inner-page-content">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      {/* Blur Effect Start */}
      <div className="blur-container">
        <div className="blur-layer blur-1"></div>
        <div className="blur-layer blur-2"></div>
        <div className="blur-layer blur-3"></div>
        <div className="blur-layer blur-4"></div>
        <div className="blur-layer blur-5"></div>
        <div className="blur-layer blur-6"></div>
        <div className="blur-layer blur-7"></div>
        <div className="blur-layer blur-8"></div>
      </div>
      {/* Blur Effect End */}

      {/* Section - Inner Headline v01 Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container grid-l-container">

          {/* Block - Inner Headline v01 Start */}
          <div className="mxd-block loading-wrap">
            <div className="inner-headline margin-bottom-subtitle">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    {/* breadcrumbs */}
                    <div className="inner-headline__breadcrumbs loading-fade">
                      <div className="breadcrumbs__nav">
                        <span>
                          <a href="/">
                            <span className="mxd-scramble">Home</span>
                          </a>
                        </span>
                        <span className="current-item">Blog</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* content */}
                    <div className="inner-headline__content has-large-title">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-xl-8 mxd-grid-item">
                            <div className="inner-headline__title pre-subtitle-large loading-item">
                              <h1 className="large">Blog{posts.length > 0 && <sup>({posts.length})</sup>}</h1>
                            </div>
                            <div className="inner-headline__subtitle loading-item">
                              <p>Insights for businesses <span>choosing who builds their next project.</span></p>
                            </div>
                          </div>
                          {categories.length > 0 && (
                            <div className="col-12 col-xl-4 mxd-grid-item">
                              <div className="inner-headline__tags align-end-desktop tags-large-subtitle">
                                {categories.map((cat) => (
                                  <a className="loading-item" href="#0" key={cat.name}>
                                    <span className="tag tag-m meta-tag mxd-scramble">{cat.name}</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Inner Headline v01 End */}

        </div>
      </div>
      {/* Section - Inner Headline v01 End */}

      {/* Section - Blog Start */}
      <div className="mxd-section blur-section padding-bottom-default">
        <div className="mxd-container grid-l-container">
          <div className="mxd-posts-area loading-fade">

            {/* Posts Container Start */}
            <div className="mxd-posts-container mxd-grid-item">
              {featuredPost ? (
                <>
                  {/* Featured Post Start */}
                  <article className="mxd-post post-featured">
                    <a
                      className="post-featured__container active-cursor-permanent"
                      data-cursor-text="Read Post"
                      href={`/blog/${featuredPost.slug}`}
                    >
                      <div className="post-featured__thumb">
                        <img loading="lazy" decoding="async" src={featuredPost.image} alt={featuredPost.title} />
                        <div className="post-featured__cover"></div>
                      </div>
                      <div className="post-featured__content">
                        <div className="post-featured__meta">
                          <div className="post-featured__data">
                            <span className="tag tag-s-mobile tag-permanent mxd-scramble">{featuredPost.date}</span>
                            <span className="tag tag-s-mobile tag-permanent mxd-scramble">{featuredPost.readTime}</span>
                          </div>
                          <div className="post-featured__categories">
                            {featuredPost.tags?.map((tag) => (
                              <span key={tag} className="tag tag-s-mobile tag-permanent mxd-scramble">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div className="post-featured__info">
                          <h2 className="post-featured__title permanent">{featuredPost.title}</h2>
                          <div className="post-featured__excerpt">
                            <p className="t-medium t-permanent">{featuredPost.excerpt}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </article>
                  {/* Featured Post End */}

                  {/* Regular Posts Group Start */}
                  <div className="mxd-posts-list">
                    {remainingPosts.map((post) => (
                      <article className="mxd-post post-simple" key={post.slug}>
                        <div className="post-simple__divider top"></div>
                        <a
                          className="post-simple__container active-cursor-image active-cursor-permanent"
                          data-cursor-image={post.image}
                          data-cursor-text={post.linked ? "Read Post" : "Contact Us"}
                          href={post.linked ? `/blog/${post.slug}` : "/contact"}
                        >
                          <div className="container-fluid px-0 post-simple__inner">
                            <div className="row gx-0">
                              <div className="col-12">
                                <div className="post-simple__meta">
                                  {post.tags?.map((tag) => (
                                    <span key={tag} className="meta-tag comma-tag">{tag}</span>
                                  ))}
                                  <span className="meta-time">{post.readTime ?? "3 min read"}</span>
                                </div>
                              </div>
                              <div className="col-12 col-xxl-7">
                                <div className="post-simple__title">
                                  <h3>{post.title}</h3>
                                  <div className="post-simple__data">
                                    <span className="meta-author comma-tag">Innector Team</span>
                                    <span className="meta-date">{post.date}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-xxl-5">
                                <div className="post-simple__excerpt">
                                  <p className="t-medium">{post.excerpt}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="post-simple__divider bottom"></div>
                      </article>
                    ))}
                  </div>
                  {/* Regular Posts Group End */}
                </>
              ) : (
                /* Empty state: the old articles are retired, new ones (built around the "hire a company or
                   freelancer" keyword cluster) haven't been written yet. */
                <div className="mxd-post post-featured" style={{ textAlign: "center", padding: "6rem 2rem" }}>
                  <p className="t-bold t-large">New articles are on the way.</p>
                  <p className="t-medium" style={{ marginTop: "1.2rem" }}>
                    In the meantime, <a href="/contact">get in touch</a> and we&apos;ll answer your questions directly.
                  </p>
                </div>
              )}
            </div>
            {/* Posts Container End */}

            {/* Sidebar Start */}
            <div className="mxd-sidebar mxd-grid-item">

              {/* search widget */}
              <div className="mxd-sidebar__widget widget-search">
                <div className="widget-search__form">
                  <form className="form search-form" action="#0" method="get">
                    <input id="search" type="search" name="search" placeholder="Search" />
                    <button className="btn btn-form no-scale btn-absolute-right btn-line-medium" type="submit" aria-label="Search">
                      <i className="ph ph-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>

              {/* categories widget - derived from actual post tags now (see categories above), so it's hidden
                  entirely rather than showing fake counts while there are no posts to categorize */}
              {categories.length > 0 && (
                <div className="mxd-sidebar__widget">
                  <div className="widget__title">
                    <p>/ Discover</p>
                  </div>
                  <ul className="widget__categories">
                    {categories.map((cat) => (
                      <li className="categories__item" key={cat.name}>
                        <a href="#0" className="categories__link">{cat.name}
                          <span>{String(cat.count).padStart(2, "0")}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* recent posts */}
              {recentPosts.length > 0 && (
                <div className="mxd-sidebar__widget">
                  <div className="widget__title">
                    <p>/ Latest posts</p>
                  </div>
                  <ul className="widget__recent-posts">
                    {recentPosts.map((post) => (
                      <li className="recent-post__item" key={post.slug}>
                        <div className="recent-post__thumb">
                          <a href={post.linked ? `/blog/${post.slug}` : "/contact"}>
                            <img loading="lazy" decoding="async" src={post.image} alt={post.title} />
                          </a>
                        </div>
                        <div className="recent-post__content">
                          <div className="recent-post__meta">
                            {post.tags?.map((tag) => (
                              <a href="#0" key={tag}>
                                <span className="meta-tag tag-s comma-tag mxd-scramble">{tag}</span>
                              </a>
                            ))}
                          </div>
                          <div className="recent-post__title">
                            <a href={post.linked ? `/blog/${post.slug}` : "/contact"}>{post.title}</a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* promo */}
              <div className="mxd-sidebar__widget widget-ad">
                <a className="widget__image" href="/contact">
                  <img loading="lazy" decoding="async" width={1200} height={658} src="/images/innector/bannerfallback.webp" alt="Talk to Innector" />
                </a>
                <div className="widget__tags">
                  <span className="tag tag-m tag-bg permanent">Free Consultation</span>
                </div>
              </div>

              {/* about widget */}
              <div className="mxd-sidebar__widget bg-base-tint radius-m widget-about">
                <div className="widget__title">
                  <p>/ About</p>
                </div>
                <div className="widget__descr">
                  <p className="t-small">Innector shares practical insights for businesses worldwide
                    <span>choosing the right partner to build their next project.</span>
                  </p>
                </div>
              </div>

              {/* socials */}
              <div className="mxd-sidebar__widget bg-base-tint radius-m widget-socials">
                <div className="widget__title">
                  <p>/ Ecosystem</p>
                </div>
                <div className="widget__social-links-small">
                  {/* item */}
                  <div className="social-links-small__item">
                    <div className="social-links-small__divider"></div>
                    <a className="social-links-small__link" href="https://twitter.com/Innectornet" target="_blank" rel="noreferrer">
                      <p className="social-links-small__title">Twitter</p>
                      <div className="social-links-small__icon">
                        <i>
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 18 18" style={{ enableBackground: "new 0 0 18 18" } as React.CSSProperties} xmlSpace="preserve">
                            <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z
                            M0,18h3.6v-3.6H0V18z" />
                          </svg>
                        </i>
                      </div>
                    </a>
                    <div className="social-links-small__divider"></div>
                  </div>
                  {/* item */}
                  <div className="social-links-small__item">
                    <div className="social-links-small__divider"></div>
                    <a className="social-links-small__link" href="https://www.instagram.com/innectoritsolutions/" target="_blank" rel="noreferrer">
                      <p className="social-links-small__title">Instagram</p>
                      <div className="social-links-small__icon">
                        <i>
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 18 18" style={{ enableBackground: "new 0 0 18 18" } as React.CSSProperties} xmlSpace="preserve">
                            <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z
                            M0,18h3.6v-3.6H0V18z" />
                          </svg>
                        </i>
                      </div>
                    </a>
                    <div className="social-links-small__divider"></div>
                  </div>
                  {/* item */}
                  <div className="social-links-small__item">
                    <div className="social-links-small__divider"></div>
                    <a className="social-links-small__link" href="https://www.facebook.com/innectornet.local" target="_blank" rel="noreferrer">
                      <p className="social-links-small__title">Facebook</p>
                      <div className="social-links-small__icon">
                        <i>
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 18 18" style={{ enableBackground: "new 0 0 18 18" } as React.CSSProperties} xmlSpace="preserve">
                            <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z
                            M0,18h3.6v-3.6H0V18z" />
                          </svg>
                        </i>
                      </div>
                    </a>
                    <div className="social-links-small__divider"></div>
                  </div>
                  {/* item */}
                  <div className="social-links-small__item">
                    <div className="social-links-small__divider"></div>
                    <a className="social-links-small__link" href="https://www.linkedin.com/company/innector-net" target="_blank" rel="noreferrer">
                      <p className="social-links-small__title">LinkedIn</p>
                      <div className="social-links-small__icon">
                        <i>
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 18 18" style={{ enableBackground: "new 0 0 18 18" } as React.CSSProperties} xmlSpace="preserve">
                            <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z
                            M0,18h3.6v-3.6H0V18z" />
                          </svg>
                        </i>
                      </div>
                    </a>
                    <div className="social-links-small__divider"></div>
                  </div>
                </div>
              </div>

            </div>
            {/* Sidebar End */}

          </div>
        </div>
      </div>
      {/* Section - Blog End */}

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
