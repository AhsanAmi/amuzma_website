import Link from "next/link";
import type { CatalogProduct } from "../data/productCatalog";
import { MediaImage } from "./MediaImage";

export function CategoryProductCard({ product }: { product: CatalogProduct }) {
  return (
    <div className="group flex min-w-0 flex-col border border-[#E5E5E5] bg-white">
      <div className="relative h-[220px] overflow-hidden bg-white sm:h-[280px]">
        {/*
          Scale this whole padded box on hover (not the <img> itself): MediaImage's
          own wrapper clips tightly at its edges, so zooming the image directly
          would crop it. Scaling the box instead keeps the image intact, and the
          20-24px gap to the outer (clipped) edge is comfortably more than the
          ~5% growth, so it never escapes the card either.
        */}
        <div className="absolute inset-5 origin-center transition-transform duration-300 ease-out group-hover:scale-105 sm:inset-6">
          <MediaImage
            src={product.image}
            alt={product.model}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 pt-4">
        <h2 className="mb-3 font-gothic text-[20px] font-normal text-[#666666]">
          <span className="transition-all duration-300 ease-out group-hover:font-bold group-hover:text-[#C0202F]">
            {product.category}
          </span>
          <span className="mx-2 text-[#D0D0D0]">|</span>
          <span className="inline-block origin-left transition-all duration-300 ease-out group-hover:scale-105 group-hover:text-black">
            {product.model}
          </span>
        </h2>
        <hr className="mb-4 border-[#E5E5E5]" />
        <ul className="mb-6 flex-1 space-y-2 font-gothic text-[16px] font-normal text-[#666666]">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-start gap-2">
              <span className="mt-[2px] text-[10px] leading-none text-black">■</span>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href={product.detailsHref}
            className="btn-red-outline inline-flex h-[41px] items-center justify-center px-4 py-3 sm:px-6 font-gothic text-[15px] font-normal leading-none text-[#C0202F]"
          >
            View Details
          </Link>
          <Link
            href={product.detailsHref}
            className="btn-black-fill inline-flex h-[41px] items-center justify-center px-4 py-3 sm:px-6 font-gothic text-[15px] font-normal leading-none"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
