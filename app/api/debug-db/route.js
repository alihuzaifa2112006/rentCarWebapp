import dbConnect from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map(c => c.name);

        // Get stats for Cars collection if it exists
        let carsCount = 0;
        if (collectionNames.includes('Cars')) {
            carsCount = await db.collection('Cars').countDocuments();
        }

        return NextResponse.json({
            databaseName: db.databaseName,
            collections: collectionNames,
            carsCount: carsCount,
            uri_db: process.env.MONGODB_URI.split('/').pop().split('?')[0]
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
