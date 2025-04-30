import { getProductById, getAllProducts } from '@/app/lib/api';
import ProductDetails from '@/app/ui/Product/ProductDetails';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const data = await getAllProducts(20);

    return (data.products || []).map((product) => ({
        id: product.id.toString(),
    }));
}

export async function generateMetadata({ params }) {
    const product = await getProductById(params.id);

    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }

    return {
        title: `${product.title} | Product Details`,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description,
            images: [
                {
                    url: product.thumbnail,
                    width: 800,
                    height: 600,
                    alt: product.title,
                },
            ],
        },
    };
}

export default async function ProductPage({ params }) {
    const product = await getProductById(params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
                <ProductDetails product={product} />
            </div>
        </div>
    );
}