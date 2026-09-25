const socialArrow = (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 18" xmlSpace="preserve">
    <path d="M18,0v14.4h-3.6V7.2h-3.6V3.6H3.6V0H18z M7.2,10.8h3.6V7.2H7.2C7.2,7.2,7.2,10.8,7.2,10.8z M3.6,14.4h3.6v-3.6H3.6V14.4z M0,18h3.6v-3.6H0V18z" />
  </svg>
);

const socials = [
  { name: "Twitter", href: "https://twitter.com/Innectornet" },
  { name: "Instagram", href: "https://www.instagram.com/innectoritsolutions/" },
  { name: "Facebook", href: "https://www.facebook.com/innectornet.local" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/innector-net" },
];

export default function Footer() {
  return (
    <footer id="mxd-footer" className="mxd-footer blur-section">
      <div className="mxd-container grid-l-container">
        {/* Footer Block - Navigation v2 Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-6 mxd-footer__item">
                <nav className="mxd-footer__nav02">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-md-6 mxd-footer-nav02__item mxd-grid-item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down">
                              <span>/ Discover</span>
                            </p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              <li><a className="anim-uni-slide-down" href="/"><span>Home</span></a></li>
                              <li><a className="anim-uni-slide-down" href="/about"><span>About us</span></a></li>
                              <li><a className="anim-uni-slide-down" href="/services"><span>Services</span></a></li>
                              <li><a className="anim-uni-slide-down" href="/managed-it-services"><span>Managed IT Services</span></a></li>
                              <li><a className="anim-uni-slide-down" href="/blog"><span>Blog</span></a></li>
                              <li><a className="anim-uni-slide-down" href="/contact"><span>Contact</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mxd-footer-nav02__item mxd-grid-item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down">
                              <span>/ Contact</span>
                            </p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              <li>
                                <a className="anim-uni-slide-down" href="mailto:info@innector.net">
                                  <span>info@innector.net</span>
                                </a>
                              </li>
                              <li>
                                <a className="anim-uni-slide-down" href="tel:+9779705559159">
                                  <span>+977 970-555-9159</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down">
                              <span>/ Info</span>
                            </p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            <ul>
                              <li>
                                <a className="anim-uni-slide-down" href="/contact#faq"><span>FAQ</span></a>
                              </li>
                              <li>
                                <a className="anim-uni-slide-down" href="/privacy-policy"><span>Privacy Policy</span></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                <div className="mxd-footer__socials-list">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 mxd-footer-nav02__item">
                        <div className="mxd-footer-nav02__block">
                          <div className="mxd-footer-nav02__title">
                            <p className="footer-data anim-uni-slide-down">
                              <span>/ Follow Us</span>
                            </p>
                          </div>
                          <div className="mxd-footer-nav02__list">
                            {socials.map((social, index) => (
                              <a
                                className="socials-list__item slide-right-up"
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                key={social.href}
                              >
                                <div className="socials-list__divider divider-top anim-uni-clip-in"></div>
                                <div className="socials-list__info">
                                  <div className="socials-list__number anim-uni-slide-down">
                                    <span>[0{index + 1}]</span>
                                  </div>
                                  <div className="socials-list__name anim-uni-slide-down">
                                    <span>{social.name}</span>
                                  </div>
                                </div>
                                <div className="socials-list__arrow anim-uni-slide-down">
                                  <i>{socialArrow}</i>
                                </div>
                                <div className="socials-list__divider divider-bottom anim-uni-clip-in"></div>
                              </a>
                            ))}
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
        {/* Footer Block - Navigation v2 End */}

        {/* Footer Block - Controls Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-xl-6 mxd-footer__item"></div>
              <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                <div className="mxd-footer__controls-middle">
                  <div className="anim-uni-slide-down">
                    <a id="to-top" className="btn btn-line-icon btn-line-default slide-up" href="#">
                      <span className="btn-caption mxd-scramble">Back to Top</span>
                      <i>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18 18" xmlSpace="preserve">
                          <path d="M0,7.2h3.6v3.6H0V7.2z M10.8,3.6V0H7.2v3.6H3.6v3.6h3.6V18h3.6V7.2h3.6V3.6H10.8z M14.4,7.2v3.6H18V7.2H14.4z" />
                        </svg>
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Controls End */}

        {/* Footer Block - Fullwidth Text Start */}
        <div className="mxd-block">
          <div className="mxd-footer__fw-mark mxd-grid-item">
            <div className="fw-mark__wrap">
              <div className="fw-mark__content">
                <img
                  className="theme-logo--light anim-uni-fade-in"
                  src="/images/innector/innector-logo-black.svg"
                  alt="Innector"
                  style={{ width: "100%", height: "auto" }}
                />
                <img
                  className="theme-logo--dark anim-uni-fade-in"
                  src="/images/innector/innector-logo-white.svg"
                  alt="Innector"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Fullwidth Text End */}

        {/* Footer Block - Data Start */}
        <div className="mxd-block">
          <div className="mxd-footer__data">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-footer__item mxd-grid-item">
                  <div className="mxd-footer__data-item anim-uni-fade-in">
                    <p className="footer-data">
                      <span>© 2026 Innector IT Solutions Pvt. Ltd. All rights reserved</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-footer__item">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item">
                        <div className="mxd-footer__data-item anim-uni-fade-in">
                          <p className="footer-data">
                            <span>Chabahil, Kathmandu, Nepal</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item">
                        <div className="mxd-footer__data-item anim-uni-fade-in justify-end">
                          <p className="footer-data">
                            <span>©2026</span>
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
        {/* Footer Block - Data End */}
      </div>
    </footer>
  );
}
