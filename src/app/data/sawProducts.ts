type OperationalTab = {
  label: string;
  heading: string;
  description: string;
  icon: string;
  image: string;
};

type SpecItem = { label: string; value: string };

type SpecConfig = {
  parametersTabLabel: string;
  dimensionsTabLabel?: string;
  parametersTabWidthClass?: string;
  left: SpecItem[];
  right: SpecItem[];
  dimensionsItems?: SpecItem[];
};

const MATERIAL_ICONS = [
  "/media/New-Project-9.webp",
  "/media/New-Project-10.webp",
  "/media/New-Project-11.webp",
  "/media/New-Project-12.webp",
];

function materialTabs(
  aluminium: string,
  solidWood: string,
  plastic: string,
  panel: string,
): OperationalTab[] {
  return [
    {
      label: "Aluminium",
      heading: "Aluminium Cutting Performance",
      description: aluminium,
      icon: MATERIAL_ICONS[0],
      image: "/media/material_aluminium.webp",
    },
    {
      label: "Solid Wood",
      heading: "Solid Wood Processing",
      description: solidWood,
      icon: MATERIAL_ICONS[1],
      image: "/media/Solid-Wood.webp",
    },
    {
      label: "Plastic",
      heading: "Plastic Processing",
      description: plastic,
      icon: MATERIAL_ICONS[2],
      image: "/media/material_kunststoff_.webp",
    },
    {
      label: "Panel Processing",
      heading: "Panel Processing",
      description: panel,
      icon: MATERIAL_ICONS[3],
      image: "/media/material_platten.webp",
    },
  ];
}

