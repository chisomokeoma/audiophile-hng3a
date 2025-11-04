"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { CartProvider } from "@/contexts/CartContext";
import { useMemo } from "react";

function getConvexClient() {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (!convexUrl || convexUrl.trim() === "") {
    console.warn(
      "NEXT_PUBLIC_CONVEX_URL is not set. Convex features will not work. " +
        "Please set NEXT_PUBLIC_CONVEX_URL in your environment variables."
    );
    return null;
  }

  try {
    return new ConvexReactClient(convexUrl);
  } catch (error) {
    console.error("Failed to create Convex client:", error);
    return null;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const convex = useMemo(() => getConvexClient(), []);

  if (!convex) {
    return <CartProvider>{children}</CartProvider>;
  }

  return (
    <ConvexProvider client={convex}>
      <CartProvider>{children}</CartProvider>
    </ConvexProvider>
  );
}
