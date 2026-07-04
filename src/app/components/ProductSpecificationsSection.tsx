"use client";

import { useState } from "react";
import Image from "next/image";
import { SAW_SPEC_CONFIGS } from "../data/sawProducts";

const SPECIFICATIONS_LEFT = [
  { label: "Aluminum Profile", value: "—" },
  { label: "Table + T slots", value: "1300 × 2500 × 200" },
  { label: "Table + T slots", value: "1500 × 3000 × 200" },
  { label: "Control System", value: "Richauto DSP A11" },
  { label: "Air-Cooling Spindle", value: "HQD 6.0 kW" },
  { label: "Inverter", value: "Delta 7.5 kW" },
  { label: "Servo Motor and Driver", value: "Delta 750 W" },
  { label: "China Oubang Reducer", value: "" },
];

const SPECIFICATIONS_RIGHT = [
  { label: "Square Rails Taiwan HIWIN", value: "25 / 25 / 25 mm" },
  { label: "Helical Rack", value: "PCRCH 1.5" },
  { label: "Taiwan Ball Screw on Z Axis", value: "Taiwan 2505" },
  { label: "Auto Lubrication", value: "" },
  { label: "Independent Control Cabinet", value: "D06" },
  { label: "Autonics Limit Switch", value: "" },
  { label: "Schneider Electrical Components", value: "" },
];

const SANDER_SPECIFICATIONS_LEFT = [
  { label: "Conveyor Belt Width", value: "240 mm" },
  { label: "Minimum Working Thickness", value: "3 mm" },
  { label: "Maximum Working Width", value: "1300 mm" },
  { label: "Working Thickness", value: "3-110 mm" },
  { label: "Feed Speed", value: "5-20 m/min" },
  { label: "First Belt Speed", value: "20 m/s" },
  { label: "Second Belt Speed", value: "18 m/s" },
  { label: "Total Power", value: "40.65 kW" },
];

const SANDER_SPECIFICATIONS_RIGHT = [
  { label: "First Belt Motor", value: "22 kW" },
  { label: "Second Belt Motor", value: "15 kW" },
  { label: "Feeding Motor", value: "1.5 kW" },
  { label: "Lifting Motor", value: "0.37 kW" },
  { label: "Working Pressure", value: "0.6-0.8 MPa" },
  { label: "Air Consumption", value: "1.0 m³/min" },
  { label: "Overall Dimensions", value: "2200 × 2000 × 2100 mm" },
  { label: "Weight", value: "3000 kg" },
];

type SpecConfig = {
  parametersTabLabel: string;
  dimensionsTabLabel?: string;
  parametersTabWidthClass?: string;
  left: { label: string; value: string }[];
  right: { label: string; value: string }[];
  dimensionsItems?: { label: string; value: string }[];
};

const DC2200_SPECIFICATIONS_LEFT = [
  { label: "Motor", value: "230V-50Hz, 400V, 3~50Hz 3.8 W" },
  { label: "Tank Capacity / Air Flow", value: "380 Ltr / 3900 m³/hr" },
  { label: "Pipe Size", value: "1 × 150 mm, 3 × 100 mm" },
];

const DC2200_SPECIFICATIONS_RIGHT = [
  { label: "Machine Dimensions", value: "1170 × 590 × 570 mm" },
  { label: "Qty/20", value: "80pc" },
  { label: "Qty/40", value: "160 pc" },
  { label: "Weight", value: "60 / 65 kgs" },
];

const ABS5000_SPECIFICATIONS_LEFT = [
  { label: "Motor Power", value: "3 HP / 2200 W" },
  { label: "Suction Capacity", value: "Up to 5000 m³/h" },
  { label: "Inlet Size", value: "200 mm (with 4 × 100 mm outlets)" },
];

const ABS5000_SPECIFICATIONS_RIGHT = [
  {
    label: "Machine Dimensions",
    value: "1540 × 560 × 2270 mm | 2 × 180 liters",
  },
  { label: "Weight", value: "Approx. 60–64 kg" },
];

