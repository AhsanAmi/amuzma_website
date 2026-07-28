import { MediaImage } from "./MediaImage";

const BANNER_IMAGE = "/media/banner_for_amuzma_website_10-6.jpg-1.webp";

export function PageBanner({ title }: { title: string }) {
  return (
    <section className="relative overflow-hidden">
      <MediaImage
        src={BANNER_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[1410px] px-5 py-10 text-center sm:px-6 sm:py-[63px] lg:px-12 xl:px-16">
        <h1 className="banner-title text-[28px] leading-tight sm:text-[36px] sm:leading-[36px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