export const SAW_PRODUCT_OVERRIDES = {
  "band-saw-65bs": {
    name: "BAND SAW",
    model: "Elite 65BS",
    category: "Saws",
    heroImage: "/media/amuzma-web-banners-for-Band-Saw.webp",
    tagline: "Powerful Performance. Precision Control. Built for Professionals.",
    featuresSubtitle:
      "The AMUZMA Elite 65BS is a heavy-duty industrial band saw engineered for precision cutting, exceptional stability, and long-lasting reliability.",
    features: [
      {
        title: "Lower Blade Guide",
        image: "/media/Band-Saw-16-Elite-65BS-Important-J4.webp",
        desc: "The lower blade guide assembly is equipped with precision ball bearings that provide excellent blade support and stability during operation. Designed to minimize blade deflection and vibration.",
      },
      {
        title: "Mitre Fence",
        image: "/media/Band-Saw-16-Elite-65BS-Important-J3.webp",
        desc: "The optional mitre fence provides added versatility for precision angle cutting applications. Fully adjustable from –45° to +45°, it allows for accurate and repeatable mitre cuts, making it ideal for furniture making.",
      },
      {
        title: "Tiltable table",
        image: "/media/Band-Saw-16-Elite-65BS-Important-J2.webp",
        desc: "The AMUZMA Elite 65BS features a precision-machined and polished cast iron table designed for maximum stability, durability, and cutting accuracy. The table can be smoothly tilted from 0° to 20°.",
      },
      {
        title: "Blade Guides",
        image: "/media/Band-Saw-16-Elite-65BS-Important-J1.webp",
        desc: "The AMUZMA Elite 65BS is equipped with upper and lower blade guides featuring finely adjustable side and rear roller bearings. This precision guide system provides optimal blade support throughout the cutting process.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Flawless Edge Quality",
        desc: "Equipped with a strong motor system that ensures consistent cutting power for hardwood, softwood, and heavy-duty industrial tasks.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Increased Production",
        desc: "Delivers accurate and smooth cutting performance for straight, curved, and detailed woodworking applications with minimal material wastage.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Long-Term Reliability",
        desc: "Heavy-duty frame construction reduces vibration, ensuring safer operation, better control, and long-lasting machine durability.",
      },
    ],
    galleryDescription:
      "The Band Saw 65BS is a powerful and precise cutting machine designed for smooth, accurate wood processing. Its heavy-duty construction ensures stable operation, reliable performance, and consistent results for professional woodworking applications.",
    gallery: [
      "/media/Band-Saw-16-Elite-65BS-finlist.webp",
      "/media/Band-Saw-16-Elite-65BS-Important-J1.webp",
      "/media/Band-Saw-16-Elite-65BS-Important-J2.webp",
      "/media/Band-Saw-16-Elite-65BS-Important-J3.webp",
      "/media/Band-Saw-16-Elite-65BS-Important-J4.webp",
    ],
    dimensionsImage: "/media/Band-Saw-65BS-01-scaled.webp",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "Net/Gross Weight: 323/359 Kgs. Wooden box package size: 1119×777×2070 mm.",
    partsSectionTitle: "Product Image",
    partsImages: [
      "/media/Band-Saw-16-Elite-65BS-Important-J4.webp",
      "/media/Band-Saw-16-Elite-65BS-Important-J3.webp",
      "/media/Band-Saw-16-Elite-65BS-Important-J2.webp",
      "/media/Band-Saw-16-Elite-65BS-Important-J1.webp",
      "/media/Band-Saw-16-Elite-65BS-Important-J3.webp",
      "/media/Band-Saw-16-Elite-65BS-Important-J4.webp",
    ],
    parts: [
      { name: "UltraSaw 65", image: "/media/Band-Saw-16-Elite-65BS-Important-J4.webp" },
      { name: "PowerCut 65BS", image: "/media/Band-Saw-16-Elite-65BS-Important-J3.webp" },
      { name: "ProBand 65", image: "/media/Band-Saw-16-Elite-65BS-Important-J2.webp" },
      { name: "MasterCut 65", image: "/media/Band-Saw-16-Elite-65BS-Important-J1.webp" },
      { name: "PrecisionSaw 65", image: "/media/Band-Saw-16-Elite-65BS-Important-J3.webp" },
      { name: "HeavyBand 65", image: "/media/Band-Saw-16-Elite-65BS-Important-J4.webp" },
    ],
  },
  "panel-saw-firma-40pl": {
    name: "PANEL SAW",
    model: "Firma 40PL",
    category: "Saws",
    heroImage: "/media/amuzma-web-banners-for-PANEL-SAW-Firma-40PL.webp",
    tagline: "Heavy-Duty Design. Industrial Precision. Trusted Performance.",
    featuresSubtitle:
      "The Panel Saw Firma 40PL is a robust and high-powered , purpose-built for the demands of medium-sized workshops and expanding production facilities.",
    features: [
      {
        title: "Handle and Control Panel",
        image: "/media/Panel-Saw-Elite-40PL-frist-one-J1.webp",
        desc: "The Firma 40PL Panel Saw ensures precise, clean cuts on plywood, MDF, and laminated boards, delivering smooth edges, accuracy, and consistent performance for professional woodworking applications.",
      },
      {
        title: "Overhead Saw Blade Guard",
        image: "/media/Panel-Saw-Elite-40PL-frist-one-J2.webp",
        desc: "Equipped with a powerful motor, the Firma 40PL delivers stable cutting performance, supports continuous operation, and improves productivity while maintaining efficiency, reliability, and smooth cutting results.",
      },
      {
        title: "Handwheel for Blade Tilt",
        image: "/media/Panel-Saw-Elite-40PL-frist-one-J3.webp",
        desc: "The robust and vibration-free construction provides excellent stability during operation, ensuring safe usage, long service life, reduced maintenance, and consistent cutting accuracy in demanding environments.",
      },
      {
        title: "Scoring Blade Adjustment",
        image: "/media/Panel-Saw-Elite-40PL-frist-one-J4.webp",
        desc: "The precision sliding table allows easy panel movement, improves operator control, enhances cutting efficiency, reduces effort, and ensures smooth, accurate handling of large materials safely.",
      },
    ],
    benefitsSectionTitle: "Equipment Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Increases Production",
        desc: "Enhances workflow speed with powerful motor and smooth sliding system, allowing faster panel processing, increased productivity, and improved.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Reduces Material Wastage",
        desc: "Accurate cutting minimizes material loss, optimizes panel usage, lowers production costs, and improves efficiency by ensuring precise measurements.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Easy Operation",
        desc: "User-friendly controls and accessible components simplify operation and maintenance, reducing operator effort, saving time, and ensuring smooth.",
      },
    ],
    galleryDescription:
      "The Firma 40PL Panel Saw delivers precise, smooth, and efficient panel cutting with powerful performance, durable construction, and reliable operation for professional woodworking and industrial applications.",
    gallery: [
      "/media/Untitled-design-17.webp",
      "/media/Panel-Saw-Elite-40PL-frist-one-J1.webp",
      "/media/Panel-Saw-Elite-40PL-frist-one-J2.webp",
      "/media/Panel-Saw-Elite-40PL-frist-one-J3.webp",
      "/media/Panel-Saw-Elite-40PL-frist-one-J4.webp",
    ],
    dimensionsImage: "/media/Panel-Saw-40PL-01-scaled.webp",
    dimensionsHeading: "Precision Cutting Performance",
    dimensionsDescription:
      "The Firma 40PL Panel Saw delivers precise, smooth cutting performance with powerful motor, durable construction, and advanced sliding system, ensuring efficient, reliable, and professional woodworking operations.",
    partsSectionTitle: "Product Images",
    partsImages: [
      "/media/Panel-Saw-Elite-40PL-frist-one-J1.webp",
      "/media/Panel-Saw-Elite-40PL-frist-one-J2-1.webp",
      "/media/Panel-Saw-Elite-40PL-frist-one-J3-1.webp",
      "/media/Panel-Saw-Elite-40PL-frist-one-J3-1.webp",
      "/media/Panel-Saw-Elite-40PL-frist-one-J3-1.webp",
      "/media/Panel-Saw-Elite-40PL-frist-one-J2-1.webp",
    ],
    parts: [
      { name: "Firma 40PL Panel Saw", image: "/media/Panel-Saw-Elite-40PL-frist-one-J1.webp" },
      { name: "Precision Sliding", image: "/media/Panel-Saw-Elite-40PL-frist-one-J2-1.webp" },
      { name: "Panel Saw System", image: "/media/Panel-Saw-Elite-40PL-frist-one-J3-1.webp" },
      { name: "Panel Saw Machine", image: "/media/Panel-Saw-Elite-40PL-frist-one-J3-1.webp" },
      { name: "Panel Saw Equipment", image: "/media/Panel-Saw-Elite-40PL-frist-one-J3-1.webp" },
      { name: "Industrial Panel Saw", image: "/media/Panel-Saw-Elite-40PL-frist-one-J2-1.webp" },
    ],
  },
  "panel-saw-firma-35ps": {
    name: "PANEL SAW",
    model: "Firma 35PS",
    category: "Saws",
    heroImage: "/media/amuzma-web-banners-for-PANEL-SAW-Firma-35PS-final-1.webp",
    tagline: "Professional Performance. Precision Cutting. Built to Last.",
    featuresSubtitle:
      "The Amuzma Firma 35PS is a compact yet powerful panel saw designed to deliver exceptional accuracy and reliability for professional woodworking.",
    features: [
      {
        title: "Main and Scoring Blade",
        image: "/media/Panel-Saw-Firma-35PS-frist-one-J3.webp",
        desc: "The Panel Saw Firma 35PS features a fully integrated Scoring Saw System, engineered to deliver exceptional cutting precision and superior edge quality",
      },
      {
        title: "Handle and Control Panel",
        image: "/media/Panel-Saw-Firma-35PS-frist-one-J2.webp",
        desc: "The 35PS delivers industrial cutting power in a compact size, handling 3200mm panels with smooth feed, clean edges, and consistent torque for precise, efficient woodworking production runs.",
      },
      {
        title: "Precision Engineered",
        image: "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp",
        desc: "The Firma 35PS ensures straight, clean, repeatable cuts with a precision sliding table, stable alignment, and reduced vibration, delivering accurate results and professional finishes for batch production.",
      },
      {
        title: "Carriage End Grip",
        image: "/media/Panel-Saw-Firma-35PS-frist-one-J4.webp",
        desc: "The Panel Saw Firma 35PS is equipped with a robust Sliding Table Lock System, engineered to provide maximum stability, safety, and precision during cutting operations. This feature securely locks the sliding table.",
      },
    ],
    benefitsSectionTitle: "Benefits",
    benefitsSubtitle: "",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Space Saving Build",
        desc: "Compact design saves space while delivering powerful cutting performance.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "High Cut Accuracy",
        desc: "Ensures straight, clean cuts with stable and repeatable precision.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Smooth Operation",
        desc: "Motorized blade rise allows easy, effortless and efficient cutting control.",
      },
    ],
    galleryDescription:
      "The Panel Saw Firma 35PS is a compact, high-performance panel saw designed for small to medium-sized workshops that require precise and efficient panel cutting. Despite its space-saving footprint, it delivers the power, accuracy, and features of a full-size industrial machine. Capable of cutting panels up to 3200mm in length, the 35PS is ideal for cabinetry, furniture making, and general woodworking. It comes standard with a motorized blade rise, making operation smooth and effortless — even during long production runs.",
    gallery: [
      "/media/Untitled-design-18.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J2-1.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J1-1-removebg-preview.webp",
      "/media/Panel-Saw-Elite-40PL-frist-one-J4.webp",
    ],
    dimensionsImage: "/media/Panel-Saw-Firma-35PS-04-scaled.webp",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "The Panel Saw Firma 35PS is designed for a compact yet efficient footprint, ideal for workshops of all sizes. Its overall dimensions are approximately 3400 mm (Length) × 3700 mm (Width) × 1300 mm (Height), providing ample workspace while maintaining stability. The sliding table measures around 1600 × 360 mm, and the main table is 910 × 550 mm, ensuring smooth panel handling and precise cuts.",
    partsSectionTitle: "Parts",
    partsImages: [
      "/media/Panel-Saw-Firma-35PS-frist-one-J2.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J4.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J4.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp",
    ],
    parts: [
      { name: "Main Saw Blade", image: "/media/Panel-Saw-Firma-35PS-frist-one-J2.webp" },
      { name: "Scoring Blade", image: "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp" },
      { name: "Sliding Table", image: "/media/Panel-Saw-Firma-35PS-frist-one-J4.webp" },
      { name: "Rip Fence", image: "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp" },
      { name: "Control Panel", image: "/media/Panel-Saw-Firma-35PS-frist-one-J4.webp" },
      { name: "Blade Guard", image: "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp" },
    ],
  },
  "panel-saw-forte-40pa": {
    name: "PANEL SAW",
    model: "Forte 40PA",
    category: "Saws",
    heroImage: "/media/amuzma-web-banners-for-PANEL-SAW-FORTE-40PA-finlisted-scaled.webp",
    tagline: "Heavy-Duty Design. Industrial Precision. Trusted Performance.",
    featuresSubtitle:
      "The Panel Saw Forte 40PA is a robust and high-powered , purpose-built for the demands of medium-sized workshops and expanding production facilities.",
    features: [
      {
        title: "Digital Readout (DRO)",
        image: "/media/Panel-Saw-Elite-40PA-profile-1.webp",
        desc: "The Forte 40PA is equipped with an advanced Digital Measurement System for precise and reliable fence positioning. Featuring a clear LCD display, the system allows operators to make fast and accurate adjustments.",
      },
      {
        title: "Outrigger Table",
        image: "/media/Panel-Saw-Elite-40PA-profile-2.webp",
        desc: "The Forte 40PA features an advanced Motorised Cross-Cut Table with 4th Axis control, designed for fast, accurate, and efficient rectangular cutting operations. the system automatically positions the saw blades.",
      },
      {
        title: "Overhead Saw Blade Guard",
        image: "/media/Panel-Saw-Elite-40PA-profile-3.webp",
        desc: "The Forte 40PA features a fully integrated Scoring Saw System designed to deliver exceptional cutting precision and operator convenience.",
      },
      {
        title: "Carriage Handle",
        image: "/media/Panel-Saw-Elite-40PA-profile-4.webp",
        desc: "The Forte 40PA is equipped with a robust Sliding Table Lock System designed to provide maximum stability, safety, and precision during cutting operations.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Flawless Edge Quality",
        desc: "Equipped with a strong motor system that ensures consistent cutting power for hardwood, softwood, and heavy-duty industrial tasks.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Increased Production",
        desc: "Delivers accurate and smooth cutting performance for straight, curved, and detailed woodworking applications with minimal material wastage.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Long-Term Reliability",
        desc: "Heavy-duty frame construction reduces vibration, ensuring safer operation, better control, and long-lasting machine durability.",
      },
    ],
    galleryDescription:
      "The Panel saw Forte 40PA is a powerful and precise cutting machine designed for smooth, accurate wood processing. Its heavy-duty construction ensures stable operation, reliable performance, and consistent results for professional woodworking applications.",
    gallery: [
      "/media/Panel-Saw-Elite-40PA-profile-5.webp",
      "/media/Panel-Saw-Elite-40PA-profile-1.webp",
      "/media/Panel-Saw-Elite-40PA-profile-2.webp",
      "/media/Panel-Saw-Elite-40PA-profile-3.webp",
      "/media/Panel-Saw-Elite-40PA-profile-4.webp",
    ],
    dimensionsImage: "/media/PANEL-SAW-Forte-40PA-04-scaled.webp",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription: "",
    partsSectionTitle: "Product Image",
    partsImages: [
      "/media/Panel-Saw-Elite-40PA-profile-1.webp",
      "/media/Panel-Saw-Elite-40PA-profile-2.webp",
      "/media/Panel-Saw-Elite-40PA-profile-3.webp",
      "/media/Panel-Saw-Elite-40PA-profile-4.webp",
      "/media/Panel-Saw-Elite-40PA-profile-5.webp",
      "/media/Panel-Saw-Elite-40PA-profile.webp",
    ],
    parts: [
      { name: "UltraSaw 65", image: "/media/Panel-Saw-Elite-40PA-profile-1.webp" },
      { name: "PowerCut 65BS", image: "/media/Panel-Saw-Elite-40PA-profile-2.webp" },
      { name: "ProBand 65", image: "/media/Panel-Saw-Elite-40PA-profile-3.webp" },
      { name: "MasterCut 65", image: "/media/Panel-Saw-Elite-40PA-profile-4.webp" },
      { name: "PrecisionSaw 65", image: "/media/Panel-Saw-Elite-40PA-profile-5.webp" },
      { name: "HeavyBand 65", image: "/media/Panel-Saw-Elite-40PA-profile.webp" },
    ],
  },
  "panel-saw-elite-35ts": {
    name: "PANEL SAW",
    model: "Elite 35TS",
    category: "Saws",
    heroImage: "/media/amuzma-web-banners-for-Panel-Saw-12-Elite-35TS.webp",
    tagline: "Compact Size. Industrial Performance. Precision You Can Trust.",
    featuresSubtitle:
      "The Amuzma Elite 35TS is a compact yet fully featured panel saw, designed for professional woodworkers who need exceptional cutting performance.",
    features: [
      {
        title: "Crosscut Miter Fence",
        image: "/media/frist-one-J2.webp",
        desc: "Maximizes workshop space while delivering full panel saw power, precision cutting, and reliable professional performance daily with exceptional efficiency and control.",
      },
      {
        title: "Blade Tilt Handwheel",
        image: "/media/frist-one-J3.webp",
        desc: "Heavy-gauge steel construction ensures strength, long-lasting durability, vibration control, and stable cutting accuracy under pressure.",
      },
      {
        title: "Rip Fence with MicroAdjus",
        image: "/media/frist-one-J4.webp",
        desc: "Precision-ground cast iron surface provides smooth material support, reduces vibration, and improves cutting consistency significantly.",
      },
      {
        title: "End with Tool Tray",
        image: "/media/frist-one-J11.webp",
        desc: "The Panel Saw Elite 35TS is equipped with a robust Sliding Table Lock System, engineered to provide maximum stability, safety, and precision during cutting operations.",
      },
    ],
    benefitsSectionTitle: "Benefits",
    benefitsSubtitle: "",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Space Optimization",
        desc: "Compact footprint saves valuable workshop floor space while delivering full panel saw capability and uncompromised cutting performance.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Superior Cutting Accuracy",
        desc: "Advanced trunnion system and cast iron table ensure stable operation, reduced vibration, and consistently precise cutting results.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Long-Term Durability",
        desc: "Heavy-gauge steel construction provides exceptional strength, reliability, and long-lasting performance in demanding professional workshop environment",
      },
    ],
    galleryDescription:
      "The Panel Saw 12 Elite 35TS combines compact workshop footprint with full industrial panel saw capability, delivering precise, repeatable cuts for professional woodworking production.",
    gallery: [
      "/media/Untitled-design-20.webp",
      "/media/frist-one-J11.webp",
      "/media/frist-one-J2.webp",
      "/media/frist-one-J3.webp",
      "/media/frist-one-J4.webp",
    ],
    dimensionsImage: "/media/Panel-Saw-Elite-35TS-03-scaled.webp",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "For the Panel Saw 12″ Elite 35TS, typical machine overall dimensions (comparable to similar industrial panel saw models) are approximately: Machine Dimensions (L × W × H): ≈ 3400 × 3700 × 1300 mm (Length × Width × Height). These dimensions reflect a standard sliding table panel saw layout that supports large panel handling while fitting into a professional workshop space.",
    partsSectionTitle: "Parts",
    partsImages: [
      "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J2.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J3.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp",
      "/media/Panel-Saw-Firma-35PS-frist-one-J2.webp",
    ],
    parts: [
      { name: "Main Saw Blade", image: "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp" },
      { name: "Scoring Blade", image: "/media/Panel-Saw-Firma-35PS-frist-one-J2.webp" },
      { name: "Sliding Table", image: "/media/Panel-Saw-Firma-35PS-frist-one-J3.webp" },
      { name: "Rip Fence", image: "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp" },
      { name: "Control Panel", image: "/media/Panel-Saw-Firma-35PS-frist-one-J1.webp" },
      { name: "Blade Guard", image: "/media/Panel-Saw-Firma-35PS-frist-one-J2.webp" },
    ],
  },
};