const RDC3800_SPECIFICATIONS_LEFT = [
  { label: "Motor", value: "230V-50Hz, 400V-3Ø-50Hz, 3.8" },
  { label: "Tank", value: "380 Ltr / 3900 m³/hr" },
  { label: "Pipe", value: "1 × 150 mm, 3 × 100 mm" },
];

const RDC3800_SPECIFICATIONS_RIGHT = [
  { label: "Dimension", value: "1170 × 590 × 570 mm" },
  { label: "Quantity", value: "Qty/20 : 80 pc, Qty/40 : 160 pc" },
  { label: "Weight", value: "60 / 65 kgs" },
];

const ELITE_E5_SPECIFICATIONS_LEFT = [
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

const ELITE_E5_SPECIFICATIONS_RIGHT = [
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

const ELITE_P6_SPECIFICATIONS_LEFT = [
  { label: "Motor Power", value: "9.8 kW" },
  { label: "Feeding Speed", value: "8 – 11 – 13 m/min" },
  { label: "Panel Thickness", value: "10 – 45 mm" },
  { label: "Edge Banding Tape Thickness", value: "0.4 – 3 mm" },
  { label: "Min. Panel Width / Length", value: "80 / 120 mm" },
];

const ELITE_P6_SPECIFICATIONS_RIGHT = [
  { label: "Working Pressure", value: "0.6 – 0.8 MPa" },
  { label: "Overall Size", value: "3850 × 700 × 1300 mm" },
  { label: "Packing Size", value: "3400 × 650 × 1280 mm" },
  { label: "Weight", value: "1000 kg" },
];

const ELITE_C7_SPECIFICATIONS_LEFT = [
  { label: "Motor Power", value: "10.3 kW" },
  { label: "Feeding Speed", value: "8–11–13 m/min" },
  { label: "Panel Thickness", value: "10–45 mm" },
  { label: "Edge Banding Tape Thickness", value: "0.4–3 mm" },
  { label: "Min. Panel Width/Length", value: "80 / 120 mm" },
];

const ELITE_C7_SPECIFICATIONS_RIGHT = [
  { label: "Working Pressure", value: "0.6–0.8 MPa" },
  { label: "Overall Size", value: "4580 × 900 × 1300 mm" },
  { label: "Packing Size", value: "4280 × 650 × 1280 mm" },
  { label: "Weight", value: "1230 kg" },
];

const ELITE_30SM_SPECIFICATIONS_LEFT = [
  { label: "Spindle Diameter", value: "30 (32:35:40:50) mm" },
  { label: "Spindle Speeds", value: "1400 / 3500 / 6000 / 8000 RPM" },
  { label: "Max. Spindle Stroke", value: "140 mm" },
  { label: "Spindle Length", value: "130 mm" },
  { label: "Spindle Tilting", value: "-5° +45°" },
  { label: "Max. Diameter of Table Opening", value: "220 mm" },
  { label: "Max. Tool Diameter Under the Table", value: "175 mm" },
  { label: "Max. Tool Diameter Above the Table", value: "200 / 250 mm" },
  { label: "Height of Table", value: "890 mm" },
];

const ELITE_30SM_SPECIFICATIONS_RIGHT = [
  { label: "Max. Height of Machine", value: "1300 mm" },
  { label: "Table Size", value: "1000 × 350 mm" },
  { label: "Suction Dust Hood Diameter", value: "100 mm" },
  { label: "Motor", value: "3 × 380V : 4 kW" },
  { label: "Net / Gross Weight", value: "235 / 280 kg" },
  {
    label: "Optional Accessories",
    value: "1000 × 750 × 240 mm : 35 / 39 kgs",
  },
  { label: "Sliding Carriage", value: "" },
  { label: "Wooden Box Package Size", value: "1150 × 900 × 1085 mm" },
];

const ELITE_41PF_SPECIFICATIONS_LEFT = [
  { label: "Cutter Block Speed", value: "5500 rpm" },
  { label: "Cutter Block Diameter", value: "70 mm" },
  { label: "Max Depth of Cut", value: "4 mm" },
  { label: "Cutterhead", value: "" },
  { label: "Straight Knives Cutterhead", value: "3 pcs / 410 × 30 × 3 mm" },
  { label: "2 Slot Spiral Cutterhead", value: "44 pcs / 15 × 15 × 2.5 mm" },
];

const ELITE_41PF_SPECIFICATIONS_RIGHT = [
  { label: "Over Length of Planer Tables", value: "2000 mm" },
  { label: "Extractor Port Dia", value: "120 mm" },
  { label: "Cutting Motor Output", value: "" },
  { label: "3 × 380V", value: "4 kW" },
  { label: "Net / Gross Weight", value: "290 / 351 kgs" },
  { label: "Wooden Box Package Size", value: "2118 × 818 × 1138 mm" },
];

const ELITE_41CS_SPECIFICATIONS_LEFT = [
  { label: "Feed Speed", value: "7 m/min" },
  { label: "Cutter Block Speed", value: "5500 rpm" },
  { label: "Cutter Block Diameter", value: "70 mm" },
  { label: "Max Thicknesser Height", value: "4–225 mm" },
  { label: "Max Thicknesser Width", value: "410 mm" },
  { label: "Min Length of Workpiece", value: "160 mm" },
  { label: "Max Depth of Cut", value: "4 mm" },
  { label: "Depth Indicator", value: "" },
  { label: "Scale", value: "" },
  { label: "Digital Readout", value: "" },
  { label: "Cutter Head", value: "" },
];

const ELITE_41CS_SPECIFICATIONS_RIGHT = [
  {
    label: "2 Slot Spiral Cutterhead (Optional)",
    value: "44 pcs / 15 × 15 × 2.5 mm",
  },
  { label: "Straight Knives Cutterhead", value: "3 pcs / 410 × 30 × 3 mm" },
  {
    label: "Over Length of Planer Tables (Optional)",
    value: "1669 mm",
  },
  { label: "Thickness Table Size", value: "650 – 407 mm" },
  { label: "Exactor Port Dia", value: "120 mm" },
  { label: "Cutting Motor Output", value: "" },
  { label: "3 × 380V", value: "4 kW S6" },
  { label: "Optional Accessories", value: "" },
  {
    label: "Extension Table Package",
    value: "450 × 400 × 100 mm / 12–13 kgs",
  },
  { label: "Net / Gross Weight", value: "294 / 352 kgs" },
  { label: "Wooden Box Package Size", value: "1710 × 740 × 1117 mm" },
];

const ELITE_41TH_SPECIFICATIONS_LEFT = [
  { label: "Feed Speed", value: "6.5 m/min" },
  { label: "Cutter Block Speed", value: "4200 rpm" },
  { label: "Cutter Block Diameter", value: "95 mm" },
  { label: "Max Thicknesser Height", value: "4–220 mm" },
  { label: "Max Thicknesser Width", value: "410 mm" },
  { label: "Min Length of Workpiece", value: "5 mm" },
  { label: "Depth Indicator", value: "" },
  { label: "Digital Readout", value: "" },
  { label: "Scale", value: "" },
  { label: "Cutterhead", value: "" },
];

const ELITE_41TH_SPECIFICATIONS_RIGHT = [
  { label: "Straight Knives Cutterhead", value: "3 pcs / 410 × 30 × 3 mm" },
  {
    label: "3 Slot Spiral Cutterhead",
    value: "54 pcs / 15 × 15 × 2.5 mm",
  },
  {
    label: "4 Slot Spiral Cutterhead",
    value: "72 pcs / 15 × 15 × 2.5 mm",
  },
  { label: "Thickness Table Size", value: "750 × 408 mm" },
  { label: "Extractor Port Dia", value: "120 mm" },
  { label: "Cutting Motor Output", value: "" },
  { label: "3 × 380V", value: "4 kW" },
  { label: "Net / Gross Weight", value: "306 / 367 kgs" },
  { label: "Wooden Box Package Size", value: "740 × 710 × 1117 mm" },
];

const FIRMA_63TH_SPECIFICATIONS_LEFT = [
  { label: "Feed Speed", value: "7 m/min" },
  { label: "Cutter Block Speed", value: "5500 rpm" },
  { label: "Cutter Block Diameter", value: "70 mm" },
  { label: "Max Thicknesser Height", value: "4–225 mm" },
  { label: "Max Thicknesser Width", value: "410 mm" },
  { label: "Min Length of Workpiece", value: "160 mm" },
  { label: "Max Depth of Cut", value: "4 mm" },
  { label: "Depth Indicator", value: "" },
  { label: "Scale", value: "" },
  { label: "Digital Readout", value: "" },
  { label: "Cutter Head", value: "" },
];

const FIRMA_63TH_SPECIFICATIONS_RIGHT = [
  {
    label: "2 Slot Spiral Cutterhead (Optional)",
    value: "44 pcs / 15×15×2.5 mm",
  },
  { label: "Straight Knives Cutterhead", value: "3 pcs 410×30×3 mm" },
  {
    label: "Over Length of Planer Tables (Optional)",
    value: "1669 mm",
  },
  { label: "Thickness Table Size", value: "650–407 mm" },
  { label: "Exactor Port Dia", value: "120 mm" },
  { label: "Cutting Motor Output", value: "" },
  { label: "3 × 380V", value: "4 kW S6" },
  { label: "Optional Accessories", value: "" },
  {
    label: "Extension Table Package",
    value: "450×400×100 mm / 12–13 kgs",
  },
  { label: "Net / Gross Weight", value: "294 / 352 kgs" },
  { label: "Wooden Box Package Size", value: "1710 -740 -1117 mm" },
];

const SPECIFICATIONS_BY_PRODUCT: Record<string, SpecConfig> = {
  ...SAW_SPEC_CONFIGS,
  "edge-banding-e5": {
    parametersTabLabel: "Performance",
    parametersTabWidthClass: "w-[220px] whitespace-nowrap",
    left: ELITE_E5_SPECIFICATIONS_LEFT,
    right: ELITE_E5_SPECIFICATIONS_RIGHT,
  },
  "edge-banding-p6": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: ELITE_P6_SPECIFICATIONS_LEFT,
    right: ELITE_P6_SPECIFICATIONS_RIGHT,
  },
  "edge-banding-c7": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: ELITE_C7_SPECIFICATIONS_LEFT,
    right: ELITE_C7_SPECIFICATIONS_RIGHT,
  },
  "spindle-moulder-elite-30sm": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: ELITE_30SM_SPECIFICATIONS_LEFT,
    right: ELITE_30SM_SPECIFICATIONS_RIGHT,
  },
  "planer-elite-41pf": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: ELITE_41PF_SPECIFICATIONS_LEFT,
    right: ELITE_41PF_SPECIFICATIONS_RIGHT,
  },
  "planer-elite-41cm-cs": {
    parametersTabLabel: "System Specifications",
    dimensionsTabLabel: "Equipment",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: ELITE_41CS_SPECIFICATIONS_LEFT,
    right: ELITE_41CS_SPECIFICATIONS_RIGHT,
  },
  "thicknesser-elite-41th": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: ELITE_41TH_SPECIFICATIONS_LEFT,
    right: ELITE_41TH_SPECIFICATIONS_RIGHT,
  },
  "thicknesser-firma-63th": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: FIRMA_63TH_SPECIFICATIONS_LEFT,
    right: FIRMA_63TH_SPECIFICATIONS_RIGHT,
  },
  "wide-belt-sander-firma-1300ws": {
    parametersTabLabel: "Detailed Machine Parameters",
    parametersTabWidthClass: "w-[340px] whitespace-nowrap",
    left: SANDER_SPECIFICATIONS_LEFT,
    right: SANDER_SPECIFICATIONS_RIGHT,
  },
  "dust-collector-dc2200": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: DC2200_SPECIFICATIONS_LEFT,
    right: DC2200_SPECIFICATIONS_RIGHT,
  },
  "dust-collector-abs5000": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: ABS5000_SPECIFICATIONS_LEFT,
    right: ABS5000_SPECIFICATIONS_RIGHT,
  },
  "dust-collector-rdc3800": {
    parametersTabLabel: "System Specifications",
    parametersTabWidthClass: "w-[280px] whitespace-nowrap",
    left: RDC3800_SPECIFICATIONS_LEFT,
    right: RDC3800_SPECIFICATIONS_RIGHT,
  },
};

