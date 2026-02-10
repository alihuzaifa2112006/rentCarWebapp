'use client';

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useBookings } from "@/app/context/BookingsContext";

export default function CarDetailPage({ params }) {
    const { id } = use(params);
    const { addBookingId } = useBookings();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cities, setCities] = useState([]);
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [pickupCity, setPickupCity] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [terms, setTerms] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }
        const fetchCar = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/cars/${id}`);
                const data = await res.json();
                if (res.ok) setCar(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchCar();
    }, [id]);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const res = await fetch('/api/cities');
                const data = await res.json();
                setCities(data || []);
            } catch (e) {
                console.error(e);
            }
        };
        fetchCities();
    }, []);

    if (loading || !car) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="relative w-12 h-12">
                        <div className="absolute inset-0 border-4 border-[#922b2b]/20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-[#922b2b] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/app" className="text-[#922b2b] hover:underline font-medium text-sm">
                        ← Back to Cars
                    </Link>
                </div>

                {/* Car detail card */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="relative bg-gray-50 min-h-[320px] flex items-center justify-center p-8">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full max-w-md object-contain"
                            />
                        </div>
                        <div className="p-8 lg:p-10 flex flex-col justify-center">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.name}</h1>
                            {(car.city || car.province) && (
                                <p className="text-[#922b2b] font-semibold text-sm mb-4">
                                    {[car.city, car.province].filter(Boolean).join(", ")}
                                </p>
                            )}
                            <p className="text-gray-600 mb-6">{car.description}</p>
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                                    {car.fuel}
                                </span>
                                {car.capacity != null && (
                                    <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                                        {car.capacity}cc
                                    </span>
                                )}
                                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                                    {car.manual_or_auto}
                                </span>
                                <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                                    {car.seating_capacity} Seater
                                </span>
                            </div>
                            {car.details?.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Features</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {car.details.map((d, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-[#922b2b]/10 text-[#922b2b] rounded-lg text-sm font-medium">
                                                {d}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="flex items-baseline gap-2 pt-4 border-t border-gray-100">
                                <span className="text-2xl font-bold text-gray-900">
                                    Rs {Number(car.price_per_day).toLocaleString()}
                                </span>
                                <span className="text-sm font-semibold text-gray-400">/ day</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking section */}
                <section className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Book this car</h2>
                    <p className="text-gray-500 mb-8">Fill in your details to reserve {car.name}.</p>
                    {successMsg ? (
                        <div className="p-6 bg-green-50 border border-green-200 rounded-2xl text-green-800 font-medium">
                            {successMsg}
                            <Link href="/my-bookings" className="block mt-3 text-[#922b2b] font-bold hover:underline">View My Bookings →</Link>
                        </div>
                    ) : (
                    <form
                        className="space-y-8 max-w-2xl"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            if (!terms || !userName.trim() || !phone.trim() || !pickupCity || !pickupDate) return;
                            setSubmitting(true);
                            try {
                                const res = await fetch("/api/bookings", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({
                                        carId: car._id,
                                        carName: car.name,
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
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-[#922b2b]/10 text-[#922b2b] flex items-center justify-center text-sm">1</span>
                                Personal Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                    <input type="text" placeholder="Your Name" value={userName ?? ""} onChange={(e) => setUserName(e.target.value)} className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] transition-all" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                                    <input type="tel" placeholder="+92 3XX XXXXXXX" value={phone ?? ""} onChange={(e) => setPhone(e.target.value)} className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] transition-all" required />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-[#922b2b]/10 text-[#922b2b] flex items-center justify-center text-sm">2</span>
                                Booking Information
                            </h3>
                            <div className="p-4 bg-white rounded-2xl border border-gray-200 mb-6">
                                <p className="text-sm text-gray-500">Car</p>
                                <p className="font-bold text-gray-900">{car.name} — Rs {Number(car.price_per_day).toLocaleString()}/day</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Pick-up Location</label>
                                    <select value={pickupCity ?? ""} onChange={(e) => setPickupCity(e.target.value)} className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] transition-all appearance-none cursor-pointer" required>
                                        <option value="">Select city</option>
                                        {cities.map((c) => (
                                            <option key={c._id} value={c.name}>{c.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Pick-up Date</label>
                                    <input type="date" value={pickupDate ?? ""} onChange={(e) => setPickupDate(e.target.value)} className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#922b2b] transition-all" required />
                                </div>
                            </div>
                        </div>
                        <div className="p-6 bg-[#922b2b]/5 rounded-3xl flex items-start gap-4 border border-[#922b2b]/10">
                            <input type="checkbox" id="terms" checked={terms} onChange={(e) => setTerms(e.target.checked)} className="mt-1 w-5 h-5 accent-[#922b2b] cursor-pointer" />
                            <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                                I agree with Cario's <span className="text-[#922b2b] font-bold">Terms of Service</span> and <span className="text-[#922b2b] font-bold">Privacy Policy</span>.
                            </label>
                        </div>
                        <button type="submit" disabled={submitting} className="w-full bg-[#922b2b] text-white py-5 rounded-3xl font-black text-lg shadow-xl shadow-[#922b2b]/30 hover:bg-[#7a2323] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-70">
                            {submitting ? "Booking..." : "CONFIRM BOOKING"}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </form>
                    )}
                </section>
            </div>
            <Footer />
        </main>
    );
}
