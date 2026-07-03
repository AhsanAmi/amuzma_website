"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CategoryProductCard } from "../components/CategoryProductCard";
import { ALL_PRODUCTS } from "../data/productCatalog";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";
const PRODUCTS_PER_PAGE = 6;

export function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(ALL_PRODUCTS.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = ALL_PRODUCTS.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white pt-10 lg:pt-16">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <img
          src="/media/banner_for_amuzma_website_10-6.jpg-1.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className={`relative ${PAGE_CONTAINER} py-10 text-center sm:py-[63px]`}>
          <h1 className="font-display text-[28px] font-bold uppercase leading-tight text-white sm:text-[36px] sm:leading-[36px]">
            Products
          </h1>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedProducts.map((product) => (
              <CategoryProductCard
                key={product.detailsHref}
                product={product}
              />
            ))}
          </div>

          {totalPages > 1 ? (
            <nav
              className="mt-12 flex flex-wrap items-center justify-center gap-2"
              aria-label="Products pagination"
            >
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="inline-flex h-10 items-center gap-1 border border-[#E5E5E5] bg-white px-4 font-gothic text-[14px] text-[#666666] transition-colors hover:border-[#C0202F] hover:text-[#C0202F] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#E5E5E5] disabled:hover:text-[#666666]"
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    aria-current={page === currentPage ? "page" : undefined}
                    className={`inline-flex h-10 min-w-10 items-center justify-center border px-3 font-gothic text-[14px] transition-colors ${
                      page === currentPage
                        ? "border-[#C0202F] bg-[#C0202F] text-white"
                        : "border-[#E5E5E5] bg-white text-[#666666] hover:border-[#C0202F] hover:text-[#C0202F]"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="inline-flex h-10 items-center gap-1 border border-[#E5E5E5] bg-white px-4 font-gothic text-[14px] text-[#666666] transition-colors hover:border-[#C0202F] hover:text-[#C0202F] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#E5E5E5] disabled:hover:text-[#666666]"
                aria-label="Next page"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </nav>
          ) : null}
        </div>
      </section>
    </div>
  );
}
