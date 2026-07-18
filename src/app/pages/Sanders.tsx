import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import type { CatalogProduct } from "../data/productCatalog";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const SANDER_PRODUCTS: CatalogProduct[] = [
  {
    category: "Sander",
    image: "/media/Prodocts/wide belt sander.png",
    model: "1300WS",
    name: "Wide Belt Sander",
    specs: [
      "Conveyor Belt Width : 240 mm",
      "Minimum Working : 3 mm",
      "Maximum Working : 1300 mm",
    ],
    detailsHref: "/products/wide-belt-sander-firma-1300ws",
  },
];

export function Sanders() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="Sanders" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SANDER_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.model} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
