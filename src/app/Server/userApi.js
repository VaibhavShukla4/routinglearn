/** @format */

// Assuming your local dev environment runs on 'http://localhost:3000'
// and you have an environment variable for production
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
console.log('baseUrl ----------->>>>>>>>>>>', baseUrl);
// Example of handling fetch in a way that ensures data is always iterable
const fetchProducts = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return []; // Return an empty array as fallback
  }
};

// Use this function in your sitemap generation logic

export const fetchProduct = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/api/products/${id}`);
    if (!response.ok) {
      console.error('Server responded with non-2xx status:', response.status);
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

// Assuming you have an API endpoint or a function that fetches all product IDs
export const fetchAllProductIds = async () => {
  // console.log('Api Called ------->>>>>>>>>>>');
  try {
    const response = await fetch(`${baseUrl}/api/products`);
    if (!response.ok) {
      console.error('Server responded with non-2xx status:', response);
      throw new Error('Failed to fetch products');
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    // return []; // Return an empty array as fallback
  }
};
