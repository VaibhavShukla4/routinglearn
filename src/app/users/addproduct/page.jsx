/** @format */
'use client';
import { useToast } from '@/app/contexts/ToastContext/page';
import { useState } from 'react';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { addToast } = useToast();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const product = { name, price };

    const response = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
    console.log('Response ---->>>>>>>', response);
    // if (response.ok) {
    console.log('Product added!');
    addToast('This is a success message!', 'success');
    setName('');
    setPrice('');
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
