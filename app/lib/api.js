const getBaseUrl = () => {
    if (typeof window === 'undefined') {
        return 'http://localhost:3000';
    }
    return '';
};

/**
 * search products by keyword
 */
export async function searchProducts(query = '') {
    const API_BASE_URL = getBaseUrl();
    const response = await fetch(`${API_BASE_URL}/api/products/search?q=${encodeURIComponent(query)}`);

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
}

/**
 * get all products
 */
export async function getAllProducts(limit = 20) {
    const API_BASE_URL = getBaseUrl();
    const response = await fetch(`${API_BASE_URL}/api/products?limit=${limit}`);

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