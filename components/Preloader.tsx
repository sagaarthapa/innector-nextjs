export default function Preloader() {
  return (
    <>
      <div className="mxd-page-transition"></div>
      <div className="mxd-loader">
        <div className="mxd-loader__top">
          <span>Innector IT Solutions</span>
        </div>
        {/* 400x400 WebP thumbnails (about 10 KB each): this strip is only 200px wide and each frame shows for 0.14 s */}
        <div className="mxd-loader__images">
          <img src="/images/loader/brain.webp" width={200} height={200} alt="" />
          <img src="/images/loader/datacenter.webp" width={200} height={200} alt="" />
          <img src="/images/loader/custom-software.webp" width={200} height={200} alt="" />
          <img src="/images/loader/digital-marketing.webp" width={200} height={200} alt="" />
          <img src="/images/loader/mobile-app.webp" width={200} height={200} alt="" />
          <img src="/images/loader/branding.webp" width={200} height={200} alt="" />
          <img src="/images/loader/erp.webp" width={200} height={200} alt="" />
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
