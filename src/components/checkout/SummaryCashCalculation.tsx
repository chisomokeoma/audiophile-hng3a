interface SummaryCashCalculationProps {
  total: number;
}

function SummaryCashCalculation({ total }: SummaryCashCalculationProps) {
  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="font-manrope mt-8">
      <div className="">
        <div className="flex flex-col gap-2">
          <p className="flex justify-between">
            <span className="inline-block text-[0.9375rem]/[166.667%] text-black/50 uppercase">
              TOTAL
            </span>
            <span className="inline-block text-[1.125rem]/[100%] uppercase font-bold">
              {formatCurrency(total)}
            </span>
          </p>

          <p className="flex justify-between">
            <span className="inline-block text-[0.9375rem]/[166.667%] text-black/50 uppercase">
              SHIPPING
            </span>
            <span className="inline-block text-[1.125rem]/[100%] uppercase font-bold">
              {formatCurrency(shipping)}
            </span>
          </p>

          <p className="flex justify-between">
            <span className="inline-block text-[0.9375rem]/[166.667%] text-black/50 uppercase">
              VAT (INCLUDED)
            </span>
            <span className="inline-block text-[1.125rem]/[100%] uppercase font-bold">
              {formatCurrency(vat)}
            </span>
          </p>
        </div>
        <div className="mt-6 mb-8">
          <p className="flex justify-between">
            <span className="inline-block text-[0.9375rem]/[166.667%] text-black/50 uppercase">
              GRAND TOTAL
            </span>
            <span className="inline-block text-[1.125rem]/[100%] text-orange font-bold uppercase">
              {formatCurrency(grandTotal)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCashCalculation;
