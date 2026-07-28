import Link from "next/link";
import type { CatalogProduct } from "../data/productCatalog";
import { MediaImage } from "./MediaImage";

export function CategoryProductCard({ product }: { product: CatalogProduct }) {
  return (
    <div className="flex min-w-0 flex-col border border-[#E5E5E5] bg-white">
      <div className="group flex h-[220px] items-center justify-center overflow-hidden bg-white p-5 sm:h-[280px] sm:p-6">
        <MediaImage
          src={product.image}
          alt={product.model}
          width={400}
          height={280}
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 pt-4">
        <h2 className="mb-3 font-gothic text-[20px] font-normal text-[#666666]">
          {product.category}
          <span className="mx-2 text-[#D0D0D0]">|</span>
          {product.model}
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
