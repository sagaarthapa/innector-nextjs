"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Project = { title: string; tags: string[]; image: string; w: number; h: number; more?: string[] };

/* "Selected projects": clicking a card used to send every project to the same generic /services page - no per-project
   destination at all. This opens a lightbox over the current page instead (no navigation, so nothing to build a real
   destination for), with prev/next to step through every project without closing it, and Escape/backdrop-click/arrow
   keys as the usual affordances.

   The lightbox is portaled to document.body (see the render below), not rendered inline where this component sits:
   this grid lives inside the "Selected projects" pinned section, and GSAP's ScrollTrigger applies a transform to that
   section's pin-spacer while it's pinned. A transformed ancestor creates a new containing block for position:fixed
   descendants, so a fixed-position lightbox rendered inline here would end up positioned relative to that pinned
   section's box instead of the real viewport - confirmed with elementFromPoint during testing; portaling to body
   sidesteps the whole problem instead of fighting it. */
export default function ProjectsGrid({ projects, caseDir }: { projects: Project[]; caseDir: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // document.body isn't available during SSR/the first client render, so the portal target is only set after mount.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => setOpenIndex((i) => (i === null ? null : (i - 1 + projects.length) % projects.length)), [projects.length]);
  const next = useCallback(() => setOpenIndex((i) => (i === null ? null : (i + 1) % projects.length)), [projects.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    // Same tolerance level as the site's own full-screen menu overlay (components/MenuOverlay.tsx): it doesn't lock
    // Lenis either, just covers the viewport. Locking html overflow stops the ordinary scrollbar/wheel case without
    // reaching into app.js to pause the Lenis instance, which isn't exposed outside it.
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [openIndex, close, prev, next]);

  const active = openIndex !== null ? projects[openIndex] : null;

  return (
    <>
      <div className="row g-0 mxd-projects-grid__gallery">
        {projects.map((study, i) => {
          const src = `${caseDir}/${study.image}.webp`;
          return (
            <div className="col-12 col-md-6 col-xl-4 mxd-project-item animate-card-3" key={study.title}>
              <button
                type="button"
                className="mxd-project-item__media mxd-img-anim active-cursor-permanent"
                data-cursor-text="View Work"
                onClick={() => setOpenIndex(i)}
              >
                {/* hover frames (mxdHoverSlideshow needs at least one) */}
                {(study.more?.length ? study.more.map((m) => `${caseDir}/${m}.webp`) : [src]).map((frame) => (
                  <img loading="lazy" decoding="async"
                    className="mxd-img-anim__absolute"
                    key={frame}
                    src={frame}
                    width={study.w}
                    height={study.h}
                    alt=""
                  />
                ))}
                <img loading="lazy" decoding="async"
                  className="mxd-img-anim__main"
                  src={src}
                  width={study.w}
                  height={study.h}
                  alt={`${study.title} website`}
                />
              </button>
              <div className="mxd-project-item__caption">
                <div className="mxd-project-item__name">
                  <button type="button" className="project-name-s" onClick={() => setOpenIndex(i)}>
                    {study.title}
                  </button>
                </div>
                <div className="mxd-project-item__tags">
                  {study.tags.map((tag) => (
                    <span className="tag tag-s tag-medium mxd-scramble" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {mounted && active && createPortal(
        <div className="mxd-lightbox" role="dialog" aria-modal="true" aria-label={`${active.title} preview`} onClick={close}>
          <button type="button" className="mxd-lightbox__close" aria-label="Close" onClick={close}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            className="mxd-lightbox__arrow mxd-lightbox__arrow--prev"
            aria-label="Previous project"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            className="mxd-lightbox__arrow mxd-lightbox__arrow--next"
            aria-label="Next project"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          <div className="mxd-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              key={active.image}
              className="mxd-lightbox__image"
              src={`${caseDir}/${active.image}.webp`}
              width={active.w}
              height={active.h}
              alt={`${active.title} website`}
            />
            <div className="mxd-lightbox__caption">
              <h3>{active.title}</h3>
              <div className="mxd-lightbox__tags">
                {active.tags.map((tag) => (
                  <span className="tag tag-s tag-medium" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mxd-lightbox__counter">
                {openIndex! + 1} / {projects.length}
              </span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
