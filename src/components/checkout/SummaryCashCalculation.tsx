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
    <div className="font-manrope">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-[0.9375rem]/[166.667%] text-black/50 uppercase">
            TOTAL
          </span>
          <span className="text-[1.125rem]/[100%] font-bold uppercase">
            {formatCurrency(total)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[0.9375rem]/[166.667%] text-black/50 uppercase">
            SHIPPING
          </span>
          <span className="text-[1.125rem]/[100%] font-bold uppercase">
            {formatCurrency(shipping)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[0.9375rem]/[166.667%] text-black/50 uppercase">
            VAT (INCLUDED)
          </span>
          <span className="text-[1.125rem]/[100%] font-bold uppercase">
            {formatCurrency(vat)}
          </span>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <span className="text-[0.9375rem]/[166.667%] text-black/50 uppercase">
            GRAND TOTAL
          </span>
          <span className="text-[1.125rem]/[100%] text-orange font-bold uppercase">
            {formatCurrency(grandTotal)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SummaryCashCalculation;
