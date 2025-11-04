import Image from "next/image";
import { Button } from "../ui/button";
import Z89Speaker from "@/assets/home/desktop/image-speaker-zx9.png";
import PatternCircles from "@/assets/home/desktop/pattern-circles.svg";

function ZX9SpeakerStore() {
  return (
    <main className='w-full font-manrope'>
      <div className='container relative overflow-hidden'>
        {/* Div for curly circles */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-30 sm:-translate-y-2/7 lg:translate-x-0 lg:translate-y-0 lg:-top-6 lg:-left-24 w-139.5 sm:w-236 aspect-square z-4">
          <Image src={PatternCircles} fill alt='Pattern circles' className='object-contain ' />
        </div>
        <div className='bg-orange sm:w-full sm:aspect-689/720 lg:aspect-1110/560 rounded-lg flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-16 lg:gap-35 overflow-hidden py-14 sm:py-0'>

        {/* lg:pl-[7.343125rem] lg:pr-23.75 lg:justify-between */}
          <div className='relative w-51.75 sm:w-59.25rem aspect-square lg:w-102.5 lg:h-full z-5'>
            <Image
              src={Z89Speaker}
              alt='ZX9Speaker'
              className='object-contain aspect-756/918 object-bottom translate-y-2 z-0'
              fill
            />
          </div>
          <div className='w-70 sm:w-87 lg:w-80 lg:h-72 relative z-5'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-6 sm:gap-0'>
              <h3 className='text-[2.25rem]/[111.111%] sm:text-[3.5rem]/[103.571%] font-bold text-white justify-start uppercase tracking-[0.08038rem] sm:tracking-[0.125rem]'>
                ZX9
                <br />
                SPEAKER
              </h3>
              <p className='text-[0.9375rem]/[1.5625rem] text-white/75 justify-start sm:mt-6 sm:mb-10'>
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
              </p>
              <Button className='' variant="secondary">SEE PRODUCT</Button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default ZX9SpeakerStore;
