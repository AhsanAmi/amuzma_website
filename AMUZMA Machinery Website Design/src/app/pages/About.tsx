export function About() {
  return (
    <div>
      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left – bio */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Founder &amp; CEO</p>
              <h1 className="text-gray-900 mb-6" style={{ fontSize: "2.25rem", fontWeight: 800 }}>ASIF JAVED</h1>

              <p className="text-gray-600 leading-relaxed mb-4">
                At AMUZMA, we are not just a machinery brand — we are the culmination of a 30-year-old woodworking legacy.
                Our journey began with generations of family experience in the woodworking industry, where our Founder Asif Javed spent years entering the industry from the ground up,
                pioneering the trade of European woodworking machinery in Pakistan more than 40 years ago.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under his father's tutelage, Asif Javed spent 25 years learning the industry from the ground up, mastering furniture manufacturing, machine operation,
                troubleshooting, and sales. This foundation of hands-on knowledge was built through years of practical experience and mentorship.
              </p>

              <div className="w-full h-px bg-[#E5E5E5] my-6" />

              <p className="text-gray-600 leading-relaxed mb-4">
                In 2015, Asif Javed moved to Dubai UAE, where his independent journey began. Since then, he has spent nearly a decade selling machinery across the UAE, Oman, and Pakistan — gaining valuable insights into customer requirements, market trends, pricing structures, and the strengths and weaknesses of European, Chinese, and Turkish machinery brands.
                During this period, Asif Javed founded AMUZMA, combining the knowledge inherited from his family's legacy with his own market experience to create a brand focused on delivering practical, reliable, and high-performance machinery solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In 2019, Asif Javed moved to Qatar &amp; UAE, where his independent journey began. Since then, he has spent nearly a decade selling machines across the UAE, Oman, and Pakistan — gaining valuable insights into customer requirements, market trends, pricing structures, and the strengths and weaknesses of European, Chinese, and Turkish machinery brands.
                During this period, Asif Javed founded AMUZMA, combining the knowledge inherited from his family's legacy with his own market experience to create a brand focused on delivering practical, reliable, and high-performance machinery solutions.
              </p>

              <div className="w-full h-px bg-[#E5E5E5] my-6" />

              <p className="text-gray-600 leading-relaxed">
                Today, Asif Javed brings 30+ years of hands-on experience to every AMUZMA machine. His expertise comes from first-hand workshops, real challenges, and real solutions. This experience allows AMUZMA to understand what truly works on the factory floor.
              </p>
            </div>

            {/* Right – portrait */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-[#F5F5F5] rounded-full scale-110 -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80"
                  alt="Asif Javed – Founder & CEO"
                  className="w-72 h-80 object-cover object-top rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -left-4 bg-[#B5122B] text-white px-5 py-3 rounded shadow-md">
                  <p className="text-sm font-bold">Asif Javed</p>
                  <p className="text-xs opacity-80">Founder &amp; CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Brand */}
      <section className="py-14 bg-[#F5F5F5]">
        <div className="max-w-[1320px] mx-auto px-6">
          <SectionHeading title="About Our Brand" />
          <p className="text-gray-600 leading-relaxed max-w-3xl mt-6">
            We are a customer-first brand committed to delivering high-performance solutions to customers worldwide. With a strong focus on quality, reliability, and value, we serve industries with machines designed for long-term performance and efficiency.
          </p>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="py-14 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Our Engineering Philosophy" left />
              <p className="text-gray-600 leading-relaxed mt-6">
                Our products are developed following German engineering mindsets, known globally for precision, durability, and innovation. This standard ensures that every machine we offer meets international expectations of quality and performance.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
              alt="Engineering Philosophy"
              className="w-full h-64 object-cover rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-14 bg-[#F5F5F5]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
              alt="Manufacturing Excellence"
              className="w-full h-64 object-cover rounded shadow"
            />
            <div>
              <SectionHeading title="Manufacturing Excellence" left />
              <p className="text-gray-600 leading-relaxed mt-6">
                All our machines are precision-manufactured at tier-top facilities in China, combining advanced production capabilities with strict quality control. This allows us to deliver reliable machinery at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* German Flag / Standards */}
      <section className="py-14 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 max-w-3xl">
          <SectionHeading title="The German Flag" />
          <p className="text-gray-600 leading-relaxed mt-6">
            The German flag on our machines represents our commitment to German engineering standards and design inspiration. It reflects the level of quality, precision, and performance we aim to deliver in every product.
          </p>
        </div>
      </section>

      {/* Global Commitment */}
      <section className="py-14 bg-[#F5F5F5] relative overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute border border-gray-400 rounded-full"
              style={{
                width: `${200 + i * 120}px`,
                height: `${200 + i * 120}px`,
                right: `-${100 + i * 60}px`,
                top: `50%`,
                transform: "translateY(-50%)",
              }}
            />
          ))}
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6">
          <SectionHeading title="Global Commitment" />
          <p className="text-gray-600 leading-relaxed mt-6 max-w-3xl">
            We proudly deliver our machinery to customers worldwide, backed by resilient after-sales management and support. Our goal is to build long-term partnerships by providing dependable machines and professional service.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { value: "30+", label: "Years Experience" },
              { value: "1,000+", label: "Customers Worldwide" },
              { value: "100%", label: "Quality Assured" },
              { value: "12+", label: "Machine Series" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded p-6 text-center shadow-sm">
                <div className="text-[#B5122B] mb-1" style={{ fontSize: "2.5rem", fontWeight: 800 }}>{s.value}</div>
                <p className="text-gray-600 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({ title, left = false }: { title: string; left?: boolean }) {
  return (
    <div className={left ? "" : "text-center"}>
      <h2 className="text-gray-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{title}</h2>
      <div className={`w-10 h-1 bg-[#B5122B] mt-3 ${left ? "" : "mx-auto"}`} />
    </div>
  );
}