export const SAW_OPERATIONAL_TABS: Record<string, OperationalTab[]> = {
  "band-saw-65bs": materialTabs(
    "The AMUZMA Elite 65BS delivers exceptional performance for a variety of aluminium cutting applications. Engineered for precision and stability, it provides clean, accurate cuts with outstanding surface quality, making it ideal for professional workshops and industrial environments. Its rigid construction, precision blade guidance system, and vibration-free operation ensure smooth cutting performance across aluminium profiles, sections, and lightweight structural components. The result is consistent accuracy, reduced material waste, and superior finishing quality.",
    "The AMUZMA Elite 65BS is designed to handle the demanding requirements of solid wood processing with exceptional precision, power, and reliability. Whether you're resawing, curve cutting, ripping, or shaping natural timber, the machine delivers smooth, accurate cuts and outstanding finish quality. Built with a heavy-duty frame, precision blade guides, and robust cast iron components, the Elite 65BS ensures maximum stability and consistent performance when working with hardwoods and softwoods. Its advanced design minimizes vibration, improves cutting accuracy, and helps preserve the natural beauty of the wood.",
    "The AMUZMA Elite 65BS is engineered to deliver precise and efficient performance when processing a wide range of plastic materials. Designed for accuracy and smooth operation, it provides clean cuts, minimal material waste, and excellent finish quality across various applications. From acrylic, PVC, and polycarbonate to advanced composite materials, the Elite 65BS offers reliable cutting performance and consistent results. Its precision blade guidance system and rigid construction ensure accurate cutting, smooth edges, and superior control, even when working with complex shapes and contours.",
    "The AMUZMA Elite 65BS is a versatile solution for a wide range of panel processing applications, delivering precision, efficiency, and reliability for professional woodworking environments. Whether cutting large panels, curved components, or custom-shaped parts, the machine provides smooth, accurate results with excellent finish quality. Its rigid construction, precision blade guidance system, and stable worktable ensure consistent cutting performance across a variety of panel materials, including MDF, plywood, particleboard, laminated panels, and composite boards. The Elite 65BS is ideal for workshops that require flexibility for both straight and curved cutting operations.",
  ),
  "panel-saw-firma-40pl": materialTabs(
    "The AMUZMA Firma 40PL is engineered to deliver exceptional precision and reliability for aluminium cutting applications. Trusted by professionals in the aluminium-processing industry, this high-performance sliding table saw provides outstanding accuracy, clean cutting results, and consistent performance for demanding workshop environments. Designed for cutting aluminium profiles, extrusions, sheets, and composite panels, the Firma 40PL achieves sharp contours and precision cuts with tolerances of up to a tenth of a millimetre. Its advanced engineering, rigid construction, and precision-guided sliding table ensure smooth operation, minimal vibration, and superior finish quality.",
    "The AMUZMA Firma 40PL is engineered to meet the demanding requirements of solid wood processing, delivering outstanding precision, power, and reliability. From trimming and ripping to sizing and refining natural timber, the machine provides smooth, accurate cuts and exceptional finish quality for professional woodworking applications. Solid wood is valued for its natural grain patterns, durability, and premium appearance. To preserve these qualities and achieve the highest standards of craftsmanship, the Firma 40PL is equipped with advanced features designed specifically for efficient and effortless solid wood machining.",
    "The AMUZMA Firma 40PL is engineered to deliver exceptional precision and efficiency in plastic processing applications. Designed to handle a wide range of commercially available plastics, it provides clean, accurate cuts and superior surface finishes for professional and industrial manufacturing environments. From acrylic, PVC, and polycarbonate to advanced composite materials, the Firma 40PL ensures consistent performance and outstanding cutting quality. Its precision-engineered cutting system is also capable of processing carbon composite panels and other high-performance materials with remarkable accuracy, achieving cutting tolerances within a tenth of a millimetre.",
    "The AMUZMA Firma 40PL is engineered to streamline and optimize modern panel processing, making it the ideal solution for carpenters, cabinet-makers, and professional woodworking workshops. Built to handle the daily demands of cutting, sizing, and processing sheet materials, it delivers exceptional accuracy, efficiency, and ease of operation. Whether working with full-size panels, half-size boards, or reusable offcuts, the Firma 40PL provides smooth material handling and precise, repeatable cutting performance. Its advanced design helps maximize material yield, reduce waste, and improve productivity, ensuring a more efficient workflow throughout the production process.",
  ),
  "panel-saw-firma-35ps": materialTabs(
    "The Firma 35PS is engineered to deliver exceptional precision for aluminium cutting applications. Trusted for years in the aluminium-processing industry, this sliding table saw provides outstanding accuracy, clean cutting results, and reliable performance for professional workshops. Designed as the ideal solution for cutting and sawing aluminium profiles and panels, the Forte 40PA achieves sharp contours and precision cutting accuracy within a tenth of a millimetre. Its advanced engineering ensures smooth operation, reduced vibration, and superior finishing quality across a wide range of aluminium applications.",
    "The AMUZMA Firma 35PS is designed to handle the unique demands of solid wood processing with exceptional precision and reliability. From trimming and ripping to refining natural wood boards, the machine delivers smooth, accurate, and high-quality cutting performance for professional woodworking applications. Solid wood furniture is valued for its natural grain patterns, strength, and premium feel. To meet these demanding requirements, the Firma 35PS offers advanced feature options specifically engineered for efficient and effortless solid wood machining. Its precision engineering ensures clean cuts, smooth finishes, and consistent results, making complex woodworking operations simple and efficient.",
    "The AMUZMA Firma 35PS is engineered for precise and efficient plastic processing across a wide range of applications. Capable of cutting all commercially available plastics in virtually any required shape or form, the machine delivers outstanding accuracy, smooth finishes, and reliable performance. The Firma 35PS also handles advanced composite materials such as carbon composite plates with exceptional precision, achieving cutting tolerances within a tenth of a millimetre. Its advanced engineering ensures clean cuts, reduced material damage, and consistent results for demanding industrial applications.",
    "The AMUZMA Firma 35PS is designed to simplify and optimize modern panel processing for carpenters, cabinet-makers, and professional woodworking workshops. Large panel handling, precise sizing, and efficient material management are daily challenges in production environments — and the Firma 35PS is built to handle them with ease. Whether working with full-size panels, half-size boards, or reusable offcuts, the machine provides smooth handling, precise cutting accuracy, and efficient workflow support. Its advanced features help reduce material waste, improve productivity, and make complex panel-processing operations faster and more manageable.",
  ),
  "panel-saw-forte-40pa": materialTabs(
    "The AMUZMA Forte 40PA is engineered to deliver exceptional precision for aluminium cutting applications. Trusted for years in the aluminium-processing industry, this sliding table saw provides outstanding accuracy, clean cutting results, and reliable performance for professional workshops. Designed as the ideal solution for cutting and sawing aluminium profiles and panels, the Forte 40PA achieves sharp contours and precision cutting accuracy within a tenth of a millimetre. Its advanced engineering ensures smooth operation, reduced vibration, and superior finishing quality across a wide range of aluminium applications.",
    "The AMUZMA Forte 40PA is designed to handle the unique demands of solid wood processing with exceptional precision and reliability. From trimming and ripping to refining natural wood boards, the machine delivers smooth, accurate, and high-quality cutting performance for professional woodworking applications. Solid wood furniture is valued for its natural grain patterns, strength, and premium feel. To meet these demanding requirements, the Forte 40PA offers advanced feature options specifically engineered for efficient and effortless solid wood machining. Its precision engineering ensures clean cuts, smooth finishes, and consistent results, making complex woodworking operations simple and efficient.",
    "The AMUZMA Forte 40PA is engineered for precise and efficient plastic processing across a wide range of applications. Capable of cutting all commercially available plastics in virtually any required shape or form, the machine delivers outstanding accuracy, smooth finishes, and reliable performance. The Forte 40PA also handles advanced composite materials such as carbon composite plates with exceptional precision, achieving cutting tolerances within a tenth of a millimetre. Its advanced engineering ensures clean cuts, reduced material damage, and consistent results for demanding industrial applications.",
    "The AMUZMA Forte 40PA is designed to simplify and optimize modern panel processing for carpenters, cabinet-makers, and professional woodworking workshops. Large panel handling, precise sizing, and efficient material management are daily challenges in production environments — and the Forte 40PA is built to handle them with ease. Whether working with full-size panels, half-size boards, or reusable offcuts, the machine provides smooth handling, precise cutting accuracy, and efficient workflow support. Its advanced features help reduce material waste, improve productivity, and make complex panel-processing operations faster and more manageable.",
  ),
  "panel-saw-elite-35ts": materialTabs(
    "The Panel Saw Elite 35TS is engineered to deliver outstanding precision and reliability for aluminium cutting applications. Trusted by professionals, it provides exceptional cutting accuracy, clean edges, and consistent performance for demanding workshop environments. Designed specifically for processing aluminium profiles, sheets, and composite panels, the Elite 35TS achieves sharp contours and precision cuts with accuracy down to a tenth of a millimetre. Its advanced construction, precision-guided sliding table, and vibration-free operation ensure smooth cutting performance and superior surface quality.",
    "The AMUZMA Elite 35TS is engineered to meet the demanding requirements of solid wood processing, delivering exceptional precision, power, and reliability. From trimming and ripping to sizing and refining natural timber, the machine provides smooth, accurate cuts and outstanding finish quality for professional woodworking applications. Solid wood is prized for its unique grain patterns, durability, and premium appearance. To preserve these qualities, the Elite 35TS is designed with advanced features that ensure precise machining, clean edges, and consistent results across a wide variety of hardwoods and softwoods.",
    "The AMUZMA Elite 35TS is engineered to deliver exceptional precision and efficiency in plastic processing applications. Designed to handle a wide variety of commercially available plastics, it provides clean, accurate cuts and smooth finishes across a broad range of materials and production requirements. From acrylic and PVC to advanced composite materials, the Elite 35TS ensures reliable performance and outstanding cutting quality. It is also capable of processing carbon composite panels and other high-performance materials with exceptional accuracy, achieving cutting tolerances within a tenth of a millimetre.",
    "The AMUZMA Elite 35TS is engineered to streamline and enhance modern panel processing, making it the ideal solution for carpenters, cabinet-makers, and professional woodworking workshops. Designed to handle the everyday challenges of cutting and sizing sheet materials, it delivers exceptional accuracy, efficiency, and ease of operation. Whether processing full-size panels, half-size boards, or reusable offcuts, the Elite 35TS ensures smooth material handling and precise, repeatable cutting performance. Its advanced engineering helps maximize material utilization, reduce waste, and improve overall workflow efficiency.",
  ),
};

