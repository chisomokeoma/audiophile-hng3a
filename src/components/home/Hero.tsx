import { Button } from "@/components/ui/button";
import Image from "next/image";
import Headphone from "@/assets/headphone.svg";
import AppHeader from "../AppHeader";

function Hero() {
  return (
    <section className='relative w-full bg-[#121212] font-manrope hero-bg'>
      <AppHeader/>
      <div className="container min-h-165 sm:aspect-square lg:aspect-auto lg:min-h-screen lg:max-h-[45.56rem] px-5 flex items-center lg:grid lg:grid-cols-3">
        <div className='w-full flex justify-center items-center lg:justify-start lg:col-span-1 relative z-2'>
          <div className='flex flex-col justify-center items-center lg:items-start'>
            <div className='flex flex-col sm:gap-6 text-center lg:text-left'>
              <p className='text-white/50 text-sm not-italic font-normal leading-[normal] tracking-[0.625rem] uppercase'>NEW PRODUCT</p>
              <h2 className='mt-4 mb-6 sm:my-0 text-white text-4xl/[111.11%]  sm:text-[3.5rem]/[3.625rem] not-italic font-bold tracking-[0.0803rem] sm:tracking-[0.125rem] uppercase sm:w-99'>XX99 MARK II HEADPHONES</h2>
              <p className='text-white/75 text-[0.9375rem]/[1.5625rem] not-italic font-medium sm:max-w-87.25 lg:max-w-fit'>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>
            <Button className='mt-7 sm:mt-10'>SEE PRODUCT</Button>
          </div>
        </div>
        <div className='hidden lg:block relative lg:col-span-2 w-full h-full z-1'>
          <Image src={Headphone} fill alt='XX99 MARK II HEADPHONES' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
