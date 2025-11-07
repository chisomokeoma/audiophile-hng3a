import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ConvexHttpClient } from "convex/browser";

function getConvexApi() {
  try {
    const base = "../../../convex";
    const gen = "_generated";
    const mod = "api";
    const path = `${base}/${gen}/${mod}`;
    return require(path).api;
  } catch {
    return null;
  }
}

const api = getConvexApi();

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.trim() === "") {
    return null;
  }
  try {
    return new Resend(apiKey);
  } catch (error) {
    console.error("Failed to create Resend client:", error);
    return null;
  }
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

function generateOrderId(): string {
  return `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      address,
      zip,
      city,
      country,
      paymentMethod,
      eMoneyNumber,
      eMoneyPin,
    } = body;

    const cartItems = body.items || [];

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const subtotal = cartItems.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    );
    const shipping = 50;
    const vat = Math.round(subtotal * 0.2);
    const grandTotal = subtotal + shipping;

    const orderId = generateOrderId();

    const orderData = {
      orderId,
      customer: {
        name,
        email,
        phone,
      },
      shipping: {
        address,
        zip,
        city,
        country,
      },
      paymentMethod,
      eMoneyNumber: paymentMethod === "eMoney" ? eMoneyNumber : undefined,
      eMoneyPin: paymentMethod === "eMoney" ? eMoneyPin : undefined,
      items: cartItems.map((item: any) => ({
        productId: item.productId || item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image || "",
      })),
      totals: {
        subtotal,
        shipping,
        vat,
        grandTotal,
      },
    };

    const convex = getConvexClient();
    if (convex && api) {
      try {
        await convex.mutation(api.orders.createOrder, orderData);
      } catch (convexError) {
        console.error("Convex error:", convexError);
      }
    } else {
      console.warn(
        "Convex not configured. Order not saved to database. Run 'npx convex dev' to set up Convex."
      );
    }

    let emailData = null;
    let emailError = null;

    const resend = getResendClient();
    if (resend) {
      try {
        const emailResult = await resend.emails.send({
          from: "Audiophile <onboarding@resend.dev>",
          to: email,
          subject: `Order Confirmation - ${orderId}`,
          html: generateEmailTemplate(orderData),
        });
        emailData = emailResult.data;
        emailError = emailResult.error;

        if (emailError) {
          console.error("Email error:", emailError);
        } else if (emailData && convex && api) {
          try {
            await convex.mutation(api.orders.markEmailSent, { orderId });
          } catch (markError) {
            console.error("Error marking email as sent:", markError);
          }
        }
      } catch (emailSendError) {
        console.error("Failed to send email:", emailSendError);
        console.warn(
          "Resend not configured. Emails will not be sent. Set RESEND_API_KEY in .env.local"
        );
      }
    } else {
      console.warn(
        "Resend API key not set. Emails will not be sent. Set RESEND_API_KEY in .env.local"
      );
    }

    return NextResponse.json({
      success: true,
      orderId,
      emailSent: !!emailData,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to process order",
      },
      { status: 500 }
    );
  }
}

function generateEmailTemplate(order: any) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f9f9f9; padding: 30px; border-radius: 8px;">
        <h1 style="color: #d87d4a; margin-top: 0;">Thank You for Your Order!</h1>
        
        <p>Dear ${order.customer.name},</p>
        
        <p>We're excited to confirm your order. Here are the details:</p>
        
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="margin-top: 0; color: #333;">Order ID: ${order.orderId}</h2>
          
          <h3 style="color: #d87d4a; border-bottom: 2px solid #d87d4a; padding-bottom: 10px;">Items Ordered:</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            ${order.items
              .map(
                (item: any) => `
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0;">
                  <strong>${item.name}</strong><br>
                  Quantity: ${item.quantity} × ${formatCurrency(item.price)}
                </td>
                <td style="text-align: right; padding: 10px 0;">
                  ${formatCurrency(item.price * item.quantity)}
                </td>
              </tr>
            `
              )
              .join("")}
          </table>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #eee;">
            <p style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>Subtotal:</span>
              <span>${formatCurrency(order.totals.subtotal)}</span>
            </p>
            <p style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>Shipping:</span>
              <span>${formatCurrency(order.totals.shipping)}</span>
            </p>
            <p style="display: flex; justify-content: space-between; margin: 5px 0;">
              <span>VAT:</span>
              <span>${formatCurrency(order.totals.vat)}</span>
            </p>
            <p style="display: flex; justify-content: space-between; margin-top: 15px; font-size: 18px; font-weight: bold; color: #d87d4a;">
              <span>Grand Total:</span>
              <span>${formatCurrency(order.totals.grandTotal)}</span>
            </p>
          </div>
        </div>
        
        <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #d87d4a; margin-top: 0;">Shipping Details:</h3>
          <p>
            ${order.shipping.address}<br>
            ${order.shipping.city}, ${order.shipping.zip}<br>
            ${order.shipping.country}
          </p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout/confirmation?orderId=${order.orderId}" 
             style="background-color: #d87d4a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; display: inline-block;">
            View Your Order
          </a>
        </div>
        
        <p style="margin-top: 30px; font-size: 14px; color: #666;">
          If you have any questions, please contact our support team.<br>
          Thank you for choosing Audiophile!
        </p>
      </div>
    </body>
    </html>
  `;
}
