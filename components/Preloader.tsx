export default function Preloader() {
  return (
    <>
      <div className="mxd-page-transition"></div>
      <div className="mxd-loader">
        <div className="mxd-loader__top">
          <span>Innector IT Solutions</span>
        </div>
        {/* 400x400 WebP thumbnails (about 10 KB each): this strip is only 200px wide and each frame shows for 0.14 s.
            loading="lazy" here isn't about deferring the fetch (the fixed full-screen loader is on-screen from the
            first frame, so the browser fetches it immediately regardless) - it's so React/Next doesn't also emit an
            automatic <link rel="preload"> for each one, which was competing with the real LCP resource for
            bandwidth/priority on every page load (a site-wide audit finding, not specific to this component). */}
        <div className="mxd-loader__images">
          <img loading="lazy" decoding="async" src="/images/loader/brain.webp" width={200} height={200} alt="" />
          <img loading="lazy" decoding="async" src="/images/loader/datacenter.webp" width={200} height={200} alt="" />
          <img loading="lazy" decoding="async" src="/images/loader/custom-software.webp" width={200} height={200} alt="" />
          <img loading="lazy" decoding="async" src="/images/loader/digital-marketing.webp" width={200} height={200} alt="" />
          <img loading="lazy" decoding="async" src="/images/loader/mobile-app.webp" width={200} height={200} alt="" />
          <img loading="lazy" decoding="async" src="/images/loader/branding.webp" width={200} height={200} alt="" />
          <img loading="lazy" decoding="async" src="/images/loader/erp.webp" width={200} height={200} alt="" />
        </div>
        <div className="mxd-loader__bottom">
          <div className="mxd-loader__count">
            <span className="count__text">0</span>
            <span className="count__percent">%</span>
          </div>
          <span className="mxd-loader__caption">Loading</span>
        </div>
      </div>
    </>
  );
}
