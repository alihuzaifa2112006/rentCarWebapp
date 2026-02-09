import dbConnect from "@/lib/db";
import Car from "@/lib/models/Car";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 8;
        const skip = (page - 1) * limit;

        // Filtering logic
        const search = searchParams.get("search") || "";
        const maxPrice = parseInt(searchParams.get("maxPrice")) || 100000;
        const seatsStr = searchParams.get("seats");
        const seats = seatsStr ? seatsStr.split(",").map(Number) : [];

        const query = {};

        // 1. Search by name
        if (search) {
            query.name = { $regex: search, $options: "i" };
        }

        // 2. Filter by max price
        if (maxPrice) {
            query.price_per_day = { $lte: maxPrice };
        }

        // 3. Filter by seating capacity
        if (seats.length > 0) {
            query.seating_capacity = { $in: seats };
        }

        const totalCars = await Car.countDocuments(query);
        const cars = await Car.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        return NextResponse.json({
            cars,
            pagination: {
                total: totalCars,
                totalPages: Math.ceil(totalCars / limit),
                currentPage: page,
                limit
            }
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch cars", details: error.message }, { status: 500 });
    }
}
