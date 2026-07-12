"use client";

import { useState } from "react";
import { MediaImage as Image } from "./MediaImage";
import {
  SAW_OPERATIONAL_HEADINGS,
  SAW_OPERATIONAL_TABS,
} from "../data/sawProducts";

type OperationalTab = {
  label: string;
  heading: string;
  description: string;
  icon: string;
  image: string;
};

const OPERATIONAL_TABS_13CR: OperationalTab[] = [
  {
    label: "Wood & Panel Materials",
    heading: "Wood & Panel Materials",
    description:
      "The machine performs smooth and high-speed cutting with consistent feed rates. Its advanced motion control system ensures accurate tool paths and efficient material processing.",
    icon: "/media/New-Project-9.webp",
    image: "/media/Wood-Panel-Materials-in-cnc-router.webp",
  },
  {
    label: "Plastic Materials",
    heading: "Plastic Materials",
    description:
      "Equipped with precision linear guides and servo motors, the router maintains stable and controlled movement across X, Y, and Z axes for accurate carving and shaping.",
    icon: "/media/New-Project-10.webp",
    image: "/media/Plastic-Materials-CNC-router.webp",
  },
  {
    label: "Composite Materials",
    heading: "Composite Materials",
    description:
      "The Forte 13CR cuts all commercially available plastics in any desired form. The machine can easily handle even complex composite materials.",
    icon: "/media/New-Project-11.webp",
    image: "/media/Composite-Materials-in-cnc-router-1.webp",
  },
  {
    label: "Aluminium",
    heading: "Aluminium",
    description:
      "Designed for industrial use, the machine supports long working hours with minimal vibration, ensuring stable output and reliable performance in continuous production environments.",
    icon: "/media/New-Project-12.webp",
    image: "/media/aluminium.webp",
  },
];

const OPERATIONAL_TABS_15CR: OperationalTab[] = [
  {
    label: "Wood & Panel Materials",
    heading: "Wood & Panel Materials",
    description:
      "Designed for industrial use, the machine supports long working hours with minimal vibration, ensuring stable output and reliable performance in continuous production environments.",
    icon: "/media/New-Project-9.webp",
    image: "/media/Wood-Panel-Materials-in-cnc-router.webp",
  },
  {
    label: "Plastic Materials",
    heading: "Plastic Materials",
    description:
      "Equipped with precision linear guides and servo motors, the router maintains stable and controlled movement across X, Y, and Z axes for accurate carving and shaping.",
    icon: "/media/New-Project-10.webp",
    image: "/media/Plastic-Materials-CNC-router.webp",
  },
  {
    label: "Composite Materials",
    heading: "Composite Materials",
    description:
      "The FORTE 15CR efficiently cuts wood, MDF, plywood, acrylic, and composites. Spindle speed adjustment allows optimized performance for different materials.",
    icon: "/media/New-Project-11.webp",
    image: "/media/Composite-Materials-in-cnc-router-1.webp",
  },
  {
    label: "Aluminium",
    heading: "Aluminium",
    description:
      "Designed for industrial use, the machine supports long working hours with minimal vibration, ensuring stable output and reliable performance in continuous production environments.",
    icon: "/media/New-Project-12.webp",
    image: "/media/aluminium.webp",
  },
];

const SANDER_OPERATIONAL_IMAGE =
  "/media/wide_belt_sander_21.jpg-removebg-preview.webp";

const DC2200_OPERATIONAL_IMAGE =
  "/media/Dust-Collector-DC2200-1024x684-removebg-preview.webp";

