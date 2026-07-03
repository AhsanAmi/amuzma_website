import type { Metadata } from "next";
import { ProductDetail } from "../../pages/ProductDetail";
import { getPageTitle } from "../../data/pageMetadata";

const PRODUCT_IDS = [
  "cnc-router-forte-13cr",
  "cnc-router-forte-15cr",
  "wide-belt-sander-firma-1300ws",
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

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return PRODUCT_IDS.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return { title: getPageTitle(`products/${id}`) };
}

export default ProductDetail;
