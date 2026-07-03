import Link from "next/link";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const PRESS_PRODUCT = {
  image: "/media/img42-1.png",
  model: "P 100T",
  name: "Veneer Door Press",
  specs: [
    "Total Pressure : 1000 kN",
    "Platen No & Size : 3 - 3000 x 1300 x 42 mm",
    "Specific Pressure : 2.6 kg/cm²",
  ],
  detailsHref: "/products/veneer-door-press-p-100t",
};

export function Pressing() {
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
            Presses
          </h1>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col border border-[#E5E5E5] bg-white">
              <div className="flex h-[220px] items-center justify-center bg-white p-5 sm:h-[280px] sm:p-6">
                <img
                  src={PRESS_PRODUCT.image}
                  alt={PRESS_PRODUCT.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 pt-4">
                <div className="mb-2 flex items-center gap-2">
                  <img
                    src="/media/logoheader.jpg"
                    alt="AMUZMA"
                    className="h-5 w-auto object-contain"
                  />
                  <span className="text-[#D0D0D0]">|</span>
                  <span className="font-heading text-[14px] font-medium uppercase tracking-wide text-[#666666]">
                    {PRESS_PRODUCT.model}
                  </span>
                </div>
                <h2 className="mb-3 font-gothic text-[20px] font-normal text-[#666666]">
                  {PRESS_PRODUCT.name}
                </h2>
                <hr className="mb-4 border-[#E5E5E5]" />
                <ul className="mb-6 flex-1 space-y-2 font-gothic text-[16px] font-normal text-[#666666]">
                  {PRESS_PRODUCT.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2">
                      <span className="mt-[2px] text-[10px] leading-none text-black">■</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={PRESS_PRODUCT.detailsHref}
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
          </div>
        </div>
      </section>
    </div>
  );
}
