"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Eye, FileText, X } from "lucide-react";
import { FULL_CATALOGUE_PDF } from "../data/productDocuments";

const DEFAULT_GALLERY_IMAGES = [
  "/media/cnc-1-1.webp",
  "/media/1-1.png",
  "/media/2-1.png",
  "/media/3.png",
  "/media/4.jpg",
];

const DEFAULT_PRODUCT_DESCRIPTION =
  "The FORTE 1325CR is a high-performance CNC router designed for woodworking, sign-making, and panel processing, delivering speed, precision, and reliable results across wood, MDF, plywood, acrylic, and composite materials.";

type ProductGallerySectionProps = {
  images?: string[];
  description?: string;
  productCataloguePdf?: string;
};

export function ProductGallerySection({
  images = DEFAULT_GALLERY_IMAGES,
  description = DEFAULT_PRODUCT_DESCRIPTION,
  productCataloguePdf,
}: ProductGallerySectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zooming, setZooming] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={activeImage}
                  src={activeImage}
                  alt="Product gallery"
                  className="h-full w-full object-contain transition-transform duration-100 ease-out"
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt=""
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
              <Link
                href="/quote"
                className="inline-block bg-[#C0202F] px-[15px] py-[10px] font-gothic text-[12px] font-normal uppercase leading-none text-white transition-opacity hover:opacity-90"
              >
                Add to Quote
              </Link>

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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={activeImage}
              src={activeImage}
              alt="Product gallery enlarged"
              className="h-full w-full object-contain"
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
