"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ExpertiseCard } from "../components/ExpertiseCard";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/media/Web-Front-Dubai-Exhibition-02.jpeg",
    alt: "AMUZMA at the Dubai Woodshow — Dubai World Trade Center",
  },
  {
    id: 2,
    image: "/media/homepageslide1.jpg",
    alt: "You know what counts — Your safety",
  },
  {
    id: 3,
    image: "/media/homepageslide2.jpg",
    alt: "You know what counts — Your passion",
  },
];

const COUNTERS = [
  { label: "Years Experience", value: "30", suffix: "+" },
  { label: "Installations", value: "1,000", suffix: "+" },
  { label: "Quality Focus", value: "100", suffix: "%" },
  { label: "Mfg. Plants", value: "12", suffix: "+" },
];

const FACILITIES = [
  {
    id: 1,
    image: "/media/Band-Saw-16-Elite-65BS-.png",
    category: "BAND SAW",
    model: "Elite 65BS",
    specs: [
      "Blade Length : 4470 mm",
      "Blade Width : 10-35 mm",
      "Motor Power Output : 4kW S1",
    ],
    href: "/products",
  },
  {
    id: 2,
    image: "/media/E5-finalist.png",
    category: "EDGE BANDING",
    model: "E5",
    specs: [
      "Thickness of edge-banding belt : 0.4-3 mm",
      "Height of Edge-banding tape : 12-45 mm",
      "Gross power : 6.5 kw",
    ],
    href: "/products",
  },
  {
    id: 3,
    image: "/media/Panel-Saw-Firma-35PS-1-1-1.png",
    category: "PANEL SAW",
    model: "Firma 40PL",
    specs: [
      "Main Blade Diameter : 400 mm",
      "Main Blade Speed : 4500 rpm",
      "Scoring Blade Diameter : 120 mm",
    ],
    href: "/products",
  },
];

const EXPERTISE = [
  {
    title: "Sawing",
    desc: "High-precision sawing solutions engineered for clean, accurate cuts, maximizing material efficiency, safety, and productivity across solid wood and panel processing applications.",
    bg: "#CB3737",
    video: { src: "/media/Panel-Saw-Video-Main-Pages.mp4" },
  },
  {
    title: "Moulder",
    desc: "Advanced moulding technology designed to deliver precise profiling and smooth, consistent finishes, improving product quality, design accuracy, and overall efficiency in professional woodworking and furniture manufacturing.",
    bg: "#DC620C",
    video: { src: "/media/Planing.mp4" },
  },
  {
    title: "Edge Banding",
    desc: "High-performance edge banding machines deliver seamless finishes, strong adhesion, precise trimming, enhanced durability, and premium aesthetics for modern furniture manufacturing needs.",
    bg: "#FBAD12",
    video: { src: "/media/CNC Router AMUZMA.mp4" },
  },
  {
    title: "CNC Router",
    desc: "Innovative CNC router machines deliver accurate cutting, detailed carving, and smooth shaping with smart automation, reliability, speed, and consistent results for woodworking.",
    bg: "#639247",
    video: {
      src: "/media/Precision Meets Efficiency _ Amuzma Edge Banding P6 in Action _ AMUZMA.mp4",
    },
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Asmach Traders",
    location: "PAKISTAN",
    logo: "/media/ASMACH_Logo-1.webp",
    text: "Globally trusted for power, precision, and performance—now bringing that same level of excellence to Pakistan with Asmach Traders Solutions.",
  },
  {
    id: 2,
    name: "MYQ Trading",
    location: "UAE",
    logo: "/media/MYQ-logo-175x175-1 (2).webp",
    text: "Amuzma machines deliver precision, durability, and efficiency, improving our production quality and overall performance consistently.",
  },
  {
    id: 3,
    name: "SA Trading",
    location: "OMAN",
    logo: "/media/SA-Trading-01-03-175x175-1 (2).webp",
    text: "Fully Satisfied with Amuzma Machinery! Trusted worldwide for power, precision & performance – and now delivering excellence right here in Oman.",
  },
];

