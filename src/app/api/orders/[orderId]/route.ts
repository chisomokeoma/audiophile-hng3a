import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";

let api: any;
try {
  api = require("../../../../convex/_generated/api").api;
} catch (error) {
  console.warn(
    "Convex API not generated yet. Run 'npx convex dev' to generate it."
  );
  api = null;
}

function getConvexClient() {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!convexUrl || convexUrl.trim() === "") {
    return null;
  }
  try {
    return new ConvexHttpClient(convexUrl);
  } catch (error) {
    console.error("Failed to create Convex HTTP client:", error);
    return null;
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;

    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }

    const convex = getConvexClient();
    if (!convex || !api) {
      return NextResponse.json(
        {
          error:
            "Database service not available. Run 'npx convex dev' to set up Convex.",
        },
        { status: 503 }
      );
    }

    const order = await convex.query(api.orders.getOrderById, { orderId });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to fetch order",
      },
      { status: 500 }
    );
  }
}
