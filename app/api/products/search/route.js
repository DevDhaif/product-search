import { NextResponse } from 'next/server';
const API_URL = 'https://dummyjson.com/products';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';

    try {
        const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(query)}`);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Search API error:', error);
        return NextResponse.json(
            { error: 'Failed to search products' },
            { status: 500 }
        );
    }
}