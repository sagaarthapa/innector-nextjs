import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/Preloader";
import MenuOverlay from "@/components/MenuOverlay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AppScripts from "@/components/AppScripts";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { versioned } from "@/lib/assets";
import { SEO } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // default for any page that does not set its own metadata export (title, description, canonical, OG/Twitter tags -
  // every page currently does set its own via lib/seo.ts, but this is what a page added without one would fall back to)
  ...SEO.home,
  // Google's favicon guidelines: square, a multiple of 48px (48/96/192 below), stable URLs,
  // and a /favicon.ico at the site root.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#EEEAE8" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0f0f0f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Identifies the business (name, logo, phone, address, service area, social profiles) to search engines on
            every page - what lets a business panel or a rich result show up for the company itself. */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {/* minified copies (npm run assets rebuilds them from the readable sources); ?v= is a content hash, see lib/assets.ts */}
        <link rel="stylesheet" type="text/css" href={versioned("/css/loader.min.css")} precedence="low" />
        <link rel="stylesheet" type="text/css" href={versioned("/css/plugins.min.css")} precedence="medium" />
        <link rel="stylesheet" type="text/css" href={versioned("/css/icons.min.css")} precedence="medium" />
        <link rel="stylesheet" type="text/css" href={versioned("/css/main.min.css")} precedence="high" />
        {/* the two self-hosted fonts are needed for the first paint: start fetching them with the HTML, not after main.css */}
        <link rel="preload" href="/fonts/manrope-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/jetbrains-mono-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* icon font: font-display:block means icons stay invisible for up to 3s until this loads; each file is only
            3-4 KB (subset to the ~25 icons the site uses), so preloading all three weights is cheap and shortens
            that invisible window instead of waiting for main.css/icons.css to be parsed and the request discovered */}
        <link rel="preload" href="/fonts/phosphor.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/phosphor-fill.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/phosphor-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* the scripts are injected after hydration; a preload lets them download in parallel with it */}
        <link rel="preload" href={versioned("/js/libs.min.js")} as="script" />
        <link rel="preload" href={versioned("/js/app.min.js")} as="script" />
      </head>
      <body suppressHydrationWarning>
        <Preloader />
        <MenuOverlay />
        <Header />

        <main id="mxd-page-content" className="mxd-page-content">
          {children}
        </main>

        <Footer />
        <CustomCursor />

        <AppScripts libs={versioned("/js/libs.min.js")} app={versioned("/js/app.min.js")} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
