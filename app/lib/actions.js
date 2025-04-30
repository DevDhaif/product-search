'use server'

import { redirect } from 'next/navigation';

export async function searchProductsAction(formData) {
    const query = formData.get('query');
    redirect(`/products?q=${encodeURIComponent(query)}`);
}