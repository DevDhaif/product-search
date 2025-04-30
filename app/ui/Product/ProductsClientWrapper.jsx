'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import ProductGrid from './ProductGrid';
import ProductsSkeleton from './ProductsSkeleton';
import SearchInput from './SearchInput';

export default function ProductsClientWrapper({ initialProducts, initialQuery }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [products, setProducts] = useState(initialProducts);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (query) => {
        setIsLoading(true);

        router.push(`${pathname}?q=${encodeURIComponent(query)}`);

        try {
            const res = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
            const data = await res.json();
            setProducts(data.products || []);
        } catch (error) {
            console.error('Search failed:', error);
            setProducts([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const currentQuery = searchParams.get('q') || '';
        if (currentQuery !== initialQuery) {
            handleSearch(currentQuery);
        }
    }, [searchParams, initialQuery]);

    return (
        <>
            <SearchInput
                initialQuery={initialQuery}
                onSearch={handleSearch}
                resultsCount={isLoading ? null : products.length}
            />

            {isLoading ? (
                <ProductsSkeleton />
            ) : (
                <ProductGrid products={products} />
            )}
        </>
    );
}