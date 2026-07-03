import { useState } from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const CATEGORIES = ["All", "CNC Router", "Edge Banding", "Moulder", "Sawing"];

const PRODUCTS = [
  {
    id: "cnc-router-forte-13cr",
    category: "CNC Router",
    brand: "AMUZMA",
    model: "CNC ROUTER",
    name: "FORTE 13CR",
    image: "https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    specs: ["Aluminum profile", "Table: 1 axis 1300 × 2500 × 200", "Table: 1 axis 2500 × 1300 × 200"],
  },
  {
    id: "cnc-router-forte-15cr",
    category: "CNC Router",
    brand: "AMUZMA",
    model: "CNC ROUTER",
    name: "FORTE 15CR",
    image: "https://images.unsplash.com/photo-1781032035988-da4e13531911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    specs: ["Aluminum profile", "Table: 1 axis 1500 × 3000 × 200", "Table: 1 axis 3000 × 1500 × 200"],
  },
  {
    id: "edge-banding-pro-2200",
    category: "Edge Banding",
    brand: "AMUZMA",
    model: "EDGE BANDING",
    name: "PRO 2200",
    image: "https://images.unsplash.com/photo-1735494035457-b6e8f68b5248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    specs: ["Auto edge feed system", "Speed: 12–22 m/min", "Panel thickness: 10–60 mm"],
  },
  {
    id: "edge-banding-pro-3000",
    category: "Edge Banding",
    brand: "AMUZMA",
    model: "EDGE BANDING",
    name: "PRO 3000",
    image: "https://images.unsplash.com/photo-1735494033794-b82c88743a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    specs: ["Full-auto edge banding", "Speed: 18–30 m/min", "Panel thickness: 8–80 mm"],
  },
  {
    id: "moulder-m400",
    category: "Moulder",
    brand: "AMUZMA",
    model: "MOULDER",
    name: "M400",
    image: "https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    specs: ["4-side planing", "Speed: 6–25 m/min", "Spindle speed: 6000 rpm"],
  },
  {
    id: "sawing-panel-s3200",
    category: "Sawing",
    brand: "AMUZMA",
    model: "PANEL SAW",
    name: "S3200",
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    specs: ["Sliding table: 3200 mm", "Blade diameter: 300 mm", "Max cutting height: 115 mm"],
  },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative bg-[#B5122B] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80"
            alt="Products"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 py-14 text-center">
          <h1 className="text-white mb-2" style={{ fontSize: "2rem", fontWeight: 700 }}>
            {activeCategory === "All" ? "All Products" : activeCategory + " Machines"}
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#F5F5F5] border-b border-[#E5E5E5]">
        <div className="max-w-[1320px] mx-auto px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-[#B5122B] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-800">{activeCategory === "All" ? "Products" : activeCategory}</span>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-[1320px] mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? "bg-[#B5122B] text-white border-[#B5122B]"
                  : "bg-white text-gray-700 border-[#E5E5E5] hover:border-[#B5122B] hover:text-[#B5122B]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#E5E5E5] rounded overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <svg viewBox="0 0 60 16" className="h-4 w-auto" fill="none">
                    <text x="0" y="13" fontFamily="Inter,sans-serif" fontWeight="900" fontSize="13" letterSpacing="1" fill="#B5122B" style={{ fontStyle: "italic" }}>AMUZMA</text>
                  </svg>
                  <span className="text-xs text-gray-500">{product.model}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">{product.name}</h3>
                <ul className="space-y-1 mb-5 flex-1">
                  {product.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#B5122B] mt-0.5">•</span> {s}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Link
                    to={`/products/${product.id}`}
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
          ))}
        </div>
      </div>
    </div>
  );
}
