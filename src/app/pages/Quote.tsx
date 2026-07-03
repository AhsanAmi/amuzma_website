"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  model: string;
  image: string;
  quantity: number;
}

const INITIAL_CART: CartItem[] = [
  {
    id: "cnc-router-forte-13cr",
    name: "CNC ROUTER Forte",
    model: "13CR",
    image: "https://images.unsplash.com/photo-1781032040825-04240013c228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200&q=80",
    quantity: 1,
  },
];

export function Quote() {
  const [cart, setCart] = useState<CartItem[]>(INITIAL_CART);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1320px] mx-auto px-6 py-12">
        {submitted ? (
          <div className="max-w-lg mx-auto text-center py-20">
            <div className="w-20 h-20 rounded-full bg-[#B5122B]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-[#B5122B]" />
            </div>
            <h2 className="text-gray-900 mb-3" style={{ fontSize: "1.75rem", fontWeight: 700 }}>Request Sent!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for your inquiry. Our team will review your quote request and get back to you within 24–48 hours.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#B5122B] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-[#8a0d20] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left – Product Table */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E5] mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-700">Product</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-700">Quantity</span>
              </div>

              {cart.length === 0 ? (
                <div className="py-16 text-center text-gray-500">
                  <p className="mb-4">Your quote list is empty.</p>
                  <Link
                    href="/products"
                    className="text-sm text-[#B5122B] hover:underline font-medium"
                  >
                    Browse Products →
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 py-4 border-b border-[#E5E5E5]">
                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-[#B5122B] transition-colors flex-shrink-0"
                      >
                        <X size={16} />
                      </button>

                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-12 object-cover rounded border border-[#E5E5E5] flex-shrink-0"
                      />

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.model}</p>
                      </div>

                      {/* Quantity */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-7 h-7 rounded border border-[#E5E5E5] flex items-center justify-center text-gray-700 hover:border-[#B5122B] hover:text-[#B5122B] transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-7 h-7 rounded border border-[#E5E5E5] flex items-center justify-center text-gray-700 hover:border-[#B5122B] hover:text-[#B5122B] transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <Link
                  href="/products"
                  className="text-sm text-[#B5122B] hover:underline font-medium"
                >
                  ← Add more products
                </Link>
              </div>
            </div>

            {/* Right – Request Form */}
            <div>
              <h2 className="text-gray-900 mb-6" style={{ fontSize: "1.5rem", fontWeight: 700 }}>Send the request</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-[#B5122B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full border border-[#E5E5E5] rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B5122B] bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-[#B5122B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full border border-[#E5E5E5] rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B5122B] bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-[#B5122B]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#E5E5E5] rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B5122B] bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#E5E5E5] rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#B5122B] bg-white transition-colors resize-none"
                    placeholder="Tell us about your production requirements, preferred configuration, or any questions…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className="w-full bg-[#B5122B] text-white py-3 rounded text-sm font-semibold hover:bg-[#8a0d20] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
