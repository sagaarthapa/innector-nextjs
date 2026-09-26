import TechStack from "@/components/TechStack";
import ServiceMarquee from "@/components/ServiceMarquee";
import type { Metadata } from "next";
import { SEO } from "@/lib/seo";

export const metadata: Metadata = SEO.services;

export default function ServicesPage() {
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

      {/* Section - Inner Headline v03 Start */}
      <div className="mxd-section pinned-section">
        <div className="pinned-section__inner">
          <div className="mxd-container fullwidth-container">
            {/* Block - Inner Headline v03 Start */}
            <div className="mxd-block loading-wrap">
              <div className="inner-headline fullheight">
                <div className="inner-headline__bg">
                  <img fetchPriority="high" decoding="async" src="/images/innector/customsoftware.webp" alt="Innector software development" />
                  <div className="inner-headline__cover"></div>
                </div>
                <div className="mxd-container grid-l-container">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 mxd-grid-item">
                        {/* breadcrumbs */}
                        <div className="inner-headline__breadcrumbs loading-fade">
                          <div className="breadcrumbs__nav permanent">
                            <span>
                              <a href="/">
                                <span className="mxd-scramble">Home</span>
                              </a>
                            </span>
                            <span className="current-item">Services</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* bottom positioned headline */}
                <div className="inner-headline__bottom">
                  <div className="mxd-container grid-l-container">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12">
                          {/* content */}
                          <div className="inner-headline__content has-medium-title">
                            <div className="container-fluid p-0">
                              <div className="row g-0">
                                <div className="col-12 col-xl-10 mxd-grid-item">
                                  <div className="inner-headline__link loading-fade">
                                    <a className="btn btn-line btn-line-permanent" href="#services">
                                      <span className="btn-caption mxd-scramble">Services</span>
                                    </a>
                                  </div>
                                  <div className="inner-headline__title">
                                    <h1 className="medium permanent loading-split">
                                      Comprehensive IT solutions <span>designed to transform your business</span>
                                    </h1>
                                  </div>
                                </div>
                                <div className="col-12 col-xl-2 mxd-grid-item">
                                  <div className="inner-headline__btngroup align-end-desktop tags-medium-title loading-fade">
                                    <a
                                      className="btn btn-line-icon btn-line-icon-small btn-line-permanent slide-down"
                                      href="#services"
                                    >
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Inner Headline v03 End */}
          </div>
          <div className="pinned-section__trigger"></div>
        </div>
      </div>
      {/* Section - Inner Headline v03 End */}

      {/* Section - Services Description Stack Start */}
      <div id="services" className="mxd-section">
        <div className="mxd-container fullwidth-container">
          {/* Block - Services Description Stack Start */}
          <div className="mxd-block">
            <div className="mxd-stack-services">
              {/* 01 - Web Development */}
              <div id="web-development" className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">01 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Web Development</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Custom Web Design</span>
                          <span className="tag tag-s-mobile mxd-scramble">Responsive Development</span>
                          <span className="tag tag-s-mobile mxd-scramble">E-commerce Solutions</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">CMS Development</span>
                          <span className="tag tag-s-mobile mxd-scramble">Website Maintenance</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Every business needs a visually appealing, highly functional, and user-friendly website
                      <span>
                        {" "}
                        to communicate its core values, products, services, and brand persona.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img loading="lazy" decoding="async" src="/images/stock/web-development.webp" alt="Web development" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 02 - Mobile App Development */}
              <div id="mobile-app-development" className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">02 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Mobile App Development</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">iOS App Development</span>
                          <span className="tag tag-s-mobile mxd-scramble">Android App Development</span>
                          <span className="tag tag-s-mobile mxd-scramble">Cross-Platform Solutions</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">App Store Optimization</span>
                          <span className="tag tag-s-mobile mxd-scramble">App Maintenance &amp; Support</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Create a mobile app for your business that personalizes the customer experience
                      <span>
                        {" "}
                        and makes it easier for your audience to access your products and services.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img loading="lazy" decoding="async" src="/images/innector/mobile-app.webp" alt="Mobile application interface on a smartphone" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 03 - Corporate Branding */}
              <div id="corporate-branding" className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">03 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Corporate Branding</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Brand Strategy Development</span>
                          <span className="tag tag-s-mobile mxd-scramble">Logo &amp; Visual Identity</span>
                          <span className="tag tag-s-mobile mxd-scramble">Brand Guidelines</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Marketing Collaterals</span>
                          <span className="tag tag-s-mobile mxd-scramble">Brand Positioning</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Our corporate branding experts will guide you every step of the way
                      <span>
                        {" "}
                        and will help you create a distinctive brand image that resonates with your audience.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img loading="lazy" decoding="async" src="/images/innector/innectorbranding.webp" alt="Corporate branding and identity design work" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 04 - Custom Software */}
              <div id="custom-software" className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">04 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Custom Software</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">ERP Systems</span>
                          <span className="tag tag-s-mobile mxd-scramble">CRM Solutions</span>
                          <span className="tag tag-s-mobile mxd-scramble">Business Process Automation</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Database Management</span>
                          <span className="tag tag-s-mobile mxd-scramble">Software Integration</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Bespoke software solutions that help your business stand out
                      <span>
                        {" "}
                        and adhere to innovative practices that meet your unique business needs.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img loading="lazy" decoding="async" src="/images/services/custom-software.webp" alt="Code and dashboards on monitors in a software workspace" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 05 - IT Infrastructure Setup */}
              <div id="it-infrastructure-setup" className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">05 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>IT Infrastructure Setup</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Network Setup &amp; Configuration</span>
                          <span className="tag tag-s-mobile mxd-scramble">Cloud Migration Services</span>
                          <span className="tag tag-s-mobile mxd-scramble">Server Management</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Security Implementation</span>
                          <span className="tag tag-s-mobile mxd-scramble">IT Support &amp; Maintenance</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Our IT experts will identify your specific IT needs
                      <span>
                        {" "}
                        and help you setup, upgrade, and maintain your IT infrastructure for optimal performance.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img loading="lazy" decoding="async" src="/images/innector/datacenter.webp" alt="IT infrastructure and data center hardware" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 06 - Digital Marketing */}
              <div id="digital-marketing" className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">06 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Digital Marketing</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Search Engine Optimization</span>
                          <span className="tag tag-s-mobile mxd-scramble">Social Media Marketing</span>
                          <span className="tag tag-s-mobile mxd-scramble">Pay-Per-Click Advertising</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Content Marketing</span>
                          <span className="tag tag-s-mobile mxd-scramble">Email Marketing Campaigns</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Employ the latest digital marketing techniques to make a lasting impression on your audience
                      <span>
                        {" "}
                        and amplify your online presence.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img loading="lazy" decoding="async" src="/images/innector/digitalmarketing.webp" alt="Digital marketing strategy and analytics" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 07 - AI-Powered Chatbots */}
              <div id="ai-powered-chatbots" className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">07 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>AI-Powered Chatbots</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">24/7 Customer Support Automation</span>
                          <span className="tag tag-s-mobile mxd-scramble">Multi-language Chat Support</span>
                          <span className="tag tag-s-mobile mxd-scramble">WhatsApp &amp; Social Media Integration</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Custom Training on Your Data</span>
                          <span className="tag tag-s-mobile mxd-scramble">Analytics &amp; Insights</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Transform customer engagement with intelligent chatbots that provide 24/7 support,
                      <span>
                        {" "}
                        answer queries instantly, and deliver personalized experiences.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img loading="lazy" decoding="async"
                      src="/images/stock/ai-chatbot.webp"
                      alt="AI-powered chatbots"
                    />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 08 - Business Process Automation */}
              <div id="business-process-automation" className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">08 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Business Process Automation</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Workflow Automation Design</span>
                          <span className="tag tag-s-mobile mxd-scramble">Document Processing &amp; OCR</span>
                          <span className="tag tag-s-mobile mxd-scramble">Email &amp; Communication Automation</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Data Entry Automation</span>
                          <span className="tag tag-s-mobile mxd-scramble">Integration with Existing Systems</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Streamline operations and eliminate repetitive tasks with intelligent automation
                      <span>
                        {" "}
                        that saves time, reduces errors, and boosts productivity.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img loading="lazy" decoding="async" src="/images/stock/process-automation.webp" alt="Business process automation" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 09 - Custom AI Development */}
              <div id="custom-ai-development" className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">09 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Custom AI Development</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Custom AI Application Development</span>
                          <span className="tag tag-s-mobile mxd-scramble">Machine Learning Models</span>
                          <span className="tag tag-s-mobile mxd-scramble">Computer Vision &amp; Image Recognition</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Natural Language Processing</span>
                          <span className="tag tag-s-mobile mxd-scramble">AI-Powered Recommendation Engines</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Build powerful AI-driven applications tailored to your unique business needs.
                      <span>
                        {" "}
                        From recommendation systems to image recognition and beyond.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img loading="lazy" decoding="async"
                      src="/images/services/custom-ai.webp"
                      alt="A robot with a camera for a head, representing custom AI development"
                    />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Services Description Stack End */}
        </div>
      </div>
      {/* Section - Services Description Stack End */}

      {/* Section - Our Process Start (Process Points, reused component) */}
      <div className="mxd-section blur-section padding-top-title padding-bottom-tag-m-desktop">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-subtitle-s">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title pre-caption">
                      <h2 className="reveal-type">Our Process</h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-controls">
                      <div className="mxd-section-title__caption no-max-width pre-controls">
                        <p className="t-bold t-large mxd-split-lines">
                          How we deliver exceptional results for our clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-block">
            <div className="mxd-process-points">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-md-6 col-xl-3 mxd-process-points__item mxd-grid-item">
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-magnifying-glass"></i>
                      </div>
                      <p>Discovery</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium mxd-split-lines">
                        We begin by understanding your business goals, target audience, and specific requirements to
                        create a tailored strategy.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3 mxd-process-points__item mxd-grid-item">
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-calendar-check"></i>
                      </div>
                      <p>Planning</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium mxd-split-lines">
                        Our team develops a comprehensive project plan with clear timelines, milestones, and
                        deliverables.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3 mxd-process-points__item mxd-grid-item">
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-code"></i>
                      </div>
                      <p>Development</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium mxd-split-lines">
                        We bring your vision to life using cutting-edge technologies and best practices in the
                        industry.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3 mxd-process-points__item mxd-grid-item">
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-rocket-launch"></i>
                      </div>
                      <p>Launch &amp; Support</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium mxd-split-lines">
                        After thorough testing, we launch your project and provide ongoing support to ensure
                        continued success.
                      </p>
                    </div>
                    <div className="mxd-process-points__divider bottom anim-uni-clip-in"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Our Process End */}

      {/* Section - Parallax Divider Image Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div
              className="mxd-divider__image parallax-img band-image"
              style={{ "--band": "url(/images/services/process-divider.webp)", "--band-sm": "url(/images/services/process-divider-sm.webp)" } as React.CSSProperties}
              role="img"
              aria-label="Source code on a laptop screen"
            ></div>
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider Image End */}

      {/* Section - Technologies We Work With: the same stack as the home page */}
      <TechStack
        title={
          <>
            Technologies
            <br />
            we work with
          </>
        }
        aside={
          <>
            We stay current with <span>the latest technologies and frameworks</span>
          </>
        }
      />
      {/* Section - Technologies We Work With End */}

      {/* Section - Blog Preview Grid Plus Title Start */}
      <div className="mxd-section blur-section pinned-section padding-top-title padding-bottom-preview">
        <div className="pinned-section__inner">
          <div className="mxd-container grid-l-container">
            {/* Block - Section Title v04 Start */}
            <div className="mxd-block">
              <div className="mxd-section-title pre-subtitle-s">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-section-title__title pre-caption">
                        <h2 className="reveal-type">
                          Our featured
                          <br />
                          insights
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-controls">
                        <div className="mxd-section-title__controls anim-uni-in-up">
                          <a className="btn btn-line btn-line-default" href="/blog">
                            <span className="btn-caption mxd-scramble">News Overview</span>
                          </a>
                        </div>
                        <div className="mxd-section-title__caption no-max-width pre-controls">
                          <p className="t-bold t-large mxd-split-lines">
                            Insights on ERP, digital transformation, and IT strategy.
                            <span> Practical knowledge to help your business make smarter technology decisions.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title v04 End */}

            {/* Block - Blog Preview Grid Start */}
            <div className="mxd-block">
              <div className="mxd-blog-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-blog-grid__gallery">
                    <div className="col-12 col-lg-6 mxd-blog-item animate-card-3">
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">15 January, 2024</span>
                      </div>
                      <a
                        className="mxd-blog-item__media active-cursor-permanent"
                        data-cursor-text="Read Post"
                        href="/blog/erp-importance"
                      >
                        <img loading="lazy" decoding="async" src="/images/innector/erp-nepal-scaled.webp" alt="ERP System Dashboard" />
                      </a>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <a className="blog-name-m" href="/blog/erp-importance">
                            What is ERP and why is it important for businesses
                          </a>
                        </div>
                        <div className="mxd-blog-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">ERP</span>
                          <span className="tag tag-s tag-medium mxd-scramble">Software</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 mxd-blog-item animate-card-3">
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">10 January, 2024</span>
                      </div>
                      <a
                        className="mxd-blog-item__media active-cursor-permanent"
                        data-cursor-text="Read Post"
                        href="/blog/top-5-open-source-erp"
                      >
                        <img loading="lazy" decoding="async" src="/images/innector/erp-image.webp" alt="Open Source ERP Systems" />
                      </a>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <a className="blog-name-m" href="/blog/top-5-open-source-erp">
                            Top 5 open source ERP for 2022
                          </a>
                        </div>
                        <div className="mxd-blog-item__tags">
                          <span className="tag tag-s tag-medium mxd-scramble">ERP</span>
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
                      <h2 className="reveal-type opposite">Ready to Transform Your Business?</h2>
                    </a>
                  </div>
                  <p className="about-cta__lead anim-uni-in-up">Let&apos;s discuss your project and create something amazing together</p>
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
    </>
  );
}
