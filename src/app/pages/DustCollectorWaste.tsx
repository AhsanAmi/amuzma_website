import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import type { CatalogProduct } from "../data/productCatalog";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const DUST_COLLECTOR_PRODUCTS: CatalogProduct[] = [
  {
    category: "Dust Collector",
    image: "/media/img36.webp",
    model: "DC2200",
    name: "Dust Collector",
    specs: [
      "Power : 230V-50Hz, 400V,3-50Hz 3.8W",
      "Airflow : 3900m3/hr 380Ltr",
      "Tank Capacity : 1x150 3x100mm",
    ],
    detailsHref: "/products/dust-collector-dc2200",
  },
  {
    category: "Dust Collector",
    image: "/media/img37.webp",
    model: "ABS5000",
    name: "Dust Collector",
    specs: [
      "Power : 3 HP / 2200W",
      "Airflow : Up to 5000 m³/h",
      "Tank Capacity : 200 mm (with 4 x 100 mm)",
    ],
    detailsHref: "/products/dust-collector-abs5000",
  },
  {
    category: "Dust Collector",
    image: "/media/img38-1.webp",
    model: "RDC3800",
    name: "Dust Collector",
    specs: [
      "Power : 230V-50Hz, 400V-3ph-50Hz, 3.8",
      "Airflow : 380 Ltr / 3900 m³/hr",
      "Tank Capacity : 1 x 150 mm, 3 x 100 mm",
    ],
    detailsHref: "/products/dust-collector-rdc3800",
  },
];

export function DustCollectorWaste() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="Dust Collector" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DUST_COLLECTOR_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.model} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
