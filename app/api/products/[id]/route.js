import { NextResponse } from 'next/server';
const API_URL = 'https://dummyjson.com/products';
export async function GET(request, { params }) {
    const id = params.id;

    try {
        const response = await fetch(`${API_URL}/${id}`);

        if (response.status === 404) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(`Product API error for ID ${id}:`, error);
        return NextResponse.json(
            { error: 'Failed to fetch product' },
            { status: 500 }
        );
    }
}