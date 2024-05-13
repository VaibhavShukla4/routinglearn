/** @format */
'use client';
import { fetchAllProductIds } from '@/app/Server/userApi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

const Page = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetchAllProductIds(); // This should return an object including a 'product' array
      console.log('Response:', response); // This log should show the object structure
      if (response && response.data) {
        setProduct(response.data);
      } else {
        console.log('No products found:', response);
        setProduct([]); // Setting to an empty array if no products are found
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const router = useRouter();
  const singleProduct = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {product?.map(
          (
            item, // Make sure you are mapping over the 'product' state array
          ) => (
            <li key={item._id} onClick={() => singleProduct(item._id)}>
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Page;
