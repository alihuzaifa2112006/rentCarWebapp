import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fuel: String,
    capacity: Number,
    manual_or_auto: String,
    seating_capacity: Number,
    price_per_day: Number,
    city: String,
    province: String,
    image: String,
    description: String,
    details: [String],
}, {
    timestamps: true,
    collection: 'Cars'
});

// Force Mongoose to use the exact collection name without pluralizing or lowercasing
export default mongoose.models.Car || mongoose.model("Car", CarSchema, "Cars");