const OPERATIONAL_TABS_DC2200: OperationalTab[] = [
  {
    label: "Reliable",
    heading: "Production",
    description:
      "The Dust Collector DC2200 is designed to provide powerful and efficient dust extraction for clean and safe workshop environments. With strong suction performance and reliable filtration, it ensures improved air quality and enhanced machine efficiency. Built for durability and continuous operation, DC2200 supports healthier and more productive workspaces.",
    icon: "/media/New-Project-9.webp",
    image: DC2200_OPERATIONAL_IMAGE,
  },
  {
    label: "Performance",
    heading: "Performance",
    description:
      "Built for industrial reliability, the Dust Collector DC2200 effectively removes fine dust and debris, ensuring improved air quality and smoother machine performance. Ideal for professional woodworking environments.",
    icon: "/media/New-Project-10.webp",
    image: DC2200_OPERATIONAL_IMAGE,
  },
  {
    label: "Efficiency",
    heading: "Stable Daily Production",
    description:
      "Designed to enhance workplace safety, the DC2200 offers powerful dust control with stable and efficient operation. Its durable construction ensures long-term performance in demanding workshop conditions.",
    icon: "/media/New-Project-11.webp",
    image: DC2200_OPERATIONAL_IMAGE,
  },
  {
    label: "Production",
    heading: "Precision Driven Process",
    description:
      "The DC2200 delivers high-performance dust extraction to maintain a clean and efficient workspace. Engineered for strong airflow and consistent suction, it helps protect both equipment and operators during daily operations.",
    icon: "/media/New-Project-12.webp",
    image: DC2200_OPERATIONAL_IMAGE,
  },
];

const ABS5000_OPERATIONAL_IMAGE =
  "/media/DSC_2375-removebg-preview-2.webp";

const OPERATIONAL_TABS_ABS5000: OperationalTab[] = [
  {
    label: "Consistent",
    heading: "Production",
    description:
      "The ABS5000 delivers stable and powerful suction throughout operation, ensuring continuous dust removal without interruption in workflow.",
    icon: "/media/New-Project-9.webp",
    image: ABS5000_OPERATIONAL_IMAGE,
  },
  {
    label: "Energy",
    heading: "Energy",
    description:
      "The ABS5000 Dust Collector is a powerful industrial dust extraction system designed to remove dust, wood chips, and fine particles from machines and work areas. It ensures clean air, safe working conditions, and efficient machine performance. It is ideal for woodworking workshops, manufacturing plants.",
    icon: "/media/New-Project-10.webp",
    image: ABS5000_OPERATIONAL_IMAGE,
  },
  {
    label: "Efficiency",
    heading: "Motor Power and Performance",
    description:
      "The ABS5000 is equipped with a powerful 3 HP (2200W) motor that delivers strong suction performance up to 5000 m³/h. This high suction capacity ensures efficient dust removal and smooth workflow in demanding industrial environments.",
    icon: "/media/New-Project-11.webp",
    image: ABS5000_OPERATIONAL_IMAGE,
  },
  {
    label: "Machine",
    heading: "Machine Connectivity and Inlet Design",
    description:
      "The ABS5000 supports multiple machine connections with 4 outlet ports (Ø100 mm each) and a main inlet diameter of 200 mm. This allows simultaneous dust extraction from several machines, improving productivity and efficiency.",
    icon: "/media/New-Project-12.webp",
    image: ABS5000_OPERATIONAL_IMAGE,
  },
];

const RDC3800_OPERATIONAL_IMAGE = "/media/Dusy-Collector-RDC3800-1.webp";

