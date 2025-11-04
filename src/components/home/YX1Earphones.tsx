import YX1EarphonesLg from '@/assets/home/desktop/image-earphones-yx1.jpg'
import YX1EarphonesMd from '@/assets/home/tablet/image-earphones-yx1.jpg'
import YX1EarphonesSm from '@/assets/home/mobile/image-earphones-yx1.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function YX1Earphones() {
  return (
    <section className="w-full font-manrope py-6 sm:py-8 lg:py-12">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-3 lg:gap-7.5">
        <div className="w-full relative aspect-21/12 sm:aspect-21/20 lg:aspect-34/20 rounded-lg overflow-hidden">
          <Image
            src={YX1EarphonesLg}
            alt="YX1 Earphones"
            className="hidden lg:block object-cover object-center"
            fill
          />
          <Image
            src={YX1EarphonesMd}
            alt="YX1 Earphones"
            className="hidden sm:block lg:hidden object-cover object-bottom-left"
            fill
          />
          <Image
            src={YX1EarphonesSm}
            alt="YX1 Earphones"
            className="block sm:hidden object-cover object-center"
            fill
          />
        </div>
        <div className="bg-gray w-full aspect-21/12 sm:aspect-21/20 lg:aspect-34/20 rounded-lg overflow-hidden flex flex-col gap-8 justify-center pl-6 md:pl-10 lg:pl-16">
          <h3 className='text-[1.75rem]/[100%] font-bold tracking-[0.125rem] uppercase text-black justify-start'>YX1 Earphones</h3>
          <Button variant='outline'>SEE PRODUCT</Button>
        </div>
      </div>
    </section>
  )
}

export default YX1Earphones