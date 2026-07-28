import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import { ALL_PRODUCTS } from "../data/productCatalog";
import { PAGE_CONTAINER } from "../lib/pageLayout";

const MOULDER_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Moulder");

export function Moulder() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="Moulder" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MOULDER_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.detailsHref} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