const OPERATIONAL_TABS_RDC3800: OperationalTab[] = [
  {
    label: "Consistent",
    heading: "Easy Setup and Mobility",
    description:
      "The RDC3800 is designed for quick installation and effortless movement around your workshop. Its compact size and built-in casters allow you to position it wherever extraction is needed, saving time and effort.",
    icon: "/media/New-Project-9.webp",
    image: RDC3800_OPERATIONAL_IMAGE,
  },
  {
    label: "Energy",
    heading: "Versatile Tool Compatibility",
    description:
      "Whether you're using a table saw, planer, or sander, the RDC3800 adapts to multiple machines. Its efficient suction ensures consistent dust removal, keeping all connected tools clean and operating at peak performance.",
    icon: "/media/New-Project-10.webp",
    image: RDC3800_OPERATIONAL_IMAGE,
  },
  {
    label: "Efficiency",
    heading: "Simple Maintenance and Collection",
    description:
      "Maintenance is straightforward with a user-friendly collection system and accessible filters. Emptying dust bins and cleaning or replacing filters is fast and easy, minimizing downtime and ensuring uninterrupted daily operations.",
    icon: "/media/New-Project-11.webp",
    image: RDC3800_OPERATIONAL_IMAGE,
  },
  {
    label: "Machine",
    heading: "Continuous and Reliable Operation",
    description:
      "Built with durable steel construction and high-efficiency components, the RDC3800 delivers dependable performance every day. It handles extended use without losing suction power, ensuring consistent extraction during long or multi-tool work sessions.",
    icon: "/media/New-Project-12.webp",
    image: RDC3800_OPERATIONAL_IMAGE,
  },
];

const OPERATIONAL_TABS_E5: OperationalTab[] = [
  {
    label: "Automatic",
    heading: "Automatic Feeding",
    description:
      "Ensures smooth and consistent panel movement through a precision feeding system that maintains alignment and stability. The synchronized drive prevents misfeeds and surface damage while supporting various panel sizes. This steady transport improves edge quality, reduces waste, and keeps production running efficiently without interruptions.",
    icon: "/media/New-Project-9.webp",
    image: "/media/Amuzma-E5-1-1-1-1.webp",
  },
  {
    label: "Trimming",
    heading: "Precision Trimming",
    description:
      "Delivers accurate edge cutting for clean and professional results.",
    icon: "/media/New-Project-10.webp",
    image: "/media/Amuzma-E5-2-1-1-1.webp",
  },
  {
    label: "Fast Heat-Up",
    heading: "UnderStanding Workflow",
    description:
      "Engineered for extended production cycles, this machine delivers consistent, stable, and dependable performance throughout demanding workloads. Its robust construction and precision components ensure smooth operation with minimal interruptions. Designed to handle high-volume tasks efficiently, it maintains accuracy and quality .",
    icon: "/media/New-Project-11.webp",
    image: "/media/Amuzma-E5-3-1-1.webp",
  },
  {
    label: "Workflow",
    heading: "Continuous Workflow",
    description:
      "Built for long production runs, this machine delivers stable and reliable performance during continuous operations. Its durable construction ensures smooth functioning with minimal downtime. Designed for high-volume tasks, it maintains consistent accuracy, quality, and efficiency throughout demanding manufacturing cycles.",
    icon: "/media/New-Project-12.webp",
    image: "/media/Amuzma-E5-4-1-1.webp",
  },
];

const OPERATIONAL_TABS_P6: OperationalTab[] = [
  {
    label: "Reliable",
    heading: "Superior Edge Performance",
    description:
      "Elite P6 delivers smooth, precise, and durable edge bonding for professional woodworking applications. Designed for consistent operation and clean finishing, it enhances productivity while ensuring high-quality results in every project.",
    icon: "/media/New-Project-9.webp",
    image: "/media/Amuzma-E5-1-1-1-1.webp",
  },
  {
    label: "Precision",
    heading: "Production",
    description:
      "Engineered for accurate edge application and clean trimming, Elite P6 ensures seamless results. It enhances product appearance while maintaining consistent performance throughout daily operations.",
    icon: "/media/New-Project-10.webp",
    image: "/media/Amuzma-E5-2-1-1-1.webp",
  },
  {
    label: "Efficiency",
    heading: "Durable Performance",
    description:
      "Designed with heavy-duty components and advanced bonding technology, Elite P6 delivers long-lasting reliability and consistent edge quality in demanding workshop environments.",
    icon: "/media/New-Project-11.webp",
    image: "/media/Amuzma-E5-3-1-1.webp",
  },
  {
    label: "Production",
    heading: "Reliable Productivity",
    description:
      "Built for stable feeding and smooth operation, Elite P6 supports faster workflow with reduced rework. It helps workshops achieve efficient production with professional-quality output.",
    icon: "/media/New-Project-12.webp",
    image: "/media/Amuzma-E5-4-1-1.webp",
  },
];

