'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded shadow overflow-hidden p-2">
            <div className="relative h-48 bg-gray-200">
                {product.thumbnail ? (
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        sizes="100%"
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                    </div>
                )}
            </div>

            <div className="p-4">
                <Link href={`/products/${product.id}`}>
                    <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
                        {product.title}
                    </h3>
                </Link>

                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                    {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray-700">
                        Price: <span className="font-medium text-secondary">${product.price}</span>
                    </span>

                    <Link
                        href={`/products/${product.id}`}
                        className="inline-flex items-center px-3 py-1 border border-white text-sm leading-5 font-medium rounded-md text-white bg-secondary  hover:bg-secondary/90 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
                    >
                        More
                    </Link>
                </div>
            </div>
        </div>
    );
}