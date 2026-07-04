const PAGE_X =
  "px-5 sm:px-8 lg:px-24 xl:px-36 2xl:px-48";

const FOOTER_ALIGN_LEFT = "pl-5 pr-5 sm:pl-6 sm:pr-6 lg:pl-[55px] lg:pr-24 xl:pr-36 2xl:pr-48";

const BRAND_SECTIONS = [
  {
    title: "About Our Brand",
    text: "We are a mainland UAE-based machinery brand committed to delivering high-performance solutions to customers worldwide. With a strong focus on quality, reliability, and value, we serve industries with machines designed for long-term performance and efficiency.",
  },
  {
    title: "Our Engineering Philosophy",
    text: "Our products are developed following German engineering standards, known globally for precision, durability, and innovation. This approach ensures that every machine we offer meets international expectations of quality and performance.",
  },
  {
    title: "Manufacturing Excellence",
    text: "All our machines are precision manufactured at 10+ top factories in China, combining advanced production capabilities with strict quality control. This allows us to deliver reliable machinery at competitive global prices.",
  },
  {
    title: "About the German Flag",
    text: "The German flag used on our machines represents our commitment to German engineering standards and design inspiration. It reflects the level of quality, precision, and performance we aim to deliver in every product.",
  },
  {
    title: "Global Commitment",
    text: "We proudly deliver our machinery to customers worldwide, backed by mainland UAE-based management and support. Our goal is to build long-term partnerships by providing dependable machines and professional service.",
  },
];

export function About() {
  return (
    <div>
      {/* Founder Section */}
      <section className="bg-white pb-12 pt-10 sm:pb-16 sm:pt-16 lg:pt-40 xl:pt-44">
        <div
          className={`mt-8 grid items-start gap-10 lg:mt-10 lg:grid-cols-[1fr_auto] lg:gap-x-8 xl:gap-x-10 ${FOOTER_ALIGN_LEFT}`}
        >
          <div className="min-w-0 lg:mt-[10%]">
            <p className="mb-2 font-gothic text-[20px] font-normal text-black">
              Founder &amp; CEO
            </p>
            <h1 className="mb-6 font-gothic text-[28px] font-normal leading-tight text-[#C0202F] sm:mb-8 sm:text-[35px] sm:leading-[35px]">
              ASIF JAVED
            </h1>

            <p className="font-gothic text-[16px] font-normal leading-relaxed text-[#666666]">
              At AMUZMA, we are not just a machinery brand – we are the continuation
              of a 200-year-old woodworking legacy.
              <br />
              Our journey began with generations of master carpenters, evolving into
              the machinery business when Muhammad Yousaf Javed, father of our founder
              Asif Javed, pioneered the trade of European woodworking machinery in
              Pakistan more than 40 years ago.
              <br />
              Under his father&apos;s supervision, Asif Javed spent 24 years learning
              the industry from the ground up, mastering furniture manufacturing,
              machine operations, troubleshooting, and sales. This foundation of
              hands-on knowledge was built through years of practical experience and
              mentorship.
            </p>
          </div>

          <div className="flex shrink-0 justify-center lg:-translate-x-[10%] lg:justify-start lg:pl-[10%]">
            <img
              src="/media/New-Project-57.webp"
              alt="Asif Javed – Founder & CEO"
              className="h-auto w-full max-w-[609px] object-contain lg:max-w-[668px]"
            />
          </div>
        </div>

        <p className={`mt-4 font-heading text-[16px] font-normal leading-relaxed text-[#666666] ${PAGE_X}`}>
          In 2016, Asif Javed moved to Dubai, UAE, where his independent journey
          began. Since then, he has spent nearly a decade selling machinery across
          the UAE, Oman, and Pakistan, gaining valuable insights into customer
          requirements, market trends, pricing structures, and the strengths and
          weaknesses of European, Chinese, and Turkish machinery brands.
          <br />
          During this period, Asif Javed founded AMUZMA, combining the knowledge
          inherited from his family&apos;s legacy with his own market experience to
          create a brand focused on delivering practical, reliable, and
          high-performance machinery solutions.
          <br />
          Today, Asif Javed brings almost 34 years of hands-on experience to every
          AMUZMA machine. His expertise comes from real workshops, real production
          environments, real challenges, and real solutions. This experience allows
          AMUZMA to understand what truly works on the factory floor.
        </p>
      </section>

      {/* About Our Brand – Global Commitment */}
      <section
        className="bg-cover bg-center bg-no-repeat py-16"
        style={{
          backgroundImage:
            "url('/media/abstract-blue-geometric-shapes-background-scaled-1.webp')",
        }}
      >
        <div className={`space-y-10 ${FOOTER_ALIGN_LEFT}`}>
          {BRAND_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 font-gothic text-[22px] font-normal leading-[22px] text-[#C0202F]">
                {section.title}
              </h2>
              <p className="max-w-[847px] font-gothic text-[16px] font-normal leading-relaxed text-[#666666]">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
