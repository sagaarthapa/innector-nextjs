import type { Metadata } from "next";
import { SEO } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import ServiceMarquee from "@/components/ServiceMarquee";

export const metadata: Metadata = SEO.contact;

const socialArrow = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 18 18"
    xmlSpace="preserve"
  >
    <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z" />
  </svg>
);

const socials = [
  { name: "Twitter", href: "https://twitter.com/Innectornet" },
  { name: "Instagram", href: "https://www.instagram.com/innectoritsolutions/" },
  { name: "Facebook", href: "https://www.facebook.com/innectornet.local" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/innector-net" },
];

const accordionCloseIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" version="1.1" viewBox="0 0 18 18">
    <path d="M3.6,0v3.6H0V0h3.6ZM18,18v-3.6h-3.6v3.6h3.6ZM14.4,7.2v-3.6h-3.6v3.6h-3.6v-3.6h-3.6v3.6h3.6v3.6h3.6v3.6h3.6v-3.6h-3.6v-3.6h3.6ZM18,0h-3.6v3.6h3.6V0ZM0,18h3.6v-3.6H0v3.6ZM3.6,14.4h3.6v-3.6h-3.6v3.6Z" />
  </svg>
);

const accordionPlusIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" version="1.1" viewBox="0 0 18 18">
    <path d="M18,7.2v3.6h-7.2v7.2h-3.6v-7.2H0v-3.6h7.2V0h3.6v7.2h7.2Z" />
  </svg>
);

const faqs = [
  {
    q: "How long does it take to complete a project?",
    a: "Project timelines vary depending on the complexity and scope. A simple website typically takes 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    q: "Do you provide ongoing support after project completion?",
    a: "Yes, we offer comprehensive post-launch support including maintenance, updates, security monitoring, and technical assistance. We have various support packages to suit different needs and budgets.",
  },
  {
    q: "What is your pricing structure?",
    a: "Our pricing is project-based and depends on requirements, complexity, and timeline. We provide detailed quotes after understanding your specific needs. We offer flexible payment terms and packages for different budgets.",
  },
  {
    q: "What regions do you serve?",
    a: "We proudly serve SMB clients across the USA, Canada, Australia, Dubai (UAE), and Qatar. Our remote IT support and managed services are designed to help businesses globally, with 24/7 support across multiple time zones. We use modern communication tools and project management systems to ensure smooth collaboration regardless of location.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "We specialize in modern web technologies including React, Vue.js, Node.js, PHP, Python, and mobile development with React Native and Flutter. We also work with various databases, cloud platforms, and digital marketing tools.",
  },
];

