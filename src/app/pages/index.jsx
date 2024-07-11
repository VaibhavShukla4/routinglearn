/** @format */
// pages/index.jsx
// 'use client';
import React from 'react';
import Layout from '@/app/users/layout'; // Assuming you have a Layout component
import Home from '@/app/users/home/page';
import { fetchAllProductIds } from '../Server/userApi';
const Page = async () => {
  let product = await fetchAllProductIds();
  // const { data } = props;
  console.log('product', product);
  return (
    <Layout>
      <Home product={product} />
    </Layout>
  );
};

export default Page;
