import { ALL_PRODUCTS } from "./productCatalog";

export type SearchEntry = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
  category: string;
  date: string;
  keywords: string;
};

const PRODUCT_META: Record<
  string,
  { title: string; excerpt: string; image?: string; date?: string }
> = {
  "cnc-router-forte-13cr": {
    title: "CNC ROUTER Forte 13CR",
    excerpt:
      "Smart Technology. Industrial Strength. Precision in Every Cut. High-performance CNC router with 1300×2500mm area, rigid steel frame, precision guides, powerful spindle for accurate sheet processing.",
    image: "/media/Prodocts/CNC 13CR.png",
    date: "February 23, 2026",
  },
  "cnc-router-forte-15cr": {
    title: "CNC ROUTER FORTE 15CR",
    excerpt:
      "Smart Technology. Industrial Strength. Precision in Every Cut. The FORTE 15CR features a 1500 x 3000 mm working area, ideal for full-size sheets with high-speed CNC router performance.",
    image: "/media/Prodocts/CNC Router 15CR.png",
    date: "February 23, 2026",
  },
  "cnc-router-forte-20cr": {
    title: "CNC ROUTER FORTE 20CR",
    excerpt:
      "Smart Technology. Industrial Strength. Precision in Every Cut. High-performance CNC router with 2000×3800×200 mm area, rigid steel frame, and powerful spindle.",
    image: "/media/Prodocts/CNC Router Firma 20CR.png",
    date: "February 23, 2026",
  },
  "fiber-laser-stark-30fl": {
    title: "Fiber Laser Stark 30FL",
    excerpt:
      "High-Speed Cutting. Precision Engineering. Industrial Performance. 6000W fiber laser with 3000×1500 mm working area and Cypcut 4000E control.",
    image: "/media/PNG/Fiber Laser.png",
    date: "August 1, 2026",
  },
  "wide-belt-sander-firma-1300ws": {
    title: "Wide Belt Sander Firma 1300WS",
    excerpt:
      "Precision wide belt sanding for superior surface finishing performance across professional woodworking applications.",
    image: "/media/Prodocts/wide belt sander.png",
    date: "February 20, 2026",
  },
  "dust-collector-dc2200": {
    title: "Dust Collector DC2200",
    excerpt:
      "Efficient extraction with compact design and clean results. Power: 230V-50Hz, 400V, 3-50Hz 3.8W. Airflow: 3900m³/hr 380Ltr.",
    image: "/media/PNG/DustCollector-AMUZMA DC2200.png",
    date: "February 18, 2026",
  },
  "dust-collector-abs5000": {
    title: "Dust Collector ABS5000",
    excerpt:
      "High-capacity dust extraction with 3 HP / 2200W power and airflow up to 5000 m³/h for industrial workshop environments.",
    image: "/media/PNG/Dust Collector ABS5000.png",
    date: "February 18, 2026",
  },
  "dust-collector-rdc3800": {
    title: "Dust Collector RDC3800",
    excerpt:
      "Reliable dust collection with 380 Ltr / 3900 m³/hr airflow and multi-port tank capacity for woodworking operations.",
    image: "/media/PNG/Dusy Collector RDC3800.png",
    date: "February 18, 2026",
  },
  "edge-banding-e5": {
    title: "Edge Banding E5",
    excerpt:
      "Precision edging with compact design and professional finish. Main blade diameter 315 mm at 4500 rpm.",
    image: "/media/Prodocts/Edge Banding E5.png",
    date: "February 17, 2026",
  },
  "edge-banding-p6": {
    title: "Edge Banding P6",
    excerpt:
      "High-performance edge banding with feeding speed 8–13 m/min, panel thickness 10–45 mm, and 120 mm edge banding capacity.",
    image: "/media/Prodocts/Edge Banding P6.png",
    date: "February 17, 2026",
  },
  "edge-banding-c7": {
    title: "Edge Banding C7",
    excerpt:
      "Professional edge banding with feeding speed 8-11-13 m/min, panel thickness 10-45 mm, and panel width/length 80/120mm.",
    image: "/media/img41.webp",
    date: "February 17, 2026",
  },
  "veneer-door-press-p-100t": {
    title: "Veneer Door Press Firma C8",
    excerpt:
      "Firma C8 hot press with 1000 kN total pressure for uniform veneer door bonding and reliable industrial production.",
    image: "/media/Prodocts/Hot Press C8.png",
    date: "February 16, 2026",
  },
  "spindle-moulder-elite-30sm": {
    title: "Spindle Moulder Elite 30SM",
    excerpt:
      "Advanced moulding technology for precise profiling and smooth, consistent finishes in professional woodworking.",
    image: "/media/Prodocts/Elite 30SM.png",
    date: "February 15, 2026",
  },
  "planer-elite-41pf": {
    title: "Planer Elite 41PF",
    excerpt:
      "Precision planer with 5500 rpm cutter block speed, 70 mm cutter block diameter, and 4 mm max depth of cut.",
    image: "/media/Prodocts/Elite 41PF.png",
    date: "February 14, 2026",
  },
  "planer-elite-41cm-cs": {
    title: "Planer & Thicknesser Elite 41CM/CS",
    excerpt:
      "Combined planer and thicknesser with 7 m/min feed speed and 5500 rpm cutter block for versatile workshop use.",
    image: "/media/Prodocts/Elite 41CM.png",
    date: "February 14, 2026",
  },
  "thicknesser-elite-41th": {
    title: "Thicknesser Elite 41TH",
    excerpt:
      "Reliable thicknesser with 6.5 m/min feed speed, 4500 rpm main blade speed, and 120 mm scoring blade diameter.",
    image: "/media/Prodocts/Elite 41TH.png",
    date: "February 14, 2026",
  },
  "thicknesser-firma-63th": {
    title: "Thicknesser Firma 63TH",
    excerpt:
      "Wide capacity thicknesser with 7 m/min feed speed and 5500 rpm cutter block for consistent panel processing.",
    image: "/media/Prodocts/Firma 63TH.png",
    date: "February 14, 2026",
  },
  "band-saw-65bs": {
    title: "Band Saw Elite 65BS",
    excerpt:
      "High-precision band saw with 315 mm main blade diameter and variable speed 3000 / 4000 / 5000 rpm.",
    image: "/media/Prodocts/Band Saw Elite 65BS.png",
    date: "February 13, 2026",
  },
  "beam-saw-firma-33bs": {
    title: "Beam Saw Firma 33BS",
    excerpt:
      "Industrial beam saw engineered for high-volume panel cutting with precision, stability, and reliable production performance.",
    image: "/media/Prodocts/Beam Saw 33BS.png",
    date: "February 13, 2026",
  },
  "panel-saw-firma-40pl": {
    title: "Panel Saw Firma 40PL",
    excerpt:
      "Professional panel saw with 315 mm main blade diameter, 4500 rpm blade speed, and 120 mm scoring blade.",
    image: "/media/Prodocts/Panel Saw 40PL.png",
    date: "February 13, 2026",
  },
  "panel-saw-firma-35ps": {
    title: "Panel Saw Firma 35PS",
    excerpt:
      "Compact panel saw engineered for clean, accurate cuts with 315 mm main blade and 4500 rpm performance.",
    image: "/media/Panel-Saw-Firma-35PS-1-1-1.webp",
    date: "February 13, 2026",
  },
  "panel-saw-forte-40pa": {
    title: "Panel Saw Forte 40PA",
    excerpt:
      "High-performance panel saw delivering precision cutting for panel processing and furniture manufacturing.",
    image: "/media/PNG/Panel Saw- Forte 40PA New.png",
    date: "February 13, 2026",
  },
  "panel-saw-elite-35ts": {
    title: "Panel Saw Elite 35TS",
    excerpt:
      "Elite panel saw with 315 mm main blade diameter and 4500 rpm speed for accurate sheet processing.",
    image: "/media/Prodocts/Panel Saw 35TS.png",
    date: "February 13, 2026",
  },
  "panel-saw-elite-35ps": {
    title: "Panel Saw Elite 35PS",
    excerpt:
      "Heavy-duty panel saw with 350 mm main blade diameter and 4000 rpm for precise industrial cutting.",
    image: "/media/Prodocts/Elite 35PS.png",
    date: "February 13, 2026",
  },
  "panel-saw-elite-35eu": {
    title: "Panel Saw Elite 35EU",
    excerpt:
      "Compact panel saw with 315 mm main blade diameter and 3400 rpm for efficient workshop production.",
    image: "/media/Prodocts/ELITE 35EU.png",
    date: "February 13, 2026",
  },
};

function productToSearchEntry(product: (typeof ALL_PRODUCTS)[number]): SearchEntry {
  const slug = product.detailsHref.replace("/products/", "");
  const meta = PRODUCT_META[slug];

  const title =
    meta?.title ?? `${product.name.toUpperCase()} ${product.model}`;
  const excerpt =
    meta?.excerpt ?? product.specs.slice(0, 2).join(". ") + ".";
  const image = meta?.image ?? product.image;
  const date = meta?.date ?? "February 23, 2026";

  const keywords = [
    title,
    product.name,
    product.model,
    ...product.specs,
    excerpt,
  ]
    .join(" ")
    .toLowerCase();

  return {
    id: `product-${slug}`,
    title,
    excerpt,
    href: product.detailsHref,
    image,
    category: product.category,
    date,
    keywords,
  };
}

export const SEARCH_INDEX: SearchEntry[] = [
  ...ALL_PRODUCTS.map(productToSearchEntry),
];
