"use client";

import Link from "next/link";
import { MediaImage as Image } from "./MediaImage";

const DEFAULT_PART_IMAGES = [
  "/media/CNC-01.jpg-scaled.webp",
  "/media/CNC-03.jpg-scaled.webp",
  "/media/CNC-04.jpg-scaled.webp",
  "/media/1-1.webp",
  "/media/2-1.webp",
  "/media/3.webp",
];

export function ProductPartsSection({
  sectionTitle = "Parts",
  partsLabel = "Forte 1325CR",
  images = DEFAULT_PART_IMAGES,
  parts,
}: {
  sectionTitle?: string;
  partsLabel?: string;
  images?: string[];
  parts?: { name: string; image: string }[];
}) {
  const items =
    parts ??
    images.map((image) => ({
      name: partsLabel,
      image,
    }));

  return (
    <section id="parts" className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1410px] px-6 lg:px-[100px]">
        <h2 className="text-center font-gothic text-[24px] font-normal leading-tight text-black sm:text-[30px] sm:leading-[30px]">
          {sectionTitle}
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5">
          {items.map((item, index) => (
            <div key={`${item.name}-${index}`} className="p-[10px]">
              <div className="group overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={220}
                  height={140}
                  className="mx-auto h-[130px] w-full object-contain object-bottom transition-transform duration-300 ease-out group-hover:scale-110 sm:h-[140px]"
                />
              </div>
              <p className="mt-1 font-gothic text-[16px] font-normal leading-[27.2px] text-[#666666]">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex h-[43px] items-center justify-center bg-black px-8 font-gothic text-[15px] font-normal text-white transition-opacity hover:opacity-90"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
