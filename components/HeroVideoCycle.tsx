"use client";

import { useEffect, useRef } from "react";

/* The home hero video: three short clips played one after another.

   It used to be three 1280x720 files (7.9 + 2.0 + 3.0 MB) with preload="auto", so the first 8 MB started downloading
   the moment the page opened and competed with everything else on a phone connection. Now:
   - the files are re-encoded per screen (public/video/hero/*-p.mp4: a 540x720 portrait crop for phones, where the hero
     card is 3:4 and only the centre of the picture is ever visible; *-l.mp4: 1280x720 for tablets and desktops),
     roughly 1 MB and 1.5 MB per clip;
   - nothing is requested until the loading cover has lifted, and the next clip is only fetched once the current one is
     ~60% played;
   - with Data Saver, a 2G/3G connection or "reduce motion", no video is fetched at all: the poster image stays. */

const CLIPS = ["innector-brain-illustration", "innector-website-monitor", "innector-laptop-smartphone"];
const POSTER = "/images/hero/hero-poster.webp";

type Connection = { saveData?: boolean; effectiveType?: string };

export default function HeroVideoCycle() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const conn = (navigator as Navigator & { connection?: Connection }).connection;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || conn?.saveData || /^(slow-2g|2g|3g)$/.test(conn?.effectiveType ?? "")) return; // poster only

    const portrait = window.matchMedia("(max-width: 767px)").matches;
    const url = (i: number) => `/video/hero/${CLIPS[i]}-${portrait ? "p" : "l"}.mp4`;

    let index = 0;
    let warmedFor = -1;
    let warm: HTMLVideoElement | null = null; // held so the browser keeps downloading it
    let timer = 0;
    let stopped = false;

    const play = (i: number) => {
      index = i;
      video.src = url(i);
      video.load();
      video.play().catch(() => {});
    };
    const onEnded = () => play((index + 1) % CLIPS.length);
    const onTime = () => {
      const next = (index + 1) % CLIPS.length;
      if (warmedFor !== next && video.duration && video.currentTime / video.duration > 0.6) {
        warmedFor = next;
        warm = document.createElement("video");
        warm.preload = "auto";
        warm.muted = true;
        warm.src = url(next);
      }
    };

    // wait for app.js to say the loading cover is done or skipped ("mxd-ready", see mxdReady() in public/js/app.js), but
    // never more than 12 s (e.g. if that script failed to load)
    const start = () => {
      if (stopped) return;
      window.clearTimeout(timer);
      window.removeEventListener("mxd-ready", start);
      play(0);
    };
    if (document.documentElement.classList.contains("mxd-ready")) start();
    else {
      window.addEventListener("mxd-ready", start);
      timer = window.setTimeout(start, 12000);
    }

    video.addEventListener("ended", onEnded);
    video.addEventListener("timeupdate", onTime);
    return () => {
      stopped = true;
      window.clearTimeout(timer);
      window.removeEventListener("mxd-ready", start);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("timeupdate", onTime);
      warm = null;
    };
  }, []);

  return <video ref={videoRef} className="scaling-media__video" poster={POSTER} muted playsInline preload="none" aria-hidden="true" />;
}
