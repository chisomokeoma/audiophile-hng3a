"use client";

import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCart } from "@/contexts/CartContext";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { getImageSrc } from "@/lib/productUtils";

const formSchema = z
  .object({
    name: z.string().min(2, "Name is required").max(100, "Name is too long"),
    email: z.string().email("Wrong format").max(255, "Email is too long"),
    phone: z
      .string()
      .min(10, "Invalid phone number")
      .max(20, "Phone number is too long")
      .regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number format"),
    address: z
      .string()
      .min(2, "Address is required")
      .max(200, "Address is too long"),
    zip: z.string().min(3, "Invalid ZIP").max(10, "ZIP code is too long"),
    city: z
      .string()
      .min(2, "City is required")
      .max(100, "City name is too long"),
    country: z
      .string()
      .min(2, "Country is required")
      .max(100, "Country name is too long"),
    paymentMethod: z.enum(["eMoney", "cash"]),
    eMoneyNumber: z.string().optional(),
    eMoneyPin: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "eMoney") {
        return (
          data.eMoneyNumber &&
          data.eMoneyNumber.length >= 9 &&
          data.eMoneyNumber.length <= 9 &&
          /^\d+$/.test(data.eMoneyNumber) &&
          data.eMoneyPin &&
          data.eMoneyPin.length >= 4 &&
          data.eMoneyPin.length <= 4 &&
          /^\d+$/.test(data.eMoneyPin)
        );
      }
      return true;
    },
    {
      message: "e-Money number (9 digits) and PIN (4 digits) are required",
      path: ["eMoneyNumber"],
    }
  )
  .refine(
    (data) => {
      if (data.paymentMethod === "eMoney") {
        return (
          data.eMoneyPin &&
          data.eMoneyPin.length >= 4 &&
          data.eMoneyPin.length <= 4 &&
          /^\d+$/.test(data.eMoneyPin)
        );
      }
      return true;
    },
    {
      message: "e-Money PIN must be exactly 4 digits",
      path: ["eMoneyPin"],
    }
  );

type FormData = z.infer<typeof formSchema>;

