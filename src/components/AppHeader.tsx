"use client";

import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Cart from "@/assets/carts.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";

function AppHeader() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <div className="w-full top-0 z-9999 font-manrope">
      <div className="container px-5 py-2 border-b border-[#979797] sm:border-0">
        <header className="w-full text-white flex justify-between items-center sm:border-b sm:border-[#979797]">
          <h1 className="">
            <Link href="/">
              <Image src={Logo} alt="Logo" />
            </Link>
          </h1>
          <nav className="hidden lg:flex gap-[2.12rem] uppercase text-[0.8125rem]/[192.308%] tracking-[0.125rem] font-bold text-white">
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
          </nav>

          <Button
            asChild
            className="bg-transparent hover:bg-transparent focus:bg-transparent p-0! flex justify-end relative"
          >
            <Link href="/checkout">
              <Image src={Cart} alt="Cart" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </Button>
        </header>
      </div>
    </div>
  );
}

export default AppHeader;
