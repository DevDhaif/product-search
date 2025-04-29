'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetails({ product }) {
    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-1">Product not found</h3>
                <Link
                    href="/products"
                    className="mt-2 text-primary hover:text-primary/80"
                >
                    Back to products
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <div className=" mx-auto py-8 px-4 sm:px-6 ">
                <div className='w-full max-w-2xl mx-auto'>
                    <h1 className="text-2xl font-bold text-center text-primary mb-6">
                        {product.title}
                    </h1>

                    {/* main product Image */}
                    <div className="relative  h-64 sm:h-80 overflow-hidden rounded-lg mb-8 bg-gray-200">
                        {product.thumbnail ? (
                            <Image
                                src={product.thumbnail}
                                alt={product.title}
                                fill
                                sizes="100%"
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-gray-400">No image</span>
                            </div>
                        )}
                    </div>
                    {/* product info*/}
                    <div className="flex flex-col md:flex-row justify-between mb-8">
                        {/* left column */}
                        <div className="mb-6 md:mb-0">
                            <div className="mb-4">
                                <p className="font-medium text-gray-700">Price : <span className="text-lg font-medium text-secondary">{product.price}$</span></p>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center gap-2
                             font-medium text-gray-700">
                                    <span>Rating :</span>
                                    <div className="inline-flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                key={i}
                                                className={`size-6 ${i < Math.round(product.rating)
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300'
                                                    }`}
                                                fill="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        ))}
                                    </div>

                                </div>

                            </div>

                            <div>
                                <p className="font-medium text-gray-700">Brand : <span className="ms-1 text-secondary">{product.brand}</span></p>

                            </div>
                        </div>

                        {/* right column */}
                        <div>
                            <div className="mb-4">
                                <p className="font-medium text-gray-700">Discount Percentage : <span className="ms-1 text-secondary">{product.discountPercentage}</span></p>

                            </div>

                            <div className="mb-4">
                                <p className="font-medium text-gray-700">Stock : <span className="ms-1 text-secondary">{product.stock}</span></p>

                            </div>

                            <div>
                                <div className="font-medium text-gray-700">Category : <Link href={`/products?category=${product.category}`} className="ms-1 text-secondary hover:underline">
                                    {product.category}
                                </Link></div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">Product Description</h2>
                    <p className="text-gray-600">{product.description}</p>
                </div>

                {/* product images grid */}
                {product.images && product.images.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-3">Product Images</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {product.images.map((image, index) => (
                                <div key={index} className="relative aspect-square bg-gray-200 rounded overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={`${product.title} - Image ${index + 1}`}
                                        fill
                                        sizes="100%"
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* back button */}
                <div className="text-center mt-8">
                    <Link
                        href="/products"
                        className="inline-flex items-center px-4 py-2 border border-primary text-sm font-medium rounded-md text-primary bg-white hover:text-white hover:bg-primary focus:outline-none transition duration-150 ease-in-out"
                    >
                        Back to products
                    </Link>
                </div>
            </div>
        </div>
    );
}