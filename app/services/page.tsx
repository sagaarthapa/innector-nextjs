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
                  <img src="/images/innector/customsoftware.jpg" alt="Innector software development" />
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
                      Every business needs a visually appealing, highly functional, and user-friendly website.
                      <span>
                        {" "}
                        We build sites that communicate your core values, products and services, with custom
                        design, responsive development, e-commerce and CMS builds, and ongoing maintenance.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/bannerfallback.jpg" alt="Team collaborating on a web development project" />
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
                      Create a mobile app for your business that personalizes the customer experience.
                      <span>
                        {" "}
                        From native iOS and Android builds to cross-platform solutions, App Store optimization and
                        ongoing maintenance, we make it easier for your audience to access your products and
                        services.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/mobile-app.jpg" alt="Mobile application interface on a smartphone" />
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
                      Our corporate branding experts guide you every step of the way.
                      <span>
                        {" "}
                        From brand strategy and logo design to visual identity, guidelines and positioning, we help
                        you create a distinctive brand image that resonates with your audience.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/innectorbranding.jpg" alt="Corporate branding and identity design work" />
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
                      Bespoke software solutions that help your business stand out.
                      <span>
                        {" "}
                        ERP systems, CRM solutions, business process automation, database management and software
                        integration — built around innovative practices that meet your unique business needs.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/customsoftware.jpg" alt="Custom software development workspace" />
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
                      Our IT experts identify your specific IT needs.
                      <span>
                        {" "}
                        From network setup and cloud migration to server management, security implementation and
                        ongoing support, we help you set up, upgrade and maintain your infrastructure for optimal
                        performance.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/datacenter.jpg" alt="IT infrastructure and data center hardware" />
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
                      We employ the latest digital marketing techniques.
                      <span>
                        {" "}
                        SEO, social media marketing, pay-per-click advertising, content marketing and email
                        campaigns — built to make a lasting impression on your audience and amplify your online
                        presence.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/digitalmarketing.jpg" alt="Digital marketing strategy and analytics" />
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
                          <span className="tag tag-s-mobile mxd-scramble">24/7 Support Automation</span>
                          <span className="tag tag-s-mobile mxd-scramble">Multi-language Chat Support</span>
                          <span className="tag tag-s-mobile mxd-scramble">WhatsApp &amp; Social Integration</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Custom Training on Your Data</span>
                          <span className="tag tag-s-mobile mxd-scramble">Analytics &amp; Insights</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Transform customer engagement with intelligent chatbots.
                      <span>
                        {" "}
                        24/7 support automation, multi-language chat, WhatsApp and social media integration, and
                        custom training on your data — answering queries instantly with personalized experiences.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img
                      src="/images/innector/brain-g216ffd9b8_1920-1024x780.jpg"
                      alt="Artificial intelligence and machine learning concept"
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
                          <span className="tag tag-s-mobile mxd-scramble">Communication Automation</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Data Entry Automation</span>
                          <span className="tag tag-s-mobile mxd-scramble">Integration with Existing Systems</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Streamline operations and eliminate repetitive tasks with intelligent automation.
                      <span>
                        {" "}
                        Workflow automation design, document processing and OCR, communication automation and
                        system integrations that save time, reduce errors, and boost productivity.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img src="/images/innector/erp-image.jpg" alt="Business process automation and ERP workflow" />
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
                          <span className="tag tag-s-mobile mxd-scramble">Custom AI Applications</span>
                          <span className="tag tag-s-mobile mxd-scramble">Machine Learning Models</span>
                          <span className="tag tag-s-mobile mxd-scramble">Computer Vision &amp; Image Recognition</span>
                        </div>
                        <div className="tags-column">
                          <span className="tag tag-s-mobile mxd-scramble">Natural Language Processing</span>
                          <span className="tag tag-s-mobile mxd-scramble">AI Recommendation Engines</span>
                        </div>
                      </div>
                    </div>
                    <p className="t-large t-bold services-card__descr">
                      Build powerful AI-driven applications tailored to your unique business needs.
                      <span>
                        {" "}
                        Custom AI applications, machine learning models, computer vision, natural language
                        processing and recommendation engines — from image recognition and beyond.
                      </span>
                    </p>
                  </div>
                  <div className="services-card__image">
                    <img
                      src="/images/innector/brain-g216ffd9b8_1920-1024x780.jpg"
                      alt="Artificial intelligence and machine learning concept"
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
            <div className="mxd-divider__image divider-image-6 parallax-img"></div>
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider Image End */}

      {/* Section - Technologies We Work With Start (Clients component reused) */}
      <div className="mxd-section blur-section padding-top-title padding-bottom-t-medium">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-4 mxd-grid-item">
                  <div className="mxd-section-title pre-grid-xl-mobile">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12">
                          <div className="mxd-section-title__title">
                            <h2 className="reveal-type">
                              Technologies
                              <br />
                              we work with
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-8">
                  <div className="mxd-clients">
                    <div className="mxd-clients__row">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-lg-4 mxd-clients__item mxd-grid-item animate-card-3">
                            <div className="mxd-clients__logo">
                              <img src="/images/innector/odoologo.png" alt="Odoo ERP" />
                            </div>
                            <div className="mxd-clients__descr">
                              <p className="t-medium">
                                All-in-one open source ERP platform for finance, sales, inventory and operations.
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-lg-4 mxd-clients__item mxd-grid-item animate-card-3">
                            <div className="mxd-clients__logo">
                              <img src="/images/innector/erpnext-logo.png" alt="ERPNext" />
                            </div>
                            <div className="mxd-clients__descr">
                              <p className="t-medium">Modern open source ERP built for growing businesses.</p>
                            </div>
                          </div>
                          <div className="col-12 col-lg-4 mxd-clients__item mxd-grid-item animate-card-3">
                            <div className="mxd-clients__logo">
                              <img src="/images/innector/dolibarr_logo.svg" alt="Dolibarr" />
                            </div>
                            <div className="mxd-clients__descr">
                              <p className="t-medium">Simple, flexible open source ERP &amp; CRM software.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mxd-clients__row">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-lg-4 mxd-clients__item mxd-grid-item animate-card-3">
                            <div className="mxd-clients__logo">
                              <img src="/images/innector/easyerp-logo.png" alt="EasyERP" />
                            </div>
                            <div className="mxd-clients__descr">
                              <p className="t-medium">Lightweight ERP for streamlined business management.</p>
                            </div>
                          </div>
                          <div className="col-12 col-lg-4 mxd-clients__item mxd-grid-item animate-card-3">
                            <div className="mxd-clients__logo">
                              <img src="/images/innector/logomixerp-.svg" alt="MixERP" />
                            </div>
                            <div className="mxd-clients__descr">
                              <p className="t-medium">Open source ERP built for SMB operations.</p>
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
                      <span className="btn-caption mxd-scramble">Get Started Today</span>
                    </a>
                  </div>
                  <div className="mxd-promo__caption">
                    <a className="active-cursor-accent" data-cursor-text="Contact Us" href="/contact">
                      <h2 className="reveal-type opposite">Ready to Transform Your Business?</h2>
                    </a>
                  </div>
                </div>
                {/* marquee */}
                <div className="mxd-promo__marquee">
                  {/* Marquee Divider Start */}
                  <div className="marquee marquee-left--gsap">
                    <div className="marquee__toleft marquee__images">
                      {[
                        { tag: "Web Development", src: "https://dummyimage.com/1200x1200/5d5d5d/838383" },
                        { tag: "Mobile Apps", src: "https://dummyimage.com/1200x685/5d5d5d/838383" },
                        { tag: "Cloud Hosting", src: "https://dummyimage.com/1200x1200/5d5d5d/838383" },
                        { tag: "Cybersecurity", src: "https://dummyimage.com/740x1200/5d5d5d/838383" },
                        { tag: "Digital Marketing", src: "https://dummyimage.com/800x1200/5d5d5d/838383" },
                        { tag: "ERP Systems", src: "https://dummyimage.com/1200x1200/5d5d5d/838383" },
                        { tag: "AI Chatbots", src: "https://dummyimage.com/1200x900/5d5d5d/838383" },
                        { tag: "Automation", src: "https://dummyimage.com/740x1200/5d5d5d/838383" },
                        { tag: "Branding", src: "https://dummyimage.com/800x1200/5d5d5d/838383" },
                        { tag: "IT Support", src: "https://dummyimage.com/1200x900/5d5d5d/838383" },
                        { tag: "Data Backup", src: "https://dummyimage.com/1200x1200/5d5d5d/838383" },
                        { tag: "IT Consulting", src: "https://dummyimage.com/1200x685/5d5d5d/838383" },
                        { tag: "Networking", src: "https://dummyimage.com/1200x1200/5d5d5d/838383" },
                        { tag: "SEO", src: "https://dummyimage.com/740x1200/5d5d5d/838383" },
                        { tag: "Custom AI", src: "https://dummyimage.com/800x1200/5d5d5d/838383" },
                      ].map((item, i) => (
                        <div className="marquee__item item-imageblock" key={i}>
                          <div className="marquee__tags">
                            <span className="tag tag-s tag-medium-opposite mxd-scramble">{item.tag}</span>
                          </div>
                          <div className="marquee__image">
                            <img src={item.src} alt="Innector service illustration" />
                          </div>
                        </div>
                      ))}
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