function CheckOutForm() {
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      paymentMethod: "eMoney",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  const paymentMethod = useWatch({
    control: form.control,
    name: "paymentMethod",
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const { items, getTotal, clearCart } = useCart();

  const onSubmit = async (data: FormData) => {
    if (isSubmittingOrder) {
      return;
    }

    if (items.length === 0) {
      form.setError("root", {
        type: "manual",
        message:
          "Your cart is empty. Please add items to your cart before checkout.",
      });
      return;
    }

    if (items.some((item) => item.quantity <= 0)) {
      form.setError("root", {
        type: "manual",
        message: "Invalid quantities detected. Please update your cart.",
      });
      return;
    }

    setIsSubmittingOrder(true);
    form.clearErrors("root");

    try {
      const subtotal = getTotal();
      const shipping = 50;
      const vat = Math.round(subtotal * 0.2);
      const grandTotal = subtotal + shipping;

      if (subtotal <= 0) {
        form.setError("root", {
          type: "manual",
          message: "Invalid order total. Please check your cart.",
        });
        return;
      }

      const cartItems = items.map((item) => {
        const imageSrc = getImageSrc(item.product.image.mobile);
        const imageUrl =
          typeof imageSrc === "string"
            ? imageSrc
            : imageSrc?.src || imageSrc?.default || "";
        return {
          productId: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          image: imageUrl,
        };
      });

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          items: cartItems,
          totals: {
            subtotal,
            shipping,
            vat,
            grandTotal,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit order");
      }

      const result = await response.json();
      clearCart();
      window.location.href = `/checkout/confirmation?orderId=${result.orderId}`;
    } catch (error) {
      console.error("Checkout error:", error);
      form.setError("root", {
        type: "manual",
        message:
          error instanceof Error
            ? error.message
            : "Failed to submit order. Please try again.",
      });
      setIsSubmittingOrder(false);
    }
  };

  return (
    <div className="">
      {errors.root && (
        <div
          role="alert"
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
        >
          {errors.root.message}
        </div>
      )}
      <form
        id="form-checkout"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-10 w-full mx-auto"
        noValidate
        data-submitting={isSubmittingOrder}
      >
        <FieldGroup>
          {/* Billing Details */}
          <section>
            <h2 className="text-sm font-bold text-orange-500 mb-4 tracking-wide">
              BILLING DETAILS
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex justify-between items-center mb-1">
                      <FieldLabel htmlFor="form-customer-name">Name</FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                    <Input
                      type="text"
                      placeholder="Alexei Ward"
                      id="form-customer-name"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      className={cn(
                        "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                      )}
                    />
                  </Field>
                )}
              />

              {/* Email */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex justify-between items-center mb-1">
                      <FieldLabel htmlFor="form-customer-email">
                        Email Address
                      </FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                    <Input
                      type="email"
                      placeholder="alexei@gmail.com"
                      id="form-customer-email"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      className={cn(
                        "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                      )}
                    />
                  </Field>
                )}
              />

              {/* Phone */}
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex justify-between items-center mb-1">
                      <FieldLabel htmlFor="form-customer-phone">
                        Phone Number
                      </FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                    <Input
                      type="text"
                      placeholder="+1 (202) 555-0136"
                      id="form-customer-phone"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      className={cn(
                        "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                      )}
                    />
                  </Field>
                )}
              />
            </div>
          </section>

          {/* Shipping Info */}
          <section>
            <h2 className="text-sm font-bold text-orange-500 mb-4 tracking-wide">
              SHIPPING INFO
            </h2>
            <div className="grid gap-6">
              <Controller
                name="address"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex justify-between items-center mb-1">
                      <FieldLabel htmlFor="form-shipping-address">
                        Address
                      </FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                    <Input
                      type="text"
                      placeholder="1137 Williams Avenue"
                      id="form-shipping-address"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      className={cn(
                        "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                      )}
                    />
                  </Field>
                )}
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <Controller
                  name="zip"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex justify-between items-center mb-1">
                        <FieldLabel htmlFor="form-customer-zip">
                          ZIP Code
                        </FieldLabel>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </div>
                      <Input
                        type="text"
                        placeholder="10001"
                        id="form-customer-zip"
                        aria-invalid={fieldState.invalid}
                        {...field}
                        className={cn(
                          "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                        )}
                      />
                    </Field>
                  )}
                />

                <Controller
                  name="city"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex justify-between items-center mb-1">
                        <FieldLabel htmlFor="form-shipping-city">
                          City
                        </FieldLabel>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </div>
                      <Input
                        type="text"
                        placeholder="New York"
                        aria-invalid={fieldState.invalid}
                        id="form-shipping-city"
                        {...field}
                        className={cn(
                          "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                        )}
                      />
                    </Field>
                  )}
                />
              </div>

              <Controller
                name="country"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex justify-between items-center mb-1">
                      <FieldLabel htmlFor="form-shipping-country">
                        Country
                      </FieldLabel>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </div>
                    <Input
                      type="text"
                      placeholder="United States"
                      {...field}
                      aria-invalid={fieldState.invalid}
                      id="form-shipping-country"
                      className={cn(
                        "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                      )}
                    />
                  </Field>
                )}
              />
            </div>
          </section>

          {/* Payment Details */}
          <section>
            <h2 className="text-sm font-bold text-orange-500 mb-4 tracking-wide">
              PAYMENT DETAILS
            </h2>

            <Controller
              name="paymentMethod"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="grid grid-cols-1 sm:grid-cols-2"
                >
                  <h6 className="text-xs font-semibold text-gray-700 mb-2 block col-span-1">
                    Payment Method
                  </h6>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="col-span-1 grid grid-cols-1 gap-4"
                  >
                    <FieldLabel
                      className={cn(
                        "w-full flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition-all text-[0.875rem]/[100%]! tracking-[-0.01563rem]!",
                        "hover:border-orange-500",
                        field.value === "eMoney" &&
                          "border-orange-500! bg-white!"
                      )}
                    >
                      <RadioGroupItem value="eMoney" />
                      e-Money
                    </FieldLabel>

                    <FieldLabel
                      className={cn(
                        "w-full flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition-all text-[0.875rem]/[100%]! tracking-[-0.01563rem]!",
                        "hover:border-orange-500",
                        field.value === "cash" && "border-orange-500! bg-white!"
                      )}
                    >
                      <RadioGroupItem value="cash" className="" />
                      Cash on Delivery
                    </FieldLabel>
                  </RadioGroup>
                </Field>
              )}
            />

            {paymentMethod === "eMoney" && (
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <Controller
                  name="eMoneyNumber"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex justify-between items-center mb-1">
                        <FieldLabel htmlFor="form-emoney-number">
                          e-Money Number
                        </FieldLabel>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </div>
                      <Input
                        type="text"
                        placeholder="238521993"
                        id="form-emoney-number"
                        aria-invalid={fieldState.invalid}
                        maxLength={9}
                        {...field}
                        className={cn(
                          "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                        )}
                      />
                    </Field>
                  )}
                />

                <Controller
                  name="eMoneyPin"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex justify-between items-center mb-1">
                        <FieldLabel htmlFor="form-emoney-pin">
                          e-Money PIN
                        </FieldLabel>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </div>
                      <Input
                        type="text"
                        placeholder="6891"
                        id="form-emoney-pin"
                        aria-invalid={fieldState.invalid}
                        maxLength={4}
                        {...field}
                        className={cn(
                          "focus-visible:border-orange focus-visible:border-2 focus-visible:ring-0"
                        )}
                      />
                    </Field>
                  )}
                />
              </div>
            )}
          </section>
        </FieldGroup>
      </form>
    </div>
  );
}

export default CheckOutForm;
