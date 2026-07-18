import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import type { CatalogProduct } from "../data/productCatalog";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const MOULDER_PRODUCTS: CatalogProduct[] = [
  {
    category: "Moulder",
    image: "/media/Prodocts/Elite 30SM.png",
    model: "Elite 30SM",
    name: "Spindle Moulder",
    specs: [
      "Spindle Diameter : 30 (32/35/40/50) mm",
      "Spindle Speeds : 1400/3500/6000/8000 RPM",
      "Spindle Stroke : 140 mm",
    ],
    detailsHref: "/products/spindle-moulder-elite-30sm",
  },
];

export function Moulder() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="Moulder Banders" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MOULDER_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.model} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
