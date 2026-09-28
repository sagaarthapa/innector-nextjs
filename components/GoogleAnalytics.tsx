import Script from "next/script";

const GA_ID = "G-Y2TM7TYPXT";

/* Google Analytics (gtag.js). strategy="lazyOnload" loads GA after the browser is idle, well behind the fonts/CSS/
   template scripts and the page's real content - an audit found Next was auto-preloading gtag.js on every page
   (competing bandwidth with the real LCP resource) under the previous "afterInteractive" strategy; analytics doesn't
   need to compete for the critical path the way the template's own scripts do (see AppScripts.tsx). */
export default function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
      <Script id="google-analytics" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