const P100T_OPERATIONAL_IMAGE_1 =
  "/media/185573b1-4a69-419c-9489-394dab282514-1.webp";

const OPERATIONAL_TABS_P100T: OperationalTab[] = [
  {
    label: "Reliable",
    heading: "Superior Edge Performance",
    description:
      "Veneer Door Press P 100T delivers smooth, precise, and durable edge bonding for professional woodworking applications. Designed for consistent operation and clean finishing, it enhances productivity while ensuring high-quality results in every project.",
    icon: "/media/New-Project-9.webp",
    image: P100T_OPERATIONAL_IMAGE_1,
  },
  {
    label: "Precision",
    heading: "Production",
    description:
      "Engineered for accurate edge application and clean trimming, Veneer Door Press P 100T ensures seamless results. It enhances product appearance while maintaining consistent performance throughout daily operations.",
    icon: "/media/New-Project-10.webp",
    image: "/media/0d0fd8f5-09ab-4521-a662-ca89776bedb0.webp",
  },
  {
    label: "Efficiency",
    heading: "Durable Performance",
    description:
      "Designed with heavy-duty components and advanced bonding technology, Veneer Door Press P 100T delivers long-lasting reliability and consistent edge quality in demanding workshop environments.",
    icon: "/media/New-Project-11.webp",
    image: "/media/c07cc7f1-09d0-46cb-a0c8-04a6109b91af-1-1.webp",
  },
  {
    label: "Production",
    heading: "Reliable Productivity",
    description:
      "Built for stable feeding and smooth operation, Veneer Door Press P 100T supports faster workflow with reduced rework. It helps workshops achieve efficient production with professional-quality output.",
    icon: "/media/New-Project-12.webp",
    image: P100T_OPERATIONAL_IMAGE_1,
  },
];

const OPERATIONAL_TABS_C7: OperationalTab[] = [
  {
    label: "Gluing",
    heading: "Adhesive Application",
    description:
      "Applies hot melt adhesive evenly on panel edges, ensuring strong bonding and long-lasting edge durability for furniture components.",
    icon: "/media/New-Project-9.webp",
    image: "/media/Amuzma-E5-3-1-opt.webp",
  },
  {
    label: "Trimming",
    heading: "Edge Cutting",
    description:
      "Precisely trims excess edge band material, delivering clean and smooth panel sides with professional finishing quality.",
    icon: "/media/New-Project-10.webp",
    image: "/media/Amuzma-E5-4-1-opt.webp",
  },
  {
    label: "Scraping",
    heading: "Surface Refining",
    description:
      "Removes minor glue residues and imperfections, enhancing edge smoothness and improving final surface appearance.",
    icon: "/media/New-Project-11.webp",
    image: "/media/Amuzma-E5-2-1.webp",
  },
  {
    label: "Buffing",
    heading: "Polish Finish",
    description:
      "Polishes the edge surface to provide a clean, glossy, and refined look for high-quality furniture production.",
    icon: "/media/New-Project-12.webp",
    image: "/media/Amuzma-E5-5-1.webp",
  },
];

