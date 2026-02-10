import dbConnect from "@/lib/db";
import Booking from "@/lib/models/Booking";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
    try {
        await dbConnect();
        const { id } = await params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid booking id" }, { status: 400 });
        }
        const booking = await Booking.findById(id).lean();
        if (!booking) {
            return NextResponse.json({ error: "Booking not found" }, { status: 404 });
        }
        return NextResponse.json(booking, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch booking", details: error.message },
            { status: 500 }
        );
    }
}

export async function PATCH(request, { params }) {
    try {
        await dbConnect();
        const { id } = await params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({ error: "Invalid booking id" }, { status: 400 });
        }
        const body = await request.json();
        const { status } = body;
        if (!["pending", "completed", "rejected"].includes(status)) {
            return NextResponse.json({ error: "Invalid status. Use: pending, completed, rejected" }, { status: 400 });
        }
        const booking = await Booking.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        ).lean();
        if (!booking) {
            return NextResponse.json({ error: "Booking not found" }, { status: 404 });
        }
        return NextResponse.json(booking, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to update booking", details: error.message },
            { status: 500 }
        );
    }
}
