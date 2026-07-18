import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import type { CatalogProduct } from "../data/productCatalog";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const EDGE_BANDER_PRODUCTS: CatalogProduct[] = [
  {
    category: "Edge Banding",
    image: "/media/Prodocts/Edge Banding E5.png",
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
    category: "Edge Banding",
    image: "/media/Prodocts/Edge Banding P6.png",
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
    category: "Edge Banding",
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

export function EdgeBanders() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="Edgebanders" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EDGE_BANDER_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.model} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
