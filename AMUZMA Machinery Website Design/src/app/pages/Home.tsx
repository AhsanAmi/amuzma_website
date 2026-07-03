import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, ArrowRight, Star, Play } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80",
    title: "Precision Woodworking\nMachinery",
    subtitle: "Crafted By Experience. Engineered For Production.",
    cta: "Explore Products",
    ctaHref: "/products",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1695603414720-2fbd4db0a434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80",
    title: "Industrial Strength\nIn Every Cut",
    subtitle: "Smart Technology. Industrial Strength. Precision in Every Cut.",
    cta: "View Machines",
    ctaHref: "/products",
  },
];

const COUNTERS = [
  { value: "30+", label: "Years Experience" },
  { value: "1,000+", label: "Customers Worldwide" },
  { value: "100%", label: "Quality Assured" },
  { value: "12+", label: "Machine Series" },
];

const FACILITIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    brand: "AMUZMA",
    category: "CNC Router",
    model: "FORTE 13CR",
    specs: ["Aluminum profile", "Table: 1300 × 2500 mm", "Spindle: 3.2 kW"],
    href: "/products/cnc-router-forte-13cr",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1735494035457-b6e8f68b5248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    brand: "AMUZMA",
    category: "Edge Banding",
    model: "EDGE PRO 2200",
    specs: ["Auto edge feed system", "Speed: 12–22 m/min", "Panel thickness: 10–60 mm"],
    href: "/products",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    brand: "AMUZMA",
    category: "Moulder",
    model: "MOULDER M400",
    specs: ["4-side planing", "Speed: 6–25 m/min", "Spindle speed: 6000 rpm"],
    href: "/products",
  },
];

const EXPERTISE = [
  {
    title: "Sawing",
    desc: "High-precision panel saws and beam saws engineered for accuracy, speed, and reliability in production environments.",
    color: "#B5122B",
    bg: "#B5122B",
    textColor: "white",
  },
  {
    title: "Moulder",
    desc: "Four-side moulders delivering exceptional surface quality and dimensional accuracy for solid wood processing.",
    color: "#E8A020",
    bg: "#E8A020",
    textColor: "white",
  },
  {
    title: "Edge Banding",
    desc: "Automatic edge banding machines with superior glue application and trimming for flawless panel finishing.",
    color: "#E06020",
    bg: "#E06020",
    textColor: "white",
  },
  {
    title: "CNC Router",
    desc: "High-speed CNC routers with aluminum profiles and precision spindles for complex shapes and patterns.",
    color: "#2E7D32",
    bg: "#2E7D32",
    textColor: "white",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahmad Al-Rashid",
    company: "Al-Rashid Furniture, UAE",
    text: "AMUZMA machines transformed our production line. The CNC router's precision is unmatched and after-sales support is exceptional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Schmidt",
    company: "Holzbau GmbH, Germany",
    text: "We've been using AMUZMA edge banders for three years. German-standard engineering at a competitive price point.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Mendez",
    company: "Maderas del Sur, Colombia",
    text: "Outstanding build quality and reliable performance. The moulder series exceeded our expectations for solid wood processing.",
    rating: 5,
  },
];

