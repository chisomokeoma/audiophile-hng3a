import Image from "next/image";
import Headphones from "@/assets/shared/desktop/headphones.png";
import Speakers from "@/assets/shared/desktop/speakers.png";
import Earphones from "@/assets/shared/desktop/earphones.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "@/icons";
function ShopSection() {
  return (
    <section className="w-full font-manrope mt-10 mb-30 sm:my-24 lg:mt-30 lg:mb-42">
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-[calc(20px/3)] lg:gap-5">
        {/* Shop section content goes here */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-1/2 aspect-square -mb-3 sm:-mb-1 lg:-mb-5">
            <Image src={Headphones} fill className="" alt="Headphone" />
          </div>
          <div className="absolute bottom-0 w-full aspect-350/140 sm:aspect-350/220 lg:aspect-350/170 bg-gray -z-1 rounded-lg" />
          <div className="flex flex-col items-center justify-center gap-y-[1.06rem] lg:gap-y-[0.94rem] pb-5.5 lg:pb-7.5">
            <p className="uppercase font-bold tracking-[0.06694rem] lg:tracking-[0.08038rem] text-[0.9375rem] lg:text-[1.125rem] text-black">
              HEADPHONES
            </p>
            <Button variant="ghost" asChild>
              <Link
                href="/headphones"
                className="uppercase text-[0.8125rem]/[100%] font-bold tracking-[0.0625rem]"
              >
                SHOP
                <ChevronRight className="text-orange" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-1/2 aspect-square -mb-3 sm:-mb-1 lg:-mb-5">
            <Image src={Speakers} fill className="" alt="Speakers" />
          </div>
          <div className="absolute bottom-0 w-full aspect-350/140 sm:aspect-350/220 lg:aspect-350/170 bg-gray -z-1 rounded-lg" />
          <div className="flex flex-col items-center justify-center gap-y-[1.06rem] lg:gap-y-[0.94rem] pb-5.5 lg:pb-7.5">
            <p className="uppercase font-bold tracking-[0.06694rem] lg:tracking-[0.08038rem] text-[0.9375rem] lg:text-[1.125rem] text-black">
              Speakers
            </p>
            <Button variant="ghost" asChild>
              <Link
                href="/speakers"
                className="uppercase text-[0.8125rem]/[100%] font-bold tracking-[0.0625rem]"
              >
                SHOP
                <ChevronRight className="text-orange" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-1/2 aspect-438/380 -mb-3 sm:-mb-1 lg:-mb-5">
            <Image
              src={Earphones}
              fill
              className="aspect-ratio"
              alt="Earphones"
            />
          </div>
          <div className="absolute bottom-0 w-full aspect-350/140 sm:aspect-350/220 lg:aspect-350/170 bg-gray -z-1 rounded-lg" />
          <div className="flex flex-col items-center justify-center gap-y-[1.06rem] lg:gap-y-[0.94rem] pb-5.5 lg:pb-7.5">
            <p className="uppercase font-bold tracking-[0.06694rem] lg:tracking-[0.08038rem] text-[0.9375rem] lg:text-[1.125rem] text-black">
              Earphones
            </p>
            <Button variant="ghost" asChild>
              <Link
                href="/earphones"
                className="uppercase text-[0.8125rem]/[100%] font-bold tracking-[0.0625rem]"
              >
                SHOP
                <ChevronRight className="text-orange" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopSection;
