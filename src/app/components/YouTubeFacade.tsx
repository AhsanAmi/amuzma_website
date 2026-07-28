"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { MediaImage as Image } from "./MediaImage";

function youtubeThumb(videoId: string, quality: "maxresdefault" | "sddefault" | "hqdefault") {
  return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
}

/**
 * Click-to-load YouTube embed: shows only the thumbnail until the user
 * plays it, so the heavy YouTube player JS/iframe never loads on page load.
 * Uses maxresdefault (1280×720) for sharp thumbnails; falls back if missing.
 */
export function YouTubeFacade({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [activated, setActivated] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    youtubeThumb(videoId, "maxresdefault"),
  );

  if (activated) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Play video: ${title}`}
      className="group relative block h-full w-full cursor-pointer"
    >
      <Image
        key={thumbSrc}
        src={thumbSrc}
        alt={title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        quality={90}
        className="object-cover"
        onError={() => {
          if (thumbSrc.includes("maxresdefault")) {
            setThumbSrc(youtubeThumb(videoId, "sddefault"));
          } else if (thumbSrc.includes("sddefault")) {
            setThumbSrc(youtubeThumb(videoId, "hqdefault"));
          }
        }}
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 transition-colors group-hover:bg-[#C0202F]">
          <Play size={22} fill="white" stroke="white" className="ml-1" />
        </span>
      </span>
    </button>
  );
}
