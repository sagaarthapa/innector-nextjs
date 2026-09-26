import HeroVideoCycle from "@/components/HeroVideoCycle";
import SectionIcon from "@/components/SectionIcon";
import CoreValues from "@/components/CoreValues";
import TechStack from "@/components/TechStack";
import type { Metadata } from "next";
import { SEO } from "@/lib/seo";

export const metadata: Metadata = SEO.home;

const missionAims: [string, string][] = [
  ["Deliver innovative digital solutions ", "to businesses worldwide."],
  ["Provide reliable, scalable IT solutions ", "for growing SMBs globally."],
  ["Deliver exceptional results ", "and exceed our clients' expectations."],
  ["Work creatively, ", "honestly, & responsibly."],
];

const clientBenefits: [string, string][] = [
  ["Long-term ", "partnerships"],
  ["Efficient & timely ", "services"],
  ["Ongoing ", "communication"],
  ["Increased ", "revenue"],
  ["Guaranteed ", "results"],
];

// `color`: full-colour badge artwork that has to stay as supplied; the rest are wordmarks that the
// marquee flattens to a single-colour silhouette.
const clients: { logo: string; name: string; color?: boolean }[] = [
  { logo: "wurth.png", name: "Würth" },
  { logo: "grass-tunes.png", name: "Grass Tunes", color: true },
  { logo: "acec.png", name: "ACEC" },
  { logo: "trend-qa.png", name: "Trend.QA" },
  { logo: "candy-station.png", name: "Candy Station", color: true },
  { logo: "qgec.png", name: "QGEC" },
  { logo: "numen.png", name: "Numen" },
  { logo: "global-enterprises.png", name: "Global Enterprises" },
];

// "Selected projects": the client sites shown in the grid. Images live in public/images/case-studies
// (WebP at the template's own card sizes: 850x1200 portrait, 1280x850 landscape, 1200x1200 square).
// `image` is the card's resting image. `more` (optional) lists extra frames from the same folder that the
// hover slideshow cycles through; without it the hover layer just repeats `image`.
const CASE_DIR = "/images/case-studies";
const caseStudies: { title: string; tags: string[]; image: string; w: number; h: number; more?: string[] }[] = [
  { title: "Candy Station", tags: ["E-commerce", "Web App", "UI/UX"], image: "candy-station", w: 850, h: 1200 },
  { title: "Naaz Overseas", tags: ["Corporate", "Feedback", "Web"], image: "naaz-overseas", w: 1280, h: 850 },
  { title: "ACEC", tags: ["Corporate", "Web Development", "UI/UX"], image: "acec", w: 1200, h: 1200 },
  { title: "Trend.QA", tags: ["E-commerce", "Marketplace", "Web"], image: "trend-qa", w: 1280, h: 850 },
  { title: "Spice Idea", tags: ["Agency", "Web Development", "Branding"], image: "spice-idea", w: 850, h: 1200 },
  { title: "Numen", tags: ["Portfolio", "Web Development", "UI/UX"], image: "numen", w: 1200, h: 1200 },
  { title: "Qatar Mobile", tags: ["E-commerce", "Web Development"], image: "qatar-mobile", w: 1200, h: 1200 },
];
// "All Works" preview: 800x450 crops of the same sites; hover cycles through the others.
const worksPreview = { main: "trend-qa", layers: ["acec", "candy-station", "naaz-overseas", "numen", "qatar-mobile", "spice-idea"] };

