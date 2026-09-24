import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Preloader from "@/components/Preloader";
import MenuOverlay from "@/components/MenuOverlay";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "IT Solutions Company In Nepal - Innector",
  description:
    "Innector was established in 2018. As an IT solutions provider in Kathmandu, Nepal, our IT services encompass a wide range of technologies and digital marketing solutions.",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: "/favicon/apple-touch-icon.png",
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
