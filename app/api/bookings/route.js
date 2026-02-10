import dbConnect from "@/lib/db";
import Booking from "@/lib/models/Booking";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const dynamic = "force-dynamic";

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const idsParam = searchParams.get("ids");
        const ids = idsParam ? idsParam.split(",").map((s) => s.trim()).filter(Boolean) : [];

        if (ids.length === 0) {
            return NextResponse.json([], { status: 200 });
        }

        const validIds = ids.filter((id) => mongoose.Types.ObjectId.isValid(id));
        if (validIds.length === 0) {
            return NextResponse.json([], { status: 200 });
        }

        const bookings = await Booking.find({
            _id: { $in: validIds.map((id) => new mongoose.Types.ObjectId(id)) },
        })
            .sort({ createdAt: -1 })
            .lean();

        return NextResponse.json(bookings, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch bookings", details: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { carId, carName, userName, phone, pickupCity, pickupDate } = body;

        if (!carId || !carName || !userName || !phone || !pickupCity || !pickupDate) {
            return NextResponse.json(
                { error: "Missing required fields: carId, carName, userName, phone, pickupCity, pickupDate" },
                { status: 400 }
            );
        }

        const booking = await Booking.create({
            carId,
            carName,
            userName,
            phone,
            pickupCity,
            pickupDate: new Date(pickupDate),
            status: "pending",
        });

        return NextResponse.json(booking, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to create booking", details: error.message },
            { status: 500 }
        );
    }
}
