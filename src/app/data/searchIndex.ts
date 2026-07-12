import { ALL_PRODUCTS } from "./productCatalog";

export type SearchEntry = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
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
    image: "/media/CNC-13CR-1.webp",
    date: "February 23, 2026",
  },
  "cnc-router-forte-15cr": {
    title: "CNC ROUTER FORTE 15CR",
    excerpt:
      "Smart Technology. Industrial Strength. Precision in Every Cut. The FORTE 15CR features a 1500 x 3000 mm working area, ideal for full-size sheets with high-speed CNC router performance.",
    image: "/media/CNC-13CR-1.webp",
    date: "February 23, 2026",
  },
  "wide-belt-sander-firma-1300ws": {
    title: "Wide Belt Sander Firma 1300WS",
    excerpt:
      "Precision wide belt sanding for superior surface finishing performance across professional woodworking applications.",
    image: "/media/wide-belt-sander.webp",
    date: "February 20, 2026",
  },
  "dust-collector-dc2200": {
    title: "Dust Collector DC2200",
    excerpt:
      "Efficient extraction with compact design and clean results. Power: 230V-50Hz, 400V, 3-50Hz 3.8W. Airflow: 3900m³/hr 380Ltr.",
    image: "/media/img36.webp",
    date: "February 18, 2026",
  },
  "dust-collector-abs5000": {
    title: "Dust Collector ABS5000",
    excerpt:
      "High-capacity dust extraction with 3 HP / 2200W power and airflow up to 5000 m³/h for industrial workshop environments.",
    image: "/media/img37.webp",
    date: "February 18, 2026",
  },
  "dust-collector-rdc3800": {
    title: "Dust Collector RDC3800",
    excerpt:
      "Reliable dust collection with 380 Ltr / 3900 m³/hr airflow and multi-port tank capacity for woodworking operations.",
    image: "/media/img38-1.webp",
    date: "February 18, 2026",
  },
  "edge-banding-e5": {
    title: "Edge Banding E5",
    excerpt:
      "Precision edging with compact design and professional finish. Main blade diameter 315 mm at 4500 rpm.",
    image: "/media/img39.webp",
    date: "February 17, 2026",
  },
  "edge-banding-p6": {
    title: "Edge Banding P6",
    excerpt:
      "High-performance edge banding with feeding speed 8–13 m/min, panel thickness 10–45 mm, and 120 mm edge banding capacity.",
    image: "/media/img40.webp",
    date: "February 17, 2026",
  },
  "edge-banding-c7": {
    title: "Edge Banding C7",
    excerpt:
      "Professional edge banding machine delivering seamless finishes, strong adhesion, and precise trimming for furniture manufacturing.",
    image: "/media/img41.webp",
    date: "February 17, 2026",
  },
  "veneer-door-press-p-100t": {
    title: "Veneer Door Press P 100T",
    excerpt:
      "Industrial veneer door press with 1000 kN total pressure and 3 platen configuration for high-quality panel pressing.",
    image: "/media/img42-1.webp",
    date: "February 16, 2026",
  },
  "spindle-moulder-elite-30sm": {
    title: "Spindle Moulder Elite 30SM",
    excerpt:
      "Advanced moulding technology for precise profiling and smooth, consistent finishes in professional woodworking.",
    image: "/media/img43.webp",
    date: "February 15, 2026",
  },
  "planer-elite-41pf": {
    title: "Planer Elite 41PF",
    excerpt:
      "Precision planer with 5500 rpm cutter block speed, 70 mm cutter block diameter, and 4 mm max depth of cut.",
    image: "/media/img44-1.webp",
    date: "February 14, 2026",
  },
  "planer-elite-41cm-cs": {
    title: "Planer & Thicknesser Elite 41CM/CS",
    excerpt:
      "Combined planer and thicknesser with 7 m/min feed speed and 5500 rpm cutter block for versatile workshop use.",
    image: "/media/img45.webp",
    date: "February 14, 2026",
  },
  "thicknesser-elite-41th": {
    title: "Thicknesser Elite 41TH",
    excerpt:
      "Reliable thicknesser with 6.5 m/min feed speed, 4500 rpm main blade speed, and 120 mm scoring blade diameter.",
    image: "/media/img46.webp",
    date: "February 14, 2026",
  },
  "thicknesser-firma-63th": {
    title: "Thicknesser Firma 63TH",
    excerpt:
      "Wide capacity thicknesser with 7 m/min feed speed and 5500 rpm cutter block for consistent panel processing.",
    image: "/media/img47.webp",
    date: "February 14, 2026",
  },
  "band-saw-65bs": {
    title: "Band Saw Elite 65BS",
    excerpt:
      "High-precision band saw with 315 mm main blade diameter and variable speed 3000 / 4000 / 5000 rpm.",
    image: "/media/img48.webp",
    date: "February 13, 2026",
  },
  "beam-saw-firma-33bs": {
    title: "Beam Saw Firma 33BS",
    excerpt:
      "Industrial beam saw engineered for high-volume panel cutting with precision, stability, and reliable production performance.",
    image: "/media/Web-photos-beam-saw-33bs-final.jpg",
    date: "February 13, 2026",
  },
  "panel-saw-firma-40pl": {
    title: "Panel Saw Firma 40PL",
    excerpt:
      "Professional panel saw with 315 mm main blade diameter, 4500 rpm blade speed, and 120 mm scoring blade.",
    image: "/media/img49.webp",
    date: "February 13, 2026",
  },
  "panel-saw-firma-35ps": {
    title: "Panel Saw Firma 35PS",
    excerpt:
      "Compact panel saw engineered for clean, accurate cuts with 315 mm main blade and 4500 rpm performance.",
    image: "/media/img.webp",
    date: "February 13, 2026",
  },
  "panel-saw-forte-40pa": {
    title: "Panel Saw Forte 40PA",
    excerpt:
      "High-performance panel saw delivering precision cutting for panel processing and furniture manufacturing.",
    image: "/media/img2.webp",
    date: "February 13, 2026",
  },
  "panel-saw-elite-35ts": {
    title: "Panel Saw Elite 35TS",
    excerpt:
      "Elite panel saw with 315 mm main blade diameter and 4500 rpm speed for accurate sheet processing.",
    image: "/media/img3.webp",
    date: "February 13, 2026",
  },
};

