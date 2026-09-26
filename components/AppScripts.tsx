"use client";

import { useState } from "react";
import Script from "next/script";

/* Loads the template's two scripts IN ORDER: app.js calls gsap, Lenis, ScrollTrigger... at the top of the file, so it must
   not run before libs.min.js has. Two next/script tags do not guarantee that (dynamically inserted scripts run in the
   order they finish downloading, and the small app file wins that race on a slow connection: "Lenis is not defined").
   Both files are preloaded in the layout's <head>, so waiting to insert the second one costs almost nothing. */
export default function AppScripts({ libs, app }: { libs: string; app: string }) {
  const [libsReady, setLibsReady] = useState(false);
  return (
    <>
      <Script src={libs} strategy="afterInteractive" onReady={() => setLibsReady(true)} />
      {libsReady && <Script src={app} strategy="afterInteractive" />}
    </>
  );
}
