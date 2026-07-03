const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

type WarrantySection = {
  title: string;
  intro?: string;
  items?: string[];
  outro?: string;
  lines?: string[];
};

const SECTIONS: WarrantySection[] = [
  {
    title: "STANDARD WARRANTY COVERAGE",
    intro:
      "Every AMUZMA machine comes with a comprehensive warranty covering manufacturing defects.",
  },
  {
    title: "COVERED:",
    items: [
      "Structural components",
      "Electrical systems",
      "CNC control system",
      "Software bugs",
    ],
  },
  {
    title: "WARRANTY PERIOD",
    items: [
      "12 months from delivery for manufacturing defects.",
      "Extended warranty available – contact Our sales representative.",
    ],
  },
  {
    title: "WHAT IS NOT COVERED",
    items: [
      "Wear parts: blades, belts, bearings, brushes, filters",
      "Consumables: glue, edge banding tape, cutting tools",
      "Damage from: improper use, overload, lack of maintenance, unauthorized modifications, voltage mismatch, non-AMUZMA parts",
    ],
  },
  {
    title: "HOW TO CLAIM",
    items: [
      "Report in writing within 4 days of discovering the defect",
      "Include photos/videos showing the issue",
      "Our team responds within 5 business days",
      "We ship replacement parts at no charge – YOU pay shipping cost",
      "Return defective part to us (we pay return shipping for valid claims)",
    ],
    outro:
      "Remote diagnostics available free during warranty via internet connection.",
  },
  {
    title: "SPARE PARTS GUARANTEE",
    intro:
      "AMUZMA guarantees spare parts availability for 5 years from model discontinuation.",
  },
  {
    title: "AUTHORIZED SERVICE",
    lines: [
      "AMUZMA Machinery Mainland UAE Company",
      "Support: support@amuzmamachinery.com",
      "Parts: parts@amuzmamachinery.com",
      "Landline # : +971 4547 8088",
    ],
  },
];

function WarrantyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-0">
      {items.map((item) => (
        <li
          key={item}
          className="font-gothic text-[17px] font-normal leading-relaxed text-black"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Warranties() {
  return (
    <div className="bg-white pb-12 pt-10 sm:pb-16 sm:pt-16 lg:pt-24 xl:pt-28">
      <div className={PAGE_CONTAINER}>
        <h1 className="mb-6 font-heading text-[28px] font-bold uppercase leading-tight text-black sm:mb-8 sm:text-[35px] sm:leading-[35px]">
          Warranties
        </h1>

        <div className="space-y-8">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="mb-2 font-heading text-[20px] font-bold uppercase leading-relaxed text-black">
                {section.title}
              </h2>

              {section.intro ? (
                <p className="font-gothic text-[17px] font-normal leading-relaxed text-black">
                  {section.intro}
                </p>
              ) : null}

              {section.items ? <WarrantyList items={section.items} /> : null}

              {section.outro ? (
                <p className="mt-2 font-gothic text-[17px] font-normal leading-relaxed text-black">
                  {section.outro}
                </p>
              ) : null}

              {section.lines ? (
                <div className="space-y-0">
                  {section.lines.map((line) => (
                    <p
                      key={line}
                      className="font-gothic text-[17px] font-normal leading-relaxed text-black"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
