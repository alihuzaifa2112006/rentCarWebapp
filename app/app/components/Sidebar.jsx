'use client';

import { useState, useEffect } from "react";

export default function Sidebar({ onFilterChange }) {
    const [search, setSearch] = useState('');
    const [seats, setSeats] = useState([]);
    const [maxPrice, setMaxPrice] = useState(50000); // Higher default for PKR

    // Trigger update whenever filters change
    useEffect(() => {
        const timer = setTimeout(() => {
            onFilterChange({ search, seats, maxPrice });
        }, 500); // Debounce to avoid too many requests

        return () => clearTimeout(timer);
    }, [search, seats, maxPrice, onFilterChange]);

    const handleSeatChange = (seat) => {
        setSeats(prev =>
            prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
        );
    };

    return (
        <div className="w-80 h-fit bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-shrink-0 sticky top-24">
            {/* Search Section */}
            <div className="mb-10">
                <h1 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Search</h1>
                <div className="relative group">
                    <input
                        type="text"
                        placeholder="Search for cars..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#922b2b] focus:border-transparent transition-all placeholder:text-gray-400"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#922b2b] transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="space-y-10">
                {/* Seat Capacity Section */}
                <div>
                    <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Seat Capacity</h2>
                    <div className="space-y-4">
                        {[2, 4, 5, 7, 8].map((s) => (
                            <div key={s} className="flex items-center justify-between group cursor-pointer" onClick={() => handleSeatChange(s)}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${seats.includes(s) ? 'bg-[#922b2b] border-[#922b2b]' : 'border-gray-200 group-hover:border-[#922b2b]'}`}>
                                        {seats.includes(s) && (
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </div>
                                    <label className={`text-sm font-medium cursor-pointer transition-colors ${seats.includes(s) ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`}>
                                        {s} Seater
                                    </label>
                                </div>
                                <span className="text-[10px] text-gray-300 font-bold uppercase">Cars</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price Filter Section */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xs font-bold text-gray-400 tracking-widest uppercase">Max Price (PKR)</h2>
                        <span className="text-sm font-bold text-[#922b2b]" suppressHydrationWarning>Rs {maxPrice.toLocaleString()}</span>
                    </div>
                    <div className="px-2">
                        <input
                            type="range"
                            min="1000"
                            max="50000"
                            step="500"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#922b2b]"
                        />
                        <div className="flex justify-between mt-2 text-[10px] text-gray-300 font-bold">
                            <span>RS 1,000</span>
                            <span>RS 50,000</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clear Filters Button */}
            <button
                onClick={() => { setSearch(''); setSeats([]); setMaxPrice(50000); }}
                className="w-full mt-10 py-3 text-xs font-bold text-gray-400 hover:text-[#922b2b] transition-colors border border-dashed border-gray-200 rounded-xl hover:border-[#922b2b]/30"
            >
                CLEAR ALL FILTERS
            </button>
        </div>
    );
}