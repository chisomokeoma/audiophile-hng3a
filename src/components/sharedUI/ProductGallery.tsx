import Image from "next/image";
import { Product, getImageSrc } from "@/lib/productUtils";

interface ProductGalleryProps {
  product: Product;
}

function ProductGallery({ product }: ProductGalleryProps) {
  const firstDesktop = getImageSrc(product.gallery.first.desktop);
  const firstTablet = getImageSrc(product.gallery.first.tablet);
  const firstMobile = getImageSrc(product.gallery.first.mobile);

  const secondDesktop = getImageSrc(product.gallery.second.desktop);
  const secondTablet = getImageSrc(product.gallery.second.tablet);
  const secondMobile = getImageSrc(product.gallery.second.mobile);

  const thirdDesktop = getImageSrc(product.gallery.third.desktop);
  const thirdTablet = getImageSrc(product.gallery.third.tablet);
  const thirdMobile = getImageSrc(product.gallery.third.mobile);

  return (
    <section className="w-full my-22 sm:my-30 lg:my-40">
      <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-4.5 sm:gap-y-5 lg:gap-x-7.5 lg:gap-y-8 px-5">
        <div className="relative col-span-1 aspect-327/174 sm:aspect-auto rounded-lg overflow-hidden">
          {firstDesktop && (
            <Image
              src={firstDesktop}
              alt={product.name}
              className="w-full h-auto hidden lg:block object-cover object-center"
              fill
            />
          )}
          {firstTablet && (
            <Image
              src={firstTablet}
              alt={product.name}
              className="w-full h-auto hidden sm:block lg:hidden object-cover object-center"
              fill
            />
          )}
          {firstMobile && (
            <Image
              src={firstMobile}
              alt={product.name}
              className="w-full h-auto block sm:hidden object-cover object-center"
              fill
            />
          )}
        </div>
        <div className="relative col-span-1 aspect-327/174 sm:aspect-auto rounded-lg overflow-hidden">
          {secondDesktop && (
            <Image
              src={secondDesktop}
              alt={product.name}
              className="w-full h-auto hidden lg:block object-cover object-center"
              fill
            />
          )}
          {secondTablet && (
            <Image
              src={secondTablet}
              alt={product.name}
              className="w-full h-auto hidden sm:block lg:hidden object-cover object-center"
              fill
            />
          )}
          {secondMobile && (
            <Image
              src={secondMobile}
              alt={product.name}
              className="w-full h-auto block sm:hidden object-cover object-center"
              fill
            />
          )}
        </div>
        <div className="relative col-span-1 sm:col-start-2 sm:row-start-1 sm:row-span-2 aspect-327/368 sm:395/368 lg:aspect-635/592 rounded-lg overflow-hidden">
          {thirdDesktop && (
            <Image
              src={thirdDesktop}
              alt={product.name}
              className="w-full h-auto hidden lg:block object-cover object-center"
              fill
            />
          )}
          {thirdTablet && (
            <Image
              src={thirdTablet}
              alt={product.name}
              className="w-full h-auto hidden sm:block lg:hidden object-cover object-center"
              fill
            />
          )}
          {thirdMobile && (
            <Image
              src={thirdMobile}
              alt={product.name}
              className="w-full h-auto block sm:hidden object-cover object-center"
              fill
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductGallery;
