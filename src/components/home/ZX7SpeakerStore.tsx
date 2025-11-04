import { Button } from "@/components/ui/button";
import Image from "next/image";
import ZX7SpeakerLg from "@/assets/home/desktop/image-speaker-zx7.jpg";
import ZX7SpeakerMd from "@/assets/home/tablet/image-speaker-zx7.jpg";
import ZX7SpeakerSm from "@/assets/home/mobile/image-speaker-zx7.jpg";

function ZX7SpeakerStore() {
  return (
    <section className='w-full font-manrope z-5'>
      <div className='container overflow-hidden aspect-327/320 sm:aspect-689/320 lg:aspect-1110/320 rounded-lg flex flex-col justify-center pt-6 sm:pt-8 lg:pt-12'>
        <div className='w-full h-full relative z-6 rounded-lg overflow-hidden'>
          <div className='w-full h-full'>
            <Image
              src={ZX7SpeakerLg}
              fill
              alt='ZX7 Speaker'
              className='hidden lg:block object-cover object-center'
            />
            <Image
              src={ZX7SpeakerMd}
              fill
              alt='ZX7 Speaker'
              className='hidden sm:block lg:hidden object-cover object-center'
            />
            <Image
              src={ZX7SpeakerSm}
              fill
              alt='ZX7 Speaker'
              className='block sm:hidden object-cover object-center'
            />
          </div>
          <div className='pl-6 sm:pl-15 lg:pl-24 absolute top-1/2 -translate-y-1/2 z-6 flex flex-col gap-8 '>
            <h3 className='text-[1.75rem]/[100%] font-bold tracking-[0.125rem] uppercase text-black justify-start'>ZX7 SPEAKER</h3>
            <Button variant='outline'>SEE PRODUCT</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ZX7SpeakerStore;
