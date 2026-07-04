import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import type { CatalogProduct } from "../data/productCatalog";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const PRESS_PRODUCTS: CatalogProduct[] = [
  {
    category: "Press",
    image: "/media/img42-1.webp",
    model: "P 100T",
    name: "Veneer Door Press",
    specs: [
      "Total Pressure : 1000 kN",
      "Platen No & Size : 3 - 3000 x 1300 x 42 mm",
      "Specific Pressure : 2.6 kg/cm²",
    ],
    detailsHref: "/products/veneer-door-press-p-100t",
  },
];

export function Pressing() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="Presses" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRESS_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.model} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
