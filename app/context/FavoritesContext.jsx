'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'cario-favorites';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
    const [favoriteIds, setFavoriteIds] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        try {
            const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
            setFavoriteIds(raw ? JSON.parse(raw) : []);
        } catch (_) {
            setFavoriteIds([]);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
        } catch (_) {}
    }, [favoriteIds, mounted]);

    const addFavorite = useCallback((id) => {
        if (!id) return;
        setFavoriteIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    }, []);

    const removeFavorite = useCallback((id) => {
        setFavoriteIds((prev) => prev.filter((f) => f !== id));
    }, []);

    const toggleFavorite = useCallback((id) => {
        if (!id) return;
        setFavoriteIds((prev) =>
            prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
        );
    }, []);

    const isFavorite = useCallback(
        (id) => (id ? favoriteIds.includes(id) : false),
        [favoriteIds]
    );

    const value = {
        favoriteIds,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const ctx = useContext(FavoritesContext);
    if (!ctx) {
        throw new Error('useFavorites must be used within FavoritesProvider');
    }
    return ctx;
}