const OPERATIONAL_TABS_30SM: OperationalTab[] = [
  {
    label: "Accurancy",
    heading: "Power and Control Combined",
    description:
      "Built with rugged construction and quality components, the Elite 30SM supports continuous workshop use. Its robust design ensures long-lasting performance, minimal vibration, and dependable results over extended production cycles.",
    icon: "/media/New-Project-9.webp",
    image: "/media/material_massivholz7.webp",
  },
  {
    label: "Performance",
    heading: "Production",
    description:
      "Equipped with powerful spindle drive and advanced control systems, Elite 30SM increases productivity and consistency. It handles a wide range of materials efficiently, making it ideal for batch production and complex shaping tasks.",
    icon: "/media/Wood-and-Panel-Material.webp",
    image: "/media/frist-one-J4-1.webp",
  },
  {
    label: "Efficiency",
    heading: "Versatility",
    description:
      "Elite 30SM supports various cutter heads and woodworking tasks, making it suitable for furniture production, decorative mouldings, and customized shaping projects with high precision and efficiency.",
    icon: "/media/Wood-Components-1.webp",
    image: "/media/frist-one-J3-1.webp",
  },
  {
    label: "Stability",
    heading: "Reliable Productivity",
    description:
      "Designed with a heavy-duty frame, the machine minimizes vibration and ensures accurate machining, providing clean finishes and reliable operation even during continuous workshop use.",
    icon: "/media/Common-operations.webp",
    image: "/media/frist-one-J1-1.webp",
  },
];

const OPERATIONAL_TABS_41PF: OperationalTab[] = [
  {
    label: "Solid Wood",
    heading: "Solid Wood",
    description:
      "Elite 41PF allows quick setup with adjustable cutting depth and fence alignment. Operators can easily configure the machine for various wood sizes, ensuring precise planing and consistent results every time.",
    icon: "/media/New-Project-9.webp",
    image: "/media/Solid-Wood-planer-working.webp",
  },
  {
    label: "Wood Components",
    heading: "Wood Components",
    description:
      "Equipped with high-quality feed rollers, Elite 41PF ensures smooth and consistent wood movement through the planer. This reduces tear-out, minimizes surface defects, and guarantees uniform thickness across all workpieces.",
    icon: "/media/Wood-Components-1.webp",
    image: "/media/Wood-Components-planer-working.webp",
  },
  {
    label: "Machine Operations",
    heading: "Machine Operations",
    description:
      "The planer features built-in safety devices, including emergency stop and protective guards, ensuring operator protection during operation. Safe handling reduces accidents while maintaining efficient workflow in professional workshops.",
    icon: "/media/Common-operations.webp",
    image: "/media/Solid-Wood-planer-working.webp",
  },
];

const OPERATIONAL_TABS_41CS: OperationalTab[] = [
  {
    label: "Solid Wood",
    heading: "Solid Wood",
    description:
      "Elite 41CS / CM ensures precise planing and thickness calibration, delivering smooth surfaces and consistent material dimensions for professional woodworking applications.",
    icon: "/media/New-Project-9.webp",
    image: "/media/Solid-Wood-planer-working.webp",
  },
  {
    label: "Wood Components",
    heading: "Wood Components",
    description:
      "Combining planing and thicknessing in one unit, it saves workshop space while maintaining high productivity and reliable machining performance.",
    icon: "/media/Wood-Components-1.webp",
    image: "/media/Wood-Components-planer-working.webp",
  },
  {
    label: "Machine Operations",
    heading: "Machine Operations",
    description:
      "Constructed with a heavy-duty frame and quality components, Elite 41CS / CM ensures long-term reliability and consistent output in demanding workshop environments.",
    icon: "/media/Common-operations.webp",
    image: "/media/Solid-Wood-planer-working.webp",
  },
];

const OPERATIONAL_TABS_41TH: OperationalTab[] = [
  {
    label: "Accuracy",
    heading: "Heavy-Duty Performance",
    description:
      "Built with a powerful motor and rigid construction, the Elite 41TH delivers consistent cutting strength and reliable operation, making it ideal for demanding woodworking environments and continuous production tasks.",
    icon: "/media/New-Project-9.webp",
    image: "/media/Thicknesser-25-Elite-41th-2.webp",
  },
  {
    label: "Precision",
    heading: "Robust Cutter System",
    description:
      "Equipped with a high-speed cutter block, the Elite 41TH provides clean, sharp cuts with reduced vibration, improving surface quality and enhancing overall machining efficiency.",
    icon: "/media/New-Project-10.webp",
    image: "/media/Thicknesser-25-Elite-41th-4.webp",
  },
  {
    label: "Stablity",
    heading: "Stable Work Support",
    description:
      "Featuring a strong and well-balanced table structure, it ensures stable material feeding, minimizes movement during operation, and improves safety and accuracy during thicknessing processes.",
    icon: "/media/New-Project-11.webp",
    image: "/media/Thicknesser-25-Elite-41th-1-1.webp",
  },
  {
    label: "Supported",
    heading: "Extended Table Support",
    description:
      "Optional extended infeed and outfeed tables provide enhanced support for longer workpieces, ensuring stable feeding, improved accuracy.",
    icon: "/media/New-Project-12.webp",
    image: "/media/Thicknesser-25-Elite-41th-3-1.webp",
  },
];

