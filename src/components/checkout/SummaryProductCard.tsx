"use client";

import Image from "next/image";
import { getImageSrc } from "@/lib/productUtils";
import { CartItem } from "@/contexts/CartContext";

interface SummaryProductCardProps {
  item: CartItem;
}

function SummaryProductCard({ item }: SummaryProductCardProps) {
  const image = getImageSrc(item.product.image.mobile);
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(item.product.price);

  return (
    <div className="flex gap-4 items-center font-manrope">
      <div className="size-16 aspect-square relative rounded-lg overflow-hidden bg-gray">
        {image && (
          <Image
            src={image}
            alt={item.product.name}
            fill
            className="object-center object-cover"
          />
        )}
      </div>
      <div className="grow flex justify-between items-center">
        <div className="flex-1">
          <p className="text-[0.9375rem]/[166.667%] font-bold leading-[1.5625rem]">
            {item.product.name}
          </p>
          <p className="text-[0.875rem]/[178.571%] font-bold text-black/50 leading-[1.5625rem]">
            {formattedPrice}
          </p>
        </div>
        <p className="text-[0.9375rem]/[166.667%] font-bold text-black/50 leading-[1.5625rem]">
          x{item.quantity}
        </p>
      </div>
    </div>
  );
}

export default SummaryProductCard;
