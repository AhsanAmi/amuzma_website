"use client";

import { useEffect, useRef, useState } from "react";

type ExpertiseCardProps = {
  title: string;
  desc: string;
  bg: string;
  video: { src: string };
};

export function ExpertiseCard({ title, desc, bg, video }: ExpertiseCardProps) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    if (hovered) {
      element.play().catch(() => {});
      return;
    }

    element.pause();
    element.currentTime = 0;
  }, [hovered]);

  return (
    <div
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
        src={encodeURI(video.src)}
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
