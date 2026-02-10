'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useBookings } from "@/app/context/BookingsContext";

export default function Booking() {
    const { addBookingId } = useBookings();
    const [cars, setCars] = useState([]);
    const [cities, setCities] = useState([]);
    const [carId, setCarId] = useState("");
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [pickupCity, setPickupCity] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [terms, setTerms] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const carsRes = await fetch('/api/cars?limit=100');
            const carsData = await carsRes.json();
            setCars(carsData.cars || []);

            const citiesRes = await fetch('/api/cities');
            const citiesData = await citiesRes.json();
            setCities(citiesData || []);
        };
        fetchData();
    }, []);

    const selectedCar = cars.find((c) => c._id === carId);

    return (
        <div className="bg-white min-h-screen">
            <section className="bg-gray-50 py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="#922b2b" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-[#922b2b] text-sm font-extrabold tracking-[0.3em] uppercase mb-4">Reservations</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">
                        Book Your Dream Ride
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Secure your vehicle in minutes with our fast and easy booking process. Premium cars, competitive prices.
                    </p>
                </div>
            </section>

            <section className="py-24 -mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl shadow-gray-200 border border-gray-100">
                        {successMsg ? (
                            <div className="p-8 bg-green-50 border border-green-200 rounded-3xl text-green-800 font-medium text-center">
                                <p className="text-lg">{successMsg}</p>
                                <Link href="/my-bookings" className="inline-block mt-4 text-[#922b2b] font-bold hover:underline">View My Bookings →</Link>
                            </div>
                        ) : (
                        <form
                            className="space-y-10"
                            onSubmit={async (e) => {
                                e.preventDefault();
                                if (!terms || !carId || !userName.trim() || !phone.trim() || !pickupCity || !pickupDate || !selectedCar) return;
                                setSubmitting(true);
                                try {
                                    const res = await fetch("/api/bookings", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({
                                            carId: selectedCar._id,
                                            carName: selectedCar.name,
                                            userName: userName.trim(),
                                            phone: phone.trim(),
                                            pickupCity,
                                            pickupDate,
                                        }),
                                    });
                                    const data = await res.json();
                                    if (res.ok && data._id) {
                                        addBookingId(data._id);
                                        setSuccessMsg("Booking confirmed! It will show in My Bookings as pending.");
                                    } else {
                                        setSuccessMsg("Something went wrong. Please try again.");
                                    }
                                } catch (_) {
                                    setSuccessMsg("Something went wrong. Please try again.");
                                } finally {
                                    setSubmitting(false);
                                }
                            }}
                        >
                            {/* Personal Details Section */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#922b2b]/10 text-[#922b2b] flex items-center justify-center text-sm">1</span>
                                    Personal Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                        <input type="text" placeholder="Your Name" value={userName ?? ""} onChange={(e) => setUserName(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] transition-all" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                        <input type="tel" placeholder="+92 3XX XXXXXXX" value={phone ?? ""} onChange={(e) => setPhone(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] transition-all" required />
                                    </div>
                                </div>
                            </div>

                            {/* Booking Info Section */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#922b2b]/10 text-[#922b2b] flex items-center justify-center text-sm">2</span>
                                    Booking Information
                                </h3>
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1">Select Car</label>
                                        <select value={carId ?? ""} onChange={(e) => setCarId(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] transition-all appearance-none cursor-pointer" required>
                                            <option value="">Which car would you like?</option>
                                            {cars.map(car => (
                                                <option key={car._id} value={car._id}>{car.name} - (Rs {car.price_per_day}/day)</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Pick-up Location</label>
                                            <select value={pickupCity ?? ""} onChange={(e) => setPickupCity(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] transition-all appearance-none cursor-pointer" required>
                                                <option value="">Select city</option>
                                                {cities.map(city => (
                                                    <option key={city._id} value={city.name}>{city.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700 ml-1">Pick-up Date</label>
                                            <input type="date" value={pickupDate ?? ""} onChange={(e) => setPickupDate(e.target.value)} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] transition-all" required />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Terms */}
                            <div className="p-6 bg-[#922b2b]/5 rounded-3xl flex items-start gap-4 border border-[#922b2b]/10">
                                <input type="checkbox" id="terms" checked={terms} onChange={(e) => setTerms(e.target.checked)} className="mt-1 w-5 h-5 accent-[#922b2b] cursor-pointer" />
                                <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                                    I agree with Cario's <span className="text-[#922b2b] font-bold">Terms of Service</span> and <span className="text-[#922b2b] font-bold">Privacy Policy</span>. I confirm that all information provided is accurate.
                                </label>
                            </div>

                            <button type="submit" disabled={submitting} className="w-full bg-[#922b2b] text-white py-6 rounded-3xl font-black text-lg shadow-2xl shadow-[#922b2b]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-70">
                                {submitting ? "Booking..." : "CONFIRM BOOKING"}
                                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