export const SAW_OPERATIONAL_HEADINGS: Record<string, string> = {
  "band-saw-65bs": "Operational Excellence",
  "panel-saw-firma-40pl": "Operational Excellence",
  "panel-saw-firma-35ps": "Operational",
  "panel-saw-forte-40pa": "Operational Excellence",
  "panel-saw-elite-35ts": "Operational",
};

const BAND_SAW_65BS_SPECS_LEFT: SpecItem[] = [
  { label: "Blade Length", value: "4470 mm" },
  { label: "Blade Width", value: "10-35 mm" },
  { label: "Max Depth of Cut", value: "" },
  { label: "With bearing guide", value: "370 mm" },
  { label: "With European style roller guide", value: "370 mm" },
  { label: "Throat Width", value: "580 mm" },
  { label: "Table Size", value: "700×608 mm" },
  { label: "Table Tilt", value: "0-20°" },
  { label: "Band wheel Diameter", value: "610 mm" },
  { label: "Motor Power Output 4kW S1", value: "" },
  { label: "Foot Brake", value: "N/A" },
  { label: "Extractor Port Diameter", value: "2×100 mm" },
];

const BAND_SAW_65BS_SPECS_RIGHT: SpecItem[] = [
  { label: "Net/Gross Weight", value: "323/359 Kgs" },
  { label: "Net / Package", value: "300x100x60 mm" },
  { label: "Wooden box Packegs Size", value: "1119x777x2070 mm" },
];

