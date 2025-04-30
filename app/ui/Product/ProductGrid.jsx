import Image from 'next/image';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
    if (!products || products.length === 0) {
        return (
            <div className="mt-12 flex items-center flex-col justify-center space-y-4 h-full">

                <Image src="/icons/no-results.svg" alt="No results" width={160} height={160} />
                <div className='text-gray-500 flex flex-col items-center space-y-2'>
                    <p>No results for your search!</p>
                    <p> Try another keyword</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}