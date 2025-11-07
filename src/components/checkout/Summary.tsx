"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import SummaryProductCard from "./SummaryProductCard";
import SummaryCashCalculation from "./SummaryCashCalculation";
import { useCart } from "@/contexts/CartContext";

function Summary() {
  const { items, getTotal } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const form = document.getElementById("form-checkout") as HTMLFormElement;
    if (!form) return;

    const observer = new MutationObserver(() => {
      const submitting = form.getAttribute("data-submitting") === "true";
      setIsSubmitting(submitting);
    });

    observer.observe(form, {
      attributes: true,
      attributeFilter: ["data-submitting"],
    });

    return () => observer.disconnect();
  }, []);

  if (items.length === 0) {
    return (
      <div className="w-full h-fit bg-white lg:max-w-[21.875rem] font-manrope px-6 py-8 sm:px-[2.06rem] sm:py-8 rounded-lg">
        <div className="w-full">
          <h5 className="text-[1.125rem]/[100%] font-bold tracking-[0.08038rem] uppercase mb-[1.94rem]">
            SUMMARY
          </h5>
          <p className="text-black/50 text-center">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-fit bg-white lg:max-w-[21.875rem] font-manrope px-6 py-8 sm:px-[2.06rem] sm:py-8 rounded-lg">
      <div className="w-full">
        <h5 className="text-[1.125rem]/[100%] font-bold tracking-[0.08038rem] uppercase mb-[1.94rem]">
          SUMMARY
        </h5>
        <div className="w-full flex flex-col gap-6 mb-8">
          {items.map((item) => (
            <SummaryProductCard key={item.product.id} item={item} />
          ))}
        </div>
        <SummaryCashCalculation total={getTotal()} />
        <Button
          form="form-checkout"
          type="submit"
          className="mt-8 w-full h-12 text-[0.8125rem] font-bold tracking-[0.0625rem] uppercase"
          disabled={items.length === 0 || isSubmitting}
          aria-label="Continue to payment"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Continue & Pay"}
        </Button>
      </div>
    </div>
  );
}

export default Summary;
