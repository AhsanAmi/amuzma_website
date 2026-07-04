import Link from "next/link";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const EDGE_BANDER_PRODUCTS = [
  {
    image: "/media/img39.webp",
    model: "E5",
    name: "Edge Banding",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/edge-banding-e5",
  },
  {
    image: "/media/img40.webp",
    model: "P6",
    name: "Edge Banding",
    specs: [
      "Feeding Speed : 8 - 11 - 13 m/min",
      "Panel Thickness : 10 - 45 mm",
      "Edge Banding : 120 mm",
    ],
    detailsHref: "/products/edge-banding-p6",
  },
  {
    image: "/media/img41.webp",
    model: "C7",
    name: "Edge Banding",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/edge-banding-c7",
  },
];

function ProductCard({
  product,
}: {
  product: (typeof EDGE_BANDER_PRODUCTS)[number];
}) {
  return (
    <div className="flex flex-col border border-[#E5E5E5] bg-white">
      <div className="flex h-[220px] items-center justify-center bg-white p-5 sm:h-[280px] sm:p-6">
        <img
          src={product.image}
          alt={product.model}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 pt-4">
        <div className="mb-2 flex items-center gap-2">
          <img
            src="/media/logoheader.webp"
            alt="AMUZMA"
            className="h-5 w-auto object-contain"
          />
          <span className="text-[#D0D0D0]">|</span>
          <span className="font-heading text-[14px] font-medium uppercase tracking-wide text-[#666666]">
            {product.model}
          </span>
        </div>
        <h2 className="mb-3 font-gothic text-[20px] font-normal text-[#666666]">
          {product.name}
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
            className="inline-flex h-[41px] items-center justify-center border border-[#C0202F] bg-white px-4 py-3 sm:px-6 font-gothic text-[15px] font-normal leading-none text-[#C0202F] transition-colors hover:bg-[#FFF8F8]"
          >
            View Details
          </Link>
          <Link
            href="/quote"
            className="inline-flex h-[41px] items-center justify-center bg-black px-4 py-3 sm:px-6 font-gothic text-[15px] font-normal leading-none text-white transition-colors hover:bg-[#222222]"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export function EdgeBanders() {
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
            Edgebanders
          </h1>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EDGE_BANDER_PRODUCTS.map((product) => (
              <ProductCard key={product.model} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
