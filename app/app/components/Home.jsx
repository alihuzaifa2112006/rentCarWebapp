'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.location-dropdown-container')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch('/api/cities');
                const data = await response.json();
                setCities(data);
            } catch (error) {
                console.error("Error fetching cities:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCities();
    }, []);

    return (
        <>
            <div className="Home w-full pt-8">
                <div className="hero max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Box 1 - Maroon Theme with Effects */}
                        <div className="carBox1 relative bg-gradient-to-br from-[#922b2b] via-[#a83232] to-[#922b2b] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Geometric pattern overlay */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-full h-full" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                    backgroundSize: '40px 40px'
                                }}></div>
                            </div>

                            {/* Floating blur circles - animated */}
                            <div className="absolute top-5 right-5 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute bottom-5 left-5 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

                            {/* Diagonal shine effect */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-white/20 to-transparent rotate-45 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="backgroundImage relative z-10 p-6 sm:p-8 flex flex-col justify-between h-[320px]">
                                {/* Content Section */}
                                <div className="content-section">
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight leading-tight drop-shadow-lg">
                                        The Best Platform<br />for Car Rental
                                    </h1>
                                    <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-sm drop-shadow-md">
                                        Ease of doing a car rental safely and reliably. Of course at a low price.
                                    </p>
                                </div>

                                {/* Car Image */}
                                <div className="image-section flex items-end justify-center -mb-2">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/thumbnails/036/105/722/small_2x/ai-generated-white-hatchback-car-png.png"
                                        alt="Luxury Car"
                                        className="w-full max-w-[280px] transform transition-transform duration-500 hover:scale-110 drop-shadow-2xl filter brightness-110"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Box 2 - Maroon Theme with Effects */}
                        <div className="carBox2 relative bg-gradient-to-br from-[#922b2b] via-[#a83232] to-[#922b2b] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Wave pattern overlay */}
                            <div className="absolute inset-0 opacity-10">
                                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="wave" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M0 20 Q 10 10, 20 20 T 40 20" stroke="white" strokeWidth="1" fill="none" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#wave)" />
                                </svg>
                            </div>

                            {/* Floating blur circles - animated */}
                            <div className="absolute top-5 left-5 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute bottom-5 right-5 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                            <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-white/5 rounded-full blur-xl"></div>

                            {/* Diagonal shine effect */}
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tl from-white/20 to-transparent rotate-45 group-hover:scale-150 transition-transform duration-700"></div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full"></div>

                            <div className="backgroundImage relative z-10 p-6 sm:p-8 flex flex-col justify-between h-[320px]">

                                <div className="content-section">
                                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight leading-tight drop-shadow-lg">
                                        Easy way to rent a<br />car at a low price
                                    </h1>
                                    <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-sm drop-shadow-md">
                                        Providing cheap car rental services and safe and comfortable facilities.
                                    </p>
                                </div>

                                {/* Car Image */}
                                <div className="image-section flex items-end justify-center -mb-2">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/thumbnails/036/105/722/small_2x/ai-generated-white-hatchback-car-png.png"
                                        alt="Sports Car"
                                        className="w-full max-w-[280px] transform transition-transform duration-500 hover:scale-110 drop-shadow-2xl filter brightness-110"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="booking-section mt-10">
                        <div className="max-w-5xl mx-auto">
                            <div className="location-box bg-white rounded-2xl shadow-lg p-4 sm:p-5 border border-gray-200 transform transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row items-center gap-4 lg:gap-6">

                                {/* Icon & Title Group */}
                                <div className="flex items-center gap-3 shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-[#922b2b]/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-[#922b2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 whitespace-nowrap">Select Location</h3>
                                </div>

                                {/* Custom Searchable Dropdown */}
                                <div className="relative w-full">
                                    <div
                                        className={`w-full px-5 py-3 bg-gray-50 border ${isOpen ? 'border-[#922b2b] ring-2 ring-[#922b2b]/20' : 'border-gray-200'} rounded-xl text-gray-700 text-base flex items-center justify-between cursor-pointer transition-all hover:bg-white`}
                                        onClick={() => !loading && setIsOpen(!isOpen)}
                                    >
                                        <span className={selectedCity ? 'text-gray-900 font-medium' : 'text-gray-400'}>
                                            {loading ? 'Please wait...' : selectedCity ? selectedCity.name : 'Where would you like to go?'}
                                        </span>
                                        <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>

                                    {/* Dropdown Menu */}
                                    {isOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 z-[100] overflow-hidden animate-fadeIn">
                                            {/* Search Input inside dropdown */}
                                            <div className="p-3 border-b border-gray-50">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Search city..."
                                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:border-[#922b2b] transition-all"
                                                        value={searchTerm}
                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                        onClick={(e) => e.stopPropagation()}
                                                        autoFocus
                                                    />
                                                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Cities List */}
                                            <div className="max-h-[280px] overflow-y-auto custom-scrollbar">
                                                {cities.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).length > 0 ? (
                                                    cities
                                                        .filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                                        .map((city) => (
                                                            <div
                                                                key={city._id}
                                                                className="px-5 py-3 hover:bg-[#922b2b]/5 cursor-pointer flex items-center justify-between group transition-colors"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedCity(city);
                                                                    setIsOpen(false);
                                                                    setSearchTerm('');
                                                                }}
                                                            >
                                                                <div className="flex flex-col">
                                                                    <span className="text-gray-900 font-medium group-hover:text-[#922b2b] transition-colors">{city.name}</span>
                                                                    <span className="text-xs text-gray-400">{city.province || 'Pakistan'}</span>
                                                                </div>
                                                                {selectedCity?._id === city._id && (
                                                                    <svg className="w-5 h-5 text-[#922b2b]" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                        ))
                                                ) : (
                                                    <div className="px-5 py-8 text-center text-gray-400 text-sm">
                                                        No cities found
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Search Button */}
                                <div className="shrink-0 w-full md:w-auto">
                                    <button className="w-full md:w-auto bg-[#922b2b] hover:bg-[#7a2323] text-white font-bold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
                                        Search Cars
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}