"use client";

import Image, { type ImageProps } from "next/image";
import type { DragEvent, MouseEvent } from "react";

const STATIC_ASSET_PREFIXES = ["/media/", "/assets/", "/fonts/"];

function isStaticAsset(src: ImageProps["src"]): boolean {
  if (typeof src !== "string") return false;
  return STATIC_ASSET_PREFIXES.some((prefix) => src.startsWith(prefix));
}

function blockEvent(event: MouseEvent | DragEvent) {
  event.preventDefault();
}

/**
 * Serves pre-optimized static assets directly from /public instead of routing
 * them through the Next.js image optimizer.
 *
 * Casual download deterrents (not foolproof — DevTools/screenshots still work):
 * - Wrapper + overlay block right-click "Save image as" (click never hits <img>)
 * - draggable={false} + onDragStart prevent drag-to-desktop
 * - CSS: no selection, no iOS long-press save, pointer-events none on <img>
 */
export function MediaImage({
  src,
  priority,
  loading,
  unoptimized,
  fill,
  style,
  className,
  draggable,
  onContextMenu,
  onDragStart,
  ...props
}: ImageProps) {
  const serveDirectly = unoptimized ?? isStaticAsset(src);

  return (
    <span
      data-protect-image=""
      className={
        fill
          ? "absolute inset-0 block overflow-hidden"
          : "relative inline-block max-w-full leading-[0]"
      }
      onContextMenu={blockEvent}
    >
      <Image
        src={src}
        fill={fill}
        unoptimized={serveDirectly}
        priority={priority}
        loading={loading ?? (priority ? undefined : "lazy")}
        className={className}
        {...props}
        draggable={draggable ?? false}
        onContextMenu={onContextMenu ?? blockEvent}
        onDragStart={onDragStart ?? blockEvent}
        style={{
          WebkitTouchCallout: "none",
          userSelect: "none",
          pointerEvents: "none",
          ...style,
        }}
      />
      {/* Transparent shield: right-click / long-press hit this, not the <img>. */}
      <span
        aria-hidden
        className="absolute inset-0 z-[1]"
        onContextMenu={blockEvent}
        onDragStart={blockEvent}
      />
    </span>
  );
}
