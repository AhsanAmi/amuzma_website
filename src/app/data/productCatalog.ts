export type CatalogProduct = {
  category: string;
  image: string;
  model: string;
  name: string;
  specs: string[];
  detailsHref: string;
};

export const ALL_PRODUCTS: CatalogProduct[] = [
  {
    category: "CNC Router",
    image: "/media/34.webp",
    model: "FORTE 13CR",
    name: "CNC Router",
    specs: [
      "Aluminum profile",
      "Table - T slots 1300 × 2500 × 200",
      "Table - T slots 1500 × 3000 × 200",
    ],
    detailsHref: "/products/cnc-router-forte-13cr",
  },
  {
    category: "CNC Router",
    image: "/media/img34.webp",
    model: "FORTE 15CR",
    name: "CNC Router",
    specs: [
      "Aluminum profile",
      "Table - T slots 1300 × 2500 × 200",
      "Table - T slots 1500 × 3000 × 200",
    ],
    detailsHref: "/products/cnc-router-forte-15cr",
  },
  {
    category: "Dust Extractors & Waste",
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
    category: "Dust Extractors & Waste",
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
    category: "Dust Extractors & Waste",
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
  {
    category: "Edgebanders",
    image: "/media/img39.webp",
    model: "E5",
    name: "Edge Banding",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/edge-banding-e5",
  },
  {
    category: "Edgebanders",
    image: "/media/img40.webp",
    model: "P6",
    name: "Edge Banding",
    specs: [
      "Feeding Speed : 8 - 11 - 13 m/min",
      "Panel Thickness : 10 - 45 mm",
      "Edge Banding : 120 mm",
    ],
    detailsHref: "/products/edge-banding-p6",
  },
  {
    category: "Edgebanders",
    image: "/media/img41.webp",
    model: "C7",
    name: "Edge Banding",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/edge-banding-c7",
  },
  {
    category: "Pressing",
    image: "/media/img42-1.webp",
    model: "P 100T",
    name: "Veneer Door Press",
    specs: [
      "Total Pressure : 1000 kN",
      "Platen No & Size : 3 - 3000 x 1300 x 42 mm",
      "Specific Pressure : 2.6 kg/cm²",
    ],
    detailsHref: "/products/veneer-door-press-p-100t",
  },
  {
    category: "Sanders",
    image: "/media/sander.webp",
    model: "1300WS",
    name: "Wide Belt Sander",
    specs: [
      "Conveyor Belt Width : 240 mm",
      "Minimum Working : 3 mm",
      "Maximum Working : 1300 mm",
    ],
    detailsHref: "/products/wide-belt-sander-firma-1300ws",
  },
  {
    category: "Moulder",
    image: "/media/img43.webp",
    model: "Elite 30SM",
    name: "Spindle Moulder",
    specs: [
      "Spindle Diameter : 30 (32/35/40/50) mm",
      "Spindle Speeds : 1400/3500/6000/8000 RPM",
      "Spindle Stroke : 140 mm",
    ],
    detailsHref: "/products/spindle-moulder-elite-30sm",
  },
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
  {
    category: "Saws",
    image: "/media/img48.webp",
    model: "65 BS",
    name: "Band Saw",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 3000 / 4000 / 5000 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/band-saw-65bs",
  },
  {
    category: "Saws",
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
    category: "Saws",
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
    category: "Saws",
    image: "/media/img2.webp",
    model: "Forte 40PK",
    name: "Panel Saw",
    specs: [
      "Main Blade Diameter : 315 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    detailsHref: "/products/panel-saw-forte-40pa",
  },
  {
    category: "Saws",
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
