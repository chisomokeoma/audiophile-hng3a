"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product, getImageSrc } from "@/lib/productUtils";
import CounterButton from "@/components/sharedUI/CounterButton";
import { useCart } from "@/contexts/CartContext";

interface ProductHeroProps {
  product: Product;
}

function ProductHero({ product }: ProductHeroProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const desktopImage = getImageSrc(product.image.desktop);
  const tabletImage = getImageSrc(product.image.tablet);
  const mobileImage = getImageSrc(product.image.mobile);
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(product.price);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
    alert(`${product.name} (x${quantity}) added to cart!`);
  };

  return (
    <section className="font-manrope">
      <div className="container products flex flex-col sm:flex-row lg:grid lg:grid-cols-2 gap-8 sm:gap-[4.31rem] lg:gap-[7.81rem] sm:items-center">
        <div className="relative w-full aspect-square sm:aspect-281/480 lg:aspect-540/560 rounded-lg overflow-hidden ">
          {desktopImage && (
            <Image
              src={desktopImage}
              alt={product.name}
              className="w-full h-auto hidden lg:block object-cover object-center"
              fill
            />
          )}
          {tabletImage && (
            <Image
              src={tabletImage}
              alt={product.name}
              className="w-full h-auto hidden sm:block lg:hidden object-cover object-center"
              fill
            />
          )}
          {mobileImage && (
            <Image
              src={mobileImage}
              alt={product.name}
              className="w-full h-auto block sm:hidden object-cover object-center"
              fill
            />
          )}
        </div>

        <div className="w-full flex justify-start lg:items-center">
          <div className="flex flex-col items-start">
            {product.new && (
              <p className="text-orange text-sm sm:text-[0.75rem] lg:text-sm not-italic font-normal leading-[normal] tracking-[0.625rem] sm:tracking-[0.53569rem] lg:tracking-[0.625rem] uppercase">
                NEW PRODUCT
              </p>
            )}
            <h3
              className={`text-black  text-[1.75rem] leading-[100%] sm:leading-[114.286%] lg:text-[2.5rem]/[110%] font-bold uppercase tracking-[0.0625rem] sm:tracking-[0.08931rem] text-left mb-8 ${
                product.new ? "mt-4" : ""
              }`}
            >
              {product.name}
            </h3>
            <p className="text-black/50 justify-start text-[0.9375rem]/[166.667%] font-normal text-left ">
              {product.description}
            </p>
            <p className="uppercase font-bold tracking-[0.08038rem] text-[1.125rem] text-black mt-8 mb-[2.94rem]">
              {formattedPrice}
            </p>
            <div className="flex flex-row gap-4 flex-wrap">
              <CounterButton value={quantity} onChange={setQuantity} />
              <Button onClick={handleAddToCart} type="button">
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductHero;
