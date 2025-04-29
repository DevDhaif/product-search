const API_BASE_URL = 'https://dummyjson.com';

/**
 * search products by keyword
 */
export async function searchProducts(query = '') {
    try {
        const response = await fetch(`${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}`);

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        return response.json();
    } catch (error) {
        console.error('Error searching products', error);
        return []
    }
}


/**
 * get all products
 */
export async function getAllProducts(limit = 20) {
    try {
        const response = await fetch(`${API_BASE_URL}/products?limit=${limit}`);

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching all products', error);
        return [];
    }
}
/**
 * get a single product by ID
 */
export async function getProductById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);

        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error('Failed to fetch product');
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching product with id (${id}):`, error);
        return null;
    }
}