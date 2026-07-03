/** Static files in `public/` — use as URL paths (e.g. `/assets/images/logo.png`). */
export const publicAsset = (path: string) =>
  `/assets/${path.replace(/^\/+/, "")}`;

/** Font files in `public/fonts/` — use in CSS or next/font/local. */
export const publicFont = (filename: string) =>
  `/fonts/${filename.replace(/^\/+/, "")}`;

/** Local font family names (loaded from public/fonts/). */
export const fonts = {
  poppins: "Poppins",
  rajdhani: "Rajdhani",
  goldie: "Goldie Sans",
  carrois: "Carrois Gothic",
} as const;