const FIRMA_40PL_SPECS_LEFT: SpecItem[] = [
  { label: "Main Blade Diameter", value: "400 mm" },
  { label: "Main Blade Speed", value: "3000 / 4000 / 5000 rpm" },
  { label: "Scoring Blade Diameter", value: "120 mm" },
  { label: "Scoring Blade Speed", value: "8000 rpm" },
  { label: "Blade Tilt", value: "0–45°" },
  { label: "Max Depth of Cut @ 45°", value: "85 mm" },
  { label: "Max Depth of Cut @ 90°", value: "125 mm" },
  { label: "Max Rip Capacity", value: "1250 mm" },
  { label: "Sliding Beam Size", value: "" },
  { label: "Standard", value: "3200 × 418 mm" },
  { label: "Option", value: "3800 × 418 mm" },
  { label: "Sliding Beam Cutting Capacity", value: "" },
  { label: "Standard", value: "3200 mm" },
  { label: "Option", value: "3800 mm" },
  { label: "Blade Rising", value: "" },
];

const FIRMA_40PL_SPECS_RIGHT: SpecItem[] = [
  { label: "Standard", value: "Manual Raised" },
  { label: "Option", value: "Motor Raised" },
  { label: "Blade Tilting", value: "" },
  { label: "Standard", value: "Manual Tilting" },
  { label: "Option", value: "Motor Tilting" },
  { label: "Table Size", value: "1020 (690+720) mm" },
  { label: "Dust Extraction Outlet", value: "120 mm" },
  { label: "Main Motor Output", value: "" },
  { label: "3 × 380V", value: "5 kW" },
  { label: "Scoring Motor Output", value: "0.75 kW S1" },
  { label: "Net / Gross Weight", value: "760 / 870 kgs" },
  { label: "CE Over Head Guard", value: "1360 × 1000 × 320 mm / 28.5 / 56.5 kg" },
  { label: "Angle Cutting Device", value: "940 × 150 × 150 mm / 4 × 4.5 kg" },
  { label: "Wood Box Package Size", value: "2300 × 1190 × 910 mm / 3675 × 505 × 280 mm" },
];

