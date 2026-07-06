export function mediaUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/$/, "") ?? "";
  if (!base) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