const CATEGORY_PAGES: SearchEntry[] = [
  {
    id: "category-cnc",
    title: "CNC Machines",
    excerpt:
      "Explore AMUZMA CNC router machines engineered for precision cutting, carving, and shaping with smart automation and reliable industrial performance.",
    href: "/cnc-machines",
    date: "February 23, 2026",
    keywords: "cnc machines router woodworking automation precision cutting carving",
  },
  {
    id: "category-saws",
    title: "Amuzma Factory - Saws",
    excerpt:
      "High-precision sawing solutions engineered for clean, accurate cuts, maximizing material efficiency, safety, and productivity across solid wood and panel processing.",
    href: "/saws",
    date: "February 23, 2026",
    keywords: "saws factory panel saw band saw cutting woodworking amuzma",
  },
  {
    id: "category-edgebanders",
    title: "Amuzma Factory – Edgebanders",
    excerpt:
      "High-performance edge banding machines deliver seamless finishes, strong adhesion, precise trimming, enhanced durability, and premium aesthetics for modern furniture manufacturing.",
    href: "/edge-banders",
    date: "February 23, 2026",
    keywords: "edgebanders edge banding factory furniture manufacturing amuzma",
  },
  {
    id: "category-dust",
    title: "Dust Extractors & Waste",
    excerpt:
      "Industrial dust collection systems designed for efficient extraction, compact installation, and clean workshop environments.",
    href: "/dust-collector-waste",
    date: "February 20, 2026",
    keywords: "dust collector extractor waste workshop extraction",
  },
  {
    id: "category-pressing",
    title: "Pressing Machines",
    excerpt:
      "Veneer door presses and pressing solutions for high-quality panel production and furniture manufacturing.",
    href: "/pressing",
    date: "February 19, 2026",
    keywords: "pressing veneer door press panel furniture",
  },
  {
    id: "category-sanders",
    title: "Sanders",
    excerpt:
      "Wide belt sanders and surface finishing machines for superior quality in professional woodworking operations.",
    href: "/sanders",
    date: "February 19, 2026",
    keywords: "sanders wide belt sanding surface finishing",
  },
  {
    id: "category-moulder",
    title: "Moulder",
    excerpt:
      "Advanced moulding technology designed to deliver precise profiling and smooth, consistent finishes in woodworking.",
    href: "/moulder",
    date: "February 18, 2026",
    keywords: "moulder spindle moulding profiling woodworking",
  },
  {
    id: "category-planer",
    title: "Planer",
    excerpt:
      "Planers and thicknessers for accurate dimensioning, smooth surfaces, and reliable workshop performance.",
    href: "/planer",
    date: "February 18, 2026",
    keywords: "planer thicknesser dimensioning woodworking",
  },
];

