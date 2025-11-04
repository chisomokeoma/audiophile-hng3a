import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "@/icons";

function AppFooter() {
  return (
    <footer className="w-full bg-black font-manrope text-white">
      <div className="container relative flex flex-col gap-y-12 sm:gap-y-8 lg:gap-y-10 pt-13 pb-[2.37rem] sm:pt-15 sm:pb-[2.88rem] lg:pt-[4.69rem] lg:pb-12 text-center sm:text-left">
        {/* Decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 sm:left-5 sm:translate-x-0 bg-orange w-25.25 h-1" />
        <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start flex-wrap gap-y-12 sm:gap-y-8">
          {/* The Logo and the links */}
          <div className="">
            <Link href="/" className="">
              <Image src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[2.13rem] uppercase text-[0.8125rem]/[192.308%] tracking-[0.125rem] font-bold text-white">
            <Link href="/" className="hover:text-orange">
              HOME
            </Link>
            <Link href="/headphones" className="hover:text-orange">
              HEADPHONES
            </Link>
            <Link href="/speakers" className="hover:text-orange">
              SPEAKERS
            </Link>
            <Link href="/earphones" className="hover:text-orange">
              EARPHONES
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 sm:gap-y-20 lg:gap-y-14">
          {/* The copyright information and social media links */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 order-1">
            <p className="lg:max-w-135 text-[0.9375rem]/[166.67%] text-white/50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
          </div>
          <div className="col-span-1 order-3 lg:order-2 flex justify-center items-end sm:justify-end">
            {/* Social media links would go here */}
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-orange">
                <Facebook size="1.5rem" />
              </Link>
              <Link href="#" className="text-white hover:text-orange">
                <Twitter size="1.5rem" />
              </Link>
              <Link href="#" className="text-white hover:text-orange">
                <Instagram size="1.5rem" />
              </Link>
            </div>
          </div>
          <div className="col-span-1 order-2 lg:order-3">
            <p className="text-[0.9375rem]/[166.67%] text-white/50 font-bold">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
