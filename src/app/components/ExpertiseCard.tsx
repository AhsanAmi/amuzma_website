"use client";

import { useEffect, useRef, useState } from "react";

type ExpertiseCardProps = {
  title: string;
  desc: string;
  bg: string;
  video: { src: string };
  /** Stagger downloads so cards do not compete for bandwidth. */
  loadDelayMs?: number;
};

export function ExpertiseCard({
  title,
  desc,
  bg,
  video,
  loadDelayMs = 0,
}: ExpertiseCardProps) {
  const [hovered, setHovered] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = video.src;

  // Start downloading as soon as the browser is idle after the initial page
  // render, instead of waiting for the card to scroll into view. Cards are
  // staggered via loadDelayMs so the four videos don't all start at once and
  // starve the critical page content (hero image, fonts) of bandwidth. By
  // the time the visitor scrolls down to this section, the video is already
  // fully buffered and plays instantly on hover.
  useEffect(() => {
    let delayTimer: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | ReturnType<typeof setTimeout>;

    const trigger = () => setShouldLoad(true);
    const schedule = () => {
      delayTimer = setTimeout(trigger, loadDelayMs);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(schedule, { timeout: 2000 });
    } else {
      idleId = setTimeout(schedule, 1000);
    }

    return () => {
      if (delayTimer) clearTimeout(delayTimer);
      if ("requestIdleCallback" in window) {
        window.cancelIdleCallback(idleId as number);
      } else {
        clearTimeout(idleId as ReturnType<typeof setTimeout>);
      }
    };
  }, [loadDelayMs]);

  useEffect(() => {
    const element = videoRef.current;
    if (!element || !shouldLoad) return;

    element.preload = "auto";
    element.load();
  }, [shouldLoad, videoSrc]);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    if (hovered) {
      // If the user hovers before the staggered preload kicks in, start
      // immediately instead of waiting.
      if (!shouldLoad) setShouldLoad(true);
      element.play().catch(() => {});
      return;
    }

    element.pause();
    element.currentTime = 0;
  }, [hovered, shouldLoad]);

  return (
    <div
      ref={cardRef}
      className="relative flex min-h-[380px] flex-col items-center justify-center overflow-hidden px-5 py-10 text-center text-white sm:min-h-[480px] lg:min-h-[600px] lg:justify-start"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{ backgroundColor: bg, opacity: hovered ? 0 : 1 }}
      />

      <video
        ref={videoRef}
        src={shouldLoad ? videoSrc : undefined}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{ backgroundColor: bg, opacity: hovered ? 0.65 : 0 }}
      />

      <div className="relative z-10">
        <h2 className="mb-4 font-gothic text-[28px] font-normal leading-tight text-white sm:mb-6 sm:text-[36px] sm:leading-[36px]">
          {title}
        </h2>
        <p className="text-[16px] font-normal leading-relaxed text-white">
          {desc}
        </p>
      </div>
    </div>
  );
}