const STATIC_PAGES: SearchEntry[] = [
  {
    id: "page-about",
    title: "About Us",
    excerpt:
      "We are a mainland UAE-based machinery brand committed to delivering high-performance solutions to customers worldwide with German engineering standards.",
    href: "/about",
    date: "February 10, 2026",
    keywords: "about amuzma brand company uae machinery",
  },
  {
    id: "page-mission",
    title: "Mission & Vision",
    excerpt:
      "AMUZMA's mission and vision for delivering precision machinery and building long-term partnerships with customers worldwide.",
    href: "/mission-vision",
    date: "February 10, 2026",
    keywords: "mission vision amuzma goals values",
  },
  {
    id: "page-contact",
    title: "Contact Us",
    excerpt:
      "Get in touch with AMUZMA for machinery inquiries, dealer information, quotes, and professional support.",
    href: "/contact",
    date: "February 10, 2026",
    keywords: "contact amuzma support dealer quote inquiry",
  },
  {
    id: "page-warranties",
    title: "Warranties",
    excerpt:
      "Learn about AMUZMA warranty coverage, service support, and protection for your machinery investment.",
    href: "/warranties",
    date: "February 10, 2026",
    keywords: "warranty service support coverage machinery",
  },
  {
    id: "page-products",
    title: "Products",
    excerpt:
      "Browse the full AMUZMA product catalogue including CNC routers, saws, edge banders, sanders, planers, and more.",
    href: "/products",
    date: "February 23, 2026",
    keywords: "products catalogue machinery woodworking cnc saws",
  },
  {
    id: "article-cnc-40",
    title: "CNC machines 4.0 – Innovation that transforms manufacturing",
    excerpt:
      "Innovative CNC router machines deliver accurate cutting, detailed carving, and smooth shaping with smart automation, reliability, speed, and consistent results for woodworking.",
    href: "/cnc-machines",
    date: "February 23, 2026",
    keywords: "cnc machines 4.0 innovation manufacturing automation woodworking router",
  },
  {
    id: "article-cnc-furniture",
    title: "CNC router for furniture production",
    excerpt:
      "AMUZMA CNC routers are designed for furniture production with precision motion systems, large working areas, and reliable performance for continuous industrial use.",
    href: "/products/cnc-router-forte-15cr",
    image: "/media/CNC-13CR-1.webp",
    date: "February 23, 2026",
    keywords: "cnc router furniture production woodworking manufacturing panels",
  },
  {
    id: "article-cnc-router-firma",
    title: "CNC Router Firma 15CR",
    excerpt:
      "The FORTE 15CR CNC router features a 1500 x 3000 mm working area with rigid steel frame construction and high-speed performance for professional production.",
    href: "/products/cnc-router-forte-15cr",
    image: "/media/img34.webp",
    date: "February 23, 2026",
    keywords: "cnc router firma 15cr forte woodworking",
  },
];

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
    product.category,
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
    date,
    keywords,
  };
}

export const SEARCH_INDEX: SearchEntry[] = [
  ...ALL_PRODUCTS.map(productToSearchEntry),
  ...CATEGORY_PAGES,
  ...STATIC_PAGES,
];
