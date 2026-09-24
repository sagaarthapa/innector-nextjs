const arrowIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
    <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
  </svg>
);

const services = [
  { name: "Web Development", href: "/services#web-development" },
  { name: "Mobile App Development", href: "/services#mobile-app-development" },
  { name: "Corporate Branding", href: "/services#corporate-branding" },
  { name: "Custom Software", href: "/services#custom-software" },
  { name: "IT Infrastructure Setup", href: "/services#it-infrastructure-setup" },
  { name: "Digital Marketing", href: "/services#digital-marketing" },
  { name: "AI-Powered Chatbots", href: "/services#ai-powered-chatbots" },
  { name: "Business Process Automation", href: "/services#business-process-automation" },
  { name: "Custom AI Development", href: "/services#custom-ai-development" },
];

export default function MenuOverlay() {
  return (
    <>
      {/* Menu Hamburger Start */}
      <div className="mxd-menu__contain loading-fade">
        <div className="mxd-menu__toggle">
          <a href="#0" className="mxd-menu__hamburger" aria-label="Menu">
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
          </a>
        </div>
      </div>
      {/* Menu Hamburger End */}

      {/* Navigation Start */}
      <nav className="mxd-menu">
        <div className="mxd-menu__backdrop"></div>

        {/* Menu Overlay Start */}
        <div className="mxd-menu__overlay">
          <div className="mxd-menu__content" data-lenis-prevent>
            {/* Menu Logo Start */}
            <div className="mxd-menu__logo">
              <a href="/" className="menu-logo">
                <img
                  className="menu-logo__image"
                  src="/images/innector/innector-logo-white.svg"
                  alt="Innector"
                  style={{ height: "32px", width: "auto" }}
                />
                <div className="menu-logo__text">
                  <span>Innector</span>
                  <span>IT Solutions</span>
                </div>
              </a>
            </div>
            {/* Menu Logo End */}

            {/* Menu Media Start */}
            <div className="mxd-menu__media">
              <div className="menu-media__wrapper">
                <img src="/images/innector/digitalmarketing.jpg" alt="Innector" />
              </div>
            </div>
            {/* Menu Media End */}

            {/* Main Navigation Start */}
            <div className="mxd-menu__navigation">
              <div className="mxd-menu__inner">
                <div className="mxd-menu__shadow shadow-top"></div>
                <div className="mxd-menu__caption">
                  <p>
                    IT solutions &amp; digital innovation
                    <br />
                    for businesses across Nepal
                  </p>
                </div>
                {/* left side */}
                <div className="mxd-menu__left">
                  <div className="main-menu">
                    <div className="main-menu__content">
                      <ul id="main-menu" className="main-menu__accordion">
                        <li className="main-menu__item">
                          <div className="main-menu__divider divider-top"></div>
                          <div className="main-menu__toggle">
                            <a className="main-menu__link" href="/">
                              <span className="main-menu__number">/ 01</span>
                              <span className="main-menu__caption">Home</span>
                            </a>
                          </div>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          <div className="main-menu__toggle">
                            <a className="main-menu__link" href="/about">
                              <span className="main-menu__number">/ 02</span>
                              <span className="main-menu__caption">About Us</span>
                            </a>
                          </div>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          <div className="main-menu__toggle">
                            <p className="main-menu__link">
                              <span className="main-menu__number">/ 03</span>
                              <span className="main-menu__caption">Services</span>
                            </p>
                            <div className="main-menu__arrow">{arrowIcon}</div>
                          </div>
                          <ul className="submenu">
                            {services.map((service) => (
                              <li className="submenu__item" key={service.href}>
                                <a href={service.href}>{service.name}</a>
                              </li>
                            ))}
                          </ul>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          <div className="main-menu__toggle">
                            <a className="main-menu__link" href="/managed-it-services">
                              <span className="main-menu__number">/ 04</span>
                              <span className="main-menu__caption">Managed IT</span>
                            </a>
                          </div>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          <div className="main-menu__toggle">
                            <a className="main-menu__link" href="/blog">
                              <span className="main-menu__number">/ 05</span>
                              <span className="main-menu__caption">Blog</span>
                            </a>
                          </div>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                        <li className="main-menu__item">
                          <div className="main-menu__toggle">
                            <a className="main-menu__link" href="/contact">
                              <span className="main-menu__number">/ 06</span>
                              <span className="main-menu__caption">Contact</span>
                            </a>
                          </div>
                          <div className="main-menu__divider divider-bottom"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* right side */}
                <div className="mxd-menu__right">
                  <div className="menu-contact">
                    <div className="menu-contact__item">
                      <ul className="menu-contact__list">
                        <li>
                          <a className="tag tag-m" href="mailto:info@innector.net">
                            <span className="mxd-scramble">info@innector.net</span>
                          </a>
                        </li>
                        <li>
                          <a className="tag tag-m" href="tel:+9779851118818">
                            <span className="mxd-scramble">+977 985-111-8818</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-contact__item">
                      <ul className="menu-contact__list">
                        <li>
                          <a
                            className="tag tag-m"
                            href="https://www.google.com/maps/search/?api=1&query=Chabahil+Kathmandu+Nepal"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>
                              Chabahil, Kathmandu, Nepal
                              <br />
                              Opposite Helping Hands Hospital
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-contact__item">
                      <ul className="menu-contact__list">
                        <li>
                          <a className="tag tag-m" href="https://twitter.com/Innectornet" target="_blank" rel="noreferrer">
                            <span className="mxd-scramble">Twitter</span>
                          </a>
                        </li>
                        <li>
                          <a className="tag tag-m" href="https://www.instagram.com/innectoritsolutions/" target="_blank" rel="noreferrer">
                            <span className="mxd-scramble">Instagram</span>
                          </a>
                        </li>
                        <li>
                          <a className="tag tag-m" href="https://www.facebook.com/innectornet.local" target="_blank" rel="noreferrer">
                            <span className="mxd-scramble">Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a className="tag tag-m" href="https://www.linkedin.com/company/innector-net" target="_blank" rel="noreferrer">
                            <span className="mxd-scramble">LinkedIn</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* data bottom line */}
                <div className="mxd-menu__shadow"></div>
                <div className="mxd-menu__data">
                  <div className="menu-data__left">
                    <p className="menu-data__text">Established 2018 · Kathmandu, Nepal</p>
                  </div>
                  <div className="menu-data__right">
                    <p className="menu-data__text">Innector IT Solutions Pvt. Ltd.</p>
                    <p className="menu-data__text">©2026</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Navigation End */}
          </div>
        </div>
        {/* Menu Overlay End */}
      </nav>
      {/* Navigation End */}
    </>
  );
}
