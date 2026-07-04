import { MediaImage } from "../components/MediaImage";
import { PageBanner } from "../components/PageBanner";

const PAGE_CONTAINER = "mx-auto w-full max-w-[1410px] px-6 lg:px-0";

const MISSION_PILLARS = [
  {
    title: "Quality Manufacturing",
    desc: "Partnering with trusted manufacturers in China while maintaining strict quality control through expert supervision.",
  },
  {
    title: "Competitive Pricing",
    desc: "Providing machines that match European quality at a fraction of the cost.",
  },
  {
    title: "Global Expansion",
    desc: "Strengthening our presence in the GCC, Gulf, Asia, and beyond through a strong dealership network.",
  },
  {
    title: "Innovation & Reliability",
    desc: "Continuously advancing our technology to meet the ever-changing needs of modern industries.",
  },
];

const HELP_PILLARS = [
  {
    title: "Precision Engineering",
    desc: "Machines that meet strict European CE standards for quality, safety, and durability.",
  },
  {
    title: "Affordability Without Sacrificing Quality",
    desc: "Providing a cost-effective alternative to expensive European brands.",
  },
  {
    title: "Continuous Innovation",
    desc: "Advancing our technology to meet modern industry needs.",
  },
  {
    title: "Global Reach & Accessibility",
    desc: "Expanding Amuzma's dealership network to ensure worldwide access.",
  },
];

function RedSquareBulletList({
  items,
}: {
  items: { title: string; desc: string }[];
}) {
  return (
    <ul className="space-y-0">
      {items.map((item) => (
        <li key={item.title} className="flex items-start">
          <span
            className="mt-[7px] h-[8px] w-[8px] shrink-0 bg-[#C0202F]"
            aria-hidden="true"
          />
          <span className="pl-[5px] font-heading text-[16px] leading-relaxed text-black">
            <span className="font-semibold">{item.title}</span>
            {" - "}
            {item.desc}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function MissionVision() {
  return (
    <div className="bg-white pt-10 lg:pt-16">
      <PageBanner title="MISSION & VISION" />

      {/* Mission & Vision */}
      <section className="bg-white py-10">
        <div
          className={`${PAGE_CONTAINER} grid items-center gap-10 lg:grid-cols-[685px_minmax(0,1fr)] lg:gap-x-6`}
        >
          <div className="flex justify-center lg:-translate-x-[8%] lg:justify-center">
            <MediaImage
              src="/media/Mission-r78y6ts3bxikuf8bjl8sc6xnuv20i7ndarhkf33rug.webp"
              alt="Mission"
              width={300}
              height={300}
              className="h-[220px] w-[220px] object-contain sm:h-[300px] sm:w-[300px]"
            />
          </div>

          <div className="max-w-[630px]">
            <h2 className="mb-4 text-center font-gothic text-[28px] font-normal leading-tight text-black sm:text-[35px] sm:leading-[35px]">
              Mission &amp; Vision
            </h2>

            <p className="mb-10 text-left font-heading text-[16px] font-normal leading-relaxed text-black">
              At Amuzma, we are committed to delivering high-quality, efficient, and
              cost-effective machinery that meets the evolving demands of global
              industries. Our mission is built on five key pillars
            </p>

            <p className="mb-1 font-heading text-[16px] font-normal leading-relaxed text-black">
              Inspired by a 200-year family legacy and driven by his father&apos;s
              pioneering role in the machinery trade, Asif envisions Amuzma as a
              global leader by focusing on:
            </p>

            <div className="mb-10 mt-2">
              <RedSquareBulletList items={MISSION_PILLARS} />
            </div>

            <p className="font-heading text-[16px] font-normal leading-relaxed text-black">
              By combining precision engineering, affordability, and reliability,
              AMUZMA is redefining the future of industrial machinery.
            </p>
          </div>
        </div>
      </section>

      {/* Choose How We Can Help You */}
      <section className="bg-white py-10">
        <div
          className={`${PAGE_CONTAINER} grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_685px] lg:gap-x-6`}
        >
          <div className="max-w-[620px]">
            <h2 className="mb-4 text-center font-gothic text-[28px] font-normal leading-tight text-black sm:text-[35px] sm:leading-[35px]">
              Choose How We Can Help You
            </h2>

            <p className="mb-8 text-left font-heading text-[16px] font-normal leading-relaxed text-black">
              &ldquo;Quality machinery should be accessible, not a luxury.&rdquo;
              -Asif Javed, Founder &amp; CEO of Amuzma
            </p>

            <p className="mb-10 font-heading text-[16px] font-normal leading-relaxed text-black">
              With over 33 years of hands-on experience in the woodworking and
              machinery industry, Asif Javed has witnessed the challenges businesses
              face when choosing between overpriced European machines and
              low-quality Chinese alternatives. His vision for Amuzma is to bridge
              this gap by offering European-standard machines at competitive prices,
              empowering businesses worldwide to access high-performance, durable, and
              precision-engineered machinery without compromise.
            </p>

            <p className="mb-5 font-heading text-[16px] font-normal leading-relaxed text-black">
              Inspired by a 200-year family legacy and driven by his father&apos;s
              pioneering role in the machinery trade, Asif envisions Amuzma as a
              global leader by focusing on:
            </p>

            <div className="mb-10 mt-2">
              <RedSquareBulletList items={HELP_PILLARS} />
            </div>

            <p className="font-heading text-[16px] font-normal leading-relaxed text-black">
              &ldquo;At Amuzma we don&apos;t just manufacture machines; we create
              opportunities for businesses to grow, innovate, and thrive.&rdquo;
            </p>
          </div>

          <div className="order-first flex justify-center lg:order-none lg:-translate-x-[12%] lg:justify-center">
            <MediaImage
              src="/media/Vision-r78ygazi8shnwvgp76qczatzhqc94c9xloatmj1v3s.webp"
              alt="Vision"
              width={300}
              height={300}
              className="h-[220px] w-[220px] object-contain sm:h-[300px] sm:w-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
