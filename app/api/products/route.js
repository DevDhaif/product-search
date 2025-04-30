import { NextResponse } from 'next/server';
const API_URL = 'https://dummyjson.com/products';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || 20;

    try {
        const response = await fetch(`${API_URL}?limit=${limit}`);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Products API error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}