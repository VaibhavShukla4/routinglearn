/** @format */

'use client';
import { useEffect, useState } from 'react';

export default function MyProfile() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://fakestoreapi.com/products/categories`);
      const data = await res.json();
      setPost(data[0]); // Assuming you want the first product for demonstration
    }

    fetchData();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
}
