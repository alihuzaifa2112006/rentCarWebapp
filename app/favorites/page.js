'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CarBox from "@/app/app/components/CarBox";
import { useFavorites } from "@/app/context/FavoritesContext";

export default function FavoritesPage() {
    const { favoriteIds } = useFavorites();
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (favoriteIds.length === 0) {
            setCars([]);
            setLoading(false);
            return;
        }
        let cancelled = false;
        setLoading(true);
        Promise.all(
            favoriteIds.map((id) =>
                fetch(`/api/cars/${id}`).then((r) => (r.ok ? r.json() : null))
            )
        ).then((results) => {
            if (!cancelled) {
                setCars(results.filter(Boolean));
                setLoading(false);
            }
        });
        return () => { cancelled = true; };
    }, [favoriteIds]);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Favorites</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        {favoriteIds.length === 0
                            ? "No cars saved yet. Tap the heart on any car to add it here."
                            : `${cars.length} car${cars.length !== 1 ? "s" : ""} saved`}
                    </p>
                </div>

                {loading ? (
                    <div className="min-h-[200px] flex items-center justify-center">
                        <div className="relative w-12 h-12">
                            <div className="absolute inset-0 border-4 border-[#922b2b]/20 rounded-full" />
                            <div className="absolute inset-0 border-4 border-[#922b2b] border-t-transparent rounded-full animate-spin" />
                        </div>
                    </div>
                ) : cars.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 border border-gray-100 shadow-sm text-center">
                        <div className="w-20 h-20 bg-[#922b2b]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-[#922b2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">No favorites yet</h2>
                        <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                            Like a car? Click the heart on any car to save it here.
                        </p>
                        <Link
                            href="/app"
                            className="inline-block bg-[#922b2b] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#7a2323] transition-all"
                        >
                            Browse Cars
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {cars.map((car) => (
                            <CarBox
                                key={car._id}
                                id={car._id}
                                name={car.name}
                                fuel={car.fuel}
                                capacity={car.capacity}
                                manual_or_auto={car.manual_or_auto}
                                seating_capacity={car.seating_capacity}
                                price_per_day={car.price_per_day}
                                city={car.city}
                                province={car.province}
                                image={car.image}
                                description={car.description}
                                details={car.details}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}
