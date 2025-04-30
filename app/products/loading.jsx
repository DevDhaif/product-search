import ProductsSkeleton from '@/app/ui/Product/ProductsSkeleton';

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
                <div className="animate-pulse">
                    <div className='flex flex-col items-start w-full max-w-4xl mx-auto'>
                        <div className="h-8 bg-gray-200 rounded-md w-full max-w-64  mb-4"></div>
                        <div className="h-10 bg-gray-200 rounded-md w-full max-w-4xl mx-auto mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded-md w-full max-w-36  mb-4"></div>
                    </div>
                </div>
                <ProductsSkeleton />
            </div>
        </div>
    );
}