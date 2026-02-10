import dbConnect from "@/lib/db";
import Car from "@/lib/models/Car";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
    try {
        await dbConnect();
        const { id } = await params;

        const car = await Car.findById(id);
        if (!car) {
            return NextResponse.json({ error: "Car not found" }, { status: 404 });
        }

        return NextResponse.json(car, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch car", details: error.message },
            { status: 500 }
        );
    }
}
