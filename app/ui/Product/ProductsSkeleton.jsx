export default function ProductsSkeleton() {
    return (
        <div className="mt-1 animate-pulse">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded shadow overflow-hidden p-2">
                        <div className="h-48 bg-gray-200 mb-4"></div>
                        <div className="p-4">
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                            <div className="h-8 bg-gray-500 rounded mb-4"></div>
                            <div className="flex justify-between items-center">
                                <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                                <div className="h-8 bg-gray-200 rounded w-16"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}