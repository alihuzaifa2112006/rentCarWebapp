'use client';

import { useState, useEffect } from "react";
import CarBox from "./CarBox";

export default function Cars({ filters }) {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        total: 0
    });
    const [page, setPage] = useState(1);
    const limit = 8;

    // Reset page to 1 when filters change
    useEffect(() => {
        setPage(1);
    }, [filters]);

    useEffect(() => {
        const fetchCars = async () => {
            setLoading(true);
            try {
                // Build query string from filters
                const queryParams = new URLSearchParams({
                    page,
                    limit,
                    search: filters?.search || '',
                    maxPrice: filters?.maxPrice || 1000,
                    seats: filters?.seats?.join(',') || '',
                    city: filters?.city || ''
                });

                const response = await fetch(`/api/cars?${queryParams.toString()}`);
                const data = await response.json();

                if (data.cars) {
                    setCars(data.cars);
                    setPagination(data.pagination);
                } else {
                    setCars([]);
                    setPagination({ currentPage: 1, totalPages: 1, total: 0 });
                }
            } catch (error) {
                console.error("Error fetching cars:", error);
                setCars([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, [page, filters]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            setPage(newPage);
            window.scrollTo({
                top: document.getElementById('popular-cars-heading').offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    if (loading && page === 1 && !cars.length) {
        return (
            <div className="w-full h-64 flex items-center justify-center">
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 border-4 border-[#922b2b]/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-[#922b2b] border-t-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen">
            <div className="flex justify-between items-center mb-8" id="popular-cars-heading">
                <div className="flex flex-col">
                    <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase">Popular Cars</h2>
                    <p className="text-xs text-gray-400 mt-1" suppressHydrationWarning>Found {pagination.total} rides matching your criteria</p>
                </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 transition-all duration-300 ${loading ? 'opacity-50 grayscale-[0.5]' : 'opacity-100'}`}>
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

                {cars.length === 0 && !loading && (
                    <div className="col-span-full py-20 text-center text-gray-400">
                        <div className="bg-white rounded-3xl p-16 border border-gray-100 shadow-sm">
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No matching rides</h3>
                            <p className="text-sm text-gray-400 max-w-xs mx-auto">We couldn't find any cars that match your current filters. Try adjusting your search or filters.</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Pagination Controls */}
            {pagination.totalPages > 1 && (
                <div className="mt-16 flex items-center justify-between border-t border-gray-100 pt-8">
                    <div className="text-sm text-gray-500 font-medium font-sans">
                        Showing page <span className="text-[#922b2b] font-bold">{pagination.currentPage}</span> of {pagination.totalPages}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 1}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${page === 1 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-white border border-gray-200 text-gray-700 hover:border-[#922b2b] hover:text-[#922b2b] shadow-sm hover:shadow-lg'}`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                            Prev
                        </button>

                        <div className="flex items-center gap-1.5 hidden md:flex">
                            {[...Array(pagination.totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`w-12 h-12 rounded-2xl font-bold transition-all duration-300 ${page === i + 1 ? 'bg-[#922b2b] text-white shadow-xl scale-110' : 'bg-white border border-gray-200 text-gray-600 hover:border-[#922b2b] hover:text-[#922b2b]'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => handlePageChange(page + 1)}
                            disabled={page === pagination.totalPages}
                            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${page === pagination.totalPages ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-[#922b2b] text-white shadow-lg hover:shadow-2xl hover:bg-[#7a2323] hover:-translate-y-0.5 active:translate-y-0'}`}
                        >
                            Next
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}