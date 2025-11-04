import Image from 'next/image';

import BestGearImgLg from '@/assets/shared/desktop/image-best-gear.jpg';
import BestGearImgMd from '@/assets/shared/tablet/image-best-gear.jpg';
import BestGearImgSm from '@/assets/shared/mobile/image-best-gear.jpg';

function BestAudioGear() {
  return (
    <section className="w-full font-manrope my-30 sm:my-24 lg:my-50">
      <div className="container flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-7.5 lg:items-center">
        <div className="flex justify-center lg:justify-start ">
          <div className="space-y-8 sm:max-w-[573px] lg:max-w-111.25">
            <h3 className="text-black text-3xl sm:text-4xl sm:leading-10 font-bold uppercase tracking-wide sm:tracking-wider text-center lg:text-left">
              BRINGING YOU THE {" "}
              <span className="text-orange">BEST</span>
              {" "}AUDIO GEAR
            </h3>
            <p className="text-black/50 justify-start text-base font-normal leading-6 text-center lg:text-left">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
        </div>
        <div className="relative w-full aspect-327/300 sm:aspect-689/300 lg:aspect-540/588 rounded-lg overflow-hidden ">
          <Image src={BestGearImgLg} alt="A man wearing the XX99 MARK II headphones" className="w-full h-auto hidden lg:block object-cover object-center" />
          <Image src={BestGearImgMd} alt="A man wearing the XX99 MARK II headphones" className="w-full h-auto hidden sm:block lg:hidden object-cover object-center" />
          <Image src={BestGearImgSm} alt="A man wearing the XX99 MARK II headphones" className="w-full h-auto block sm:hidden object-cover object-center" />
        </div>
      </div>
    </section>
  )
}

export default BestAudioGear