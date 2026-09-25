/* "Our Core Values": six values on the brand-teal band, laid out with the template's Process Points columns.
   Shared by the home page ("Our story" band) and the About page so the wording lives in one place.
   Styling: .core-values in app/globals.css. */

const coreValues: { icon: string; title: string; text: string }[] = [
  {
    icon: "ph-lightbulb",
    title: "Innovation",
    text: "We constantly seek creative solutions and stay ahead of technology trends to deliver cutting-edge results for our clients.",
  },
  {
    icon: "ph-handshake",
    title: "Integrity",
    text: "We believe in honest communication, transparent processes, and building long-lasting relationships based on trust.",
  },
  {
    icon: "ph-medal",
    title: "Excellence",
    text: "We strive for perfection in every project, ensuring high-quality deliverables that exceed client expectations.",
  },
  {
    icon: "ph-users-three",
    title: "Collaboration",
    text: "We work closely with our clients as partners, ensuring their vision and goals are at the center of everything we do.",
  },
  {
    icon: "ph-shield-check",
    title: "Reliability",
    text: "We deliver on time, every time, and provide ongoing support to ensure your success long after project completion.",
  },
  {
    icon: "ph-chart-line-up",
    title: "Growth",
    text: "We're committed to helping your business grow and adapt to changing market conditions with scalable solutions.",
  },
];

export default function CoreValues({ id, eyebrow }: { id?: string; eyebrow?: { label: string; href: string } }) {
  return (
    <div id={id} className="mxd-section blur-section core-values">
      <div className="mxd-container grid-l-container">
        {/* Block - heading Start */}
        <div className="mxd-block">
          <div className="core-values__head">
            {eyebrow && (
              <div className="anim-uni-slide-up">
                <a className="btn btn-line btn-line-permanent" href={eyebrow.href}>
                  <span className="btn-caption mxd-scramble">{eyebrow.label}</span>
                </a>
              </div>
            )}
            <h2 className="reveal-type permanent">Our Core Values</h2>
            <p className="core-values__lead anim-uni-in-up">The principles that guide everything we do</p>
          </div>
        </div>
        {/* Block - heading End */}

        {/* Block - Process Points Start */}
        <div className="mxd-block">
          <div className="mxd-process-points">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {coreValues.map((value) => (
                  <div className="col-12 col-md-6 col-xl-4 mxd-process-points__item mxd-grid-item" key={value.title}>
                    <div className="mxd-process-points__divider top anim-uni-clip-in"></div>
                    <div className="mxd-process-points__title anim-uni-in-up">
                      <div className="mxd-process-points__icon">
                        <i className={`ph ${value.icon}`}></i>
                      </div>
                      <p className="permanent">{value.title}</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="mxd-split-lines">{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Process Points End */}
      </div>
    </div>
  );
}
