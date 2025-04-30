'use client';

import { useState } from 'react';

export default function SearchInput({ onSearch, initialQuery = '', resultsCount = null }) {
    const [query, setQuery] = useState(initialQuery);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className="mx-auto max-w-4xl flex flex-col ">
            <h2 className="text-lg font-medium text-secondary mb-4">
                Search products by keyword
            </h2>

            <form onSubmit={handleSubmit} className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search keyword"
                    className="w-full py-2 px-4 pr-10 rounded-md shadow-sm 
          focus:ring-2 focus:ring-secondary text-secondary bg-secondary/5 text-sm
          outline outline-secondary transition-colors"
                />

                <button
                    type="submit"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-secondary/70 
          hover:text-primary transition-colors"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </form>

            {resultsCount !== null && (
                <p className="mt-4 text-sm">
                    Total results count:
                    <span className='ms-1 text-secondary font-bold'>{resultsCount}</span>
                </p>
            )}
        </div>
    );
}