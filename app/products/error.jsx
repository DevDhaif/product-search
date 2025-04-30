'use client'

import Link from 'next/link';

export default function Error({ error }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
                <p className="text-gray-600 mb-6">{error.message || 'Failed to load products'}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
                    >
                        Back to products
                    </Link>
                </div>
            </div>
        </div>
    );
}