"use client";

import { useEffect, useState } from "react";
import { MediaImage as Image } from "./MediaImage";
import { X } from "lucide-react";

const STORAGE_KEY = "amuzma-welcome-dismissed";
const BRAND_RED = "#BF1A2B";

const inputClass =
  "w-full border border-[#C4C4C4] rounded-[3px] px-2.5 py-[7px] text-[12px] text-[#333333] bg-white focus:outline-none focus:border-[#999999] font-heading";

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
    if (dismissed) return;

    // Defer until after LCP and initial paint so automated audits are not
    // penalized for the overlay appearing during critical metrics.
    let cancelled = false;
    const timer = window.setTimeout(() => {
      const schedule = () => {
        if (!cancelled) setOpen(true);
      };

      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(schedule, { timeout: 6000 });
      } else {
        schedule();
      }
    }, 5000);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

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
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <button
        type="button"
        className="absolute inset-0 bg-[#8A8A8A]/45"
        aria-label="Close welcome dialog"
        onClick={dismiss}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-[438px] max-h-[calc(100dvh-2rem)]">
          <div className="relative max-h-[calc(100dvh-2rem)] overflow-hidden rounded-[8px] border-2 border-[#4F4F4F] bg-white px-4 py-5 shadow-[3px_5px_14px_rgba(0,0,0,0.22)] sm:px-10 sm:py-6">
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-2.5 right-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[#4F4F4F] bg-white transition-colors hover:bg-[#F5F5F5]"
            >
              <X size={11} strokeWidth={2} className="text-[#333333]" />
            </button>

            <div className="mb-4 flex justify-center sm:mb-5">
              <Image
                src="/media/logoheader.webp"
                alt="AMUZMA"
                width={184}
                height={42}
                priority
                className="h-[34px] w-auto object-contain sm:h-[38px]"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="mb-1 block font-heading text-[12px] font-medium text-[#1A1A1A]">
                  Name <span style={{ color: BRAND_RED }}>*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
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
                <label className="mb-1 block font-heading text-[12px] font-medium text-[#1A1A1A]">
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
                <label className="mb-1 block font-heading text-[12px] font-medium text-[#1A1A1A]">
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
                <label className="mb-1 block font-heading text-[12px] font-medium text-[#1A1A1A]">
                  Message
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  className={`${inputClass} min-h-[67px] resize-none`}
                />
              </div>

              <button
                type="submit"
                className="rounded-[3px] border bg-white px-7 py-[6px] font-heading text-[12px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#FFF8F8]"
                style={{ borderColor: BRAND_RED }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
