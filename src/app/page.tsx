import type { Metadata } from "next";
import { Home } from "./pages/Home";
import { createPageMetadata } from "./lib/pageMetadata";

export const metadata: Metadata = createPageMetadata("/");

export default function HomePage() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/media/Web-Front-Dubai-Exhibition-02.webp"
        fetchPriority="high"
      />
      <Home />
    </>
  );
}
