import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import type { CatalogProduct } from "../data/productCatalog";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const SAW_PRODUCTS: CatalogProduct[] = [
  {
    category: "Saw",
    image: "/media/img48.webp",
    model: "Elite 65BS",
    name: "Band Saw",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 3000 / 4000 / 5000 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/band-saw-65bs",
  },
  {
    category: "Saw",
    image: "/media/Web-photos-beam-saw-33bs-final.jpg",
    model: "Firma 33BS",
    name: "Beam Saw",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/beam-saw-firma-33bs",
  },
  {
    category: "Saw",
    image: "/media/img49.webp",
    model: "Firma 40PL",
    name: "Panel Saw",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/panel-saw-firma-40pl",
  },
  {
    category: "Saw",
    image: "/media/img.webp",
    model: "Firma 35PS",
    name: "Panel Saw",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/panel-saw-firma-35ps",
  },
  {
    category: "Saw",
    image: "/media/img3.webp",
    model: "Elite 35TS",
    name: "Panel Saw",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/panel-saw-elite-35ts",
  },
];

export function Saws() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="Saw Machines" />

      <section className="bg-white py-10">
        <div className={PAGE_CONTAINER}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAW_PRODUCTS.map((product) => (
              <CategoryProductCard key={product.detailsHref} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
