const getBaseUrl = () => {
    if (typeof window === 'undefined') {
        if (process.env.VERCEL_URL) {
            return `https://${process.env.VERCEL_URL}`;
        }
        return 'http://localhost:3000';
    }
    return '';
};

/**
 * search products by keyword
 */
export async function searchProductsStatic(query = '') {
    const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`, {
        next: { revalidate: 3600 }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
}

/**
 * get a single product by ID
 */
export async function getProductById(id) {
    const API_BASE_URL = getBaseUrl();

    const response = await fetch(`${API_BASE_URL}/api/products/${id}`);

    if (!response.ok) {
        if (response.status === 404) {
            return null;
        }
        throw new Error('Failed to fetch product');
    }

    return response.json();
}

export async function getAllProductsStatic(limit = 20) {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}`, {
        next: { revalidate: 3600 }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
}
export async function getProductByIdStatic(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error(`Failed to fetch product: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
    }
}