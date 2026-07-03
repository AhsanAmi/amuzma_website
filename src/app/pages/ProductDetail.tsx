"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ProductGallerySection } from "../components/ProductGallerySection";
import { ProductOperationalSection } from "../components/ProductOperationalSection";
import { ProductSpecificationsSection } from "../components/ProductSpecificationsSection";
import { ProductVideoContactSection } from "../components/ProductVideoContactSection";
import { ProductPartsSection } from "../components/ProductPartsSection";
import { SAW_PRODUCT_OVERRIDES } from "../data/sawProducts";

const PRODUCTS_DATA: Record<string, {
  name: string;
  model: string;
  category: string;
  tagline: string;
  heroImage: string;
  heroImageClassName?: string;
  heroHeightClassName?: string;
  featuresSubtitle: string;
  galleryDescription: string;
  dimensionsImage: string;
  dimensionsHeading?: string;
  dimensionsDescription: string;
  partsLabel: string;
  partsSectionTitle?: string;
  partsImages: string[];
  features: { title: string; image: string; desc: string }[];
  benefitsSubtitle: string;
  benefitsSectionTitle?: string;
  benefits: { icon: string; title: string; desc: string }[];
  gallery: string[];
  specs: { label: string; value: string }[];
  videoId: string;
  parts: { name: string; image: string }[];
}> = {
  "cnc-router-forte-13cr": {
    name: "CNC ROUTER",
    model: "Forte 13CR",
    category: "CNC Router",
    tagline: "Smart Technology. Industrial Strength. Precision in Every Cut.",
    heroImage: "/media/CNC-13CR-1.png",
    featuresSubtitle:
      "High-performance CNC router with 1300×2500mm area, rigid steel frame, precision guides, powerful spindle for accurate sheet processing.",
    galleryDescription:
      "The FORTE 1325CR is a high-performance CNC router designed for woodworking, sign-making, and panel processing, delivering speed, precision, and reliable results across wood, MDF, plywood, acrylic, and composite materials.",
    dimensionsImage: "/media/CNC-13CR-scaled.png",
    dimensionsDescription:
      "The FORTE 1325CR features a spacious 1300 × 2500 mm working area, ideal for full-size sheet processing. Its robust structural design ensures stability while accommodating large panels and complex machining tasks efficiently.",
    partsLabel: "Forte 1325CR",
    partsImages: [
      "/media/CNC-01.jpg-scaled.jpeg",
      "/media/CNC-03.jpg-scaled.jpeg",
      "/media/CNC-04.jpg-scaled.jpeg",
      "/media/1-1.png",
      "/media/2-1.png",
      "/media/3.png",
    ],
    features: [
      {
        title: "Aluminum Profile Working",
        image: "/media/CNC-01.jpg-scaled.jpeg",
        desc: "The AMUZMA FORTE 13CR is designed to deliver precise and efficient machining of aluminum profiles and components. Its rigid machine structure, high-precision motion system, and advanced CNC control technology.",
      },
      {
        title: "Air-Cooling Spindle",
        image: "/media/CNC-03.jpg-scaled.jpeg",
        desc: "The AMUZMA FORTE 13CR is equipped with a high-performance Air-Cooling Spindle, designed to deliver reliable, continuous operation with excellent machining precision. The air-cooled system efficiently.",
      },
      {
        title: "DSP Handheld Controller",
        image: "/media/CNC-04.jpg-scaled.jpeg",
        desc: "The AMUZMA FORTE 13CR features an advanced DSP Handheld Controller, providing simple, intuitive, and reliable machine control. Designed for ease of operation, the controller allows users to manage.",
      },
      {
        title: "Gantry Side Support",
        image: "/media/CNC-05.jpg-scaled.jpeg",
        desc: "Equipped with precision linear guides and a powerful spindle, the FORTE 1325CR guarantees smooth motion and reliable cutting performance. It processes wood, MDF, plywood, acrylic, and composites with accuracy.",
      },
    ],
    benefitsSubtitle:
      "Fast cutting and smooth motion improve workflow and output speed.",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "High Productivity",
        desc: "Fast cutting and smooth motion improve workflow and output speed.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Large Work Area",
        desc: "1300 × 2500 mm table handles full sheets easily and efficiently.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Strong Construction",
        desc: "Rigid steel frame ensures stability and long service life.",
      },
    ],
    gallery: [
      "/media/cnc-1-1.webp",
      "/media/1-1.png",
      "/media/2-1.png",
      "/media/3.png",
      "/media/4.jpg",
    ],
    specs: [
      { label: "Working Area", value: "1300 × 2500 × 200 mm" },
      { label: "Spindle Power", value: "3.2 kW Air Cooled" },
      { label: "Spindle Speed", value: "0–24,000 RPM" },
      { label: "Rapid Speed", value: "30,000 mm/min" },
      { label: "Cutting Speed", value: "0–18,000 mm/min" },
      { label: "Positioning Accuracy", value: "±0.05 mm" },
      { label: "Repeatability", value: "±0.03 mm" },
      { label: "Drive System", value: "Ball Screw + Linear Guide" },
      { label: "Control System", value: "DSP / NCSTUDIO" },
      { label: "Collet Type", value: "ER20" },
      { label: "Machine Weight", value: "Approx. 650 kg" },
      { label: "Power Supply", value: "380V / 50Hz 3-phase" },
    ],
    videoId: "dQw4w9WgXcQ",
    parts: [
      { name: "ER20 Collet Set", image: "https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80" },
      { name: "Spoilboard Sheet", image: "https://images.unsplash.com/photo-1695603414720-2fbd4db0a434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80" },
      { name: "Dust Shoe Assembly", image: "https://images.unsplash.com/photo-1735494035457-b6e8f68b5248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80" },
      { name: "Spindle Brush Kit", image: "https://images.unsplash.com/photo-1735494033794-b82c88743a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80" },
    ],
  },
  "cnc-router-forte-15cr": {
    name: "CNC ROUTER",
    model: "Forte 15CR",
    category: "CNC Router",
    tagline: "Smart Technology. Industrial Strength. Precision in Every Cut.",
    heroImage: "/media/CNC-13CR-1.png",
    featuresSubtitle:
      "High-performance CNC router with 1300×2500mm area, rigid steel frame, precision guides, powerful spindle for accurate sheet processing.",
    galleryDescription:
      "The FORTE 1325CR is a high-performance CNC router designed for woodworking, sign-making, and panel processing, delivering speed, precision, and reliable results across wood, MDF, plywood, acrylic, and composite materials.",
    dimensionsImage: "/media/CNC-15CR-scaled.png",
    dimensionsDescription:
      "The FORTE 1325CR features a spacious 1300 × 2500 mm working area, ideal for full-size sheet processing. Its robust structural design ensures stability while accommodating large panels and complex machining tasks efficiently.",
    partsLabel: "Forte 1325CR",
    partsImages: [
      "/media/cnc-1-1.webp",
      "/media/cnc-1-2-1024x640-1.webp",
      "/media/cnc-1-3-1024x640-1-1.webp",
      "/media/cnc-1-3-1024x640-1-1.webp",
      "/media/cnc-1-4-1024x640-1.webp",
      "/media/cnc-1-4-1024x640-1.webp",
    ],
    features: [
      {
        title: "Large Working Area",
        image: "/media/CNC-01.jpg-scaled.jpeg",
        desc: "The FORTE 15CR features a 1500 x 3000 mm working area, ideal for full-size sheets. It enables efficient cutting, carving, and shaping without repositioning, saving time and boosting productivity.",
      },
      {
        title: "High-Speed Performance",
        image: "/media/CNC-03.jpg-scaled.jpeg",
        desc: "Designed for speed and precision, this CNC router delivers smooth, accurate performance in continuous production. Its advanced motion system ensures consistent results in woodworking, signage, and panel processing tasks.",
      },
      {
        title: "Rigid Steel Frame Build",
        image: "/media/CNC-04.jpg-scaled.jpeg",
        desc: "Built with a heavy-duty steel frame, it delivers strong stability and vibration control, ensuring smooth finishes and lasting durability in industry.",
      },
      {
        title: "Precision Motion System",
        image: "/media/CNC-05.jpg-scaled.jpeg",
        desc: "Equipped with precision linear guides and a powerful spindle, the FORTE 15CR guarantees smooth motion and reliable cutting performance. It processes wood, MDF, plywood, acrylic, and composites with accuracy.",
      },
    ],
    benefitsSubtitle:
      "Fast cutting and smooth motion improve workflow and output speed.",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "High Productivity",
        desc: "Fast cutting and smooth motion improve workflow and output speed.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Large Work Area",
        desc: "1300 × 2500 mm table handles full sheets easily and efficiently.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Strong Construction",
        desc: "Rigid steel frame ensures stability and long service life.",
      },
    ],
    gallery: [
      "/media/cnc-1-1.webp",
      "/media/1-1.png",
      "/media/2-1.png",
      "/media/3.png",
      "/media/4.jpg",
    ],
    specs: [
      { label: "Working Area", value: "1500 × 3000 × 200 mm" },
      { label: "Spindle Power", value: "3.2 kW Air Cooled" },
      { label: "Spindle Speed", value: "0–24,000 RPM" },
      { label: "Rapid Speed", value: "30,000 mm/min" },
      { label: "Cutting Speed", value: "0–18,000 mm/min" },
      { label: "Positioning Accuracy", value: "±0.05 mm" },
      { label: "Repeatability", value: "±0.03 mm" },
      { label: "Drive System", value: "Ball Screw + Linear Guide" },
      { label: "Control System", value: "DSP / NCSTUDIO" },
      { label: "Collet Type", value: "ER20" },
      { label: "Machine Weight", value: "Approx. 650 kg" },
      { label: "Power Supply", value: "380V / 50Hz 3-phase" },
    ],
    videoId: "YD5zLrIn_AI",
    parts: [
      { name: "ER20 Collet Set", image: "https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80" },
      { name: "Spoilboard Sheet", image: "https://images.unsplash.com/photo-1695603414720-2fbd4db0a434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80" },
      { name: "Dust Shoe Assembly", image: "https://images.unsplash.com/photo-1735494035457-b6e8f68b5248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80" },
      { name: "Spindle Brush Kit", image: "https://images.unsplash.com/photo-1735494033794-b82c88743a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80" },
    ],
  },
  "wide-belt-sander-firma-1300ws": {
    name: "WIDE BELT SANDER",
    model: "Firma 1300WS",
    category: "Sanders",
    tagline: "Precision Wide Belt Sanding for Superior Surface Finishing Performance",
    heroImage: "/media/wide-belt-sander.png",
    featuresSubtitle:
      "1300mm capacity, powerful motor, and smooth feed control for consistent professional results.",
    galleryDescription:
      "The Wide Belt Sander Firma 1300WS delivers precision sanding for wood panels, doors, and furniture components. Its 1300mm working width, powerful motor, and adjustable feed speed ensure smooth, consistent finishes. Built with a heavy-duty frame and user-friendly controls, it's ideal for professional workshops seeking efficiency, accuracy, and reliable performance.",
    dimensionsImage: "/media/wide_belt_sander_21.jpg-removebg-preview.png",
    dimensionsHeading: "Wide Belt Sander Firma 1300WS:",
    dimensionsDescription:
      "Working Width: 1300 mm\nWorking Thickness: 3–110 mm\nConveyor Table Length: 2200 mm\nMachine Length: 2500 mm\nMachine Width: 2000 mm\nMachine Height: 2100 mm\nNet Weight: 2800 kg\nGross Weight: 3200 kg\n\nIf you need exact factory-certified dimensions, I can format them according to your brochure style.",
    partsLabel: "Firma 1300WS",
    partsImages: [
      "/media/wide_belt_sander_21.jpg-removebg-preview.png",
      "/media/wide_belt_sander_21.jpg-removebg-preview.png",
      "/media/wide_belt_sander_21.jpg-removebg-preview.png",
      "/media/wide_belt_sander_21.jpg-removebg-preview.png",
      "/media/wide_belt_sander_21.jpg-removebg-preview.png",
      "/media/wide_belt_sander_21.jpg-removebg-preview.png",
    ],
    features: [
      {
        title: "Wide Capacity",
        image: "/media/wide_belt_sander_21.jpg-removebg-preview-600x414-1.png",
        desc: "Handles panels up to 1300mm wide with consistent sanding pressure, making it ideal for doors, cabinets, tabletops, and large furniture components requiring smooth and even surface finishing.",
      },
      {
        title: "Powerful Motor",
        image: "/media/wide_belt_sander_21.jpg-removebg-preview-600x414-1.png",
        desc: "Equipped with a high-performance motor that delivers stable torque and reliable output, ensuring efficient material removal and smooth operation even during continuous industrial workloads.",
      },
      {
        title: "Adjustable Feed",
        image: "/media/wide_belt_sander_21.jpg-removebg-preview-600x414-1.png",
        desc: "Variable feed speed control allows precise adjustment based on material type and sanding requirements, improving finish quality while optimizing productivity and reducing material waste.",
      },
      {
        title: "Heavy-Duty Frame",
        image: "/media/wide_belt_sander_21.jpg-removebg-preview-600x414-1.png",
        desc: "Robust machine construction minimizes vibration, enhances stability, and ensures long-term durability, making it a dependable solution for professional woodworking workshops and production lines.",
      },
    ],
    benefitsSubtitle:
      "Key Benefits of Wide Belt Sander Firma 1300WS",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Superior Surface Finish",
        desc: "Delivers smooth, even sanding results that reduce the need for rework and ensure high-quality finishing on panels, doors, and furniture components.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Increased Productivity",
        desc: "Wide 1300mm capacity and efficient material removal speed up production, allowing workshops to process more pieces in less time.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Consistent Performance",
        desc: "Stable motor power and controlled feed speed maintain uniform sanding pressure for reliable, repeatable results.",
      },
    ],
    gallery: [
      "/media/wide_belt_sander_21.jpg-removebg-preview.png",
      "/media/wide_belt_sander_21.jpg-removebg-preview.png",
    ],
    specs: [
      { label: "Conveyor Belt Width", value: "240 mm" },
      { label: "Minimum Working", value: "3 mm" },
      { label: "Maximum Working", value: "1300 mm" },
      { label: "Motor Power", value: "—" },
      { label: "Belt Speed", value: "—" },
      { label: "Positioning Accuracy", value: "—" },
      { label: "Drive System", value: "—" },
      { label: "Control System", value: "—" },
      { label: "Machine Weight", value: "—" },
      { label: "Power Supply", value: "—" },
    ],
    videoId: "YD5zLrIn_AI",
    parts: [
      { name: "Sanding Belt Unit", image: "/media/wide_belt_sander_21.jpg-removebg-preview.png" },
      { name: "Main Motor", image: "/media/wide_belt_sander_21.jpg-removebg-preview.png" },
      { name: "Conveyor Feed System", image: "/media/wide_belt_sander_21.jpg-removebg-preview.png" },
      { name: "Adjustment System", image: "/media/wide_belt_sander_21.jpg-removebg-preview.png" },
      { name: "Dust Extraction Port", image: "/media/wide_belt_sander_21.jpg-removebg-preview.png" },
      { name: "Control Panel", image: "/media/wide_belt_sander_21.jpg-removebg-preview.png" },
    ],
  },
};

