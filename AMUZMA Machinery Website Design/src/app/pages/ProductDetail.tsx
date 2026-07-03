import { useState } from "react";
import { Link, useParams } from "react-router";
import { ChevronRight, Play, CheckCircle, Download } from "lucide-react";

const PRODUCTS_DATA: Record<string, {
  name: string;
  model: string;
  category: string;
  tagline: string;
  heroImage: string;
  features: { title: string; image: string; desc: string }[];
  benefits: { icon: string; title: string; desc: string }[];
  gallery: string[];
  specs: { label: string; value: string }[];
  videoId: string;
  parts: { name: string; image: string }[];
}> = {
  "cnc-router-forte-13cr": {
    name: "CNC ROUTER",
    model: "FORTE 13CR",
    category: "CNC Router",
    tagline: "Smart Technology. Industrial Strength. Precision in Every Cut.",
    heroImage: "https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
    features: [
      {
        title: "Aluminum Profile Worktop",
        image: "https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
        desc: "Heavy-duty aluminum T-slot table for secure workpiece clamping and repeat positioning accuracy.",
      },
      {
        title: "Air Cooling Spindle",
        image: "https://images.unsplash.com/photo-1695603414720-2fbd4db0a434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
        desc: "High-frequency 3.2 kW air-cooled spindle delivering smooth, consistent cutting performance.",
      },
      {
        title: "DSP Handheld Controller",
        image: "https://images.unsplash.com/photo-1735494035457-b6e8f68b5248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
        desc: "Intuitive DSP controller with USB file transfer for fast job setup and precise machine control.",
      },
      {
        title: "Heavy Duty Rail Support",
        image: "https://images.unsplash.com/photo-1735494033794-b82c88743a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
        desc: "Precision linear guides and ball screw drives ensure micron-level positioning repeatability.",
      },
    ],
    benefits: [
      { icon: "⚡", title: "High Productivity", desc: "Advanced motion control delivers up to 30,000 mm/min rapid speed." },
      { icon: "📐", title: "Large Work Area", desc: "1300 × 2500 mm working area accommodates full-size sheet materials." },
      { icon: "🔩", title: "Strong Construction", desc: "Welded steel frame with stress-relief treatment for long-term rigidity." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
      "https://images.unsplash.com/photo-1695603414720-2fbd4db0a434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
      "https://images.unsplash.com/photo-1735494035457-b6e8f68b5248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
      "https://images.unsplash.com/photo-1735494033794-b82c88743a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
      "https://images.unsplash.com/photo-1781032035988-da4e13531911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
      "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
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
};

const DEFAULT_PRODUCT = PRODUCTS_DATA["cnc-router-forte-13cr"];

const NAV_SECTIONS = ["Features", "Benefits", "Gallery", "Operational", "Specifications", "Contact", "Parts"];

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = (id && PRODUCTS_DATA[id]) || DEFAULT_PRODUCT;
  const [activeSection, setActiveSection] = useState("Features");
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [contactForm, setContactForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("Wood & Panel Materials");

  const scrollTo = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-[#B5122B] overflow-hidden min-h-[380px]">
        <div className="absolute right-0 bottom-0 top-0 w-1/2">
          <img
            src={product.heroImage}
            alt={product.model}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#B5122B]" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 py-14">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 mb-3">
              <Link to="/" className="text-white/70 text-sm hover:text-white">Home</Link>
              <ChevronRight size={14} className="text-white/50" />
              <Link to="/products" className="text-white/70 text-sm hover:text-white">Products</Link>
              <ChevronRight size={14} className="text-white/50" />
              <span className="text-white text-sm">{product.model}</span>
            </div>
            <h1 className="text-white mb-2" style={{ fontSize: "2rem", fontWeight: 800 }}>{product.name}</h1>
            <p className="text-white/80 mb-2 text-lg font-medium">{product.model}</p>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">{product.tagline}</p>
            <div className="flex gap-3">
              <Link to="/quote" className="inline-flex items-center gap-2 bg-white text-[#B5122B] px-5 py-2.5 rounded text-sm font-semibold hover:bg-gray-100 transition-colors">
                Get Quote
              </Link>
              <a href="#" className="inline-flex items-center gap-2 border border-white text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-white/10 transition-colors">
                <Download size={15} /> Catalogue
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Secondary Nav */}
      <div className="sticky top-16 z-30 bg-white border-b border-[#E5E5E5] shadow-sm">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`flex-shrink-0 px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeSection === s
                    ? "border-[#B5122B] text-[#B5122B]"
                    : "border-transparent text-gray-600 hover:text-[#B5122B]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-12 space-y-16">
        {/* Features */}
        <section id="features">
          <SectionTitle title="Smart Technology. Industrial Strength. Precision in Every Cut." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {product.features.map((f) => (
              <div key={f.title} className="bg-white border border-[#E5E5E5] rounded overflow-hidden hover:shadow-md transition-shadow">
                <img src={f.image} alt={f.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">{f.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="bg-[#F5F5F5] -mx-6 px-6 py-12 rounded">
          <SectionTitle title="Benefits" />
          <p className="text-gray-500 text-sm text-center mt-2 mb-10">
            Built to deliver consistent performance across long production runs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {product.benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#B5122B] flex items-center justify-center mx-auto mb-4 text-3xl">
                  {b.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{b.title}</h4>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery">
          <SectionTitle title="Gallery" />
          <div className="mt-8 flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <img
                src={product.gallery[galleryIdx]}
                alt="Product gallery"
                className="w-full h-80 lg:h-96 object-cover rounded"
              />
            </div>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setGalleryIdx(i)}
                  className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 transition-colors ${
                    i === galleryIdx ? "border-[#B5122B]" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Operational */}
        <section id="operational">
          <SectionTitle title="Operational" />
          <div className="mt-8 flex flex-wrap gap-2 mb-6">
            {["Wood & Panel Materials", "Engraving", "Cutting", "3D Carving"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded text-sm font-medium border transition-colors ${
                  activeTab === tab
                    ? "bg-[#B5122B] text-white border-[#B5122B]"
                    : "bg-white text-gray-700 border-[#E5E5E5] hover:border-[#B5122B]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <img
              src={product.gallery[0]}
              alt={activeTab}
              className="w-full h-64 object-cover rounded"
            />
            <div>
              <h3 className="text-gray-900 font-semibold mb-3 text-lg">{activeTab}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The FORTE 13CR excels at {activeTab.toLowerCase()} applications, delivering consistent results
                across MDF, plywood, solid wood, acrylic, and soft metals with exceptional surface finish quality.
              </p>
              <ul className="space-y-2">
                {["Consistent cut quality", "Optimized feed rates", "Reduced material waste", "Compatible with all major CAM software"].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-[#B5122B] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section id="specifications" className="bg-[#F5F5F5] -mx-6 px-6 py-12 rounded">
          <SectionTitle title="Specifications" />
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {product.specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex justify-between items-center py-3 px-4 text-sm ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"
                } border border-[#E5E5E5] rounded`}
              >
                <span className="text-gray-600 font-medium">{spec.label}</span>
                <span className="text-gray-900 font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Product Video */}
        <section>
          <SectionTitle title="Product Video" />
          <div className="mt-8 aspect-video max-w-2xl mx-auto bg-black rounded overflow-hidden relative group cursor-pointer"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${product.videoId}`, "_blank")}
          >
            <img
              src={product.gallery[0]}
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#B5122B] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={32} fill="white" color="white" className="ml-2" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Inquiry */}
        <section id="contact">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Reach Out To Us" left />
              <p className="text-gray-600 text-sm mt-4 mb-6 leading-relaxed">
                Have questions about the {product.model}? Our machinery specialists are ready to help you choose the right configuration for your production needs.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Service Hotline", value: "+971 414 886" },
                  { label: "After Sales", value: "+971 55 857 857" },
                  { label: "Email", value: "info@amuzma.com" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-3 text-sm">
                    <span className="text-gray-500 w-28">{c.label}:</span>
                    <span className="text-gray-900 font-medium">{c.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F5F5F5] rounded p-6">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-[#B5122B] mx-auto mb-4" />
                  <p className="font-semibold text-gray-900">Inquiry Sent!</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Send Inquiry</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">First Name *</label>
                      <input
                        type="text" required
                        value={contactForm.firstName}
                        onChange={(e) => setContactForm({ ...contactForm, firstName: e.target.value })}
                        className="w-full border border-[#E5E5E5] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#B5122B] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Last Name *</label>
                      <input
                        type="text" required
                        value={contactForm.lastName}
                        onChange={(e) => setContactForm({ ...contactForm, lastName: e.target.value })}
                        className="w-full border border-[#E5E5E5] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#B5122B] bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email" required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full border border-[#E5E5E5] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#B5122B] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full border border-[#E5E5E5] rounded px-3 py-2 text-sm focus:outline-none focus:border-[#B5122B] bg-white resize-none"
                      placeholder={`I'm interested in the ${product.model}...`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#B5122B] text-white py-3 rounded text-sm font-semibold hover:bg-[#8a0d20] transition-colors"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Parts */}
        <section id="parts">
          <SectionTitle title="Parts" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {product.parts.map((part) => (
              <div key={part.name} className="bg-white border border-[#E5E5E5] rounded overflow-hidden hover:shadow-md transition-shadow text-center">
                <img src={part.image} alt={part.name} className="w-full h-36 object-cover" />
                <div className="p-3">
                  <p className="text-xs font-medium text-gray-800">{part.name}</p>
                  <button className="mt-2 text-xs text-[#B5122B] hover:underline">Enquire</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="border border-[#B5122B] text-[#B5122B] px-6 py-2.5 rounded text-sm font-semibold hover:bg-[#B5122B] hover:text-white transition-colors">
              View More Parts
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionTitle({ title, left = false }: { title: string; left?: boolean }) {
  return (
    <div className={left ? "" : "text-center"}>
      <h2 className="text-gray-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{title}</h2>
      <div className={`w-10 h-1 bg-[#B5122B] mt-3 ${left ? "" : "mx-auto"}`} />
    </div>
  );
}
