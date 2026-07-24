import { CategoryProductCard } from "../components/CategoryProductCard";
import { PageBanner } from "../components/PageBanner";
import type { CatalogProduct } from "../data/productCatalog";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const SAW_PRODUCTS: CatalogProduct[] = [
  {
    category: "Saw",
    image: "/media/Prodocts/Band Saw Elite 65BS.png",
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
    image: "/media/Prodocts/Panel Saw 40PL.png",
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
    image: "/media/Panel-Saw-Firma-35PS-1-1-1.webp",
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
    image: "/media/Prodocts/Panel Saw 40PA.png",
    model: "Forte 40PA",
    name: "Panel Saw",
    specs: [
      "Main Blade Diameter : 400 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/panel-saw-forte-40pa",
  },
  {
    category: "Saw",
    image: "/media/Prodocts/Panel Saw 35TS.png",
    model: "Elite 35TS",
    name: "Panel Saw",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/panel-saw-elite-35ts",
  },
  {
    category: "Saw",
    image: "/media/Prodocts/Elite 35PS.png",
    model: "Elite 35PS",
    name: "Panel Saw",
    specs: [
      "Main Blade Diameter : 350 mm",
      "Main Blade Speed : 4000 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/panel-saw-elite-35ps",
  },
  {
    category: "Saw",
    image: "/media/Prodocts/ELITE 35EU.png",
    model: "Elite 35EU",
    name: "Panel Saw",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 3400rpm/50Hz",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/panel-saw-elite-35eu",
  },
  {
    category: "Saw",
    image: "/media/Prodocts/Beam Saw 33BS.png",
    model: "Firma 33BS",
    name: "Beam Saw",
    specs: [
      "Main saw motor power: 16.5KW",
      "Blade speeds : 0-100m/min",
      "Sawing height : 100mm",
    ],
    detailsHref: "/products/beam-saw-firma-33bs",
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
