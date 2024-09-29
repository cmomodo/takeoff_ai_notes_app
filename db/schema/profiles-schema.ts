import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core"; // Replace with actual library import

export const memberships = pgEnum("membership", ["free", "pro"]);

export const profilesTable = pgTable("profiles", {
  userId: text("user_id").primaryKey().notNull(),
  membership: text("membership").default("free").notNull(),
  stripeSubscriptionId: text("stripe_subscription_id"), // Corrected typo here
  stripeCustomerId: text("stripe_customer_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});