const OPERATIONAL_TABS_63TH: OperationalTab[] = [
  {
    label: "Accuracy",
    heading: "Spiral Cutterhead",
    description:
      "Upgrade to a spiral cutterhead for smoother cutting performance, reduced noise levels, and longer tool life. Ideal for achieving superior surface finish with minimal tear-out on hardwood.",
    icon: "/media/New-Project-9.webp",
    image: "/media/Thicknesser-25-Firma-63TH-J1.webp",
  },
  {
    label: "Versatility",
    heading: "Digital Thickness Display",
    description:
      "A digital readout system allows precise thickness measurement and easy adjustments, improving accuracy and reducing setup time for repeated or high-volume production tasks.",
    icon: "/media/New-Project-10.webp",
    image: "/media/Thicknesser-25-Firma-63TH-J2.webp",
  },
  {
    label: "Stablity",
    heading: "Extended Table Support",
    description:
      "Constructed with a heavy-duty frame and quality components, Elite 41CS / CM ensures long-term reliability and consistent output in demanding workshop environments.",
    icon: "/media/New-Project-11.webp",
    image: "/media/Thicknesser-25-Firma-63TH-J3.webp",
  },
  {
    label: "Performance",
    heading: "Power & Precision",
    description:
      "Efficient material removal capability reduces processing time while maintaining smooth finishes, improving overall workshop productivity.",
    icon: "/media/New-Project-12.webp",
    image: "/media/Thicknesser-25-Firma-63TH-J3.webp",
  },
];

const OPERATIONAL_TABS_1300WS: OperationalTab[] = [
  {
    label: "Preparation",
    heading: "Material Preparation",
    description:
      "Place clean, accurately sized wood panels on the infeed conveyor. Remove dust and debris beforehand. Adjust the thickness setting to match the material for precise sanding, uniform removal, and consistent finishing results.",
    icon: "/media/New-Project-9.webp",
    image: SANDER_OPERATIONAL_IMAGE,
  },
  {
    label: "Setup",
    heading: "Machine Setup",
    description:
      "Adjust the sanding belt tension, thickness setting, and feed speed based on material type and finish requirements. Ensure all safety guards are secured and the dust extraction system operates properly before starting.",
    icon: "/media/New-Project-10.webp",
    image: SANDER_OPERATIONAL_IMAGE,
  },
  {
    label: "Sanding",
    heading: "Sanding Operation",
    description:
      "Start the machine and feed the material through the sanding belt. The wide belt ensures even pressure and consistent surface finishing across the entire width.",
    icon: "/media/New-Project-11.webp",
    image: SANDER_OPERATIONAL_IMAGE,
  },
  {
    label: "Inspection",
    heading: "Inspection & Finishing",
    description:
      "After sanding, inspect the surface for smoothness and uniformity. Make fine adjustments if needed and proceed to the next finishing or coating stage.",
    icon: "/media/New-Project-12.webp",
    image: SANDER_OPERATIONAL_IMAGE,
  },
];

