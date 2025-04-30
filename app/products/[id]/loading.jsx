export default function Loading() {
    return (
        <div className="bg-white">
            <div className=" mx-auto py-8 px-4 sm:px-6 ">
                <div className='w-full max-w-2xl mx-auto'>
                    <div className="bg-gray-200 animate-pulse h-8 my-8 w-full max-w-sm rounded-md mx-auto"></div>
                    <div className="h-64 sm:h-80 rounded-lg mb-6 -mt-2 bg-gray-200 animate-pulse "></div>
                    <div className="flex flex-col md:flex-row justify-between mb-8">
                        <div className="mb-6 mt-4 md:mb-0">
                            <div className="mb-4 h-6 bg-gray-200 animate-pulse"></div>

                            <div className="mb-4">
                                <div className="flex items-center gap-2
                         font-medium text-gray-700">
                                    <div className="animate-pulse h-4 w-12 bg-gray-200"></div>
                                    <div className="inline-flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="animate-pulse h-6 w-6 bg-gray-200 ms-1 rounded-full"></div>
                                        ))}
                                    </div>

                                </div>

                            </div>

                            <div className="mb-4 h-6 bg-gray-200 animate-pulse"></div>
                        </div>

                        {/* right column */}
                        <div className="mb-6 mt-4 md:mb-0 basis-1/4 w-fit">
                            <div className="mb-4 h-6 bg-gray-200 animate-pulse"></div>

                            <div className="mb-4">
                                <div className="flex items-center gap-2
                         font-medium text-gray-700">
                                    <div className="animate-pulse h-4 w-12 bg-gray-200"></div>
                                    <div className="animate-pulse h-4 w-4 bg-gray-200"></div>

                                </div>

                            </div>

                            <div className="mb-4 h-6 bg-gray-200 animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className="mb-8 -mt-4">
                    <div className="mb-4 h-8 max-w-52 bg-gray-200 animate-pulse"></div>
                    <p className="h-14 bg-gray-200 animate-pulse"></p>
                </div>


                <div className="mb-8">
                    <div className="mb-4 h-8 max-w-48 bg-gray-200 animate-pulse"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-32 bg-gray-200 animate-pulse rounded-lg overflow-hidden"></div>
                        ))}
                    </div>
                </div>

                {/* back button */}
                <div className="bg-gray-200 animate-pulse h-8 w-32"></div>
            </div>
        </div>
    );
}