"use client";

import { Button } from "@/components/ui/button";
import SummaryProductCard from "./SummaryProductCard";
import SummaryCashCalculation from "./SummaryCashCalculation";
import { useCart } from "@/contexts/CartContext";

function Summary() {
  const { items, getTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="w-full h-fit bg-white lg:max-w-87.5 font-manrope px-6 py-8 sm:px-[2.06rem] sm:py-8 rounded-lg">
        <div className="w-full">
          <h5 className="text-[1.125rem]/[100%] font-bold tracking-[0.08038rem] mb-[1.94rem]">
            SUMMARY
          </h5>
          <p className="text-black/50">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-fit bg-white lg:max-w-87.5 font-manrope px-6 py-8 sm:px-[2.06rem] sm:py-8 rounded-lg">
      <div className="w-full">
        <h5 className="text-[1.125rem]/[100%] font-bold tracking-[0.08038rem] mb-[1.94rem]">
          SUMMARY
        </h5>
        <div className="w-full flex flex-col gap-6">
          {items.map((item) => (
            <SummaryProductCard key={item.product.id} item={item} />
          ))}
        </div>
        <div className="">
          <SummaryCashCalculation total={getTotal()} />
        </div>
        <Button form="form-checkout" type="submit" className="mt-8 w-full">
          Continue & Pay
        </Button>
      </div>
    </div>
  );
}

export default Summary;
