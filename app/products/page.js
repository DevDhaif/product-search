'use client';

import { useSearchParams } from 'next/navigation';
import SearchInput from '../ui/Product/SearchInput';
import ProductGrid from '../ui/Product/ProductGrid';
import useProducts from '../hooks/useProducts';

export default function ProductsPage() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';

    const { products, isLoading, error, handleSearch } = useProducts(initialQuery);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
                {/* pass the results count to SearchInput */}
                <SearchInput
                    onSearch={handleSearch}
                    initialQuery={initialQuery}
                    resultsCount={!isLoading && !error ? products.length : null}
                />

                {isLoading && (
                    <div className="flex justify-center mt-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                )}

                {error && (
                    <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-4">
                        <p className="text-red-700">{error}</p>
                    </div>
                )}

                {!isLoading && !error && (
                    <ProductGrid products={products} />
                )}
            </div>
        </div>
    );
}