const VIDEOS = [
  {
    id: 1,
    title: "Amuzma CNC Router - Production Mode Efficiency",
    thumb: "https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=640&q=80",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Amuzma Edge Banding Machine",
    thumb: "https://images.unsplash.com/photo-1735494035457-b6e8f68b5248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=640&q=80",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Amuzma Moulder - Full Line Setup",
    thumb: "https://images.unsplash.com/photo-1695603414720-2fbd4db0a434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=640&q=80",
    videoId: "dQw4w9WgXcQ",
  },
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Slider */}
      <section className="relative w-full h-[75vh] min-h-[500px] overflow-hidden">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#B5122B]/85 via-[#B5122B]/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1320px] mx-auto px-6 w-full">
                <div className="max-w-xl">
                  <h1 className="text-white mb-4 leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, whiteSpace: "pre-line" }}>
                    {slide.title}
                  </h1>
                  <p className="text-white/90 mb-8 text-lg">{slide.subtitle}</p>
                  <div className="flex gap-3">
                    <Link
                      to={slide.ctaHref}
                      className="inline-flex items-center gap-2 bg-white text-[#B5122B] px-6 py-3 rounded text-sm font-semibold hover:bg-[#B5122B] hover:text-white border border-white transition-all duration-200"
                    >
                      {slide.cta} <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/quote"
                      className="inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded text-sm font-semibold border border-white hover:bg-white hover:text-[#B5122B] transition-all duration-200"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={() => setCurrentSlide((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-white w-6" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Counters */}
      <section className="py-14 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <h2 className="text-center text-gray-900 mb-10" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
            Why Choose Us
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {COUNTERS.map((c) => (
              <div key={c.label} className="text-center">
                <div className="text-[#B5122B] mb-1" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>{c.value}</div>
                <p className="text-gray-600 text-sm">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Mini logo */}
              <div className="mb-6">
                <svg viewBox="0 0 120 30" className="h-7 w-auto" fill="none">
                  <text x="60" y="22" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="900" fontSize="20" letterSpacing="2" fill="#B5122B" style={{ fontStyle: "italic" }}>AMUZMA</text>
                </svg>
              </div>
              <div className="w-12 h-1 bg-[#B5122B] mb-6" />
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
                Crafted By Experience.<br />Engineered For Production.
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At AMUZMA, we are not just a machinery brand — we are the culmination of a 30-year-old woodworking legacy. Our journey began with generations of family experience in the woodworking industry, where our Founder Asif Javed spent years learning the industry from the ground up.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AMUZMA machines are manufactured at top-tier factories in China, combining advanced production capabilities with strict quality control. Our machines meet and exceed European quality standards, delivering superior reliability and performance at competitive prices.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From CNC routers to edge banding machines, moulders, and panel saws — every AMUZMA machine is built with the precision and reliability that modern woodworking demands.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#B5122B] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#8a0d20] transition-colors"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                alt="AMUZMA Factory"
                className="w-full h-[420px] object-cover rounded"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#B5122B] text-white p-6 rounded">
                <div className="text-3xl font-bold">30+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facilities & Features */}
      <section className="py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Our Facilities &amp; Features</h2>
            <div className="w-12 h-1 bg-[#B5122B] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FACILITIES.map((f) => (
              <ProductCard key={f.id} product={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-3">
            <p className="text-gray-500 text-sm mb-1">Crafted By Experience. Engineered For Production.</p>
            <h2 className="text-gray-900" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Expertise in Every Machine</h2>
          </div>
          <div className="w-12 h-1 bg-[#B5122B] mx-auto mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPERTISE.map((e) => (
              <div
                key={e.title}
                className="p-8 rounded text-white flex flex-col gap-4 hover:shadow-xl transition-shadow cursor-pointer"
                style={{ backgroundColor: e.bg }}
              >
                <h3 className="text-xl font-bold">{e.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{e.desc}</p>
                <Link
                  to="/products"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold hover:gap-3 transition-all"
                >
                  View Machines <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-4">
            <p className="text-gray-500 text-sm mb-1">Experience Shared By Our Clients</p>
            <h2 className="text-gray-900" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Experience Shared By Our Clients</h2>
          </div>
          <div className="w-12 h-1 bg-[#B5122B] mx-auto mb-12" />

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: TESTIMONIALS[testimonialIdx].rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#B5122B" color="#B5122B" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{TESTIMONIALS[testimonialIdx].text}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">{TESTIMONIALS[testimonialIdx].name}</p>
                <p className="text-sm text-gray-500">{TESTIMONIALS[testimonialIdx].company}</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === testimonialIdx ? "bg-[#B5122B] w-6" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get a Quote CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-gray-900 mb-3" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Get In Touch</h2>
              <div className="w-12 h-1 bg-[#B5122B] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-8">
                Ready to upgrade your woodworking machinery? Contact our team for expert consultation, pricing, and product demos. We serve clients across the Middle East, Asia, Europe, and the Americas.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate("/quote")}
                  className="inline-flex items-center gap-2 bg-[#B5122B] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#8a0d20] transition-colors"
                >
                  Request a Quote <ArrowRight size={16} />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-[#B5122B] text-[#B5122B] px-6 py-3 rounded text-sm font-semibold hover:bg-[#B5122B] hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="bg-[#F5F5F5] rounded p-8">
              <QuickContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Product Videos */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="text-gray-900 mb-2" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Product Videos</h2>
            <p className="text-gray-500 text-sm">See AMUZMA machines in action on the factory floor</p>
          </div>
          <div className="w-12 h-1 bg-[#B5122B] mx-auto mb-10" />
          <div className="grid md:grid-cols-3 gap-6">
            {VIDEOS.map((v) => (
              <div key={v.id} className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative group cursor-pointer" onClick={() => window.open(`https://www.youtube.com/watch?v=${v.videoId}`, "_blank")}>
                  <img src={v.thumb} alt={v.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#B5122B] flex items-center justify-center">
                      <Play size={22} fill="white" color="white" className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-gray-800 line-clamp-2">{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: typeof FACILITIES[0] }) {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative overflow-hidden h-52">
        <img src={product.image} alt={product.model} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3">
          <span className="bg-[#B5122B] text-white text-xs px-2 py-1 rounded">{product.category}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <svg viewBox="0 0 60 16" className="h-4 w-auto" fill="none">
            <text x="0" y="13" fontFamily="Inter,sans-serif" fontWeight="900" fontSize="13" letterSpacing="1" fill="#B5122B" style={{ fontStyle: "italic" }}>AMUZMA</text>
          </svg>
          <span className="text-xs text-gray-500">{product.category}</span>
        </div>
        <h3 className="text-base font-semibold text-gray-900 mb-3">{product.model}</h3>
        <ul className="space-y-1 mb-5 flex-1">
          {product.specs.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-[#B5122B] mt-0.5">•</span> {s}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 mt-auto">
          <Link
            to={product.href}
            className="flex-1 text-center py-2 text-xs font-semibold border border-[#B5122B] text-[#B5122B] rounded hover:bg-[#B5122B] hover:text-white transition-colors"
          >
            View Details
          </Link>
          <Link
            to="/quote"
            className="flex-1 text-center py-2 text-xs font-semibold bg-gray-900 text-white rounded hover:bg-black transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

function QuickContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 bg-[#B5122B] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <p className="text-gray-800 font-semibold">Message sent!</p>
        <p className="text-gray-500 text-sm mt-1">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-[#E5E5E5] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#B5122B] bg-white"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-[#E5E5E5] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#B5122B] bg-white"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-[#E5E5E5] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#B5122B] bg-white resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#B5122B] text-white py-3 rounded text-sm font-semibold hover:bg-[#8a0d20] transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
