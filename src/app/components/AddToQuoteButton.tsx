"use client";

import { useRouter } from "next/navigation";
import {
  formatQuoteProductName,
  productIdFromHref,
  useQuoteCart,
} from "../context/QuoteCartContext";

type AddToQuoteButtonProps = {
  name: string;
  image: string;
  model?: string;
  /** Product page path, e.g. `/products/band-saw-65bs`. */
  href?: string;
  /** Explicit product id; takes priority over `href`. */
  productId?: string;
  className?: string;
  children: React.ReactNode;
};

export function AddToQuoteButton({
  name,
  image,
  model,
  href,
  productId,
  className,
  children,
}: AddToQuoteButtonProps) {
  const router = useRouter();
  const { addItem } = useQuoteCart();

  const handleClick = () => {
    const id = productId ?? (href ? productIdFromHref(href) : "");
    if (!id) return;

    addItem({
      id,
      name: formatQuoteProductName(name, model),
      image,
    });
    router.push("/quote");
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
