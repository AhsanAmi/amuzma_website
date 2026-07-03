"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const STORAGE_KEY = "amuzma-welcome-dismissed";
const BRAND_RED = "#BF1A2B";

const inputClass =
  "w-full border-[1.5px] border-[#C4C4C4] rounded-[4px] px-3 py-[9px] text-[15px] text-[#333333] bg-white focus:outline-none focus:border-[#999999] font-heading";

export function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dismiss();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-4 py-6 sm:px-6 sm:py-10">
      <button
        type="button"
        className="absolute inset-0 bg-[#8A8A8A]/45"
        aria-label="Close welcome dialog"
        onClick={dismiss}
      />

      <div className="relative my-auto w-full max-w-[548px] pt-8 sm:pt-10 sm:pr-10">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-2 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-black/25 transition-colors hover:bg-black/35"
        >
          <X size={14} strokeWidth={2} className="text-white" />
        </button>

        <div className="relative max-h-[85vh] overflow-y-auto rounded-[10px] border-2 border-[#4F4F4F] bg-white px-5 py-7 shadow-[4px_6px_18px_rgba(0,0,0,0.22)] sm:px-12 sm:py-11">
          <div className="mb-6 flex justify-center sm:mb-9">
            <Image
              src="/media/logoheader.jpg"
              alt="AMUZMA"
              width={230}
              height={52}
              priority
              className="h-[42px] w-auto object-contain sm:h-[50px]"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-[18px]">
            <div>
              <label className="mb-[6px] block font-heading text-[15px] font-medium text-[#1A1A1A]">
                Name <span style={{ color: BRAND_RED }}>*</span>
              </label>
              <div className="grid grid-cols-2 gap-[10px]">
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(event) =>
                    setForm({ ...form, firstName: event.target.value })
                  }
                  className={inputClass}
                />
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={(event) =>
                    setForm({ ...form, lastName: event.target.value })
                  }
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-[6px] block font-heading text-[15px] font-medium text-[#1A1A1A]">
                Email <span style={{ color: BRAND_RED }}>*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-[6px] block font-heading text-[15px] font-medium text-[#1A1A1A]">
                Number
              </label>
              <input
                type="tel"
                value={form.number}
                onChange={(event) =>
                  setForm({ ...form, number: event.target.value })
                }
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-[6px] block font-heading text-[15px] font-medium text-[#1A1A1A]">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                className={`${inputClass} min-h-[118px] resize-y`}
              />
            </div>

            <button
              type="submit"
              className="mt-1 rounded-[4px] border-[1.5px] bg-white px-9 py-[7px] font-heading text-[15px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#FFF8F8]"
              style={{ borderColor: BRAND_RED }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