export default function Home() {
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

      {/* Hero Section Start */}
      <div className="mxd-section mxd-hero-section no-padding loading-wrap">
        {/* fullscreen hero */}
        <div className="mxd-hero-03">
          <div className="mxd-hero-03__headline">
            <a className="active-cursor-accent" data-cursor-text="Let's Chat" href="/contact">
              <h1 className="permanent loading-split">Introducing enhanced digital creativity</h1>
            </a>
            <div className="mxd-hero-media__small">
              <div className="mxd-hero-media__wrapper" data-flip-element="wrapper" data-flip-id="auto-2">
                <div className="mxd-hero-media__scaling-media" data-flip-element="target">
                  <HeroVideoCycle />
                </div>
              </div>
            </div>
          </div>
          {/* control left */}
          <div className="mxd-hero-03__control-left loading-item">
            <a className="btn btn-line btn-line-small btn-line-medium" href="/managed-it-services">
              <span className="btn-caption mxd-scramble">Managed IT</span>
            </a>
          </div>
          {/* control right */}
          <div className="mxd-hero-03__control-right loading-item">
            <a className="btn btn-line btn-line-small btn-line-medium" href="/services">
              <span className="btn-caption mxd-scramble">Services</span>
            </a>
          </div>
          {/* bottom group */}
          <div className="mxd-hero-03__bottom">
            <div className="mxd-hero-03__dataline loading-fade">
              <div className="mxd-hero-03__socials mxd-grid-item">
                <ul className="mxd-socials-line">
                  <li>
                    <a className="mxd-socials-line__link" href="https://twitter.com/Innectornet" target="_blank">
                      <span className="mxd-scramble">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a className="mxd-socials-line__link" href="https://www.instagram.com/innectoritsolutions/" target="_blank">
                      <span className="mxd-scramble">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a className="mxd-socials-line__link" href="https://www.facebook.com/innectornet.local" target="_blank">
                      <span className="mxd-scramble">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a className="mxd-socials-line__link" href="https://www.linkedin.com/company/innector-net" target="_blank">
                      <span className="mxd-scramble">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mxd-hero-03__brand mxd-grid-item">
                <span className="tag tag-m mxd-scramble">Innector IT Solutions</span>
              </div>
              <div className="mxd-hero-03__controls mxd-grid-item">
                <a className="btn btn-line-icon btn-line-default slide-down" href="#about">
                  <span className="btn-caption mxd-scramble">Scroll to explore</span>
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                      <path d="M18,10.8h-3.6v-3.6h3.6v3.6ZM7.2,14.4v3.6h3.6v-3.6h3.6v-3.6h-3.6V0h-3.6v10.8h-3.6v3.6s3.6,0,3.6,0ZM3.6,10.8v-3.6H0v3.6h3.6Z"/>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* media large container */}
        <div className="mxd-hero-media">
          <div className="mxd-hero-media__contain">
            <div className="mxd-hero-media__large">
              <div className="mxd-hero-media__wrapper" data-flip-element="wrapper" data-flip-id="auto-1"></div>
              <div className="mxd-hero-media__placeholder"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Section - Statistics Lines Start */}
      <div id="about" className="mxd-section blur-section pinned-section padding-top-number padding-bottom-tag-m">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-number">
                      <div className="mxd-section-title__number pre-manifest anim-uni-in-up">
                        <span className="title-number">
                          <SectionIcon />
                          <span className="mxd-scramble">/01</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    {/* Manifest Start */}
                    <div className="mxd-section-title__manifest title-manifest-s no-padding-mobile">
                      <a className="manifest manifest-s mxd-split-lines active-cursor-accent" data-cursor-text="About us" href="/about">
                        From web platforms to enterprise systems,{" "}
                        <span>every solution we build is crafted with care to help your business grow online.</span>
                      </a>
                    </div>
                    {/* Manifest End */}

                    {/* Statistics Lines Start */}
                    <div className="mxd-stats-lines manifest-title">
                      <div className="mxd-stats-lines__item">
                        <div className="mxd-stats-lines__divider divider-top"></div>
                        <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-1">8+</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Years delivering IT solutions worldwide</p>
                          </div>
                        </div>
                      </div>
                      <div className="mxd-stats-lines__item">
                        <div className="mxd-stats-lines__divider divider-top"></div>
                        <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-2">5</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Countries and regions we actively serve</p>
                          </div>
                        </div>
                      </div>
                      <div className="mxd-stats-lines__item">
                        <div className="mxd-stats-lines__divider divider-top"></div>
                        <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-3">9</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Core IT and digital services offered</p>
                          </div>
                        </div>
                      </div>
                      <div className="mxd-stats-lines__item">
                        <div className="mxd-stats-lines__divider divider-top"></div>
                        <div className="mxd-stats-lines__inner mxd-stats-lines__anim">
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-4">20+</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Years of combined team experience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Statistics Lines End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Statistics Lines End */}

      {/* Section - Niche Cards Start */}
      <div className="mxd-section blur-section padding-bottom-grid-l-to-title">
        <div className="mxd-container grid-l-container">
          {/* Block - Niche Cards Start */}
          <div className="mxd-block">
            <div className="mxd-niche-cards">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {/* card item - high */}
                  <div className="col-12 col-xl-4 mxd-niche-cards__column mxd-grid-item animate-card-2">
                    <div className="mxd-niche-cards__item">
                      <div className="mxd-niche-cards__inner">
                        <div className="mxd-niche-cards__title">
                          <div className="mxd-niche-cards__name">
                            <p>Enterprises</p>
                          </div>
                          <div className="mxd-niche-cards__tags">
                            <span className="tag tag-m tag-medium mxd-scramble">ERP Systems</span>
                            <span className="tag tag-m tag-medium mxd-scramble">Custom Software</span>
                            <span className="tag tag-m tag-medium mxd-scramble">Integration</span>
                            <span className="tag tag-m tag-medium mxd-scramble">IT Infrastructure</span>
                          </div>
                        </div>
                        <div className="mxd-niche-cards__descr wide">
                          <p className="t-bold t-medium">
                            Bespoke software, ERP integration and dependable infrastructure{" "}
                            <span>that streamline operations at scale.</span>
                          </p>
                        </div>
                        <div className="mxd-niche-cards__image absolute-desktop-bottom fill-space">
                          <img loading="lazy" decoding="async" src="/images/stock/enterprise-skyscraper.webp" alt="Modern corporate skyscrapers" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card items - rows */}
                  <div className="col-12 col-xl-8 mxd-niche-cards__column animate-card-2">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 mxd-grid-item">
                          <div className="mxd-niche-cards__item">
                            <div className="mxd-niche-cards__inner fixed-height-desktop space-between-desktop">
                              <div className="mxd-niche-cards__title">
                                <div className="mxd-niche-cards__name">
                                  <p>AI-powered solutions</p>
                                </div>
                                <div className="mxd-niche-cards__tags">
                                  <span className="tag tag-m tag-medium mxd-scramble">Chatbots</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Automation</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Machine Learning</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Custom AI</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Analytics</span>
                                </div>
                              </div>
                              <div className="mxd-niche-cards__descr wide">
                                <p className="t-bold t-medium">
                                  Intelligent chatbots, workflow automation,{" "}
                                  <span>and custom AI-driven applications for your business.</span>
                                </p>
                              </div>
                              <div className="mxd-niche-cards__image absolute-desktop-full">
                                <img loading="lazy" decoding="async" src="/img/illustrations/niche02.webp" alt="AI-powered solutions" />
                                <div className="mxd-niche-cards__gradient gradient-linear"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item animate-card-2">
                          <div className="mxd-niche-cards__item">
                            <div className="mxd-niche-cards__inner permanent fixed-height-desktop space-between-desktop">
                              <div className="mxd-niche-cards__title">
                                <div className="mxd-niche-cards__name">
                                  <p className="permanent">SMBs</p>
                                </div>
                                <div className="mxd-niche-cards__tags">
                                  <span className="tag tag-m tag-permanent mxd-scramble">Managed IT</span>
                                  <span className="tag tag-m tag-permanent mxd-scramble">Web &amp; Hosting</span>
                                  <span className="tag tag-m tag-permanent mxd-scramble">Security</span>
                                  <span className="tag tag-m tag-permanent mxd-scramble">24/7 Support</span>
                                </div>
                              </div>
                              <div className="mxd-niche-cards__descr wide">
                                <p className="t-bold t-medium t-permanent">
                                  One partner for web, hosting, security and support{" "}
                                  <span>at a predictable monthly cost.</span>
                                </p>
                              </div>
                              <div className="mxd-niche-cards__image absolute-desktop-full">
                                <img loading="lazy" decoding="async" src="/images/innector/bannerfallback.webp" alt="Small and medium business team" />
                                <div className="mxd-niche-cards__gradient gradient-radial"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item animate-card-2">
                          <div className="mxd-niche-cards__item">
                            <div className="mxd-niche-cards__inner fixed-height-desktop space-between-desktop">
                              <div className="mxd-niche-cards__title">
                                <div className="mxd-niche-cards__name">
                                  <p>Startups &amp; entrepreneurs</p>
                                </div>
                                <div className="mxd-niche-cards__tags">
                                  <span className="tag tag-m tag-medium mxd-scramble">Websites</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Mobile Apps</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Branding</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Digital Marketing</span>
                                </div>
                              </div>
                              <div className="mxd-niche-cards__descr short">
                                <p className="t-bold t-medium">
                                  Websites, apps and branding to launch fast,{" "}
                                  <span>and build a strong online presence.</span>
                                </p>
                              </div>
                              <div className="mxd-niche-cards__image absolute-desktop-aside">
                                <img loading="lazy" decoding="async" src="/images/stock/startup-team.webp" alt="Young startup team working around a laptop" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Niche Cards End */}
        </div>
      </div>
      {/* Section - Niche Cards End */}

      {/* Section - Mission & Why Work With Us Start */}
      <div className="mxd-section blur-section padding-top-number padding-bottom-default">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-number">
                      <div className="mxd-section-title__number pre-manifest anim-uni-in-up">
                        <span className="title-number">
                          <SectionIcon />
                          <span className="mxd-scramble">/02</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    {/* Our Mission */}
                    <div className="home-split-group">
                      <div className="mxd-block-split__subtitle pre-manifest">
                        <p className="anim-uni-in-up">
                          <span>/ Our Mission</span>
                        </p>
                      </div>
                      <div className="mxd-block-split__manifest">
                        <p className="manifest manifest-s mxd-split-lines">
                          In an era where digital presence is crucial to an organization&apos;s growth and success, you
                          simply cannot afford to get left behind. <span>At Innector, we aim to:</span>
                        </p>
                      </div>
                      <div className="mxd-block-split__info home-split-list">
                        {missionAims.map(([lead, rest]) => (
                          <div className="split-info__item" key={lead}>
                            <div className="split-info__divider divider-top"></div>
                            <div className="split-info__details">
                              <p className="anim-uni-in-up">
                                {lead}
                                <span>{rest}</span>
                              </p>
                            </div>
                            <div className="split-info__divider divider-bottom"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Why Work With Us */}
                    <div className="home-split-group">
                      <div className="mxd-block-split__subtitle pre-manifest">
                        <p className="anim-uni-in-up">
                          <span>/ Why Work With Us</span>
                        </p>
                      </div>
                      <div className="mxd-block-split__manifest">
                        <p className="manifest manifest-s mxd-split-lines">
                          Working with Innector has several advantages! <span>Our clients enjoy:</span>
                        </p>
                      </div>
                      <div className="mxd-block-split__info home-split-list">
                        {clientBenefits.map(([lead, rest]) => (
                          <div className="split-info__item" key={lead}>
                            <div className="split-info__divider divider-top"></div>
                            <div className="split-info__details">
                              <p className="anim-uni-in-up">
                                {lead}
                                <span>{rest}</span>
                              </p>
                            </div>
                            <div className="split-info__divider divider-bottom"></div>
                          </div>
                        ))}
                      </div>
                      <div className="mxd-block-split__manifest home-split-closing">
                        <p className="t-large t-bold">
                          Our experts have over 20 years of experience{" "}
                          <span>
                            and are well-versed in various aspects of IT and digital marketing. Get in touch with us
                            today!
                          </span>
                        </p>
                        <a className="btn btn-default-icon btn-default-accent slide-right anim-uni-in-up" href="/contact">
                          <span className="btn-caption mxd-scramble">Get in touch</span>
                          <i className="btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                              <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                            </svg>
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Mission & Why Work With Us End */}

      {/* Section - Our Capabilities Start */}
      <div className="mxd-section blur-section padding-bottom-default">
        <div className="mxd-container grid-l-container">
          {/* Block - Section Title v05 Start */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-number">
                      <div className="mxd-section-title__number anim-uni-in-up">
                        <span className="title-number">
                          <SectionIcon />
                          <span className="mxd-scramble">/03</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title">
                      <a className="active-cursor-accent" data-cursor-text="All Services" href="/services">
                        <h2 className="mxd-split-lines">
                          Our
                          <br />
                          capabilities
                        </h2>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title v05 End */}

          {/* Block - Our Capabilities List Start */}
          <div className="mxd-block">
            <div className="mxd-cpb-list mxd-perspective-list">
              {/* [01] Web development */}
              <div className="mxd-cpb-list__item mxd-perspective-list__item">
                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[01]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Web development</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img loading="lazy" decoding="async" src="/images/stock/web-development.webp" alt="Web development" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">
                            Visually appealing, high-performing websites that <span>generate leads and represent your brand.</span>
                          </p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Frontend</span>
                                <span className="meta-tag mxd-scramble">Backend</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">UI/UX</span>
                                <span className="meta-tag mxd-scramble">Performance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-cpb-list__divider bottom"></div>
              </div>
              {/* [02] Mobile app development */}
              <div className="mxd-cpb-list__item mxd-perspective-list__item">
                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[02]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Mobile app development</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img loading="lazy" decoding="async" src="/images/innector/mobile-app.webp" alt="Mobile app development" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">
                            Personalized mobile apps that <span>make it easy for customers to reach your business.</span>
                          </p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">iOS</span>
                                <span className="meta-tag mxd-scramble">Android</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">UX</span>
                                <span className="meta-tag mxd-scramble">Notifications</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-cpb-list__divider bottom"></div>
              </div>
              {/* [03] Corporate branding */}
              <div className="mxd-cpb-list__item mxd-perspective-list__item">
                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[03]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Corporate branding</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img loading="lazy" decoding="async" src="/images/innector/innectorbranding.webp" alt="Corporate branding" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">
                            Clear brand voice and visual identity that <span>help you connect with your audience.</span>
                          </p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Brand Strategy</span>
                                <span className="meta-tag mxd-scramble">Logo Design</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Guidelines</span>
                                <span className="meta-tag mxd-scramble">Visual Identity</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-cpb-list__divider bottom"></div>
              </div>
              {/* [04] Custom software */}
              <div className="mxd-cpb-list__item mxd-perspective-list__item">
                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[04]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Custom software</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img loading="lazy" decoding="async" src="/images/innector/customsoftware.webp" alt="Custom software" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">
                            Bespoke software built around <span>your unique workflows and business needs.</span>
                          </p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Architecture</span>
                                <span className="meta-tag mxd-scramble">Integration</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Automation</span>
                                <span className="meta-tag mxd-scramble">Scalability</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-cpb-list__divider bottom"></div>
              </div>
              {/* [05] IT infrastructure setup */}
              <div className="mxd-cpb-list__item mxd-perspective-list__item">
                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[05]</span>
                        </div>
                        <p className="mxd-cpb-list__name">IT infrastructure setup</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img loading="lazy" decoding="async" src="/images/innector/datacenter.webp" alt="IT infrastructure setup" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">
                            Reliable infrastructure setup, upgrades, and <span>ongoing maintenance for growing teams.</span>
                          </p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Networking</span>
                                <span className="meta-tag mxd-scramble">Servers</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Setup</span>
                                <span className="meta-tag mxd-scramble">Support</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-cpb-list__divider bottom"></div>
              </div>
              {/* [06] Digital marketing */}
              <div className="mxd-cpb-list__item mxd-perspective-list__item">
                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[06]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Digital marketing</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img loading="lazy" decoding="async" src="/images/innector/digitalmarketing.webp" alt="Digital marketing" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">
                            Modern marketing techniques that <span>amplify your online presence and reach.</span>
                          </p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">SEO</span>
                                <span className="meta-tag mxd-scramble">Social Media</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Campaigns</span>
                                <span className="meta-tag mxd-scramble">Analytics</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-cpb-list__divider bottom"></div>
              </div>
              {/* [07] AI-powered chatbots */}
              <div className="mxd-cpb-list__item mxd-perspective-list__item">
                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[07]</span>
                        </div>
                        <p className="mxd-cpb-list__name">AI-powered chatbots</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img loading="lazy" decoding="async" src="/images/stock/ai-chatbot.webp" alt="AI-powered chatbots" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">
                            24/7 intelligent chatbots that <span>answer queries and guide customers instantly.</span>
                          </p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Conversational AI</span>
                                <span className="meta-tag mxd-scramble">NLP</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Support</span>
                                <span className="meta-tag mxd-scramble">Personalization</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-cpb-list__divider bottom"></div>
              </div>
              {/* [08] Business process automation */}
              <div className="mxd-cpb-list__item mxd-perspective-list__item">
                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[08]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Business process automation</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img loading="lazy" decoding="async" src="/images/stock/process-automation.webp" alt="Business process automation" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">
                            Automating repetitive workflows to <span>save time and reduce costly errors.</span>
                          </p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Workflow</span>
                                <span className="meta-tag mxd-scramble">Data Entry</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Efficiency</span>
                                <span className="meta-tag mxd-scramble">Automation</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-cpb-list__divider bottom"></div>
              </div>
              {/* [09] Custom AI development */}
              <div className="mxd-cpb-list__item mxd-perspective-list__item">
                <div className="mxd-cpb-list__divider top"></div>
                <div className="mxd-cpb-list__inner mxd-perspective-list__inner">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-4 mxd-grid-item mxd-cpb-list__title">
                        <div className="mxd-cpb-list__number">
                          <span className="meta-tag">[09]</span>
                        </div>
                        <p className="mxd-cpb-list__name">Custom AI development</p>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-cpb-list__image">
                        <img loading="lazy" decoding="async" src="/img/services/1200x980_cpb06.webp" alt="Custom AI development" />
                      </div>
                      <div className="col-12 col-md-6 col-xl-4 mxd-cpb-list__data">
                        <div className="mxd-cpb-list__descr mxd-grid-item">
                          <p className="t-large t-bold">
                            Tailored AI applications, from recommendations to <span>image recognition and beyond.</span>
                          </p>
                        </div>
                        <div className="mxd-cpb-list__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Machine Learning</span>
                                <span className="meta-tag mxd-scramble">Recognition</span>
                              </div>
                              <div className="col-6 mxd-grid-item mxd-cpb-list__meta">
                                <span className="meta-tag mxd-scramble">Recommendations</span>
                                <span className="meta-tag mxd-scramble">Innovation</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-cpb-list__divider bottom"></div>
              </div>
            </div>
          </div>
          {/* Block - Our Capabilities List End */}
        </div>
      </div>
      {/* Section - Our Capabilities End */}

      {/* Section - Few Of Our Elite Clientele Start */}
      {/* Same band as the About page's closing CTA: inverted bg, reveal-type.opposite heading, logo marquee.
          The logo set is rendered twice so the strip is wider than any viewport once app.js duplicates it. */}
      <div className="mxd-section blur-section bg-color-opposite">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <div className="mxd-promo transparent">
              <div className="mxd-promo__wrap auto-height clients-band">
                <div className="mxd-promo__content">
                  <div className="mxd-promo__caption">
                    <h2 className="reveal-type opposite">Few of our elite clientele</h2>
                  </div>
                </div>
                <div className="mxd-promo__marquee">
                  <div className="marquee marquee-left--gsap">
                    <div className="marquee__toleft marquee__logos clients-marquee align-center">
                      {[0, 1].flatMap((round) =>
                        clients.map((client) => (
                          <div
                            className={`marquee__item item-logoblock item-clientlogo${client.color ? " item-clientlogo--color" : ""}`}
                            key={`${round}-${client.logo}`}
                            aria-hidden={round === 1 ? true : undefined}
                          >
                            <img loading="lazy" decoding="async" src={`/images/clients/${client.logo}`} alt={round === 1 ? "" : client.name} />
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Few Of Our Elite Clientele End */}

      {/* Section - Featured Case Studies (Projects Grid x3 Showcase) Start */}
      <div className="mxd-section blur-section pinned-section padding-top-number case-studies">
        <div className="pinned-section__inner">
          <div className="mxd-container grid-l-container">
            {/* Block - Section Title Start */}
            <div className="mxd-block">
              <div className="mxd-section-title pre-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-number">
                        <div className="mxd-section-title__number anim-uni-in-up">
                          <span className="title-number">
                            <SectionIcon />
                            <span className="mxd-scramble">/04</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-section-title__title">
                        <a className="active-cursor-accent" data-cursor-text="More Works" href="/services">
                          <h2 className="mxd-split-lines">
                            Selected
                            <br />
                            projects
                          </h2>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title End */}

            {/* Block - Projects Grid x3 Showcase Start */}
            <div className="mxd-block">
              <div className="mxd-projects-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-projects-grid__gallery">
                    {caseStudies.map((study) => {
                      const src = `${CASE_DIR}/${study.image}.webp`;
                      return (
                        <div className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-3" key={study.title}>
                          <a
                            className="mxd-project-item__media mxd-img-anim active-cursor-permanent"
                            data-cursor-text="View Work"
                            href="/services"
                          >
                            {/* hover frames (mxdHoverSlideshow needs at least one) */}
                            {(study.more?.length ? study.more.map((m) => `${CASE_DIR}/${m}.webp`) : [src]).map((frame) => (
                              <img loading="lazy" decoding="async"
                                className="mxd-img-anim__absolute"
                                key={frame}
                                src={frame}
                                width={study.w}
                                height={study.h}
                                alt=""
                              />
                            ))}
                            <img loading="lazy" decoding="async"
                              className="mxd-img-anim__main"
                              src={src}
                              width={study.w}
                              height={study.h}
                              alt={`${study.title} website`}
                            />
                          </a>
                          <div className="mxd-project-item__caption">
                            <div className="mxd-project-item__name">
                              <a className="project-name-s" href="/services">
                                {study.title}
                              </a>
                            </div>
                            <div className="mxd-project-item__tags">
                              {study.tags.map((tag) => (
                                <span className="tag tag-s tag-medium mxd-scramble" key={tag}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="row g-0">
                    {/* all projects link */}
                    <div className="mxd-object-link">
                      <div className="container-fluid p-0">
                        <div className="row g-0 mxd-object-link__wrap">
                          <div className="col-12 col-md-6 col-xl-4 mxd-object-link__item justify-start">
                            <div className="mxd-object-link__object mxd-slide-object">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 259 260">
                                <path d="M143.9,0v28.8h-28.8V0h28.8ZM143.9,28.8v28.8h28.8v-28.8h-28.8ZM172.7,57.6v28.8h28.8v-28.8h-28.8ZM230.2,115.2v-28.8h-28.8v28.8H0v28.8h201.4v28.8h28.8v-28.8h28.8v-28.8h-28.8ZM172.7,201.6h28.8v-28.8h-28.8v28.8ZM143.9,230.4h28.8v-28.8h-28.8v28.8ZM114.3,260h28.8v-28.8h-28.8v28.8Z" />
                              </svg>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4 mxd-object-link__item justify-end">
                            <div className="mxd-object-link__content">
                              <div className="mxd-object-link__btnholder anim-uni-in-up">
                                <a className="btn btn-line btn-line-default" href="/services">
                                  <span className="btn-caption mxd-scramble">All Works</span>
                                </a>
                              </div>
                              <a
                                className="mxd-object-link__media mxd-img-anim active-cursor-permanent anim-uni-in-up"
                                data-cursor-text="All Works"
                                href="/services"
                              >
                                {worksPreview.layers.map((slug) => (
                                  <img loading="lazy" decoding="async"
                                    className="mxd-img-anim__absolute centered-y"
                                    key={slug}
                                    src={`${CASE_DIR}/preview/${slug}.webp`}
                                    width={800}
                                    height={450}
                                    alt=""
                                  />
                                ))}
                                <img loading="lazy" decoding="async"
                                  className="mxd-img-anim__main"
                                  src={`${CASE_DIR}/preview/${worksPreview.main}.webp`}
                                  width={800}
                                  height={450}
                                  alt="All works"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Projects Grid x3 Showcase End */}
          </div>
          <div className="pinned-section__trigger"></div>
        </div>
      </div>
      {/* Section - Featured Case Studies (Projects Grid x3 Showcase) End */}

      {/* Section - Our Story: core values on the brand-teal band */}
      <CoreValues id="our-story" eyebrow={{ label: "Our story", href: "/about" }} />
      {/* Section - Our Story End */}

      {/* Section - Tech Stack List & Title Start */}
      <TechStack
        number="/05"
        title={
          <>
            Our tech
            <br />
            stack
          </>
        }
        aside={
          <>
            A powerhouse in <span>full-stack development solutions</span>
          </>
        }
      />
      {/* Section - Tech Stack List & Title End */}

      {/* Section - Blog Preview Grid Plus Title Start */}
      <div className="mxd-section blur-section pinned-section padding-top-number padding-bottom-preview">
        <div className="pinned-section__inner">
          <div className="mxd-container grid-l-container">
            {/* Block - Section Title v05 Start */}
            <div className="mxd-block">
              <div className="mxd-section-title pre-subtitle-s controls-bottom-mobile">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-number">
                        <div className="mxd-section-title__number anim-uni-in-up">
                          <span className="title-number">
                            <SectionIcon />
                            <span className="mxd-scramble">/06</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-6 mxd-grid-item">
                      <div className="mxd-section-title__title pre-controls-mobile">
                        <a className="active-cursor-accent" data-cursor-text="More Posts" href="/blog">
                          <h2 className="mxd-split-lines">
                            Recent
                            <br />
                            insights
                          </h2>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 mxd-grid-item">
                      <div className="mxd-section-title__data top-controls">
                        <div className="mxd-section-title__controls justify-end anim-uni-in-up">
                          <a className="btn btn-line btn-line-default" href="/blog">
                            <span className="btn-caption mxd-scramble">All insights</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title v05 End */}

            {/* Block - Blog Preview Grid Start */}
            <div className="mxd-block">
              <div className="mxd-blog-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-blog-grid__gallery">
                    <div className="col-12 col-lg-6 mxd-blog-item animate-card-3">
                      <a className="mxd-blog-item__media active-cursor-permanent" data-cursor-text="Read Post" href="/blog/erp-importance">
                        <img loading="lazy" decoding="async" src="/images/innector/erp-nepal-scaled.webp" alt="What is ERP and why is it important for businesses" />
                      </a>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <a className="blog-name-m" href="/blog/erp-importance">
                            What is ERP and why is it important for businesses
                          </a>
                        </div>
                        <div className="mxd-blog-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">ERP</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Business Software</span>
                          <span className="tag tag-s tag-medium mxd-scramble">IT Strategy</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mxd-blog-item animate-card-3">
                      <a className="mxd-blog-item__media active-cursor-permanent" data-cursor-text="Read Post" href="/blog/top-5-open-source-erp">
                        <img loading="lazy" decoding="async" src="/images/innector/erp-image.webp" alt="Top 5 open source ERP for 2022" />
                      </a>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <a className="blog-name-m" href="/blog/top-5-open-source-erp">
                            Top 5 open source ERP for 2022
                          </a>
                        </div>
                        <div className="mxd-blog-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">ERP</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Open Source</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Comparison</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Blog Preview Grid End */}
          </div>
          <div className="pinned-section__trigger"></div>
        </div>
      </div>
      {/* Section - Blog Preview Grid Plus Title End */}

      {/* Section - CTA with Matter.js Objects Start */}
      <div className="mxd-section">
        <div className="mxd-container fullwidth-container">
          {/* Block - CTA with Matter.js Objects Start */}
          <div className="mxd-block">
            <div className="mxd-promo mxd-gravity-section accent">
              <div className="mxd-promo__wrap">
                <div className="mxd-promo__objects object-container">
                  <div className="object object-permanent">
                    <p>Web Development</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Mobile Apps</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Corporate Branding</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Custom Software</p>
                  </div>
                  <div className="object object-permanent">
                    <p>IT Infrastructure</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Digital Marketing</p>
                  </div>
                  <div className="object object-permanent">
                    <p>AI Chatbots</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Process Automation</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Custom AI</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Managed IT</p>
                  </div>
                  <div className="object object-permanent">
                    <p>ERP Solutions</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Cloud Setup</p>
                  </div>
                  <div className="object object-permanent">
                    <p>UI/UX Design</p>
                  </div>
                  <div className="object object-permanent">
                    <p>Global Support</p>
                  </div>
                </div>
                <div className="mxd-promo__content">
                  <div className="mxd-promo__btngroup anim-uni-in-up">
                    <a className="btn btn-line btn-line-permanent" href="/contact">
                      <span className="btn-caption mxd-scramble">Start a project</span>
                    </a>
                  </div>
                  <div className="mxd-promo__caption">
                    <a className="active-cursor-permanent" data-cursor-text="Contact Us" href="/contact">
                      <h2 className="mxd-split-lines permanent">Let&apos;s talk about your project</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - CTA with Matter.js Objects End */}
        </div>
      </div>
      {/* Section - CTA with Matter.js Objects End */}
    </>
  );
}
