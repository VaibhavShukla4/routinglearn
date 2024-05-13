/** @format */
import Image from 'next/image';
import React from 'react';
import Img from '@/app/assets/img.png';
import { fetchProduct } from '@/app/Server/userApi';
import generateSitemap from '@/app/sitemap';

const Page = async ({ params }) => {
  const { id } = params;
  // console.log('Id ----->>>>>>>', id);
  const product = await fetchProduct(id);
  // await generateSitemap(id);
  console.log('Product --------->>>>>', product);

  return (
    <div>
      <h1>Product Categories</h1>
      <div>
        <h3>{product?.data.name}</h3>
      </div>
    </div>
  );
};

export default Page;
