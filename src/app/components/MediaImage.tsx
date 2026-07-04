import Image, { type ImageProps } from "next/image";

const STATIC_ASSET_PREFIXES = ["/media/", "/assets/", "/fonts/"];

function isStaticAsset(src: ImageProps["src"]): boolean {
  if (typeof src !== "string") return false;
  return STATIC_ASSET_PREFIXES.some((prefix) => src.startsWith(prefix));
}

/**
 * Serves pre-optimized static assets directly from /public instead of routing
 * them through the Next.js image optimizer, which adds several seconds of
 * latency per image in development and on cold cache hits.
 */
export function MediaImage({
  src,
  priority,
  loading,
  unoptimized,
  ...props
}: ImageProps) {
  const serveDirectly = unoptimized ?? isStaticAsset(src);

  return (
    <Image
      src={src}
      unoptimized={serveDirectly}
      priority={priority}
      loading={loading ?? (priority ? undefined : "lazy")}
      {...props}
    />
  );
}
