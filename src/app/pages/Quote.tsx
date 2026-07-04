"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { MediaImage as Image } from "../components/MediaImage";
import Link from "next/link";
import { useQuoteCart } from "../context/QuoteCartContext";

const inputClassName =
  "w-full border border-[#D9D9D9] bg-white px-4 py-3.5 font-gothic text-[15px] font-normal text-black placeholder:text-[#666666] focus:border-[#C0202F] focus:outline-none";

export function Quote() {
  const { items, removeItem, setQuantity, clearCart } = useQuoteCart();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleQuantityChange = (id: string, value: string) => {
    setQuantity(id, Math.max(1, Number.parseInt(value, 10) || 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1320px] px-6 py-12 lg:py-16">
        {submitted ? (
          <div className="mx-auto max-w-lg py-20 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#C0202F]/10">
              <CheckCircle size={40} className="text-[#C0202F]" />
            </div>
            <h2 className="mb-3 font-gothic text-[28px] font-normal text-black">
              Request Sent!
            </h2>
            <p className="mb-8 font-gothic text-[16px] font-normal leading-[27px] text-[#666666]">
              Thank you for your inquiry. Our team will review your quote
              request and get back to you within 24–48 hours.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center bg-[#C0202F] px-6 py-3 font-gothic text-[14px] font-normal text-white transition-opacity hover:opacity-90"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            {/* Left – Product list */}
            <div>
              <div className="mb-0 flex items-center justify-between border-b border-[#E5E5E5] pb-3">
                <span className="font-gothic text-[12px] font-normal uppercase tracking-[0.12em] text-[#666666]">
                  Product
                </span>
                <span className="font-gothic text-[12px] font-normal uppercase tracking-[0.12em] text-[#666666]">
                  Quantity
                </span>
              </div>

              {items.length === 0 ? (
                <div className="border-b border-[#E5E5E5] py-16 text-center">
                  <p className="mb-4 font-gothic text-[15px] text-[#666666]">
                    Your quote list is empty.
                  </p>
                  <Link
                    href="/products"
                    className="font-gothic text-[14px] text-[#C0202F] transition-opacity hover:opacity-80"
                  >
                    Browse Products →
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b border-[#E5E5E5] py-6"
                  >
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="shrink-0 text-[#999999] transition-colors hover:text-[#C0202F]"
                      aria-label={`Remove ${item.name}`}
                    >
                      <X size={18} strokeWidth={1.5} />
                    </button>

                    <div className="relative h-[56px] w-[72px] shrink-0 overflow-hidden border border-[#E5E5E5] bg-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="72px"
                        className="object-contain p-1"
                      />
                    </div>

                    <p className="min-w-0 flex-1 font-gothic text-[15px] font-normal text-black">
                      {item.name}
                    </p>

                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="h-10 w-14 shrink-0 border border-[#D9D9D9] bg-white text-center font-gothic text-[15px] font-normal text-black focus:border-[#C0202F] focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      aria-label={`Quantity for ${item.name}`}
                    />
                  </div>
                ))
              )}
            </div>

            {/* Right – Request form */}
            <div>
              <h2 className="mb-8 font-gothic text-[28px] font-normal leading-tight text-black sm:text-[32px]">
                Send the request
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  placeholder="First Name *"
                  aria-label="First Name"
                  className={inputClassName}
                />

                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                  placeholder="Last Name *"
                  aria-label="Last Name"
                  className={inputClassName}
                />

                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email *"
                  aria-label="Email"
                  className={inputClassName}
                />

                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Message"
                  aria-label="Message"
                  className={`${inputClassName} resize-none`}
                />

                <button
                  type="submit"
                  disabled={items.length === 0}
                  className="mt-2 w-full bg-[#C0202F] px-6 py-3.5 font-gothic text-[14px] font-normal uppercase tracking-wide text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
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
