import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
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
    status: v.string(),
    createdAt: v.number(),
    emailSent: v.boolean(),
  }).index("by_orderId", ["orderId"]),
});
