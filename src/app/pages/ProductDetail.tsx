"use client";

import { useRef } from "react";
import { MediaImage as Image } from "../components/MediaImage";
import { useParams } from "next/navigation";
import { ProductGallerySection } from "../components/ProductGallerySection";
import { ProductOperationalSection } from "../components/ProductOperationalSection";
import { ProductSpecificationsSection } from "../components/ProductSpecificationsSection";
import { ProductVideoContactSection } from "../components/ProductVideoContactSection";
import { ProductPartsSection } from "../components/ProductPartsSection";
import { SAW_PRODUCT_OVERRIDES } from "../data/sawProducts";
import { PRODUCT_CATALOGUE_PDFS } from "../data/productDocuments";
import { AddToQuoteButton } from "../components/AddToQuoteButton";
import { PAGE_CONTAINER, SECTION_SCROLL_MARGIN } from "../lib/pageLayout";

const PRODUCTS_DATA: Record<string, {
  name: string;
  model: string;
  category: string;
  tagline: string;
  heroImage: string;
  heroImageClassName?: string;
  heroHeightClassName?: string;
  heroBackgroundColor?: string;
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
    heroImage: "/media/CNC-13CR-1.webp",
    featuresSubtitle:
      "High-performance CNC router with 1300×2500mm area, rigid steel frame, precision guides, powerful spindle for accurate sheet processing.",
    galleryDescription:
      "The FORTE 13CR is a high-performance CNC router designed for woodworking, sign-making, and panel processing, delivering speed, precision, and reliable results across wood, MDF, plywood, acrylic, and composite materials.",
    dimensionsImage: "/media/CNC-13CR-scaled.webp",
    dimensionsDescription:
      "The FORTE 13CR features a spacious 1300 × 2500 mm working area, ideal for full-size sheet processing. Its robust structural design ensures stability while accommodating large panels and complex machining tasks efficiently.",
    partsLabel: "Forte 13CR",
    partsImages: [
      "/media/CNC-01.jpg-scaled.webp",
      "/media/CNC-03.jpg-scaled.webp",
      "/media/CNC-04.jpg-scaled.webp",
      "/media/1-1.webp",
      "/media/2-1.webp",
      "/media/3.webp",
    ],
    features: [
      {
        title: "Aluminum Profile Working",
        image: "/media/CNC-01.jpg-scaled.webp",
        desc: "The AMUZMA FORTE 13CR is designed to deliver precise and efficient machining of aluminum profiles and components. Its rigid machine structure, high-precision motion system, and advanced CNC control technology.",
      },
      {
        title: "Air-Cooling Spindle",
        image: "/media/CNC-03.jpg-scaled.webp",
        desc: "The AMUZMA FORTE 13CR is equipped with a high-performance Air-Cooling Spindle, designed to deliver reliable, continuous operation with excellent machining precision. The air-cooled system efficiently.",
      },
      {
        title: "DSP Handheld Controller",
        image: "/media/CNC-04.jpg-scaled.webp",
        desc: "The AMUZMA FORTE 13CR features an advanced DSP Handheld Controller, providing simple, intuitive, and reliable machine control. Designed for ease of operation, the controller allows users to manage.",
      },
      {
        title: "Gantry Side Support",
        image: "/media/CNC-05.jpg-scaled.webp",
        desc: "Equipped with precision linear guides and a powerful spindle, the FORTE 13CR guarantees smooth motion and reliable cutting performance. It processes wood, MDF, plywood, acrylic, and composites with accuracy.",
      },
    ],
    benefitsSubtitle:
      "Fast cutting and smooth motion improve workflow and output speed.",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "High Productivity",
        desc: "Fast cutting and smooth motion improve workflow and output speed.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Large Work Area",
        desc: "1300 × 2500 mm table handles full sheets easily and efficiently.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Strong Construction",
        desc: "Rigid steel frame ensures stability and long service life.",
      },
    ],
    gallery: [
      "/media/cnc-1-1.webp",
      "/media/1-1.webp",
      "/media/2-1.webp",
      "/media/3.webp",
      "/media/4.webp",
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
    heroImage: "/media/CNC-13CR-1.webp",
    featuresSubtitle:
      "High-performance CNC router with 1500×3000mm area, rigid steel frame, precision guides, powerful spindle for accurate sheet processing.",
    galleryDescription:
      "The FORTE 15CR is a high-performance CNC router designed for woodworking, sign-making, and panel processing, delivering speed, precision, and reliable results across wood, MDF, plywood, acrylic, and composite materials.",
    dimensionsImage: "/media/CNC-15CR-scaled.webp",
    dimensionsDescription:
      "The FORTE 15CR features a spacious 1500 × 3000 mm working area, ideal for full-size sheet processing. Its robust structural design ensures stability while accommodating large panels and complex machining tasks efficiently.",
    partsLabel: "Forte 15CR",
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
        image: "/media/CNC-01.jpg-scaled.webp",
        desc: "The FORTE 15CR features a 1500 x 3000 mm working area, ideal for full-size sheets. It enables efficient cutting, carving, and shaping without repositioning, saving time and boosting productivity.",
      },
      {
        title: "High-Speed Performance",
        image: "/media/CNC-03.jpg-scaled.webp",
        desc: "Designed for speed and precision, this CNC router delivers smooth, accurate performance in continuous production. Its advanced motion system ensures consistent results in woodworking, signage, and panel processing tasks.",
      },
      {
        title: "Rigid Steel Frame Build",
        image: "/media/CNC-04.jpg-scaled.webp",
        desc: "Built with a heavy-duty steel frame, it delivers strong stability and vibration control, ensuring smooth finishes and lasting durability in industry.",
      },
      {
        title: "Precision Motion System",
        image: "/media/CNC-05.jpg-scaled.webp",
        desc: "Equipped with precision linear guides and a powerful spindle, the FORTE 15CR guarantees smooth motion and reliable cutting performance. It processes wood, MDF, plywood, acrylic, and composites with accuracy.",
      },
    ],
    benefitsSubtitle:
      "Fast cutting and smooth motion improve workflow and output speed.",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "High Productivity",
        desc: "Fast cutting and smooth motion improve workflow and output speed.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Large Work Area",
        desc: "1500 × 3000 mm table handles full sheets easily and efficiently.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Strong Construction",
        desc: "Rigid steel frame ensures stability and long service life.",
      },
    ],
    gallery: [
      "/media/cnc-1-1.webp",
      "/media/1-1.webp",
      "/media/2-1.webp",
      "/media/3.webp",
      "/media/4.webp",
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
  "cnc-router-forte-20cr": {
    name: "CNC ROUTER",
    model: "FORTE 20CR",
    category: "CNC Router",
    tagline: "Smart Technology. Industrial Strength. Precision in Every Cut.",
    heroImage: "/media/CNC-13CR-1.webp",
    featuresSubtitle:
      "High-performance CNC router with 2000*3800*200 mm area, rigid steel frame, precision guides, powerful spindle for accurate sheet processing.",
    galleryDescription:
      "The Forte 20CR is a high-performance CNC router designed for woodworking, sign-making, and panel processing, delivering speed, precision, and reliable results across wood, MDF, plywood, acrylic, and composite materials.",
    dimensionsImage: "/media/CNC-15CR-scaled.webp",
    dimensionsDescription:
      "The FORTE 20CR features a spacious 2000*3800 mm working area, ideal for full-size sheet processing. Its robust structural design ensures stability while accommodating large panels and complex machining tasks efficiently.",
    partsLabel: "Forte 20CR",
    partsImages: [
      "/media/cnc-1-1.webp",
      "/media/cnc-1-2-1024x640-1.webp",
      "/media/cnc-1-3-1024x640-1-1.webp",
      "/media/cnc-1-4-1024x640-1.webp",
      "/media/CNC-01.jpg-scaled.webp",
      "/media/CNC-03.jpg-scaled.webp",
    ],
    features: [
      {
        title: "Large Working Area",
        image: "/media/CNC-01.jpg-scaled.webp",
        desc: "The FORTE 20CR features a 2000*3800*200 mm working area, ideal for full-size sheets. It enables efficient cutting, carving, and shaping without repositioning, saving time and boosting productivity.",
      },
      {
        title: "High-Speed Performance",
        image: "/media/CNC-03.jpg-scaled.webp",
        desc: "Designed for speed and precision, this CNC router delivers smooth, accurate performance in continuous production. Its advanced motion system ensures consistent results in woodworking, signage, and panel processing tasks.",
      },
      {
        title: "Rigid Steel Frame Build",
        image: "/media/CNC-04.jpg-scaled.webp",
        desc: "Built with a heavy-duty steel frame, it delivers strong stability and vibration control, ensuring smooth finishes and lasting durability in industry.",
      },
      {
        title: "Precision Motion System",
        image: "/media/CNC-05.jpg-scaled.webp",
        desc: "Equipped with precision linear guides and a powerful spindle, the FORTE 20CR guarantees smooth motion and reliable cutting performance. It processes wood, MDF, plywood, acrylic, and composites with accuracy.",
      },
    ],
    benefitsSubtitle:
      "Fast cutting and smooth motion improve workflow and output speed.",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "High Productivity",
        desc: "Fast cutting and smooth motion improve workflow and output speed.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Large Work Area",
        desc: "2000*3800 × 200 mm table handles full sheets easily and efficiently.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Strong Construction",
        desc: "Rigid steel frame ensures stability and long service life.",
      },
    ],
    gallery: [
      "/media/Prodocts/CNC Router Firma 20CR.png",
      "/media/cnc-1-1.webp",
      "/media/1-1.webp",
      "/media/2-1.webp",
      "/media/3.webp",
    ],
    specs: [
      { label: "Table Structure", value: "Aluminum profile table+T slots" },
      { label: "Working Size", value: "2000*3800*200mm" },
      { label: "Control System", value: "Richauto DSP A11 Controller" },
      { label: "Spindle", value: "HQD 6.0 kW Air-Cooling Spindle" },
      { label: "Inverter", value: "Delta 7.5 kW" },
      { label: "Motor and Driver", value: "Delta 750 W Servo Motor & Driver" },
      { label: "Reducer", value: "Oubang Reducer" },
      { label: "Rails", value: "Taiwan HIWIN 25 / 25 / 25 Square Rails" },
      { label: "Racks", value: "PCRCH 1.5M Helical Rack on X & Y Axis" },
      { label: "Ball Screw", value: "Taiwan 2510 TBI Ball Screw on Z Axis" },
      { label: "Weight", value: "2500 KG" },
    ],
    videoId: "dX38tWhBpH4",
    parts: [
      { name: "Forte 20CR", image: "/media/Prodocts/CNC Router Firma 20CR.png" },
      { name: "Forte 20CR", image: "/media/CNC-01.jpg-scaled.webp" },
      { name: "Forte 20CR", image: "/media/CNC-03.jpg-scaled.webp" },
      { name: "Forte 20CR", image: "/media/CNC-04.jpg-scaled.webp" },
      { name: "Forte 20CR", image: "/media/cnc-1-1.webp" },
      { name: "Forte 20CR", image: "/media/cnc-1-2-1024x640-1.webp" },
    ],
  },
  "fiber-laser-stark-30fl": {
    name: "FIBER LASER",
    model: "Stark 30FL",
    category: "CNC Router",
    tagline: "High-Speed Cutting. Precision Engineering. Industrial Performance.",
    heroImage: "/media/fiber-laser/Stark-30FL.jpg",
    featuresSubtitle:
      "The AMUZMA Stark 30FL is a high-performance fiber laser cutting machine designed to deliver exceptional speed, precision, and efficiency",
    galleryDescription:
      "The AMUZMA Stark 30FL is equipped with a high-performance Precision Motion System, engineered to deliver exceptional accuracy, smooth movement, and high-speed positioning. Utilizing advanced servo drive technology and precision linear guide rails, the system ensures stable, repeatable motion for outstanding cutting performance.\n\nDesigned for demanding industrial production, the Precision Motion System minimizes vibration and positioning errors, enabling intricate cuts, sharp contours, and consistent dimensional accuracy across every job.",
    dimensionsImage: "/media/PNG/Fiber Laser.png",
    dimensionsHeading: "Machine Dimensions & Working Area",
    dimensionsDescription:
      "The Stark 30FL features a spacious 1500 × 3000 mm working area, ideal for full-size sheet processing. Its robust structural design ensures stability while accommodating large panels and complex machining tasks efficiently.",
    partsLabel: "Stark 30FL",
    partsSectionTitle: "Parts",
    partsImages: [
      "/media/fiber-laser/Stark-30FL.jpg",
      "/media/fiber-laser/Fiber-laser-Stark-30FL2.jpg",
      "/media/fiber-laser/Fiber-laser-Stark-30FL3.jpg",
      "/media/fiber-laser/Fiber-laser-Stark-30FL4.jpg",
      "/media/fiber-laser/Fiber-laser-Stark-30FL5.jpg",
      "/media/fiber-laser/Fiber-laser-Stark-30FL6.jpg",
    ],
    features: [
      {
        title: "Large Working Area",
        image: "/media/fiber-laser/Fiber-laser-Stark-30FL2.jpg",
        desc: "The AMUZMA Stark 30FL features a large working area designed to accommodate a wide range of sheet sizes and fabrication requirements. Its spacious cutting bed provides greater flexibility for processing large metal sheet",
      },
      {
        title: "High-Speed Performance",
        image: "/media/fiber-laser/Fiber-laser-Stark-30FL3.jpg",
        desc: "The AMUZMA Stark 30FL is engineered for high-speed laser cutting, delivering exceptional productivity without compromising precision. Powered by advanced fiber laser technology and a high-performance motion.",
      },
      {
        title: "Rigid Steel Frame Build",
        image: "/media/fiber-laser/Fiber-laser-Stark-30FL7-800x450.jpg",
        desc: "The AMUZMA Stark 30FL is built on a heavy-duty rigid steel frame, engineered to provide exceptional strength, stability, and long-term durability.",
      },
      {
        title: "Precision Motion System",
        image: "/media/fiber-laser/Fiber-laser-Stark-30FL8-800x450.jpg",
        desc: "The AMUZMA Stark 30FL is equipped with a high-performance Precision Motion System, engineered to deliver exceptional accuracy, smooth movement, and high-speed positioning.",
      },
    ],
    benefitsSectionTitle: "Benifits",
    benefitsSubtitle:
      "Fast cutting and smooth motion improve workflow and output speed.",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "High Productivity",
        desc: "Fast cutting and smooth motion improve workflow and output speed.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Large Work Area",
        desc: "1500 × 3000 × 200 mm table handles full sheets easily and efficiently.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Strong Construction",
        desc: "Rigid steel frame ensures stability and long service life.",
      },
    ],
    gallery: [
      "/media/fiber-laser/Stark-30FL.jpg",
      "/media/fiber-laser/Fiber-laser-Stark-30FL6.jpg",
      "/media/fiber-laser/Fiber-laser-Stark-30FL3.jpg",
      "/media/fiber-laser/Fiber-laser-Stark-30FL2.jpg",
      "/media/fiber-laser/Fiber-laser-Stark-30FL3.jpg",
    ],
    specs: [
      { label: "Laser power", value: "6000W Fiber Laser Machine" },
      { label: "Working area", value: "3000*1500mm" },
      { label: "Control System", value: "Cypcut 4000E control system" },
      { label: "Laser source", value: "6000W Raycus laser Source" },
      {
        label: "Fiber laser cutting head",
        value: "BOCI BLT 421S Auto focus laser cutting head",
      },
      {
        label: "Beam",
        value:
          "Suspension Console+24-inch non- touch screen+wireless control system",
      },
      {
        label: "Sever motor and driver",
        value: "Fuji Y=1800W*2/X=1800W/Z=850W servo motor",
      },
      {
        label: "X/Y/Z gear wheel and rack",
        value: "Taiwan Hiwin 30/30/30 guide rail",
      },
      {
        label: "Transmission",
        value: "Taiwan TBI 2005 ball screw transmission",
      },
      {
        label: "Pneumatic&Gas tube system",
        value: "6000 Hanli water chiller",
      },
      {
        label: "Electric proportional valve",
        value: "Germany Alfa reducer",
      },
      {
        label: "Electrical components",
        value: "Schneider electrical components",
      },
      {
        label: "Number of monitor/Screen",
        value: "Independent electrical cabinet",
      },
      {
        label: "Smoke emission system",
        value: "Aventics Proportional Valve",
      },
      { label: "Overall power distribution", value: "7.5KW fan" },
    ],
    videoId: "dX38tWhBpH4",
    parts: [
      { name: "Stark 30FL", image: "/media/fiber-laser/Stark-30FL.jpg" },
      {
        name: "Stark 30FL",
        image: "/media/fiber-laser/Fiber-laser-Stark-30FL2.jpg",
      },
      {
        name: "Stark 30FL",
        image: "/media/fiber-laser/Fiber-laser-Stark-30FL3.jpg",
      },
      {
        name: "Stark 30FL",
        image: "/media/fiber-laser/Fiber-laser-Stark-30FL4.jpg",
      },
      {
        name: "Stark 30FL",
        image: "/media/fiber-laser/Fiber-laser-Stark-30FL5.jpg",
      },
      {
        name: "Stark 30FL",
        image: "/media/fiber-laser/Fiber-laser-Stark-30FL6.jpg",
      },
    ],
  },
  "cnc-router-firma-150atc": {
    name: "CNC ROUTER",
    model: "Firma 150ATC",
    category: "CNC Router",
    tagline: "Smart Technology. Industrial Strength. Precision in Every Cut.",
    heroImage: "/media/CNC-13CR-1.webp",
    featuresSubtitle:
      "High-performance CNC router with 1300×2500mm area, rigid steel frame, precision guides, powerful spindle for accurate sheet processing.",
    galleryDescription:
      "The FORTE 1325CR is a high-performance CNC router designed for woodworking, sign-making, and panel processing, delivering speed, precision, and reliable results across wood, MDF, plywood, acrylic, and composite materials.",
    dimensionsImage: "/media/CNC-13CR-scaled.webp",
    dimensionsDescription:
      "The FORTE 1325CR features a spacious 1300 × 2500 mm working area, ideal for full-size sheet processing. Its robust structural design ensures stability while accommodating large panels and complex machining tasks efficiently.",
    partsLabel: "Forte 1325CR",
    partsImages: [
      "/media/CNC-01.jpg-scaled.webp",
      "/media/CNC-03.jpg-scaled.webp",
      "/media/CNC-04.jpg-scaled.webp",
      "/media/1-1.webp",
      "/media/2-1.webp",
      "/media/3.webp",
    ],
    features: [
      {
        title: "Large Working Area",
        image: "/media/CNC-01.jpg-scaled.webp",
        desc: "The FORTE 1325CR features a 1300 × 2500 mm working area, ideal for full-size sheets. It enables efficient cutting, carving, and shaping without repositioning, saving time and boosting productivity.",
      },
      {
        title: "High-Speed Performance",
        image: "/media/CNC-03.jpg-scaled.webp",
        desc: "Designed for speed and precision, this CNC router delivers smooth, accurate performance in continuous production. Its advanced motion system ensures consistent results in woodworking, signage, and panel processing tasks.",
      },
      {
        title: "Rigid Steel Frame Build",
        image: "/media/CNC-04.jpg-scaled.webp",
        desc: "Built with a heavy-duty steel frame, it delivers strong stability and vibration control, ensuring smooth finishes and lasting durability in industry.",
      },
      {
        title: "Precision Motion System",
        image: "/media/CNC-05.jpg-scaled.webp",
        desc: "Equipped with precision linear guides and a powerful spindle, the FORTE 1325CR guarantees smooth motion and reliable cutting performance. It processes wood, MDF, plywood, acrylic, and composites with accuracy.",
      },
    ],
    benefitsSubtitle:
      "Fast cutting and smooth motion improve workflow and output speed.",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "High Productivity",
        desc: "Fast cutting and smooth motion improve workflow and output speed.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Large Work Area",
        desc: "1300 × 2500 mm table handles full sheets easily and efficiently.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Strong Construction",
        desc: "Rigid steel frame ensures stability and long service life.",
      },
    ],
    gallery: [
      "/media/Prodocts/CNC routerFirma 4X.png",
      "/media/cnc-1-1.webp",
      "/media/1-1.webp",
      "/media/2-1.webp",
      "/media/3.webp",
    ],
    specs: [
      { label: "Aluminum Profile", value: "" },
      { label: "Table + T slots", value: "1300 × 2500 × 200" },
      { label: "Table + T slots", value: "1500 × 3000 × 200" },
      { label: "Control System", value: "Richauto DSP A11" },
      { label: "Air-cooling Spindle", value: "HQD 6.0 kW" },
      { label: "Inverter", value: "Delta 7.5 kW" },
      { label: "Servo Motor and Driver", value: "Delta 750 W" },
      { label: "China Oubang Reducer", value: "—" },
      { label: "Square Rails Taiwan HIWIN", value: "25 / 25 / 25 mm" },
      { label: "Helical Rack", value: "PCRCH 1.5" },
      { label: "Taiwan Ball Screw on Z Axis", value: "Taiwan 2505" },
      { label: "Independent Control Cabinet", value: "D06" },
    ],
    videoId: "dX38tWhBpH4",
    parts: [
      { name: "Forte 1325CR", image: "/media/Prodocts/CNC routerFirma 4X.png" },
      { name: "Forte 1325CR", image: "/media/CNC-01.jpg-scaled.webp" },
      { name: "Forte 1325CR", image: "/media/CNC-03.jpg-scaled.webp" },
      { name: "Forte 1325CR", image: "/media/CNC-04.jpg-scaled.webp" },
      { name: "Forte 1325CR", image: "/media/cnc-1-1.webp" },
      { name: "Forte 1325CR", image: "/media/1-1.webp" },
    ],
  },
  "wide-belt-sander-firma-1300ws": {
    name: "WIDE BELT SANDER",
    model: "Firma 1300WS",
    category: "Sanders",
    tagline: "Precision Wide Belt Sanding for Superior Surface Finishing Performance",
    heroImage: "/media/wide-belt-sander.webp",
    featuresSubtitle:
      "1300mm capacity, powerful motor, and smooth feed control for consistent professional results.",
    galleryDescription:
      "The Wide Belt Sander Firma 1300WS delivers precision sanding for wood panels, doors, and furniture components. Its 1300mm working width, powerful motor, and adjustable feed speed ensure smooth, consistent finishes. Built with a heavy-duty frame and user-friendly controls, it's ideal for professional workshops seeking efficiency, accuracy, and reliable performance.",
    dimensionsImage: "/media/wide_belt_sander_21.jpg-removebg-preview.webp",
    dimensionsHeading: "Wide Belt Sander Firma 1300WS:",
    dimensionsDescription: "",
    partsLabel: "Firma 1300WS",
    partsImages: [
      "/media/wide_belt_sander_21.jpg-removebg-preview.webp",
      "/media/wide_belt_sander_21.jpg-removebg-preview.webp",
      "/media/wide_belt_sander_21.jpg-removebg-preview.webp",
      "/media/wide_belt_sander_21.jpg-removebg-preview.webp",
      "/media/wide_belt_sander_21.jpg-removebg-preview.webp",
      "/media/wide_belt_sander_21.jpg-removebg-preview.webp",
    ],
    features: [
      {
        title: "Wide Capacity",
        image: "/media/wide_belt_sander_21.jpg-removebg-preview-600x414-1.webp",
        desc: "Handles panels up to 1300mm wide with consistent sanding pressure, making it ideal for doors, cabinets, tabletops, and large furniture components requiring smooth and even surface finishing.",
      },
      {
        title: "Powerful Motor",
        image: "/media/wide_belt_sander_21.jpg-removebg-preview-600x414-1.webp",
        desc: "Equipped with a high-performance motor that delivers stable torque and reliable output, ensuring efficient material removal and smooth operation even during continuous industrial workloads.",
      },
      {
        title: "Adjustable Feed",
        image: "/media/wide_belt_sander_21.jpg-removebg-preview-600x414-1.webp",
        desc: "Variable feed speed control allows precise adjustment based on material type and sanding requirements, improving finish quality while optimizing productivity and reducing material waste.",
      },
      {
        title: "Heavy-Duty Frame",
        image: "/media/wide_belt_sander_21.jpg-removebg-preview-600x414-1.webp",
        desc: "Robust machine construction minimizes vibration, enhances stability, and ensures long-term durability, making it a dependable solution for professional woodworking workshops and production lines.",
      },
    ],
    benefitsSubtitle:
      "Key Benefits of Wide Belt Sander Firma 1300WS",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Superior Surface Finish",
        desc: "Delivers smooth, even sanding results that reduce the need for rework and ensure high-quality finishing on panels, doors, and furniture components.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Increased Productivity",
        desc: "Wide 1300mm capacity and efficient material removal speed up production, allowing workshops to process more pieces in less time.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Consistent Performance",
        desc: "Stable motor power and controlled feed speed maintain uniform sanding pressure for reliable, repeatable results.",
      },
    ],
    gallery: [
      "/media/wide_belt_sander_21.jpg-removebg-preview.webp",
      "/media/wide_belt_sander_21.jpg-removebg-preview.webp",
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
      { name: "Sanding Belt Unit", image: "/media/wide_belt_sander_21.jpg-removebg-preview.webp" },
      { name: "Main Motor", image: "/media/wide_belt_sander_21.jpg-removebg-preview.webp" },
      { name: "Conveyor Feed System", image: "/media/wide_belt_sander_21.jpg-removebg-preview.webp" },
      { name: "Adjustment System", image: "/media/wide_belt_sander_21.jpg-removebg-preview.webp" },
      { name: "Dust Extraction Port", image: "/media/wide_belt_sander_21.jpg-removebg-preview.webp" },
      { name: "Control Panel", image: "/media/wide_belt_sander_21.jpg-removebg-preview.webp" },
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
        "heroImage" | "heroImageClassName" | "heroHeightClassName" | "heroBackgroundColor" | "tagline" | "featuresSubtitle" | "features" | "benefitsSubtitle" | "benefitsSectionTitle" | "benefits" | "galleryDescription" | "gallery" | "dimensionsImage" | "dimensionsHeading" | "dimensionsDescription" | "partsSectionTitle" | "parts" | "partsImages"
      >
    >
> = {
  "dust-collector-dc2200": {
    name: "DUST COLLECTOR",
    model: "DC2200",
    category: "Dust Collector",
    heroImage: "/media/amuzma-web-banners-for-Dust-Collector-DC2200.jpg",
    heroImageClassName:
      "object-cover max-lg:object-[78%_center] lg:object-center lg:origin-center lg:scale-[1.11]",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "High suction capacity with efficient dust filtration ensures stable airflow and low-noise operation.",
    features: [
      {
        title: "3-Way Intake Manifold",
        image: "/media/1-4.webp",
        desc: "Delivers consistent and efficient airflow to effectively capture fine dust and wood chips, ensuring a cleaner and safer workspace during daily operations.",
      },
      {
        title: "Y-Shaped Distribution",
        image: "/media/2-4.webp",
        desc: "Designed with a small footprint, making it ideal for workshops with limited space without compromising extraction performance.",
      },
      {
        title: "Filter Bag",
        image: "/media/3-3.webp",
        desc: "Built with sturdy materials for long-lasting reliability, even in light to moderate continuous workshop use.",
      },
      {
        title: "Magnetic Safety Switch",
        image: "/media/4-4.webp",
        desc: "Features a user-friendly collection bag setup that allows quick removal and replacement for minimal downtime.",
      },
    ],
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Cleaner Work Environment",
        desc: "Effectively removes fine dust and wood chips, keeping the workspace clean and reducing airborne particles.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Improved Safety",
        desc: "Helps maintain better air quality, creating a safer and healthier environment for operators and students.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Excellence",
        desc: "Compact design saves valuable workshop space while still delivering strong extraction performance.",
      },
    ],
    galleryDescription:
      "The Dust Collector DC2200 is designed to deliver powerful and consistent dust extraction for professional woodworking environments. Featuring a multi-stage filtration system, large-capacity collection unit, and high-performance motor, it ensures efficient removal of fine particles and heavy debris. Its durable construction, balanced airflow design, and easy maintenance system support long-term reliability, improved air quality, and safer workshop operations.",
    gallery: [
      "/media/Dust-Collector-DC2200-scaled.webp",
      "/media/1-4.webp",
      "/media/2-4.webp",
      "/media/3-3.webp",
      "/media/4-4.webp",
    ],
    dimensionsImage: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
    dimensionsHeading: "Clear dimensional",
    dimensionsDescription:
      "The Dust Collector DC2200 is designed with practical and space-efficient dimensions to ensure easy installation and seamless integration into workshop environments. Its balanced structure allows stable positioning while maintaining optimal airflow performance. The compact yet durable build makes it suitable for both small and large production facilities.",
    partsSectionTitle: "Product Image",
    partsImages: [
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
    ],
    parts: [
      {
        name: "frist one J1",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      },
      {
        name: "frist one J2",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      },
      {
        name: "frist one J3",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      },
      {
        name: "frist one J4",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      },
      {
        name: "frist one J5",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      },
      {
        name: "frist one J6",
        image: "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp",
      },
    ],
  },
  "dust-collector-abs5000": {
    name: "DUST COLLECTOR",
    model: "ABS5000",
    category: "Dust Collector",
    heroImage: "/media/amuzma-web-banners-for-Dust-Collector-ABS5000.jpg",
    heroHeightClassName:
      "h-[269px] sm:h-[304px] md:h-[339px] lg:h-[570px] min-[1800px]:h-[460px] min-[2200px]:h-[420px]",
    heroImageClassName:
      "object-cover max-lg:object-[78%_center] lg:object-[84%_center]",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "Powerful Suction. Space-Saving Design. Reliable Performance.",
    features: [
      {
        title: "Motor with Magnetic Safe",
        image: "/media/1-3.webp",
        desc: "The ABS5000 dust collector provides strong suction capacity to remove dust, wood particles, and fine waste quickly. It keeps the workspace clean and improves overall machine performance and safety.",
      },
      {
        title: "Multi-Port Intake Manifold",
        image: "/media/2-3.webp",
        desc: "This machine is built with high-quality steel material for long-lasting durability. Its strong body ensures reliable performance in industrial environments and continuous operation without damage.",
      },
      {
        title: "Filter Bags",
        image: "/media/3-2.webp",
        desc: "The ABS5000 comes with a large filter bag and dust collection bag. It captures fine dust particles effectively and improves air quality, creating a healthier and safer working environment.",
      },
      {
        title: "Swivel Casters",
        image: "/media/4-3.webp",
        desc: "The dust collector has wheels for easy movement within the workshop. Its simple design allows quick bag replacement and easy maintenance, saving time and effort for users.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Improves Air Quality",
        desc: "The dust collector efficiently removes fine dust particles from the air, keeping the workspace clean, fresh, and healthy for daily operations.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Increases Machine Life",
        desc: "By capturing harmful dust and airborne particles, it reduces health risks and creates a safer working environment for employees.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Reduces Cleaning Time",
        desc: "Regular dust removal prevents dust buildup inside machines, reducing wear and tear and extending equipment lifespan.",
      },
    ],
    galleryDescription:
      "The DUST COLLECTOR – ABS5000 is a high-performance industrial dust extraction system designed for efficient and reliable operation. Featuring dual vertical filter bags and large-capacity dust collection units, it ensures superior filtration and clean air circulation. Its heavy-duty steel frame provides durability and stability, while the powerful motor unit delivers strong suction performance. The compact vertical design saves workspace area, making it ideal for woodworking units, manufacturing plants, and industrial workshops requiring continuous dust control and operational efficiency.",
    gallery: [
      "/media/DSC_2375-removebg-preview-2.webp",
      "/media/1-3.webp",
      "/media/2-3.webp",
      "/media/3-2.webp",
      "/media/4-3.webp",
    ],
    dimensionsImage: "/media/Dust-collector-ABS5000-03-1024x702.png",
    dimensionsHeading: "Dust Reduction",
    dimensionsDescription:
      "The ABS5000 dust collector efficiently removes airborne dust, fine particles, and industrial waste generated during machine operation. Its powerful suction system ensures cleaner air circulation, reduces dust accumulation on equipment, and improves workplace safety.",
    partsSectionTitle: "Product Images",
    partsImages: [
      "/media/DSC_2375-removebg-preview-2.webp",
      "/media/DSC_2375-removebg-preview-2.webp",
      "/media/DSC_2375-removebg-preview-2.webp",
      "/media/DSC_2375-removebg-preview-2.webp",
      "/media/DSC_2375-removebg-preview-2.webp",
      "/media/DSC_2375-removebg-preview-2.webp",
    ],
    parts: [
      {
        name: "Dual Filter Bag System",
        image: "/media/DSC_2375-removebg-preview-2.webp",
      },
      {
        name: "High-Capacity Dust Collection",
        image: "/media/DSC_2375-removebg-preview-2.webp",
      },
      {
        name: "Heavy-Duty Steel Structure",
        image: "/media/DSC_2375-removebg-preview-2.webp",
      },
      {
        name: "Powerful Motor Unit",
        image: "/media/DSC_2375-removebg-preview-2.webp",
      },
      {
        name: "Compact Vertical Design",
        image: "/media/DSC_2375-removebg-preview-2.webp",
      },
      {
        name: "Industrial-Grade Performance",
        image: "/media/DSC_2375-removebg-preview-2.webp",
      },
    ],
  },
  "dust-collector-rdc3800": {
    name: "DUST COLLECTOR",
    model: "RDC3800",
    category: "Dust Collector",
    heroImage: "/media/amuzma-web-banners-for-Dust-Collector-DC3800.jpg",
    heroHeightClassName:
      "h-[269px] sm:h-[304px] md:h-[339px] lg:h-[570px] min-[1800px]:h-[460px] min-[2200px]:h-[420px]",
    heroImageClassName:
      "object-cover max-lg:object-[78%_center] lg:object-[84%_center]",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "Compact, Powerful & Workshop‑Ready Dust Extraction",
    features: [
      {
        title: "Motor with Magnetic",
        image: "/media/1-2.webp",
        desc: "Engineered to fit in small workshop spaces without sacrificing suction power, making it ideal for benchtop tools and multiple workstations.",
      },
      {
        title: "Reinforced Base",
        image: "/media/2-2.webp",
        desc: "Delivers robust airflow and suction performance to capture dust and chips effectively from saws, sanders, planers, routers, and other shop equipment.",
      },
      {
        title: "High-Efficiency Filter Bag",
        image: "/media/3-1.webp",
        desc: "Built with sturdy steel housing and durable components that withstand daily use in demanding environments.",
      },
      {
        title: "Multi-Port Intake Manifold",
        image: "/media/4-2.webp",
        desc: "The dust and chips are collected in a convenient bin or bag that's simple to remove and empty — minimizing downtime during use.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Reliable for daily workshop operations",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Keeps Your Workspace",
        desc: "The RDC3800 efficiently captures dust and debris from your tools, preventing buildup on floors and surfaces. A cleaner workspace reduces hazards.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Reduces Wear on Tools",
        desc: "Consistently removing dust and chips, the RDC3800 prevents abrasive particles from settling on machinery.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Improves Air Quality",
        desc: "High-efficiency filtration traps even microscopic dust, preventing it from circulating in your workshop. Cleaner air protects your lungs, reduces.",
      },
    ],
    galleryDescription:
      "The RDC3800 is designed for small to mid-sized workshops, providing consistent dust and chip removal while keeping your workspace clean. Its durable build, efficient filtration, and easy maintenance make it suitable for everyday workshop use.",
    gallery: [
      "/media/Dusy-Collector-RDC3800.webp",
      "/media/1-2.webp",
      "/media/2-2.webp",
      "/media/3-1.webp",
      "/media/4-2.webp",
    ],
    dimensionsImage: "/media/Dust-collector-RDC3800-1024x702.png",
    dimensionsHeading: "Dust Reduction",
    dimensionsDescription:
      "The RDC3800 is a compact yet powerful dust collector engineered to deliver efficient dust and chip extraction for small to mid-sized workshops. Designed with performance and reliability at its core, it strikes the perfect balance between strong suction power and convenient portability—keeping your workspace cleaner and your equipment operating smoothly.",
    partsSectionTitle: "Product Images",
    partsImages: [
      "/media/Dusy-Collector-RDC3800-1.webp",
      "/media/Dusy-Collector-RDC3800-1.webp",
      "/media/Dusy-Collector-RDC3800-1.webp",
      "/media/Dusy-Collector-RDC3800-1.webp",
      "/media/Dusy-Collector-RDC3800-1.webp",
      "/media/Dusy-Collector-RDC3800-1.webp",
    ],
    parts: [
      {
        name: "High-Efficiency Dust",
        image: "/media/Dusy-Collector-RDC3800-1.webp",
      },
      {
        name: "Dust Extraction System",
        image: "/media/Dusy-Collector-RDC3800-1.webp",
      },
      {
        name: "Powerful Workshop",
        image: "/media/Dusy-Collector-RDC3800-1.webp",
      },
      {
        name: "Compact Industrial",
        image: "/media/Dusy-Collector-RDC3800-1.webp",
      },
      {
        name: "Reliable Dust Extraction",
        image: "/media/Dusy-Collector-RDC3800-1.webp",
      },
      {
        name: "Heavy-Duty Dust",
        image: "/media/Dusy-Collector-RDC3800-1.webp",
      },
    ],
  },
  "spindle-moulder-elite-30sm": {
    name: "SPINDLE MOULDER",
    model: "Elite 30SM",
    category: "Moulder",
    tagline: "Precision Engineering. Built for the Professional Workshop.",
    heroImage: "/media/amuzma-web-banners-for-Spindle-Moulder.jpg",
    featuresSubtitle:
      "High-performance spindle moulder with precision, durability, and smooth operation for professional woodworking tasks.",
    features: [
      {
        title: "Heavy-Duty Construction",
        image: "/media/frist-one-J4-1.webp",
        desc: "Built with a precision-ground cast iron bed, the Elite 30SM offers exceptional durability and stability. Its robust construction ensures long-term reliability, supporting heavy workloads without compromising performance.",
      },
      {
        title: "Precision Cutting",
        image: "/media/frist-one-J3-1.webp",
        desc: "Engineered for accurate shaping and profiling, this spindle moulder delivers consistent, clean cuts. The precision components maintain exact tolerances, allowing professional-grade results on hardwoods.",
      },
      {
        title: "Smooth Operation",
        image: "/media/frist-one-J2-1.webp",
        desc: "The Elite 30SM provides vibration-free, stable operation. Its balanced spindle and rigid frame reduce operator strain and improve control, ensuring effortless, consistent performance during long production cycles.",
      },
      {
        title: "Versatile Shaping",
        image: "/media/frist-one-J1-1.webp",
        desc: "Perfect for joinery, moldings, and custom profiles, this machine handles a variety of woodworking tasks. It adapts easily to different cutters and materials, making it ideal for diverse shop applications.",
      },
    ],
    benefitsSectionTitle: "Benifits",
    benefitsSubtitle:
      "The Elite 30SM spindle moulder offers durable, precise, and stable performance.",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Long-Term Durability",
        desc: "Heavy-duty cast iron bed ensures reliable performance over years of use.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Precision Cutting",
        desc: "Precision-ground components deliver consistent, accurate shaping and profiling results.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Smooth Operation",
        desc: "Vibration-free design reduces operator fatigue and ensures stable, controlled work.",
      },
    ],
    galleryDescription:
      "Elite 30SM is a high-performance spindle moulder designed for precise shaping, smooth cutting, and reliable operation, making it ideal for professional furniture and woodworking applications.",
    gallery: [
      "/media/Untitled-design-12-1.webp",
      "/media/frist-one-J3-1.webp",
      "/media/frist-one-J4-1.webp",
      "/media/frist-one-J1-1.webp",
      "/media/frist-one-J2-1.webp",
    ],
    dimensionsImage: "/media/Spindle-Moulder-01-scaled.webp",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription: "",
    partsImages: [
      "/media/frist-one-J1-1.webp",
      "/media/frist-one-J2-1.webp",
      "/media/frist-one-J3-1.webp",
      "/media/frist-one-J4-1.webp",
      "/media/frist-one-J3-1.webp",
      "/media/frist-one-J4-1.webp",
    ],
    parts: [
      {
        name: "Elite 30SM Pro",
        image: "/media/frist-one-J1-1.webp",
      },
      {
        name: "Elite 30SM Advance",
        image: "/media/frist-one-J2-1.webp",
      },
      {
        name: "Elite 30SM Industrial",
        image: "/media/frist-one-J3-1.webp",
      },
      {
        name: "Elite 30SM Master",
        image: "/media/frist-one-J4-1.webp",
      },
      {
        name: "Elite 30SM Pricison",
        image: "/media/frist-one-J3-1.webp",
      },
      {
        name: "Elite 30SM Master",
        image: "/media/frist-one-J4-1.webp",
      },
    ],
  },
  "edge-banding-e5": {
    name: "EDGE BANDING",
    model: "Elite E5",
    category: "Edge Banders",
    heroImage: "/media/amuzma-web-banners-for-Edge-Banding-E5.jpg",
    tagline: "Precision Edging. Compact Design. Professional Finish.",
    featuresSubtitle:
      "The Edge Banding E5 delivers precise, efficient edge finishing for compact professional workshops.",
    features: [
      {
        title: "Trimming Units",
        image: "/media/Amuzma-E5-4-1.webp",
        desc: "Designed for fast, continuous operation, boosting productivity while maintaining consistent edge quality across every panel and project.",
      },
      {
        title: "Gluing and Pressure Unit",
        image: "/media/Amuzma-E5-3-1.webp",
        desc: "Advanced control system ensures accurate trimming, clean edges, and professional finishing for flawless results every time.",
      },
      {
        title: "Position Adjustment Handl",
        image: "/media/Amuzma-E5-2-1-1.webp",
        desc: "Delivers smooth, seamless edge banding that enhances durability, appearance, and long-term product value.",
      },
      {
        title: "PLC Touchscreen Control",
        image: "/media/Amuzma-E5-5-2.webp",
        desc: "Integrated automatic functions reduce manual effort, improve efficiency, and support higher production capacity with ease.",
      },
    ],
    benefitsSectionTitle: "Benifits",
    benefitsSubtitle:
      "Boost productivity, ensure flawless edge quality, and simplify operations",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Faster Production",
        desc: "Boosts workflow speed while maintaining consistent quality output.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Perfect Edge Finish",
        desc: "Ensures smooth, seamless edges with a clean professional look.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Easy Operation",
        desc: "User-friendly controls simplify setup and daily machine use.",
      },
    ],
    galleryDescription:
      "The Amuzma E5 Edge Banding Machine combines industrial-grade performance with a compact, space-saving design, making it the ideal solution for small to medium-sized woodworking workshops. Designed for precision, reliability, and efficiency, the E5 delivers professional-quality edge finishing while maximizing productivity. Built with robust construction and high-quality components, the E5 ensures smooth operation, consistent edge bonding, and long-lasting performance for MDF, plywood, particleboard, and other panel materials.",
    gallery: [
      "/media/Untitled-design-9.webp",
      "/media/Amuzma-E5-2-1-1.webp",
      "/media/Amuzma-E5-3-1.webp",
      "/media/Amuzma-E5-4-1.webp",
      "/media/Amuzma-E5-5-2.webp",
    ],
    dimensionsImage: "/media/Edge-banding-E5-01-scaled.webp",
    dimensionsHeading: "Compact & Efficient",
    dimensionsDescription:
      "Edge Banding E5 Its robust construction, 800 kg machine weight, and space-efficient design ensure excellent stability during operation while maintaining a compact footprint for easy installation.",
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
    model: "Elite P6",
    category: "Edge Banders",
    heroImage: "/media/amuzma-web-banners-for-Edge-Banding-E5.jpg",
    tagline: "Powerful & Industrial",
    featuresSubtitle:
      "The Elite P6 combines advanced bonding technology with stable operation, ensuring clean edges, reduced material waste, and high-efficiency production.",
    features: [
      {
        title: "Trimming Units",
        image: "/media/Amuzma-E5-4-1.webp",
        desc: "Equipped with a high-performance gluing unit, Elite P6 ensures strong and uniform adhesive application for secure edge bonding and long-lasting durability.",
      },
      {
        title: "Gluing and Pressure Unit",
        image: "/media/Amuzma-E5-3-1.webp",
        desc: "Integrated front and rear trimming systems provide clean, smooth, and accurate edge finishing, reducing manual rework and improving overall product quality.",
      },
      {
        title: "Position Adjustment Handl",
        image: "/media/Amuzma-E5-2-1-1.webp",
        desc: "The heavy-duty feeding system ensures consistent panel movement, minimizing vibration and delivering precise alignment throughout the edging process.",
      },
      {
        title: "PLC Touchscreen Control",
        image: "/media/Amuzma-E5-5-1.webp",
        desc: "Designed for professional workshops, Elite P6 offers reliable operation, optimized speed control, and enhanced productivity for continuous daily use.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Flawless Edge Quality",
        desc: "Elite P6 ensures perfectly bonded edges with precise trimming and finishing units, delivering a clean, seamless appearance.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Increased Production",
        desc: "With its stable feeding system and optimized operating speed, the Elite P6 reduces manual effort and production time.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Long-Term Reliability",
        desc: "Constructed with durable components and advanced engineering, Elite P6 offers dependable operation, reduced maintenance needs.",
      },
    ],
    galleryDescription:
      "Elite E6 is a high-performance edge banding machine designed for precision, efficiency, and durability. It delivers smooth edge bonding, accurate trimming, and reliable operation for professional woodworking environments.",
    gallery: [
      "/media/Untitled-design-9.webp",
      "/media/Amuzma-E5-2-1-1.webp",
      "/media/Amuzma-E5-1-1-1-1.webp",
      "/media/Amuzma-E5-3-1.webp",
      "/media/Amuzma-E5-4-1.webp",
    ],
    dimensionsImage: "/media/Edge-banding-P6-01-scaled.webp",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "The Elite P6 is designed with balanced and space-efficient dimensions to ensure easy installation and seamless integration into professional workshop layouts. Its optimized structure supports stable operation while maximizing available workspace efficiency.",
    partsSectionTitle: "Product Image",
    partsImages: [
      "/media/Amuzma-E5-1-1-1.webp",
      "/media/Amuzma-E5-2-1-1.webp",
      "/media/Amuzma-E5-3-1.webp",
      "/media/Amuzma-E5-4-1.webp",
      "/media/Amuzma-E5-1-1.webp",
      "/media/Amuzma-E5-4.webp",
    ],
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
    model: "Elite C7",
    category: "Edge Banders",
    heroImage: "/media/amuzma-web-banners-for-Edge-Banding-C7.jpg",
    tagline: "Efficient Extraction. Compact Design. Clean Results.",
    featuresSubtitle:
      "High suction capacity with efficient dust filtration ensures stable airflow and low-noise operation.",
    features: [
      {
        title: "Precision Gluing",
        image: "/media/Amuzma-E5-2.webp",
        desc: "Advanced gluing system ensures strong and uniform adhesive application, providing secure edge bonding and long-lasting durability for furniture panels and board materials",
      },
      {
        title: "Clean Trimming",
        image: "/media/Amuzma-E5-4-opt.webp",
        desc: "Equipped with accurate trimming units, the C7 delivers smooth and precise edge finishing, reducing manual rework and enhancing overall product appearance.",
      },
      {
        title: "Efficient Operation",
        image: "/media/Amuzma-E5-3.webp",
        desc: "Designed for high productivity, the machine supports continuous edge banding with consistent speed, improving workflow efficiency.",
      },
      {
        title: "Stable Structure",
        image: "/media/Amuzma-E5-5.webp",
        desc: "Built with a robust frame and vibration-resistant design, the Edge Banding C7 ensures reliable performance, operational stability.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Precision",
        desc: "The Edge Banding C7 improves production efficiency by delivering strong edge bonding, smooth finishing, and consistent performance, reducing manually.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Efficiency",
        desc: "Combines planing and thicknessing functions in one machine, reducing workflow time, saving space, and improving overall workshop productivity.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Durability",
        desc: "Built with a heavy-duty structure and reliable components, providing long-lasting performance and stable operation even during continuous industrial.",
      },
    ],
    galleryDescription:
      "The Edge Banding C7 is a high-performance machine designed for precise and efficient edge finishing. It delivers strong adhesive bonding, smooth trimming, and clean finishing, ensuring professional-quality results for furniture manufacturing and panel processing applications.",
    gallery: ["/media/Untitled-design-9.webp"],
    dimensionsImage: "/media/Amuzma-E5-2.webp",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "Designed with a compact yet robust structure, the Edge Banding C7 offers optimized dimensions that ensure space efficiency, operational stability, and smooth integration into professional woodworking production setups.",
    partsSectionTitle: "Product Image",
    parts: [
      { name: "Elite C7", image: "/media/Amuzma-E5-5.webp" },
      { name: "Elite C7", image: "/media/Amuzma-E5-2.webp" },
      { name: "Elite C7", image: "/media/Amuzma-E5-4-opt.webp" },
      { name: "Elite C7", image: "/media/Amuzma-E5-3.webp" },
      { name: "Elite C7", image: "/media/Amuzma-E5-5.webp" },
      { name: "Elite C7", image: "/media/Amuzma-E5-4-opt.webp" },
    ],
  },
  "planer-elite-41pf": {
    name: "PLANER",
    model: "Elite 41",
    category: "Planer",
    heroImage: "/media/amuzma-web-banners-for-Planer.jpg",
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
        icon: "/media/Untitled-design-7.webp",
        title: "Precision Planing",
        desc: "Elite 41PF ensures accurate and consistent wood thickness, providing smooth surfaces every time. Its adjustable cutting depth allows professional.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Enhanced Productivity",
        desc: "With a heavy-duty motor and high-efficiency operation, Elite 41PF speeds up workflow, reduces downtime, and allows woodworkers to complete tasks.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Durability and Comfort",
        desc: "Designed for industrial use, Elite 41PF combines robust construction with ergonomic features, ensuring long-lasting performance, operator comfort.",
      },
    ],
    galleryDescription:
      "Elite 41PF provides precise wood planing, smooth finishes, and consistent thickness. Durable design and powerful motor ensure high efficiency, reliability, and professional-grade performance for woodworking and industrial applications.",
    gallery: [
      "/media/Planer-16-Elite-41PF-profile.webp",
      "/media/pf3-1.webp",
      "/media/pf4-1.webp",
      "/media/pf2.webp",
      "/media/pf11-2.webp",
    ],
    dimensionsImage: "/media/Planner-41PF-03-scaled.webp",
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
        image: "/media/Planer-16-Elite-41PF-profile-J-L-3.webp",
      },
      { name: "Industrial Panel Saw", image: "/media/pf3.webp" },
    ],
  },
  "planer-elite-41cm-cs": {
    name: "PLANER & THICKNESSER",
    model: "Elite 41CS / CM",
    category: "Planer",
    heroImage: "/media/amuzma-web-banners-for-Planer-Thicknesser.jpg",
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
        icon: "/media/Untitled-design-7.webp",
        title: "Precision",
        desc: "Provides precise thickness calibration and smooth finishing for consistent, high-quality woodworking results.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Efficiency",
        desc: "Combines planing and thicknessing functions in one machine, reducing workflow time, saving space, and improving overall workshop productivity.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Durability",
        desc: "Built with a heavy-duty structure and reliable components, providing long-lasting performance and stable operation even during continuous industrial.",
      },
    ],
    galleryDescription:
      "Elite 41CS / CM Planer & Thicknesser is a powerful and versatile woodworking machine designed for precise surface planing and accurate thickness calibration, ensuring smooth finishes and consistent material dimensions.",
    gallery: [
      "/media/Untitled-design-13-1.webp",
      "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-1-1.webp",
      "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-2.webp",
      "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-3.webp",
      "/media/Planer-Thicknesser-16-Elite-41CS-profile-J-L-4.webp",
    ],
    dimensionsImage: "/media/Thicknesser-and-planner-41CS-02-scaled.webp",
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
    heroImage: "/media/amuzma-web-banners-for-thicknesser-41th.jpg",
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
        image: "/media/Thicknesser-25-Elite-41th-2.webp",
        desc: "Designed for accurate thickness calibration, this machine ensures uniform material removal and smooth surface finishing, helping achieve precise dimensions for professional woodworking projects.",
      },
      {
        title: "Table Height Handwheel",
        image: "/media/Thicknesser-25-Elite-41th-3-opt.webp",
        desc: "Equipped with a high-speed cutter block, the Elite 41TH provides clean, sharp cuts with reduced vibration, improving surface quality and enhancing overall machining efficiency.",
      },
      {
        title: "Cast-Iron Table",
        image: "/media/Thicknesser-25-Elite-41th-4.webp",
        desc: "Featuring a strong and well-balanced table structure, it ensures stable material feeding, minimizes movement during operation.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Precision",
        desc: "Provides precise thickness calibration and smooth finishing for consistent, high-quality woodworking results.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Efficiency",
        desc: "Combines planing and thicknessing functions in one machine, reducing workflow time, saving space, and improving overall workshop productivity.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Durability",
        desc: "Built with a heavy-duty structure and reliable components, providing long-lasting performance and stable operation even during continuous industrial.",
      },
    ],
    galleryDescription:
      "The Elite 41TH is a high-performance thicknesser designed for precise material calibration and smooth surface finishing. Built with robust construction and reliable cutting power, it ensures consistent thickness accuracy and professional woodworking results.",
    gallery: [
      "/media/Untitled-design-14.webp",
      "/media/Thicknesser-25-Elite-41th-1-opt.webp",
      "/media/Thicknesser-25-Elite-41th-3-opt.webp",
      "/media/Thicknesser-25-Elite-41th-2.webp",
      "/media/Thicknesser-25-Elite-41th-4.webp",
    ],
    dimensionsImage: "/media/Thicknesser-41th-04-scaled.webp",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription: "",
    partsSectionTitle: "Product Image",
    parts: [
      {
        name: "Elite 41TH Precision",
        image: "/media/Thicknesser-25-Elite-41th-1-opt.webp",
      },
      {
        name: "ProCut 41 Industrial",
        image: "/media/Thicknesser-25-Elite-41th-3.webp",
      },
      {
        name: "Titan 41 Wood Thickness",
        image: "/media/Thicknesser-25-Elite-41th-3-1.webp",
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
    heroImage: "/media/amuzma-web-banners-for-Thicknesser-Firma-63TH.jpg",
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
        icon: "/media/Untitled-design-7.webp",
        title: "Precision",
        desc: "Provides precise thickness calibration and smooth finishing for consistent, high-quality woodworking results.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Efficiency",
        desc: "Combines planing and thicknessing functions in one machine, reducing workflow time, saving space, and improving overall workshop productivity.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Durability",
        desc: "Built with a heavy-duty structure and reliable components, providing long-lasting performance and stable operation even during continuous industrial.",
      },
    ],
    galleryDescription:
      "Meet the Firma 63TH Thicknesser – built for industrial-level woodworking where accuracy and durability matter most. This heavy-duty machine is designed to handle high-volume production with ease, offering Variable feed speeds, Electronic table adjustment, Digital thickness control, Spring-loaded pressure bar, 4-column support for unmatched stability.",
    gallery: [
      "/media/Untitled-design-15.webp",
      "/media/Thicknesser-25-Firma-63TH-J1.webp",
      "/media/Thicknesser-25-Firma-63TH-J2.webp",
      "/media/Thicknesser-25-Firma-63TH-J3.webp",
      "/media/Thicknesser-25-Firma-63TH-J4.webp",
    ],
    dimensionsImage: "/media/Thicknesser-63th-05-scaled.webp",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription: "",
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
    model: "Firma C8",
    category: "Pressing",
    heroImage: "/media/Web-photos-hot-press-C8.jpg",
    tagline: "Powerful & Industrial",
    featuresSubtitle:
      "The Firma C8 combines advanced bonding technology with stable operation, ensuring clean edges, reduced material waste, and high-efficiency production.",
    features: [
      {
        title: "Heavy-Duty Machine Frame.",
        image: "/media/Heavy-Duty-Machine-Frame.jpg.jpeg",
        desc: "Equipped with a powerful 100-ton hydraulic system, ensuring uniform and strong bonding across veneer doors for durable and high-quality production results.",
      },
      {
        title: "Control Panel _ PLC",
        image: "/media/Control-Panel-PLC-Interface.png",
        desc: "Advanced hydraulic design provides even pressure across the entire panel surface, preventing bubbles, gaps, or uneven bonding during veneer pressing.",
      },
      {
        title: "Heating Platens Pressing",
        image: "/media/Heating-Platens-Pressing-Plates.png",
        desc: "Built with a rigid steel frame construction for maximum stability, vibration resistance, and long-term industrial performance in demanding production environments.",
      },
      {
        title: "Hydraulic Cylinders",
        image: "/media/Hydraulic-Cylinders-Pistons.png",
        desc: "Designed for smooth and user-friendly operation, improving workflow efficiency while maintaining consistent pressing quality for commercial door manufacturing.",
      },
    ],
    benefitsSectionTitle: "Performance Benefits",
    benefitsSubtitle: "Power, Precision, Profitability",
    benefits: [
      {
        icon: "/media/Untitled-design-7.webp",
        title: "Flawless Edge Quality",
        desc: "The Amuzma Firma C8 Hot Press is engineered to deliver uniform pressure, consistent heat distribution, and reliable performance for professional.",
      },
      {
        icon: "/media/Untitled-design-5.webp",
        title: "Increased Production",
        desc: "With its stable feeding system and optimized operating speed, the Veneer Firma C8 reduces manual effort and production time.",
      },
      {
        icon: "/media/Untitled-design-6.webp",
        title: "Long-Term Reliability",
        desc: "Constructed with durable components and advanced engineering, Firma C8 offers dependable operation, reduced maintenance needs.",
      },
    ],
    galleryDescription:
      "The Amuzma Firma C8 Hot Press is engineered to deliver uniform pressure, consistent heat distribution, and reliable performance for professional woodworking applications. Built with a robust frame and precision hydraulic system, it ensures superior bonding quality and outstanding productivity for demanding production environments.\n\nWhether you're producing furniture, doors, or decorative panels, the Firma C8 Hot Press provides the strength, precision, and reliability your workshop demands.",
    gallery: [
      "/media/Hotpress-C8.jpeg",
      "/media/Heavy-Duty-Machine-Frame.jpg.jpeg",
      "/media/Control-Panel-PLC-Interface.png",
      "/media/Heating-Platens-Pressing-Plates.png",
      "/media/Hydraulic-Cylinders-Pistons.png",
    ],
    dimensionsImage: "/media/Veneer-Door-press-C8-02-1024x702.png",
    dimensionsHeading: "Machine Dimensions",
    dimensionsDescription:
      "The Veneer Door Press Firma C8 is designed with balanced and space-efficient dimensions to ensure easy installation and seamless integration into professional workshop layouts. Its optimized structure supports stable operation while maximizing available workspace efficiency.",
    partsSectionTitle: "Product Image",
    partsImages: [
      "/media/Heavy-Duty-Machine-Frame.jpg.jpeg",
      "/media/Control-Panel-PLC-Interface.png",
      "/media/Heating-Platens-Pressing-Plates.png",
      "/media/Hydraulic-Cylinders-Pistons.png",
      "/media/Hotpress-C8.jpeg",
      "/media/Prodocts/Hot Press C8.png",
    ],
    parts: [
      { name: "PressMaster Firma C8", image: "/media/Heavy-Duty-Machine-Frame.jpg.jpeg" },
      { name: "VeneerProFirma C8", image: "/media/Control-Panel-PLC-Interface.png" },
      { name: "HydroPressFirma C8", image: "/media/Heating-Platens-Pressing-Plates.png" },
      { name: "DoorBond Firma C8", image: "/media/Hydraulic-Cylinders-Pistons.png" },
      { name: "UltraPress Firma C8", image: "/media/Hotpress-C8.jpeg" },
      { name: "PowerPlaten Firma C8", image: "/media/Prodocts/Hot Press C8.png" },
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
  "h-[304px] sm:h-[345px] md:h-[386px] lg:h-[649px] min-[1800px]:h-[500px] min-[2200px]:h-[460px]";

const PRODUCT_DETAIL_HERO_IMAGE = "/media/amuzma background.png";

const DEFAULT_HERO_IMAGE_CLASS = "object-cover object-center";

/** Product cutouts for the hero banner (right side, aligned to English dropdown). */
const PRODUCT_BANNER_MACHINE_IMAGES: Record<string, string> = {
  "cnc-router-forte-13cr": "/media/PNG/CNC.png",
  "cnc-router-forte-15cr": "/media/PNG/CNC.png",
  "cnc-router-forte-20cr": "/media/PNG/CNC.png",
  "fiber-laser-stark-30fl": "/media/PNG/Fiber Laser - 3.png",
  "cnc-router-firma-150atc": "/media/PNG/CNC.png",
  "wide-belt-sander-firma-1300ws": "/media/PNG/wide belt sander.png",
  "dust-collector-dc2200": "/media/PNG/DustCollector-AMUZMA DC2200.png",
  "dust-collector-abs5000": "/media/PNG/Dust Collector ABS5000.png",
  "dust-collector-rdc3800": "/media/PNG/Dusy Collector RDC3800.png",
  "spindle-moulder-elite-30sm": "/media/PNG/Spindle Moulder - Elite  30SM.png",
  "edge-banding-e5": "/media/PNG/Edge Banding-Amuzma EliteE5.png",
  "edge-banding-p6": "/media/PNG/Edge banding-Amuzma eliteP6.png",
  "edge-banding-c7": "/media/PNG/Edge banding-Amuzma eliteP6.png",
  "planer-elite-41pf": "/media/PNG/Planner-Elite 41PF.png",
  "planer-elite-41cm-cs": "/media/PNG/Planner and Thicknesser- Elite 41CS.png",
  "thicknesser-elite-41th": "/media/PNG/Thicknesser- Elite 41TH.png",
  "thicknesser-firma-63th": "/media/PNG/Thicknesser- Elite 63TH.png",
  "veneer-door-press-p-100t": "/media/PNG/Veneer Door press.png",
  "band-saw-65bs": "/media/PNG/BandSaw-Elite65BS.png",
  "beam-saw-firma-33bs": "/media/PNG/Beam saw.png",
  "panel-saw-firma-40pl": "/media/PNG/Panel Saw- Firma 40PL.png",
  "panel-saw-firma-35ps": "/media/PNG/Panel Saw-Firma 35PS.png",
  "panel-saw-forte-40pa": "/media/PNG/Panel Saw- Forte 40PA New.png",
  "panel-saw-elite-35ts": "/media/PNG/Penel Saw - Elite 35TS.png",
  "panel-saw-elite-35ps": "/media/PNG/elite 35ps.png",
  "panel-saw-elite-35eu": "/media/PNG/ELITE 35EU (1).png",
};

/** Product cutouts that render ~15% larger on the hero banner. */
const BANNER_MACHINE_SCALE_115 = new Set([
  "dust-collector-dc2200",
  "dust-collector-abs5000",
  "dust-collector-rdc3800",
]);

/** Product cutouts that render 10% smaller on the hero banner. */
const BANNER_MACHINE_SCALE_90 = new Set([
  "cnc-router-forte-13cr",
  "cnc-router-forte-15cr",
  "cnc-router-forte-20cr",
  "fiber-laser-stark-30fl",
  "thicknesser-firma-63th",
  "panel-saw-elite-35ts",
  "spindle-moulder-elite-30sm",
]);

/** Already at 90%; another 10% smaller → ~81% of original. */
const BANNER_MACHINE_SCALE_81 = new Set([
  "planer-elite-41pf",
  "planer-elite-41cm-cs",
  "thicknesser-elite-41th",
]);

/** Pin PNG to the right, matching left PAGE_CONTAINER gap after the floating social bar (53px). */
const BANNER_MACHINE_RIGHT_ALIGN = new Set([
  "dust-collector-dc2200",
  "dust-collector-abs5000",
  "dust-collector-rdc3800",
  "wide-belt-sander-firma-1300ws",
  "band-saw-65bs",
  "thicknesser-firma-63th",
  "thicknesser-elite-41th",
]);

const NAV_SECTIONS = ["Features", "Benefits", "Gallery", "Operational", "Specifications", "Contact", "Parts"] as const;

export function ProductDetail({ productId }: { productId?: string } = {}) {
  const params = useParams();
  const id = productId ?? (params.id as string);
  const product = (id && PRODUCTS_DATA[id]) || DEFAULT_PRODUCT;
  const bannerMachineImage = id ? PRODUCT_BANNER_MACHINE_IMAGES[id] : undefined;
  const bannerMachineScaleClass = id
    ? BANNER_MACHINE_SCALE_81.has(id)
      ? "scale-[0.81]"
      : BANNER_MACHINE_SCALE_90.has(id)
        ? "scale-90"
        : BANNER_MACHINE_SCALE_115.has(id)
          ? "scale-[1.15]"
          : undefined
    : undefined;
  const bannerMachineRightAligned =
    Boolean(id) && BANNER_MACHINE_RIGHT_ALIGN.has(id);
  const navRef = useRef<HTMLDivElement>(null);

  const scrollTo = (section: string) => {
    const el = document.getElementById(section.toLowerCase());
    if (!el) return;

    const headerOffset =
      typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches
        ? 92.16
        : 64;
    const navHeight = navRef.current?.offsetHeight ?? 52;
    const top =
      el.getBoundingClientRect().top + window.scrollY - headerOffset - navHeight;

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <div className="max-w-full overflow-x-clip">
      {/* Hero */}
      <div className="relative w-full max-w-full">
        <div
          className={`relative w-full max-w-full overflow-hidden ${DEFAULT_HERO_HEIGHT_CLASS}`}
        >
          <Image
            src={PRODUCT_DETAIL_HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className={DEFAULT_HERO_IMAGE_CLASS}
          />

          <div className={`absolute inset-0 ${PAGE_CONTAINER}`}>
            <div className="flex h-full w-full items-center gap-6 sm:gap-8 lg:gap-10">
              <div className="relative z-10 w-full max-w-[340px] shrink-0 lg:max-w-[360px]">
                <h1 className="font-gothic text-[26px] font-normal uppercase leading-none text-white sm:text-[36px]">
                  {product.name}
                </h1>
                <p className="mt-2 font-gothic text-[16px] font-normal text-[#FFFCFC]">
                  {product.model}
                </p>

                <div className="mt-6 flex w-full flex-col items-start gap-3 lg:min-h-[150px] lg:max-w-[310px] lg:justify-between lg:bg-white lg:px-5 lg:pb-6 lg:pt-4">
                  <p className="hidden font-gothic text-[12px] font-normal text-[#666666] lg:block">
                    Click &apos;Get Free Quote&apos; to customize
                  </p>
                  <AddToQuoteButton
                    productId={id}
                    name={product.name}
                    model={product.model}
                    image={product.gallery?.[0] ?? product.heroImage}
                    className="inline-flex items-center justify-center border border-white bg-black px-4 py-2 font-gothic text-[14px] font-normal leading-none text-white transition-colors hover:bg-[#222222] lg:inline-block lg:w-auto lg:self-start lg:border-0 lg:bg-[#C0202F] lg:px-[15px] lg:py-[10px] lg:text-[12px] lg:uppercase lg:transition-opacity lg:hover:bg-[#C0202F] lg:hover:opacity-90"
                  >
                    Add to Quote
                  </AddToQuoteButton>
                </div>
              </div>

              {bannerMachineImage ? (
                <div className="relative hidden min-h-0 min-w-0 flex-1 self-stretch sm:block">
                  <div
                    className={`absolute inset-y-[6%] inset-x-0 flex items-center lg:inset-y-[5%] ${
                      bannerMachineRightAligned
                        ? "justify-end pr-[53px]"
                        : "justify-center"
                    }`}
                  >
                    <div
                      className={`relative h-full w-full${bannerMachineScaleClass ? ` ${bannerMachineScaleClass}` : ""}`}
                    >
                      <Image
                        src={bannerMachineImage}
                        alt={product.model}
                        fill
                        priority
                        sizes="(max-width: 1024px) 55vw, 50vw"
                        className={`object-contain ${
                          bannerMachineRightAligned
                            ? "object-right"
                            : "object-center"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Section nav — sticky below site header for the full product page */}
      <div
        ref={navRef}
        className="sticky top-[64px] z-30 hidden bg-[#E4E4E4] lg:block lg:top-[92.16px]"
      >
        <div className={PAGE_CONTAINER}>
          <div className="flex w-full items-stretch justify-between gap-1 overflow-x-auto scrollbar-hide sm:gap-2 lg:gap-0">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section}
                type="button"
                onClick={() => scrollTo(section)}
                className="shrink-0 px-3 py-3 font-gothic text-[14px] font-normal text-black transition-colors hover:bg-[#F2F2F2] sm:px-4 sm:py-4 sm:text-[16px] lg:shrink lg:flex-1 lg:text-center"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`${PAGE_CONTAINER} space-y-16 py-10 sm:py-12`}>
        {/* Features */}
        <section
          id="features"
          className={`mt-5 mb-10 sm:mb-[70px] ${SECTION_SCROLL_MARGIN}`}
        >
          <h2 className="text-center font-gothic text-[24px] font-normal leading-tight text-black sm:text-[30px]">
            {product.tagline}
          </h2>
          <p
            className={`mx-auto mt-4 text-center font-gothic text-[16px] font-normal leading-[27.2px] text-[#666666] ${
              id === "fiber-laser-stark-30fl"
                ? "max-w-none lg:whitespace-nowrap"
                : "max-w-[900px]"
            }`}
          >
            {product.featuresSubtitle}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature) => (
              <div key={feature.title} className="p-[10px]">
                <div className="relative h-[290px] overflow-hidden border border-[#666666]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
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
      <section
        id="benefits"
        className={`w-full bg-[#E4E4E4] py-10 sm:py-12 ${SECTION_SCROLL_MARGIN}`}
      >
        <div className={PAGE_CONTAINER}>
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

      <div className={`${PAGE_CONTAINER} space-y-16 py-10 sm:py-12`}>
        <ProductGallerySection
          images={product.gallery}
          description={product.galleryDescription}
          productCataloguePdf={id ? PRODUCT_CATALOGUE_PDFS[id] : undefined}
          productId={id}
          productName={product.name}
          productModel={product.model}
          productImage={product.gallery?.[0] ?? product.heroImage}
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
