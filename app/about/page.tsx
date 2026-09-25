import SectionIcon from "@/components/SectionIcon";
import CoreValues from "@/components/CoreValues";

/* About page. Every word of copy is from the old site's about.html (innector-bootstrap-main): Our Story,
   the four numbers, Our Mission, Why Choose Us, Our Core Values (shared component) and the closing CTA.
   Photos are royalty-free Unsplash images, prepared as WebP in public/images/about/. */

const stats: { n: string; caption: string }[] = [
  { n: "250+", caption: "Projects Completed" },
  { n: "200+", caption: "Happy Clients" },
  { n: "20+", caption: "Years Experience" },
  { n: "24/7", caption: "Support Available" },
];

const missionAims = [
  "Deliver innovative digital solutions globally",
  "Provide world-class IT solutions for SMBs worldwide",
  "Deliver exceptional results and exceed our clients' expectations",
  "Work creatively, honestly, & responsibly",
];

const whyPoints: { icon: string; text: string }[] = [
  { icon: "ph-handshake", text: "Long-term partnerships built on trust" },
  { icon: "ph-clock-countdown", text: "Efficient & timely service delivery" },
  { icon: "ph-chats-circle", text: "Ongoing communication throughout projects" },
  { icon: "ph-trend-up", text: "Focus on increasing your revenue" },
  { icon: "ph-seal-check", text: "Guaranteed results and satisfaction" },
];

