export default function Preloader() {
  return (
    <>
      <div className="mxd-page-transition"></div>
      <div className="mxd-loader">
        <div className="mxd-loader__top">
          <span>Innector IT Solutions</span>
        </div>
        <div className="mxd-loader__images">
          <img src="/images/innector/brain-g216ffd9b8_1920-1024x780.jpg" alt="Innector" />
          <img src="/images/innector/datacenter.jpg" alt="Innector" />
          <img src="/images/innector/customsoftware.jpg" alt="Innector" />
          <img src="/images/innector/digitalmarketing.jpg" alt="Innector" />
          <img src="/images/innector/mobile-app.jpg" alt="Innector" />
          <img src="/images/innector/innectorbranding.jpg" alt="Innector" />
          <img src="/images/innector/erp-image.jpg" alt="Innector" />
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
