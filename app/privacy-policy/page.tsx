import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy - Innector IT Solutions",
  description:
    "Privacy Policy - Innector IT Solutions. Learn how we collect, use, and protect your personal information.",
};

type PolicySection = {
  title: string;
  body: ReactNode;
};

const sections: PolicySection[] = [
  {
    title: "1. Information We Collect",
    body: (
      <>
        <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
        <p className="t-bold">Personal Data</p>
        <p>Personally identifiable information that you voluntarily give to us when you:</p>
        <ul>
          <li className="anim-uni-in-up">Contact us through our website or email</li>
          <li className="anim-uni-in-up">Request information about our services</li>
          <li className="anim-uni-in-up">Subscribe to our newsletter</li>
          <li className="anim-uni-in-up">Engage with us on social media</li>
        </ul>
        <p className="t-bold">Usage Data</p>
        <p>Information automatically collected when you visit our website, including:</p>
        <ul>
          <li className="anim-uni-in-up">IP address and browser information</li>
          <li className="anim-uni-in-up">Pages visited and time spent on our site</li>
          <li className="anim-uni-in-up">Referring website information</li>
          <li className="anim-uni-in-up">Device and operating system information</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li className="anim-uni-in-up">Provide and maintain our services</li>
          <li className="anim-uni-in-up">Respond to your inquiries and provide customer support</li>
          <li className="anim-uni-in-up">Send you marketing communications (with your consent)</li>
          <li className="anim-uni-in-up">Improve our website and services</li>
          <li className="anim-uni-in-up">Comply with legal obligations</li>
          <li className="anim-uni-in-up">Protect against fraudulent or illegal activities</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Information Sharing and Disclosure",
    body: (
      <>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your
          information in the following circumstances:
        </p>
        <ul>
          <li className="anim-uni-in-up">
            <strong>Service Providers:</strong> With trusted third-party service providers who help us
            operate our business
          </li>
          <li className="anim-uni-in-up">
            <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
          </li>
          <li className="anim-uni-in-up">
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of our
            business
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Data Security",
    body: (
      <p>
        We implement appropriate technical and organizational security measures to protect your personal
        information against unauthorized access, alteration, disclosure, or destruction. However, no
        method of transmission over the internet is 100% secure.
      </p>
    ),
  },
  {
    title: "5. Your Rights",
    body: (
      <>
        <p>Depending on your location, you may have certain rights regarding your personal information:</p>
        <ul>
          <li className="anim-uni-in-up">Access to your personal data</li>
          <li className="anim-uni-in-up">Correction of inaccurate data</li>
          <li className="anim-uni-in-up">Deletion of your personal data</li>
          <li className="anim-uni-in-up">Objection to processing of your data</li>
          <li className="anim-uni-in-up">Data portability</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Cookies and Tracking Technologies",
    body: (
      <p>
        Our website may use cookies and similar tracking technologies to enhance your browsing experience.
        You can control cookie settings through your browser preferences.
      </p>
    ),
  },
  {
    title: "7. Third-Party Links",
    body: (
      <p>
        Our website may contain links to third-party websites. We are not responsible for the privacy
        practices of these external sites. We encourage you to review their privacy policies.
      </p>
    ),
  },
  {
    title: "8. Children's Privacy",
    body: (
      <p>
        Our services are not intended for children under 13 years of age. We do not knowingly collect
        personal information from children under 13.
      </p>
    ),
  },
  {
    title: "9. Changes to This Privacy Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting
        the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
      </p>
    ),
  },
  {
    title: "10. Contact Us",
    body: (
      <>
        <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
        <ul>
          <li className="anim-uni-in-up">
            <strong>Email:</strong>{" "}
            <a className="tag tag-s-mobile mxd-scramble" href="mailto:info@innector.net">
              info@innector.net
            </a>
          </li>
          <li className="anim-uni-in-up">
            <strong>Phone:</strong>{" "}
            <a className="tag tag-s-mobile mxd-scramble" href="tel:+9779851118818">
              +977 985-111-8818
            </a>
          </li>
          <li className="anim-uni-in-up">
            <strong>Address:</strong>{" "}
            <a
              className="tag tag-s-mobile"
              href="https://www.google.com/maps/search/?api=1&query=Chabahil+Kathmandu+Nepal"
              target="_blank"
              rel="noreferrer"
            >
              Chabahil, Kathmandu, Nepal, Opposite of Helping Hands Hospital
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
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

      {/* Section - Inner Headline v04 Start */}
      <div className="mxd-section blur-section padding-bottom-default">
        <div className="mxd-container grid-l-container">
          {/* Block - Inner Headline v04 Start */}
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
                        <span className="current-item">Privacy Policy</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* content */}
                    <div className="inner-headline__content has-medium-title">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-xl-6 mxd-grid-item">
                            <div className="inner-headline__title pre-subtitle-medium">
                              <h1 className="medium loading-split">Privacy Policy</h1>
                            </div>
                            <div className="inner-headline__subtitle">
                              <p className="loading-split">
                                How we collect, use, <span>and protect your personal information</span>
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-xl-6 mxd-grid-item">
                            {/* split header caption */}
                            <div className="inner-headline__caption split-caption pre-grid">
                              <p className="t-bold t-large loading-split">
                                Last updated: January 1, 2022.{" "}
                                <span>
                                  At Innector IT Solutions (&quot;we,&quot; &quot;our,&quot; or
                                  &quot;us&quot;), we are committed to protecting your privacy and
                                  ensuring the security of your personal information.
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
          </div>
          {/* Block - Inner Headline v04 End */}
        </div>
      </div>
      {/* Section - Inner Headline v04 End */}

      {/* Section - Parallax Divider Image Start */}
      <div className="mxd-section blur-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div className="mxd-divider__image divider-image-9 parallax-img"></div>
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider Image End */}

      {/* Sections - Section Title & Text Block (one per policy section) Start */}
      {sections.map((section, index) => (
        <div
          className={`mxd-section blur-section${index === 0 ? " padding-top-title" : " padding-top-default"}${
            index === sections.length - 1 ? " padding-bottom-tag-m" : " padding-bottom-default"
          }`}
          key={section.title}
        >
          <div className="mxd-container grid-l-container">
            {/* Block - Section Title & Text Block Start */}
            <div className="mxd-block">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item">
                    {/* section title */}
                    <div className="mxd-section-title">
                      <div className="mxd-section-title__title pre-caption">
                        <h2 className="mxd-split-lines">{section.title}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item">
                    {/* paragraph */}
                    <div className="mxd-section-title__paragraph">{section.body}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title & Text Block End */}
          </div>
        </div>
      ))}
      {/* Sections - Section Title & Text Block End */}

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
                      <span className="btn-caption mxd-scramble">Get In Touch</span>
                    </a>
                  </div>
                  <div className="mxd-promo__caption">
                    <a className="active-cursor-accent" data-cursor-text="Contact Us" href="/contact">
                      <h2 className="opposite mxd-split-lines">Questions about your data? Let&apos;s talk</h2>
                    </a>
                  </div>
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
