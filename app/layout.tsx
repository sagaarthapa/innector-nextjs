import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Preloader from "@/components/Preloader";
import MenuOverlay from "@/components/MenuOverlay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IT Solutions Company In Nepal - Innector",
  description:
    "Innector was established in 2018. As an IT solutions provider in Kathmandu, Nepal, our IT services encompass a wide range of technologies and digital marketing solutions.",
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
        <link rel="stylesheet" type="text/css" href="/css/loader.css" precedence="low" />
        <link rel="stylesheet" type="text/css" href="/css/plugins.css" precedence="medium" />
        <link rel="stylesheet" type="text/css" href="/css/main.css" precedence="high" />
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

        <Script src="/js/libs.min.js" strategy="afterInteractive" />
        <Script src="/js/app.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
