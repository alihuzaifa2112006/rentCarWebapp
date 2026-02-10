'use client';

import Link from "next/link";
import { useFavorites } from "@/app/context/FavoritesContext";

export default function CarBox({
    id,
    name = "Nissan GT - R",
    fuel = "Petrol",
    capacity,
    manual_or_auto = "Manual",
    seating_capacity = "2",
    price_per_day = "80.00",
    city,
    province,
    image = "https://purepng.com/public/uploads/large/purepng.com-nissan-gt-r-r35-silver-carcarvehicletransportnissannissan-gt-r-961524673877wnxgy.png",
    description = "",
    details = []
}) {
    const type = description ? description.split(' ')[0] : "Car";
    const { isFavorite, toggleFavorite } = useFavorites();
    const favorited = id ? isFavorite(id) : false;

    return (
        <div className="bg-white p-4 rounded-[20px] shadow-sm border border-gray-100/50 hover:shadow-lg transition-all duration-300 group w-full flex flex-col justify-between h-full">
            <div>
                {/* Header: Title and Heart (Favorite) */}
                <div className="flex justify-between items-start mb-3">
                    <div className="overflow-hidden">
                        <h3 className="text-lg font-bold text-gray-900 tracking-tight truncate">{name}</h3>
                        <p className="text-xs font-semibold text-gray-400">
                            {city && province ? `${city}, ${province}` : type}
                        </p>
                    </div>
                    {id && (
                        <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(id); }}
                            className={`p-1 shrink-0 transition-colors ${favorited ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
                            aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
                        >
                            <svg className="w-5 h-5" fill={favorited ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Car Image Area */}
                <div className="relative h-28 w-full flex items-center justify-center mb-4 mt-2">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-black/5 blur-lg rounded-full"></div>
                </div>

                {/* Specifications */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-y-1">
                    <div className="flex items-center gap-1 text-gray-400">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>
                        <span className="text-[10px] font-medium whitespace-nowrap">{fuel}</span>
                    </div>
                    {capacity != null && (
                        <div className="flex items-center gap-1 text-gray-400">
                            <span className="text-[10px] font-medium whitespace-nowrap">{capacity}cc</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1 text-gray-400">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-[10px] font-medium whitespace-nowrap">{manual_or_auto}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span className="text-[10px] font-medium whitespace-nowrap">{seating_capacity} P</span>
                    </div>
                </div>
                {details?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                        {details.slice(0, 3).map((d, i) => (
                            <span key={i} className="text-[9px] px-1.5 py-0.5 bg-[#922b2b]/10 text-[#922b2b] rounded font-medium">
                                {d}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
                <div>
                    <div className="flex items-baseline gap-0.5">
                        <span className="text-lg font-bold text-gray-900" suppressHydrationWarning>Rs {Number(price_per_day).toLocaleString()}/</span>
                        <span className="text-[10px] font-bold text-gray-400 uppercase">day</span>
                    </div>
                </div>
                <Link
                    href={id ? `/cars/${id}` : "/app"}
                    className="bg-[#922b2b] hover:bg-[#7a2323] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 inline-block"
                >
                    More Info
                </Link>
            </div>
        </div>
    );
}