/* "/01 Our Story"-style heading, as on the home page */
function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="mxd-block">
      <div className="mxd-section-title pre-subtitle-s">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-xl-4 mxd-grid-item">
              <div className="mxd-section-title__data top-number">
                <div className="mxd-section-title__number anim-uni-in-up">
                  <span className="title-number">
                    <SectionIcon />
                    <span className="mxd-scramble">{n}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8 mxd-grid-item">
              <div className="mxd-section-title__title">
                <h2 className="mxd-split-lines">{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
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

      {/* Section - Inner Headline v06 Start */}
      <div className="mxd-section blur-section loading-wrap">
        <div className="mxd-container fullwidth-container">

          {/* Block - Inner Headline v06 Start */}
          <div className="mxd-block">
            <div className="inner-headline fullheight">
              {/* absolute centered headline */}
              <div className="inner-headline__absolute">
                <div className="mxd-container">
                  <div className="inner-headline__centered">
                    <div className="inner-headline__link loading-item">
                      <a className="btn btn-line btn-line-default" href="#story">
                        <span className="btn-caption mxd-scramble">About us</span>
                      </a>
                    </div>
                    <div className="inner-headline__title banners-hover centered loading-item">
                      <h1 className="small">Our journey in transforming{" "}
                        <a className="inner-headline__trigger banners-trigger-1" href="/services">digital experiences</a>{" "}
                        for{" "}
                        <a className="inner-headline__trigger banners-trigger-2" href="/contact">businesses worldwide</a>
                      </h1>
                    </div>
                    {/* banners */}
                    <div className="headline-banner-01 landscape image-01">
                      <img src="/images/about/hero-01-servers.webp" alt="Server infrastructure" />
                    </div>
                    <div className="headline-banner-01 portrait image-02">
                      <img src="/images/about/hero-02-webdev.webp" alt="Web development" />
                    </div>
                    <div className="headline-banner-01 landscape image-03">
                      <img src="/images/about/hero-03-coding.webp" alt="Developers collaborating on code" />
                    </div>
                    <div className="headline-banner-01 portrait image-04">
                      <img src="/images/about/hero-04-laptop.webp" alt="Analytics dashboard" />
                    </div>
                    <div className="headline-banner-02 portrait image-05">
                      <img src="/images/about/hero-05-handshake.webp" alt="A handshake between business partners" />
                    </div>
                    <div className="headline-banner-02 landscape image-06">
                      <img src="/images/about/hero-06-earth.webp" alt="The Earth at night, connected by city lights" />
                    </div>
                    <div className="headline-banner-02 portrait image-07">
                      <img src="/images/about/hero-07-towers.webp" alt="Corporate towers" />
                    </div>
                    <div className="headline-banner-02 landscape image-08">
                      <img src="/images/about/hero-08-highfive.webp" alt="Colleagues celebrating a success" />
                    </div>
                  </div>
                </div>
              </div>
              {/* bottom data line */}
              <div className="inner-headline__dataline">
                <div className="mxd-container">
                  <div className="headline-dataline">
                    <div className="headline-dataline__socials">
                      <ul className="mxd-socials-line centered-mobile">
                        <li className="loading-item">
                          <a className="mxd-socials-line__link" href="https://twitter.com/Innectornet" target="_blank">
                            <span className="mxd-scramble">Twitter</span>
                          </a>
                        </li>
                        <li className="loading-item">
                          <a className="mxd-socials-line__link" href="https://www.instagram.com/innectoritsolutions/" target="_blank">
                            <span className="mxd-scramble">Instagram</span>
                          </a>
                        </li>
                        <li className="loading-item">
                          <a className="mxd-socials-line__link" href="https://www.facebook.com/innectornet.local" target="_blank">
                            <span className="mxd-scramble">Facebook</span>
                          </a>
                        </li>
                        <li className="loading-item">
                          <a className="mxd-socials-line__link" href="https://www.linkedin.com/company/innector-net" target="_blank">
                            <span className="mxd-scramble">LinkedIn</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="headline-dataline__controls loading-item">
                      <a className="btn btn-line-icon btn-line-icon-small btn-line-default slide-down" href="#story">
                        <span className="btn-caption mxd-scramble">Scroll to explore</span>
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                            <path d="M18,10.8h-3.6v-3.6h3.6v3.6ZM7.2,14.4v3.6h3.6v-3.6h3.6v-3.6h-3.6V0h-3.6v10.8h-3.6v3.6s3.6,0,3.6,0ZM3.6,10.8v-3.6H0v3.6h3.6Z" />
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mxd-container grid-l-container">
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
                          <span className="current-item">About Us
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Inner Headline v06 End */}

        </div>
      </div>
      {/* Section - Inner Headline v06 End */}

      {/* Section - Parallax Divider Image Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div
              className="mxd-divider__image parallax-img"
              style={{ backgroundImage: "url(/images/about/office-wide.webp)" }}
              role="img"
              aria-label="A busy open-plan office of software engineers"
            ></div>
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider Image End */}

      {/* Section - Our Story Start */}
      <div id="story" className="mxd-section blur-section padding-top-number padding-bottom-default about-flow">
        <div className="mxd-container grid-l-container">
          <SectionHeading n="/01" title="Our Story" />

          {/* Block - lead paragraph */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-4 mxd-grid-item"></div>
                <div className="col-12 col-xl-8 mxd-grid-item">
                  <div className="mxd-section-title__manifest title-manifest-s no-padding-mobile">
                    <p className="manifest manifest-s mxd-split-lines">
                      Innector was established in 2018 with a vision to deliver world-class IT solutions to businesses globally.{" "}
                      <span>
                        Operating with a talented team and multinational expertise, we have grown from a focused startup to a trusted international partner
                        for SMBs across various industries in the USA, Canada, Australia, Dubai, and Qatar.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block - photo + story text */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0 about-story">
                <div className="col-12 col-xl-6 mxd-grid-item">
                  <div className="about-figure about-figure--story anim-uni-in-up">
                    <img src="/images/about/story-team.webp" width={1600} height={1067} alt="The Innector team collaborating around laptops" />
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item">
                  <div className="about-prose">
                    <p className="anim-uni-in-up">
                      Our IT services encompass a wide range of technologies and digital marketing solutions tailored for businesses, entrepreneurs, SMEs,
                      large enterprises, startups, and other ventures. We pride ourselves on being a creative business hub where online branding
                      experience meets innovative technology solutions.
                    </p>
                    <p className="anim-uni-in-up">
                      At Innector, dynamic &amp; multifaceted international brand consultants, creative teams, and local experts all collaborate to provide
                      clients with competitive marketing communication solutions that drive real results.
                    </p>
                    <p className="anim-uni-in-up">
                      Within a short span of time, we&apos;ve established ourselves as a trusted international IT provider helping businesses worldwide grow
                      by boosting their online presence and helping them achieve maximum profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block - numbers */}
          <div className="mxd-block">
            <div className="mxd-stats-lines about-stats">
              {stats.map((s) => (
                <div className="mxd-stats-lines__item" key={s.caption}>
                  <div className="mxd-stats-lines__divider divider-top"></div>
                  <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                    <div className="mxd-stats-lines__number">
                      <p>{s.n}</p>
                    </div>
                    <div className="mxd-stats-lines__caption">
                      <p>{s.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Section - Our Story End */}

      {/* Section - Global footprint (parallax image with title) Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div
              className="mxd-divider__image parallax-img"
              style={{ backgroundImage: "url(/images/about/global-night.webp)" }}
              role="img"
              aria-label="The Earth at night, lit by city lights"
            ></div>
            <div className="mxd-divider__cover cover-06"></div>
            <div className="mxd-divider__content">
              <div className="mxd-divider__btngroup anim-uni-slide-up">
                <span className="tag tag-m tag-permanent">Trusted international partner for SMBs</span>
              </div>
              <div className="mxd-divider__caption about-footprint">
                <h2 className="reveal-type permanent">USA, Canada, Australia, Dubai &amp; Qatar</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Global footprint End */}

      {/* Section - Our Mission Start */}
      <div className="mxd-section blur-section padding-top-default padding-bottom-default about-flow">
        <div className="mxd-container grid-l-container">
          <SectionHeading n="/02" title="Our Mission" />

          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-4 mxd-grid-item"></div>
                <div className="col-12 col-xl-8 mxd-grid-item">
                  <div className="mxd-section-title__manifest title-manifest-s no-padding-mobile">
                    <p className="manifest manifest-s mxd-split-lines">
                      In an era where digital presence is crucial to an organization&apos;s growth and success, you simply cannot afford to get left
                      behind. <span>At Innector, we aim to:</span>
                    </p>
                  </div>
                  <ol className="about-points">
                    {missionAims.map((aim, i) => (
                      <li className="anim-uni-in-up" key={aim}>
                        <span className="about-points__num">{String(i + 1).padStart(2, "0")}</span>
                        <span className="about-points__text">{aim}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-block">
            <div className="about-figure about-figure--wide anim-uni-in-up">
              <img src="/images/about/mission-team.webp" width={1600} height={1067} alt="A team planning a project together at a whiteboard of sticky notes" />
            </div>
          </div>
        </div>
      </div>
      {/* Section - Our Mission End */}

      {/* Section - Why Choose Us Start */}
      <div className="mxd-section blur-section padding-top-default padding-bottom-default about-flow why-choose">
        <div className="mxd-container grid-l-container">
          <SectionHeading n="/03" title="Why Choose Us" />

          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-4 mxd-grid-item why-choose__media">
                  <div className="about-figure about-figure--tall anim-uni-in-up">
                    <img src="/images/about/why-handshake.webp" width={1400} height={1750} alt="Two business partners shaking hands" />
                  </div>
                </div>
                <div className="col-12 col-xl-8 mxd-grid-item">
                  <p className="about-intro anim-uni-in-up">Working with Innector offers numerous advantages that set us apart from the competition:</p>
                  <ol className="about-points about-points--icons">
                    {whyPoints.map((pt, i) => (
                      <li className="anim-uni-in-up" key={pt.text}>
                        <span className="about-points__num">{String(i + 1).padStart(2, "0")}</span>
                        <span className="about-points__text">{pt.text}</span>
                        <i className={`ph ${pt.icon} about-points__icon`}></i>
                      </li>
                    ))}
                  </ol>
                  <div className="about-callout anim-uni-in-up">
                    <span className="about-callout__num">20+</span>
                    <p>
                      Our experts have over 20 years of combined experience and are well-versed in various aspects of IT and digital marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Why Choose Us End */}

      {/* Section - Our Core Values Start */}
      <CoreValues />
      {/* Section - Our Core Values End */}

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
                      <span className="btn-caption mxd-scramble">Get Started Today</span>
                    </a>
                  </div>
                  <div className="mxd-promo__caption">
                    <a className="active-cursor-accent" data-cursor-text="Contact Us" href="/contact">
                      <h2 className="reveal-type opposite">Ready to Start Your Digital Journey?</h2>
                    </a>
                  </div>
                  <p className="about-cta__lead anim-uni-in-up">Let&apos;s work together to transform your business and achieve your digital goals.</p>
                </div>
                {/* marquee */}
                <div className="mxd-promo__marquee">

                  {/* Marquee Divider Start */}
                  <div className="marquee marquee-left--gsap">
                    <div className="marquee__toleft marquee__images">
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">Digital Marketing</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/digitalmarketing.jpg" alt="Innector digital marketing" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">Corporate Branding</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/innectorbranding.jpg" alt="Innector corporate branding" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">Custom Software</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/customsoftware.jpg" alt="Innector custom software" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">IT Infrastructure</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/datacenter.jpg" alt="Innector IT infrastructure" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">Mobile App Development</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/mobile-app.jpg" alt="Innector mobile app development" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">ERP Systems</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/erp-image.jpg" alt="Innector ERP systems" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">Custom AI Development</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/brain-g216ffd9b8_1920-1024x780.jpg" alt="Innector custom AI development" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">Digital Marketing</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/digitalmarketing.jpg" alt="Innector digital marketing" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">Corporate Branding</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/innectorbranding.jpg" alt="Innector corporate branding" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">Custom Software</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/customsoftware.jpg" alt="Innector custom software" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">IT Infrastructure</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/datacenter.jpg" alt="Innector IT infrastructure" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">Mobile App Development</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/mobile-app.jpg" alt="Innector mobile app development" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">ERP Systems</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/erp-image.jpg" alt="Innector ERP systems" />
                        </div>
                      </div>
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <span className="tag tag-s tag-medium-opposite mxd-scramble">Custom AI Development</span>
                        </div>
                        <div className="marquee__image">
                          <img src="/images/innector/brain-g216ffd9b8_1920-1024x780.jpg" alt="Innector custom AI development" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Marquee Divider End */}

                </div>
              </div>
            </div>
          </div>
          {/* Block - CTA with Marquee Objects End */}

        </div>
      </div>
      {/* Section - CTA with Marquee End */}
    </>
  );
}
