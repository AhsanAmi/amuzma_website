import Image, { type ImageProps } from "next/image";
import type { MouseEvent } from "react";

const STATIC_ASSET_PREFIXES = ["/media/", "/assets/", "/fonts/"];

function isStaticAsset(src: ImageProps["src"]): boolean {
  if (typeof src !== "string") return false;
  return STATIC_ASSET_PREFIXES.some((prefix) => src.startsWith(prefix));
}

function blockContextMenu(event: MouseEvent<HTMLImageElement>) {
  event.preventDefault();
  event.stopPropagation();
}

/**
 * Serves pre-optimized static assets directly from /public instead of routing
 * them through the Next.js image optimizer, which adds several seconds of
 * latency per image in development and on cold cache hits.
 *
 * Also discourages casual saving of product/banner images (right-click "Save
 * image as", drag-and-drop out of the page, mobile long-press). This is a
 * deterrent only: the image bytes are still delivered to the browser to be
 * displayed, so anyone using devtools, "view source", or a screenshot can
 * still obtain them.
 *
 * `pointer-events: none` is the reliable part — the browser only offers
 * "Save image as" when the right-click target is an <img>. Clicks still
 * reach parent links/buttons. Pass `style={{ pointerEvents: "auto" }}`
 * (and optionally your own onContextMenu) to opt a specific image out.
 */
export function MediaImage({
  src,
  priority,
  loading,
  unoptimized,
  style,
  className,
  draggable,
  onContextMenu,
  ...props
}: ImageProps) {
  const serveDirectly = unoptimized ?? isStaticAsset(src);

  return (
    <Image
      src={src}
      unoptimized={serveDirectly}
      priority={priority}
      loading={loading ?? (priority ? undefined : "lazy")}
      className={className}
      {...props}
      draggable={draggable ?? false}
      onContextMenu={onContextMenu ?? blockContextMenu}
      style={{
        WebkitTouchCallout: "none",
        WebkitUserDrag: "none",
        userSelect: "none",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
