import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    carName: { type: String, required: true },
    userName: { type: String, required: true },
    phone: { type: String, required: true },
    pickupCity: { type: String, required: true },
    pickupDate: { type: Date, required: true },
    status: {
        type: String,
        enum: ["pending", "completed", "rejected"],
        default: "pending",
    },
}, {
    timestamps: true,
    collection: "Bookings",
});

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema, "Bookings");
