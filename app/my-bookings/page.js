'use client';

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useBookings } from "@/app/context/BookingsContext";

const STATUS_COLORS = {
    pending: "bg-amber-100 text-amber-800",
    completed: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
};

export default function MyBookingsPage() {
    const { bookingIds } = useBookings();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBookings = useCallback(() => {
        if (bookingIds.length === 0) {
            setBookings([]);
            setLoading(false);
            return;
        }
        setLoading(true);
        fetch(`/api/bookings?ids=${bookingIds.join(",")}`)
            .then((r) => r.json())
            .then((data) => {
                setBookings(Array.isArray(data) ? data : []);
                setLoading(false);
            })
            .catch(() => {
                setBookings([]);
                setLoading(false);
            });
    }, [bookingIds]);

    useEffect(() => {
        fetchBookings();
    }, [fetchBookings]);

    const updateStatus = async (bookingId, status) => {
        try {
            const res = await fetch(`/api/bookings/${bookingId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status }),
            });
            if (res.ok) fetchBookings();
        } catch (_) {}
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Your pending and past bookings. Mark as completed or reject from here.
                    </p>
                </div>

                {loading ? (
                    <div className="min-h-[200px] flex items-center justify-center">
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 border-4 border-[#922b2b]/20 rounded-full" />
                            <div className="absolute inset-0 border-4 border-[#922b2b] border-t-transparent rounded-full animate-spin" />
                        </div>
                    </div>
                ) : bookings.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center">
                        <div className="w-20 h-20 bg-[#922b2b]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-[#922b2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">No bookings yet</h2>
                        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                            When you book a car, it will appear here with pending status. You can mark it completed or reject it.
                        </p>
                        <Link
                            href="/app"
                            className="inline-block bg-[#922b2b] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#7a2323] transition-all"
                        >
                            Browse Cars
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {bookings.map((b) => (
                            <div
                                key={b._id}
                                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{b.carName}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{b.userName} · {b.phone}</p>
                                        <p className="text-sm text-gray-500">Pick-up: {b.pickupCity} · {new Date(b.pickupDate).toLocaleDateString()}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${STATUS_COLORS[b.status] || "bg-gray-100 text-gray-700"}`}>
                                        {b.status}
                                    </span>
                                </div>
                                {b.status === "pending" && (
                                    <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                                        <button
                                            type="button"
                                            onClick={() => updateStatus(b._id, "completed")}
                                            className="px-4 py-2 rounded-xl font-bold text-sm bg-green-600 text-white hover:bg-green-700 transition-colors"
                                        >
                                            Mark Completed
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => updateStatus(b._id, "rejected")}
                                            className="px-4 py-2 rounded-xl font-bold text-sm bg-red-600 text-white hover:bg-red-700 transition-colors"
                                        >
                                            Reject
                                        </button>
                                    </div>
                                )}
                                <Link
                                    href={`/cars/${b.carId}`}
                                    className="inline-block mt-3 text-sm font-medium text-[#922b2b] hover:underline"
                                >
                                    View car details →
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}
