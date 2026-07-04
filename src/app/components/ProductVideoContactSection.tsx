"use client";

import { useState } from "react";

const PRODUCT_VIDEO_ID = "YD5zLrIn_AI";

const formInputClass =
  "h-[43px] w-full border border-[#E5E5E5] bg-white px-[14px] font-heading text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#C4C4C4]";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  captcha: string;
  privacy: boolean;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

type FormStatus = "idle" | "success";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function getValidationErrors(form: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Phone number is required.";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  }

  if (!form.captcha.trim()) {
    errors.captcha = "Please answer the captcha.";
  } else if (form.captcha.trim() !== "11") {
    errors.captcha = "Incorrect answer.";
  }

  if (!form.privacy) {
    errors.privacy = "You must accept the privacy policy.";
  }

  return errors;
}

function fieldInputClass(hasError: boolean) {
  return `${formInputClass}${hasError ? " border-[#C0202F]" : ""}`;
}

function ReachOutForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
    captcha: "",
    privacy: false,
  });

  const updateForm = (updates: Partial<FormState>) => {
    setForm((current) => ({ ...current, ...updates }));
    setSubmitError(false);

    const updatedKeys = Object.keys(updates) as (keyof FormState)[];
    if (updatedKeys.some((key) => fieldErrors[key])) {
      setFieldErrors((current) => {
        const next = { ...current };
        for (const key of updatedKeys) {
          delete next[key];
        }
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);

    const errors = getValidationErrors(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});

    // When email delivery is wired up, catch failures here and setSubmitError(true).
    setStatus("success");
  };

  const hasValidationErrors = Object.keys(fieldErrors).length > 0;

  if (status === "success") {
    return (
      <div className="border border-[#B7DFB9] bg-[#E8F5E9] px-4 py-3">
        <p className="font-heading text-[15px] font-normal leading-snug text-[#2E7D32]">
          Thanks for contacting us! We will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-[10px]">
      {hasValidationErrors ? (
        <div className="border border-[#F5C2C7] bg-[#FDECEA] px-4 py-3">
          <p className="font-heading text-[15px] font-normal leading-snug text-[#C0202F]">
            Please fill in all required fields correctly.
          </p>
        </div>
      ) : null}

      {submitError ? (
        <div className="border border-[#F5C2C7] bg-[#FDECEA] px-4 py-3">
          <p className="font-heading text-[15px] font-normal leading-snug text-[#C0202F]">
            Please try again.
          </p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-[10px]" noValidate>
        <div>
          <input
            type="text"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className={fieldInputClass(Boolean(fieldErrors.name))}
            placeholder="Name"
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.name)}
          />
          {fieldErrors.name ? (
            <p className="mt-1 font-heading text-[13px] text-[#C0202F]">{fieldErrors.name}</p>
          ) : null}
        </div>
        <div className="grid gap-[10px] sm:grid-cols-2">
          <div>
            <input
              type="email"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
              className={fieldInputClass(Boolean(fieldErrors.email))}
              placeholder="Email"
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.email)}
            />
            {fieldErrors.email ? (
              <p className="mt-1 font-heading text-[13px] text-[#C0202F]">{fieldErrors.email}</p>
            ) : null}
          </div>
          <div>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => updateForm({ phone: e.target.value })}
              className={fieldInputClass(Boolean(fieldErrors.phone))}
              placeholder="Phone No."
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.phone)}
            />
            {fieldErrors.phone ? (
              <p className="mt-1 font-heading text-[13px] text-[#C0202F]">{fieldErrors.phone}</p>
            ) : null}
          </div>
        </div>
        <div>
          <textarea
            value={form.message}
            onChange={(e) => updateForm({ message: e.target.value })}
            className={`min-h-[120px] w-full resize-y border bg-white p-[14px] font-heading text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none ${
              fieldErrors.message
                ? "border-[#C0202F] focus:border-[#C0202F]"
                : "border-[#E5E5E5] focus:border-[#C4C4C4]"
            }`}
            placeholder="Message"
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.message)}
          />
          {fieldErrors.message ? (
            <p className="mt-1 font-heading text-[13px] text-[#C0202F]">{fieldErrors.message}</p>
          ) : null}
        </div>
        <div>
          <p className="mb-1 font-heading text-[16px] font-normal text-black/85">
            What is 7+4?
          </p>
          <input
            type="text"
            value={form.captcha}
            onChange={(e) => updateForm({ captcha: e.target.value })}
            className={fieldInputClass(Boolean(fieldErrors.captcha))}
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.captcha)}
          />
          {fieldErrors.captcha ? (
            <p className="mt-1 font-heading text-[13px] text-[#C0202F]">{fieldErrors.captcha}</p>
          ) : null}
        </div>
        <div>
          <label className="flex cursor-pointer items-start gap-2 pt-1">
            <input
              type="checkbox"
              checked={form.privacy}
              onChange={(e) => updateForm({ privacy: e.target.checked })}
              className="mt-1 h-4 w-4 shrink-0 border border-[#E5E5E5] accent-[#C0202F]"
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.privacy)}
            />
            <span className="font-heading text-[15px] leading-snug text-black">
              I hereby confirm that I have read the privacy policy of the Amuzma.
            </span>
          </label>
          {fieldErrors.privacy ? (
            <p className="mt-1 font-heading text-[13px] text-[#C0202F]">{fieldErrors.privacy}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className="mt-2 inline-flex h-[43px] items-center justify-center border border-[#C0202F] bg-white px-8 font-heading text-[17px] font-normal text-black transition-colors hover:bg-[#FFF8F8]"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export function ProductVideoContactSection() {
  return (
    <section id="contact" className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1410px] px-6 lg:px-[100px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="flex flex-col">
            <h2 className="font-gothic text-[24px] font-normal leading-tight text-black sm:text-[30px] sm:leading-[30px]">
              Product Video
            </h2>
            <div className="mt-6 flex-1">
              <div className="aspect-video h-full min-h-0 w-full overflow-hidden bg-black lg:aspect-auto">
                <iframe
                  src={`https://www.youtube.com/embed/${PRODUCT_VIDEO_ID}`}
                  title="Product Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-gothic text-[24px] font-normal leading-tight text-black sm:text-[30px] sm:leading-[30px]">
              Reach Out To Us!
            </h2>
            <div className="mt-6">
              <ReachOutForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
