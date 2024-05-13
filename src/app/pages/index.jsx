/** @format */
// pages/index.jsx
// 'use client';
import React from 'react';
import Layout from '@/app/users/layout'; // Assuming you have a Layout component
import Home from '@/app/users/home/page';

const Page = (props) => {
  const { data } = props;
  // console.log('Page', data);
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Page;
