import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
    orderId: v.string(),
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shipping: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
    paymentMethod: v.union(v.literal("eMoney"), v.literal("cash")),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPin: v.optional(v.string()),
    items: v.array(
      v.object({
        productId: v.number(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      vat: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", {
      orderId: args.orderId,
      customer: args.customer,
      shipping: args.shipping,
      paymentMethod: args.paymentMethod,
      eMoneyNumber: args.eMoneyNumber,
      eMoneyPin: args.eMoneyPin,
      items: args.items,
      totals: args.totals,
      status: "pending",
      createdAt: Date.now(),
      emailSent: false,
    });

    return orderId;
  },
});

export const getOrderById = query({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_orderId", (q) => q.eq("orderId", args.orderId))
      .first();

    return order;
  },
});

export const markEmailSent = mutation({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_orderId", (q) => q.eq("orderId", args.orderId))
      .first();

    if (order) {
      await ctx.db.patch(order._id, {
        emailSent: true,
      });
    }
  },
});
