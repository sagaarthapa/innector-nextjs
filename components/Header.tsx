"use client";

import { usePathname } from "next/navigation";

const PERMANENT_DARK_HERO_ROUTES = ["/services", "/managed-it-services"];

export default function Header() {
  const pathname = usePathname();
  const isPermanent = PERMANENT_DARK_HERO_ROUTES.includes(pathname);

  return (
    <header id="header" className={`mxd-header${isPermanent ? " mxd-header-permanent" : ""}`}>
      {/* header logo */}
      <div className="mxd-header__logo loading-fade">
        <a className="mxd-logo" href="/">
          <img
            className="mxd-logo__image theme-logo--light"
            src="/images/innector/innector-logo-black.svg"
            alt="Innector"
            style={{ height: "28px", width: "auto" }}
          />
          <img
            className="mxd-logo__image theme-logo--dark"
            src="/images/innector/innector-logo-white.svg"
            alt="Innector"
            style={{ height: "28px", width: "auto" }}
          />
        </a>
      </div>
      {/* header controls */}
      <div className="mxd-header__controls loading-fade">
        <a className="btn mxd-header__link slide-right-up" href="/contact" aria-label="Say Hello">
          <span className="btn-caption mxd-scramble">Say Hello</span>
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
              <path d="M18,0v14.4h-3.6v-7.2h-3.6v-3.6H3.6V0h14.4ZM7.2,10.8h3.6v-3.6h-3.6s0,3.6,0,3.6ZM3.6,14.4h3.6v-3.6h-3.6v3.6ZM0,18h3.6v-3.6H0v3.6Z" />
            </svg>
          </i>
        </a>
        <button id="color-switcher" className="btn mxd-color-switcher" type="button" role="switch" aria-label="light/dark mode" aria-checked="true"></button>
      </div>
    </header>
  );
}
