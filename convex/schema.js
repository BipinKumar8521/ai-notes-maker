const { defineSchema, defineTable } = require("convex/server");
const { v } = require("convex/values");

export default defineSchema({
	users: defineTable({
		userName: v.string(),
		email: v.string(),
		imageUrl: v.string(),
	}),
});