const FIRMA_35PS_SPECS_LEFT: SpecItem[] = [
  { label: "Main Blade Diameter", value: "315 mm" },
  { label: "Main Blade Speed", value: "4500 rpm" },
  { label: "Scoring Blade Diameter", value: "120 mm" },
  { label: "Scoring Blade Speed", value: "8000 rpm" },
  { label: "Blade Tilt", value: "0–45°" },
  { label: "Max Depth of Cut @ 45°", value: "67 mm" },
  { label: "Max Depth of Cut @ 90°", value: "95 mm" },
  { label: "Max Rip Capacity", value: "1250 mm" },
  { label: "Sliding Beam Size", value: "" },
  { label: "Standard", value: "3200 × 360 mm" },
  { label: "Option", value: "2200 / 2600 / 3800 × 360 mm" },
  { label: "Sliding Beam Cutting Capacity", value: "" },
  { label: "Standard", value: "3200 mm" },
  { label: "Option", value: "2200 / 2600 / 3800 mm" },
  { label: "Blade Rising", value: "" },
];

const FIRMA_35PS_SPECS_RIGHT: SpecItem[] = [
  { label: "Standard", value: "Manual Raised" },
  { label: "Option", value: "Motor Raised" },
  { label: "Blade Tilting", value: "" },
  { label: "Standard", value: "Manual Tilting" },
  { label: "Option", value: "Motor Tilting" },
  { label: "Table Size", value: "800 (530+820) mm" },
  { label: "Dust Extraction Outlet", value: "120 mm" },
  { label: "Main Motor Output", value: "" },
  { label: "3 × 380V", value: "5 kW" },
  { label: "Scoring Motor Output", value: "0.75 kW S1" },
  { label: "Optional Accessories", value: "" },
  { label: "Simple Guard", value: "" },
  { label: "CE Over Head Saw Guard", value: "1360 × 1000 × 320 mm" },
  { label: "Angle Cutting Device", value: "940 × 150 × 1500 mm 4 / 4.5 kgs" },
  { label: "Net / Gross Weight", value: "560 / 680 kgs" },
  { label: "Wood Box Package Size", value: "2300 × 1160 × 1160 mm / 3615 × 480 × 210 mm" },
];

