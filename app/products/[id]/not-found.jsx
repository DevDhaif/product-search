import Link from 'next/link';

export default function ProductNotFound() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold text-primary mb-4">Product Not Found</h2>
                <p className="text-gray-600 mb-6">
                    The product you lok for does not exist.
                </p>
                <Link
                    href="/products"
                    className="inline-flex items-center px-4 py-2 border border-primary text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none transition-colors"
                >
                    Back to products
                </Link>
            </div>
        </div>
    );
}