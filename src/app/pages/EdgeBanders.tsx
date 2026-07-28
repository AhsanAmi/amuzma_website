import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import { ALL_PRODUCTS } from "../data/productCatalog";
import { PAGE_CONTAINER } from "../lib/pageLayout";

const EDGE_BANDER_PRODUCTS = ALL_PRODUCTS.filter(
  (p) => p.category === "Edgebanders",
).map((p) => ({ ...p, category: "Edge Banding" }));

export function EdgeBanders() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="Edgebanders" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EDGE_BANDER_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.detailsHref} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
