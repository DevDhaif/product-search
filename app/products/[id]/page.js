import { getProductById } from '@/app/lib/api';
import ProductDetails from '@/app/ui/Product/ProductDetails';

export const dynamicParams = true;

export async function generateMetadata({ params }) {
    const product = await getProductById(params.id);

    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }

    return {
        title: product.title,
        description: product.description,
    };
}

export default async function ProductPage({ params }) {
    const product = await getProductById(params.id);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
                <ProductDetails product={product} />
            </div>
        </div>
    );
}