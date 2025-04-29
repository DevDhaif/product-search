import { Suspense } from 'react';
import ProductsContent from '../ui/Product/ProductsContent';

export default function ProductsPage() {

    return (
        <Suspense fallback={
            <div className="container mx-auto px-4 py-8 flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        }>
            <ProductsContent />
        </Suspense>
    );
}