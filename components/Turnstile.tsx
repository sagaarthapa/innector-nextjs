"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export type TurnstileHandle = { reset: () => void };

type Props = {
  onToken: (token: string) => void;
  onExpire?: () => void;
};

// Renders nothing (and verification server-side falls back to open) until NEXT_PUBLIC_TURNSTILE_SITE_KEY is set -
// see lib/turnstile.ts for the matching server-side fallback.
const Turnstile = forwardRef<TurnstileHandle, Props>(function Turnstile({ onToken, onExpire }, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  function renderWidget() {
    if (!siteKey || !containerRef.current || !window.turnstile || widgetIdRef.current) return;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: onToken,
      "expired-callback": () => onExpire?.(),
      "error-callback": () => onExpire?.(),
    });
  }

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetIdRef.current && window.turnstile) window.turnstile.reset(widgetIdRef.current);
    },
  }));

  if (!siteKey) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onReady={renderWidget}
      />
      <div ref={containerRef} className="mxd-grid-item" style={{ margin: "1.2rem 0.2rem" }} />
    </>
  );
});

export default Turnstile;
