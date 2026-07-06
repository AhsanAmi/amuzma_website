export function mediaUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/$/, "") ?? "";
  const normalizedPath = path.replace(/^\/+/, "");

  if (!base) {
    return `/${encodePath(normalizedPath)}`;
  }

  return `${base}/${encodePath(normalizedPath)}`;
}

function encodePath(path: string): string {
  let decoded = path;

  try {
    decoded = decodeURIComponent(path);
  } catch {
    // Keep the original path if it is not URI-encoded.
  }

  return decoded.split("/").map(encodeURIComponent).join("/");
}
