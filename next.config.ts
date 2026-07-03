import type { NextConfig } from "next";

const PRODUCT_SLUGS = [
  "band-saw-65bs",
  "panel-saw-firma-40pl",
  "panel-saw-firma-35ps",
  "panel-saw-forte-40pa",
  "panel-saw-elite-35ts",
  "edge-banding-e5",
  "edge-banding-p6",
  "edge-banding-c7",
  "dust-collector-dc2200",
  "dust-collector-abs5000",
  "dust-collector-rdc3800",
  "veneer-door-press-p-100t",
  "spindle-moulder-elite-30sm",
  "planer-elite-41pf",
  "planer-elite-41cm-cs",
  "thicknesser-elite-41th",
  "thicknesser-firma-63th",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Old top-level product URLs now live under /products/.
      ...PRODUCT_SLUGS.map((slug) => ({
        source: `/${slug}`,
        destination: `/products/${slug}`,
        permanent: true,
      })),
      // The singular /product/ prefix is retired in favor of /products/.
      {
        source: "/product/:id",
        destination: "/products/:id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