const FORTE_40PA_SPECS_LEFT: SpecItem[] = [
  { label: "Main Blade Diameter", value: "400 mm" },
  { label: "Main Blade Speed", value: "4500 rpm" },
  { label: "Scoring Blade Diameter", value: "120 mm" },
  { label: "Scoring Blade Speed", value: "8500 rpm" },
  { label: "Blade Tilt", value: "0 – 45°" },
  { label: "Max Depth of Cut @ 45°", value: "85 mm" },
  { label: "Max Depth of Cut @ 90°", value: "125 mm" },
  { label: "Max Rip Capacity", value: "" },
  { label: "Sliding Beam Size", value: "" },
  { label: "Standard", value: "3200×435 mm" },
  { label: "Option", value: "3800×435 mm" },
  { label: "Sliding Beam Cutting Capacity", value: "" },
  { label: "Standard", value: "3200 mm" },
  { label: "Option", value: "3800 mm" },
];

const FORTE_40PA_SPECS_RIGHT: SpecItem[] = [
  { label: "Table Size", value: "800 × 550 mm" },
  { label: "Dust Extraction Outlet", value: "100 mm" },
  { label: "Main Motor Output", value: "" },
  { label: "3 × 400V", value: "5.5 KW / 7.5HP" },
  { label: "Scoring Motor Output", value: "1.1 kW" },
  { label: "Net / Gross Weight", value: "800 / 850 kg" },
  { label: "Package Size", value: "1300 × 1190 × 1000 mm" },
];

