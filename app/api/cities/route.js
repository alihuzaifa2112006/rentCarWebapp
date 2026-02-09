import dbConnect from "@/lib/db";
import City from "@/lib/models/City";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();

        // Fetch all cities
        let cities = await City.find({}).sort({ name: 1 });

        // If database is empty, let's seed some major Pakistani cities
        if (cities.length === 0) {
            const pakCities = [
                { name: "Karachi", province: "Sindh" },
                { name: "Lahore", province: "Punjab" },
                { name: "Islamabad", province: "ICT" },
                { name: "Rawalpindi", province: "Punjab" },
                { name: "Faisalabad", province: "Punjab" },
                { name: "Multan", province: "Punjab" },
                { name: "Peshawar", province: "KPK" },
                { name: "Quetta", province: "Balochistan" },
                { name: "Sialkot", province: "Punjab" },
                { name: "Gujranwala", province: "Punjab" },
                { name: "Hyderabad", province: "Sindh" },
                { name: "Bahawalpur", province: "Punjab" },
                { name: "Sargodha", province: "Punjab" },
                { name: "Sukkur", province: "Sindh" },
                { name: "Larkana", province: "Sindh" },
            ];

            await City.insertMany(pakCities);
            cities = await City.find({}).sort({ name: 1 });
        }

        return NextResponse.json(cities, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch cities", details: error.message }, { status: 500 });
    }
}
