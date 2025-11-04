"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BiPlus, BiMinus } from "@/icons";
import { Input } from "@/components/ui/input";

interface CounterButtonProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
}

function CounterButton({
  value: controlledValue,
  onChange,
  min = 1,
  max = 99,
}: CounterButtonProps) {
  const [internalValue, setInternalValue] = useState(1);

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const setValue = (newValue: number) => {
    const clampedValue = Math.max(min, Math.min(max, newValue));
    if (controlledValue === undefined) {
      setInternalValue(clampedValue);
    }
    onChange?.(clampedValue);
  };

  const handleDecrease = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value) || min;
    setValue(inputValue);
  };

  return (
    <Button
      type="button"
      className="w-fit! bg-gray hover:bg-gray p-0!"
      onClick={(e) => e.preventDefault()}
    >
      <span
        className="inline-flex justify-center items-center h-full text-black/25 hover:text-orange py-2 pl-4 pr-0.5 cursor-pointer"
        onClick={handleDecrease}
      >
        <BiMinus />
      </span>
      <Input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-fit! aspect-square h-[calc(100%-0.5rem)] border-none border-0! shadow-none! outline-none caret-orange text-center"
      />
      <span
        className="inline-flex text-black/25 hover:text-orange py-2 pl-0.5 pr-4 cursor-pointer"
        onClick={handleIncrease}
      >
        <BiPlus />
      </span>
    </Button>
  );
}

export default CounterButton;