const PRODUCT_TEMPLATE_13CR = PRODUCTS_DATA["cnc-router-forte-13cr"];

const ADDITIONAL_PRODUCTS: Record<
  string,
  Pick<(typeof PRODUCTS_DATA)[string], "name" | "model" | "category"> &
    Partial<
      Pick<
        (typeof PRODUCTS_DATA)[string],
        "heroImage" | "heroImageClassName" | "heroHeightClassName" | "tagline" | "featuresSubtitle" | "features" | "benefitsSubtitle" | "benefitsSectionTitle" | "benefits" | "galleryDescription" | "gallery" | "dimensionsImage" | "dimensionsHeading" | "dimensionsDescription" | "partsSectionTitle" | "parts" | "partsImages"
      >
    >
> = {
  "dust-collector-dc2200": {
    name: "DUST COLLECTOR",
    model: "DC2200",
    category: "Dust Collector",
    heroImage: "/media/New-Project-28.jpg",
    heroImageClassName: "object-cover object-center origin-center scale-[1.11]",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "High suction capacity with efficient dust filtration ensures stable airflow and low-noise operation.",
    features: [
      {
        title: "3-Way Intake Manifold",
        image: "/media/1-4.png",
        desc: "Delivers consistent and efficient airflow to effectively capture fine dust and wood chips, ensuring a cleaner and safer workspace during daily operations.",
      },
      {
        title: "Y-Shaped Distribution",
        image: "/media/2-4.png",
        desc: "Designed with a small footprint, making it ideal for workshops with limited space without compromising extraction performance.",
      },
      {
        title: "Filter Bag",
        image: "/media/3-3.png",
        desc: "Built with sturdy materials for long-lasting reliability, even in light to moderate continuous workshop use.",
      },
      {
        title: "Magnetic Safety Switch",
        image: "/media/4-4.jpg",
        desc: "Features a user-friendly collection bag setup that allows quick removal and replacement for minimal downtime.",
      },
    ],
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Cleaner Work Environment",
        desc: "Effectively removes fine dust and wood chips, keeping the workspace clean and reducing airborne particles.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Improved Safety",
        desc: "Helps maintain better air quality, creating a safer and healthier environment for operators and students.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Excellence",
        desc: "Compact design saves valuable workshop space while still delivering strong extraction performance.",
      },
    ],
    galleryDescription:
      "The Dust Collector DC2200 is designed to deliver powerful and consistent dust extraction for professional woodworking environments. Featuring a multi-stage filtration system, large-capacity collection unit, and high-performance motor, it ensures efficient removal of fine particles and heavy debris. Its durable construction, balanced airflow design, and easy maintenance system support long-term reliability, improved air quality, and safer workshop operations.",
    gallery: [
      "/media/Dust-Collector-DC2200-scaled.jpg",
      "/media/1-4.png",
      "/media/2-4.png",
      "/media/3-3.png",
      "/media/4-4.jpg",
    ],
    dimensionsImage: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
    dimensionsHeading: "Clear dimensional",
    dimensionsDescription:
      "The Dust Collector DC2200 is designed with practical and space-efficient dimensions to ensure easy installation and seamless integration into workshop environments. Its balanced structure allows stable positioning while maintaining optimal airflow performance. The compact yet durable build makes it suitable for both small and large production facilities.",
    partsSectionTitle: "Product Image",
    partsImages: [
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
    ],
    parts: [
      {
        name: "frist one J1",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      },
      {
        name: "frist one J2",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      },
      {
        name: "frist one J3",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      },
      {
        name: "frist one J4",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      },
      {
        name: "frist one J5",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      },
      {
        name: "frist one J6",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.png",
      },
    ],
  },
  "dust-collector-abs5000": {
    name: "DUST COLLECTOR",
    model: "ABS5000",
    category: "Dust Collector",
    heroImage: "/media/New-Project-30.jpg",
    heroHeightClassName:
      "h-[420px] sm:h-[475px] md:h-[530px] lg:h-[570px]",
    heroImageClassName:
      "object-cover object-[84%_center]",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "Powerful Suction. Space-Saving Design. Reliable Performance.",
    features: [
      {
        title: "Motor with Magnetic Safe",
        image: "/media/1-3.png",
        desc: "The ABS5000 dust collector provides strong suction capacity to remove dust, wood particles, and fine waste quickly. It keeps the workspace clean and improves overall machine performance and safety.",
      },
      {
        title: "Multi-Port Intake Manifold",
        image: "/media/2-3.png",
        desc: "This machine is built with high-quality steel material for long-lasting durability. Its strong body ensures reliable performance in industrial environments and continuous operation without damage.",
      },
      {
        title: "Filter Bags",
        image: "/media/3-2.png",
        desc: "The ABS5000 comes with a large filter bag and dust collection bag. It captures fine dust particles effectively and improves air quality, creating a healthier and safer working environment.",
      },
      {
        title: "Swivel Casters",
        image: "/media/4-3.jpg",
        desc: "The dust collector has wheels for easy movement within the workshop. Its simple design allows quick bag replacement and easy maintenance, saving time and effort for users.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Improves Air Quality",
        desc: "The dust collector efficiently removes fine dust particles from the air, keeping the workspace clean, fresh, and healthy for daily operations.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Increases Machine Life",
        desc: "By capturing harmful dust and airborne particles, it reduces health risks and creates a safer working environment for employees.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Reduces Cleaning Time",
        desc: "Regular dust removal prevents dust buildup inside machines, reducing wear and tear and extending equipment lifespan.",
      },
    ],
    galleryDescription:
      "The DUST COLLECTOR – ABS5000 is a high-performance industrial dust extraction system designed for efficient and reliable operation. Featuring dual vertical filter bags and large-capacity dust collection units, it ensures superior filtration and clean air circulation. Its heavy-duty steel frame provides durability and stability, while the powerful motor unit delivers strong suction performance. The compact vertical design saves workspace area, making it ideal for woodworking units, manufacturing plants, and industrial workshops requiring continuous dust control and operational efficiency.",
    gallery: [
      "/media/DSC_2375-removebg-preview-2.png",
      "/media/1-3.png",
      "/media/2-3.png",
      "/media/3-2.png",
      "/media/4-3.jpg",
    ],
    dimensionsImage: "/media/DSC_2375-removebg-preview-2.png",
    dimensionsHeading: "Dust Reduction",
    dimensionsDescription:
      "The ABS5000 dust collector efficiently removes airborne dust, fine particles, and industrial waste generated during machine operation. Its powerful suction system ensures cleaner air circulation, reduces dust accumulation on equipment, and improves workplace safety.",
    partsSectionTitle: "Product Images",
    partsImages: [
      "/media/DSC_2375-removebg-preview-2.png",
      "/media/DSC_2375-removebg-preview-2.png",
      "/media/DSC_2375-removebg-preview-2.png",
      "/media/DSC_2375-removebg-preview-2.png",
      "/media/DSC_2375-removebg-preview-2.png",
      "/media/DSC_2375-removebg-preview-2.png",
    ],
    parts: [
      {
        name: "Dual Filter Bag System",
        image: "/media/DSC_2375-removebg-preview-2.png",
      },
      {
        name: "High-Capacity Dust Collection",
        image: "/media/DSC_2375-removebg-preview-2.png",
      },
      {
        name: "Heavy-Duty Steel Structure",
        image: "/media/DSC_2375-removebg-preview-2.png",
      },
      {
        name: "Powerful Motor Unit",
        image: "/media/DSC_2375-removebg-preview-2.png",
      },
      {
        name: "Compact Vertical Design",
        image: "/media/DSC_2375-removebg-preview-2.png",
      },
      {
        name: "Industrial-Grade Performance",
        image: "/media/DSC_2375-removebg-preview-2.png",
      },
    ],
  },
  "dust-collector-rdc3800": {
    name: "DUST COLLECTOR",
    model: "RDC3800",
    category: "Dust Collector",
    heroImage:
      "/media/amuzma_web_banners_for_products_Dust_Collector_DC_3800_1.jpg.webp",
    heroHeightClassName:
      "h-[420px] sm:h-[475px] md:h-[530px] lg:h-[570px]",
    heroImageClassName: "object-cover object-[84%_center]",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "Compact, Powerful & Workshop‑Ready Dust Extraction",
    features: [
      {
        title: "Motor with Magnetic",
        image: "/media/1-2.png",
        desc: "Engineered to fit in small workshop spaces without sacrificing suction power, making it ideal for benchtop tools and multiple workstations.",
      },
      {
        title: "Reinforced Base",
        image: "/media/2-2.png",
        desc: "Delivers robust airflow and suction performance to capture dust and chips effectively from saws, sanders, planers, routers, and other shop equipment.",
      },
      {
        title: "High-Efficiency Filter Bag",
        image: "/media/3-1.png",
        desc: "Built with sturdy steel housing and durable components that withstand daily use in demanding environments.",
      },
      {
        title: "Multi-Port Intake Manifold",
        image: "/media/4-2.jpg",
        desc: "The dust and chips are collected in a convenient bin or bag that's simple to remove and empty — minimizing downtime during use.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Reliable for daily workshop operations",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Keeps Your Workspace",
        desc: "The RDC3800 efficiently captures dust and debris from your tools, preventing buildup on floors and surfaces. A cleaner workspace reduces hazards.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Reduces Wear on Tools",
        desc: "Consistently removing dust and chips, the RDC3800 prevents abrasive particles from settling on machinery.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Improves Air Quality",
        desc: "High-efficiency filtration traps even microscopic dust, preventing it from circulating in your workshop. Cleaner air protects your lungs, reduces.",
      },
    ],
    galleryDescription:
      "The RDC3800 is designed for small to mid-sized workshops, providing consistent dust and chip removal while keeping your workspace clean. Its durable build, efficient filtration, and easy maintenance make it suitable for everyday workshop use.",
    gallery: [
      "/media/Dusy-Collector-RDC3800.png",
      "/media/1-2.png",
      "/media/2-2.png",
      "/media/3-1.png",
      "/media/4-2.jpg",
    ],
    dimensionsImage: "/media/Dusy-Collector-RDC3800.png",
    dimensionsHeading: "Dust Reduction",
    dimensionsDescription:
      "The RDC3800 is a compact yet powerful dust collector engineered to deliver efficient dust and chip extraction for small to mid-sized workshops. Designed with performance and reliability at its core, it strikes the perfect balance between strong suction power and convenient portability—keeping your workspace cleaner and your equipment operating smoothly.",
    partsSectionTitle: "Product Images",
    partsImages: [
      "/media/Dusy-Collector-RDC3800-1.png",
      "/media/Dusy-Collector-RDC3800-1.png",
      "/media/Dusy-Collector-RDC3800-1.png",
      "/media/Dusy-Collector-RDC3800-1.png",
      "/media/Dusy-Collector-RDC3800-1.png",
      "/media/Dusy-Collector-RDC3800-1.png",
    ],
    parts: [
      {
        name: "High-Efficiency Dust",
        image: "/media/Dusy-Collector-RDC3800-1.png",
      },
      {
        name: "Dust Extraction System",
        image: "/media/Dusy-Collector-RDC3800-1.png",
      },
      {
        name: "Powerful Workshop",
        image: "/media/Dusy-Collector-RDC3800-1.png",
      },
      {
        name: "Compact Industrial",
        image: "/media/Dusy-Collector-RDC3800-1.png",
      },
      {
        name: "Reliable Dust Extraction",
        image: "/media/Dusy-Collector-RDC3800-1.png",
      },
      {
        name: "Heavy-Duty Dust",
        image: "/media/Dusy-Collector-RDC3800-1.png",
      },
    ],
  },
  "spindle-moulder-elite-30sm": {
    name: "SPINDLE MOULDER",
    model: "Elite 30SM",
    category: "Moulder",
    tagline: "Precision Engineering. Built for the Professional Workshop.",
    heroImage: "/media/Spindle-moulder-30SM.png",
    featuresSubtitle:
      "High-performance spindle moulder with precision, durability, and smooth operation for professional woodworking tasks.",
    features: [
      {
        title: "Heavy-Duty Construction",
        image: "/media/frist-one-J4-1.jpg",
        desc: "Built with a precision-ground cast iron bed, the Elite 30SM offers exceptional durability and stability. Its robust construction ensures long-term reliability, supporting heavy workloads without compromising performance.",
      },
      {
        title: "Precision Cutting",
        image: "/media/frist-one-J3-1.jpg",
        desc: "Engineered for accurate shaping and profiling, this spindle moulder delivers consistent, clean cuts. The precision components maintain exact tolerances, allowing professional-grade results on hardwoods.",
      },
      {
        title: "Smooth Operation",
        image: "/media/frist-one-J2-1.jpg",
        desc: "The Elite 30SM provides vibration-free, stable operation. Its balanced spindle and rigid frame reduce operator strain and improve control, ensuring effortless, consistent performance during long production cycles.",
      },
      {
        title: "Versatile Shaping",
        image: "/media/frist-one-J1-1.jpg",
        desc: "Perfect for joinery, moldings, and custom profiles, this machine handles a variety of woodworking tasks. It adapts easily to different cutters and materials, making it ideal for diverse shop applications.",
      },
    ],
    benefitsSectionTitle: "Benifits",
    benefitsSubtitle:
      "The Elite 30SM spindle moulder offers durable, precise, and stable performance.",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Long-Term Durability",
        desc: "Heavy-duty cast iron bed ensures reliable performance over years of use.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Precision Cutting",
        desc: "Precision-ground components deliver consistent, accurate shaping and profiling results.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Smooth Operation",
        desc: "Vibration-free design reduces operator fatigue and ensures stable, controlled work.",
      },
    ],
    galleryDescription:
      "Elite 30SM is a high-performance spindle moulder designed for precise shaping, smooth cutting, and reliable operation, making it ideal for professional furniture and woodworking applications.",
    gallery: [
      "/media/Untitled-design-12-1.png",
      "/media/frist-one-J3-1.jpg",
      "/media/frist-one-J4-1.jpg",
      "/media/frist-one-J1-1.jpg",
      "/media/frist-one-J2-1.jpg",
    ],
    dimensionsImage: "/media/Spindle-Moulder-01-scaled.png",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "Elite 30SM features a compact yet sturdy structure designed for workshop efficiency, ensuring stable operation, optimal space utilization, and easy installation without compromising performance or durability.",
    partsImages: [
      "/media/frist-one-J1-1.jpg",
      "/media/frist-one-J2-1.jpg",
      "/media/frist-one-J3-1.jpg",
      "/media/frist-one-J4-1.jpg",
      "/media/frist-one-J3-1.jpg",
      "/media/frist-one-J4-1.jpg",
    ],
    parts: [
      {
        name: "Elite 30SM Pro",
        image: "/media/frist-one-J1-1.jpg",
      },
      {
        name: "Elite 30SM Advance",
        image: "/media/frist-one-J2-1.jpg",
      },
      {
        name: "Elite 30SM Industrial",
        image: "/media/frist-one-J3-1.jpg",
      },
      {
        name: "Elite 30SM Master",
        image: "/media/frist-one-J4-1.jpg",
      },
      {
        name: "Elite 30SM Pricison",
        image: "/media/frist-one-J3-1.jpg",
      },
      {
        name: "Elite 30SM Master",
        image: "/media/frist-one-J4-1.jpg",
      },
    ],
  },
  "edge-banding-e5": {
    name: "EDGE BANDING",
    model: "E5",
    category: "Edge Banders",
    heroImage: "/media/Edge-banding.png",
    tagline: "Precision Edging. Compact Design. Professional Finish.",
    featuresSubtitle:
      "The Edge Banding E5 delivers precise, efficient edge finishing for compact professional workshops.",
    features: [
      {
        title: "High-Speed Output",
        image: "/media/Amuzma-E5-4-1.webp",
        desc: "Designed for fast, continuous operation, boosting productivity while maintaining consistent edge quality across every panel and project.",
      },
      {
        title: "Precision Control",
        image: "/media/Amuzma-E5-3-1.webp",
        desc: "Advanced control system ensures accurate trimming, clean edges, and professional finishing for flawless results every time.",
      },
      {
        title: "Premium Finish",
        image: "/media/Amuzma-E5-2-1-1.webp",
        desc: "Delivers smooth, seamless edge banding that enhances durability, appearance, and long-term product value.",
      },
      {
        title: "Smart Automation",
        image: "/media/Amuzma-E5-1-1-1.webp",
        desc: "Integrated automatic functions reduce manual effort, improve efficiency, and support higher production capacity with ease.",
      },
    ],
    benefitsSectionTitle: "Benifits",
    benefitsSubtitle:
      "Boost productivity, ensure flawless edge quality, and simplify operations",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Faster Production",
        desc: "Boosts workflow speed while maintaining consistent quality output.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Perfect Edge Finish",
        desc: "Ensures smooth, seamless edges with a clean professional look.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Easy Operation",
        desc: "User-friendly controls simplify setup and daily machine use.",
      },
    ],
    galleryDescription:
      "The Panel Saw 12″Elite 35TS is the perfect solution for workshops that demand precision cutting without sacrificing valuable floor space. Designed as a compact yet fully featured panel saw, it offers the performance and build quality of a full-sized machine in a space-efficient footprint.Built on a robust, heavy-gauge steel chassis, the 35TS delivers exceptional durability and stability. Its generous grey cast iron table and true panel saw trunnion system ensure smooth, vibration-free operation — providing clean, accurate cuts every time.Whether you're sizing panels or working with solid timber, the Elite 35TS brings professional-grade performance to any workshop, big or small.",
    gallery: [
      "/media/Untitled-design-9.png",
      "/media/Amuzma-E5-2-1-1.webp",
      "/media/Amuzma-E5-3-1.webp",
      "/media/Amuzma-E5-4-1.webp",
      "/media/Amuzma-E5-5-2.png",
    ],
    dimensionsImage: "/media/Edge-banding-E5-01-scaled.png",
    dimensionsHeading: "Compact & Efficient",
    dimensionsDescription:
      "Here's a professional way to present machine dimensions (you can adjust numbers as per your actual model):Machine Dimensions Length: 4200 mm Width: 900 mm Height: 1600 mmWorking Height 850 mmNet Weight 1500 kgIf you share the exact model (Firma 150ATC or Amuzma P6), I can format the precise technical dimension section accordingly.",
    parts: [
      { name: "Control Panel", image: "/media/Amuzma-E5-4-1.webp" },
      { name: "Feed Rollers", image: "/media/Amuzma-E5-3-1.webp" },
      { name: "Glue System", image: "/media/Amuzma-E5-2-1-1.webp" },
      { name: "Trim Unit", image: "/media/Amuzma-E5-2-1-1.webp" },
      { name: "Heating Unit", image: "/media/Amuzma-E5-3-1.webp" },
      { name: "Drive Motor", image: "/media/Amuzma-E5-4-1.webp" },
    ],
  },
  "edge-banding-p6": {
    name: "EDGE BANDING",
    model: "P6",
    category: "Edge Banders",
    heroImage: "/media/Edge-banding.png",
    tagline: "Powerful & Industrial",
    featuresSubtitle:
      "The Elite P6 combines advanced bonding technology with stable operation, ensuring clean edges, reduced material waste, and high-efficiency production.",
    features: [
      {
        title: "PLC Touchscreen Control",
        image: "/media/4-1.jpg",
        desc: "Equipped with a high-performance gluing unit, Elite P6 ensures strong and uniform adhesive application for secure edge bonding and long-lasting durability.",
      },
      {
        title: "Position Adjustment Handl",
        image: "/media/Amuzma-E5-2-1-1.webp",
        desc: "Integrated front and rear trimming systems provide clean, smooth, and accurate edge finishing, reducing manual rework and improving overall product quality.",
      },
      {
        title: "Gluing and Pressure Unit",
        image: "/media/Amuzma-E5-3-1.webp",
        desc: "The heavy-duty feeding system ensures consistent panel movement, minimizing vibration and delivering precise alignment throughout the edging process.",
      },
      {
        title: "Trimming Units",
        image: "/media/Amuzma-E5-4-1.webp",
        desc: "Designed for professional workshops, Elite P6 offers reliable operation, optimized speed control, and enhanced productivity for continuous daily use.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Flawless Edge Quality",
        desc: "Elite P6 ensures perfectly bonded edges with precise trimming and finishing units, delivering a clean, seamless appearance.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Increased Production",
        desc: "With its stable feeding system and optimized operating speed, the Elite P6 reduces manual effort and production time.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Long-Term Reliability",
        desc: "Constructed with durable components and advanced engineering, Elite P6 offers dependable operation, reduced maintenance needs.",
      },
    ],
    galleryDescription:
      "Elite E6 is a high-performance edge banding machine designed for precision, efficiency, and durability. It delivers smooth edge bonding, accurate trimming, and reliable operation for professional woodworking environments.",
    gallery: [
      "/media/Untitled-design-9.png",
      "/media/Amuzma-E5-2-1-1.webp",
      "/media/Amuzma-E5-1-1-1.webp",
      "/media/Amuzma-E5-3-1.webp",
      "/media/Amuzma-E5-4-1.webp",
    ],
    dimensionsImage: "/media/Edge-banding-P6-01-scaled.png",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "The Elite P6 is designed with balanced and space-efficient dimensions to ensure easy installation and seamless integration into professional workshop layouts. Its optimized structure supports stable operation while maximizing available workspace efficiency.",
    partsSectionTitle: "Product Image",
    parts: [
      { name: "frist one J1", image: "/media/Amuzma-E5-1-1-1.webp" },
      { name: "frist one J2", image: "/media/Amuzma-E5-2-1-1.webp" },
      { name: "frist one J3", image: "/media/Amuzma-E5-3-1.webp" },
      { name: "frist one J4", image: "/media/Amuzma-E5-4-1.webp" },
      { name: "frist one J5", image: "/media/Amuzma-E5-1-1.webp" },
      { name: "frist one J6", image: "/media/Amuzma-E5-4.webp" },
    ],
  },
  "edge-banding-c7": {
    name: "Edge Banding",
    model: "C7",
    category: "Edge Banders",
    heroImage: "/media/Edge-banding.png",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "High suction capacity with efficient dust filtration ensures stable airflow and low-noise operation.",
    features: [
      {
        title: "Precision Gluing",
        image: "/media/Amuzma-E5-2.png",
        desc: "Advanced gluing system ensures strong and uniform adhesive application, providing secure edge bonding and long-lasting durability for furniture panels and board materials",
      },
      {
        title: "Clean Trimming",
        image: "/media/Amuzma-E5-4.png",
        desc: "Equipped with accurate trimming units, the C7 delivers smooth and precise edge finishing, reducing manual rework and enhancing overall product appearance.",
      },
      {
        title: "Efficient Operation",
        image: "/media/Amuzma-E5-3.png",
        desc: "Designed for high productivity, the machine supports continuous edge banding with consistent speed, improving workflow efficiency.",
      },
      {
        title: "Stable Structure",
        image: "/media/Amuzma-E5-5.png",
        desc: "Built with a robust frame and vibration-resistant design, the Edge Banding C7 ensures reliable performance, operational stability.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Precision",
        desc: "The Edge Banding C7 improves production efficiency by delivering strong edge bonding, smooth finishing, and consistent performance, reducing manually.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Efficiency",
        desc: "Combines planing and thicknessing functions in one machine, reducing workflow time, saving space, and improving overall workshop productivity.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Durability",
        desc: "Built with a heavy-duty structure and reliable components, providing long-lasting performance and stable operation even during continuous industrial.",
      },
    ],
    galleryDescription:
      "The Edge Banding C7 is a high-performance machine designed for precise and efficient edge finishing. It delivers strong adhesive bonding, smooth trimming, and clean finishing, ensuring professional-quality results for furniture manufacturing and panel processing applications.",
    gallery: ["/media/Untitled-design-9.png"],
    dimensionsImage: "/media/Amuzma-E5-2.png",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "Designed with a compact yet robust structure, the Edge Banding C7 offers optimized dimensions that ensure space efficiency, operational stability, and smooth integration into professional woodworking production setups.",
    partsSectionTitle: "Product Image",
    parts: [
      { name: "EdgeLine C7 Industrial", image: "/media/Amuzma-E5-5.png" },
      { name: "EdgeMaster C7 Pro", image: "/media/Amuzma-E5-2.png" },
      { name: "ProEdge C7 Series", image: "/media/Amuzma-E5-4.png" },
      { name: "EdgeCraft C7", image: "/media/Amuzma-E5-3.png" },
      { name: "UltraBond C7", image: "/media/Amuzma-E5-5.png" },
      { name: "SmartEdge C7 Pro", image: "/media/Amuzma-E5-4.png" },
    ],
  },
  "planer-elite-41pf": {
    name: "PLANER",
    model: "Elite 41PF",
    category: "Planer",
    heroImage: "/media/Planer-41PF-1.png",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle: "Precision Cutting. Powerful Performance",
    features: [
      {
        title: "Main Control Panel",
        image: "/media/pf11.webp",
        desc: "Elite 41PF allows precise adjustment of cutting depth, ensuring accurate wood thickness and consistent planing results. Perfect for professional woodworking, it provides flexibility for different project.",
      },
      {
        title: "Bridge-Type Cutterhead",
        image: "/media/pf4.webp",
        desc: "Equipped with a powerful, heavy-duty motor, the Elite 41PF ensures long-term reliability and continuous performance. It handles demanding woodworking tasks efficiently, reducing downtime.",
      },
      {
        title: "Precision Ground Table",
        image: "/media/pf3.webp",
        desc: "Built with robust materials, the Elite 41PF withstands industrial use and heavy workloads. Its durable design ensures longevity, reliability, and consistent performance in demanding workshop .",
      },
      {
        title: "Adjustment Lever",
        image: "/media/pf2.webp",
        desc: "The precision sliding table allows easy panel movement, improves operator control, enhances cutting efficiency, reduces effort, and ensures smooth, accurate handling of large materials safely.",
      },
    ],
    benefitsSectionTitle: "Equipment Benefits",
    benefitsSubtitle: "Planer Elite 41PF – Durability and Comfort",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Precision Planing",
        desc: "Elite 41PF ensures accurate and consistent wood thickness, providing smooth surfaces every time. Its adjustable cutting depth allows professional.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Enhanced Productivity",
        desc: "With a heavy-duty motor and high-efficiency operation, Elite 41PF speeds up workflow, reduces downtime, and allows woodworkers to complete tasks.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Durability and Comfort",
        desc: "Designed for industrial use, Elite 41PF combines robust construction with ergonomic features, ensuring long-lasting performance, operator comfort.",
      },
    ],
    galleryDescription:
      "Elite 41PF provides precise wood planing, smooth finishes, and consistent thickness. Durable design and powerful motor ensure high efficiency, reliability, and professional-grade performance for woodworking and industrial applications.",
    gallery: [
      "/media/Planer-16-Elite-41PF-profile.jpg",
      "/media/pf3-1.webp",
      "/media/pf4-1.webp",
      "/media/pf2.webp",
      "/media/pf11-2.webp",
    ],
    dimensionsImage: "/media/Planner-41PF-03-scaled.png",
    dimensionsHeading: "Planing Blades",
    dimensionsDescription:
      "Elite 41PF features high-quality, durable planing blades that ensure smooth, precise cuts. Designed for professional woodworking, these blades provide consistent surface finish and long-lasting performance for all types of wood.",
    partsSectionTitle: "Product Images",
    parts: [
      { name: "Firma 40PL Panel Saw", image: "/media/pf2.webp" },
      { name: "Precision Sliding", image: "/media/pf3.webp" },
      { name: "Panel Saw System", image: "/media/pf4.webp" },
      { name: "Panel Saw Machine", image: "/media/pf11.webp" },
      {
        name: "Panel Saw Equipment",
        image: "/media/Planer-16-Elite-41PF-profile-J-L-3.jpg",
      },
      { name: "Industrial Panel Saw", image: "/media/pf3.webp" },
    ],
  },
  "planer-elite-41cm-cs": {
    name: "PLANER & THICKNESSER",
    model: "Elite 41CM/CS",
    category: "Planer",
    heroImage:
      "/media/Thicknesser-41CM.png",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "High suction capacity with efficient dust filtration ensures stable airflow and low-noise operation.",
    features: [
      {
        title: "Manual Handwheel",
        image: "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-1.webp",
        desc: "Combines surface planing and thicknessing in one machine, providing efficient workflow and saving valuable workshop space while delivering accurate and smooth results.",
      },
      {
        title: "Adjustment Lever",
        image: "/media/pf3-1.webp",
        desc: "Equipped with a high-quality cutter head that ensures clean, uniform cuts and excellent surface finish across various wood types.",
      },
      {
        title: "Helical Cutterhead",
        image: "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-3.webp",
        desc: "Built with a robust frame and stable worktables to minimize vibration and enhance machining accuracy during continuous operation.",
      },
      {
        title: "Thicknessing Table",
        image: "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-4.webp",
        desc: "Strong motor ensures consistent cutting speed and reliable performance for both light and heavy woodworking tasks.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Precision",
        desc: "Provides precise thickness calibration and smooth finishing for consistent, high-quality woodworking results.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Efficiency",
        desc: "Combines planing and thicknessing functions in one machine, reducing workflow time, saving space, and improving overall workshop productivity.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Durability",
        desc: "Built with a heavy-duty structure and reliable components, providing long-lasting performance and stable operation even during continuous industrial.",
      },
    ],
    galleryDescription:
      "Elite 41CS / CM Planer & Thicknesser is a powerful and versatile woodworking machine designed for precise surface planing and accurate thickness calibration, ensuring smooth finishes and consistent material dimensions.",
    gallery: [
      "/media/Untitled-design-13-1.png",
      "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-1-1.webp",
      "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-2.webp",
      "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-3.webp",
      "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-4.webp",
    ],
    dimensionsImage: "/media/Thicknesser-and-planner-41CS-02-scaled.png",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "Elite 41CS / CM features a space-efficient yet heavy-duty design, ensuring stable operation, easy installation, and optimal workspace utilization without compromising machining accuracy or performance.",
    partsSectionTitle: "Product Image",
    parts: [
      {
        name: "Elite 41CS Pro",
        image: "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-4.webp",
      },
      {
        name: "Elite 41CM Advance",
        image: "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-3.webp",
      },
      {
        name: "Elite 41CS Industrial",
        image: "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-2.webp",
      },
      {
        name: "Elite 41CM Master",
        image: "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-1-1.webp",
      },
      {
        name: "Elite 41CS Precision",
        image: "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-2.webp",
      },
      {
        name: "Elite 41CM Plus",
        image: "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-4.webp",
      },
    ],
  },
  "thicknesser-elite-41th": {
    name: "THICKNESSER",
    model: "Elite 41TH",
    category: "Planer",
    heroImage: "/media/IMG_9016.jpeg",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "High suction capacity with efficient dust filtration ensures stable airflow and low-noise operation.",
    features: [
      {
        title: "Main Control Panel",
        image: "/media/Thicknesser-25-Elite-41th-1.webp",
        desc: "Built with a powerful motor and rigid construction, the Elite 41TH delivers consistent cutting strength and reliable operation, making it ideal for demanding woodworking environments and continuous production tasks.",
      },
      {
        title: "Power Feed Roller Assembl",
        image: "/media/Thicknesser-25-Elite-41th-2.jpg",
        desc: "Designed for accurate thickness calibration, this machine ensures uniform material removal and smooth surface finishing, helping achieve precise dimensions for professional woodworking projects.",
      },
      {
        title: "Table Height Handwheel",
        image: "/media/Thicknesser-25-Elite-41th-3.jpg",
        desc: "Equipped with a high-speed cutter block, the Elite 41TH provides clean, sharp cuts with reduced vibration, improving surface quality and enhancing overall machining efficiency.",
      },
      {
        title: "Cast-Iron Table",
        image: "/media/Thicknesser-25-Elite-41th-4.jpg",
        desc: "Featuring a strong and well-balanced table structure, it ensures stable material feeding, minimizes movement during operation.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Precision",
        desc: "Provides precise thickness calibration and smooth finishing for consistent, high-quality woodworking results.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Efficiency",
        desc: "Combines planing and thicknessing functions in one machine, reducing workflow time, saving space, and improving overall workshop productivity.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Durability",
        desc: "Built with a heavy-duty structure and reliable components, providing long-lasting performance and stable operation even during continuous industrial.",
      },
    ],
    galleryDescription:
      "The Elite 41TH is a high-performance thicknesser designed for precise material calibration and smooth surface finishing. Built with robust construction and reliable cutting power, it ensures consistent thickness accuracy and professional woodworking results.",
    gallery: [
      "/media/Untitled-design-14.png",
      "/media/Thicknesser-25-Elite-41th-1.jpg",
      "/media/Thicknesser-25-Elite-41th-3.jpg",
      "/media/Thicknesser-25-Elite-41th-2.jpg",
      "/media/Thicknesser-25-Elite-41th-4.jpg",
    ],
    dimensionsImage: "/media/Thicknesser-41th-04-scaled.png",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "Designed with a compact yet robust structure, the Elite 41TH offers optimized dimensions that ensure workspace efficiency while maintaining stability, strength, and smooth operational performance.",
    partsSectionTitle: "Product Image",
    parts: [
      {
        name: "Elite 41TH Precision",
        image: "/media/Thicknesser-25-Elite-41th-1.jpg",
      },
      {
        name: "ProCut 41 Industrial",
        image: "/media/Thicknesser-25-Elite-41th-3.webp",
      },
      {
        name: "Titan 41 Wood Thickness",
        image: "/media/Thicknesser-25-Elite-41th-3-1.jpg",
      },
      {
        name: "MaxPlaner 41 Heavy-Duty",
        image: "/media/Thicknesser-25-Elite-41th-1.webp",
      },
      {
        name: "WoodMaster 41TH Surface",
        image: "/media/Thicknesser-25-Elite-41th-3.webp",
      },
      {
        name: "UltraThick 41 Profession",
        image: "/media/Thicknesser-25-Elite-41th-1.webp",
      },
    ],
  },
  "thicknesser-firma-63th": {
    name: "THICKNESSER",
    model: "Firma 63TH",
    category: "Planer",
    heroImage: "/media/63th.png",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "High suction capacity with efficient dust filtration ensures stable airflow and low-noise operation.",
    features: [
      {
        title: "Mechanical Control Panel",
        image: "/media/Thicknesser-25-Firma-63TH-J1.webp",
        desc: "The AMUZMA Firma 63TH features an advanced Electro-Mechanical Control Panel designed for precise machine control, efficient operation, and enhanced user convenience.",
      },
      {
        title: "Hinged Internal Chip",
        image: "/media/Thicknesser-25-Firma-63TH-J2.webp",
        desc: "The AMUZMA Firma 63TH is equipped with a Hinged Internal Chip Deflector, designed to optimize chip extraction and maintain a cleaner, more efficient working environment.",
      },
      {
        title: "Thicknessing Bed",
        image: "/media/Thicknesser-25-Firma-63TH-J3.webp",
        desc: "The AMUZMA Firma 63TH features a robust Heavy-Duty Thicknessing Bed engineered for maximum stability, precision, and long-term durability.",
      },
      {
        title: "Table Safety Shroud",
        image: "/media/Thicknesser-25-Firma-63TH-J4.webp",
        desc: "The AMUZMA Firma 63TH is equipped with an Outfeed Table Safety Shroud, designed to enhance operator safety while maintaining smooth and efficient material flow. This protective feature helps shield moving components.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "Precision",
        desc: "Provides precise thickness calibration and smooth finishing for consistent, high-quality woodworking results.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Efficiency",
        desc: "Combines planing and thicknessing functions in one machine, reducing workflow time, saving space, and improving overall workshop productivity.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Durability",
        desc: "Built with a heavy-duty structure and reliable components, providing long-lasting performance and stable operation even during continuous industrial.",
      },
    ],
    galleryDescription:
      "The Firma 63TH is a high-capacity industrial thicknesser engineered for demanding production workshops. Its precision spiral cutter head, sound-insulated cabinet, and heavy-duty thicknessing bed deliver consistent calibration, superior surface finish, and reliable performance on wide workpieces.",
    gallery: [
      "/media/Untitled-design-15.png",
      "/media/Thicknesser-25-Firma-63TH-J1.webp",
      "/media/Thicknesser-25-Firma-63TH-J2.webp",
      "/media/Thicknesser-25-Firma-63TH-J3.webp",
      "/media/Thicknesser-25-Firma-63TH-J4.webp",
    ],
    dimensionsImage: "/media/Thicknesser-63th-05-scaled.png",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "Designed with a compact yet robust structure, the Elite 41TH offers optimized dimensions that ensure workspace efficiency while maintaining stability, strength, and smooth operational performance.",
    partsSectionTitle: "Product Image",
    parts: [
      { name: "frist one T1", image: "/media/Thicknesser-25-Firma-63TH-J3.webp" },
      { name: "frist one T2", image: "/media/Thicknesser-25-Firma-63TH-J3.webp" },
      { name: "frist one T3", image: "/media/Thicknesser-25-Firma-63TH-J3.webp" },
      { name: "frist one T4", image: "/media/Thicknesser-25-Firma-63TH-J3.webp" },
      { name: "frist one T5", image: "/media/Thicknesser-25-Firma-63TH-J3.webp" },
      { name: "frist one T6", image: "/media/Thicknesser-25-Firma-63TH-J3.webp" },
    ],
  },
  "veneer-door-press-p-100t": {
    name: "VENEER DOOR PRESS",
    model: "P 100T",
    category: "Pressing",
    heroImage: "/media/Veneer-Door-Press.png",
    tagline: "Powerful & Industrial",
    featuresSubtitle:
      "The Elite P6 combines advanced bonding technology with stable operation, ensuring clean edges, reduced material waste, and high-efficiency production.",
    features: [
      {
        title: "High Press Capacity",
        image: "/media/185573b1-4a69-419c-9489-394dab282514-1.webp",
        desc: "Equipped with a powerful 100-ton hydraulic system, ensuring uniform and strong bonding across veneer doors for durable and high-quality production results.",
      },
      {
        title: "Uniform Pressure",
        image: "/media/185573b1-4a69-419c-9489-394dab282514-1.webp",
        desc: "Advanced hydraulic design provides even pressure across the entire panel surface, preventing bubbles, gaps, or uneven bonding during veneer pressing.",
      },
      {
        title: "Heavy-Duty Structure",
        image: "/media/c07cc7f1-09d0-46cb-a0c8-04a6109b91af-1-1.webp",
        desc: "Built with a rigid steel frame construction for maximum stability, vibration resistance, and long-term industrial performance in demanding production environments.",
      },
      {
        title: "Efficient Operation",
        image: "/media/185573b1-4a69-419c-9489-394dab282514-1.webp",
        desc: "Designed for smooth and user-friendly operation, improving workflow efficiency while maintaining consistent pressing quality for commercial door manufacturing.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.png",
        title: "High Press Capacity",
        desc: "Equipped with a powerful 100-ton hydraulic system, ensuring uniform and strong bonding across veneer doors for durable and high-quality production results.",
      },
      {
        icon: "/media/Untitled-design-5.png",
        title: "Uniform Pressure",
        desc: "Advanced hydraulic design provides even pressure across the entire panel surface, preventing bubbles, gaps, or uneven bonding during veneer pressing.",
      },
      {
        icon: "/media/Untitled-design-6.png",
        title: "Heavy-Duty Structure",
        desc: "Built with a rigid steel frame construction for maximum stability, vibration resistance, and long-term industrial performance in demanding production environments.",
      },
    ],
    galleryDescription:
      "Veneer Door Press P 100T is a high-performance edge banding machine designed for precision, efficiency, and durability. It delivers smooth edge bonding, accurate trimming, and reliable operation for professional woodworking environments.",
    gallery: [
      "/media/Untitled-design-11.png",
      "/media/c07cc7f1-09d0-46cb-a0c8-04a6109b91af-1-1.webp",
      "/media/0d0fd8f5-09ab-4521-a662-ca89776bedb0-1.webp",
      "/media/185573b1-4a69-419c-9489-394dab282514-1.webp",
    ],
    dimensionsImage: "/media/Veneer-Door-Press-1.png",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "Designed with a robust industrial structure, the P 100T offers optimized dimensions for efficient veneer door pressing while maintaining stability, strength, and smooth operational performance in commercial production environments.",
    partsSectionTitle: "Product Image",
    partsImages: [
      "/media/Untitled-design-11.png",
      "/media/c07cc7f1-09d0-46cb-a0c8-04a6109b91af-1-1.webp",
      "/media/0d0fd8f5-09ab-4521-a662-ca89776bedb0-1.webp",
      "/media/185573b1-4a69-419c-9489-394dab282514-1.webp",
      "/media/Untitled-design-11.png",
      "/media/c07cc7f1-09d0-46cb-a0c8-04a6109b91af-1-1.webp",
    ],
    parts: [
      { name: "PressMaster 100T", image: "/media/Untitled-design-11.png" },
      { name: "VeneerPro 100T", image: "/media/c07cc7f1-09d0-46cb-a0c8-04a6109b91af-1-1.webp" },
      { name: "HydroPress P100", image: "/media/0d0fd8f5-09ab-4521-a662-ca89776bedb0-1.webp" },
      { name: "DoorBond 100T", image: "/media/185573b1-4a69-419c-9489-394dab282514-1.webp" },
      { name: "UltraPress 100T", image: "/media/Untitled-design-11.png" },
      { name: "PowerPlaten P100", image: "/media/c07cc7f1-09d0-46cb-a0c8-04a6109b91af-1-1.webp" },
    ],
  },
  ...SAW_PRODUCT_OVERRIDES,
};