export default function ContactPage() {
  return (
    <div className="mxd-page-content inner-page-content">
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

      {/* Section - Inner Headline v05 Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container grid-l-container">
          {/* Block - Inner Headline v05 Start */}
          <div className="mxd-block loading-wrap">
            <div className="inner-headline">
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
                        <span className="current-item">Contact</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* content */}
                    <div className="inner-headline__content has-medium-title">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-xl-6 mxd-grid-item">
                            <div className="inner-headline__title">
                              <h1 className="medium loading-split">Contact Us</h1>
                            </div>
                          </div>
                          <div className="col-12 col-xl-6">
                            {/* split header caption */}
                            <div className="inner-headline__caption split-caption-title pre-form">
                              <div className="mxd-grid-item">
                                <p className="t-bold t-large loading-split">
                                  Ready to start your digital transformation? Let&apos;s discuss your
                                  project. <span>Fill out the form below and our team will get back to
                                  you as soon as possible.</span>
                                </p>
                              </div>
                            </div>
                            {/* split header form block */}
                            <ContactForm />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Inner Headline v05 End */}

          {/* Block - Fullwidth Text Start */}
          <div className="mxd-block">
            <div className="fullwidth-text headline-email-text bottom-text-small mxd-grid-item">
              <div className="fullwidth-text__wrap">
                <a
                  className="fullwidth-text__content small accent active-cursor"
                  data-cursor-text="Let's chat"
                  href="mailto:info@innector.net"
                >
                  <span className="anim-uni-chars">info@innector.net</span>
                </a>
              </div>
            </div>
          </div>
          {/* Block - Fullwidth Text End */}
        </div>
      </div>
      {/* Section - Inner Headline v05 End */}

      {/* Section - Title & Socials Accent Start */}
      <div className="mxd-section bg-color-accent padding-top-title padding-bottom-default">
        <div className="mxd-container grid-l-container">
          {/* Block - Section Title & Socials Start */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* section title */}
                  <div className="mxd-section-title">
                    <div className="mxd-section-title__title pre-grid-split-xl">
                      <h2 className="mxd-split-lines accent">Follow Us</h2>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* socials list */}
                  <div className="mxd-socials-list">
                    {socials.map((social, index) => (
                      <a
                        key={social.href}
                        className={`socials-list__item${index === 0 ? " no-margin" : ""} slide-right-up`}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="socials-list__divider accent divider-top anim-uni-clip-in"></div>
                        <div className="socials-list__info">
                          <div className="socials-list__number accent anim-uni-slide-down">
                            <span>[0{index + 1}]</span>
                          </div>
                          <div className="socials-list__name accent anim-uni-slide-down">
                            <span>{social.name}</span>
                          </div>
                        </div>
                        <div className="socials-list__arrow accent anim-uni-slide-down">
                          <i>{socialArrow}</i>
                        </div>
                        <div className="socials-list__divider accent divider-bottom anim-uni-clip-in"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title & Socials End */}
        </div>
      </div>
      {/* Section - Title & Socials Accent End */}

      {/* Section - Parallax Divider Image Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div
              className="mxd-divider__image parallax-img band-image"
              style={{ "--band": "url(/images/pages/contact-band.webp)", "--band-sm": "url(/images/pages/contact-band-sm.webp)" } as React.CSSProperties}
              role="img"
              aria-label="Two colleagues talking over a project at a desk"
            ></div>
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider Image End */}

      {/* Section - Section Title & Text Block Start */}
      <div className="mxd-section blur-section bg-color-base padding-top-title padding-bottom-tag-m">
        <div className="mxd-container grid-l-container">
          {/* Block - Section Title & Text Block Start */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* section title */}
                  <div className="mxd-section-title">
                    <div className="mxd-section-title__title pre-caption">
                      <h2 className="mxd-split-lines">Get In Touch</h2>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* paragraph */}
                  <div className="mxd-section-title__paragraph">
                    <p className="t-bold t-large mxd-split-lines">
                      We&apos;d love to hear from you. <span>Send us a message and we&apos;ll respond
                      as soon as possible.</span>
                    </p>
                  </div>
                  {/* contact data */}
                  <div className="mxd-section-title__datalist">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        {/* contact data item */}
                        <div className="col-12 col-md-6 col-xl-5 datalist__item">
                          <div className="datalist__title">
                            <p className="t-bold t-large anim-uni-in-up">Kathmandu</p>
                          </div>
                          <ul>
                            <li className="anim-uni-in-up">
                              <a
                                className="tag tag-s-mobile"
                                href="https://www.google.com/maps/search/?api=1&query=Chabahil+Kathmandu+Nepal"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Chabahil, Kathmandu, Nepal,
                                <br />
                                Opposite of Helping Hands Hospital
                              </a>
                            </li>
                          </ul>
                          <ul>
                            <li className="anim-uni-in-up">
                              <a className="tag tag-s-mobile mxd-scramble" href="tel:+9779705559159">
                                +977 970-555-9159
                              </a>
                            </li>
                            <li className="anim-uni-in-up">
                              <a className="tag tag-s-mobile mxd-scramble" href="mailto:info@innector.net">
                                info@innector.net
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* contact data item */}
                        <div className="col-12 col-md-6 col-xl-5 datalist__item">
                          <div className="datalist__title">
                            <p className="t-bold t-large t-caption anim-uni-in-up">Business Hours</p>
                          </div>
                          <ul>
                            <li className="anim-uni-in-up">
                              <span className="tag tag-s-mobile">Monday - Friday: 9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="anim-uni-in-up">
                              <span className="tag tag-s-mobile">Saturday: 10:00 AM - 4:00 PM</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title & Text Block End */}
        </div>
      </div>
      {/* Section - Section Title & Text Block End */}

      {/* Section - FAQ Start */}
      <div id="faq" className="mxd-section blur-section padding-top-title padding-bottom-tag-m">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item">
                  <div className="mxd-section-title">
                    <div className="mxd-section-title__title pre-caption">
                      <h2 className="mxd-split-lines">
                        Frequently asked
                        <br />
                        questions
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* Block - Accordion Start */}
                  <div className="mxd-accordion loading-fade">
                    {faqs.map((faq) => (
                      <div className="mxd-accordion__item" key={faq.q}>
                        <div className="mxd-accordion__divider anim-uni-in-up"></div>
                        <div className="mxd-accordion__title anim-uni-in-up">
                          <p>{faq.q}</p>
                          <div className="mxd-accordion__arrow">
                            <i className="mxd-accordion__close">{accordionCloseIcon}</i>
                            <i className="mxd-accordion__plus">{accordionPlusIcon}</i>
                          </div>
                        </div>
                        <div className="mxd-accordion__content">
                          <p className="t-medium mxd-accordion__text">{faq.a}</p>
                        </div>
                        <div className="mxd-accordion__divider anim-uni-in-up"></div>
                      </div>
                    ))}
                  </div>
                  {/* Block - Accordion End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - FAQ End */}

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
                    <a className="btn btn-line btn-line-opposite" href="mailto:info@innector.net">
                      <span className="btn-caption mxd-scramble">Write a line</span>
                    </a>
                  </div>
                  <div className="mxd-promo__caption">
                    <a className="active-cursor-accent" data-cursor-text="Contact Us" href="/contact">
                      <h2 className="opposite mxd-split-lines">Let&apos;s talk about your project</h2>
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
