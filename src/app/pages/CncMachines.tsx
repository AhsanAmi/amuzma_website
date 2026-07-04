import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import type { CatalogProduct } from "../data/productCatalog";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const CNC_PRODUCTS: CatalogProduct[] = [
  {
    category: "CNC Router",
    image: "/media/34.webp",
    model: "FORTE 13CR",
    name: "CNC Router",
    specs: [
      "Aluminum profile",
      "Table - T slots 1300 × 2500 × 200",
      "Table - T slots 1500 × 3000 × 200",
    ],
    detailsHref: "/products/cnc-router-forte-13cr",
  },
  {
    category: "CNC Router",
    image: "/media/img34.webp",
    model: "FORTE 15CR",
    name: "CNC Router",
    specs: [
      "Aluminum profile",
      "Table - T slots 1300 × 2500 × 200",
      "Table - T slots 1500 × 3000 × 200",
    ],
    detailsHref: "/products/cnc-router-forte-15cr",
  },
];

export function CncMachines() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="CNC Machines" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CNC_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.model} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
