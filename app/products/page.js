import { searchProducts, getAllProducts } from '@/app/lib/api';
import ProductsClientWrapper from '@/app/ui/Product/ProductsClientWrapper';

export const metadata = {
    title: 'Products | Search Application',
    description: 'Browse and search for products in our catalog',
};

export default async function ProductsPage({ searchParams }) {
    const params = await searchParams;
    const query = params?.q || '';

    const data = query
        ? await searchProducts(query)
        : await getAllProducts(20);

    const products = data.products || [];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
                <ProductsClientWrapper
                    initialProducts={products}
                    initialQuery={query}
                />
            </div>
        </div>
    );
}