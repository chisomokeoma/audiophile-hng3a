"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AppHeader from "@/components/AppHeader";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ConfirmationIcon from "@/assets/checkout/icon-order-confirmation.svg";

interface OrderItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  orderId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  shipping: {
    address: string;
    zip: string;
    city: string;
    country: string;
  };
  paymentMethod: string;
  items: OrderItem[];
  totals: {
    subtotal: number;
    shipping: number;
    vat: number;
    grandTotal: number;
  };
  createdAt: number;
}

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) {
      setError("Order ID not found");
      setLoading(false);
      return;
    }

    fetch(`/api/orders/${orderId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Order not found");
        }
        return res.json();
      })
      .then((data) => {
        setOrder(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) {
    return (
      <main className="w-full bg-offwhite min-h-screen">
        <AppHeader />
        <div className="container py-20">
          <p className="text-center">Loading order details...</p>
        </div>
      </main>
    );
  }

  if (error || !order) {
    return (
      <main className="w-full bg-offwhite min-h-screen">
        <AppHeader />
        <div className="container py-20">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
            <p className="text-black/50 mb-8">
              {error || "Unable to load order details"}
            </p>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-offwhite min-h-screen font-manrope">
      <AppHeader />
      <div className="container py-8 sm:py-12 lg:py-20">
        <div className="max-w-111.25 mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="mb-6 sm:mb-8">
              <Image
                src={ConfirmationIcon}
                alt="Order Confirmation"
                width={64}
                height={64}
                className="mb-6"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4">
              Thank you for your order
            </h1>
            <p className="text-black/50 text-base sm:text-lg">
              You will receive an email confirmation shortly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            <div className="bg-white rounded-lg p-6 lg:order-2">
              <h2 className="text-lg font-bold uppercase mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                {order.items.slice(0, 1).map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden relative">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-black/50 text-sm">
                        {formatCurrency(item.price)} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
                {order.items.length > 1 && (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-black/50 text-sm text-center">
                      and {order.items.length - 1} other item(s)
                    </p>
                  </div>
                )}
              </div>
              <div className="pt-6 border-t border-gray-200">
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-black/50 uppercase">Grand Total</span>
                    <span className="font-bold text-lg text-orange">
                      {formatCurrency(order.totals.grandTotal)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-lg p-6 lg:order-1 text-white">
              <h2 className="text-lg font-bold uppercase mb-6">
                Order Details
              </h2>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-white/50 mb-2">Order ID</p>
                  <p className="font-bold">{order.orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-2">Customer Name</p>
                  <p className="font-bold">{order.customer.name}</p>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-2">Email</p>
                  <p className="font-bold">{order.customer.email}</p>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-2">Phone</p>
                  <p className="font-bold">{order.customer.phone}</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/20">
                <h3 className="text-sm font-bold uppercase mb-4">
                  Shipping Address
                </h3>
                <p className="text-sm leading-relaxed">
                  {order.shipping.address}
                  <br />
                  {order.shipping.city}, {order.shipping.zip}
                  <br />
                  {order.shipping.country}
                </p>
              </div>
              <div className="pt-6 border-t border-white/20">
                <h3 className="text-sm font-bold uppercase mb-2">
                  Payment Method
                </h3>
                <p className="text-sm capitalize">
                  {order.paymentMethod === "eMoney"
                    ? "e-Money"
                    : "Cash on Delivery"}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
