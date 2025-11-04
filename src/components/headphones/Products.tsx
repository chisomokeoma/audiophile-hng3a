import Image from "next/image";
import { Button } from "@/components/ui/button";
import XX9Mark2Lg from "@/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import XX9Mark2Md from "@/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import XX9Mark2Sm from "@/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";

function Products() {
  return (
    <main className='w-full mt-16 mb-30 sm:my-30 lg:my-40'>
      <div className='container space-y-30 lg:space-y-40'>
        <div className='products flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-13 lg:gap-32'>
          <div className='relative w-full aspect-327/352 sm:aspect-689/352 lg:aspect-540/560 rounded-lg overflow-hidden '>
            <Image
              src={XX9Mark2Lg}
              alt='XX99 MARK II headphones'
              className='w-full h-auto hidden lg:block object-cover object-center'
            />
            <Image
              src={XX9Mark2Md}
              alt='XX99 MARK II headphones'
              className='w-full h-auto hidden sm:block lg:hidden object-cover object-center'
            />
            <Image
              src={XX9Mark2Sm}
              alt='XX99 MARK II headphones'
              className='w-full h-auto block sm:hidden object-cover object-center'
            />
          </div>

          <div className='flex justify-center lg:justify-start lg:items-center'>
            <div className='space-y-8 sm:max-w-143 lg:max-w-111.25 flex flex-col items-center lg:items-start'>
              <p className='text-orange text-sm not-italic font-normal leading-[normal] tracking-[0.625rem] uppercase'>NEW PRODUCT</p>
              <h3 className='text-black text-3xl sm:text-4xl sm:leading-10 font-bold uppercase tracking-wide sm:tracking-wider text-center lg:text-left sm:max-w-66'>
                XX99 Mark II Headphones
              </h3>
              <p className='text-black/50 justify-start text-base font-normal leading-6 text-center lg:text-left'>
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Button>
                SEE PRODUCT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