const OPERATIONAL_TABS_BY_PRODUCT: Record<string, OperationalTab[]> = {
  ...SAW_OPERATIONAL_TABS,
  "cnc-router-forte-13cr": OPERATIONAL_TABS_13CR,
  "cnc-router-forte-15cr": OPERATIONAL_TABS_15CR,
  "edge-banding-e5": OPERATIONAL_TABS_E5,
  "edge-banding-p6": OPERATIONAL_TABS_P6,
  "veneer-door-press-p-100t": OPERATIONAL_TABS_P100T,
  "edge-banding-c7": OPERATIONAL_TABS_C7,
  "spindle-moulder-elite-30sm": OPERATIONAL_TABS_30SM,
  "planer-elite-41pf": OPERATIONAL_TABS_41PF,
  "planer-elite-41cm-cs": OPERATIONAL_TABS_41CS,
  "thicknesser-elite-41th": OPERATIONAL_TABS_41TH,
  "thicknesser-firma-63th": OPERATIONAL_TABS_63TH,
  "wide-belt-sander-firma-1300ws": OPERATIONAL_TABS_1300WS,
  "dust-collector-dc2200": OPERATIONAL_TABS_DC2200,
  "dust-collector-abs5000": OPERATIONAL_TABS_ABS5000,
  "dust-collector-rdc3800": OPERATIONAL_TABS_RDC3800,
};

const OPERATIONAL_HEADING_BY_PRODUCT: Record<string, string> = {
  ...SAW_OPERATIONAL_HEADINGS,
  "edge-banding-p6": "Operational Excellence",
  "veneer-door-press-p-100t": "Operational Excellence",
  "edge-banding-c7": "Operational Excellence",
  "planer-elite-41pf": "Operational Excellence",
  "planer-elite-41cm-cs": "Operational Excellence",
  "thicknesser-elite-41th": "Operational Excellence",
  "thicknesser-firma-63th": "Operational Excellence",
  "spindle-moulder-elite-30sm": "Precision Spindle Machining",
  "dust-collector-dc2200": "Operational Excellence",
  "dust-collector-rdc3800": "Operational Excellence",
};

export function ProductOperationalSection({
  productId = "cnc-router-forte-13cr",
}: {
  productId?: string;
}) {
  const tabs =
    OPERATIONAL_TABS_BY_PRODUCT[productId] ?? OPERATIONAL_TABS_13CR;
  const sectionHeading =
    OPERATIONAL_HEADING_BY_PRODUCT[productId] ?? "Operational";
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabs[activeTab];

  return (
    <section id="operational" className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1410px] px-6 lg:px-[100px]">
        <h2 className="text-center font-gothic text-[24px] font-normal leading-tight text-black sm:text-[30px] sm:leading-[30px]">
          {sectionHeading}
        </h2>

        <div className="mt-8 bg-[#F4F4F4] px-4 py-6 sm:px-10 sm:py-10 lg:px-20 lg:py-14">
          <div className="grid grid-cols-2 border-b border-[#DDDDDD] lg:grid-cols-4">
            {tabs.map((tab, index) => {
              const isActive = index === activeTab;

              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col items-center justify-center border-b-[3px] px-2 pt-4 pb-3 transition-colors sm:px-4 sm:pt-5 sm:pb-[18px] ${
                    isActive
                      ? "-mb-px border-b-[#C0202F] bg-[#E6E6E6]"
                      : "border-b-transparent bg-transparent"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <Image
                    src={tab.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="mb-2 h-10 w-10 object-contain sm:mb-3 sm:h-12 sm:w-12"
                  />
                  <span
                    className={`text-center font-heading text-[13px] font-normal leading-snug sm:text-[15px] ${
                      isActive ? "text-[#222222]" : "text-[#666666]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[1024/640] w-full">
              <Image
                key={currentTab.image}
                src={currentTab.image}
                alt={currentTab.heading}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>

            <div>
              <h3 className="font-heading text-[24px] font-bold leading-tight text-[#666666] sm:text-[30px]">
                {currentTab.heading}
              </h3>
              <p className="mt-4 font-heading text-[16px] font-medium leading-[27.2px] text-[#666666]">
                {currentTab.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
