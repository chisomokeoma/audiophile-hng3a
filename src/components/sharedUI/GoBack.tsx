"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface GoBackProps {
  category?: string;
}

function GoBack({ category }: GoBackProps) {
  const router = useRouter();

  const handleGoBack = () => {
    if (category) {
      router.push(`/${category}`);
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className="text-black/50 text-[0.9375rem]/[166.667%] font-medium mb-6 sm:mb-8 lg:mb-16 hover:text-orange transition-colors"
    >
      Go Back
    </button>
  );
}

export default GoBack;
