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
  const videoSrc = encodeURI(video.src);

  // Start downloading as soon as the card is near the viewport so hover
  // playback is already buffered instead of waiting on a cold request.
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let delayTimer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        delayTimer = setTimeout(() => setShouldLoad(true), loadDelayMs);
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(card);
    return () => {
      observer.disconnect();
      if (delayTimer) clearTimeout(delayTimer);
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
      // If the user hovers before the staggered preload, start immediately.
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
