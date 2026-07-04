import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import type { CatalogProduct } from "../data/productCatalog";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const PLANER_PRODUCTS: CatalogProduct[] = [
  {
    category: "Planer",
    image: "/media/img44-1.webp",
    model: "Elite 41PF",
    name: "Planer",
    specs: [
      "Cutter block Speed : 5500 rpm",
      "Cutter block Diameter : 70 mm",
      "Max Depth of Cut : 4 mm",
    ],
    detailsHref: "/products/planer-elite-41pf",
  },
  {
    category: "Planer",
    image: "/media/img45.webp",
    model: "Elite 41CM/CS",
    name: "Planer & Thicknesser",
    specs: [
      "Feed Speed : 7 m/min",
      "Cutter block Speed : 5500 rpm",
      "Cutter block Diameter : 120 mm",
    ],
    detailsHref: "/products/planer-elite-41cm-cs",
  },
  {
    category: "Planer",
    image: "/media/img46.webp",
    model: "Elite 41TH",
    name: "Thicknesser",
    specs: [
      "Feed Speed : 6.5 m/min",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/thicknesser-elite-41th",
  },
  {
    category: "Planer",
    image: "/media/img47.webp",
    model: "Firma 63TH",
    name: "Thicknesser",
    specs: [
      "Feed Speed : 7 m/min",
      "Cutter block Speed : 5500 rpm",
      "Cutter block Diameter : 70 mm",
    ],
    detailsHref: "/products/thicknesser-firma-63th",
  },
];

export function Planer() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="Planer" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLANER_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.model} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
