"use client";

import { useEffect, useRef } from "react";

const videos = [
  "/video/innector-brain-illustration.mp4",
  "/video/innector-website-monitor.mp4",
  "/video/innector-laptop-smartphone.mp4",
];

export default function HeroVideoCycle() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function playNext() {
      indexRef.current = (indexRef.current + 1) % videos.length;
      if (!video) return;
      video.src = videos[indexRef.current];
      video.load();
      video.play().catch(() => {});
    }

    video.addEventListener("ended", playNext);
    return () => video.removeEventListener("ended", playNext);
  }, []);

  return (
    <video
      ref={videoRef}
      className="scaling-media__video"
      src={videos[0]}
      poster="/images/innector/brain-g216ffd9b8_1920-1024x780.jpg"
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
}
