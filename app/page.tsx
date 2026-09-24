import HeroVideoCycle from "@/components/HeroVideoCycle";

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
            <a className="btn btn-line btn-line-small btn-line-medium" href="/about">
              <span className="btn-caption mxd-scramble">Studio</span>
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
                        <span className="title-number mxd-scramble">A/01</span>
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
                            <p>Web development</p>
                          </div>
                          <div className="mxd-niche-cards__tags">
                            <span className="tag tag-m tag-medium mxd-scramble">Frontend</span>
                            <span className="tag tag-m tag-medium mxd-scramble">Interactions</span>
                            <span className="tag tag-m tag-medium mxd-scramble">Backend</span>
                          </div>
                        </div>
                        <div className="mxd-niche-cards__descr wide">
                          <p className="t-bold t-medium">
                            Custom, high-performance websites built to{" "}
                            <span>generate leads and represent your brand.</span>
                          </p>
                        </div>
                        <div className="mxd-niche-cards__image absolute-desktop-bottom">
                          <img src="/images/innector/customsoftware.jpg" alt="Web development" />
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
                                <img src="/img/illustrations/niche02.webp" alt="AI-powered solutions" />
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
                                  <p className="permanent">Corporate branding</p>
                                </div>
                                <div className="mxd-niche-cards__tags">
                                  <span className="tag tag-m tag-permanent mxd-scramble">Brand Strategy</span>
                                  <span className="tag tag-m tag-permanent mxd-scramble">Logo Design</span>
                                  <span className="tag tag-m tag-permanent mxd-scramble">Guidelines</span>
                                </div>
                              </div>
                              <div className="mxd-niche-cards__descr wide">
                                <p className="t-bold t-medium t-permanent">
                                  Distinctive visual identities and brand guidelines that{" "}
                                  <span>help your business stand out.</span>
                                </p>
                              </div>
                              <div className="mxd-niche-cards__image absolute-desktop-full">
                                <img src="/images/innector/innectorbranding.jpg" alt="Corporate branding" />
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
                                  <p>IT infrastructure setup</p>
                                </div>
                                <div className="mxd-niche-cards__tags">
                                  <span className="tag tag-m tag-medium mxd-scramble">Setup</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Maintenance</span>
                                  <span className="tag tag-m tag-medium mxd-scramble">Support</span>
                                </div>
                              </div>
                              <div className="mxd-niche-cards__descr short">
                                <p className="t-bold t-medium">
                                  Reliable infrastructure setup, upgrades,{" "}
                                  <span>and ongoing maintenance and support.</span>
                                </p>
                              </div>
                              <div className="mxd-niche-cards__image absolute-desktop-aside">
                                <img src="/images/innector/datacenter.jpg" alt="IT infrastructure setup" />
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
                        <span className="title-number mxd-scramble">C/02</span>
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
                        <img src="/images/innector/brain-g216ffd9b8_1920-1024x780.jpg" alt="Web development" />
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
                        <img src="/images/innector/mobile-app.jpg" alt="Mobile app development" />
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
                        <img src="/images/innector/innectorbranding.jpg" alt="Corporate branding" />
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
                        <img src="/images/innector/customsoftware.jpg" alt="Custom software" />
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
                        <img src="/images/innector/datacenter.jpg" alt="IT infrastructure setup" />
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
                        <img src="/images/innector/digitalmarketing.jpg" alt="Digital marketing" />
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
                        <img src="/img/services/1200x980_cpb05.webp" alt="AI-powered chatbots" />
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
                        <img src="/img/services/1200x980_cpb07.webp" alt="Business process automation" />
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
                        <img src="/img/services/1200x980_cpb06.webp" alt="Custom AI development" />
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

      {/* Section - Parallax Divider Image Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div className="mxd-divider__image divider-image-4 parallax-img"></div>
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider Image End */}

      {/* Section - Parallax Divider Image & Title Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div className="mxd-divider__image divider-image-1 parallax-img"></div>
            <div className="mxd-divider__cover cover-04"></div>
            <div className="mxd-divider__content">
              <div className="mxd-divider__btngroup anim-uni-slide-up">
                <a className="btn btn-line btn-line-permanent" href="/about">
                  <span className="btn-caption mxd-scramble">Our story</span>
                </a>
              </div>
              <div className="mxd-divider__caption">
                <a className="active-cursor-accent" data-cursor-text="Our Story" href="/about">
                  <h2 className="reveal-type permanent">Global IT partner since 2018</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider Image & Title End */}

      {/* Section - Tech Stack List & Title Start */}
      <div className="mxd-section padding-top-number padding-bottom-default">
        <div className="mxd-container grid-l-container">
          {/* Section Title v06 Start */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid-desktop">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-number">
                      <div className="mxd-section-title__number anim-uni-in-up">
                        <span className="title-number mxd-scramble">T/03</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title">
                      <h2 className="mxd-split-lines">
                        Our tech
                        <br />
                        stack
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Section Title v06 End */}

          {/* Block Tech Stack List Start */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-4 mxd-aside-descr mxd-grid-item">
                  <p className="t-bold t-large t-aside mxd-split-lines">
                    A powerhouse in <span>full-stack development and ERP solutions</span>
                  </p>
                </div>
                <div className="col-12 col-xl-8">
                  <div className="container-fluid p-0">
                    <div className="row g-0 mxd-tech-stack">
                      <div className="col-12 col-md-4 mxd-grid-item">
                        <div className="mxd-tech-stack__column">
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="256" height="272" version="1.1" viewBox="0 0 256 272">
                                <path d="M103,143.6l23.3-55.4,26.5,55.4h-49.8ZM255.1,44.7l-20.9,166.4-108.3,60-106.6-59.2L0,45.5,125.9.7l129.2,44ZM208.2,207.2L126.1,32.3,47.7,206.7l29.3-.5,15.7-39.3h70.3l17.2,39.8,28,.5Z"/>
                              </svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Angular</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="1309" version="1.1" viewBox="0 0 2500 1309">
                                <path d="M839,547.9c-8.6,145.6-77.1,171.2-154.1,179.8h-102.7l42.8-256.9h111.3c59.9,0,102.7,25.7,102.7,77.1ZM1883.6,470.9h-111.3l-42.8,256.9h102.8c77.1-8.6,145.5-34.2,154.1-179.8,0-51.4-42.8-77.1-102.7-77.1h0ZM2500,650.7c0,359.4-559.6,650.7-1250,650.7S0,1010,0,650.7,559.6,0,1250,0s1250,291.3,1250,650.7ZM1010.3,539.4c0-119.9-68.5-188.4-205.5-196.9h-316.8l-137,693.5h162.7l34.2-179.8h154.1c145.6,8.6,308.2-111.3,308.2-316.8h0ZM1398,539.4l-59.9,316.8h171.2l59.9-351c17.1-85.6-34.2-154.1-171.2-162.7h-154.1l34.2-179.8h-162.7l-137,693.5h162.7l77.1-385.3h128.4c59.9,0,59.9,25.7,51.4,68.5ZM2157.5,539.4c0-119.9-68.5-188.4-205.5-196.9h-316.8l-137,693.5h162.7l34.2-179.8h154.1c145.5,8.6,308.2-111.3,308.2-316.8h.1Z"/>
                              </svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>PHP</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.92952 0C4.85513 0 5.16836 2.21173 5.16836 2.21173V4.50216H10.0157V5.18693H3.2498C3.2498 5.18693 0 4.82487 0 9.97245C0 15.12 2.83477 14.939 2.83477 14.939H4.52623V12.5462C4.52623 12.5462 4.43226 9.69697 7.31402 9.69697H12.1222C12.1222 9.69697 14.8238 9.74419 14.8238 7.07595V2.66824C14.8238 2.66824 15.231 0 9.92952 0ZM7.2592 1.5427C7.74471 1.5427 8.12843 1.93625 8.12843 2.41637C8.12843 2.8965 7.73688 3.29004 7.2592 3.29004C6.77369 3.29004 6.38998 2.8965 6.38998 2.41637C6.38998 1.92837 6.78152 1.5427 7.2592 1.5427ZM10.0705 20C15.1449 20 14.8316 17.7883 14.8316 17.7883V15.4978H9.98434V14.8131H16.7502C16.7502 14.8131 20 15.183 20 10.0354C20 4.88784 17.1652 5.06887 17.1652 5.06887H15.4738V7.46163C15.4738 7.46163 15.5677 10.3109 12.686 10.3109H7.87784C7.87784 10.3109 5.17619 10.2637 5.17619 12.9319V17.3396C5.17619 17.3396 4.76899 20.0079 10.0705 20.0079V20ZM12.7408 18.4573C12.2553 18.4573 11.8716 18.0638 11.8716 17.5836C11.8716 17.1035 12.2631 16.71 12.7408 16.71C13.2185 16.71 13.61 17.1035 13.61 17.5836C13.61 18.0716 13.2185 18.4573 12.7408 18.4573Z"/>
                              </svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Python</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="351.8" height="198.8" version="1.1" viewBox="0 0 351.8 198.8">
                                <path d="M256.9,148.5c-8.1,0-14.7-6.6-14.7-14.7s6.6-14.7,14.7-14.7,14.7,6.6,14.7,14.7h0c0,8.1-6.6,14.7-14.7,14.7M94.9,148.5c-8.1,0-14.7-6.6-14.7-14.7s6.6-14.7,14.7-14.7,14.7,6.6,14.7,14.7h0c0,8.1-6.6,14.7-14.7,14.7M262.1,60.4l29.3-51c1.2-3.3-.5-7-3.8-8.2-2.1-.8-4.5-.4-6.3,1.1-.2.3-.4.6-.5,1l-29.6,51.6c-47.9-21.5-102.7-21.5-150.7,0L70.9,3.6c-2.3-2.6-6.3-2.9-9-.6-1.6,1.4-2.4,3.6-2.1,5.7,0,.4.3.7.6,1l29.2,51C38.3,88.6,4.6,140.6,0,198.8h351.8c-4.6-58.3-38.3-110.4-89.7-138.4"/>
                              </svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Android</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mxd-grid-item">
                        <div className="mxd-tech-stack__column">
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="225.8" height="201.2" version="1.1" viewBox="0 0 225.8 201.2">
                                <path d="M185.7,65.2c-2.3-.8-4.8-1.6-7.3-2.3.4-1.7.8-3.3,1.1-5,5.5-26.7,1.9-48.3-10.4-55.3-11.8-6.8-31.1.3-50.5,17.2-1.9,1.6-3.7,3.4-5.6,5.2-1.3-1.2-2.5-2.4-3.7-3.5C88.9,3.4,68.4-4.3,56.2,2.9c-11.8,6.8-15.3,27.1-10.3,52.4.5,2.4,1,4.9,1.7,7.5-2.9.8-5.7,1.7-8.4,2.6C15.3,73.7,0,86.8,0,100.4s16.4,28,41.3,36.6c2,.7,4,1.3,6.1,1.9-.7,2.7-1.3,5.4-1.8,8.1-4.7,24.9-1,44.7,10.7,51.4,12.1,7,32.5-.2,52.3-17.5,1.6-1.4,3.1-2.8,4.7-4.3,2,2,4.1,3.8,6.1,5.6,19.2,16.5,38.2,23.2,49.9,16.4,12.1-7,16.1-28.2,10.9-54.1-.4-2-.8-4-1.4-6,1.4-.4,2.8-.9,4.2-1.3,25.9-8.6,42.8-22.5,42.8-36.6s-15.8-26.8-40.2-35.2h0v-.2h.1ZM180.1,127.8c-1.2.4-2.5.8-3.8,1.2-2.9-9.1-6.7-18.7-11.4-28.6,4.5-9.7,8.2-19.2,11-28.2,2.3.7,4.6,1.4,6.7,2.1,20.9,7.2,33.7,17.8,33.7,26s-13.8,20.1-36.1,27.5c0,0-.1,0-.1,0ZM170.8,146.2c2.3,11.4,2.6,21.7,1.1,29.8-1.3,7.3-4.1,12.1-7.4,14-7.1,4.1-22.3-1.2-38.8-15.4-1.9-1.6-3.8-3.3-5.7-5.2,6.4-7,12.7-15.1,18.9-24,10.9-1,21.2-2.6,30.6-4.7.5,1.9.9,3.7,1.2,5.5h0ZM77,189.4c-7,2.5-12.5,2.5-15.8.6-7.1-4.1-10.1-20-6-41.3.5-2.4,1-4.9,1.6-7.5,9.3,2,19.5,3.5,30.5,4.4,6.3,8.8,12.8,16.9,19.4,24-1.4,1.4-2.9,2.7-4.3,4-8.8,7.7-17.6,13.1-25.3,15.8h-.1ZM44.4,127.8c-11-3.8-20.1-8.7-26.4-14-5.6-4.8-8.4-9.6-8.4-13.4,0-8.2,12.3-18.7,32.7-25.9,2.5-.9,5.1-1.7,7.8-2.4,2.8,9.2,6.5,18.8,11,28.5-4.5,9.9-8.3,19.6-11.2,28.9-1.9-.6-3.8-1.1-5.6-1.7h0ZM55.3,53.4c-4.2-21.7-1.4-38.1,5.7-42.2,7.6-4.4,24.3,1.9,41.9,17.5,1.1,1,2.3,2,3.4,3.1-6.6,7-13.1,15.1-19.2,23.8-10.6,1-20.8,2.6-30.2,4.7-.6-2.4-1.1-4.7-1.6-7h0ZM152.8,77.5c-2.2-3.9-4.5-7.6-6.9-11.3,7.2.9,14.1,2.1,20.6,3.6-1.9,6.2-4.4,12.8-7.2,19.5-2-3.9-4.2-7.8-6.5-11.8h0ZM113,38.8c4.5,4.8,8.9,10.2,13.3,16.1-4.4-.2-8.9-.3-13.4-.3s-8.9,0-13.3.3c4.4-5.8,8.9-11.2,13.4-16h0ZM73,77.5c-2.2,3.9-4.4,7.8-6.4,11.7-2.8-6.7-5.2-13.2-7.2-19.6,6.4-1.4,13.3-2.6,20.5-3.5-2.4,3.7-4.7,7.5-6.9,11.4h0ZM80.2,135.2c-7.4-.8-14.4-1.9-20.8-3.3,2-6.4,4.5-13.1,7.3-19.9,2,3.9,4.2,7.8,6.4,11.7h0c2.3,4,4.7,7.8,7.1,11.6h0ZM113.3,162.6c-4.6-4.9-9.1-10.4-13.6-16.3,4.3.2,8.7.3,13.2.3s9.2-.1,13.6-.3c-4.4,6-8.8,11.4-13.3,16.3h.1ZM159.4,111.6c3,6.9,5.6,13.5,7.6,19.9-6.6,1.5-13.6,2.7-21.1,3.6,2.3-3.7,4.7-7.6,6.9-11.5,2.3-4,4.5-8,6.6-12h0ZM144.5,118.7c-3.5,6.1-7.2,12-10.8,17.5-6.7.5-13.6.7-20.7.7s-13.9-.2-20.5-.6c-3.8-5.6-7.5-11.5-11-17.5h0c-3.5-6-6.7-12.1-9.6-18.2,2.9-6.1,6.1-12.2,9.6-18.2h0c3.5-6,7.2-11.9,11-17.4,6.7-.5,13.6-.8,20.6-.8h0c7,0,13.9.3,20.6.8,3.7,5.5,7.4,11.3,10.9,17.4s6.8,12.2,9.7,18.1c-2.9,6-6.2,12.2-9.7,18.3h-.1,0ZM164.4,10.9c7.6,4.4,10.5,22,5.8,45-.3,1.5-.6,3-1,4.5-9.4-2.2-19.6-3.8-30.2-4.8-6.2-8.8-12.6-16.9-19.1-23.8,1.7-1.7,3.5-3.3,5.2-4.8,16.7-14.5,32.3-20.2,39.4-16.2h-.1ZM112.9,80.2c11.1,0,20.2,9,20.2,20.2s-9,20.2-20.2,20.2-20.2-9-20.2-20.2,9-20.2,20.2-20.2"/>
                              </svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>React</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="256" height="288" version="1.1" viewBox="0 0 256 288">
                                <path d="M255.6,84.5c0-4.8-1-9.1-3.1-12.8-2.1-3.6-5.1-6.6-9.2-9-34-19.6-68.1-39.2-102.1-58.8-9.2-5.3-18.1-5.1-27.2.3C100.5,12.2,32.7,51,12.4,62.7c-8.3,4.8-12.4,12.2-12.4,21.7v118.4c0,4.7,1,8.9,3,12.5,2.1,3.7,5.2,6.8,9.4,9.3,20.2,11.7,88,50.5,101.6,58.5,9.1,5.4,18,5.6,27.2.3,34-19.6,68.1-39.2,102.1-58.8,4.2-2.4,7.3-5.5,9.4-9.3,2-3.6,3-7.8,3-12.5v-118.3h0ZM129.5,238.6h-1.1c-35.3,0-66-19.2-82.4-47.7-8-13.9-12.6-30.1-12.6-47.3,0-52.5,42.5-95,95-95s65.6,19,82.1,47.2h0l.2.3s-.1-.2-.2-.3l-41.3,23.8c-8.1-13.8-23.1-23.1-40.2-23.3h-.5c-26.1,0-47.3,21.2-47.3,47.3s2.3,16.6,6.2,23.5c8.2,14.2,23.5,23.8,41.1,23.8s33.1-9.7,41.2-24.1l-.2.3,41.3,23.9c-16.3,28.1-46.5,47.2-81.3,47.5h0ZM235.6,136.5h-13.5v13.5h13.5v6.7h-13.5v13.5h-6.7v-13.5h-13.5v13.5h-6.7v-13.5h-13.5v-6.7h13.5v-13.5h-13.5v-6.7h13.5v-13.5h6.7v13.5h13.5v-13.5h6.7v13.5h13.5v6.7ZM201.9,136.5h13.5v13.5h-13.5v-13.5Z"/>
                              </svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>C#</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg width="18" height="20" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9946 5.87784C17.9946 5.54067 17.9242 5.24632 17.7726 4.98943C17.6265 4.73789 17.4099 4.52916 17.123 4.36326C14.7248 2.99852 12.3266 1.63379 9.93384 0.269063C9.28962 -0.100217 8.66165 -0.0841614 8.02286 0.285119C7.07008 0.841715 2.29534 3.54442 0.871579 4.3579C0.286917 4.69507 0 5.20885 0 5.87249C0 8.61801 0 11.3635 0 14.1144C0 14.4409 0.070376 14.7352 0.211128 14.9868C0.357293 15.2436 0.573835 15.4631 0.871579 15.629C2.29534 16.4425 7.07008 19.1505 8.02286 19.7018C8.66165 20.0764 9.28962 20.0871 9.93384 19.7178C12.3266 18.3531 14.7302 16.9884 17.123 15.6236C17.4208 15.4524 17.6373 15.2383 17.7835 14.9814L14.1835 12.9209C13.1549 14.6977 11.2168 15.8966 8.99188 15.8966C6.76692 15.8966 4.8397 14.7031 3.80571 12.9263C3.30226 12.0593 3.01534 11.0585 3.01534 9.98809C3.01534 6.72344 5.68962 4.07961 8.99188 4.07961C12.2941 4.07961 9.58196 4.10101 9.86887 4.14383C10.0096 4.16524 10.1504 4.192 10.2857 4.21876C10.3669 4.23481 10.4481 4.25622 10.5293 4.27763C10.5726 4.28833 10.6159 4.29903 10.6647 4.31509C10.7188 4.33114 10.7729 4.3472 10.8217 4.36326C11.1194 4.45959 11.4063 4.57198 11.6824 4.71113C11.6932 4.71648 11.7095 4.72183 11.7203 4.73254C11.8232 4.78606 11.926 4.83957 12.0235 4.89844C12.0289 4.89844 12.0397 4.90915 12.0451 4.9145C12.148 4.97337 12.2508 5.03759 12.3483 5.10182C12.4295 5.15534 12.5053 5.21421 12.5865 5.26772C12.6623 5.3266 12.738 5.38011 12.8084 5.44434C12.8138 5.44969 12.8247 5.45504 12.8301 5.46039C12.9275 5.54067 13.025 5.6263 13.117 5.71193C13.1874 5.77615 13.2523 5.84038 13.3173 5.90995C13.3768 5.97417 13.4364 6.0384 13.4959 6.10262C13.6042 6.22571 13.7125 6.35951 13.8099 6.49331C13.8641 6.56288 13.9128 6.63781 13.9615 6.70738C13.9723 6.72344 13.9832 6.73949 13.994 6.75555C14.0535 6.84653 14.1131 6.93751 14.1672 7.03385L11.5633 8.51632C11.5308 8.4628 11.4983 8.40928 11.4659 8.36112C11.4659 8.35576 11.455 8.35041 11.4496 8.33971C11.428 8.31295 11.4117 8.28619 11.3901 8.25943C11.363 8.22732 11.3414 8.18985 11.3143 8.15774C11.2872 8.12563 11.2602 8.09352 11.2331 8.06141C11.206 8.0293 11.1735 7.99719 11.1465 7.96508C11.114 7.93296 11.0815 7.90085 11.049 7.86874C11.0003 7.82593 10.957 7.78311 10.9029 7.7403C10.9029 7.7403 10.8974 7.73494 10.892 7.72959C10.892 7.72959 10.8812 7.72424 10.8758 7.71889C10.8054 7.66002 10.735 7.61185 10.6592 7.55833C10.6051 7.52622 10.5564 7.48876 10.5023 7.462C10.5023 7.462 10.4914 7.462 10.486 7.45665C10.4481 7.43524 10.4048 7.41383 10.3615 7.39242C10.3344 7.37637 10.3074 7.36566 10.2803 7.34961C10.2532 7.3389 10.2262 7.32285 10.1991 7.31215C10.0583 7.24792 9.91218 7.19976 9.75519 7.15694C9.71729 7.14624 9.68481 7.14088 9.64692 7.13018C9.53865 7.10342 9.42496 7.08737 9.31128 7.07666C9.20842 7.06596 9.10015 7.06061 8.99188 7.06061C7.34617 7.06061 6.01444 8.37717 6.01444 10.0041C6.01444 11.6311 6.15519 11.0317 6.40962 11.4652C6.92391 12.3483 7.88752 12.9477 8.99188 12.9477C10.0962 12.9477 9.06226 12.9477 9.09474 12.9477C9.24632 12.9477 9.39789 12.9263 9.54947 12.8995C9.5982 12.8888 9.65233 12.8781 9.70105 12.8674C9.82556 12.8353 9.95008 12.7978 10.0638 12.755H10.0746C10.1179 12.739 10.1612 12.7176 10.2045 12.7015C10.2478 12.6801 10.2965 12.6587 10.3399 12.6373C10.4752 12.5677 10.6051 12.4874 10.7296 12.4018C10.735 12.3964 10.7459 12.3911 10.7513 12.3857C10.7513 12.3857 10.7567 12.3857 10.7621 12.3804C10.8379 12.3269 10.9083 12.268 10.9786 12.2038C11.0274 12.161 11.0707 12.1181 11.114 12.0753C11.1248 12.0646 11.1356 12.0486 11.1465 12.0379C11.1573 12.0272 11.1681 12.0165 11.1789 12.0057C11.2168 11.9629 11.2602 11.9148 11.298 11.872C11.298 11.872 11.3035 11.8666 11.3089 11.8612C11.3414 11.8184 11.3738 11.7756 11.4063 11.7328C11.4117 11.7275 11.4171 11.7167 11.4226 11.7114C11.455 11.6686 11.4821 11.6258 11.5092 11.5776C11.5146 11.5669 11.52 11.5562 11.5254 11.5508C11.5417 11.5241 11.5579 11.4973 11.5741 11.4652L12.9383 12.2466L17.7672 15.0135C17.908 14.762 17.9783 14.473 17.9783 14.1412C17.9783 14.1412 17.9783 8.65012 17.9783 5.9046L17.9946 5.87784ZM15.0171 10.3253H14.335V10.9996H13.6529V10.3253H12.9708V9.65092H13.6529V8.97658H14.335V9.65092H15.0171V10.3253ZM17.5128 10.3253H16.8307V10.9996H16.1486V10.3253H15.4665V9.65092H16.1486V8.97658H16.8307V9.65092H17.5128V10.3253Z"/>
                              </svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>C++</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <svg xmlns="http://www.w3.org/2000/svg" width="257" height="128" version="1.1" viewBox="0 0 257 128">
                                <path d="M1.9,125h21.2V34.9H1.9v90.1ZM12.4,23c6.6,0,11.8-5.1,11.8-11.5S19,0,12.4,0,.7,5.1.7,11.6s5.2,11.5,11.7,11.5h0ZM93.5.3C57.7.3,35.3,24.7,35.3,63.7s22.4,63.3,58.2,63.3,58.2-24.3,58.2-63.3S129.2.3,93.5.3ZM93.5,19c21.8,0,35.8,17.3,35.8,44.7s-13.9,44.6-35.8,44.6-35.8-17.3-35.8-44.6,13.9-44.7,35.8-44.7ZM160.6,90.5c.9,22.6,19.5,36.6,47.7,36.6s48.4-14.6,48.4-37.9-10.5-28.6-35.5-34.3l-14.1-3.2c-15-3.6-21.3-8.3-21.3-16.5s9.4-17,23.2-17,23.6,6.9,24.7,18.4h20.9C254.1,14.9,236.3.3,209.2.3s-45.7,14.7-45.7,36.5,10.7,28.4,33.3,33.6l15.9,3.7c15.5,3.7,21.8,8.8,21.8,17.6s-10.3,17.5-25.1,17.5-26.3-7.4-27.6-18.7h-21.3.1Z"/>
                              </svg>
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>iOS</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mxd-grid-item">
                        <div className="mxd-tech-stack__column">
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <img src="/images/innector/odoologo.png" alt="Odoo" />
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Odoo</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <img src="/images/innector/erpnext-logo.png" alt="ERPNext" />
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>ERPNext</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <img src="/images/innector/dolibarr_logo.svg" alt="Dolibarr" />
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>Dolibarr</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                          <div className="mxd-tech-stack__item">
                            <div className="mxd-tech-stack__divider divider-top anim-uni-clip-in"></div>
                            <div className="mxd-tech-stack__logo">
                              <img src="/images/innector/easyerp-logo.png" alt="EasyERP" />
                            </div>
                            <div className="mxd-tech-stack__name anim-uni-slide-down">
                              <p>EasyERP</p>
                            </div>
                            <div className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block Tech Stack List End */}
        </div>
      </div>
      {/* Section - Tech Stack List & Title End */}

      {/* Section - Parallax Divider Image Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div className="mxd-divider__image divider-image-7 parallax-img"></div>
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider Image End */}

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
                          <span className="title-number mxd-scramble">I/04</span>
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
                        <img src="/images/innector/erp-nepal-scaled.jpg" alt="What is ERP and why is it important for businesses" />
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
                        <img src="/images/innector/erp-image.jpg" alt="Top 5 open source ERP for 2022" />
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
