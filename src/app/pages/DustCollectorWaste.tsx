import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import { ALL_PRODUCTS } from "../data/productCatalog";
import { PAGE_CONTAINER } from "../lib/pageLayout";

const DUST_PRODUCTS = ALL_PRODUCTS.filter(
  (p) => p.category === "Dust Extractors & Waste",
);

export function DustCollectorWaste() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="Dust Collector" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DUST_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.detailsHref} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
