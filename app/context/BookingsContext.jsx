'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'cario-booking-ids';

const BookingsContext = createContext(null);

export function BookingsProvider({ children }) {
    const [bookingIds, setBookingIds] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        try {
            const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
            setBookingIds(raw ? JSON.parse(raw) : []);
        } catch (_) {
            setBookingIds([]);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(bookingIds));
        } catch (_) {}
    }, [bookingIds, mounted]);

    const addBookingId = useCallback((id) => {
        if (!id) return;
        setBookingIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }, []);

    const value = { bookingIds, addBookingId };

    return (
        <BookingsContext.Provider value={value}>
            {children}
        </BookingsContext.Provider>
    );
}

export function useBookings() {
    const ctx = useContext(BookingsContext);
    if (!ctx) {
        throw new Error('useBookings must be used within BookingsProvider');
    }
    return ctx;
}
