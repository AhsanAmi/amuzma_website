"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MediaImage as Image } from "./MediaImage";
import { ChevronLeft, ChevronRight, Eye, FileText, X } from "lucide-react";
import { FULL_CATALOGUE_PDF } from "../data/productDocuments";
import { AddToQuoteButton } from "./AddToQuoteButton";

const DEFAULT_GALLERY_IMAGES = [
  "/media/cnc-1-1.webp",
  "/media/1-1.webp",
  "/media/2-1.webp",
  "/media/3.webp",
  "/media/4.webp",
];

const DEFAULT_PRODUCT_DESCRIPTION =
  "The FORTE 1325CR is a high-performance CNC router designed for woodworking, sign-making, and panel processing, delivering speed, precision, and reliable results across wood, MDF, plywood, acrylic, and composite materials.";

type ProductGallerySectionProps = {
  images?: string[];
  description?: string;
  productCataloguePdf?: string;
  productId?: string;
  productName?: string;
  productModel?: string;
  productImage?: string;
};

/**
 * Warms the browser HTTP cache for the catalogue PDFs during idle time, so
 * that clicking "Product catalogue" / "Full catalogue" opens instantly
 * instead of waiting on a multi-second download. Assets under /assets/ are
 * served with immutable caching, so the prefetched response is reused.
 */
function usePrefetchPdfs(urls: (string | undefined)[]) {
  useEffect(() => {
    const controller = new AbortController();

    const prefetch = () => {
      for (const url of urls) {
        if (!url) continue;
        fetch(encodeURI(url), {
          signal: controller.signal,
          priority: "low",
        } as RequestInit).catch(() => {
          // Prefetching is best-effort; the link still works without it.
        });
      }
    };

    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(prefetch)
        : setTimeout(prefetch, 1500);

    return () => {
      controller.abort();
      if ("requestIdleCallback" in window) {
        window.cancelIdleCallback(idleId as number);
      } else {
        clearTimeout(idleId as ReturnType<typeof setTimeout>);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, urls);
}

export function ProductGallerySection({
  images = DEFAULT_GALLERY_IMAGES,
  description = DEFAULT_PRODUCT_DESCRIPTION,
  productCataloguePdf,
  productId,
  productName,
  productModel,
  productImage,
}: ProductGallerySectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zooming, setZooming] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  usePrefetchPdfs([productCataloguePdf, FULL_CATALOGUE_PDF]);

  const activeImage = images[activeIdx];

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    setZoomOrigin({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const goPrev = useCallback(() => {
    setActiveIdx((index) =>
      index === 0 ? images.length - 1 : index - 1
    );
  }, []);

  const goNext = useCallback(() => {
    setActiveIdx((index) =>
      index === images.length - 1 ? 0 : index + 1
    );
  }, []);

  useEffect(() => {
    setZooming(false);
    setZoomOrigin({ x: 50, y: 50 });
  }, [activeIdx]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, goPrev, goNext]);

  return (
    <>
      <section id="gallery" className="py-8">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <div
              ref={containerRef}
              className="relative overflow-hidden border border-[#E5E5E5] bg-white"
              onMouseEnter={() => setZooming(true)}
              onMouseLeave={() => {
                setZooming(false);
                setZoomOrigin({ x: 50, y: 50 });
              }}
              onMouseMove={handleMouseMove}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  key={activeImage}
                  src={activeImage}
                  alt="Product gallery"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain transition-transform duration-100 ease-out"
                  style={{
                    transform: zooming ? "scale(2.2)" : "scale(1)",
                    transformOrigin: `${zoomOrigin.x}% ${zoomOrigin.y}%`,
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="absolute right-3 top-3 bg-transparent p-0 text-[#E16010] transition-opacity hover:opacity-80"
                aria-label="Open image lightbox"
              >
                <Eye size={24} strokeWidth={2} className="fill-none" />
              </button>
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveIdx(index)}
                  className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden border bg-white ${
                    index === activeIdx ? "border-black" : "border-[#E5E5E5]"
                  }`}
                  aria-label={`View gallery image ${index + 1}`}
                  aria-current={index === activeIdx ? "true" : undefined}
                >
                  <Image
                    src={image}
                    alt=""
                    width={72}
                    height={72}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="border-y border-[#E5E5E5] py-6 font-gothic text-[16px] font-normal leading-[27.2px] text-[#666666]">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              {productId && productName && productImage ? (
                <AddToQuoteButton
                  productId={productId}
                  name={productName}
                  model={productModel}
                  image={productImage}
                  className="inline-block bg-[#C0202F] px-[15px] py-[10px] font-gothic text-[12px] font-normal uppercase leading-none text-white transition-opacity hover:opacity-90"
                >
                  Add to Quote
                </AddToQuoteButton>
              ) : null}

              {productCataloguePdf ? (
                <a
                  href={encodeURI(productCataloguePdf)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-gothic text-[15px] font-normal text-black transition-opacity hover:opacity-80"
                >
                  <FileText size={18} className="shrink-0 text-[#C0202F]" />
                  Product catalogue
                </a>
              ) : null}

              <a
                href={encodeURI(FULL_CATALOGUE_PDF)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-gothic text-[15px] font-normal text-black transition-opacity hover:opacity-80"
              >
                <FileText size={18} className="shrink-0 text-[#C0202F]" />
                Full catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label="Product image gallery"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-6 top-6 z-10 text-white transition-opacity hover:opacity-80"
            aria-label="Close lightbox"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          <span className="absolute right-16 top-7 z-10 font-gothic text-[16px] text-white">
            {activeIdx + 1} / {images.length}
          </span>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 z-10 text-white transition-opacity hover:opacity-80 md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>

          <div className="relative h-[75vh] w-[90vw] max-w-5xl">
            <Image
              key={activeImage}
              src={activeImage}
              alt="Product gallery enlarged"
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 z-10 text-white transition-opacity hover:opacity-80 md:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>
        </div>
      ) : null}
    </>
  );
}
