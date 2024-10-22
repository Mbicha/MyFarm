const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubscriptionPlan = new Schema({
    user_id: {
        type: Schema.Types.ObjectId, ref: "user"
    },
    plan_type: {
        type: String,
        default: "Basic",
        enum: ["Basic", "Standard", "Premium"]
    },
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model("subscriptionPlan", SubscriptionPlan);