const DEFAULT_SPEC_CONFIG: SpecConfig = {
  parametersTabLabel: "Specifications",
  left: SPECIFICATIONS_LEFT,
  right: SPECIFICATIONS_RIGHT,
};

function SpecList({ items }: { items: { label: string; value: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${item.label}-${index}`}
          className="flex items-start gap-3 font-heading text-[16px] leading-[26px] text-[#555555] sm:text-[18px] sm:leading-[27.2px]"
        >
          <span
            className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-[#C0202F]"
            aria-hidden
          />

          <span>
            <span
              className={
                item.label === "Table + T slots" ? "font-normal" : "font-semibold"
              }
            >
              {item.label}
            </span>
            {" :"}
            {item.value ? (
              <span className="font-normal">{` ${item.value}`}</span>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

function DimensionsSpecList({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${item.label}-${index}`}
          className="flex items-start gap-3 font-gothic text-[16px] font-normal leading-[27.2px] text-[#666666]"
        >
          <span
            className="mt-[9px] h-[7px] w-[7px] shrink-0 bg-[#C0202F]"
            aria-hidden
          />

          <span>
            {item.label}
            {" :"}
            {item.value ? ` ${item.value}` : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ColumnTab({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full min-w-0 max-w-[340px] border-b-[3px] px-2 py-3 text-center font-gothic text-[13px] font-normal uppercase tracking-wide text-black transition-all duration-300 sm:px-4 sm:py-4 sm:text-[16px] ${
        isActive
          ? "-mb-px border-b-[#C0202F] bg-[#F0F0F0]"
          : "border-b-transparent bg-transparent hover:bg-[#FAFAFA]"
      }`}
      aria-current={isActive ? "true" : undefined}
    >
      {label}
    </button>
  );
}

export function ProductSpecificationsSection({
  productId = "cnc-router-forte-13cr",
  dimensionsImage = "/media/CNC-13CR-scaled.webp",
  dimensionsHeading = "Machine Dimensions & Working Area",
  dimensionsDescription = "The FORTE 1325CR features a spacious 1300 × 2500 mm working area, ideal for full-size sheet processing. Its robust structural design ensures stability while accommodating large panels and complex machining tasks efficiently.",
}: {
  productId?: string;
  dimensionsImage?: string;
  dimensionsHeading?: string;
  dimensionsDescription?: string;
}) {
  const specConfig =
    SPECIFICATIONS_BY_PRODUCT[productId] ?? DEFAULT_SPEC_CONFIG;
  const [activeTab, setActiveTab] = useState<
    "specifications" | "dimensions"
  >("specifications");

  return (
    <section id="specifications" className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1410px] px-6 lg:px-[100px]">
        <h2 className="text-center font-gothic text-[24px] font-normal leading-tight text-black sm:text-[30px] sm:leading-[30px]">
          Specifications
        </h2>

        <div className="mt-8">
          <div className="grid grid-cols-2 justify-items-center gap-2 lg:gap-20">
            <ColumnTab
              label={specConfig.parametersTabLabel}
              isActive={activeTab === "specifications"}
              onClick={() => setActiveTab("specifications")}
            />

            <ColumnTab
              label={specConfig.dimensionsTabLabel ?? "Dimensions"}
              isActive={activeTab === "dimensions"}
              onClick={() => setActiveTab("dimensions")}
            />
          </div>

          {activeTab === "specifications" ? (
            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-20">
              <SpecList items={specConfig.left} />
              <SpecList items={specConfig.right} />
            </div>
          ) : (
            <div className="mt-8 grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
              <div className="relative w-full">
                <Image
                  src={dimensionsImage}
                  alt={dimensionsHeading}
                  width={600}
                  height={450}
                  className="h-auto w-full object-contain"
                />
              </div>

              <div>
                <h3 className="font-gothic text-[24px] font-normal leading-tight text-black sm:text-[30px] sm:leading-[30px]">
                  {dimensionsHeading}
                </h3>
                {specConfig.dimensionsItems ? (
                  <div className="mt-4">
                    <DimensionsSpecList items={specConfig.dimensionsItems} />
                  </div>
                ) : (
                  <p className="mt-4 whitespace-pre-line font-gothic text-[16px] font-normal leading-[27.2px] text-[#666666]">
                    {dimensionsDescription}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}