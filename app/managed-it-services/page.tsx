import TrialForm from "@/components/TrialForm";
import ServiceMarquee from "@/components/ServiceMarquee";

export default function ManagedItServicesPage() {
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
                  <img src="/images/innector/datacenter.jpg" alt="Innector managed IT services" />
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
                            <span className="current-item">Managed IT Services</span>
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
                                      <span className="btn-caption mxd-scramble">
                                        Limited to First 20 Businesses
                                      </span>
                                    </a>
                                  </div>
                                  <div className="inner-headline__title">
                                    <h1 className="medium permanent loading-split">
                                      Stop overpaying for IT. Get comprehensive support plus a{" "}
                                      <span>risk-free 15-day trial</span>
                                    </h1>
                                  </div>
                                </div>
                                <div className="col-12 col-xl-2 mxd-grid-item">
                                  <div className="inner-headline__btngroup align-end-desktop tags-medium-title loading-fade">
                                    <a
                                      className="btn btn-line-icon btn-line-icon-small btn-line-permanent slide-down"
                                      href="#services"
                                    >
                                      <span className="btn-caption mxd-scramble">See What You Get</span>
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

      {/* Section - Pain Points Manifest Start */}
      <div className="mxd-section blur-section padding-top-manifest-m padding-bottom-tag-m-desktop">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-manifest pre-points">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="mxd-section-manifest__wrap wrap-text-m">
                      <div className="mxd-section-manifest__text manifest-text-m">
                        <p className="manifest manifest-m mxd-split-lines">
                          Tired of juggling multiple IT vendors, unpredictable costs, and security worries? Running
                          an SMB is demanding. Managing infrastructure, cybersecurity, your website, and support
                          shouldn&apos;t drain your budget.
                          <span>
                            {" "}
                            Many SMBs in North America, Australia, and the Gulf struggle with overpriced, fragmented
                            IT services that don&apos;t fully meet their needs or comply with local regulations.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Pain Points Manifest End */}

      {/* Section - Services Description Stack Start */}
      <div id="services" className="mxd-section">
        <div className="mxd-container fullwidth-container">
          {/* Block - Section Title Start */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-subtitle-s">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title pre-caption">
                      <h2 className="reveal-type">
                        Innector IT Solutions: Your All-in-One,
                        <br />
                        Affordable IT Partner
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-controls">
                      <div className="mxd-section-title__caption no-max-width pre-controls">
                        <p className="t-bold t-large mxd-split-lines">
                          Imagine one dedicated multinational team managing all your essential IT needs.
                          <span>
                            {" "}
                            From a stunning, secure website and reliable hosting to proactive maintenance, data
                            backups, cybersecurity, and responsive support, for just $999 USD/month (or local
                            equivalent).
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title End */}

          {/* Block - Services Description Stack Start */}
          <div className="mxd-block">
            <div className="mxd-stack-services">
              {/* 01 - Web Design, Development & Maintenance */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">01 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Web Design, Development &amp; Maintenance</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Web Design</span>
                          <span className="tag tag-s-mobile mxd-scramble">Development</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Maintenance</span>
                          <span className="tag tag-s-mobile mxd-scramble">Updates</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Create stunning, responsive websites built for your business.
                      <span>
                        {" "}
                        Ongoing maintenance and updates keep your online presence fresh, secure and functional.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/stock/web-development.jpg" alt="Web design, development and maintenance" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 02 - Hosting & Server Support */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">02 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Hosting &amp; Server Support (24/7)</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Reliable Hosting</span>
                          <span className="tag tag-s-mobile mxd-scramble">24/7 Monitoring</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Uptime</span>
                          <span className="tag tag-s-mobile mxd-scramble">Server Support</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Reliable hosting with round-the-clock server monitoring.
                      <span> Proactive support ensures maximum uptime for your business, day and night.</span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/datacenter.jpg" alt="Data center server hardware" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 03 - Email & Domain Hosting */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">03 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Email &amp; Domain Hosting</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Business Email</span>
                          <span className="tag tag-s-mobile mxd-scramble">Domain Management</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Brand Identity</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Professional email solutions and domain management.
                      <span>
                        {" "}
                        We help establish your brand identity and keep your business communication running
                        smoothly.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/bannerfallback.jpg" alt="Business email and domain management" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 04 - SEO & Analytics */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">04 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>SEO &amp; Analytics</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">SEO</span>
                          <span className="tag tag-s-mobile mxd-scramble">Analytics</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Visibility</span>
                          <span className="tag tag-s-mobile mxd-scramble">Performance Insights</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Boost your online visibility with comprehensive SEO strategies.
                      <span> Track what matters with clear analytics and performance insights.</span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/digitalmarketing.jpg" alt="SEO and analytics dashboard" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 05 - Graphics & Digital Marketing */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">05 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Graphics &amp; Digital Marketing</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Graphic Design</span>
                          <span className="tag tag-s-mobile mxd-scramble">Digital Marketing</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Campaigns</span>
                          <span className="tag tag-s-mobile mxd-scramble">Brand Growth</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Eye-catching graphics and strategic digital marketing campaigns.
                      <span> Built to grow your brand and reach more customers.</span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/innectorbranding.jpg" alt="Graphics and digital marketing design" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 06 - Security & Data Backup */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">06 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Security &amp; Data Backup</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Security</span>
                          <span className="tag tag-s-mobile mxd-scramble">Data Backup</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Data Protection</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Protect your business with robust security measures.
                      <span> Automated backups safeguard your valuable data around the clock.</span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/erp-image.jpg" alt="Security and data backup concept" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 07 - PC/Server Support */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">07 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>PC/Server Support</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">PC Support</span>
                          <span className="tag tag-s-mobile mxd-scramble">Server Support</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Technical Support</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Expert technical support for all your PC and server needs.
                      <span>
                        {" "}
                        We keep your systems running smoothly so your team can focus on the work that matters.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/datacenter.jpg" alt="PC and server technical support" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 08 - HR/Payroll Web App */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">08 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>HR/Payroll Web App (ISO Compliant)</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">HR Management</span>
                          <span className="tag tag-s-mobile mxd-scramble">Payroll</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">ISO Compliant</span>
                          <span className="tag tag-s-mobile mxd-scramble">Web App</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Streamline HR and payroll processes with our secure web application.
                      <span> Designed for efficiency and built to ISO-compliant standards.</span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/customsoftware.jpg" alt="HR and payroll web application" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 09 - IT Consulting */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">09 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>IT Consulting</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">IT Strategy</span>
                          <span className="tag tag-s-mobile mxd-scramble">Consulting</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Process Optimization</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Expert IT consulting to optimize your business operations.
                      <span> We help improve efficiency and guide your technology strategy.</span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/bannerfallback.jpg" alt="IT consulting meeting" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 10 - AI-Powered Chatbots */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">10 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>AI-Powered Chatbots (24/7 Customer Support)</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">AI Chatbots</span>
                          <span className="tag tag-s-mobile mxd-scramble">24/7 Support</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Customer Engagement</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Intelligent chatbots providing instant customer support around the clock.
                      <span> Improving customer satisfaction and engagement, every hour of the day.</span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img
                      src="/images/stock/ai-chatbot.jpg"
                      alt="Artificial intelligence chatbot concept"
                    />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 11 - Business Process Automation */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">11 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Business Process Automation</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Workflow Automation</span>
                          <span className="tag tag-s-mobile mxd-scramble">Efficiency</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Error Reduction</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Automate repetitive tasks and workflows.
                      <span> Save time, reduce errors, and boost your team&apos;s productivity.</span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/stock/process-automation.jpg" alt="Business process automation" />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>

              {/* 12 - Custom AI Development & Machine Learning */}
              <div className="mxd-stack-services__card">
                <div className="services-card__wrapper">
                  <div className="services-card__content">
                    <div className="services-card__info">
                      <div className="services-card__subtitle">
                        <span className="tag tag-s-mobile mxd-scramble">12 / Services</span>
                      </div>
                      <div className="services-card__title">
                        <p>Custom AI Development &amp; Machine Learning</p>
                      </div>
                      <div className="services-card__tags">
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Custom AI</span>
                          <span className="tag tag-s-mobile mxd-scramble">Machine Learning</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Competitive Advantage</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Tailored AI solutions and machine learning models.
                      <span>
                        {" "}
                        Built to solve complex business challenges and give you a competitive advantage.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img
                      src="/img/services/1200x980_cpb06.webp"
                      alt="Machine learning and custom AI development"
                    />
                    <div className="services-card__cover"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Services Description Stack End */}

          {/* Block - Mid-page Trial CTA Start */}
          <div className="mxd-block">
            <div className="text-center" style={{ textAlign: "center", padding: "4rem 0" }}>
              <a className="btn btn-default-icon btn-default-accent slide-right" href="#trial-form">
                <span className="btn-caption mxd-scramble">Start Your FREE 15-Day Trial</span>
                <i className="btn-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                    <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                  </svg>
                </i>
              </a>
            </div>
          </div>
          {/* Block - Mid-page Trial CTA End */}
        </div>
      </div>
      {/* Section - Services Description Stack End */}

      {/* Section - Parallax Divider Image Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div
              className="mxd-divider__image parallax-img"
              style={{ backgroundImage: "url(/images/pages/managed-it-band.webp)" }}
              role="img"
              aria-label="A support team working together at a shared table"
            ></div>
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider Image End */}

      {/* Section - Why Choose Innector Start (Process Points reused for differentiators) */}
      <div className="mxd-section blur-section padding-top-title padding-bottom-tag-m-desktop">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-subtitle-s">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title pre-caption">
                      <h2 className="reveal-type">
                        Why Choose Innector
                        <br />
                        &amp; Start Your Trial?
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-controls">
                      <div className="mxd-section-title__caption no-max-width pre-controls">
                        <p className="t-bold t-large mxd-split-lines">
                          Six reasons SMBs across USA, Canada, Australia, Dubai and Qatar are trusting Innector as
                          their all-in-one IT partner.
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
                  <div className="col-12 col-md-6 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-currency-circle-dollar"></i>
                      </div>
                      <p>Massive Cost Savings</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium mxd-split-lines">
                        Get comprehensive IT support for a fraction of typical costs.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-list-checks"></i>
                      </div>
                      <p>Simplify Your IT</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium mxd-split-lines">
                        One partner for all your essential digital and IT needs.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-chart-line-up"></i>
                      </div>
                      <p>Boost Productivity</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium mxd-split-lines">Reliable systems mean less downtime for your team.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-lock-key"></i>
                      </div>
                      <p>Enhance Security</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium mxd-split-lines">
                        Protect your valuable business data with robust measures.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-globe"></i>
                      </div>
                      <p>Global Expertise, Local Understanding</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium mxd-split-lines">
                        Benefit from our international experience and regional presence.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-seal-check"></i>
                      </div>
                      <p>Compliance Focused</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium mxd-split-lines">Services designed with local regulations in mind.</p>
                    </div>
                    <div className="mxd-process-points__divider bottom anim-uni-clip-in"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Why Choose Innector End */}

      {/* Section - Trusted by SMBs Globally (Client Feedback) Start */}
      <div className="mxd-section blur-section padding-top-title padding-bottom-title">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-subtitle-s">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="mxd-section-title__title pre-caption">
                      <h2 className="reveal-type">Trusted by SMBs globally</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {[
            {
              quote:
                "Innector transformed our IT operations. We went from managing 5 different vendors to having one reliable partner. The cost savings alone paid for itself in the first quarter!",
              name: "Sarah Johnson",
              position: "TechStart Inc., Toronto, Canada",
              initials: "SJ",
            },
            {
              quote:
                "The 24/7 support and proactive maintenance mean we can focus on our business instead of worrying about IT issues. Best decision we made this year.",
              name: "Ahmed Al-Rashid",
              position: "Gulf Enterprises, Dubai, UAE",
              initials: "AA",
            },
            {
              quote:
                "Their AI chatbot integration and process automation saved us countless hours. The team is responsive, knowledgeable, and truly understands SMB needs.",
              name: "Emily Watson",
              position: "Retail Solutions, Sydney, Australia",
              initials: "EW",
            },
          ].map((t) => (
            <div className="mxd-block" key={t.name}>
              <div className="mxd-testimonials-project">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-11 mxd-grid-item mxd-testimonials-project__item">
                      <div className="mxd-testimonials-project__inner">
                        <div className="mxd-testimonials-project__subtitle pre-manifest">
                          <p className="anim-uni-in-up">
                            <span>/ Client&apos;s Feedback</span>
                          </p>
                        </div>
                        <div className="mxd-testimonials-project__manifest fullwidth">
                          <p className="manifest manifest-s mxd-split-lines">{t.quote}</p>
                          <div className="mxd-testimonials-project__author anim-uni-in-up">
                            <div
                              className="mxd-testimonials-project__photo round"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "var(--st-medium)",
                                color: "var(--t-bright)",
                                fontWeight: 700,
                                fontSize: "1.6rem",
                              }}
                            >
                              {t.initials}
                            </div>
                            <div className="mxd-testimonials-project__data">
                              <p className="mxd-testimonials-project__name">{t.name}</p>
                              <p className="mxd-testimonials-project__position">{t.position}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Section - Trusted by SMBs Globally End */}

      {/* Section - Free Trial Signup Form Start */}
      <div id="trial-form" className="mxd-section blur-section padding-top-title padding-bottom-title">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-subtitle-s">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title pre-caption">
                      <h2 className="reveal-type">Ready to secure your spot? Start your free 15-day trial now!</h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-controls">
                      <div className="mxd-section-title__caption no-max-width pre-controls">
                        <p className="t-bold t-large mxd-split-lines">
                          Limited to the first 20 businesses across USA, Canada, Australia, Dubai and Qatar. No risk,
                          no obligation, no credit card required.
                          <span>
                            {" "}
                            You&apos;ll get a personalized onboarding call, direct access to our support team, and a
                            full risk-free evaluation of our core support and maintenance services.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TrialForm />
        </div>
      </div>
      {/* Section - Free Trial Signup Form End */}

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
                            More on ERP and IT strategy from the Innector team.
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
                        <img src="/images/innector/erp-nepal-scaled.jpg" alt="ERP System Dashboard" />
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
                        <img src="/images/innector/erp-image.jpg" alt="Open Source ERP Systems" />
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
                      <span className="btn-caption mxd-scramble">Start Your Free Trial</span>
                    </a>
                  </div>
                  <div className="mxd-promo__caption">
                    <a className="active-cursor-accent" data-cursor-text="Contact Us" href="/contact">
                      <h2 className="reveal-type opposite">
                        Ready to Secure Your Spot? Start Your Free 15-Day Trial Now!
                      </h2>
                    </a>
                  </div>
                </div>
                {/* marquee */}
                <div className="mxd-promo__marquee">
                  {/* Marquee Divider Start */}
                  <ServiceMarquee set="managed" />
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