Object.assign(
  PRODUCTS_DATA,
  Object.fromEntries(
    Object.entries(ADDITIONAL_PRODUCTS).map(([id, overrides]) => [
      id,
      {
        ...PRODUCT_TEMPLATE_13CR,
        ...overrides,
        partsLabel: overrides.model,
      },
    ]),
  ),
);

const DEFAULT_PRODUCT = PRODUCTS_DATA["cnc-router-forte-13cr"];

const DEFAULT_HERO_HEIGHT_CLASS =
  "h-[475px] sm:h-[539px] md:h-[602px] lg:h-[649px]";

const NAV_SECTIONS = ["Features", "Benefits", "Gallery", "Operational", "Specifications", "Contact", "Parts"];

export function ProductDetail({ productId }: { productId?: string } = {}) {
  const params = useParams();
  const id = productId ?? (params.id as string);
  const product = (id && PRODUCTS_DATA[id]) || DEFAULT_PRODUCT;
  const [activeSection, setActiveSection] = useState("Features");

  const scrollTo = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative w-full">
        <div
          className={`relative w-full overflow-hidden ${product.heroHeightClassName ?? DEFAULT_HERO_HEIGHT_CLASS}`}
        >
          <Image
            src={product.heroImage}
            alt={product.model}
            fill
            priority
            sizes="100vw"
            className={product.heroImageClassName ?? "object-cover object-center"}
          />

          <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-start px-6 lg:justify-end lg:pl-[100px] lg:pr-10">
              <div className="w-full max-w-[513px]">
                <h1 className="font-gothic text-[26px] font-normal uppercase leading-none text-white sm:text-[36px]">
                  {product.name}
                </h1>
                <p className="mt-2 font-gothic text-[16px] font-normal text-[#FFFCFC]">
                  {product.model}
                </p>

                <div className="mt-6 flex min-h-[130px] w-full max-w-[280px] flex-col items-start justify-between gap-3 bg-white px-4 pb-5 pt-4 sm:min-h-[150px] sm:max-w-[310px] sm:px-5 sm:pb-6">
                  <p className="font-gothic text-[12px] font-normal text-[#666666]">
                    Click &apos;Get Free Quote&apos; to customize
                  </p>
                  <Link
                    href="/quote"
                    className="inline-block w-auto self-start bg-[#C0202F] px-[15px] py-[10px] font-gothic text-[12px] font-normal uppercase leading-none text-white transition-opacity hover:opacity-90"
                  >
                    Add to Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Nav */}
        <div className="sticky top-[64px] z-30 bg-[#E4E4E4] lg:top-[92.16px]">
          <div className="mx-auto w-full max-w-[1410px] px-4 sm:px-6 lg:px-[100px]">
            <div className="flex w-full items-center justify-between gap-5 overflow-x-auto py-1 scrollbar-hide sm:gap-6 lg:gap-0">
              {NAV_SECTIONS.map((section) => (
                <button
                  key={section}
                  type="button"
                  onClick={() => scrollTo(section)}
                  className="shrink-0 py-3 font-gothic text-[14px] font-normal text-black transition-opacity hover:opacity-80 sm:py-4 sm:text-[16px] lg:shrink"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1410px] space-y-16 px-5 py-10 sm:px-6 sm:py-12 lg:px-[100px]">
        {/* Features */}
        <section id="features" className="mt-5 mb-10 sm:mb-[70px]">
          <h2 className="text-center font-gothic text-[24px] font-normal leading-tight text-black sm:text-[30px]">
            {product.tagline}
          </h2>
          <p className="mx-auto mt-4 max-w-[900px] text-center font-gothic text-[16px] font-normal leading-[27.2px] text-[#666666]">
            {product.featuresSubtitle}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature) => (
              <div key={feature.title} className="p-[10px]">
                <div className="overflow-hidden border border-[#666666]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={290}
                    height={290}
                    className="h-[290px] w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-gothic text-[20px] font-normal leading-[20px] text-black">
                  {feature.title}
                </h3>
                <p className="mt-2 font-gothic text-[16px] font-normal leading-[27.2px] text-[#666666]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Benefits */}
      <section id="benefits" className="w-full bg-[#E4E4E4] py-10 sm:py-12">
        <div className="mx-auto max-w-[1410px] px-5 sm:px-6 lg:px-[100px]">
          <h2 className="text-center font-gothic text-[24px] font-normal leading-tight text-black sm:text-[30px] sm:leading-[30px]">
            {product.benefitsSectionTitle ?? "Benefits"}
          </h2>
          <p className="mx-auto mt-4 max-w-[900px] text-center font-gothic text-[16px] font-normal leading-[27.2px] text-[#666666]">
            {product.benefitsSubtitle}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {product.benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={120}
                  height={120}
                  className="mx-auto h-[100px] w-[100px] object-contain sm:h-[120px] sm:w-[120px]"
                />
                <h3 className="mt-4 font-gothic text-[20px] font-normal leading-[20px] text-black">
                  {benefit.title}
                </h3>
                <p className="mt-2 font-gothic text-[16px] font-normal leading-[27.2px] text-[#666666]">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1410px] space-y-16 px-5 py-10 sm:px-6 sm:py-12 lg:px-[100px]">
        <ProductGallerySection
          images={product.gallery}
          description={product.galleryDescription}
        />

      </div>

      <ProductOperationalSection key={id} productId={id} />

      <ProductSpecificationsSection
        productId={id}
        dimensionsImage={product.dimensionsImage}
        dimensionsHeading={product.dimensionsHeading}
        dimensionsDescription={product.dimensionsDescription}
      />

      <ProductVideoContactSection />

      <ProductPartsSection
        sectionTitle={product.partsSectionTitle}
        parts={
          product.parts.length === product.partsImages.length
            ? product.parts
            : undefined
        }
        partsLabel={product.partsLabel}
        images={product.partsImages}
      />
    </div>
  );
}