const ELITE_35TS_SPECS_LEFT: SpecItem[] = [
  { label: "Main Blade Diameter", value: "315 mm" },
  { label: "Main Blade Speed", value: "4500 rpm" },
  { label: "Scoring Blade Diameter", value: "120 mm" },
  { label: "Scoring Blade Speed", value: "8000 rpm" },
  { label: "Blade Tilt", value: "0 – 45°" },
  { label: "Max Depth of Cut @ 45°", value: "67 mm" },
  { label: "Max Depth of Cut @ 90°", value: "95 mm" },
  { label: "Max Rip Capacity", value: "" },
  { label: "Standard", value: "1250 mm" },
  { label: "Option", value: "900 mm" },
  { label: "Sliding Beam Size", value: "" },
  { label: "Standard", value: "1600 × 360 mm" },
  { label: "Option", value: "1200 × 360 mm" },
];

const ELITE_35TS_SPECS_RIGHT: SpecItem[] = [
  { label: "Sliding Beam Cutting Capacity", value: "" },
  { label: "Standard", value: "1600 mm" },
  { label: "Option", value: "1250 mm" },
  { label: "Table Size", value: "800 × 550 mm" },
  { label: "Dust Extraction Outlet", value: "120 mm" },
  { label: "Main Motor Output", value: "" },
  { label: "3 × 380V", value: "5 kW" },
  { label: "Scoring Motor Output", value: "0.75 kW" },
  { label: "Angle Cutting Device", value: "940 × 150 × 1500 mm / 44.5 kg" },
  { label: "Net / Gross Weight", value: "400 / 460 kg" },
  { label: "Package Size", value: "1300 × 1000 × 1100 mm" },
];

export const SAW_SPEC_CONFIGS: Record<string, SpecConfig> = {
  "band-saw-65bs": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: BAND_SAW_65BS_SPECS_LEFT,
    right: BAND_SAW_65BS_SPECS_RIGHT,
  },
  "panel-saw-firma-40pl": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: FIRMA_40PL_SPECS_LEFT,
    right: FIRMA_40PL_SPECS_RIGHT,
  },
  "panel-saw-firma-35ps": {
    parametersTabLabel: "Technical Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: FIRMA_35PS_SPECS_LEFT,
    right: FIRMA_35PS_SPECS_RIGHT,
  },
  "panel-saw-forte-40pa": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: FORTE_40PA_SPECS_LEFT,
    right: FORTE_40PA_SPECS_RIGHT,
    dimensionsItems: FORTE_40PA_SPECS_RIGHT,
  },
  "panel-saw-elite-35ts": {
    parametersTabLabel: "Specifications",
    parametersTabWidthClass: "w-[220px] whitespace-nowrap",
    left: ELITE_35TS_SPECS_LEFT,
    right: ELITE_35TS_SPECS_RIGHT,
  },
};
