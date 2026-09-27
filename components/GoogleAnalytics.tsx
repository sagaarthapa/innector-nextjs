import Script from "next/script";

const GA_ID = "G-Y2TM7TYPXT";

/* Google Analytics (gtag.js). strategy="afterInteractive" is Next's own recommendation for GA: the two scripts load
   once the page is interactive instead of competing with the fonts/CSS/template scripts for the initial render, the
   same tradeoff the template's own scripts make (see AppScripts.tsx). */
export default function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
