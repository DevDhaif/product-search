'use client';

import { useState, useEffect, useCallback } from 'react';
import { searchProducts } from '../lib/api';

export default function useProducts(initialQuery = '') {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState(initialQuery);

    const fetchProducts = useCallback(async (searchQuery) => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await searchProducts(searchQuery);
            setProducts(data.products || []);
        } catch (err) {
            setError('Failed to fetch products. Please try again.');
            setProducts([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // first fetch
    useEffect(() => {
        fetchProducts(initialQuery);
    }, [initialQuery, fetchProducts]);

    const handleSearch = useCallback((searchQuery) => {
        setQuery(searchQuery);
        fetchProducts(searchQuery);
    }, [fetchProducts]);

    return {
        products,
        isLoading,
        error,
        query,
        handleSearch
    };
}