const VIDEOS = [
  {
    id: 1,
    title: "AMUZMA Machinery | Dubai Woodshow",
    videoId: "9sWw7zARtz0",
  },
  {
    id: 2,
    title: "Factory Worker Footage",
    videoId: "lePU1NzWTcw",
  },
  {
    id: 3,
    title: "CNC Router AMUZMA",
    videoId: "dX38tWhBpH4",
  },
  {
    id: 4,
    title: "Precision Meets Efficiency | Amuzma Edge Banding P6 in Action | AMUZMA",
    videoId: "YD5zLrIn_AI",
  },
  {
    id: 5,
    title: "AMUZMA Machinery",
    videoId: "Sj3uvybEtNU",
  },
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [testimonialNoTransition, setTestimonialNoTransition] = useState(false);
  const [testimonialCardsPerView, setTestimonialCardsPerView] = useState(1);

  const testimonialSlides = [...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const updateCardsPerView = () => setTestimonialCardsPerView(mq.matches ? 3 : 1);
    updateCardsPerView();
    mq.addEventListener("change", updateCardsPerView);
    return () => mq.removeEventListener("change", updateCardsPerView);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialSlide((p) => p + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (testimonialSlide !== TESTIMONIALS.length) return;

    const resetTimer = window.setTimeout(() => {
      setTestimonialNoTransition(true);
      setTestimonialSlide(0);
    }, 500);

    return () => window.clearTimeout(resetTimer);
  }, [testimonialSlide]);

  useEffect(() => {
    if (!testimonialNoTransition) return;

    const frame = window.requestAnimationFrame(() => {
      setTestimonialNoTransition(false);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [testimonialNoTransition]);

  useEffect(() => {
    setTestimonialIdx(testimonialSlide % TESTIMONIALS.length);
  }, [testimonialSlide]);

  const testimonialOffset =
    testimonialSlide * (100 / testimonialCardsPerView);

  return (
    <div className="w-full">
      {/* Hero Slider */}
      <section className="relative h-[38vh] min-h-[240px] w-full overflow-hidden sm:h-[55vh] md:h-[620px] lg:h-[750px]">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={() => setCurrentSlide((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 sm:left-4 flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length)}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 sm:w-10 sm:h-10 sm:right-4 flex items-center justify-center transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 sm:bottom-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                i === currentSlide ? "bg-[#BF1A2B]" : "bg-[#BDBDBD]"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Counters */}
      <section className="bg-white py-10 font-gothic sm:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <h2 className="mb-8 text-center text-[28px] font-normal leading-tight text-black sm:mb-12 sm:text-[35px] sm:leading-[35px]">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-8">
            {COUNTERS.map((counter) => (
              <div key={counter.label} className="text-center">
                <div className="mb-2 text-[38px] font-normal leading-none text-[#C0202F] sm:text-[50px]">
                  {counter.value}
                  {counter.suffix}
                </div>
                <p className="text-[15px] font-normal leading-normal text-black sm:text-[18px]">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-10 font-gothic sm:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="mb-5 text-[24px] font-normal leading-tight text-black sm:text-[28px] sm:leading-[28px]">
                About Us
              </h2>
              <p className="mb-3 text-[15px] font-normal leading-relaxed text-[#666666]">
                At Amuzma, we are not just a machinery brand—we are the continuation of a
                200-year-old woodworking legacy. Our journey began with generations of master
                carpenters, evolving into the machinery business when Muhammad Yousaf Javed,
                father of our founder Asif Javed, pioneered the trade of Italian woodworking
                machinery in Pakistan over 40 years ago.
              </p>
              <p className="mb-8 text-[15px] font-normal leading-relaxed text-[#666666]">
                Carrying forward this legacy, Asif Javed spent 24 years mastering furniture
                manufacturing, machine operations, and troubleshooting alongside his father. In
                2016, he expanded his expertise to the UAE, spending nine years selling machinery
                across the UAE, Oman, and Pakistan. This experience provided him with deep market
                insights, understanding the demand, pricing structures, and performance gaps of
                European and Chinese brands.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center border border-[#C0202F] bg-white px-6 py-3 text-[15px] font-normal text-black transition-colors hover:bg-[#FFF8F8]"
                >
                  View More
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center border border-[#C0202F] bg-white px-6 py-3 text-[15px] font-normal text-black transition-colors hover:bg-[#FFF8F8]"
                >
                  Full Catelouge
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/media/office-image-copy.webp"
                alt="AMUZMA office"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Facilities & Features */}
      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <p className="mb-3 text-center font-gothic text-[14px] font-normal uppercase text-[#C0202F]">
            Trusted Global Performance
          </p>
          <h2 className="mb-8 text-center font-gothic text-[28px] font-normal leading-tight text-black sm:mb-12 sm:text-[35px] sm:leading-[35px]">
            Our Facilities &amp; Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {FACILITIES.map((facility) => (
              <ProductCard key={facility.id} product={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Crafted By Experience */}
      <section className="bg-white py-10 font-gothic sm:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <h2 className="mb-6 text-center text-[28px] font-normal leading-tight text-black sm:text-[35px] sm:leading-[35px]">
            Crafted By Experience. Engineered For Production.
          </h2>
          <p className="mx-auto mb-8 max-w-[780px] text-center text-[16px] font-normal leading-relaxed text-black sm:mb-12 sm:text-[18px]">
            Decades of woodworking expertise transformed into machinery solutions that power
            accurate cutting, smooth surfaces, detailed shaping, and flawless finishing.
          </p>
          <div className="grid gap-[3px] sm:grid-cols-2 lg:grid-cols-4">
            {EXPERTISE.map((item) => (
              <ExpertiseCard
                key={item.title}
                title={item.title}
                desc={item.desc}
                bg={item.bg}
                video={item.video}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Shared By Our Clients */}
      <section className="bg-white py-10 font-gothic sm:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <h2 className="mb-8 text-center text-[28px] font-normal leading-tight text-black sm:mb-12 sm:text-[35px] sm:leading-[35px]">
            Experience Shared By Our Clients
          </h2>

          <div className="overflow-hidden">
            <div
              className={`flex ${
                testimonialNoTransition
                  ? ""
                  : "transition-transform duration-500 ease-in-out"
              }`}
              style={{ transform: `translateX(-${testimonialOffset}%)` }}
            >
              {testimonialSlides.map((testimonial, i) => (
                <div
                  key={`${testimonial.id}-${i}`}
                  className="w-full shrink-0 px-3 lg:w-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setTestimonialNoTransition(false);
                  setTestimonialSlide(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  i === testimonialIdx ? "bg-[#666666]" : "bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-[25px] font-gothic"
        style={{
          backgroundImage:
            "url('/media/b1f45558-41a8-4a75-aed2-e7f9d34c90af.jpg.webp')",
        }}
      >
        <div className="mx-auto max-w-[1320px] px-5 py-6 sm:px-6 sm:py-0">
          <div className="grid min-h-[480px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-[650px]">
              <h2 className="mb-5 text-[28px] font-normal leading-tight text-[#C0202F] sm:text-[35px] sm:leading-[35px]">
                Get in touch
              </h2>
              <p className="mb-[2px] text-[16px] font-normal leading-relaxed text-black">
                Looking for reliable woodworking and industrial machines?
              </p>
              <p className="mb-4 text-[16px] font-normal leading-relaxed text-black">
                We&apos;re here to help!
              </p>
              <p className="mb-4 text-[16px] font-normal leading-relaxed text-black">
                We provide reliable woodworking and industrial machines for your
                business needs. Contact us today to find the perfect solution.
              </p>
              <p className="mb-8 text-[16px] font-normal leading-relaxed text-black">
                Contact us today for inquiries, pricing, or product support.
              </p>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://wa.me/971508576840"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[18px] font-normal text-[#C0202F] transition-opacity hover:opacity-80 sm:text-[20px]"
                  >
                    <WhatsAppIcon />
                    <span className="pl-[5px]">0508576840</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Info@amuzmamachinery.com"
                    className="inline-flex items-center break-all text-[16px] font-normal text-[#C0202F] transition-opacity hover:opacity-80 sm:text-[20px]"
                  >
                    <EmailIcon />
                    <span className="pl-[5px]">Info@amuzmamachinery.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full max-w-[650px] lg:justify-self-end">
              <GetInTouchForm />
            </div>
          </div>
        </div>
      </section>

      {/* Product Video */}
      <section className="bg-white py-10 font-gothic sm:py-16">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
          <h2 className="mb-6 text-center text-[28px] font-normal leading-tight text-black sm:text-[35px] sm:leading-[35px]">
            Product Video
          </h2>
          <p className="mx-auto mb-[25px] max-w-[780px] text-center text-[16px] font-normal leading-relaxed text-black sm:text-[18px]">
            Watch now and experience the power, precision, and reliability of Amuzma
            Machinery – before it even arrives at your workshop.
          </p>
          <ProductVideoCarousel />
        </div>
      </section>
    </div>
  );
}

function ProductVideoCarousel() {
  const [videoSlide, setVideoSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const updateCardsPerView = () => setCardsPerView(mq.matches ? 3 : 1);
    updateCardsPerView();
    mq.addEventListener("change", updateCardsPerView);
    return () => mq.removeEventListener("change", updateCardsPerView);
  }, []);

  const maxSlide = Math.max(0, VIDEOS.length - cardsPerView);
  const dotCount = maxSlide + 1;

  useEffect(() => {
    setVideoSlide((current) => Math.min(current, maxSlide));
  }, [maxSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVideoSlide((current) => (current >= maxSlide ? 0 : current + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [maxSlide]);

  const offset = videoSlide * (100 / cardsPerView);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setVideoSlide((current) => Math.max(current - 1, 0))}
        disabled={videoSlide === 0}
        aria-label="Previous videos"
        className="absolute -left-2 top-[calc(50%-20px)] z-10 hidden -translate-y-1/2 text-[#CCCCCC] transition-colors hover:text-[#999999] disabled:cursor-not-allowed disabled:opacity-30 lg:block"
      >
        <ChevronLeft size={28} strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={() => setVideoSlide((current) => Math.min(current + 1, maxSlide))}
        disabled={videoSlide === maxSlide}
        aria-label="Next videos"
        className="absolute -right-2 top-[calc(50%-20px)] z-10 hidden -translate-y-1/2 text-[#CCCCCC] transition-colors hover:text-[#999999] disabled:cursor-not-allowed disabled:opacity-30 lg:block"
      >
        <ChevronRight size={28} strokeWidth={1.5} />
      </button>

      <div className="overflow-hidden px-1">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {VIDEOS.map((video) => (
            <div key={video.id} className="w-full shrink-0 px-[10px] lg:w-1/3">
              <div className="mx-auto max-w-[443px]">
                <div className="aspect-video w-full overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
                {video.title ? (
                  <h3 className="mt-3 text-left text-[16px] font-normal leading-snug text-black">
                    {video.title}
                  </h3>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-[12px]">
        {Array.from({ length: dotCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setVideoSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[6px] w-[6px] rounded-full transition-colors duration-300 ${
              i === videoSlide ? "bg-black" : "bg-[#D9D9D9]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) {
  return (
    <div className="mx-auto flex min-h-[350px] max-w-[460px] flex-col items-center bg-white p-[30px] text-center">
      <img
        src={testimonial.logo}
        alt={testimonial.name}
        className="mb-6 h-[111px] w-[111px] object-contain"
      />
      <p className="mb-1 font-heading text-[15px] font-bold leading-normal text-black">
        {testimonial.name}
      </p>
      <p className="mb-5 font-heading text-[15px] font-normal uppercase leading-normal text-black">
        {testimonial.location}
      </p>
      <p className="max-w-[400px] text-[16px] font-normal leading-relaxed text-black">
        {testimonial.text}
      </p>
    </div>
  );
}

function ProductCard({ product }: { product: typeof FACILITIES[0] }) {
  return (
    <div className="flex flex-col border border-[#E5E5E5] bg-white">
      <div className="flex h-[220px] items-center justify-center bg-white p-5 sm:h-[280px] sm:p-6">
        <img
          src={product.image}
          alt={product.model}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 pt-4">
        <div className="mb-2 flex items-center gap-2">
          <img
            src="/media/logoheader.jpg"
            alt="AMUZMA"
            className="h-5 w-auto object-contain"
          />
          <span className="text-[#D0D0D0]">|</span>
          <span className="font-heading text-[14px] font-medium uppercase tracking-wide text-[#666666]">
            {product.category}
          </span>
        </div>
        <h3 className="mb-3 font-gothic text-[20px] font-normal text-[#666666]">
          {product.model}
        </h3>
        <hr className="mb-4 border-[#E5E5E5]" />
        <ul className="mb-6 flex-1 space-y-2 font-heading text-[16px] font-normal text-[#666666]">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-start gap-2">
              <span className="mt-[2px] text-[10px] leading-none text-black">■</span>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href={product.href}
            className="inline-flex h-[41px] items-center justify-center border border-[#C0202F] bg-white px-4 py-3 sm:px-6 font-gothic text-[15px] font-normal leading-none text-[#C0202F] transition-colors hover:bg-[#FFF8F8]"
          >
            View Details
          </Link>
          <Link
            href="/quote"
            className="inline-flex h-[41px] items-center justify-center bg-black px-4 py-3 sm:px-6 font-gothic text-[15px] font-normal leading-none text-white transition-colors hover:bg-[#222222]"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#C0202F"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C0202F"
      strokeWidth="1.5"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

const getInTouchInputClass =
  "h-[43px] w-full border border-[#E5E5E5] bg-white px-[14px] font-heading text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#C4C4C4]";

function GetInTouchForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captcha: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.captcha.trim() !== "11" || !form.privacy) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C0202F]">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-heading text-[16px] font-medium text-black">
          Form submitted!
        </p>
        <p className="mt-1 font-heading text-[14px] text-[#666666]">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-[10px]">
      <input
        type="text"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={getInTouchInputClass}
        placeholder="Name"
      />
      <div className="grid gap-[10px] sm:grid-cols-2">
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={getInTouchInputClass}
          placeholder="Email"
        />
        <input
          type="tel"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={getInTouchInputClass}
          placeholder="Phone No."
        />
      </div>
      <textarea
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="min-h-[120px] w-full resize-y border border-[#E5E5E5] bg-white p-[14px] font-heading text-[15px] text-[#333333] placeholder:text-[#999999] focus:outline-none focus:border-[#C4C4C4]"
        placeholder="Message"
      />
      <div>
        <p className="mb-1 font-heading text-[16px] font-normal text-black/85">
          What is 7+4?
        </p>
        <input
          type="text"
          required
          value={form.captcha}
          onChange={(e) => setForm({ ...form, captcha: e.target.value })}
          className={getInTouchInputClass}
        />
      </div>
      <label className="flex cursor-pointer items-start gap-2 pt-1">
        <input
          type="checkbox"
          required
          checked={form.privacy}
          onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
          className="mt-1 h-4 w-4 shrink-0 border border-[#E5E5E5] accent-[#C0202F]"
        />
        <span className="font-heading text-[15px] leading-snug text-black">
          I hereby confirm that I have read the privacy policy of the Amuzma.
        </span>
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex h-[43px] items-center justify-center border border-[#C0202F] bg-white px-8 font-gothic text-[15px] font-normal text-[#C0202F] transition-colors hover:bg-[#FFF8F8]"
      >
        Submit Form
      </button>
    </form>
  );
}
