"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Product, getImageSrc } from "@/lib/productUtils";

interface CategoryProductsProps {
  category: string;
  products: Product[];
}

function CategoryProducts({ category, products }: CategoryProductsProps) {
  return (
    <main className="w-full mt-16 mb-30 sm:my-30 lg:my-40">
      <div className="container space-y-30 lg:space-y-40">
        {products.map((product, index) => {
          if (!product.categoryImage) {
            return null;
          }

          const desktopImage = getImageSrc(product.categoryImage.desktop);
          const tabletImage = getImageSrc(product.categoryImage.tablet);
          const mobileImage = getImageSrc(product.categoryImage.mobile);
          const isEven = index % 2 === 0;

          return (
            <div
              key={product.id}
              className="products flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-13 lg:gap-32"
            >
              <div
                className={`relative w-full aspect-327/352 sm:aspect-689/352 lg:aspect-540/560 rounded-lg overflow-hidden ${
                  !isEven ? "lg:order-2" : ""
                }`}
              >
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

              <div
                className={`flex justify-center lg:justify-start lg:items-center ${
                  !isEven ? "lg:order-1" : ""
                }`}
              >
                <div className="space-y-8 sm:max-w-143 lg:max-w-111.25 flex flex-col items-center lg:items-start">
                  {product.new && (
                    <p className="text-orange text-sm not-italic font-normal leading-[normal] tracking-[0.625rem] uppercase">
                      NEW PRODUCT
                    </p>
                  )}
                  <h3 className="text-black text-3xl sm:text-4xl sm:leading-10 font-bold uppercase tracking-wide sm:tracking-wider text-center lg:text-left sm:max-w-66">
                    {product.name}
                  </h3>
                  <p className="text-black/50 justify-start text-base font-normal leading-6 text-center lg:text-left">
                    {product.description}
                  </p>
                  <Button asChild>
                    <Link href={`/${category}/${product.slug}`}>
                      SEE PRODUCT
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default CategoryProducts;
